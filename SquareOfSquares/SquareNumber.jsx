let n = 3

var isSquare = function(n){
    let testNumber = n
    let subtractNumber = -1
    while (testNumber > 0){
        testNumber = testNumber + subtractNumber;
        subtractNumber = subtractNumber - 2;
    }
    if (testNumber == 0)
    {
        return true
    }
    else {
        return false
    }
  }

  isSquare(n)