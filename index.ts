const firstdata = document.getElementById("data1");
const secondtdata = document.getElementById("data2");
const thirddata = document.getElementById("data3");
const fourthdata = document.getElementById("data4");



const sum = document.getElementById("sum");
function suma(x:number, y:number){
  sum.innerText = String(x);
}


const button = document.getElementsByClassName("suma");
button[0].addEventListener("click", function(){
  sum.innerText = firstdata.innerText;
  console.log(firstdata.innerText);
})
console.log(firstdata.innerText);

firstdata.addEventListener("change", function(){
  sum.innerText = firstdata.innerText;
})



var message:string = "Hello World"
console.log(message)

class Stats{
  data1;
  data2;
  data3;
  data4;

  min;
  max;
  avg;
  sum;

  constructor() {
    this.getElements();
    // this.bindEvents();
  }

  getElements() {
    this.data1.value = +document.getElementById("data1").innerText;
    console.log(this.data1);
  }

  button = document.getElementById("suma");



  buttonclick(){
    console.log(this.data1);
  }

}

new Stats;
