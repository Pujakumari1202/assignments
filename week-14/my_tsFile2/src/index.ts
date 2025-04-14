// complex object we can defined by interface 
interface User {
    name: string;
    age: number;
    address : {
        city: string;
        country: string;
        pincode : number;
    };
}

//this user has  type User
let user: User ={
    name:"puja",
    age: 22,
    address: {
        city:"kolkata",
        country: "india",
        pincode :700044
    }
}

//this take user as input and return a boolean
function isLegal (user: User): boolean {
    if(user.age >= 18){
        return true 
    }else {
        return false
    }
}


//call that function with the user 
const ans=isLegal(user);
if(ans){
    console.log("I am legal");
}else {
    console.log("I am illegal")
}
