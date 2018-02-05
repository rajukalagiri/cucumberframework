package stepDefinitions;

import org.junit.Before;
import org.openqa.selenium.By;

import com.crm.qa.base.TestBase;
import com.crm.qa.pages.ContactPage;
import com.crm.qa.pages.Homepage;
import com.crm.qa.pages.LoginPage;
import com.crm.qa.utiles.Utiles;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class LoginStepDefination extends TestBase {
	LoginPage lp;
	Homepage hp;
	ContactPage cp;
	
	@Given("^user is already on the Login Page$")
	public void loginTest()
	{
		initializtion();
		lp=new LoginPage();
	}
	@When("^title of the is free crm$")
	public void titleValidTest()
	{
		Assert.assertEquals(lp.validatePageTitle(),"#1 Free CRM for Any Business: Online Customer Relationship Software");
	}
	@Then("^enters \"(.*)\" and \"(.*)\"$")
	public void EnteruserPassTest(String user,String password)
	{
		
        hp=lp.loginClick(user, password);
	}
	@Then("^is on homepage$")
	public void logintohomepageTest()
	{
		Utiles.swithToFrame();
		cp=hp.onClickContacts();
	}
	@Then("^clicks on contact page$")
	public void clocksonContact()
	{
		cp=hp.onClickContacts();
	}
	
	@Then("^clicks on new contact and enters \"(.*)\" and \"(.*)\" and \"(.*)\"$")
	public void newcontact(String title,String firstname,String lastname) {
		cp.onClickNewContact();
		cp.createnewContact(title,firstname,lastname);
	}
	
	@Then("^browser is closed$")
	public void tearDown()
	{
		driver.close();
	}
	

}
