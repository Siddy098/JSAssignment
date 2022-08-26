// Question 1
// A program to output pattern for given rows.

var printPattern = (rows) => {
    var count = 1

    for(var i=0; i<rows; i++){
        for(var j=0; j<=i; j++){
            process.stdout.write(`${count} `);
            count++
        }
        process.stdout.write("\n");
    }
}


// Question 2
// A program that checks whether a given number is Armstrong or not.

var checkIfArmstrong = (num) => {
    var result = 0
    var n = num
    
    while(n !== 0){
        var last = n % 10
        result += Math.pow(last,3)
        n = Math.floor(n/10)
    }

    return num === result
}

// Question 3
// A program that checks whether a given number is Special number or not.

var checkIfSpecial = (num) => {
    var result = 0
    var n = num

    while(n !== 0) {
        var last = n % 10
        result += fact(last)
        n = Math.floor(n/10)
    }

    return num === result
}

// Helper function for checkIfSpecial()

var fact = (n) => {
    var result = 1

    for(var i=n; i>=1; i--){
        result *= i
    }

    return result
}

// TESTING

printPattern(4)

console.log()

console.log(checkIfArmstrong(371))  // true
console.log(checkIfArmstrong(109))  // false

console.log()

console.log(checkIfSpecial(145))    // true
console.log(checkIfSpecial(155))    // false