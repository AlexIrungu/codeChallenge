//code challenge 2
//prompt command: every time the speed test runs
const prompt = require('prompt-sync')();
//the user is asked to input speed
let speed = prompt('Please enter speed: ')
//the function speedDetector is declared
function speedDetector(speed){
    //the speed poutputs ok if the speed is less than 70
    if(speed < 70){
        return 'Ok'
        //if the speed is equal or greater than 70, it calculates the different demerit points
    }else if(speed >= 70){
        let demerit = (speed - 70) / 5
        //if the demerit points are greater than 12, it outputs License suspended
        if (demerit > 12){
            return ("License suspended")
        }else{
            return ("Demerit: " + demerit)
        }
    }
}
//we call the function speedDetector
console.log(speedDetector(speed))
