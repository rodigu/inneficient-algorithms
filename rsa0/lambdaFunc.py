from aux import lcm, gcd
from random import randint

def getLambda(p: int, q: int, n: int) -> int:
	return lcm(p - 1, q - 1)

def getE() -> int:
	e: int = 2 ** 16 + 1
	return e

def getD(e: int, lambda_n: int) -> int:
	return pow(e, -1, lambda_n)
