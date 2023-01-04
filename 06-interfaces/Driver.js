"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GolfCoach_1 = require("./GolfCoach");
var SoccerCoach_1 = require("./SoccerCoach");
var mySoccerCoach = new SoccerCoach_1.SoccerCoach();
console.log(mySoccerCoach.getDailyWorkout());
var myGolfCoach = new GolfCoach_1.GolfCoach();
console.log(myGolfCoach.getDailyWorkout());
var theCoaches = [];
theCoaches.push(mySoccerCoach);
theCoaches.push(myGolfCoach);
for (var _i = 0, theCoaches_1 = theCoaches; _i < theCoaches_1.length; _i++) {
    var tempCoach = theCoaches_1[_i];
    console.log(tempCoach.getDailyWorkout());
}
