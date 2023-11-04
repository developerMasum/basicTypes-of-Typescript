// 

// type of alias is used for premitive  and object also 
//  interface is used for objeect only



type User1 ={
    name : string;
    age: number;
}

interface User2 {
    name: string ;
    age: number
}

type UserWithRole1 = User1 & {role : string};
interface UserWithRole2  extends User2 {
    role: string;
}

const userBhai1:UserWithRole1 = {
    name:'josis',
    age:525,
    role: 'manager'
}
const userBhai2:UserWithRole2 = {
    name:'josis',
    age:525,
    role: 'user'
}

type Roll1 = number [];
interface Roll2{
    [index : number]:number
}

const rollNumber1:Roll1 = [1,2,11,24,487]