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

// window.onload = function() {
//     if (window.location.href.indexOf('messageboard.html') > -1) {
//       currentDateAndTime();
//     }
//   }

if (window.location.href.indexOf('login.html') > -1) {
let input = document.getElementById("password");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("login").click();
  }
});
       }

$('[data-toggle="popover"]').popover()


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


messageOne = () => document.getElementById("customCheck1").checked = true;

messageTwo = () => document.getElementById("customCheck2").checked = true;

//function to navigate to record page if both messages are read
route = () => {
    if (document.getElementById("customCheck1").checked && document.getElementById("customCheck2").checked)
        window.location.href = 'patientrecord.html';
    else
        alert("Please read all messages to proceed")
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

