from numpy import sign

def lcm(a: int, b: int)->int:
	return int(abs(a * b) / gcd(a,b))

def gcd(a: int, b: int) -> int:
	if a == 0 or b == 0: return max(a,b)
	t:int = a%b
	while t != 0:
		t = a%b
		[a, b] = [b, t]
	return a

def modPow(base: int, exponent: int, mod: int) -> int:
	if mod == 1: return 0
	c: int = 1
	for e in range(exponent):
		c = (c * base) % mod
	return c

def isPrime(n: int) -> bool:
	if n == 1:
		return False
	root:int = int(n ** .5)
	for c in range(2, root + 1, 6):
		if not (n%c) and not (n%(c + 2)): return False
	return True

def test():
	print(modPow(133,47,51))

if __name__ == '__main__':
	test()
