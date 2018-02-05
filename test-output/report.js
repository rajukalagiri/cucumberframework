$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/java/com/crm/qa/feature/login.feature");
formatter.feature({
  "line": 1,
  "name": "Crm login feature",
  "description": "",
  "id": "crm-login-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 2,
      "value": "#without example"
    },
    {
      "line": 3,
      "value": "#Scenario: free crm login scenario"
    },
    {
      "line": 4,
      "value": "#"
    },
    {
      "line": 5,
      "value": "#Given user is already on the Login Page"
    },
    {
      "line": 6,
      "value": "#When title of the is free crm"
    },
    {
      "line": 7,
      "value": "#Then enters \"rajukalagiri\" and \"Reddy@107326\""
    },
    {
      "line": 8,
      "value": "#Then is on homepage"
    },
    {
      "line": 9,
      "value": "#Then browser is closed"
    },
    {
      "line": 11,
      "value": "#with example"
    }
  ],
  "line": 12,
  "name": "free crm login scenario",
  "description": "",
  "id": "crm-login-feature;free-crm-login-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "user is already on the Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "title of the is free crm",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "is on homepage",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "clicks on contact page",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "clicks on new contact and enters \"\u003ctitle\u003e\" and \"\u003cfirstname\u003e\" and \"\u003clastname\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "browser is closed",
  "keyword": "Then "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "crm-login-feature;free-crm-login-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "title",
        "firstname",
        "lastname"
      ],
      "line": 24,
      "id": "crm-login-feature;free-crm-login-scenario;;1"
    },
    {
      "cells": [
        "rajukalagiri",
        "Reddy@107326",
        "Mr.",
        "raju",
        "kalagiri"
      ],
      "line": 25,
      "id": "crm-login-feature;free-crm-login-scenario;;2"
    },
    {
      "cells": [
        "naveenk",
        "test@123",
        "Mr.",
        "naveen",
        "k"
      ],
      "line": 26,
      "id": "crm-login-feature;free-crm-login-scenario;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 25,
  "name": "free crm login scenario",
  "description": "",
  "id": "crm-login-feature;free-crm-login-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "user is already on the Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "title of the is free crm",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "enters \"rajukalagiri\" and \"Reddy@107326\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "is on homepage",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "clicks on contact page",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "clicks on new contact and enters \"Mr.\" and \"raju\" and \"kalagiri\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "browser is closed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.loginTest()"
});
formatter.result({
  "duration": 5571022568,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.titleValidTest()"
});
formatter.result({
  "duration": 136800988,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "rajukalagiri",
      "offset": 8
    },
    {
      "val": "Reddy@107326",
      "offset": 27
    }
  ],
  "location": "LoginStepDefination.EnteruserPassTest(String,String)"
});
formatter.result({
  "duration": 4792854202,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.logintohomepageTest()"
});
formatter.result({
  "duration": 1158313476,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.clocksonContact()"
});
formatter.result({
  "duration": 696163208,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mr.",
      "offset": 34
    },
    {
      "val": "raju",
      "offset": 44
    },
    {
      "val": "kalagiri",
      "offset": 55
    }
  ],
  "location": "LoginStepDefination.newcontact(String,String,String)"
});
formatter.result({
  "duration": 3180567081,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.tearDown()"
});
formatter.result({
  "duration": 209759552,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "free crm login scenario",
  "description": "",
  "id": "crm-login-feature;free-crm-login-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "user is already on the Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "title of the is free crm",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "enters \"naveenk\" and \"test@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "is on homepage",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "clicks on contact page",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "clicks on new contact and enters \"Mr.\" and \"naveen\" and \"k\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "browser is closed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.loginTest()"
});
formatter.result({
  "duration": 4478402819,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.titleValidTest()"
});
formatter.result({
  "duration": 151771409,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "naveenk",
      "offset": 8
    },
    {
      "val": "test@123",
      "offset": 22
    }
  ],
  "location": "LoginStepDefination.EnteruserPassTest(String,String)"
});
formatter.result({
  "duration": 1489046423,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.logintohomepageTest()"
});
formatter.result({
  "duration": 1135983923,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.clocksonContact()"
});
formatter.result({
  "duration": 681505106,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mr.",
      "offset": 34
    },
    {
      "val": "naveen",
      "offset": 44
    },
    {
      "val": "k",
      "offset": 57
    }
  ],
  "location": "LoginStepDefination.newcontact(String,String,String)"
});
formatter.result({
  "duration": 2364172023,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.tearDown()"
});
formatter.result({
  "duration": 2119942997,
  "status": "passed"
});
});