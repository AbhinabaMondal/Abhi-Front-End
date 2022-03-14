var num1 = "Enter The First num";
var num2 = "Enter The Second num";
var num3 = "Enter The Third num";

let largest;

if (num1 >= num2 && num1 >= num3) {
    largest = num1;
}
else if (num2 >= num1 && num2 >= num3) {
    largest = num2;
}
else {
    largest = num3;
}

console.log("The largest number is ",largest);
