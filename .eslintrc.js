module.exports = {
  parser: "babel-eslint",
  extends: "airbnb-base",
  rules: {
    indent: ["warn", 4]
  },
  overrides: [
    {
      files: ["src/**/*.test.js"],
      rules: {
        "import/no-extraneous-dependencies": "off",
        "global-require": "off"
      },
      env: {
        browser: false,
        jest: true
      }
    }
  ]
};
