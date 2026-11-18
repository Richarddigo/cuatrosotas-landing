"use client";
import { useSyncExternalStore } from 'react';
type ConsentState = 'unknown' | 'accepted' | 'rejected';
const STORAGE_KEY = 'cuatrosotas-consent';
const CHANGE_EVENT = 'cuatrosotas:consent';
let tabConsent: ConsentState = 'unknown';
let failedWriteChoice: ConsentState | null = null;
function snapshot(): ConsentState {
  if (failedWriteChoice !== null) return failedWriteChoice;
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    // A later read failure may use only the last observed decision.
    tabConsent = stored === 'accepted' || stored === 'rejected' ? stored : 'unknown';
    return tabConsent;
  } catch {
    // Only a real read exception permits the explicit choice made in this tab.
    return tabConsent;
  }
}
function subscribe(notify: () => void) {
  const storageChanged = (event: StorageEvent) => {
    if (event.key === STORAGE_KEY || event.key === null) {
      tabConsent = 'unknown';
      failedWriteChoice = null;
      notify();
    }
  };
  window.addEventListener('storage', storageChanged);
  window.addEventListener(CHANGE_EVENT, notify);
  return () => {
    window.removeEventListener('storage', storageChanged);
    window.removeEventListener(CHANGE_EVENT, notify);
  };
}
export function chooseConsent(value: ConsentState) {
  tabConsent = value;
  try {
    if (value === 'unknown') window.localStorage.removeItem(STORAGE_KEY);
    else window.localStorage.setItem(STORAGE_KEY, value);
    failedWriteChoice = null;
  } catch {
    // An explicit refusal/reset wins over an old readable 'accepted' value.
    failedWriteChoice = value;
  }
  window.dispatchEvent(new Event(CHANGE_EVENT));
}
export function hasAnalyticsConsent() {
  return typeof window !== 'undefined' && snapshot() === 'accepted';
}
const serverSnapshot = (): ConsentState => 'unknown';
export function useConsent() {
  const consent = useSyncExternalStore(subscribe, snapshot, serverSnapshot);
  return { consent, accept: () => chooseConsent('accepted'), reject: () => chooseConsent('rejected'), reset: () => chooseConsent('unknown') };
}
