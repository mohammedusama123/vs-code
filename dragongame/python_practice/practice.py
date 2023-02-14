list=["hello", "usama", 20]
for x in list:
    print(x)

name="mohammed usama"
age=21
qualification="B.Tech"
print(name, age, qualification)
#print(name+age+qualification)#as age is not a string hence we will not be able to concat

for i in range(1, 11):print(5, "*", i, "=", 5*i)#printing 5 table

inp_Name=input("Enter the name here :")#stores input as string
if inp_Name=="usama":
    print("have a nice day")
elif inp_Name=="mohammed":
    print("have a good day")
else:
    print("nice to meet you")

def isPrime(num):
    for i in range(2, num):
        if(num%i==0):
            print("Given number is not an prime number")
            break

        elif i==num-1:
            print("Given number is an prime number")

isPrime(359)
    

