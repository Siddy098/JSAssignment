class Cylinder {
    constructor(radius,height){
        this.radius = radius
        this.height = height
    }

    getVolume() {
        return Math.PI * this.radius * this.radius * this.height;
    }
}

class Sphere {
    constructor(radius){
        this.radius = radius
    }

    getVolume() {
        return (4/3) * Math.PI * this.radius * this.radius * this.radius;
    }
}

class Cone {
    constructor(radius,height){
        this.radius = radius
        this.height = height
    }

    getVolume() {
        return (Math.PI * this.radius * this.radius * this.height) / 3;
    }
}

//TESTING

let cyl1 = new Cylinder(4,5)
console.log(cyl1.getVolume().toFixed(2))

let sph1 = new Sphere(5)
console.log(sph1.getVolume().toFixed(2))

let con1 = new Cone(4,5)
console.log(con1.getVolume().toFixed(2))
