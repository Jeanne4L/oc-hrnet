import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    coverage: {
      exclude: [
        '**/vite.config.*',
        '**/vitest.config.*',
        '**/src/App.tsx',
        '**/src/index.tsx',
        '**/src/routes.tsx',
        '**/src/hoc/**',
        '**/src/components/**',
        '**/src/constants/**',
        '**/src/helpers/**',
        '**/src/pages/parts/**',
        '**/src/services/api/getCities/helpers/**',
        '**/src/types/**',
        '**/src/*/types.ts',
        '**/src/*/*/types.ts',
        '**/src/*/*/*/types.ts',
        '**/*/styles/**',
      ],
    },
  },
});
