// eslint-disable-next-line
//@ts-ignore
module.exports = {
  roots: ["<rootDir>/src"],
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  testEnvironment: "node",
  globals: {
    "ts-jest": {
      diagnostics: {
        warnOnly: true
      }
    }
  },
  moduleNameMapper: {
    "\\.(css|sass)$": "identity-obj-proxy"
  },

  // Setup Enzyme
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts", "jest-canvas-mock"]
};
