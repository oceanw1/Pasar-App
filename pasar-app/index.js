let count1 = 0;
let count2 = 0;
let count3 = 0;
let fish1 = [0,0,0]
const Result1 = document.querySelector("#Result1");
const Result2 = document.querySelector("#Result2");
const Result3 = document.querySelector("#Result3");
const jsactivity1 = document.querySelector("#activity1")
const jsactivity2 = document.querySelector("#activity2")
const jsactivity3 = document.querySelector("#activity3")
const finalTotal = document.querySelector("#Total")
const fish1LocalStorage = JSON.parse(localStorage.getItem("fish1"))

count1 = fish1LocalStorage[0]
count2 = fish1LocalStorage[1]
count3 = fish1LocalStorage[2]
fish1[0]=fish1LocalStorage[0]
fish1[1]=fish1LocalStorage[1]
fish1[2]=fish1LocalStorage[2]
Result1.innerHTML= fish1LocalStorage[0]
Result2.innerHTML= fish1LocalStorage[1]
Result3.innerHTML= fish1LocalStorage[2]
// jsactivity1.innerHTML = `Amount: ${fish1LocalStorage[0]}`
// jsactivity2.innerHTML = `Amount: ${fish1LocalStorage[1]}`
// jsactivity3.innerHTML = `Amount: ${fish1LocalStorage[2]}`


// let hello= (fish1LocalStorage[0] * 10000) + (fish1LocalStorage[1] * 16000) + (fish1LocalStorage[2] * 14000);
// finalTotal.innerHTML = `TOTAL: Rp:${hello}`;

function setEverything(){
  console.log("HELLO")
}

function getTotal(){
  let money= (fish1LocalStorage[0] * 10000) + (fish1LocalStorage[1] * 16000) + (fish1LocalStorage[2] * 14000);
  finalTotal.innerHTML = `TOTAL: Rp:${money}`;
  console.log("HELLO")
}

function FINAL(){
  Result1.innerHTML = fish1[0];
  Result2.innerHTML= fish1[1]
  Result3.innerHTML= fish1[2]
  localStorage.setItem("fish1", JSON.stringify(fish1))
}


function counterAdd1(){
  count1 += 1;
  fish1[0] = count1
  FINAL()
  getTotal()
}

function counterSubtract1(){
  if (count1 > 0){
    count1 -= 1;
    fish1[0] = count1
    FINAL()
    getTotal()
  }
}
function counterAdd2(){
  count2 += 1;
  fish1[1] = count2
  FINAL()
  getTotal()
}

function counterSubtract2(){
  if (count2 > 0){
    count2 -= 1;
    fish1[1] = count2
    FINAL()
    getTotal()
  }
}
function counterAdd3(){
  count3 += 1;
  fish1[2] = count3
  FINAL()
  getTotal()
}

function counterSubtract3(){
  if (count3 > 0){
    count3 -= 1;
    fish1[2] = count3
    FINAL()
    getTotal()
  }
}




