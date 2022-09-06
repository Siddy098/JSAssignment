//Program 1
// Recatangle is parent class, and Square is child class.

class Rectangle{
    constructor(length, width){
        this.length = length
        this.width = width
    }

    area(){
        return this.length * this.width;
    }
}

class Square extends Rectangle {
    constructor(side){
        super(side,side)
        super.area()
    }
}


//Program 2
//Find the nth largest number in an array.
// Uses a helper function - getLargest()

var find_largest = (n,nums) => {
    var count = 1
    
    while(count <= n) {
        var largestIdx = getLargest(nums)
        if(count === n){
            return nums[largestIdx]
        }
        nums.splice(largestIdx,1)
        count++
    }
}

var getLargest = (nums) => {
    var largestIdx = 0
    var largest = nums[0]

    for(var i=0; i<nums.length; i++) {
        if(nums[i] > largest) {
            largestIdx = i
            largest = nums[i]
        }
    }

    return largestIdx;

}

// Program 3
// A program that inserts dashes (-) between each two even numbers.
// 025468 - 0-254-6-8

var computeDash = (num) => {
    var num = num.toString()
    num = num.split('')

    for(var i=0; i<num.length-1; i++) {
        var curr = parseInt(num[i])
        var next = parseInt(num[i+1])

        if(curr % 2 === 0 && next % 2 === 0){
            num.splice(i+1,0,'-')
        }
    }

    return num.join('')
}

//TESTING

let rect1 = new Rectangle(5,5)
console.log(rect1.area())

let sqr1 = new Square(4)
console.log(sqr1.area())

console.log(find_largest(3,[3,45,6,7,23,5,7,8]))

console.log(computeDash("025468"))
console.log(computeDash("0275368"))