"use strict";

var samplearr = [];

function cont() {
  var myTab = document.getElementsByClassName('contrecord'),
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
  }

  console.log(tableData); // tableData = []
  //chunks.push(tableData.slice(0, 0 + chunkSize));
  //console.log("first slice"+chunks)

  var newrm = [];
  var removed = tableData.splice(0, 4);

  for (var _i = 0; _i < removed.length; _i++) {
    if (_i >= 2) {
      newrm.push(" ");
      newrm.push(removed[_i]);
    } else {
      newrm.push(removed[_i]);
    }
  }

  samplearr.push(newrm); // samplearr.push(tableData)
  //console.log(samplearr);
}

function pdfContinence() {
  cont();
  var doc = new jsPDF(); // let returnedTarget = Object.assign({}, tableData);
  // console.log("inside the new fun  ")
  // console.log(returnedTarget)
  // console.log(returnedTarget[Object.keys(returnedTarget)[0]])

  var col = [["Time", "Date", "    ", "Date", "    ", "Date", "    "]]; //var col1 = ["Details", "Values"];

  var rows = [];
  var rows1 = []; // for (let i = 0; i < tableData.length; i++) {
  //     arr.push(returnedTarget[Object.keys(returnedTarget)[i]])
  //     rows.push(arr[i]);
  // }

  var temparray;
  var chunk = 7;
  var len = tableData.length;

  for (var i = 0; i < len; i += chunk) {
    temparray = tableData.slice(i, i + chunk); // temparray.join(',').replace(/, ([^,]*)$/, ' and $1')
    //}

    samplearr.push(temparray); // do whatever
  }

  console.log(samplearr);

  function header(data) {
    doc.text("Urinary Continence", data.settings.margin.left, 10);
  };

  doc.autoTable({
    head: col,
    body: samplearr,
    beforePageContent: header
  });
  doc.save('continence.pdf');
  clearAll();
};

function checkInputCont() {
  var myTab = document.getElementsByClassName('contrecord'),
      _length = myTab.length;

  for (var i = 0; i < _length; i++) {
    var _value = myTab[i];

    if (_value.tagName.toLowerCase() === 'input') {
      if (!_value.value) return $('#exampleModal').modal('show'); //alert( 'Please fill all the fields correctly' );
    }

    // if (_value.tagName.toLowerCase() === 'select') {
    //   if (_value.selectedOptions[0].textContent.indexOf('select') !== -1) return alert('Please fill all the fields correctly');
    // } //tableData.push( _value.value );

  }
  if(!(window.ActiveXObject) && "ActiveXObject" in window) {
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
  else pdfContinence();
}

  

;