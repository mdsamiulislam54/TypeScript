
class Users {
    // properties, constructors, and methods can be defined here
    userName: string
    userId:number;
    age: number;

    constructor (userName:string, userId:number,age:number){
        this.userName=  userName;
        this.userId = userId;   
        this.age = age;
    }

    displayUserInfo =  ()=>{
        console.log(`User Name: ${this.userName}, User ID: ${this.userId}, Age: ${this.age}`);
    }
}

const user1 = new Users("MD Samiul Islam", 101, 25);
const user2 = new Users("John Doe", 102, 30);
user1.displayUserInfo();
user2.displayUserInfo();