module.exports = {
  extends: ['./index'],
  prompt: {
    settings: {},
    messages: {
      skip: '可跳过',
      max: '最多 %d 个字符',
      min: '最低 %d 个字符',
      emptyWarning: '不能为空',
      upperLimitWarning: '超出限制',
      lowerLimitWarning: '低于限制',
    },
    questions: {
      type: {
        description: '选择您要提交的更改类型',
        enum: {
          feat: {
            description: '一个新功能/新特性',
            title: '新功能',
            emoji: '✨',
          },
          fix: {
            description: '一个错误修复',
            title: 'Bug 修复',
            emoji: '🐛',
          },
          docs: {
            description: '仅仅更改了文档',
            title: '文档',
            emoji: '📚',
          },
          style: {
            description: '不影响代码含义的更改（空格、格式、缺少分号等）',
            title: '代码风格',
            emoji: '💎',
          },
          refactor: {
            description: '既不修复错误也不添加功能的代码更改',
            title: '代码重构',
            emoji: '📦',
          },
          perf: {
            description: '提高性能的代码更改',
            title: '性能改进',
            emoji: '🚀',
          },
          test: {
            description: '添加缺失的测试或更正现有测试',
            title: '测试',
            emoji: '🚨',
          },
          build: {
            description:
              '影响构建系统或外部依赖项的更改（示例范围：gulp、broccoli、npm）',
            title: '构建',
            emoji: '🛠',
          },
          ci: {
            description:
              '更改我们的 CI 配置文件和脚本（示例范围：Travis、Circle、BrowserStack、SauceLabs）',
            title: '持续集成',
            emoji: '⚙️',
          },
          chore: {
            description: '未修改源代码及测试文件的其他变动',
            title: '其它',
            emoji: '♻️',
          },
          revert: {
            description: '恢复以前的提交',
            title: '回滚',
            emoji: '🗑',
          },
        },
      },
      scope: {
        description: '此更改的范围是什么（例如组件或文件名）',
      },
      subject: {
        description: '写一个简短的、命令式的变化描述',
      },
      body: {
        description: '提供更详细的更改说明',
      },
      isBreaking: {
        description: '有任何重大变化吗？',
      },
      breakingBody: {
        description: '一个破坏性的变化提交，需要一个更加详细的描述与说明',
      },
      breaking: {
        description: '描述重大变化',
      },
      isIssueAffected: {
        description: '此更改会影响任何未解决的问题（issues）吗？',
      },
      issuesBody: {
        description: '如果问题（issues）关闭，则需要一个更加详细的描述与说明',
      },
      issues: {
        description: '添加问题（issues）引用（例如“fix #123”、“re #123”。）',
      },
    },
  },
};
