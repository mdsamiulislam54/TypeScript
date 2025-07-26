class Users {
  // properties, constructors, and methods can be defined here
  userName: string
  userId: number
  age: number
  constructor (userName: string, userId: number, age: number) {
    this.userName = userName
    this.userId = userId
    this.age = age
  }
  displayUserInfo = () => {
    console.log(
      `User Name: ${this.userName}, User ID: ${this.userId}, Age: ${this.age}`
    )
  }
}

const user1 = new Users('MD Samiul Islam', 101, 25)
user1.displayUserInfo()

// inheritance example
class Admin extends Users {
    adminId : number;
    constructor(userName: string, userId: number, age:number, adminId: number) {
       super(userName,userId, age);
       this.adminId = adminId;
    }
    displayAdminInfo = () => {
        console.log(
            `Admin Name: ${this.userName}, Admin ID: ${this.adminId}, Age: ${this.age}`
        );
    }
};

const admin1 = new Admin ('Admin User', 201, 30, 10230181);
admin1.displayAdminInfo()