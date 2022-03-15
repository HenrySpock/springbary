// This file will become a master funcList, and when you press unit buttons, it will affect the funcArray.
// Seems the simplest.

// document.getElementById('functions').innerText = '';
// document.getElementById('funcJS').setAttribute('src', 'sb03.js');
// console.log("You made it.");

// ---------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------
// sb03 funcs 

//-------------------------
// Function #1, Exercise #1
let exerFunc001 = function(time, interval){

    let timer = setInterval(() => {

    if (time !== 0){
    console.log(time);

    let intDis = document.createElement("div")
    intDis.append(time);
    let perfButt = document.getElementById('performance');
    perfButt.setAttribute('class', 'output');
    perfButt.append(intDis);
    }

    else {
    clearInterval(timer);
    let finis = "DONE!";

    let intDis = document.createElement("div")
    intDis.append(finis);
    let perfButt = document.getElementById('performance');
    perfButt.setAttribute('class', 'output');
    perfButt.append(intDis);
    }

    time--;

    }, interval) //200)
};



//-------------------------------------------------------------------------------------------- 
//Variables for inserting function as a string and full description into class as shorter args
let exerFunc001Str = exerFunc001.toString();
let exerFuncDesc001 = `This function takes in 1 argument, then counts down by 1/5 second, even though the assignment requested a full second. Ain't nobody got time for that. Instead of "0", it states "DONE!"`;

//----------------------------------- 
//Defining Instance of First Function
const func001 = new Exercise(
    01, 
    'sbCountdown', 
    '2', 
    exerFuncDesc001, 
    exerFunc001,
    exerFunc001Str,
    ['number', 'number']
)

 
//------------
// Function #2
// The following is not a problem, it was an extra excercise to make sure I understood more about 
// setInterval/clearInterval and creating usable random numbers from Date.now().
let exerFunc002 = function getNum(interval){
            let wackyInt = setInterval(getInt, interval);
            function getInt(){
            let date = Date.now(); 
            let str = date.toString()
            let a = +str[10];
            let b = +str[11];
            let c = +str[12];
            let int = (`1st: ${a}, 2nd: ${b}, 3rd: ${c}, Total: ${a+b+c}`);
            let intDis = document.createElement("div")
            intDis.append(int);
            let perfButt = document.getElementById('performance');
            perfButt.setAttribute('class', 'output');
            perfButt.append(intDis);

            if (a+b+c === 15){
                let win = ("We have 15!"); 

                let met = document.createElement("div")
                met.append(win);
                perfButt.append(met);

                clearInterval(wackyInt);                
            }}
};

//-------------------------------------------------------------------------------------------- 
//Variables for inserting function as a string and full description into class as shorter args
let exerFunc002Str = exerFunc002.toString();
let exerFuncDesc002 = 'This function picks 3 numbers determined by Date.now() at an interval of 1/5 second, adds them, and stops when they equal 15.';

//----------------------------------- 
//Defining Instance of First Function
const func002 = new Exercise(
    02, 
    'sbWackyInt', 
    '1', 
    exerFuncDesc002, 
    exerFunc002,
    exerFunc002Str,
    ['number']
)

//------------------------
//Function #3, Exercise #2
let exerFunc003 = function(){
        let rando = setInterval(picky, 100);
        let num = 1;
        function picky(){ 
        let chance = Math.random().toFixed(2);
        if (chance > .75) {clearInterval(rando); 

        console.log(`Number ${num}. ${chance} is greater than .75! Somebody won!`);
        let randomG = document.createElement('div');
        randomG.setAttribute('class', 'output')
        randomG.innerText = `Number ${num}. ${chance} is greater than .75! Somebody won!`;
        let perfButt = document.getElementById('performance');
        perfButt.append(randomG);

        } else {

        console.log(`Number ${num}. ${chance}`);
        let randomG = document.createElement('div');
        randomG.setAttribute('class', 'output')
        randomG.innerText = `Number ${num}. ${chance}`
        let perfButt = document.getElementById('performance');
        perfButt.append(randomG);

        }
        num++
    }
}; 

//-------------------------------------------------------------------------------------------- 
//Variables for inserting function as a string and full description into class as shorter args
let exerFunc003Str = exerFunc003.toString();
let exerFuncDesc003 = 'This function picks random decimal numbers to 2 places between 0 and 1 at an interval of 1/10 of a second, claiming a winner when a number exceeds .75.';

//----------------------------------- 
//Defining Instance of First Function
const func003 = new Exercise(
    03, 
    'sbRandomGame', 
    'No', 
    exerFuncDesc003, 
    exerFunc003,
    exerFunc003Str
)

//-------------------------------------
//Pushing functions to global array
let sb03Funcs = [func001, func002, func003];


// ---------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------
// sb04 funcs 

const func004 = new Exercise(
    01, 
    'Nothing', 
    // 'No', 
    // exerFuncDesc003, 
    // exerFunc003,
    // exerFunc003Str
)
const func005 = new Exercise(
    02, 
    'to', 
    // 'No', 
    // exerFuncDesc003, 
    // exerFunc003,
    // exerFunc003Str
)
const func006 = new Exercise(
    03, 
    'see', 
    // 'No', 
    // exerFuncDesc003, 
    // exerFunc003,
    // exerFunc003Str
)
const func007 = new Exercise(
    04, 
    'here. Yet.', 
    // 'No', 
    // exerFuncDesc003, 
    // exerFunc003,
    // exerFunc003Str
)

let sb4Funcs = [func001, func002, func003];