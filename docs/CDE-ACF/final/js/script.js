// let timeTaken = document.getElementById("timeTaken")
// let amountTaken = document.getElementById("amountTaken")
//$('select').selectpicker();
// //Create array of options to be added
// const time = ['00:00','00:15','00:30',
//               '00:45','01:00','01:15',
//               '01:30','01:45','02:00']

// const amount = ['None','Quarter','Half',
//                'Three quarter','Full','A bite']      

//  //Create and append select list for time
// let selectList = document.createElement("select")
// selectList.setAttribute("id", "mySelect")
// timeTaken.appendChild(selectList)

// //Create and append select list for the amountTaken
// let newSelectList = document.createElement("select")
// newSelectList.setAttribute("id", "mySelect")
// amountTaken.appendChild(newSelectList)

// //Create and append the time options
// for (let i = 0; i < time.length; i++) {
//     let option = document.createElement("option")
//     option.setAttribute("value", time[i])
//     option.text = time[i]
//     selectList.appendChild(option)
// }

// //Create and append the amountTaken options
// for (let i = 0; i < amount.length; i++) {
//     let option = document.createElement("option")
//     option.setAttribute("value", amount[i])
//     option.text = amount[i]
//     newSelectList.appendChild(option)
// }

window.onload = function() {
    if (window.location.href.indexOf('messageboard.html') > -1) {
      currentDateAndTime();
    }
  }

//login form validation
const login = () => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === '' || password === '')
        alert("Login credentials cannot be Empty!")
    else if (username === 'PCAstudent' && password === 'C4DE_learn') {
        window.location.href = 'messageboard.html';
    }
    else {
        alert("Incorrect username or password! ")
    }
}

//Function to display LoginInfo
const loginInfo = () => {
    alert("Your Username is: 'PCAstudent' \nPassword is:'C4DE_learn'")
}

//Print current date on messageBoard
currentDateAndTime = () => {
let today = new Date();
let dd = today.getDate();
let mm = today.getMonth() + 1; //January is 0!
let yyyy = today.getFullYear();

if (dd < 10) {
    dd = '0' + dd
}

if (mm < 10) {
    mm = '0' + mm
}

// today = yyyy + '/' + mm + '/' + dd;
today = yyyy + '/' + mm + '/' + dd;
todayDate = dd + '-' + mm + '-' + yyyy

// console.log(today);
document.getElementById('inlineFormInput').value = today;
document.getElementById('inlineFormInputGroup').value = today;
document.getElementById('inbox1').innerHTML = todayDate;
document.getElementById('inbox2').innerHTML = todayDate;

//Prints the current local time in messageBoard
(() => {
    const checkTime = (i) => {
        return (i < 10) ? "0" + i : i;
    }

    const startTime = () => {
        var today = new Date(),
            h = checkTime(today.getHours()),
            m = checkTime(today.getMinutes()),
            s = checkTime(today.getSeconds());
        document.getElementById('time1').innerHTML = h + ":" + m
        document.getElementById('time2').innerHTML = h + ":" + m
        t = setTimeout(function () {
            startTime()
        }, 500);
    }
    startTime();
})();
}

messageOne = () => document.getElementById("customCheck1").checked = true;

messageTwo = () => document.getElementById("customCheck2").checked = true;

//function to navigate to record page if both messages are read
route = () => {
    if (document.getElementById("customCheck1").checked && document.getElementById("customCheck2").checked)
        window.location.href = 'foodrecord.html';
    else
        alert("Read all message to proceed")
}
//function to add rows to table in foodrecordPage
let count = 1
const addRow = () => {
    count++
    if (count <= 10) {
        let row = document.getElementById("rowToClone") // find row to replicate
        let table = document.getElementById("tableToModify") // find table to append to
        let clone = row.cloneNode(true); // copy children 
        // clone.id = "newID"; // change id or other attributes/contents
        // table.appendChild(clone); // add new row to end of tabl
        let InputType = clone.getElementsByClassName("foodrecord")

        for (let i = 0; i < InputType.length; i++) {
            if (InputType[i].name == 'role') {
                // InputType[i].type=='checkbox'
                //  InputType[i].checked = false; 
                //&&InputType[i].value!=' ' 
            } else {
                InputType[i].value = ''
            }
        }
        table.appendChild(clone)
    }
    else {
        alert("Row limit exceeded")
    }

}


