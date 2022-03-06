url="https://web.skype.com/"
systemutil.Run "chrome",url

Browser("name:=Sign in to Skype").Sync

wait(3)

Browser("name:=Sign in to Skype").Page("title:=Sign in to Skype").Link("text:=Create one!").Click
Browser("name:=Create account").Page("title:=Create account").Link("text:=Use your email instead").Click
Browser("name:=Create account").Page("title:=Create account").WebEdit("xpath:=//INPUT[@id='MemberName']").Set "okobjectionkilled@gmail.com"
Browser("name:=Create account").Page("title:=Create account").WebButton("name:=Next").Click
Browser("name:=Create a password").Page("title:=Create a password").WebEdit("xpath:=//INPUT[@id='PasswordInput']").SetSecure "Hacker@4861"
Browser("name:=Create a password").Page("title:=Create a password").WebButton("name:=Next").Click

wait(30)

'Browser("name:=What's your name?").Page("title:=What's your name?").WebEdit("acc_name:=First name").Set "Aman"
'Browser("name:=What's your name?").Page("title:=What's your name?").WebEdit("acc_name:=Last name").Set "Ojha"
'Browser("name:=What's your name?").Page("title:=What's your name?").WebButton("name:=Next").Click
'Browser("name:=What's your birthdate?").Page("title:=What's your birthdate?").WebList("name:=Country").Select "India"
'Browser("name:=What's your birthdate?").Page("title:=What's your birthdate?").WebList("name:=BirthMonth").Select "April"
'Browser("name:=What's your birthdate?").Page("title:=What's your birthdate?").WebList("name:=BirthDay").Select "18"
'Browser("name:=What's your birthdate?").Page("title:=What's your birthdate?").WebNumber("name:=BirthYear").Set "1999"

code=Inputbox("Enter the code you recived on email")

wait(20)

Browser("name:=Enter code").Page("title:=Enter code").WebEdit("acc_name:=Enter code").Set code
Browser("name:=Enter code").Page("title:=Enter code").WebButton("name:=Next").Click
'Browser("name:=Add security info").Page("title:=Add security info").WebButton("name:=Next").Click
'Browser("name:=Add security info").Page("title:=Add security info").WebButton("acc_name:=image 2").Click


