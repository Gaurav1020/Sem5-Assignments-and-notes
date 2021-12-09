import math
import time
p=59;
q=47;
n=p*q
phi =(p-1)*(q-1)
e=1
while(math.gcd(e,phi)!=1):
    e+=1
d=1
for i in range(3):
    input_string=str(input("Message: "))
    message=[]
    for j in input_string:
        j=ord(j)
        message.append(j)
    t1=time.time()
    print(n,e,d)
    encrypted_string=[]
    print("Encryption")
    for j in message:
        temp=(j**e)%n
        encrypted_string.append(temp)
        print(temp,end="")
    t2=time.time()
    print("\nEncryption Time: ",t2-t1)

    descrypted_string=[]
    print("Decryption")
    for j in encrypted_string:
        temp=(j**d)%n
        descrypted_string.append(temp)
    t3=time.time()
    print("Decryption Time: ",t3-t2)
    for j in descrypted_string:
        print(chr(j),end="")
    print("\n")