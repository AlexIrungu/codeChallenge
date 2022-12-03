//code challenge 2
//prompt command: every time the speed test runs
const prompt = require('prompt-sync')();
//the user is asked to input marks
let speed = prompt('Please enter speed: ')
//the function speedDetector is declared
function speedDetector(speed){
    if(speed < 70){
        return 'Ok'
    }else if(speed >= 70){
        let velocity = (speed - 70) / 5
        if (velocity > 12){
            return ("License suspended")
        }else{
            return ("Demerit: " + velocity)
        }
    }
}
//we call the function speedDetector
console.log(speedDetector(speed))
