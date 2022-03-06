OpenSkype
Login

DataTable.ImportSheet "C:\Users\Administrator\Desktop\Sprint2\TestData\CallDetails.xls", "Sheet1", "Global"
'Starting a conversation
Browser("name:=Skype").Page("title:=Skype").WebButton("acc_name:=Start a conversation").Click

Browser("name:=Skype").Page("title:=Skype").WebEdit("acc_name:=Search").Set DataTable("Skype_id", dtGlobalSheet)
wait(2)

Browser("name:=Skype").Page("title:=Skype").WebElement("xpath:=//DIV[@data-text-as-pseudo-element='nirmal.rawat86']").Click
 @@ script infofile_;_ZIP::ssf3.xml_;_
 @@ script infofile_;_ZIP::ssf4.xml_;_

'Schedule a new call

Browser("name:=Skype").Page("title:=Skype").WebButton("xpath:=//DIV[1]/DIV[1]/DIV[@role='none'][1]/DIV[@role='none'][2]/DIV[@role='none'][1]/DIV[@role='none'][1]/DIV[@role='none'][1]/DIV[@role='none'][2]/DIV[@role='none'][1]/DIV[@role='none'][1]/DIV[@role='none'][1]/DIV[@role='none'][2]/DIV[@role='none'][1]/DIV[@role='none'][1]/DIV[@role='none'][1]/DIV[@role='none'][1]/DIV[@role='none'][1]/DIV[@role='none'][2]/DIV[@role='none'][2]/DIV[@role='none'][1]/DIV[@role='none'][1]/DIV[@role='none'][2]/DIV[@role='none'][1]/DIV[@role='none'][2]/BUTTON[@role='button'][1]").Click @@ script infofile_;_ZIP::ssf1.xml_;_
Browser("name:=Skype").Page("title:=Skype").WebButton("xpath:=(//DIV[@role='button'])[18]").Click
Browser("name:=Skype").Page("title:=Skype").WebEdit("xpath:=(//INPUT[@dir='auto'])[3]").Set DataTable("CallTitle", dtGlobalSheet)
Browser("name:=Skype").Page("title:=Skype").WebEdit("xpath:=//INPUT[@type='date']").Set DataTable("Date", dtGlobalSheet)
Browser("name:=Skype").Page("title:=Skype").WebEdit("xpath:=//INPUT[@type='time']").Set DataTable("Time", dtGlobalSheet)
Browser("name:=Skype").Page("title:=Skype").WebButton("acc_name:=Send").Click




