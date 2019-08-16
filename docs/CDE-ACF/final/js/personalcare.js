window.onload = function() {
    if (window.location.href.indexOf('personalcare.html') > -1) {
        $('.testselect2').SumoSelect();
    }
  }
  //$('#exampleModal').modal({ show: false})
//function to add rows to table in PersonalCarePage

let flag = 1
let rowId = 0;
const addRows = () => {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
    flag++
    if (flag <= 10) {
        let idforCone = 'rowToClone_'+rowId;
        let row = document.getElementById("rowToClone") // find row to replicate
        let table = document.getElementById("tableToModify") // find table to append to
        let clone = row.cloneNode(true); // copy children 
        // clone.id = "newID"; // change id or other attributes/contents
        // table.appendChild(clone); // add new row to end of tabl
        let InputType = clone.getElementsByClassName("personalcare")
        rowId++;
        let appendData = `<tr id="rowToClone_`+rowId+`">
          <td><input class="personalcare form-control form-control-sm" type="date" placeholder="yyyy/mm/dd" min="1990-01-01" max="2040-12-31" /></td>
          <td><input class="personalcare form-control form-control-sm" id="time" type="text" pattern="d{1,2}:d{1,2}" maxlength="5" name="time" placeholder="HH:MM" min="00:00" max="23:00" required="required" /></td>
          <td><select class="testselect2 personalcare SlectBox`+rowId+`" multiple=" " name="test[]">
              <option value="Shower">Shower</option>
              <option value="Wash">Wash</option>
              <option value="Hair washed">Hair Washed</option>
              <option value="Shave">Shave</option>
              <option value="Fingemails">Fingemails</option>
              <option value="Toenails">Toenails</option>
              <option value="Trolley bath">Trolley bath</option>
              <option value="Application of moisturizer">Application of moisturizer</option>
            </select></td>
          <td><textarea class="personalcare" name="story" rows="3" cols="33"></textarea></td> 
          <td><input class="personalcare form-control form-control-sm" type="text" name="role" value="PCA" /></td> 
        </tr>`

        for (let i = 0; i < InputType.length; i++) {
            if (InputType[i].name == 'role' || InputType[i].type=='checkbox') {
                 //InputType[i].type=='checkbox'
                 InputType[i].checked = false; 
                 //$('.testselect2').SumoSelect();
                //&&InputType[i].value!=' ' 
            } else {
                InputType[i].value = ''
            }
        }
        $('#tableToModify').append(appendData)
    }
    else {
        alert("Row limit exceeded")
    }
       let classs = '.SlectBox'+rowId;
       console.log(classs)
       $(classs).SumoSelect();

}

let tableDa = Array();
 go=()=> {
    
    let i = 0;
      $("#tablePreview tbody tr").each(function () {
                  let date = $(this).find("td").eq(0).find(":input").val();
                   let time = $(this).find("td").eq(1).find(":input").val();
                  let selectVals =  $(this).find("td").eq(2).find("select option:selected").map(function(i, el) {
                                    return $(el).val();
                                }).get();
                   let textarea = $(this).find("td").eq(3).find("textarea").val();     
                   let role = $(this).find("td").eq(4).find(":input").val();
                   let row = {
                     date: date,
                     time: time,
                     selectVals: selectVals,
                     textArea: textarea,
                     role: role
                   }
                   tableDa.push(row);
              })
              console.log(tableDa)
  }


  const pdfPC = () => {
    go()
    var doc = new jsPDF();
    var col = [["Date", "Time", "ADL", "Comments", "Role"]];

    let arr = tableDa.map(Object.values);
    // console.log("Printing ARR")
    // console.log(arr)
    let header = function (data) {
      doc.text("Personal Care", data.settings.margin.left, 10);
    };
    doc.autoTable({ head: col, body: arr,beforePageContent: header });
    doc.save('Personal Care.pdf');
    clearAll()
}


function checkInputPC() {
  const myTab = document.getElementsByClassName( 'personalcare' ),
      _length = myTab.length;
  
  for ( let i = 0; i < _length; i++ ) {
      let _value = myTab[ i ];

      if ( _value.tagName.toLowerCase() === 'input' ) {
          if ( !_value.value ) {  $('#exampleModal').modal('show');
          return false
            //alert( 'Please fill all the fields correctly' );
            // let err = document.getElementById('error-message') 
            //  err.innerHTML='Please fill all the fields'
            //  err.style.display = "block";

            //   setTimeout(() => {
            //     err.style.display = "none";
            //   }, 3000);

            //  return false
          }
      }

      if ( _value.tagName.toLowerCase() === 'select' ) {
          if ( _value.selectedOptions[ 0 ].textContent.indexOf( 'select' ) !== -1 ) return alert( 'Please fill all the fields correctly' );
      }

      //tableData.push( _value.value );
      
  }
  pdfPC();
  

};