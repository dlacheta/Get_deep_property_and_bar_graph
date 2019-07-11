const testObject = {
  person: {
    name: { first: "FirstName", middleInitial: "I", lastName: "LastName" }
  }
};
const testPath = "person.name.lastName";

const getDeepProperty = (object, path) => {
  const getNestedObject = (obj, arr) => {
    return arr.reduce(
      (el, key) => (el && el[key] !== "undefined" ? el[key] : undefined),
      obj
    );
  };

  const pathArray = path.split(".");
  const output = getNestedObject(object, pathArray);

  console.log(output);
};

getDeepProperty(testObject, testPath);
