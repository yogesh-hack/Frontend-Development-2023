'use strict'

class Program {
//   creating a contructor in which write a message
    constructor(){
        this.message = 'hello es6 : ';
    }
//   creating a print method
  print() { 
//     after 1 sec message show on console and run again 
    setTimeout( () => {
      console.log(this.message);
      this.print();
    },Math.random() * 1000);
  }
}

// call the print methods from class
new Program().print()
