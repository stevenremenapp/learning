// this is object b
var b = {
    name: 'jay',
    say() { console.log(this) }
}


// this is window
var c = {
    name: 'jay',
    say() { return function() { console.log(this)}}
}

// this is object d
var d = {
    name: 'jay',
    say() { return () => console.log(this)}
}

//////////

const character = {
    name: 'Simon',
    getCharacter() {
      return this.name;
    }
  };

//   const giveMeTheCharacterNOW = character.getCharacter.bind(character);

  // OR TO BIND WITH ARROW FUNCTION

  const giveMeTheCharacterNOW = () => character.getCharacter();

  //How Would you fix this?
  //this should return 'Simon' but doesn't
  console.log('?', giveMeTheCharacterNOW());