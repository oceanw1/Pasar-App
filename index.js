let count1 = 0;
let count2 = 0;
let count3 = 0;
let Result1 = document.querySelector("#Result1");
let Result2 = document.querySelector("#Result2");
let Result3 = document.querySelector("#Result3");
let finalTotal = document.querySelector("#Total")

function counterAdd1(){
  count1 += 1;
  Result1.innerHTML = count1;
  getTotal()
}

function counterSubtract1(){
  if (count1 > 0){
    count1 -= 1;
    Result1.innerHTML = count1;
  }
  getTotal()
}
function counterAdd2(){
  count2 += 1;
  Result2.innerHTML = count2;
  getTotal()
}

function counterSubtract2(){
  if (count2 > 0){
    count2 -= 1;
    Result2.innerHTML = count2;
  }
  getTotal()
}
function counterAdd3(){
  count3 += 1;
  Result3.innerHTML = count3;
  getTotal()
}

function counterSubtract3(){
  if (count3 > 0){
    count3 -= 1;
    Result3.innerHTML = count3;
  }
  getTotal()
}

function getTotal() {
  let money= (count1 * 10000) + (count2 * 16000) + (count3 * 14000);
  finalTotal.innerHTML = `TOTAL: Rp:${money}`;
}



