package com.crm.qa.runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features="src\\main\\java\\com\\crm\\qa\\feature\\login.feature",
		glue= {"stepDefinitions"},
		format= {"pretty","html:test-output","json:json-output","junit:junit-output"},
		monochrome=true,
//		strict = true,
		dryRun=false	
		)
public class Testrunner {

}
