const num = 24;

console.log(`The factors of ${num} is:`);

let i = 1;

while(i <= num){
    i++
    if(num % i == 0) {
        console.log(i);
    }
}