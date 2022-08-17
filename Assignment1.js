// A program that checks whether a given year is leap year or not.

let isLeapYear = (year) => {
    if((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)){
        console.log(`${year} is a leap year.`)
    } else {
        console.log(`${year} is not a leap year.`)
    }
}

// A program that converts to and from celsius , Fahrenheit.
// Formula -  c/5 = (f-32)/9

let convertTemp = (c,f) => {
    let farenheit = (c/5) * 9 + 32 //celsius to fahrenheit
    let celsius = (f-32) * 5 / 9 //fahrenheit to celsius

    console.log(`${c}\u00B0C is ${farenheit}\u00B0F`)
    console.log(`${f}\u00B0F is ${celsius}\u00B0C`)
}

let factorial = (num) => {
    let result = 1

    for(var i=num; i>=1; i--){
        result *= i
    }
    
    console.log(`Factorial of ${num} is ${result}`)
}


//TESTING
isLeapYear(2021)
isLeapYear(2012)

convertTemp(60,45)

factorial(4)
factorial(5)


