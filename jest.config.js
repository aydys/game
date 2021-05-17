module.exports = {
  clearMocks: true,
  coverageDirectory: "coverage",
  moduleDirectories: ["node_modules", "src"],
  moduleNameMapper: {
    "^@/(.*)": "<rootDir>/src/$1",
    "^@styled": "<rootDir>/src/components/styled",
    "^@utils": "<rootDir>/src/utils",
  },
};
