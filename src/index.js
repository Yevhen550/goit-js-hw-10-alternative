let globalVariable; // undefined

// Initializing data fetching
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => {
    console.log('users inside then callback: ', users);

    // Writing the result to a global variable
    globalVariable = users;

    // Everything is ok here, the data is in the variable
    console.log('globalVariable inside fetch callback: ', globalVariable);
  });

// No async data here
console.log('globalVariable outside fetch: ', globalVariable); // undefined
