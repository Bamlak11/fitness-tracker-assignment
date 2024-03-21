
// class for new workout
class newWorkout {
    constructor(excerciseType, excerciseName, duration, setCount, repCount) {
        this.excerciseType = excerciseType;
        this.excerciseName = excerciseName;
        this.duration = duration;
        this.sets = setCount;
        this.reps = repCount
    }

    displayWorkout(){
        return `Excercise Type: ${this.excerciseType} || Excercise Name: ${this.excerciseName} || Duration: ${this.duration} minute, || Sets:  ${this.sets}, || Reps: ${this.reps}`;
    }
}

// class extension
// class moreWorkout extends newWorkout {
//     constructor(excerciseType, excerciseName, duration, setcount, repcount){
//         super(excerciseType, excerciseName, duration);
//         this.sets = setcount;
//         this.reps = repcount
//     }
//     displayWorkout(){
        // return `${super.displayWorkout()}, Sets: ${this.sets}, | Reps: ${this.reps}`;
//     }
// }


function addWorkout() {
    const excerciseName = document.getElementById("excercise-name").value;
    const excerciseType = document.getElementById("workout").value;
    const duration = parseFloat(document.getElementById("duration").value);
    const setCount = parseInt(document.getElementById("sets").value);
    const repCount = parseInt(document.getElementById("reps").value);


    const workout = new newWorkout(excerciseType, excerciseName, duration, setCount, repCount);
    workoutLog.push(workout);

    // displays new workout in daily workout summary
    const workoutList = document.getElementById("daily-workout-summary");
    const listItem = document.createElement("p");
    listItem.textContent = workout.displayWorkout();
    workoutList.appendChild(listItem);

}

function logDailySummary() {

    const dailyWorkoutSummary = document.getElementById("daily-workout-summary").innerText;
    const pastWorkoutLog = document.getElementById("past-workout-logs");
    const workoutInfo = document.createElement("p");
    workoutInfo.textContent = dailyWorkoutSummary;
    pastWorkoutLog.appendChild(workoutInfo);

    console.log("Log Summary button clicked");
}



// array for past workout log
let workoutLog = [];

let logWorkout = [
    { excerciseType: "Cardio", excerciseName: "Treadmill",  duration: 10},
    { excerciseType: "Upper Body", excerciseName: "Bench Press",  duration: 20, sets: 3, reps: 8},
    { excerciseType: "Lower Body", excerciseName: "Squats",  duration: 10, sets: 3, reps: 8},

];


document.getElementById("create-workout-btn").addEventListener("click", addWorkout);

document.getElementById("log-workout-btn").addEventListener("click", logDailySummary);


//summary calc
// function workoutSummary() {

//     return workoutLog.length;

// }

// function totalDuration() {
//     let durationStat = 0;
//         for (const stat of workoutLog){
//             durationStat += stat.duration;
//     };

//     return durationStat

// }
