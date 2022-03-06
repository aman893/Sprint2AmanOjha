OpenSkype
Login
DataTable.ImportSheet "C:\Users\Administrator\Desktop\Sprint2\TestData\CallDetails.xls", "Sheet1", "Global"
'Starting a new conversation
Browser("name:=Skype").Page("title:=Skype").WebButton("acc_name:=Start a conversation").Click

Browser("name:=Skype").Page("title:=Skype").WebEdit("acc_name:=Search").Set DataTable("Skype_id", dtGlobalSheet)
wait(2)

Browser("name:=Skype").Page("title:=Skype").WebElement("xpath:=//DIV[@data-text-as-pseudo-element='nirmal.rawat86']").Click
'Starting a video call
Browser("name:=Skype").Page("title:=Skype").WebButton("acc_name:=Video calling disabled. No camera found.").Click

wait(5)

'Ending a video call
Browser("name:=Skype").Page("title:=Skype").WebButton("acc_name:=End Call").Click
'Closing Browser
CloseBrowser
