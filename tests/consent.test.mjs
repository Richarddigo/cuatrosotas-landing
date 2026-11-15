import { test, beforeEach } from 'node:test';
import assert from 'node:assert/strict';
import { hasAnalyticsConsent, chooseConsent } from '../src/hooks/useConsent.ts';

const values = new Map();
let failRead = false, failWrite = false, failRemove = false;
globalThis.window = {
  localStorage: {
    getItem: key => { if (failRead) throw new Error('Read denied'); return values.get(key) ?? null; },
    setItem: (key, value) => { if (failWrite) throw new Error('Write denied'); values.set(key, value); },
    removeItem: key => { if (failRemove) throw new Error('Remove denied'); values.delete(key); },
  },
  dispatchEvent: () => true,
};
beforeEach(() => { failRead = failWrite = failRemove = false; values.clear(); chooseConsent('unknown'); });

test('analytics checks the current decision after removal, corruption and rejection', () => {
  assert.equal(hasAnalyticsConsent(), false);
  chooseConsent('accepted');
  assert.equal(hasAnalyticsConsent(), true);
  values.delete('cuatrosotas-consent');
  assert.equal(hasAnalyticsConsent(), false);
  chooseConsent('accepted');
  values.set('cuatrosotas-consent', '{invalid}');
  assert.equal(hasAnalyticsConsent(), false);
  chooseConsent('rejected');
  assert.equal(hasAnalyticsConsent(), false);
});
test('failed rejection overrides a stale, readable accepted value', () => {
  chooseConsent('accepted');
  failWrite = true;
  chooseConsent('rejected');
  assert.equal(values.get('cuatrosotas-consent'), 'accepted');
  assert.equal(hasAnalyticsConsent(), false);
  assert.equal(hasAnalyticsConsent(), false);
  failWrite = false;
  chooseConsent('accepted');
  assert.equal(hasAnalyticsConsent(), true);
  values.delete('cuatrosotas-consent');
  assert.equal(hasAnalyticsConsent(), false);
});
test('failed preference reset overrides a stale accepted value', () => {
  chooseConsent('accepted');
  failRemove = true;
  chooseConsent('unknown');
  assert.equal(values.get('cuatrosotas-consent'), 'accepted');
  assert.equal(hasAnalyticsConsent(), false);
});
test('unavailable storage never opts in by itself and respects explicit tab choices', () => {
  failRead = failWrite = failRemove = true;
  assert.equal(hasAnalyticsConsent(), false);
  chooseConsent('accepted');
  assert.equal(hasAnalyticsConsent(), true);
  chooseConsent('rejected');
  assert.equal(hasAnalyticsConsent(), false);
});
