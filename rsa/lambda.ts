import { lcm } from './lcm.ts'
import { gcd } from './gcd.ts'
import { randint } from './randint.ts'

export function lambda(args:{p:bigint,q:bigint,n:bigint}):bigint{
  const {p,q} = args
  return lcm(p-1,q-1)
}

export function getE(lambda_n:bigint):bigint{
  let e = randint(1,lambda_n - 1)
  while (gcd(e,lambda_n) !== 1) e = randint(1,lambda_n - 1)
  return e
}

export function getD(e,lambda_n){
  return modInverse(e,lambda_n)
}

function modInverse(a:bigint, m:bigint):bigint{
    for(let x = 1n; x < m; x++)
      if (((a % m) * (x % m)) % m == 1n)
          return x;
}
