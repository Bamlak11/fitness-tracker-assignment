// class for new workout
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


class moreWorkout extends newWorkout {
    constructor(excerciseType, excerciseName, duration, sets, reps){
        super(excerciseType, excerciseName, duration);
        this.sets = sets;
        this.reps = reps
    }
    displayWorkout(){
        return `${super.displayWorkout()}, Sets: ${this.sets}, | Reps: ${this.reps}`;
    }
}



function addWorkout() {
    const excerciseName = document.getElementById("excercise-name").value;
    const excerciseType = document.getElementById("excercise-type").value;
    const duration = parseFloat(document.getElementById("duration").value);
    const set = parseInt(document.getElementById("set").value);
    const reps = parseInt(document.getElementById("reps").value);


    const workout = new newWorkout("Cardio", "Treadmill", 10);
    displayLog();
}




// array for past workout log
let workoutLog = [];

let logWorkout = [
    { excerciseType: "Cardio", excerciseName: "Treadmill",  duration: 10},
    { excerciseType: "Upper Body", excerciseName: "Bench Press",  duration: 20, sets: 3, reps: 8},
    { excerciseType: "Lower Body", excerciseName: "Squats",  duration: 10, sets: 3, reps: 8},

];

 




function workoutSummary() {

return workoutLog.length;

}





document.addEventListener('DOMContentLoaded', () => {
   
    const 
}