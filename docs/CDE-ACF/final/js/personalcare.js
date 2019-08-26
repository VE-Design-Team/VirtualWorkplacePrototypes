"use strict";

window.onload = function () {
  if (window.location.href.indexOf('personalcare.html') > -1) {
    $('.testselect2').SumoSelect();
      $( ".datepicker" ).datepicker();
    
  }
};

$('#exampleModal').modal({
  show: false
}); //function to add rows to table in PersonalCarePage

var flag = 1;
var rowId = 0;

var addRows = function addRows() {
  flag++;

  if (flag <= 10) {
    var idforCone = 'rowToClone_' + rowId;
    var row = document.getElementById("rowToClone"); // find row to replicate

    var table = document.getElementById("tableToModify"); // find table to append to

    var clone = row.cloneNode(true); // copy children 
    // clone.id = "newID"; // change id or other attributes/contents
    // table.appendChild(clone); // add new row to end of tabl

    var InputType = clone.getElementsByClassName("personalcare");
    rowId++;
    var appendData = "<tr id=\"rowToClone_" + rowId + "\">\n          <td><input class=\"personalcare form-control form-control-sm\" type=\"date\" placeholder=\"dd/mm/yyyy\" min=\"1990-01-01\" max=\"2040-12-31\" /></td>\n          <td><input class=\"personalcare form-control form-control-sm\" id=\"time\" type=\"text\" pattern=\"d{1,2}:d{1,2}\" maxlength=\"5\" name=\"time\" placeholder=\"HH:MM\" min=\"00:00\" max=\"23:00\" required=\"required\" /></td>\n          <td><select class=\"testselect2 personalcare SlectBox" + rowId + "\" multiple=\" \" name=\"test[]\">\n              <option value=\"Shower\">Shower</option>\n              <option value=\"Wash\">Wash</option>\n              <option value=\"Hair washed\">Hair Washed</option>\n              <option value=\"Shave\">Shave</option>\n              <option value=\"Fingemails\">Fingemails</option>\n              <option value=\"Toenails\">Toenails</option>\n              <option value=\"Trolley bath\">Trolley bath</option>\n              <option value=\"Application of moisturizer\">Application of moisturizer</option>\n            </select></td>\n          <td><textarea class=\"personalcare\" name=\"story\" rows=\"3\" cols=\"33\"></textarea></td> \n          <td><input class=\"personalcare form-control form-control-sm\" type=\"text\" name=\"role\" value=\"PCA\" /></td> \n        </tr>";
    
    for (var i = 0; i < InputType.length; i++) {
      if (InputType[i].name == 'role' || InputType[i].type == 'checkbox') {
        //InputType[i].type=='checkbox'
        InputType[i].checked = false; //$('.testselect2').SumoSelect();
        //&&InputType[i].value!=' ' 
      } else {
        InputType[i].value = '';
      }
    }
    $('#tableToModify').append(appendData);
  } else {
    alert("Row limit exceeded");
  }

  var classs = '.SlectBox' + rowId;
  console.log(classs);
  $(classs).SumoSelect();
  var classd = '.dtPicker' + rowId;
  $(classd).datepicker();
};

var tableDa = Array();

function go() {
  var i = 0;
  $("#tablePreview tbody tr").each(function () {
    var date = $(this).find("td").eq(0).find(":input").val();
    var time = $(this).find("td").eq(1).find(":input").val();
    var selectVals = $(this).find("td").eq(2).find("select option:selected").map(function (i, el) {
      return $(el).val();
    }).get();
    var textarea = $(this).find("td").eq(3).find("textarea").val();
    var role = $(this).find("td").eq(4).find(":input").val();
    var row = {
      date: date,
      time: time,
      selectVals: selectVals,
      textArea: textarea,
      role: role
    };
    tableDa.push(row);
  });
  console.log(tableDa);
};

var pdfPC = function pdfPC() {
  go();
  var doc = new jsPDF();
  var col = [["Date", "Time", "ADL", "Comments", "Role"]];
  var arr = tableDa.map(Object.values); // console.log("Printing ARR")
  // console.log(arr)

  var header = function header(data) {
    doc.text("Personal Care", data.settings.margin.left, 10);
  };

  doc.autoTable({
    head: col,
    body: arr,
    beforePageContent: header
  });
  doc.save('Personal Care.pdf');
  clearAll();
};

function checkInputPC() {
  var myTab = document.getElementsByClassName('personalcare'),
      _length = myTab.length;

  for (var i = 0; i < _length; i++) {
    var _value = myTab[i];

    if (_value.tagName.toLowerCase() === 'input'|| _value.tagName.toLowerCase()==='select') {
      if (!_value.value) {
        $('#exampleModal').modal('show');
        return false; //alert( 'Please fill all the fields correctly' );
        // let err = document.getElementById('error-message') 
        //  err.innerHTML='Please fill all the fields'
        //  err.style.display = "block";
        //   setTimeout(() => {
        //     err.style.display = "none";
        //   }, 3000);
        //  return false
      }
    }

    // if (_value.tagName.toLowerCase() === 'select') {
    //   if (_value.selectedOptions[0].textContent.indexOf('select') !== -1) return alert('Please fill all the fields correctly');
    // } //tableData.push( _value.value );

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
  else pdfPC();

  
}

;