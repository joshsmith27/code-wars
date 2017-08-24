// Caution: This kata does not currently have any known supported versions for JavaScript. It may not be completable due to dependencies on out-dated libraries/language versions.
// The code provided is supposed return a person's Full Name given their first and last names.
//
// But it's not working properly.
//
// Notes
//
// The first and/or last names may be empty.
//
// Task
//
// Fix the bug so we can all go home early.

class Dinglemouse{

  constructor( firstName, lastName ){
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName(){
    if(!this.firstName){
      return this.lastName;
    }else if(!this.lastName){
      return this.firstName;
    }else{
      return this.firstName+" "+this.lastName;
    }
  }

}

//best answer;
class Dinglemouse{

  constructor( firstName, lastName ){
    this.firstName = firstName;
    this.lastName  = lastName ;
  }

  getFullName(){
    return [this.firstName, this.lastName].filter(e=>e).join(' ');
  }

}
