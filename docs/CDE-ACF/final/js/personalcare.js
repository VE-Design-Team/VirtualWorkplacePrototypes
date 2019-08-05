window.onload = function() {
    if (window.location.href.indexOf('personalcare.html') > -1) {
        $('.testselect2').SumoSelect();
    }
  }
  
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
          <td><input class="foodrecord form-control form-control-sm" type="date" placeholder="yyyy/mm/dd" min="1990-01-01" max="2040-12-31" /></td>
          <td><input class="foodrecord form-control form-control-sm" type="time" placeholder="hh:mm" /></td>
          <td><select class="testselect2 foodrecord SlectBox`+rowId+`" multiple=" " name="test[]">
              <option value="Shower">Shower</option>
              <option value="Wash">Wash</option>
              <option value="Hair washed">Hair Washed</option>
              <option value="Shave">Shave</option>
              <option value="Fingemails">Fingemails</option>
              <option value="Toenails">Toenails</option>
              <option value="Trolley bath">Trolley bath</option>
              <option value="Application of moisturizer">Application of moisturizer</option>
            </select></td>
          <td><textarea class="foodrecord" name="story" rows="3" cols="33"></textarea></td> 
          <td><input class="foodrecord form-control form-control-sm" type="text" name="role" value="PCA" /></td> 
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

    doc.autoTable({ head: col, body: arr });
    doc.save('Personal Care.pdf');

}