// ternary 

const age:number = 180 ;
if (age > 18) {
    console.log('adult');
}else{
    console.log('baccha');
}

// ternary 

const isResult = age > 18? 'adult' : 'baccha';
console.log({isResult});

// nullish coalescing operator ?? 
const isAuthentication = null;
const result = isAuthentication ?? 'guest'
console.log({result});

// 
const DefaultUser:{
    name:string;
    age:string
} = {
    name:'jk',
    age:'25'
}

const aaddress = DefaultUser?.add ?? "no address found mama";
console.log({aaddress});