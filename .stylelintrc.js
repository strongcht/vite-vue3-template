module.exports = {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-rational-order"
  ],
  overrides: [
    {
      files: ["**/*.less"],
      customSyntax: "postcss-less",
      "stylelint-config-recommended-vue"
    }
  ]
}