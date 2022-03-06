'Calling Open_Skype and Login Functions from library file
Open_Skype
Login

DataTable.ImportSheet "C:\Users\Administrator\Desktop\Sprint2\TestData\CallDetails.xls", "Sheet1", "Global"

Services.StartTransaction "SharingFileContact"

'Starting a new conversation
BP1.WebButton(sc).Click

BP1.WebEdit(search).Set DataTable("Skype_Id", dtGlobalSheet)
BP1.WebElement(skypeid).WaitProperty "visible","True"
BP1.WebElement(skypeid).Click


'Sharing a contact
BP1.WebButton(SendContact).Click
BP1.WebButton(Contact).Click
BP1.WebButton(ButtonSendContact).Click

'Sharing a file
BP1.WebButton(SendFile).Click
BP1.WebFile("name:=WebFile").Set DataTable("Image", dtGlobalSheet)
BP1.WebButton(ButtonSendFile).Click

Services.EndTransaction "SharingFileContact"

'Closing Browser
Close_Browser
