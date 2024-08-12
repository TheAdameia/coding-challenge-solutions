function isIsogram(str){
  const array = str.split("")
  const checkingArray = []
  for (const bit of array) {
    if (!checkingArray.includes(bit.toLowerCase())){
      checkingArray.push(bit.toLowerCase())
    }
    else {
      return false
    }
  }
  return true
}