module.exports = function (plop) {
  plop.setGenerator('component', {
    description: 'Application Component Logic',
    prompts: [
      {
        type: 'list',
        name: 'type',
        message: 'Qual tipo de arquivo você precisa?',
        choices: ['Componente completo', 'Teste', 'Story', 'Estilo'],
        filter: (val) => {
          return val.toLowerCase()
        }
      },
      {
        type: 'input',
        name: 'name',
        message: 'Por favor digite o nome do componente base:'
      }
    ],
    actions: (data) => {
      const actions = []
      switch (data.type) {
        case 'test':
          actions.push({
            type: 'add',
            path: '../src/components/{{pascalCase name}}/{{pascalCase name}}.spec.tsx',
            templateFile: 'templates/test.tsx.hbs'
          })
          break
        case 'story':
          actions.push({
            type: 'add',
            path: '../src/components/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
            templateFile: 'templates/stories.tsx.hbs'
          })
          break
        case 'style':
          actions.push({
            type: 'add',
            path: '../src/components/{{pascalCase name}}/{{pascalCase name}}.style.ts',
            templateFile: 'templates/style.ts.hbs'
          })
          break

        default:
          actions.push(
            {
              type: 'add',
              path: '../src/components/{{pascalCase name}}/{{pascalCase name}}.tsx',
              templateFile: 'templates/index.tsx.hbs'
            },
            {
              type: 'add',
              path: '../src/components/{{pascalCase name}}/{{pascalCase name}}.spec.tsx',
              templateFile: 'templates/test.tsx.hbs'
            },
            {
              type: 'add',
              path: '../src/components/{{pascalCase name}}/{{pascalCase name}}.style.ts',
              templateFile: 'templates/style.ts.hbs'
            },
            {
              type: 'add',
              path: '../src/components/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
              templateFile: 'templates/stories.tsx.hbs'
            }
          )
          break
      }
      return actions
    }
  })
}
