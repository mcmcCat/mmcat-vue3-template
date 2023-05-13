module.exports = {
  // 配置格式化提交信息的方式
  format: '{{type}}: {{subject}} {{body}}',
  // 可选类型
  types: [
    { value: 'feat', name: '✨ feat:     新功能' },
    { value: 'test', name: '✅ test:     增加测试' },
    { value: 'fix', name: '🐛 fix:      修复' },
    { value: 'docs', name: '📝 docs:    文档变更' },
    { value: 'style', name: '💄 style:    代码格式(不影响代码运行的变动)' },
    { value: 'efactor', name: '♻️  refactor: 重构(既不是增加feature，也不是修复bug)'},
    { value: 'perf', name: '⚡️ perf:     性能优化' },
    { value: 'chore', name: '🔧 chore:    改变构建流程、或者增加依赖库、工具等' },
    { value: 'revert', name: '⏪️ revert:   回退' },
  ],
  // 消息步骤
  messages: {
    type: '请选择提交类型(必填):',
    customScope: '请输入修改范围(可选):',
    subject: '请简要描述提交(必填):',
    body: '请输入详细描述(必填):',
    footer: '请输入要关闭的issue(可选):',
    confirmCommit: '确认使用以上信息提交？(y/n/e/h)'
  },
  // 关闭scope关键词
  scopes: [],
  allowCustomScopes: false,
  // 跳过问题
  skipQuestions: ['customScope', 'footer'],
  // subject文字长度限制默认是72
  subjectLimit: 72
}