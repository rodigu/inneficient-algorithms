from random import randint

def intToText(number: int) -> str:
	prev_i = 0
	str_number = str(number)
	txt = ''
	for i in range(3, len(str_number) + 1, 3):
		current_id = str_number[prev_i:i]
		txt += intToChar(int(current_id))
		prev_i += 3
	return txt

def textToInt(text: str) -> int:
	return int(''.join([charToInt(c) for c in text]))

def charToInt(char: str, offset: int = 100) -> str:
	return str(ord(char) + offset)

def intToChar(integer: int, offset: int = 100) -> str:
	return chr(integer - offset)

def test():
	txt = textToInt(input('textToInt: '))
	print(txt, type(txt))
	print(intToText(txt), type(txt))

if __name__ == '__main__':
	test()
