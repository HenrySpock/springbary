let unitList = ['sb03', 'sb04'];
let funcArray = []; //for beautify
let funcButtArray = []; //for setting function list 

let currButt;

const buttObj = {
    'sb03': [func001, func002, func003],
    'sb04': [func004, func005, func006, func007]
}

let funcCount = 7;

//----------------------------------------------------
// Beautify Function for Displaying Function as String - basically adds new line at semicolon
const beautify = function(fun){
funcArray = [];
for (let i = 0; i < fun.length; i++){
if (fun[i] !== ';'){
    funcArray.push(fun[i]);
} else {
let textSpace = document.createElement('div');
    let text = funcArray.join('') + `;`;
    textSpace.append(text);    

document.getElementById('str').append(textSpace);                                           // console.log(funcArray.join('') + ";");
funcArray = [];
} 

}                                                                                           // let final = funcArray.join('');
let textSpace = document.createElement('div');
    let text = funcArray.join('');
    textSpace.append(text);    

document.getElementById('str').append(textSpace);
} //closes beautify()


//--------------------------------------------------
//Function for Initial Greeting, callback to display
function generate(){

    let container = document.createElement("div");
    container.setAttribute('id', 'container')
    document.body.append(container);

    let displayList = document.createElement("div");
    displayList.setAttribute('id', 'displayList')
    container.append(displayList);

    let performance = document.createElement("div");
    performance.setAttribute('id', 'performance')
    container.append(performance);

    sbRenderUnit();

    function sbRenderFunc(){                                                               // console.log("huh");  // let funcDis = document.createElement('div'); // funcDis.innerText = `Choose a function:\n\n`;    // displayList.append(funcDis);

        for(func of funcList){ 
        let aaa = document.createElement('button');
        aaa.innerText = func.name; 
        let cid = func.id
        aaa.setAttribute('id', cid);
        displayList.append(aaa);
        } 

    }
    sbRenderFunc();
} //closes generate()

//TOP LEVEL CALL * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
generate();

function sbRenderUnit(){ //creates intro text and unit buttons
    let unitDis = document.createElement('div');
    unitDis.innerText = `Hello from Springbary 03!\nChoose a unit:\n\n`;
    displayList.append(unitDis);

    for(unit of unitList){ 
        let unitB = document.createElement('button');
        unitB.innerText = unit; 
        unitB.setAttribute('id', unit);
        displayList.append(unitB);
        }

        let dispButts = document.createElement('div');
        dispButts.setAttribute('id', 'dispButts');
        displayList.append(dispButts); 

        let choose = document.createElement('div');
        choose.setAttribute('id', 'choose');
        displayList.append(choose); 

        let chooseMess = document.createElement('p');
        chooseMess.innerText = "Choose a function:"
        choose.append(chooseMess);

        let chooseButt = document.createElement('div'); 
        chooseButt.setAttribute('id', 'chooseButt');
        choose.append(chooseButt);    
} //closes sbRenderUnit, called in generate() function

//----------------------------------------------
//Eventlistener for Unit Buttons, sets funcArray
for (let i=1; i<=unitList.length; i++){
    currButt = document.getElementById(unitList[i-1]);
    currButt.addEventListener('click', function(){
        clearPerf();

        let currId = this.id.toString();                                                    // console.log(currId);     // console.log(buttObj[currId]);
        let currObj = buttObj[currId]                                                       // console.log(currObj.toString());     // console.log(currObj);    // console.log(Array.isArray(currObj)); 
        let clearButt = document.getElementById('chooseButt');

        while(clearButt.lastChild){
            clearButt.removeChild(clearButt.lastChild);
        }
        
        let anotherButt = [];
        for (butt in currObj){                                                              // console.log(currObj[butt])   // console.log(currObj[butt].id)    // console.log(currObj[butt].name)
            let funcButton = document.createElement('button'); 
            funcButton.setAttribute('id', currObj[butt].id);
            funcButton.innerText = (currObj[butt].name);
            
            document.getElementById('chooseButt').append(funcButton);                       // console.log(currButt);   // console.log(buttObj[currId][butt]);

        anotherButt.push(buttObj[currId][butt]);                                            // console.log(anotherButt);    // funcButtArray = buttObj[currId][butt];   // console.log(funcButtArray);
        }        

        
        function finalButt(){ // references scoped variables
        for (butt in anotherButt){ 

            let thisId = +butt+1
            let funk = document.getElementById(thisId).addEventListener('click', function(){;
            clearPerf();
            let cleanButt = document.getElementById('perfButt');
            console.log(document.getElementById('perfButt'));
            if (cleanButt !== null){console.log(true, ); document.getElementById('perfButt').remove();}else{console.log(false)};

            let thisButt = anotherButt[this.id-1];
            console.log(thisButt);
            disp(thisButt);

            toPerform(thisButt);

                    });
                }
            }; 

        finalButt();
        }
    )};

function toPerform(unknown){ //sets perform button for executing function

    let perfButt = document.createElement('button');
    perfButt.setAttribute('id', 'perfButt');
    perfButt.innerText = "Perform?";
    document.getElementById('displayList').append(perfButt);
    
    let capArray = [];

    function capture(){
        capArray = [];
        let vCap = document.createElement('button');
        vCap.setAttribute('id', 'capture');
        vCap.innerText = "Execute function with argument(s)?"
        document.getElementById('displayList').append(vCap);

        vCap.addEventListener('click', function (e){
            e.preventDefault();
        let inputList = Array.from(document.getElementsByClassName('input'))
        for (let i = 0; i < inputList.length; i++){capArray.push(inputList[i].value)}       // console.log(capArray);   // capArray[0] = +capArray[0];  
        for(let i = 0; i < capArray.length; i++)                                            // if (unknown.argType[i] === 'number'){console.log("yes")}     // if (capArray[i] === 'true'){capArray[i] = true   // } else if (capArray[i] === 'false'){capArray[i] = false      // } else if (typeof +capArray[i] === 'number'){capArray[i] = +capArray[i]  // }
        
        if (capArray[i] === "true"){capArray[i] = !!capArray[i]                             // console.log("yes");
        } else if (capArray[i] === "false"){capArray[i] = !capArray[i]
        } else if (unknown.argType[i] === 'number'){capArray[i] = +capArray[i]}            

        console.log(capArray);
        clearPerf();
        unknown.func(...capArray);
        });      
    }

    document.getElementById('perfButt').addEventListener('click', function(){ 
        clearPerf();                                                                        // unknown.func();  // console.log(+unknown.args);
        let argNum = +unknown.args;                                                         // console.log(typeof argNum);  // console.log(argNum * 2 === typeof number); 
        if (!!argNum === true){                                                             //console.log("sooo close")   

        let thisVArray = [];
        for (let i = 1; i <= argNum; i++){
            let argField = document.createElement('input');
            argField.setAttribute('id', [i*100]);
            argField.setAttribute('placeholder', unknown.argType[i-1]);
            argField.setAttribute('type', 'text');
            argField.setAttribute('class', 'input');
            document.getElementById('displayList').append(argField)
            argField.addEventListener('input', updateValue);
            const log = document.getElementById(i*100);                                     // for (let i = 1; i <= argNum; i++){   // thisVArray.push(+i)};    // console.log(thisVArray);
            function updateValue(e){                
                log.textContent = e.target.value;                                           // console.log(e.target.value);     // this["v"+i] = e.target.value;    // console.log(`${["v"+i]} = `, this["v"+i]);
                thisVArray[i-1] = e.target.value;
                console.log(thisVArray);                                                    // for (let j = 0; j < thisVArray.length; j++) {    //     this["v"+j] = e.target.value;    //     console.log(`${["v"+j]} = `, this["v"+j]);   //  }
            }
            }

        capture();                                                                          // unknown.func(arr)

        } else {
        unknown.func(); //runs function assuming no arguments
        }

    });  //closes EventListener block on 'perfButt'
}   //closes toPerform()                                                                                          

//----------------------------------------------------------------------------------- 
//Function clears performance div when unit, function or perform buttons are clicked.
function clearPerf(){
    let cleanup = document.getElementById("performance");
    if (cleanup.innerText !== ''){
        cleanup.innerText = '';
    }
    const inputs = document.getElementsByClassName("input");
    while (inputs.length > 0){inputs[0].remove()};

    // const captures = document.getElementById('capture');
    let clearCap = document.getElementById('capture');
    if (clearCap !== null){document.getElementById('capture').remove();
    }

 
}

//--------------------------------- 
//Function for appending funciton info from instance to the DOM
function disp(thisButt){
    
    let addendum = document.createElement('div');
    addendum.setAttribute('id', 'addendum');
    document.getElementById('displayList').append(addendum);

    if (document.getElementById('addendum').innerText !== null){
        (document.getElementById('addendum').innerText = '')
    };    

    let nameDisp = document.createElement('div');
    nameDisp.setAttribute('id', 'nameDisp');
    document.getElementById('addendum').append(nameDisp);

    let argDisp = document.createElement('div');
    argDisp.setAttribute('id', 'argDisp');
    document.getElementById('addendum').append(argDisp);

    let descrip = document.createElement('div');
    descrip.setAttribute('id', 'descrip');
    document.getElementById('addendum').append(descrip);

    let str = document.createElement('div');
    str.setAttribute('id', 'str');
    document.getElementById('addendum').append(str);

    document.getElementById('nameDisp').append(thisButt.name);
    document.getElementById('argDisp').append(thisButt.args);
    document.getElementById('descrip').append(thisButt.description);
    document.getElementById('str').append(beautify(thisButt.str));     
}