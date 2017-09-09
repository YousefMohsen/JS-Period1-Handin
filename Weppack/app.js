const PI = 3.141593
PI > 3.0

console.log("PI is "+PI);


function f (x, y, ...a) {
    return (x + y) * a.length
}
console.log(f(1, 2, "hello", true, 7) === 9);

class Rectangle extends Shape {
 
    static defaultRectangle () {
        return new Rectangle("default", 0, 0, 100, 100)
    }
}
class Circle extends Shape {

    static defaultCircle () {
        return new Circle("default", 0, 0, 100)
    }
}
var defRectangle = Rectangle.defaultRectangle()
var defCircle    = Circle.defaultCircle()
//console.log(defRectangle.defaultRectangle);