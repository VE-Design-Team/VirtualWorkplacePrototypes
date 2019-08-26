"use strict";

$(document).ready(function () {
  $('.abbeyscale').SumoSelect();
}); // //function to add rows to table in PersonalCarePage

var flagAbbey = 1;
var rowIdAbbey = 0;

function addRowAbbey() {
  flagAbbey++;

  if (flagAbbey <= 10) {
    var idforCone = 'rowToClone_' + rowIdAbbey;
    var row = document.getElementById("rowToClone2"); // find row to replicate

    var table = document.getElementById("tableToModify2"); // find table to append to

    var clone = row.cloneNode(true); // copy children 
    // clone.id = "newID"; // change id or other attributes/contents
    // table.appendChild(clone); // add new row to end of tabl

    var InputType = clone.getElementsByClassName("abbeyscale");
    rowIdAbbey++;
    var appendData2 = "<tr id=\"rowToClone_" + rowIdAbbey + "\">\n        <td><input class=\"abbeyscale form-control form-control-sm\" type=\"date\" placeholder=\"yyyy/mm/dd\" min=\"1990-01-01\" max=\"2040-12-31\" /></td>\n        <td><input class=\"abbeyscale form-control form-control-sm\" type=\"time\" placeholder=\"hh:mm\" /></td>\n        <td><select class=\"abbeyscale form-control-sm\" id=\"amountTaken\">\n            <option disabled=\"\" selected=\"\" value=\"\"> select</option>\n            <option value=\"Nil\">Nil Location</option>\n          </select></td>\n        <td><textarea class=\"abbeyscale\" name=\"story\" rows=\"3\" cols=\"10\"></textarea></td>\n        <td><select class=\"abbeyscale form-control-sm\">\n            <option disabled=\"\" selected=\"\" value=\"\"> select</option>\n            <option value=\"None\">None</option>\n          </select></td>\n        <td><select class=\"testselect3 abbeyscale SelectBoox" + rowIdAbbey + "\" multiple=\" \" name=\"test[]\">\n            <option value=\"Shower\">Shower</option>\n            <option value=\"Wash\">Wash</option>\n            <option value=\"Half\">Half</option>\n            <option value=\"Three quarter\">Three quarter</option>\n            <option value=\"Full\">Full</option>\n          </select></td>\n        <td><select class=\"testselect3 abbeyscale SelectBoox" + rowIdAbbey + "\" multiple=\" \" name=\"test[]\">\n            <option value=\"None\">1</option>\n            <option value=\"2\">2</option>\n            <option value=\"3\">3</option>\n          </select></td>\n        <td><input class=\"abbeyscale form-control form-control-sm\" type=\"text\" name=\"role\" value=\"PCA\" /></td>\n      </tr>";

    for (var i = 0; i < InputType.length; i++) {
      if (InputType[i].name == 'role' || InputType[i].type == 'checkbox') {
        //InputType[i].type=='checkbox'
        InputType[i].checked = false; //$('.testselect2').SumoSelect();
        //&&InputType[i].value!=' ' 
      } else {
        InputType[i].value = '';
      }
    }

    $('#tableToModify2').append(appendData2);
  } else {
    alert("Row limit exceeded");
  }

  var classAbbey = '.SelectBoox' + rowIdAbbey;
  console.log(classAbbey);
  $(classAbbey).SumoSelect();
};

var tableVal = Array();
var selects = $('select[name^=score]');
selects.change(function () {
  var value = 0;
  selects.each(function () {
    value += +this.value;
  });
  $('#total').val(value);
}).trigger('change');

var rowws = [];
var tableDaata = [];

 function pdfAbbey() {
  goAbbey();
  var doc = new jsPDF('l', 'mm', 'a4');
  var col = [["Date", "Time", "Location", "Verbal/Non Verbal", "Comments", "Vocalisation", "Physiological change", "Physical change", "Facial Expression", "Change in body language", "Behavioural change", "Total score"]]; // rows = []
  // let arr = tableVal.map(Object.values);
  // console.log("Printing ARR")
  //   // console.log(arr)
  //   for (let i = 0; i < tableDaata.length; i++) {
  //     // arr.push(returnedTarget[Object.keys(returnedTarget)[i]])
  //     rows.push(tableDaata[i]);
  // }

  console.log("RPWS" + rowws);

  var header = function header(data) {
    // doc.setFontSize(18);
    // doc.setTextColor(40);
    // doc.setFontStyle('normal')
    doc.text("Pain Abbey Scale", data.settings.margin.left, 10);
  };

  doc.autoTable({
    head: col,
    body: rowws,
    beforePageContent: header
  });
  doc.save('Abbey scale.pdf');
  clearAll();
};

 function goAbbey() {
  var myTab = document.getElementsByClassName('abbeyscale'),
      //tableData = []
  _length = myTab.length;

  for (var i = 0; i < _length; i++) {
    var _value = myTab[i].value,
        _innerText = myTab[i].innerText;

    if (_value) {
      console.log(_value);
      tableDaata.push(_value); //newTable.push(tableData)
    } else if (_innerText) {
      //console.log( _innerText );
      tableDaata.push(_innerText); //newTable.push(tableData)
    }
  }

  console.log(tableDaata);
  rowws.push(tableDaata);
};

function checkInputAbbey() {
  var myTab = document.getElementsByClassName('abbeyscale'),
      _length = myTab.length;

  for (var i = 0; i < _length; i++) {
    var _value = myTab[i];

    if (_value.tagName.toLowerCase() === 'input'|| _value.tagName.toLowerCase()==='select') {
      if (!_value.value) return $('#exampleModal').modal('show'); //alert( 'Please fill all the fields correctly' );
    }

    // if (_value.tagName.toLowerCase() === 'select') {
    //   if (_value.selectedOptions[0].textContent.indexOf('select') !== -1) return alert('Please fill all the fields correctly');
    // } 

  }
  if(!(window.ActiveXObject) && "ActiveXObject" in window || window.navigator.userAgent.indexOf("Edge") > -1) {
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
  else pdfAbbey();

  
}

;
$(document).ready(function () {
  $('#time').keypress(validateNumber);
});

function validateNumber(event) {
  var key = window.event ? event.keyCode : event.which;

  if (key < 48 || key > 58) {
    return false;
  } else {
    return true;
  }
}

;

