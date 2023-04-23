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


// Never type - cannot assign any value to a variable with a never type.
// The never type represents the return type of a function that always throws an error or a function that contains an indefinite loop.
function newmess(message: string): never{
    throw new Error(message)
}
let a: number = 1;
function loop(a: number): never{
        while(true){
            console.log(a);
    }
}

console.log(loop(a));
    
console.log(newmess("this is typescript"))

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

// merge two interface
interface MyBook {
    name: string;
    price: number;
}

interface MyBook {
    size: number;
}

// typescript merge the Property of same name interface
const mybook: MyBook = {
    name : "yogesh",
    price: 202,
    size: 20
}

// type and interface is same but merging is not work in type
type MyBook = {
    // Error : Duplicate identifier 'MyBook'.
}

// Unions (|)

function addition(a: number | string, b: number | string) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }
    throw new Error('Parameters must be numbers or strings');
}

type EmpID = number | string;

function printEmpID(id: EmpID) {
    // check if id is string or number and then apply string methods
    if(typeof id === 'string'){
        console.log(id.toUpperCase);
    } else{
        console.log(id);
    }
}

printEmpID('jhsdg7263'); // JHSDG7263

// rest Parameters (represents three dots (...args) and indefinite number of arguments as an array)
function foo(...args: number[]): number[] {
    return args;
}
console.log(foo(10,12,2))

function getTotal(...nums: number[]): number{
    let sum: number = 0;
    nums.forEach((n) => sum += n);
    return sum;
}

console.log(getTotal(1,2,3,4,5));

// wihtout rest Parameters
function getSum(nums: number[]): number{
    let sum: number = 0;
    nums.forEach((n) => sum += n);
    return sum;
}

const nums:number[] = [1,2,3,4,5];
console.log(getSum(nums))


// generics


