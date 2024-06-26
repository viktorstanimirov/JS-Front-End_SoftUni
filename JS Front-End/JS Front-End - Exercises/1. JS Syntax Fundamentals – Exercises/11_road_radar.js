function roadRadar(speed, area) {

    const areas = {
        motorway: 130,
        interstate: 90,
        city: 50,
        residential: 20
    }

    if (speed <= areas[area]) {
        console.log(`Driving ${speed} km/h in a ${areas[area]} zone`)
    
    }else {
        drivingStatus = 'reckless driving'
    
        if (speed <= areas[area] + 20 ) {
            drivingStatus = 'speeding'
        } else if (speed <= areas[area] + 40 ) {
            drivingStatus = 'excessive speeding'
        }
        console.log(`The speed is ${speed - areas[area]} km/h faster than the allowed speed of ${areas[area]} - ${drivingStatus}`);

    }
           
    }


//Test code
// roadRadar(40, 'city')
// roadRadar(21, 'residential')
// roadRadar(120, 'interstate')
// roadRadar(200, 'motorway')
