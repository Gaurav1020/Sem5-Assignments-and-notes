import numpy as np
import math
from Crypto.Util import number as crypt
import time
from tabulate import tabulate
# print(crypt.getPrime(3));
def egcd(a, b):
    if a == 0:
        return (b, 0, 1)
    g, y, x = egcd(b%a,a)
    return (g, x - (b//a) * y, y)
def modinv(a, m):
    g, x, y = egcd(a, m)
    if g != 1:
        raise Exception('No modular inverse')
    return x%m
x=crypt.getPrime(9);
y=crypt.getPrime(9);

print("Prime 1 (x): ",x,"\tPrime 2 (y): ",y,"\n")

n=x*y
print("x*y= ",n)
totient =(x-1)*(y-1)
i=3
while(math.gcd(i,totient)!=1):
    i+=1
e=i
print("e=",e," Phi=",totient,"\n")
d=modinv(e,totient)
#print("d =",d)
print("Public Key: ",n,",",e)
print("Private Key: ",n,",",d)
public_key=[n,e]
# print((e*d)%totient)
for q in range(3):
    P=str(input("Enter the word/sentence/paragraph to be encrypted:"))
    start_time = time.time()
    Original=[]
    print("Original")
    for character in P:
        character=ord(character)
        Original.append(character)
        print(character,end=" ")

    print("\n")
    #ENCRYPTION
    print(n,e,d)
    Encrypted=[]
    print("Encrypted")
    for a in Original:
        temp=(a**e)%n
        Encrypted.append(temp)
        print(temp,end="")
    print("\n")
    encrypt_time=time.time()
    print(encrypt_time-start_time)
    #DECRYPTION
    Decrypted=[]
    i=0
    print("Decrypted")
    for a in Encrypted:
        temp=(a**d)%n
        Decrypted.append(temp)
        # print(temp,end=" ")
        i+=1
    for a in Decrypted:
        print(chr(a),end="")
    decrypt_time=time.time()
    print(decrypt_time-encrypt_time)
    if(q==0):
        words=[1,P,encrypt_time-start_time,decrypt_time-encrypt_time]
    if(q==1):
        sentence=[2,P,encrypt_time-start_time,decrypt_time-encrypt_time]
    if(q==2):
        paragraph=[3,P,encrypt_time-start_time,decrypt_time-encrypt_time]
print(tabulate([words,sentence,paragraph], headers=["Sr. no.","Message", "Encryption Time","Decryption Time"]))
