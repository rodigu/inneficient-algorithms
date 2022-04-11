export function gcd(a:bigint,b:bigint):bigint{
	if (!a || !b) return 0n
	let t:bigint = a%b
	while (t!==0n){
		t = a%b;
		[a,b]=[b,t]
	}
  return a
}

function test(){
	console.log(gcd(66n,153n))
}
test()
