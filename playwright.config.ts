import { defineConfig } from '@playwright/test';

export default defineConfig({
    testDir: './tests',
    testMatch: '**/*.spec.ts',
    workers: 1,
    fullyParallel: false,
    retries: 0,
    reporter: 'list',
    use: {
        baseURL: 'http://localhost:3003',
        channel: 'chrome',
        viewport: { width: 1440, height: 1000 },
        reducedMotion: 'reduce',
        launchOptions: { chromiumSandbox: true },
        trace: 'retain-on-failure',
    },
    webServer: {
        command: 'npm run start -- --hostname localhost --port 3003',
        url: 'http://localhost:3003',
        reuseExistingServer: false,
    },
});
