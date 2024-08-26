const str = "bubkiss"

function solution(str){
    const phraseLength = Math.ceil((str.length)/2)
    let solutionArray = [];

    // slice using a set of two variables that are increased by two every slice
    let startSlice = 0;
    let endSlice = 2;
    
    for (let index = phraseLength; index > 0; index--) {
        let slicedString = str.slice(startSlice, endSlice);
        let extraChar = "_"
        if (slicedString.length == 1) {
            slicedString += extraChar 
        }
        solutionArray.push(slicedString);
        startSlice = startSlice + 2;
        endSlice = endSlice + 2;
    }
    
    return solutionArray
 }

 solution(str)