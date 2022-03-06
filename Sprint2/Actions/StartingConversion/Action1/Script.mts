'Calling Open_Skype and Login Functions from library file
Open_Skype
Login
'Starting a new conversation
DataTable.ImportSheet "C:\Users\Administrator\Desktop\Sprint2\TestData\CallDetails.xls", "Sheet1", "Global"

Services.StartTransaction "StartConversion"

BP1.WebButton(sc).Click

BP1.WebEdit(search).Set DataTable("Skype_Id", dtGlobalSheet)
BP1.WebElement(skypeid).WaitProperty "visible","True"
BP1.WebElement(skypeid).Click

'Sending a Message
BP1.WebEdit(ms).Set DataTable("Message", dtGlobalSheet)

BP1.WebButton(send).Click

'Generating Pass Report after sending message
Reporter.ReportEvent micPass,"Message Sent","A new conversation has been started and message has been sent successfully."

Services.EndTransaction "StartConversion"

'Closing the browser
Close_Browser
