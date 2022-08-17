// A program that checks whether a given year is leap year or not.

let isLeapYear = (year) => {
    if((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)){
        console.log(`${year} is a leap year.`)
    } else {
        console.log(`${year} is not a leap year.`)
    }
}

isLeapYear(2021)
isLeapYear(2012)
