// object destructing 
const contact = {
    name: "John Doe",
    phone_num: "123-456-7890",
    address: "123 Main Street, City, State, Zip",
    pocket : 3000,
    rom:{
        taka:125,
        b:'hare'
    }
}

const{address,pocket,rom:{taka},} = contact;