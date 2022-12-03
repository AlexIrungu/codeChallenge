//codechallenge1
//prompt command: every time you test you will be prompted to input marks
const prompt = require('prompt-sync')();
//the user is told to input marks
let grade = prompt('Please enter marks: ')
//checking condition for different grades
function assessGrade(grade){

if (grade > 79){
    return 'A'
}else if (grade > 60 && grade < 80){
    return 'B'
}else if (grade > 49 && grade < 59){
    return 'C'
}else if (grade > 40 && grade < 49){
    return 'D'
}else if(grade < 40){
    return 'E'
}
}
//we call the function to assess the grades inputed
console.log (assessGrade(grade))

