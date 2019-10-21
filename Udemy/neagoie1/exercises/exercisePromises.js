// Solve the questions below:

// #1) Create a promise that resolves in 4 seconds and returns "success" string

let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("success!");
    }, 4000)
});

// #2) Run the above promise and make it console.log "success"

promise.then(resp => console.log(resp));

// #3) Read about Promise.resolve() and Promise.reject(). How can you make
// the above promise shorter with Promise.resolve() and console loggin "success"

Promise.resolve("success");

// #4) Catch this error and console log 'Ooops something went wrong'
Promise.reject(console.log('oops'));

// #5) Use Promise.all to fetch all of these people from Star Wars (SWAPI) at the same time.
// Console.log the output and make sure it has a catch block as well.
const urls = [
  'https://swapi.co/api/people/1',
  'https://swapi.co/api/people/2',
  'https://swapi.co/api/people/3',
  'https://swapi.co/api/peoplez/4'
]

Promise.all(urls.map(url => 
  fetch(url).then(people => people.json())
))
  .then(array => {
    console.log('1', array[0])
    console.log('2', array[1])
    console.log('3', array[2])
    console.log('4', array[3])
  })
  .catch(err => console.log("Error!", err));

// #6) Change one of your urls above to make it incorrect and fail the promise
// does your catch block handle it?