# PS-get-deep-property exercise

## Instructions

- Using vanilla javascript, create a function that gets the value of a property at a given path
- Example:
  - If given the object: {person: {name: {first: 'FirstName', middleInitial: 'I', lastName: 'LastName''}}}
  - And given the path: 'person.name.lastName'
  - The output would be: 'LastName'
  * Note this is just a simple example. Your function should work with any object that includes any value.
- After you complete the exercise, provide any notes on your code below such as how to run your example

## Candidate Notes:

To run this code, open command line, change path to this folder and enter command:

```ssh
node getDeepProperty.js
```

Default test object is: {person: {name: {first: 'FirstName', middleInitial: 'I', lastName: 'LastName'}}}

Default test path is: 'person.name.lastName'

To change default data for testing edit file `getDeepProperty.js`, change value of `testObject` and `testPath`, save the file and run this code on command line.