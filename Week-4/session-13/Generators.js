// Define a generator function that takes a list as its parameter
function* generator(list) {
    // Iterate over each item in the list
    for (item of list) {
      // Create a unique symbol for each item in the list
      let itemSymbol = Symbol(item);
      // Yield the symbol, pausing the generator's execution and returning the yielded value
      yield itemSymbol;
    }
  }
  
  // Create an input list with three strings
  let inputList = ['hello', 'world', 'test'];
  
  // Create an iterator generator object by invoking the generator function with the input list
  let iteratorGeneratorObject = generator(inputList);
  
  // Retrieve and print the values yielded by the iterator generator object
  console.log(
    iteratorGeneratorObject.next().value, // Print the value of the first yielded symbol
    iteratorGeneratorObject.next().value, // Print the value of the second yielded symbol
    iteratorGeneratorObject.next().value  // Print the value of the third yielded symbol
  );
// 1 The yield keyword is used inside the generator function to pause the execution of the generator and
// return a value.

// 2 When the generator function is invoked, it returns an iterator object. This iterator object 
// has a next() method that can be called to resume the execution of the generator.

// 3 Each time the next() method is called on the iterator, the generator function resumes its 
//execution until it encounters a yield statement.

//4 The yield statement causes the generator to pause and return the yielded value as the value 
//property of the object returned by next(). This allows the caller to consume the yielded value.

// 5.Upon the next call to next(), the generator function resumes execution from where it left off, 
//remembering its previous state.

//6. In the provided code, the generator function yields a unique symbol for each item in the input list, 
//pausing after each yield. The yielded symbol is accessed through the value property of the object returned by next().