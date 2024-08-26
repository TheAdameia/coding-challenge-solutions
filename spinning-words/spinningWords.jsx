let string = "Welcome to flavor town"

function spinWords(string){
    let array = string.split(" ")
    let sortedArray = []
    for (const word of array) {
        if (word.length > 4) {
            let reversedWord = word.split("").reverse().join("");
            sortedArray.push(reversedWord)
            console.log(reversedWord)
        } else {
            sortedArray.push(word)
        }
    }
    let reversedString = sortedArray.join(" ")
    console.log(reversedString)
    return reversedString
  }

  spinWords(string)