//code challenge 2
let speed;
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
console.log(speedDetector(80))
