// Type assertion / type narrowing
// type as means ondho bissas as mane aitay right 

const kgToGram = (value:string | number)=>{
    if (typeof value ==='string') {
        const convertedValue = parseFloat(value)*1000;
        return convertedValue
        
    }
    if (typeof value === 'number') {
        const changedValue = value*1000;
        return changedValue;
        
    }
}

// kgToGram(205) as number
// kgToGram('205') as string