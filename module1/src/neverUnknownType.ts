// Never,unknown and null able type

const unknownType=(value:string | null)=>{

    if (value) {
        console.log('this is okay');
    } else{
        console.log('this is not okay');
    }
}
unknownType('')


// unknown 