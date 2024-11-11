

// const digit = prompt('Enter a value');
// const demo = document.getElementById('output');
// if (digit == 0){
//   demo.innerHTML = 'Zero'
// } 
// else if (digit == 1){

// 	demo.innerHTML = 'One'
//   }
//   else if (digit == 2){
// 	demo.innerHTML = 'Two'
//   }
//   else if (digit == 3){
// 	demo.innerHTML = 'Three'
//   }
//   else if (digit == 50){
// 	demo.innerHTML = '50'
//   }
//   else if (digit == 10){
// 	demo.innerHTML = '10'
//   } else {
// 	demo.innerHTML = 'Is it a value'
//   }
 
// switch(digit){
// 	case '0':
// 		demo.innerHTML = 'Zero'
// 		break;
// 		case '1':
// 			demo.innerHTML = 'One'
// 			break;
// 			case '2':
// 				demo.innerHTML='Two'
// 				break
// 				default : 
// 				demo.innerHTML = 'value not set'
	
// }

// for (var num = 0; num<=50; num = num + 1){
//        document.write(''+ num)
// }
// for(i=10; i>=0; i = i -1){
//  document.write(''+i +'  ')
// }

//  for (i = 5; i<=50; i = i + 5){
//  document.write(''+ 'Hello'+'  ' +i)
//  }

// var sum = 0;

// for(i = 1; i<=5; i = i + 1){
//     sum += 50; 
// 	document.write(sum+'<br/>')
// }

// var sum1 = 1;

// for(i = 1; i<=5; i = i + 1){
//     sum1 *= 50; 
// 	document.write(sum1+' <br/>')
// }

// var sum2 = 2;

// for(i = 1; i<=5; i = i + 1){
//     sum2 /= 100; 
// 	document.write(sum2+'<br/> ')
// }

//  var sum2 = 1.5;

//  for(i = 2; i<=5; i = i + 1){
//      sum2 %= 50; 
//  	document.write(sum2)
//  }

// for (v=1; v!=20; v+=1){
//        document.write(' '+ v)
// }
// var i =1;
// while(i<=30){
//     document.write(' '+i);
//     i+=1;
// }

//var i =1;
/*while(i<=20){
    document.write(' '+i);
    i +=1;
}
*/
/*var sum=0;
var i = 1;
 while (i<= 50){
	 if (i % 3 == 0){
		sum = sum + i;	 
	 }
	i +=1;	 
 }
 	 document.write('Hello '+ i);
 document.write('<h1>Program end</h1>');
 */
 
 /*var i = 1;
 while(i<=10){
	 document.write(' '+i);
	 i += 1;
 }
 document.write('<h1>Hello I am defrent from author</h1>');
 var u = 1;
 do{
	 document.write(' '+u);
	 u += u;
 } while(u<=32);
 */
  // Break and Contenue is here------------------------------------------
 /*for (i=1;i<=100;i = i + 1){
	 if (i == 10){
		 break
	 }
	 document.write(' '+i);
 }
 document.write('<br/>Hello i am end<br/>');
 for (i=1; i<=100;i++){
	 document.write(' '+i);
	 if(i == 20){
		 break
	 }	 
 }
 */
/* for (i=1; i<=100;i++){
 if(i%2==0){
	 continue
 }
	 document.write(' '+i);
 }
 document.write('<br/>I am from break and Continue</br>');
 for (i=1; i<=100;i++){
	 if(i % 2 !=0){
		 continue
	 }
	 document.write(' '+i);
 }
 */
  // Tarnary Oparetor is here------------------------------------------
 /*var number = Number(prompt('Enter a number'));

   var result =number > 0 ? 'posetive' : 'Nagative'
  document.write(' I am from tarnary Oparetor =  '+ result);
  */
 // var number =Number(prompt('Enter a number :'));
  //number >0 ? console.log('Positive Number') : console.log('Nagative Number')
/* 
 if(number > 0){
	 alert('Psitive Number');
 } else{
	 alert('Nagative Number');
 }
 */
 // Tarnary Oparetor is here------------------------------------------
/* var number = Number(prompt('Enter a Number : '));
 var result = number > 0 ? console.log('Positive') : number <0 ? console.log('Nagative') :'Zero'
 console.log(result);
 */
 /*
 
 // Function is here------------------------------------------
 function addition(num1,num2){
	 var result = num1 + num2;
	 document.write(' Addition Number is = '+num1+' + '+num2+' = ' +result +'<br>');
 }
addition(20,10);
//subtraction number is here------------------------------------------
 function sub(num1,num2){
	 var result = num1 - num2;
	 document.write(' Subtraction Number is = '+num1+' + '+num2+' = '+result+'<br>');
 }
sub(20,10);
//Multiplication number is here------------------------------------------
 function mul(num1,num2){
	 var result = num1 * num2;
	 document.write(' Multiplication Number is = '+num1+' + '+num2+' = '+result+'<br>');
 }
mul(20,10);
//Divition number is here------------------------------------------
 function div(num1,num2){
	 var result = num1 / num2;
	 document.write(' Divition Number is = '+num1+' + '+num2+' = '+result+'<br>');
 }
div(20,10);
//Moduluse number is here------------------------------------------
 function moduluse(num1,num2){
	 var result = num1 % num2;
	 document.write(' Moduluse Number is = '+num1+' + '+num2+' = '+result+'<br>');
 }
moduluse(20,10);

*/
/*/////////////////////////////////////////////////////////////////////////////////////////////
// IIFEs (Imidiatly Invokable Function Expretion যে ফাংস্ন তৈরী হওয়ার সাথে সাথেই কল হবে!)
//////////////////////////////////////////////////////////////////////////////////////////////
(function display(num1,num2){
	var result = num1 + num2;
	document.write('Addition Number is : '+result);
})(10,10);
*/
/*/Function Expretion is here------------------------------------------
const display = function massage(msg){
	document.write(msg);
};
display('Hello How are you');
*/
/*/ Array is here------------------------------------------
const arry = ['habib','Kibriya','Tasys','Akin','Devid'];
document.write('Langth of arry is :- '+arry.length +'<br/>');
arry.push('Nafis','ibrahim','akram');//insert new data in the last of arry
arry.unshift('Alif');//insert new data in the first position of arry
document.write('Langth of arry is :- '+arry.length +'<br/>');
document.write(arry[1]);
document.write(' '+arry);
arry.pop(); //remove last item from array-----------
arry.shift();//remove first item from array------
document.write('<br/>');
document.write('Langth of arry is :- '+arry.length +'<br/>');
//array concatinaition is here------------------------------------------
var country1 = ['Bangladesh','Pakistan'];
var country2 = ['United state','Arab Amirat'];
var country = country1.concat(country2);
document.write(country);
*/
/*var person = ['Habib','Tasnim','Ikbal','Hovi','Give'];
for (var i = 0; i<5; i++){
	document.write(person[i])
}
var sum = 0;
for (var i = 0; i<5; i++){
	sum += i;
	document.write(sum+'<br/>');
}
*/
/*
var num = [10,20,30,40,50];
for (var i = 0; i<5; i++){
	document.write(' '+num[i]+'<br/>')
}
var num1 = new Array();
var sum = 0;
for(i=0; i<5;i++){
	num1[i]= parseInt(prompt('Enter a number : '));
	sum += num1[i];
}

document.write(' sum is = '+ sum);
*/
/*
const arry = ['habib','Ibrahim','sufi'];
arry.unshift('Imon');
document.write(arry+'<br/>');
arry.shift();
document.write(arry +'<br/>');
arry.splice(0,0,'Hakim','Godi'); // insert data in arry where you like to insert; firs one is where position do you want to set new data. secound one is how maney item do you like to remove from last of your array------
document.write(arry+'<br/>');
arry.splice(1,2); // remove item from arry. just insert starting point and ending point
document.write(arry+'<br/>');
var alpahShort = arry.sort(); // Sort as a b c --z mode
alpahShort.reverse(); // Sort as z y x - b a mode
document.write(alpahShort);

var num = [20,4,50,31,1,8]; // sort number by 1 2 3 ---- 9 mode
num.sort(function(a,b){
	return a-b;
});
document.write(num+'<br>');
var num = [20,4,50,31,1,8]; // sort number by 9 8 7 6 5 --1 mode
num.sort(function(a,b){
	return b-a;
});
document.write(num)
*/
/*How to fiend a max score number ---------------------------- importen this lason for your web jurny!!!!!!!!!!!!!!!!!!!!!!
function highestScore(scores){
	var max = scores[0];
	for (x=1; x<scores.length;x++){
		if(max<scores [x]){
			max = scores[x];
		}
	}
	return max;
}
let arry = [20,30,50,80,1,3];
var maxScore = highestScore(arry);
document.write(maxScore);
*/
/* 

function highest(maximum){
	var max = maximum[0];
	for(i=1;i<maximum.length;i++){
		if (max<maximum[i]){
			max = maximum[i];
		}
	}
	return max;
}
var arry = [20,12,31,41,25];
var maxScore = highest(arry);
document.write(maxScore);
////////////
console.clear();
function highestNum(playerInfo){
	var highestScorer = playerInfo[0][0];
	var highestScore = playerInfo[0][1];
	for(var x=1; x<playerInfo.length; x++){
		if(highestScore<playerInfo[x][1]){
			highestScore = playerInfo [x][1];
			highestScorer = playerInfo [x][0];
		}
	}
	return highestScorer;
}

var playerInfo = [
  ['Habib',2101],
  ['Ikman',22],
  ['Imon',23],
  ['Jicin',241],
  ['Xman',25],
];
var num = highestNum(playerInfo);
document.write(num);
*/
// function highest(maximum){
// 	var max = maximum[0];
// 	for(i=1;i<maximum.length;i++){
// 		if (max<maximum[i]){
// 			max = maximum[i];
// 		}
// 	}
// 	return max;
// }
// var arry = [20,12,31,41,25];
// var maxScore = highest(arry);
// document.write(maxScore);
// Object is here start --------------------------------------------------Object
// function Student(name,age,gender,clss){
//    this.name = name;
//    this.age = age;
//    this.gender = gender;
//    this.clss = clss;
//    this.display = function(){
// 	document.write(this.name);
// 	document.write(this.age);
// 	document.write(this.gender);
// 	document.write(this.clss);
//    }

// }
// var student1 = new Student('Habib',24,'male','MS');
// student1.display();
/*
function Students(name,age,gender,country,clss){
     this.name = name;
	 this.age = age;
	 this.gender = gender;
	 this.country = country;
	 this.clss = clss;
	 this.display = function(){
		document.write(' '+this.name +' ')
		document.write(this.age +' ')
		document.write(this.gender +' ' )
		document.write(' '+this.country +' ' )
		document.write(this.clss + '<br>')
	 }
}
var student1 = new Students ('Habib',24,'male',['Bangladesh','Pakistan','Nepal'],'Master');
var student2 = new Students ('Vavlu',50,'female',['india','Sumaliya','Nijeria'],'SSS');
var student3 = new Students ('Imon',34,'Other',['Bangladesh','United Arab','Nepal'],'Hsc');
var student4 = new Students ('Kobir',14,'male',['itali','Vutan','USA'],'Secoundry');
var student5 = new Students ('Habiba',21,'female',['Bangladesh','Pakistan','Nepal'],'Hafij');
student2.display();
*/
/*//////////////////////////////////////////////////////////////////////////////////////////////////
var math = document.querySelector('.demo');
var math = math.innerHTML = 
"<p><b>Math.E:</b> " + Math.E + "</p>" +
"<p><b>Math.PI:</b> " + Math.PI + "</p>" +
"<p><b>Math.SQRT2:</b> " + Math.SQRT2 + "</p>" +
"<p><b>Math.SQRT1_2:</b> " + Math.SQRT1_2 + "</p>" +
"<p><b>Math.LN2:</b> " + Math.LN2 + "</p>" +
"<p><b>Math.LN10:</b> " + Math.LN10 + "</p>" +
"<p><b>Math.LOG2E:</b> " + Math.LOG2E + "</p>" +
"<p><b>Math.Log10E:</b> " + Math.LOG10E + "</p>"; 
*/
/*//////////////////////////////////////////////////////////////////Random Number Game //////////////////////
var win = 0;
var file = 0;
for (i=0;i<5;i++){
	var game = parseInt(prompt('Enter a Number between 1 to 5 :'));
var randomNumber = Math.floor(Math.random()*5) + 1;
	if (game == randomNumber){
		console.log('win');
         win++;
	}else{
		console.log('Fail');
		file++;
	}
}
document.write('You win = '+win+'<br>');
document.write('You fail = '+file);
*////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*/ Date and time is here ////////////////////////////////////////////Date Time //////////////////////////////////
var parafield = document.querySelector('.demo');
var date = new Date();
parafield.innerHTML = date;

var month = date.getMonth();
document.write('Month is = '+month+'<br>');

var correctDate = date.getDate();
document.write('Correct Date is = '+correctDate +'<br>');

var day = date.getDay();
document.write('day is = '+day +'<br>');

var time = date.getTime();
document.write('Time is = '+time +'<br>');

var fullYear = date.getFullYear();
document.write('fullYear is = '+fullYear +'<br>');

var hour = date.getHours();
document.write('hour is = '+hour +'<br>');

var minutes = date.getMinutes();
document.write('minutes is = '+minutes +'<br>');

var timeZoneOffset = date.getTimezoneOffset();
document.write('timeZoneOffset is = '+timeZoneOffset);
*////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
var demo = document.getElementsByClassName('demo')[0];
demo.innerHTML = 'Hello world'
///////////////////document.getElementsByClassName Return A Array List ////////////////////////////////////////////
var demo1 = document.getElementsByTagName('p')[1];
demo1.innerHTML = 'I am para index 1';
*/
///////////////////document.getElementsByTagName Return A Array List ////////////////////////////////////////////
/*
var highferlink = document.getElementsByTagName('a')[0];
highferlink.style.textDecoration = 'none';
highferlink.style.color = 'red';
highferlink.style.fontSize = '1.5rem';
highferlink.innerHTML = 'My web site';
highferlink.href = 'https://madrasahedayatulummahdhaka.xyz/';
*/

/* Button Event lesoner ///////////////////////////////////////////////////////////////////////////////////////////
var imageChange = document.getElementById('myImageSorce');

function changeImage1(){
	imageChange.src = 'img/bkash.png';
}
function changeImage2(){
	imageChange.src = 'img/nagad.png';
}
*/
// Creat a html Element By script ///////////////////////////////////////////////////////////////////////////////
/*
var headding = document.querySelector('.my-div');
var headding1 = document.createElement('h1');
var headdingtext = document.createTextNode('Hellow I am H1');
headding1.appendChild(headdingtext);
headding.appendChild(headding1); 

var para = document.getElementsByTagName('p')[0];

var headding0 = document.createElement('h3');
var h3text = document.createTextNode('I am h3 before all but append in at last of all');
headding0.appendChild(h3text);
headding.insertBefore(headding0, para);
*/
// How to add css class directly with html element by javascript /////////////////////////////////////////////////////Style add vi js
/*
var para = document.querySelector('#para1');
      para.classList.add('button_style');
	  function changStyle(){
		var myDivChild1 = document.querySelector('.my-div');
		var child1 = myDivChild1.children[1];
		child1.classList.add('button_style');
	  }
function removeStyle(){
	para.remove('button_style');
}
	*/
	// How work addEventListener is js //////////////////////////////////////////////////////////////////////// change btn ////
	/*
var len = document.querySelectorAll(".btn").length;

for(var i=0; i <len; i++){
	document.querySelectorAll(".btn")[i].addEventListener("click", function(){
		var text = this.innerHTML;
		document.querySelector("h1").innerHTML = text + ' is clicked';
		});
}
/*
document.querySelectorAll(".btn")[0].addEventListener("click", function(){
	var text = this.innerHTML;
	document.querySelector("h1").innerHTML = text + ' is clicked';
	});
	document.querySelectorAll(".btn")[1].addEventListener("click", function(){
		var text = this.innerHTML;
		document.querySelector("h1").innerHTML = text + ' is clicked';
		});
		document.querySelectorAll(".btn")[2].addEventListener("click", function(){
			var text = this.innerHTML;
			document.querySelector("h1").innerHTML = text + ' is clicked';
			});
*/
// how to add audio to your html element //////////////////////////////////////////////////audio////
/*
for (var i=0; i<3; i++){
	document.querySelectorAll(".btn")[i].addEventListener("click",function(){
      var text = this.innerHTML;
	  console.log(text);
	  switch(text){
            case 'button 1 audio':
				var audio = new Audio('audio/audio1.mp3');
				audio.play();
				break;
				case 'button 2 audio':
					var audio = new Audio('audio/audio2.mp3');
					audio.play();
					break;
					case 'button 3 audio':
						var audio = new Audio('audio/audio3.MP3');
						audio.play();
						break;
	  }
	});

}
*/
/*
for (var i=0; i<3; i++){
	document.querySelectorAll(".btn")[i].addEventListener("click",function(){
      var text = this.innerHTML;
	  console.log(text);
	  audioPlay(text);  
	});

}
function audioPlay(text){
    switch(text){
		case 'button 1 audio':
			var audio = new Audio('audio/audio1.mp3');
			audio.play();
			break;
			case 'button 2 audio':
				var audio = new Audio('audio/audio2.mp3');
				audio.play();
				break;
				case 'button 3 audio':
					var audio = new Audio('audio/audio3.MP3');
					audio.play();
					break;
  }
}
*/
// Add animation with html element by js /////////////////////////////Animation
/*
for (var i=0; i<3; i++){
	document.querySelectorAll(".btn")[i].addEventListener("click",function(){
      var text = this.innerHTML;
	  console.log(text);
	  audioPlay(text);  
	  Addanimation(text);
	});

}
function audioPlay(text){
    switch(text){
		case 'b':
			var audio = new Audio('audio/audio1.mp3');
			audio.play();
			break;
			case 'a':
				var audio = new Audio('audio/audio2.mp3');
				audio.play();
				break;
				case 'c':
					var audio = new Audio('audio/audio3.MP3');
					audio.play();
					break;
  }
}
function Addanimation(text){
 var selectedButton = document.querySelector("."+text);
     selectedButton.classList.add("anim");
	 setTimeout(function(){
		selectedButton.classList.remove("anim");
	 },1000);
}
 */

// Form Handelling ************* /////////////////////////////////// Form Handelling**********
/* 10/20/2024 
var form = document.querySelector('form');
var Name = form.querySelector("div #name");
var email = form.querySelector("div #email");
var password = form.querySelector("div #password");
form.addEventListener("submit",formHandel);
function formHandel(e){
	e.preventDefault();
	var para = document.querySelector("p");
	para.innerHTML = Name.value + '<br>'+ email.value +'<br>'+password.value;
}
*/
/*
var a = 100;
console.log(window.ListFormat);
var i = [10,20,30];
for (num of i){
	document.write(num);
}
*/
/*
function getItems(){
	return[10,20,330,4];
}
let items = getItems();
let fourItem = items[4]!= undefined?items[4]:101;
document.write(`${items+'<br>'+fourItem}`);
*/
//document.write(items);
//Arry nested array ///////////////////////--------------//////////////////------
/*
function getProfile(){
	return[
	'Habib',
	'Kazi',
	['Prasident','United','State']
	];
}
let [firstName,lastName,[p,u,s]] =getProfile();
document.write(p,u,s);
let a = 2, b = 20;
[a,b] = [b,a];
document.write(`${'<br>'+a + '<br>' + b}`);
*/
/*
function stat(a,b){
	return [
	a + b,
	(a+b)/2,
	a - b
	];
}
let [sum, average, diffrence] = stat(20,10);
document.write(`${'<br>' +sum + '<br>' + average + '<br>'+ diffrence}`);
*/
////// Object Destructuring Introduction to the javaScript object destructuring assignment/////////*********------////
/*
let person = {
	firstName : 'Habib',
	lastName : 'Kazi'
}
let {firstName, lastName} = person;
document.write(firstName,lastName);
*/
/*
let fName = person.firstName;
let lName = person.lastName;
console.log(fName,lName);
*/
/*
let person = {
	firstName:'Habib',
	middleName:'pa',
	lastName:'kazi',
	currentAge:24
}
let {
	firstName,
	lastName,
	middleName,
	currentAge:age =10
} = person;
console.log(age);
*/
////////////////////////////////////////////////////////////Null object 
/*
function getPerson(){
	return null;
}
let {
	firstName,
	lastName
}=getPerson() || {};
document.write(firstName,lastName);
*/
/////////////////////////////////////////////////////////////Nested object
/*
let employee = {
	id:101,
	name:{
		firstName:'Habib',
		lastName:'kazi'
	}
}

let {
	id,
	name:{
		firstName,
		lastName
	}
} = employee;
document.write(`${id + '<br>'+ firstName + '<br>'+ lastName+'<br>'}`);

let {
	name:{
		firstName,
		lastName
	},
	name
} = employee;
console.log(name);*/
let display = ({ firstName, lastName }) => document.write(`${firstName} ${lastName}`);

let person = {
    firstName: 'Habib',
    lastName: 'Kazi'
};

display(person);
