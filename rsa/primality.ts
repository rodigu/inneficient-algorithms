export function isPrime(n:bigint):boolean{
  if (n===1n) return false
  const root = Number(n)**.5
	for (let c = 2n; c <= root; c+=6n)
    if (!(n%c) && !(n%(c+2n))) return false
  return true
}
