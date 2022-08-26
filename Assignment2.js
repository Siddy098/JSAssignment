// Question 1
// A program to check whether a triangle is equilateral, isosceles or scalene.

var checkTriangle = (side1,side2,side3) => {
    if(side1 === side2 && side2 === side3){
        console.log("Traingle is Equilateral.")
    } else if(side1 === side2 || side2 === side3 || side1 === side3){
        console.log("Traingle is Isosceles.")
    } else {
        console.log("Triangle is Scalene.")
    }
}

// Question 2
//  A function that finds grade of student based on marks.

var findGrade = (marks) => {
    if(marks > 100 || marks < 0){
        console.log("Invalid marks")
    } else {
        switch(Math.floor(marks/10)){
            case 10:
            case 9:
                console.log("S grade")
                break
            case 8:
                console.log("A grade")
                break
            case 7:
                console.log("B grade")
                break
            case 6:
                console.log("C grade")
                break
            case 5:
                console.log("D grade")
                break
            case 4:
                console.log("E grade")
                break
            default:
                console.log("Student has failed")
                break
        }
    }
}

// Question 3
// A program to find sum of multiples of 3 and 5 under 1000.

var multiplesUnder1000 = () => {
    var result = 0

    for(var num=0; num<1000; num++){
        if(num % 3 === 0 || num % 5 === 0){
            result += num
        }
    }

    console.log(`Sum of Multiples of 3 & 5 under 1000 is : ${result}`)

}

var factorialOfPrimeRange = (start,end) => {
    var result = 1
    var numOfPrimes = 0

    for(var i=start; i<=end; i++){
        if(isPrime(i)){
            numOfPrimes++
        }
    }

    for(var i=numOfPrimes; i>=1; i--){
        result *= i
    }

    console.log("Num of primes :"+numOfPrimes)
    console.log(`Factorial of primes between ${start} and ${end} : ${result}`)

}

// Helper function for factorialOfPrimeRange()
// Checks if a number is prime.

var isPrime = (num) => {
    if(num === 0 || num === 1){
        return false
    }

    var flag = false
    for(var i=2; i<= Math.floor(num/2); i++){
        if(num % i == 0){
            flag = true
            break
        }
    }

    return (!flag)? true : false;
}

// TESTING
checkTriangle(1,1,1) // --> Equilateral
checkTriangle(1,3,3) // --> Isosceles

findGrade(95) // --> S grade
findGrade(80) // --> A grade
findGrade(20) // --> Student has failed
findGrade(-10) // --> Invalid marks

multiplesUnder1000() // --> 233168

factorialOfPrimeRange(1,5)  // --> 6
factorialOfPrimeRange(1,10) // --> 24

