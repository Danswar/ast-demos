import * as parser from '@babel/parser'

export const getJsonAstFromCode = (code: string) => {
  const ast = parser.parse(code)
  return JSON.stringify(ast)
}
