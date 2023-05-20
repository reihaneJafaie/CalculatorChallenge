
// این قسمت برای اضافه کردن مود های مختلف هست

let menuSymbolS = document.getElementById('menubarStandard');
let menuSymbolP = document.getElementById('menubarProgrammer');
let menuSymbolCL = document.getElementById('menubarConvertLength');

let xsymbol = document.getElementById('xsymbol');
// for menu sliding
menuSymbolS.addEventListener("click" , function(){
   document.querySelector('.sidenav').style.width = "260px";
});
menuSymbolP.addEventListener("click" , function(){

   document.querySelector('.sidenav').style.width = "260px";
});
menuSymbolCL.addEventListener("click" , function(){

   document.querySelector('.sidenav').style.width = "260px";
});
xsymbol.addEventListener("click" , function(){
   document.querySelector('.sidenav').style.width = "0";
});
// for change mode
function toggeleMode(mode){
//element menu
let displayMode = document.querySelectorAll('.displayMode');
//menu
let modes =document.querySelectorAll('.modes');

for(let i =0 ; i<modes.length ; i++){
      if(modes[i].id == mode){
         modes[i].style.display ="inline-block";
            if (modes[i].id == 'programmer'){
               changeBasise();
            }
      }else{
         modes[i].style.display ="none";
      }
   }
   document.querySelector('.sidenav').style.width = "0";
}


// کد های تکراری
// میدونم میشد از getElementByClassName یا  querySelectorAll استفاده کرد اما جواب نمیداد 
// سرچ و تحقیق کزدم به نتیجه نرسیدم تصمیم گرفتم از یک برنامه نویس با تجربه کمک بگیرم پس بزودی این قسمتو آپدیت میکنم

function addDigitOrDecimal(input) {
   const display = document.getElementById("main-display");
   const value = display.textContent;
   
   if (input === ".") {
     if (!value.includes(".")) {
       display.textContent = value + ".";
     }
   } else {
     if (value === "0") {
       display.textContent = input;
     } else if ((value + input).length <= 12) {
       display.textContent = value + input;
     }
   }
 }

function addNum(input) {
   const display = document.getElementById("displayMain-programming");
   const value = display.textContent;

   
   if (input === ".") {
     if (!value.includes(".")) {
       display.textContent = value + ".";
     }
   } else {
     if (value === "0") {
       display.textContent = input;
     } else if ((value + input).length <= 12) {
       display.textContent = value + input;
     }
   }

   changeBasise();
   changeBasiseMode(); 
} 

function addNumLength(input){
   const display = document.getElementById("displayMain-Length");
   const value = display.textContent;
   
   if (input === ".") {
     if (!value.includes(".")) {
       display.textContent = value + ".";
     }
   } else {
     if (value === "0") {
       display.textContent = input;
     } else if ((value + input).length <= 12) {
       display.textContent = value + input;
     }
   }
   ConvertLength()
}
 
// کلید های تکراری
function C(){
   const display = document.getElementById("main-display");
   const historyDisplay = document.getElementById("history-display");
   display.textContent ="0";
   historyDisplay.textContent = "0";
}
function CE(){
      const display = document.getElementById("main-display");
      display.textContent = "0";

}
function backspace(){
   const display = document.getElementById("main-display");
   let value = display.textContent;
   if (value.length === 1) {
     display.textContent = "0";
   } else {
     display.textContent = value.slice(0, -1);
   }
}
function C2(){
   const hex = document.getElementById("Hex");
   const des = document.getElementById("des");
   const oct = document.getElementById("oct");
   const bin = document.getElementById("bin");
   const display = document.getElementById("displayMain-programming");
   const historyDisplay = document.getElementById("historyDisplay-programming");
   display.textContent ="0";
   historyDisplay.textContent = "0";
   hex.textContent = "0";
   des.textContent = "0";
   oct.textContent = "0";
   bin.textContent = "0";
}
 function changeSign2() {
   const display = document.getElementById("displayMain-programming");
   let value = parseFloat(display.textContent);
   display.textContent = (-value);
 }
 function changeSign() {
   const display = document.getElementById("main-display");
   let value = parseFloat(display.textContent);
   display.textContent = (-value);
 }
 function backspace2(){
   const display = document.getElementById("displayMain-programming");
   let value = display.textContent;
   if (value.length === 1) {
     display.textContent = "0";
   } else {
     display.textContent = value.slice(0, -1);
   }
}
function CE2(){
   const display = document.getElementById("displayMain-programming");
   display.textContent = "0";

}
function CE3(){
   const display = document.getElementById("displayMain-Length");
   const display2Length = document.getElementById("display2Length");
   display.textContent ="0";
   display2Length.textContent = "0";
}
function backspace3(){
   const display = document.getElementById("displayMain-Length");
   let value = display.textContent;
   if (value.length === 1) {
     display.textContent = "0";
   } else {
     display.textContent = value.slice(0, -1);
   }
}


//قسمت استاندارد 

 // تابع برای انجام عملیات معکوس (1/x)
 function reciprocal() {
   const display = document.getElementById("main-display");
   const displayBox =document.getElementById('display');
   const historyDisplay = document.getElementById("history-display");
   let value = parseFloat(display.textContent);
   let result = 1 / value;
   if (result.toString().length <= 12) {
      display.textContent = result;
  } else {
      display.style.fontSize = "24px";
      displayBox.style.marginBottom ="19px";
      displayBox.style.marginTop ="19px"
      display.textContent = result;
  }
   historyDisplay.textContent = "1/"+ value;
 }
 // تابع برای انجام عملیات توان دو (x^2)
 function square() {
   const display = document.getElementById("main-display");
   const historyDisplay = document.getElementById("history-display");
   const displayBox =document.getElementById('display');
   let value = parseFloat(display.textContent);
   let result = value*value;
   if (result.toString().length <= 12) {
      display.textContent = result;
  } else {
      display.style.fontSize = "24px";
      displayBox.style.marginBottom ="19px";
      displayBox.style.marginTop ="19px"
      display.textContent = result;
  }
   historyDisplay.textContent = "sqr("+value+ ")";
   
 } 
 // تابع برای انجام عملیات رادیکال (√x)
 function squareRoot() {
   const display = document.getElementById("main-display");
   const historyDisplay = document.getElementById("history-display");
   const displayBox =document.getElementById('display');
   let value = parseFloat(display.textContent);
   let result = Math.sqrt(value);
   if (result.toString().length <= 12) {
      display.textContent = result;
  } else {
      display.style.fontSize = "24px";
      displayBox.style.marginBottom ="19px";
      displayBox.style.marginTop ="19px"
      display.textContent = result;
  }
   historyDisplay.textContent = "root("+value+")";
 }

 // تابع برای انجام عملیات درصد (%)
 function calculatePercentage() {
   const display = document.getElementById("main-display");
   const historyDisplay = document.getElementById("history-display");
   const displayBox =document.getElementById('display');
   let value = parseFloat(display.textContent);
   let result = value / 100;
   if (result.toString().length <= 12) {
      display.textContent = result;
  } else {
      display.style.fontSize = "24px";
      displayBox.style.marginBottom ="19px";
      displayBox.style.marginTop ="19px"
      display.textContent = result;
  }
   historyDisplay.textContent = value + "/ 100"
 }
 // تابع برای محاسبات + - / *
 function calc(singn){
   const plus ="+";
   const minus ="-" ;
   const multiply = "*" ;
   const division = "/";
   const display = document.getElementById("main-display");
   const historyDisplay = document.getElementById("history-display");
   const equal = document.getElementById('equal');
   let click1 = false;
   if(singn==plus || singn == minus || singn == multiply || singn == division){
      historyDisplay.textContent = display.textContent+ singn;
      num1= display.textContent;// :)
      let number1 = parseFloat(num1);
      display.textContent = "0";

      equal.addEventListener("click" , function(){
         if(click1 == false){
            num2 = display.textContent;
         let number2 = parseFloat(num2);
         historyDisplay.textContent = num1 + singn + num2;
         if(singn==plus){
            sum= number1 + number2 ;
         }else if(singn == minus){
            sum= number1 - number2 ;
         }else if(singn == multiply){
            sum= number1 * number2 ;
         }else if(singn == division){
            sum= number1 / number2 ;
         }
      
         if(sum.length <=12){
            display.textContent = sum;
         }else{
            display.fontSize="23px";
            display.textContent = sum;
         }
         click1 = true;
      }
      historyDisplay.textContent =number1 +singn+ number2;
   }); 
   }
 }
 /***
 function plus(){
   const display = document.getElementById("main-display");
   let historyDisplay = document.getElementById("history-display");
   let equal = document.getElementById('equal');
   let click1 = false;

   historyDisplay.textContent = display.textContent+ "+";
   num1= display.textContent;
   let number1 = parseFloat(num1);
   display.textContent = "0";
   addDigitOrDecimal();


   equal.addEventListener("click" , function(){
      if(click1 == false){
          num2 = display.textContent;
      let number2 = parseFloat(num2);
      historyDisplay.textContent = num1 + '+' + num2;
      sum= number1 + number2 ;
      display.textContent = sum;
      click1 = true
      }

      historyDisplay.textContent ="";
     
   }); 
 }
 function minus(){
   const display = document.getElementById("main-display");
   let historyDisplay = document.getElementById("history-display");
   let equal = document.getElementById('equal');
   let click1 = false;
   historyDisplay.textContent = display.textContent+ "-";
   num1= display.textContent;
   let number1 = parseFloat(num1);
   display.textContent = "0";
   addDigitOrDecimal();

   equal.addEventListener("click" , function(){
      if(click1 == false){
          num2 = display.textContent;
      let number2 = parseFloat(num2);
      historyDisplay.textContent = num1 + '-' + num2;
      sum= number1 - number2 ;
      display.textContent = sum;
      click1 = true
      }

      historyDisplay.textContent ="";
     
   }); 
 }
 function multiply(){
   const display = document.getElementById("main-display");
   let historyDisplay = document.getElementById("history-display");
   let equal = document.getElementById('equal');
   let click1 = false;
   historyDisplay.textContent = display.textContent+ "x";
   num1= display.textContent;
   let number1 = parseFloat(num1);
   display.textContent = "0";
   addDigitOrDecimal();

   equal.addEventListener("click" , function(){
      if(click1 == false){
          num2 = display.textContent;
      let number2 = parseFloat(num2);
      historyDisplay.textContent = num1 + 'x' + num2;
      sum= number1 * number2 ;
      display.textContent = sum;
      click1 = true
      }

      historyDisplay.textContent ="";
     
   }); 
 }
 function division(){
   const display = document.getElementById("main-display");
   let historyDisplay = document.getElementById("history-display");
   let equal = document.getElementById('equal');
   let click1 = false;
   historyDisplay.textContent = display.textContent+ "/";
   num1= display.textContent;
   let number1 = parseFloat(num1);
   display.textContent = "0";
   addDigitOrDecimal();

   equal.addEventListener("click" , function(){
      if(click1 == false){
          num2 = display.textContent;
      let number2 = parseFloat(num2);
      historyDisplay.textContent = num1 + '/' + num2;
      sum= number1 / number2 ;
      display.textContent = sum;
      click1 = true
      }

      historyDisplay.textContent ="";
     
   }); 
 }
 */


// قسمت برنامه نویسی 

// درصد 
 function calculatePercentage2() {
   const display = document.getElementById("displayMain-programming");
   const historyDisplay = document.getElementById("historyDisplay-programming");
   
   let value = parseFloat(display.textContent);
   let result = value / 100;
   if (result.toString().length <= 5) {
      display.textContent = result;
  } else {
      display.style.fontSize = "16px";
      display.textContent = result;
  }
   historyDisplay.textContent = value + "/ 100"
 }

function changeBasise(){
   const Hex = document.getElementById('basisHex');
   const Des = document.getElementById('basisDes');
   const Oct = document.getElementById('basisOct');
   const Bin = document.getElementById('basisBin');
   const Ahex = document.getElementById('Ahex');
   const Bhex = document.getElementById('Bhex');
   const Chex = document.getElementById('Chex');
   const Dhex = document.getElementById('Dhex');
   const Ehex = document.getElementById('Ehex');
   const numP8 = document.getElementById("numP8");
   const numP9 = document.getElementById("numP9");
   const numP7 = document.getElementById("numP7");
   const numP6 = document.getElementById("numP6");
   const numP5 = document.getElementById("numP5");
   const numP4 = document.getElementById("numP4");
   const numP3 = document.getElementById("numP3");
   const numP2 = document.getElementById("numP2");

      Hex.addEventListener('click' , function(){
         Hex.style.borderLeft = "2px solid #A46BF5";
         Hex.style.backgroundColor ="#ffffff75";

         Des.removeAttribute('style');
         Des.style.borderLeft = "";
         Des.style.backgroundColor ="";
         Oct.style.borderLeft = "";
         Oct.style.backgroundColor ="";
         Bin.style.borderLeft = "";
         Bin.style.backgroundColor ="";

         numP8.removeAttribute('disabled' ,'');
         numP9.removeAttribute('disabled' ,'');
         numP7.removeAttribute('disabled' ,'');
         numP6.removeAttribute('disabled' ,'');
         numP5.removeAttribute('disabled' ,'');
         numP4.removeAttribute('disabled' ,'');
         numP3.removeAttribute('disabled' ,'');
         numP2.removeAttribute('disabled' ,'');
         Ahex.removeAttribute('disabled' ,'');
         Bhex.removeAttribute('disabled' ,'');
         Chex.removeAttribute('disabled' ,'');
         Dhex.removeAttribute('disabled' ,'');
         Ehex.removeAttribute('disabled' ,'');
         Fhex.removeAttribute('disabled' ,'');
      });

      Des.addEventListener('click' , function(){
         Des.style.borderLeft = "2px solid #A46BF5";
         Des.style.backgroundColor ="#ffffff75";
         Hex.style.borderLeft = "";
         Hex.style.backgroundColor ="";
         Oct.style.borderLeft = "";
         Oct.style.backgroundColor ="";
         Bin.style.borderLeft = "";
         Bin.style.backgroundColor ="";

         Ahex.setAttribute('disabled' ,'');
         Bhex.setAttribute('disabled' ,'');
         Chex.setAttribute('disabled' ,'');
         Dhex.setAttribute('disabled' ,'');
         Ehex.setAttribute('disabled' ,'');
         Fhex.setAttribute('disabled' ,'');
         numP8.removeAttribute('disabled' ,'');
         numP9.removeAttribute('disabled' ,'');
         numP7.removeAttribute('disabled' ,'');
         numP6.removeAttribute('disabled' ,'');
         numP5.removeAttribute('disabled' ,'');
         numP4.removeAttribute('disabled' ,'');
         numP3.removeAttribute('disabled' ,'');
         numP2.removeAttribute('disabled' ,'');

      });

      Oct.addEventListener('click' , function(){
         Oct.style.borderLeft = "2px solid #A46BF5";
         Oct.style.backgroundColor ="#ffffff75";
         Hex.style.borderLeft = "";
         Hex.style.backgroundColor ="";
         Des.style.borderLeft = "";
         Des.style.backgroundColor ="";
         Bin.style.borderLeft = "";
         Bin.style.backgroundColor ="";

         Ahex.setAttribute('disabled' ,'');
         Bhex.setAttribute('disabled' ,'');
         Chex.setAttribute('disabled' ,'');
         Dhex.setAttribute('disabled' ,'');
         Ehex.setAttribute('disabled' ,'');
         Fhex.setAttribute('disabled' ,'');
         numP8.setAttribute('disabled' ,'');
         numP9.setAttribute('disabled' ,'');
         numP7.removeAttribute('disabled' ,'');
         numP6.removeAttribute('disabled' ,'');
         numP5.removeAttribute('disabled' ,'');
         numP4.removeAttribute('disabled' ,'');
         numP3.removeAttribute('disabled' ,'');
         numP2.removeAttribute('disabled' ,'');

      });

      Bin.addEventListener('click' , function(){
         Bin.style.borderLeft = "2px solid #A46BF5";
         Bin.style.backgroundColor ="#ffffff75";
         Hex.style.borderLeft = "";
         Hex.style.backgroundColor ="";
         Des.style.borderLeft = "";
         Des.style.backgroundColor ="";
         Oct.style.borderLeft = "";
         Oct.style.backgroundColor ="";

         Ahex.setAttribute('disabled' ,'');
         Bhex.setAttribute('disabled' ,'');
         Chex.setAttribute('disabled' ,'');
         Dhex.setAttribute('disabled' ,'');
         Ehex.setAttribute('disabled' ,'');
         Fhex.setAttribute('disabled' ,'');
         numP8.setAttribute('disabled' ,'');
         numP9.setAttribute('disabled' ,'');
         numP7.setAttribute('disabled' ,'');
         numP6.setAttribute('disabled' ,'');
         numP5.setAttribute('disabled' ,'');
         numP4.setAttribute('disabled' ,'');
         numP3.setAttribute('disabled' ,'');
         numP2.setAttribute('disabled' ,'');
      });
 }

function caclProgrammer(singn){
   const plus ="+";
   const minus ="-" ;
   const multiply = "*" ;
   const division = "/";
   const display = document.getElementById("displayMain-programming");
   const historyDisplay = document.getElementById("historyDisplay-programming");
   const equal = document.getElementById('equlProgramming');
   let click1 = false;

      if(singn==plus || singn == minus || singn == multiply || singn == division){
         historyDisplay.textContent = display.textContent+ singn;
         num1= display.textContent;// :)
         let number1 = parseFloat(num1);
         display.textContent = "0";
   
         equal.addEventListener("click" , function(){
            if(click1 == false){
               num2 = display.textContent;
            let number2 = parseFloat(num2);
            historyDisplay.textContent = num1 + singn + num2;
            if(singn==plus){
               sum= number1 + number2 ;
            }else if(singn == minus){
               sum= number1 - number2 ;
            }else if(singn == multiply){
               sum= number1 * number2 ;
            }else if(singn == division){
               sum= number1 / number2 ;
            }
         
            if(sum.length <=12){
               display.textContent = sum;
               changeBasiseMode();
            }else{
               display.fontSize="23px";
               display.textContent = sum;
               changeBasiseMode();
            }
            click1 = true;
         }
         historyDisplay.textContent =number1 +singn+ number2;
      }); 
      }
   
}
let isButtonClicked = false;
function changeBasiseMode(){
   const hex = document.getElementById("Hex");
   const des = document.getElementById("des");
   const oct = document.getElementById("oct");
   const bin = document.getElementById("bin");
   const display = document.getElementById("displayMain-programming");
   const HexLi = document.getElementById('basisHex');
   const DesLi = document.getElementById('basisDes');
   const OctLi = document.getElementById('basisOct');
   const BinLi = document.getElementById('basisBin');

   if (isButtonClicked==false) {
      des.textContent = display.textContent;
      hex.textContent = parseFloat(des.textContent , 10).toString(16);
      oct.textContent = parseFloat(des.textContent , 10).toString(8);
      bin.textContent = parseFloat(des.textContent , 10).toString(2);
   }
   HexLi.addEventListener('click' , function(){
      isButtonClicked=true;
      hex.textContent = display.textContent;
      des.textContent = parseInt(hex.textContent , 16).toString(10);
      oct.textContent = parseInt(hex.textContent , 16).toString(8);
      bin.textContent = parseInt(hex.textContent , 16).toString(2);
   });
   DesLi.addEventListener('click' , function(){
      isButtonClicked=true;
      des.textContent = display.textContent;
      hex.textContent = parseFloat(des.textContent , 10).toString(16);
      oct.textContent = parseFloat(des.textContent , 10).toString(8);
      bin.textContent = parseFloat(des.textContent , 10).toString(2);
   });
   OctLi.addEventListener('click' , function(){
      isButtonClicked=true;
      oct.textContent = display.textContent;
      hex.textContent = parseInt(oct.textContent , 8).toString(16);
      des.textContent = parseInt(oct.textContent , 8).toString(10);
      bin.textContent = parseInt(oct.textContent , 8).toString(2);
   });
   BinLi.addEventListener('click' , function(){
      isButtonClicked=true;
      bin.textContent = display.textContent;
      hex.textContent = parseInt(bin.textContent , 2).toString(16);
      des.textContent = parseInt(bin.textContent , 2).toString(10);
      oct.textContent = parseInt(bin.textContent , 2).toString(8);
   })


  
}


// قسمت کانورت 
function ConvertLength() {
   const display = document.getElementById("displayMain-Length");
   const display2 = document.getElementById("display2Length");
   const selectElement1 = document.querySelector('#selectMenue1');
   const selectElement2 = document.querySelector('#selectMenue2');
 
   let selectedOption1 = selectElement1.value;
   let selectedOption2 = selectElement2.value;
 
   const inputLength = parseFloat(display.textContent);
 
   let num1 = 0;
   switch (selectedOption1) {
     case 'Nanometer':
      num1 = inputLength / 1000000000;
       break;
     case 'microns':
      num1 = inputLength / 1000000;
       break;
     case 'milimeters':
      num1 = inputLength / 1000;
       break;
     case 'centimeter':
      num1 = inputLength / 100;
       break;
     case 'Meter':
      num1 = inputLength;
       break;
     case 'kilometer':
      num1= inputLength * 1000;
       break;
     case 'Inches':
      num1 = inputLength * 0.0254;
       break;
     case 'Feet':
      num1 = inputLength * 0.3048;
       break;
     case 'Yards':
      num1 = inputLength * 0.9144;
       break;
     case 'Miles':
      num1 = inputLength * 1609.344;
       break;
     case 'Nautical miles':
      num1 = inputLength * 1852;
       break;
   }
 
   // convert base length to target unit
   let num2 = 0;
   switch (selectedOption2) {
     case 'Nanometer':
      num2 = num1 * 1000000000;
       break;
     case 'microns':
      num2 = num1 * 1000000;
       break;
     case 'milimeters':
      num2 = num1 * 1000;
       break;
     case 'centimeter':
      num2 = num1 * 100;
       break;
     case 'Meter':
       num2 = num1;
       break;
     case 'kilometer':
       num2 = num1 / 1000;
       break;
     case 'Inches':
      num2 = num1 / 0.0254;
       break;
     case 'Feet':
      num2 = num1 /0.3048;
       break;
     case 'Yards':
      num2 = num1 / 0.9144;
       break;
     case 'Miles':
      num2 = num1 / 1609.344;
       break;
     case 'Nautical miles':
      num2 = num1 / 1852;
       break;
   }
 
   display2.textContent = parseFloat(num2.toFixed(6)).toString();
 }

function sweetAlertConvert(){

   Swal.fire('Code for converting Length done, skipped similar parts.')
}