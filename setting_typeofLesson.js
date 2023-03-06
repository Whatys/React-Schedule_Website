const checkDouble = false;

let lessonBlock = document.querySelector('.schedule__leson');




if(checkDouble === false)
lessonBlock.style.background = "#FFD3D3";
else
lessonBlock.style.backgroundImage = "url('./Images/lesson.png')";

//console.log(lessonBlock);


import {Monday} from './Lessons/IA2101.js';

let check = Monday.Lesson_1.Double;

// console.log(check);
// console.log(Monday);


console.log(Monday.Lesson_1);

let val = '<div class="double-column">' +        
'<div class="double-row first"> '+
'    <div class="letterD blockt">I</div> '+ 
'    <div class="nameD blockt">IA</div> '+ 
'    <div class="double__types blockt">'+
'        <p>Ⓛ</p>'+
'        <p></p>'+
'    </div>'+
'</div>'+
'<div class="double__cab">145b</div>'+
'<div class="double__teacher">G. Marin</div>'+
'</div>'+
'<div class="double-row second">'+
'<div class="letterD blockt">II</div>'+
`<div class="nameD blockt">${Monday.Lesson_1.Name}</div>`+
'<div class="double__types blockt">'+
'    <p>Ⓛ</p>'+
'    <p></p>'+
'</div>'+
'</div>'+
'<div class="double__cab">237</div>'+
'<div class="double__teacher">L. Novac</div>'+
'</div>'

var a = document.querySelector('.afafafaf')
console.log(a)

a.innerHTML = val;

