

/*
const af = document.querySelector(".test_one");
af.textContent = Monday.Lesson_1.Name;
console.log(af); */

//console.log(Monday);


const value = document.querySelector('.lesson-1')
//value.textContent = Monday.Lesson_1.Name


const xmas95 = new Date();
const hours = xmas95.getHours();

console.log(hours); // 23

const date = new Date();
const hour = date.getHours();

console.log(hour);




firstName="Para";
secondName="Impara";
startDate = new Date(2017,0,2); //first Monday of the year
currentDate = new Date(); 
weekNumber=Math.ceil((currentDate.getTime()-startDate.getTime())/86400000/7);



const week = document.querySelector('.schedule__weekCheck');
const a = ("Acum e saptamana  " +((weekNumber % 2)? firstName : secondName));
week.textContent = a; 