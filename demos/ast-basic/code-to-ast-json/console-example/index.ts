import { getJsonAstFromCode } from '..'

const code = `
    const a = 'hello' + 'world';
`

const jsonAst = getJsonAstFromCode(code)

console.log(jsonAst)
