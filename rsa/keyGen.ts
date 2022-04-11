import { isPrime } from './primality.ts'
import { randint } from './randint.ts'

export function generateKeys(scale = 15){
  let p = getPrime(scale)
  console.log('found p')
  let q = getPrime(scale)
  let n = p*q
  return { p, q, n }
}

function getPrime(scale:number):bigint{
  let n = 1n
  while (!isPrime(n))
    n = randint(10**scale,10**scale)
  return n
}

function test(){
  console.log(generateKeys(50))
}

test()
