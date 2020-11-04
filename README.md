# Unit Testing Workshop
This project is created by Milan Steenwinkel for a workshop at Incentro Interactive and is free to be used by anyone who wishes to practice unit testing in Angular. <br>
The code in the project is intended to give varied examples of testable code, but **not** production worthy feature-code. 

Before running the project, make sure to run ```npm install```<br>
Run the project with ```ng Serve```, run tests with ```ng test```

If you get stuck, ask a colleague, me (Milan) or check the Angular docs (https://angular.io/guide/testing) for hints.
# Now for the fun part
### Exercise 1, Component Testing
Components take up a big part of angular applications and usually contain the most diverse logic.
To start, open the **_components/age-test_** component.ts and .spec files and follow the steps.

In this file you will learn:

* Testing invalid/valid states of a form.
* Mocking and validating a call to a service.
* Testing dynamic CSS of a component.
* Testing a basic calculation method.
* Testing a subscription to a **subject** in another file/service.


### Exercise 2, Testing a (HTTP) service
Services are often (but not exclusively) used as a gateway between components and a backend system. <br>
For this exercise, the service is responsible for calling upon an API to do various things with a list of persons.<br>

The model for a person is found in ```models/person.ts``` <br>
To start, open the file ```services/person.service.ts``` and ```services/person.service.spec.ts``` <br>

In this file you will learn:
* To mock HTTP Calls
* To test HTTP errors
* To test data that is modified and/or filtered by RXJS operators
