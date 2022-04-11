// Finding if n is prime using gcd
function gcd(a:number,b:number):number{
	if (!a || !b) return NaN
  if (a%b===0) return b
  return gcd(b,a%b)
}

function isPrime(n:number):boolean{
	if (!n||n===1) return false
	return new Array(n-1).fill(1).map((e,i)=>i+1).every((i)=>gcd(n,i)===1)
}

function test(){
  const start = Date.now()
  for (let k=1;k<1530;k++)
  	isPrime(k)
  console.log((Date.now() - start)/100)
}

test()
