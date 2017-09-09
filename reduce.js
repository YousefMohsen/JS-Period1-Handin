var numbers =[2,3,67,33];


console.log(numbers.join("-"));

var reducer = function(accumulator, item){
return accumulator + item;

}



var initialValue = 0;


var result = numbers.reduce(reducer, initialValue);

console.log(result);


var members = [
{name: "Thiago", age: 6},
{name: "Messi", age: 10},
{name: "Iniesta", age: 8},
{name: "Xavi", age: 6},
];


var reducer1 = function(acc, member, index, arr){
var temp = acc + member.age;
if(index ===arr.length-1){

    return temp / arr.length;
}
else{

    return temp;
}

}
var initialValue1 = 0;


result1 = members.reduce(reducer1, initialValue1);




console.log(result1);








