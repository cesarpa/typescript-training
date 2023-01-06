import { Coach } from "./Coach";
import { GolfCoach } from "./GolfCoach";
import { SoccerCoach } from "./SoccerCoach";

let mySoccerCoach = new SoccerCoach();
console.log(mySoccerCoach.getDailyWorkout());


let myGolfCoach = new GolfCoach();
console.log(myGolfCoach.getDailyWorkout());

let theCoaches : Coach[] = [];
theCoaches.push(mySoccerCoach);
theCoaches.push(myGolfCoach);

for (let tempCoach of theCoaches){
    console.log(tempCoach.getDailyWorkout()); 
}



