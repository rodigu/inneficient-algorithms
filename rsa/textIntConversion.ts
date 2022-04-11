
export function textToInt(text:string):bigint{
  return BigInt([...text].map((c)=>{
    const char = charToInt(c)
    if (char.length > 3) throw `Invalid character: ${char}, ${c}`
    return char
  }).join(''))
}

function charToInt(char:string, offset = 100):number{
  return char.charCodeAt(0) + offset
}

function intToChar(int:number, offset = 100):string{
  return String.fromCodePoint(int - offset)
}
