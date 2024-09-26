import { defineConfig } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';

const testDir = defineBddConfig({
    features: 'features/*.feature',
    steps: ['steps/*.steps.ts', 'steps/fixtures.ts']
});

export default defineConfig({
    testDir,
    reporter: 'html'
});