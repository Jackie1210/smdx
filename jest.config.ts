import type { Config } from 'jest'

const config: Config = {
  preset: 'solid-jest/preset/node',
  verbose: true,
  testEnvironment: 'node',
  testRegex: '/tests/.*\\.spec\\.tsx?$',
  extensionsToTreatAsEsm: ['.ts', '.tsx', '.jsx'],
  moduleNameMapper: {
    '^smdx$': '<rootDir>/packages/smdx/src/index.ts'
  },
  transform: {},
  moduleDirectories: ['node_modules'],
  transformIgnorePatterns: ['<rootDir>/node_modules/.pnpm/(?!(.*)@)',]
}

export default config
