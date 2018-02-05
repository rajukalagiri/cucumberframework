Feature: Crm login feature
#without example
#Scenario: free crm login scenario
#
#Given user is already on the Login Page
#When title of the is free crm
#Then enters "rajukalagiri" and "Reddy@107326"
#Then is on homepage
#Then browser is closed

#with example
Scenario Outline: free crm login scenario

Given user is already on the Login Page
When title of the is free crm
Then enters "<username>" and "<password>"
Then is on homepage
Then clicks on contact page
Then clicks on new contact and enters "<title>" and "<firstname>" and "<lastname>"
Then browser is closed


Examples: 
	| username    | password    | title | firstname | lastname|
	| rajukalagiri| Reddy@107326| Mr.   | raju      | kalagiri|
	| naveenk     | test@123    | Mr.   |naveen     | k       |