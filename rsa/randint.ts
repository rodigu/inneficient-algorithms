export function randint(min:number,sum:number):bigint{
  return BigInt(Math.floor(min+Math.random()*sum))
}
