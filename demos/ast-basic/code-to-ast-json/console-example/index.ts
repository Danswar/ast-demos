import { getJsonAstFromCode } from '../astFromCode'

const code = `
    const a = 'hello' + 'world';
`

const jsonAst = getJsonAstFromCode(code)

console.log(jsonAst)
