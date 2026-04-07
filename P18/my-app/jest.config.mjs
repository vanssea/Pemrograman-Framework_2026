import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
  dir: './',
})

const config = {
  testEnvironment: 'jsdom',
  modulePaths: ['<rootDir>/src/'],
  collectCoverage: true,
  // Focus coverage on modules exercised by current unit tests.
  collectCoverageFrom: [
    'src/pages/about/index.tsx',
    'src/pages/produk/index.tsx',
    'src/components/layouts/navbar/index.tsx',
    'src/views/product/index.tsx',
    'src/utils/swr/fetcher.ts',
  ],
  coverageThreshold: {
    global: {
      branches: 50,
      functions: 50,
      lines: 50,
      statements: 50,
    },
  },
}

export default createJestConfig(config)