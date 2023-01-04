import { Coach } from "./Coach";

export class SoccerCoach implements Coach {
    getDailyWorkout(): string {
        return "we'll run around the field";
    }
}