from encrypt import *
from keyGenerator import *

def test() -> None:
	bob = generateKeys(1)
	print("Bob's keys: ", bob)
	alice = generateKeys(1)
	print("Alices keys: ", alice)

	print('-------')

	message = input("Alice's message to Bob: ")
	encrypted_message = encrypt(message, bob['public'])
	print("Encrypted message: ", encrypted_message)

	print('-------')

	decrypted_message = decrypt(encrypted_message, bob['secret'])
	print("Decrypted message: ", decrypted_message)

if __name__ == '__main__':
	test()
