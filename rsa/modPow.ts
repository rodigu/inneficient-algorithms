function modPow(base:bigint, exponent:bigint, modulus:bigint){
  if (modulus === 1) return 0
  let c = 1
  for (let e_prime = 0; e_prime < exponent; e_prime++)
      c = (c * base) % modulus
  return c
}
