'Calling Open_Skype and Login Functions from library file Skypefunctions.qfl
Open_Skype
Login

'Update Profile picture
With BP1
      .WebButton(UpdateProfile).Click
      .WebButton(UploadPhoto).Click
      .WebFile("name:=WebFile").Set DataTable("File_Path", dtGlobalSheet)	
End With


'Generating report after updating Profile Picture
Reporter.ReportEvent micDone,"Profile Picture Updated","The Profile Picture has been Updated Successfully"

With BP1
      .WebButton(Moreoptions).Click
      .WebButton(Settings).Click
      .Link(Yourprofile).Click
End With

B1.Sync
wait(3)
B1.Close
B2.Sync

With BP2
'Updating Profile details such as Name , Location , Bidthday ,Gender
.WebButton(Editprofile).Click

'Updating Name
.WebEdit(Name).Set DataTable("Name", dtGlobalSheet)

'Updating City
.WebEdit(City).Set DataTable("City", dtGlobalSheet)

'Updating State
.WebEdit(State).Set DataTable("State", dtGlobalSheet)

'Updating Country
.WebList(Country).Select DataTable("Country", dtGlobalSheet)

'Udating Birthday
.WebList(bdate).Select DataTable("Bdate", dtGlobalSheet)
.WebList(bmonth).Select DataTable("Birth_Month", dtGlobalSheet)
.WebList(byear).Select DataTable("Birth_Year", dtGlobalSheet)

'Updating Gender
.WebList(Gender).Select DataTable("Gender", dtGlobalSheet)

'Saving After Updating Profile
.WebButton(Save).Click

End With


'Generating Done Report After Updating Profile

'Using GetROProperty to get value of visible propery of an element
x=BP2.WebElement(feedback).GetROProperty("visible")

If x="True" Then
      Reporter.ReportEvent micDone,"Profile Updated","The profile has been updated successfully"	
End If

'Closing the browser
B2.Close
