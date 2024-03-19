
class newWorkout {
    constructor(excerciseType, excerciseName, duration) {
        this.excerciseType = excerciseType;
        this.excerciseName = excerciseName;
        this.duration = duration;
    }

    displayWorkout(){
        return `Excercise Type: ${this.excerciseType} | Excercise Name: ${this.excerciseName} | Duration ${this.duration}`;
    }
}

const workout = new newWorkout("Cardio", "Treadmill", 10);
workout.displayWorkout();



let workoutLog = [];

let logWorkout = {
    excerciseType: "Cardio",
    excerciseName: "Treadmill",
    duration: 10
};




function workoutSummary() {

return workoutLog.length;

}