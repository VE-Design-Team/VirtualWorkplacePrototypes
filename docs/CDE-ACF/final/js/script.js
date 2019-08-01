// let timeTaken = document.getElementById("timeTaken")
// let amountTaken = document.getElementById("amountTaken")

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
//function to add rows to table in foodrecordPage
let count=1
const addRow = () => {
    count++
    if(count<=10){
    let row = document.getElementById("rowToClone") // find row to replicate
    let table = document.getElementById("tableToModify") // find table to append to
    let clone = row.cloneNode(true); // copy children 
    // clone.id = "newID"; // change id or other attributes/contents
    // table.appendChild(clone); // add new row to end of tabl
    let InputType = clone.getElementsByClassName("foodrecord")

    for (let i=0; i<InputType.length; i++){
     if( InputType[i].name=='role'||InputType[i].type=='checkbox'){
        InputType[i].checked = false; 
         //&&InputType[i].value!=' '
       // InputType[i].checked = false;  
    }else{
       InputType[i].value=''           
       }
    }
    table.appendChild(clone)
}
else {
    alert("Row limit exceeded")
}
  }

// const contTime = [  '00:00','01:00','02:00','03:00','04:00',
//                     '05:00','06:00','07:00','08:00','09:00',
//                     '10:00','11:00','12:00','13:00','14:00',
//                     '15:00','16:00','17:00','18:00','19:00',
//                     '20:00','21:00','22:00','23:00' ]

// for (let i = 0; i < contTime.length; i++) {
//  var timeVal = document.getElementById("continTime")
//  //var playerscore = document.getElementById('player' + (i + 1) + "score")

//  timeVal.innerText = contTime[i]

// }

// const highlightOption = ['1','2','3','4','4b','c']
// let high = document.getElementsByClassName("highlight")
// timeTaken.appendChild(selectList) //
// let selectHighlight = document.createElement("select")
// for (let i = 0; i < highlightOption.length; i++) {
//     let option = document.createElement("option")
//     option.setAttribute("value", highlightOption[i])
//     option.text = highlightOption[i]
//     selectHighlight.appendChild(option)
// }

// var expanded = false;

// function showCheckboxes() {
//   var checkboxes = document.getElementById("checkboxes");
//   if (!expanded) {
//     checkboxes.style.display = "block";
//     expanded = true;
//   } else {
//     checkboxes.style.display = "none";
//     expanded = false;
//   }
// }

var options = [];

$( '.dropdown-menu a' ).on( 'click', function( event ) {

   var $target = $( event.currentTarget ),
       val = $target.attr( 'data-value' ),
       $inp = $target.find( 'input' ),
       idx;

   if ( ( idx = options.indexOf( val ) ) > -1 ) {
      options.splice( idx, 1 );
      setTimeout( function() { $inp.prop( 'checked', false ) }, 0);
   } else {
      options.push( val );
      setTimeout( function() { $inp.prop( 'checked', true ) }, 0);
   }

   $( event.target ).blur();
      
   console.log( options );
   return false;
});