const analyzeArray = (arr) => {
    if (arr !== undefined) { 
        if  (arr.length === 0) {
            const average = null; 
            const max = null; 
            const min = null; 
            const length = null; 
    
            return {
                average,    
                max,
                min,
                length,
            }
        } else {
            let average = arr.reduce(
                (accumulator, currentValue) => accumulator + currentValue
            );
        
            const max = Math.max(...arr);
            const min = Math.min(...arr);   
            const length = arr.length; 
        
            average = Math.floor(average / length); 
        
            return {
                average, 
                max, 
                min, 
                length
            }
        }
    } else {
        const average = null; 
            const max = null; 
            const min = null; 
            const length = null; 
    
            return {
                average,    
                max,
                min,
                length,
            }
    }
}

module.exports = analyzeArray;