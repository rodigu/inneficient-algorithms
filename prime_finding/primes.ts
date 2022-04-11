function isPrime(n:number):boolean{
  const root = n**.5
	for (let c = 2; c <= root; c+=6)
    if (!(n%c) && !(n%(c+2))) return false
  return true
}

function test(){
  const start = Date.now()
  for (let k=1;k<530;k++)
  	isPrime(k)
  console.log((Date.now() - start)/100)
}

test()
