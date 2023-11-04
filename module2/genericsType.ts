// generics of array which is dynamic  

type GeneticsArray <T> = Array <T>

const names:GeneticsArray<string> = ['alu','balu','khalu']
const ages:GeneticsArray<number> = [14,58,4889,44,145,12]
const booleanArr:GeneticsArray<boolean> = [true,false,true,true];



const user100:GeneticsArray<{name:string, age:number}> = [
    {
        name:'Meena',
        age: 100
    },
    {
        name: 'Raju',
        age: 450
    }
]

// generic tuple 

type GenericTuple <X,Y> = [X,Y]

const manushSt:GenericTuple< string,string> = ['Mr X','Mrs Y'];
const bediMansuh :GenericTuple <number ,{name: string, email: string}>   = [1482,{name:'bedi',email:'sd@mail.com',}]