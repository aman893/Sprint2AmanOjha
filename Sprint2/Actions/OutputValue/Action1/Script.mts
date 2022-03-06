OpenSkype
Login
Browser("name:=Skype").Page("title:=Skype").WebButton("acc_name:=More options").Click
Browser("name:=Skype").Page("title:=Skype").WebButton("acc_name:=Settings").Click
'Skype Id
id=Browser("name:=Skype").Page("title:=Skype").WebButton("acc_name:=Skype Name, live:.cid.137ae3ca40aeaad5").GetROProperty("name")
'Email
email=Browser("name:=Skype").Page("title:=Skype").WebButton("acc_name:=Email, okobjectionkilled@gmail.com").GetROProperty("name")
location=Browser("name:=Skype").Page("title:=Skype").WebButton("acc_name:=Location, churu, IN").GetROProperty("acc_name")
c=Split(location,",")
'Location
city=c(1)
bd=Browser("name:=Skype").Page("title:=Skype").Link("acc_name:=Birthday, 4/18/1999").GetROProperty("acc_name")
bday=Split(bd,",")
'Birthday
birthday=bday(1)
DataTable.ImportSheet "C:\Users\Administrator\Desktop\Sprint2\outputdata.xls", "Sheet1", "Global"
DataTable.Value("skypeid")=id
DataTable.Value("email")=email
DataTable.Value("location")=city
DataTable.Value("birthday")=birthday
DataTable.ExportSheet "C:\Users\Administrator\Desktop\Sprint2\outputdata.xls", "Global", "Sheet1"
