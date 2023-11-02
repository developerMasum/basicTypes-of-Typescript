// normal function 
function add(num1: number,num2:number) {
    return num1 +num2
    
}
add(3,4)

const addName = (firstName:string,lastName:string)=>{
    return firstName + lastName;
}
addName('josim','uddin')

// 
const poorMan = {
    name:'Masum',
    balance: 1000,
    addBalance(balance:number):number{
        return this.balance + balance ;
    }
}

const arr:number[] = [1,2,14,78]
const newArray:number[] = arr.map((e : number):number =>e*e)