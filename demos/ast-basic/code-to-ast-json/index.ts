const parser = require('@babel/parser')

const code = `
    const a = 'hello' + 'world';
`

const ast = parser.parse(code)

console.log(ast)
