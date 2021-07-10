let CounterNumber = 7;
const button = document.getElementById("button2");
const button2 = document.getElementById("button1");
const textHolder = document.getElementById("CounterNumber");
textHolder.innerHTML = CounterNumber;

button.addEventListener("click", function() {
  textHolder.innerHTML = ++CounterNumber;
  if(CounterNumber>= 50 ){
      CounterNumber = 49;
  }
});

button2.addEventListener("click", function() {
  textHolder.innerHTML = --CounterNumber;
  if(CounterNumber <= 0 ){
    CounterNumber = 1;
}
});