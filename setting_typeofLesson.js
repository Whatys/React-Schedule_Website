const checkDouble = false;

let lessonBlock = document.querySelector('.schedule__leson');




if(checkDouble === false)
lessonBlock.style.background = "#FFD3D3";
else
lessonBlock.style.backgroundImage = "url('./Images/lesson.png')";

//console.log(lessonBlock);


import {Monday, Tuesday, Wednsday, Thursday, Friday} from './Lessons/IA2101.js';




let b = (Name, cabinet, teacher,type, week, Name2, cabinet2, teacher2, type2, week2) => {
let vaf = '<div class="double-column">' +        
`<div class="double-row first"> `+
`    <div class="letterD blockt">I</div> `+ 
`    <div class="nameD blockt">${Name}</div> `+ 
`    <div class="double__types blockt">`+
`        <p>${week}</p>`+
`        <p>${type}</p>`+
`    </div>`+
`</div>`+
`<div class="double__cab">${cabinet}</div>`+
`<div class="double__teacher">${teacher}</div>`+
`</div>`+
`<div class="double-row second">`+
`<div class="letterD blockt">II</div>`+
`<div class="nameD blockt">${Name2}</div>`+
`<div class="double__types blockt">`+
`    <p>${week2}</p>`+
`    <p>${type2}</p>`+
`</div>`+
`</div>`+
`<div class="double__cab">${cabinet2}</div>`+
`<div class="double__teacher">${teacher2}</div>`+
`</div>`
return vaf;
}


let a = (Name, cabinet, teacher,type, week) => {
    let das = `<div class="row-elements">`+
`<div class="letter blockt"><p ></p></div>`+
`<div  class="name blockt"><P>${Name}</P></div>`+
`<div class="schedule__types blockt">`+
`<p>${week}</p><p>${type}</p> </div> </div>`+
`<div class="schedule__cab">`+
`<p>${cabinet}</p> </div>`+
`<div class="schedule__teacher">`+
`<p>${teacher}</p>`+
`</div>`

return das;
}

let Mon1 = document.querySelector('.Monday-1')
let Mon2 = document.querySelector('.Monday-2')
let Mon3 = document.querySelector('.Monday-3')
let Mon4 = document.querySelector('.Monday-4')
let Mon5 = document.querySelector('.Monday-5')

let Tue1 = document.querySelector('.Tuesday-1')
let Tue2 = document.querySelector('.Tuesday-2')
let Tue3 = document.querySelector('.Tuesday-3')
let Tue4 = document.querySelector('.Tuesday-4')
let Tue5 = document.querySelector('.Tuesday-5')

let Wed1 = document.querySelector('.Wednsday-1')
let Wed2 = document.querySelector('.Wednsday-2')
let Wed3 = document.querySelector('.Wednsday-3')
let Wed4 = document.querySelector('.Wednsday-4')
let Wed5 = document.querySelector('.Wednsday-5')

let Thu1 = document.querySelector('.Thursday-1');
let Thu2 = document.querySelector('.Thursday-2');
let Thu3 = document.querySelector('.Thursday-3');
let Thu4 = document.querySelector('.Thursday-4');
let Thu5 = document.querySelector('.Thursday-5');

let Fri1 = document.querySelector('.Friday-1');
let Fri2 = document.querySelector('.Friday-2');
let Fri3 = document.querySelector('.Friday-3');
let Fri4 = document.querySelector('.Friday-4');
let Fri5 = document.querySelector('.Friday-5');

let Mondays = [Mon1, Mon2, Mon3, Mon4, Mon5];

let Tuesdays = [Tue1, Tue2, Tue3, Tue4, Tue5];

let Wednsdays = [Wed1, Wed2, Wed3, Wed4, Wed5];

let Thursdays = [Thu1, Thu2, Thu3, Thu4, Thu5];

let Fridays = [Fri1, Fri2, Fri3, Fri4, Fri5];



for(let i = 1; i <= 5; i++){
if(Monday[i].Double == true){
Mondays[i-1].innerHTML = b(Monday[i].Name, Monday[i].cab, Monday[i].teacher, Monday[i].week, Monday[i].type, Monday[i].Name2, Monday[i].cab2, Monday[i].teacher2, Monday[i].week2, Monday[i].type2 );
Mondays[i-1].style.backgroundImage = "url('./Images/lesson.png')";
}

else if(Monday[i].Double === false)
    Mondays[i-1].innerHTML = a(Monday[i].Name, Monday[i].cab, Monday[i].teacher, Monday[i].week, Monday[i].type);

}

for(let i = 1; i <= 5; i++){
    if(Tuesday[i].Double == true){
    Tuesdays[i-1].innerHTML = b(Tuesday[i].Name, Tuesday[i].cab, Tuesday[i].teacher, Tuesday[i].week, Tuesday[i].type, Tuesday[i].Name2, Tuesday[i].cab2, Tuesday[i].teacher2, Tuesday[i].week2, Tuesday[i].type2 );
    Tuesdays[i-1].style.backgroundImage = "url('./Images/lesson.png')";
    }
    
    else if(Tuesday[i].Double === false)
        Tuesdays[i-1].innerHTML = a(Tuesday[i].Name, Tuesday[i].cab, Tuesday[i].teacher, Tuesday[i].week, Tuesday[i].type);
    
    }

for(let i = 1; i <= 5; i++){
    if(Wednsday[i].Double == true){
    Wednsdays[i-1].innerHTML = b(Wednsday[i].Name, Wednsday[i].cab, Wednsday[i].teacher, Wednsday[i].week, Wednsday[i].type, Wednsday[i].Name2, Wednsday[i].cab2, Wednsday[i].teacher2, Wednsday[i].week2, Wednsday[i].type2 );
    Wednsdays[i-1].style.backgroundImage = "url('./Images/lesson.png')";
    }
    
    else if(Wednsday[i].Double === false)
        Wednsdays[i-1].innerHTML = a(Wednsday[i].Name, Wednsday[i].cab, Wednsday[i].teacher, Wednsday[i].week, Wednsday[i].type);
    
    }

for(let i = 1; i <= 5; i++){
    if(Thursday[i].Double == true){
    Thursdays[i-1].innerHTML = b(Thursday[i].Name, Thursday[i].cab, Thursday[i].teacher, Thursday[i].week, Thursday[i].type, Thursday[i].Name2, Thursday[i].cab2, Thursday[i].teacher2, Thursday[i].week2, Thursday[i].type2 );
    Thursdays[i-1].style.backgroundImage = "url('./Images/lesson.png')";
    }
    
    else if(Thursday[i].Double === false)
        Thursdays[i-1].innerHTML = a(Thursday[i].Name, Thursday[i].cab, Thursday[i].teacher, Thursday[i].week, Thursday[i].type);
    
    }

    for(let i = 1; i <= 5; i++){
        if(Friday[i].Double == true){
        Fridays[i-1].innerHTML = b(Friday[i].Name, Friday[i].cab, Friday[i].teacher, Friday[i].week, Friday[i].type, Friday[i].Name2, Friday[i].cab2, Friday[i].teacher2, Friday[i].week2, Friday[i].type2 );
        Fridays[i-1].style.backgroundImage = "url('./Images/lesson.png')";
        }
        
        else if(Friday[i].Double === false)
            Fridays[i-1].innerHTML = a(Friday[i].Name, Friday[i].cab, Friday[i].teacher, Friday[i].week, Friday[i].type);
        
        }




//Mon1.innerHTML = a(Monday[1].Name, Monday[1].cab, Monday[1].teacher, Monday[1].week, Monday[1].type);

