OpenSkype	
Login
DataTable.ImportSheet "C:\Users\Administrator\Desktop\Sprint2\TestData\CallDetails.xls", "Sheet1", "Global"
'Hosting a meeting using meet now 
Browser("name:=Skype").Page("title:=Skype").WebButton("acc_name:=Meet Now").Click
Browser("name:=Skype").Page("title:=Skype").WebButton("acc_name:=Host a meeting").Click

wait(10)

'Setting Metting Name
Browser("name:=Skype").Page("title:=Skype").WebEdit("xpath:=//INPUT[@dir='auto']").Set DataTable("MeetingTitle", dtGlobalSheet)
'Starting the meeting
Browser("name:=Skype").Page("title:=Skype").WebButton("acc_name:=Start Meeting").Click
'Leaving the meeting
Browser("name:=Skype").Page("title:=Skype").WebButton("acc_name:=End Call").Click
