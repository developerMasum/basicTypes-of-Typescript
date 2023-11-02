// Spread and Rest Operator or Destructor 


// spread op
const home1:string[]= ['a','b','c','d'];
const home2:string[] = ['f','g','h','l','y'];
home1.push(...home2)

// rest op
const friendsGreetings = (...friends:string[])=>{
   friends.forEach(friend=> console.log(`hi ${friend}`)) 
}
