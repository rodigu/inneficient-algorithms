import { modPow } from './modPow.ts'
import { textToInt } from './textIntConversion.ts'
import { generateKeys } from './keyGen.ts'
import { getE } from './lambda.ts'

export function getCypherText(message:string, keys:{public:bigint}){
  const text_int = textToInt(message)
  
  return modPow(text_int, keys.public, )
}
