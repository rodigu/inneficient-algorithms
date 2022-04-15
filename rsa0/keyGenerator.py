from aux import isPrime
from lambdaFunc import getLambda, getE, getD
from random import randint

def generateKeys(scale: int = 15):
	p = getPrime(scale)
	q = getPrime(scale)
	n = p * q

	l = getLambda(p,q,n)
	e = getE()
	d = getD(e, l)
	return {'secret': { 'p': p, 'q': q, 'l': l, 'key': d },
					'public': { 'n': n, 'e': e } }

def getPrime(scale: int) -> int:
	n: int = 1
	while not isPrime(n):
		n = randint(10**scale, 10**(1 + scale))
	return n
