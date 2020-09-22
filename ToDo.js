let tasks = document.getElementsByClassName("task");
let percentageBar = document.getElementById("percentage");
let finished = document.getElementById("finished");
let count = document.getElementById("count");
let percentage = 0
let divided = 100 / tasks.length;

function initialize() {
  count.innerHTML = Math.round(percentage).toString() + "%";
  percentageBar.style.width = percentage.toString() + '%';
  count.innerHTML = "0%";
  for (let i=0; i < tasks.length; i++) {
    tasks[i].addEventListener('change', function (e) {
      updatePercentage(tasks[i])
    })
  }
}

function reset() {
  for (let i=0; i < tasks.length; i++) {
    tasks[i].checked = false;
  }
  percentage = 0;
  count.innerHTML = Math.round(percentage).toString() + "%";
  finished.style.visibility = "hidden";
  percentageBar.style.width = percentage.toString() + '%';
  console.log("When reset the percentage is " + percentage);
}

function updatePercentage(task) {
  if ( task.checked === true ) {
    percentage += divided;
    if(percentage >=100) {
      finished.style.visibility = "visible";
    }
  } else if (task.checked === false){
    percentage -= divided;
    if(percentage <=100 &&  finished.style.visibility !== "hidden" ) {
      finished.style.visibility = "hidden";
    }
  }
  count.innerHTML = Math.round(percentage).toString() + "%";
  percentageBar.style.width = percentage.toString() + '%';
}
