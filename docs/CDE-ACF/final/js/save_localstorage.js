"use strict";

var tableData = [];
var newArray = [];
var arr = [];

 function pdf() {
  //formcheck()
  tableToJson();
  var doc = new jsPDF();
  var returnedTarget = Object.assign({}, tableData);
  console.log("inside the new fun  ");
  console.log(returnedTarget);
  console.log(returnedTarget[Object.keys(returnedTarget)[0]]);
  var col = [["Date", "Time", "Food Item", "Amount Taken", "Time Taken", "Role"]]; //var col1 = ["Details", "Values"];

  var rows = [];
  var rows1 = [];

  for (var i = 0; i < tableData.length; i++) {
    arr.push(returnedTarget[Object.keys(returnedTarget)[i]]);
    rows.push(arr[i]);
  }

  console.log("Printing ARR");
  console.log(arr);
  console.log("Printing rows");
  console.log(rows); // newRow=[]
  // for(let j=0;j<rows.length;j++){
  //     newRow.push(rows[j])
  // }

  var temparray;
  var chunk = 6;
  var len = rows.length;

  for (var _i = 0; _i < len; _i += chunk) {
    temparray = rows.slice(_i, _i + chunk);
    newArray.push(temparray); // do whatever
  }

  var header = function header(data) {
    doc.text("Food and Fluids record", data.settings.margin.left, 10);
  };

  doc.autoTable({
    head: col,
    body: newArray,
    beforePageContent: header
  }); //[['21-10-2001','00:30','Apple','None','00:30','PCA']]
  //doc.autoTable(col1, rows1, { startY: 60 });

  doc.save('Food&Fluids.pdf');
  clearAll();
};

function tableToJson() {
  var myTab = document.getElementsByClassName('foodrecord'),
      //tableData = []
  _length = myTab.length;

  for (var i = 0; i < _length; i++) {
    var _value = myTab[i].value,
        _innerText = myTab[i].innerText;

    if (_value) {
      console.log(_value);
      tableData.push(_value); //newTable.push(tableData)
    } else if (_innerText) {
      //console.log( _innerText );
      tableData.push(_innerText); //newTable.push(tableData)
    }
  } // console.log( tableData );
  // tableData = []

}

function clearAll() {
  window.location.reload();
}

function checkInput() {
  var myTab = document.getElementsByClassName('foodrecord'),
      _length = myTab.length;

  for (var i = 0; i < _length; i++) {
    var _value = myTab[i];

    if (_value.tagName.toLowerCase() === 'input' || _value.tagName.toLowerCase()==='select') {
      if (!_value.value) return $('#exampleModal').modal('show'); //alert( 'Please fill all the fields correctly' );
    }

    //  if (_value.tagName.toLowerCase() === 'select') {
    //    if (_value.selectedOptions[0].textContent.indexOf('select') !== -1) return $('#exampleModal').modal('show');
    // } //tableData.push( _value.value );

  }
  
  if(!(window.ActiveXObject) && "ActiveXObject" in window|| window.navigator.userAgent.indexOf("Edge") > -1) {
    document.getElementsByClassName('container')[0].style.visibility = 'hidden';
    //document.getElementById('back').style.visibility = 'hidden';

    var btn = document.getElementsByTagName('a')

    for (var i = 0; i < btn.length; i++){
          btn[i].style.display = 'none';
      } 

    var elements = document.getElementsByTagName('i')

    for (var i = 0; i < elements.length; i++){
    elements[i].style.display = 'none';
      }

    window.print();
    clearAll();
  }
  else pdf(); //console.log( tableData );
}

;