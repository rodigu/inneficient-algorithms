import { gcd } from './gcd.ts'

export function lcm(a:bigint,b:bigint):bigint{
  return (a * b * Math.sign(Number(a * b))) / gcd(a,b)
}
