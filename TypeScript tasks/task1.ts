var burger: string = 'hamburger',     // String 
calories: number = 300,           // Numeric
tasty: boolean = true;            // Boolean

// Alternatively, you can omit the type declaration:
// var burger = 'hamburger';

// The function expects a string and an integer.
// It doesn't return anything so the type of the function itself is void.

function speak(food: string, energy: number): void {
console.log("Our " + food + " has " + energy + " calories.");
}

speak(burger, calories);



//Task3 
//a)

interface IBOOK{

    title: string;
    author: string;
    published: Date;
    pages: number;


}


//b)
var book1 = {
    title: "Sapien - en kort historie om menneskeheden",
    author: "Yuval Noah Hariri",
    published: new Date(),
    pages: 430

}
function testBook(book: IBOOK): void{
console.log("Printing book information:");
console.log(book.title);
console.log(book.author);
console.log(book.published);
console.log(book.pages);


}

testBook(book1);



//c)
// "If it walks like a duck and it quacks like a duck, then it must be a duck." 


//4 a)

interface myFunc {

    (str1: string,str2: string,str3: string): Array<string>;
}


//b
let strToArray: myFunc;

strToArray= function(str1: string, str2: string, str3: string){

return[str1,str2,str3];

}


console.log(strToArray("Lionel","God","Messi"));

//c
let strToUpperCase: myFunc;

strToUpperCase= function(str1: string, str2: string, str3: string){



    return [str1.toUpperCase(),str2.toUpperCase(),str3.toUpperCase()];
}

console.log(strToUpperCase("Lionel","God","Messi"));



//d
let f2 = function logger(f1: myFunc){
    //Simulate that we get data from somewhere and uses the provided function
    let [ a, b, c] = ["a", "b", "C"];
    console.log(f1(a,b,c));
}


f2(strToArray);
f2(strToUpperCase);





//CLASSES


class Menu {
    // Our properties:
    // By default they are public, but can also be private or protected.
    items: Array<string>;  // The items in the menu, an array of strings.
    pages: number;         // How many pages will the menu be, a number.
  
    // A straightforward constructor. 
    constructor(item_list: Array<string>, total_pages: number) {
      // The this keyword is mandatory.
      this.items = item_list;    
      this.pages = total_pages;
    }
  
    // Methods
    list(): void {
      console.log("Our menu for today:");
      for(var i=0; i<this.items.length; i++) {
        console.log(this.items[i]);
      }
    }
  
  } 
  
  // Create a new instance of the Menu class.
  var sundayMenu = new Menu(["pancakes","waffles","orange juice"], 1);
  var mexMondayMenu = new Menu(["Nanchos","Tacos","jalapenos juice"], 1);
  // Call the list method.
  sundayMenu.list();
  mexMondayMenu.list();

  //inheritence
  class HappyMeal extends Menu {
    // Properties are inherited
  
    // A new constructor has to be defined.
    constructor(item_list: Array<string>, total_pages: number) {
      // In this case we want the exact same constructor as the parent class (Menu), 
      // To automatically copy it we can call super() - a reference to the parent's constructor.
      super(item_list, total_pages);
    }
  
    // Just like the properties, methods are inherited from the parent.
    // However, we want to override the list() function so we redefine it.
    list(): void{
      console.log("Our special menu for children:");
      for(var i=0; i<this.items.length; i++) {
        console.log(this.items[i]);
      }
  
    }
  }
  
  // Create a new instance of the HappyMeal class.
  var menu_for_children = new HappyMeal(["candy","drink","toy"], 1);
  
  // This time the log message will begin with the special introduction.
  menu_for_children.list();



  //Generics!

  // The <T> after the function name symbolizes that it's a generic function.
// When we call the function, every instance of T will be replaced with the actual provided type.

// Receives one argument of type T,
// Returns an array of type T.

function genericFunc<T>(argument: T): T[] {    
    var arrayOfT: T[] = [];    // Create empty array of type T.
    arrayOfT.push(argument);   // Push, now arrayOfT = [argument].
    return arrayOfT;
  }

  console.log("Generics");
  
  var arrayFromString = genericFunc<string>("beep");
  console.log(arrayFromString[0]);         // "beep"
  console.log(typeof arrayFromString[0])   // String
  
  var arrayFromNumber = genericFunc(42);
  console.log(arrayFromNumber[0]);         // 42
  console.log(typeof arrayFromNumber[0])   // number





  //Modules
  console.log("Modules:");

  import sayHi = require('./exporter');
  sayHi();




  