// typescript is superset of javascript
// typescript is typed javascript programming language
// typescript is compiled into javascript for production.

function add(num1: number, num2: number){
    return num1 + num2;
}

console.log(add(3,5)) // 8

// <h1>Hello TypeScript</h1>
// type of <h1> tag => heading: HTMLHeadingElement | null
const heading = document.querySelector('h1'); 

// Type Alias -> use for create custom type (struct in c or class in java/python) 
// number
// boolean
// string[] or number[]
// string

type User = {
    name: string;
    age: number;
    // add optional address property in this type , then use (?)
    address? : string; // mean either string type or undefinesd typed
}

const user:User = {
    name: "yogesh",
    age : 20
}

// login function return the string type output
const login = (userdata: User): string => {
    return `Logined user data is ${userdata}`;
}

const data = {
    name : "yogesh",
    age : 21,
    address : "dehli" 
}

console.log(login(data));

// {name: "yogesh",age: 21, address: "dehli"} -> Duck typing
console.log(login({name: "yogesh",age: 21, address: "dehli"}));

type ID = number | string;

const Userdata: ID = 131; // number
const UserD: ID = '131'; // string


// Interface - shape of objects
// we create interface Transaction in which payer(sender) and payee(reciever)
interface Transaction {
    payerAccountNumber : number;
    payeeAccountNumber : number;
}
const transaction1: Transaction = {
    payerAccountNumber : 97838624,
    payeeAccountNumber : 42663573,
}
const transaction2: Transaction = {
    payerAccountNumber : 9723454,
    payeeAccountNumber : 4268373,
}
const transaction3: Transaction = {
    payerAccountNumber : 934624,
    payeeAccountNumber : 4125463,
}
// create one more interface BackAccount of each user in which user's data
interface BankAccount {
    accountNumber : number;
    accountHolder : string;
    balance : number;
    isActive : boolean;
    transaction : Transaction[];
}

const bankaccount: BankAccount = {
    accountNumber : 39791283,
    accountHolder : "yogesh",
    balance : 36000,
    isActive : true,
    transaction : [transaction1, transaction2, transaction3]
}

// reuse the code or remove duplicates by using extends keyword

interface Book {
    name: string;
    price: number;
}

// name and price is repeat Book and Ebook both
// interface Ebook {
//     name: string;
//     price: number;
//     format : string;
// }

// so we reuse the property of Book in Ebook
interface Ebook extends Book {
    format: string;
}

const book: Ebook = {
    name: "yogesh",
    price: 250,
    format: 'PDF'
}

console.log(book);








