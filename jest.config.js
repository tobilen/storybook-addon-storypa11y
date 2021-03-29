module.exports = {
  testRunner: "jest-circus/runner",
  cacheDirectory: ".cache/jest",
  clearMocks: true,
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__setup__/fileMock.js",
    "\\.(css|scss)$": "<rootDir>/__setup__/styleMock.js",
    "\\.(md)$": "<rootDir>/__setup__/htmlMock.js",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "json", "jsx"],
  testPathIgnorePatterns: ["/node_modules/", "/dist/"],
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["./__setup__/jest.init.ts"],
  setupFiles: ["raf/polyfill"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  testURL: "http://localhost",
};
