module.exports = {
  // 环境，可用的全局变量
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    //将启用所有标记为“推荐”的规则（eslint官方）
    "eslint:recommended",
    // "plugin:vue/vue3-recommended",
    "plugin:vue/vue3-essential",
    // "plugin:vue/essential",  vue2版本
    // "plugin:@typescript-eslint/recommended",
    "standard-with-typescript",
    "plugin:prettier/recommended", //关闭eslint和prettier 相冲突的规则。赋予 eslint 用 prettier 格式化文档的功能。
    "prettier", //放最后
  ],
  parser: "vue-eslint-parser", //指定vue文件解析器，解决报错 Parsing error: Unexpected token )
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    parser: "@typescript-eslint/parser",
    project: ["./tsconfig.json"], // 让ESLint 可以获取到项目中的 TypeScript 类型信息，包括类型定义和类型检查结果。
    extraFileExtensions: [".vue"], // 这个配置的作用就是告诉 @typescript-eslint/parser 把 .vue 文件也做为 TypeScript 脚本来解析。(对于内嵌ts的vue文件)
  },
  rules: {
    "no-irregular-whitespace": "error", // 不合法空格
    "prettier/prettier": "error", // 让代码文件中不符合prettier格式化规则的都标记为错误
    "arrow-body-style": "off", // 箭头函数的函数体规则（官方冲突默认不可解决，选择关闭）
    "prefer-arrow-callback": "off", // 检测可以转换为箭头函数的函数（官方冲突默认不可解决，选择关闭）
    // '@typescript-eslint/no-var-requires': 0, // 0关闭规则，1警告，2错误
    "@typescript-eslint/no-empty-function": 1, //空函数，defineProps时会用到
    "vue/multi-word-component-names": 1,
  },
};
