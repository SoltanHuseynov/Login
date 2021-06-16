#create to an account
#statr index.js
import os
import json
import hashlib


value={
    "id":0,
    "username":"",
    "password":"",
    "port":8080
}

class CreatAccount():
    def __init__(self):
        self.value=value
    def Create(self):
        username=input("Create the username:")
        password=input("Create the password:")
        user=hashlib.md5(username.encode())
        passw=hashlib.md5(password.encode())
        file1=open("Data/dat.json","w")
        #add the values in json file
        if(len(username)<=8 and len(password)<=8):
            self.value["username"]=user.hexdigest()
            self.value["password"]=passw.hexdigest()
            #id
            self.value["id"]=1212
            JSON=json.dumps(self.value)
            file1.write(JSON)
            return self.value
        else:
            print("Please entry with 8 carakter")
        

#terminal display
def display(account):
    print("""
        Continue with the old account:"Next" or 
        create a new account
    
        [1] Create new account
        [2] Next-->old account
    """)

    while(True):
        cmd=input("Entry:")
        if(int(cmd)==1):
          account.Create()
          break
        if(int(cmd)==2):
          break
        else:
            print("You write please smooth number")

#entry the Account and the Server
account=CreatAccount()
file=open("Data/dat.json","r")

def process():
    getJson=json.loads(file.read())
    if(getJson["id"]==1212):
        display(account)
        os.system("node index.js")
    else:  
        account.Create()
        os.system("node index.js")
try:
   process()
except ValueError:
   print("Values in json file not found")
