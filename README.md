# Unit Testing Workshop
**Author: Milan Steenwinkel**<br><br>
This project is created for training purposes and is free to be
used by anyone who wishes to practice unit testing in Angular. <br>
The code in the project is intended to give varied examples of testable code, 
but **not** production worthy feature-code. 

Before running the project, make sure to run ```npm install```<br>
Run the project with ```ng Serve```, run tests with ```ng test```

# Now for the fun part
### Exercise 1, Component Testing (together)
Components take up a big part of angular applications and usually contain the most diverse logic.
To start, open the **_components/age-test_** component.ts and .spec files and follow the steps.

In this file you will learn:

* Testing invalid/valid states of a form.
* Mocking and validating a call to a service.
* Testing dynamic CSS of a component.
* Testing a basic calculation method.
* Testing a subscription to a **subject** in another file/service.


### Exercise 2, Testing a (HTTP) service (together & individual)
Services are often (but not exclusively) used as a gateway between components and a backend system. <br>
For this exercise, the service is responsible for calling upon an API to do various things with a list of persons.<br>

The model for a person is found in ```models/person.ts``` <br>
To start, open the file ```services/person.service.ts``` and ```services/person.service.spec.ts``` <br>

In this file you will learn:
* To mock HTTP Calls
* To test HTTP errors
* To test data that is modified and/or filtered by RXJS operators

### Exercise 3, Component testing basics (individual)
To start, open the **_components/person-table_** component.ts and .spec files.
In this file you will write tests for:

* Calling methods from a service for
    * Getting data
    * Deleting data
    
### Exercise 4, Component testing Form (individual)
To start, open the **_components/add-person_** component.ts and .spec files.
In this file you will write tests for:

* Validating logic for a form.
* Toggling visibility.
* Submitting data to a service
* Showing a message on successful submit
