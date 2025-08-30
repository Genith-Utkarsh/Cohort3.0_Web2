class Rectangle {
    constructor(width, height , color){
        this.width = width
        this.height = height
        this.color = color
    }

    area() {
        const area = this.width * this.height
        return area
    }

    paint() {
        console.log(`You used ${this.color}`)
    }
}


// creating objects from class
const rect =  new Rectangle(10, 12, "Green")
const area = rect.area()
console.log(area)

rect.paint()