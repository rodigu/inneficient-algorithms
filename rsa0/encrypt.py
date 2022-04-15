from textConversion import textToInt, intToText
from aux import modPow

def encrypt(message: str, receiver) -> int:
	int_message = textToInt(message)
	n: int = receiver['n']
	e: int = receiver['e']
	cypher = modPow(int_message, e, n)
	print('e',int_message)
	return cypher

def decrypt(cypher: int, receiver):
	d = receiver['key']
	int_message = cypher ** d
	print('d',int_message)
	message = intToText(int_message)
	return message
