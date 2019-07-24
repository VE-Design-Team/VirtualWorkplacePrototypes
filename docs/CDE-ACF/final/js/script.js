let timeTaken = document.getElementById("timeTaken");
let amountTaken = document.getElementById("amountTaken");

//Create array of options to be added
const time = ['00:00','00:15','00:30',
              '00:45','01:00','01:15',
              '01:30','01:45','02:00'];
const amount = ['None','Quarter','Half',
               'Three quarter','Full','A bite'];         

 //Create and append select list for time
let selectList = document.createElement("select");
selectList.setAttribute("id", "mySelect");
timeTaken.appendChild(selectList);

//Create and append select list for the amountTaken
let newSelectList = document.createElement("select");
newSelectList.setAttribute("id", "mySelect");
amountTaken.appendChild(newSelectList);

//Create and append the time options
for (let i = 0; i < time.length; i++) {
    let option = document.createElement("option");
    option.setAttribute("value", time[i]);
    option.text = time[i];
    selectList.appendChild(option);
}

//Create and append the amountTaken options
for (let i = 0; i < amount.length; i++) {
    let option = document.createElement("option");
    option.setAttribute("value", amount[i]);
    option.text = amount[i];
    newSelectList.appendChild(option);
}

