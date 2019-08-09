// window.onload = function() {
//     if (window.location.href.indexOf('abbeyscale.html') > -1) {
//         $('.abbeyscale').SumoSelect();
//     }
//   }
  
  $(document).ready(function(){   
    $('.abbeyscale').SumoSelect();
});
// //function to add rows to table in PersonalCarePage

let flagAbbey = 1
let rowIdAbbey = 0;
const addRowAbbey = () => {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
    flagAbbey++
    if (flagAbbey <= 10) {
        let idforCone = 'rowToClone_'+rowIdAbbey;
        let row = document.getElementById("rowToClone2") // find row to replicate
        let table = document.getElementById("tableToModify2") // find table to append to
        let clone = row.cloneNode(true); // copy children 
        // clone.id = "newID"; // change id or other attributes/contents
        // table.appendChild(clone); // add new row to end of tabl
        let InputType = clone.getElementsByClassName("abbeyscale")
        rowIdAbbey++;
        let appendData2 = `<tr id="rowToClone_`+rowIdAbbey+`">
          <td><input class="abbeyscale form-control form-control-sm" type="date" placeholder="yyyy/mm/dd" min="1990-01-01" max="2040-12-31" /></td>
          <td><input class="abbeyscale form-control form-control-sm" type="time" placeholder="hh:mm" /></td>
          <td><select class="abbeyscale form-control-sm" id="amountTaken">
              <option disabled="" selected="" value=""> -- select an option -- </option>
              <option value="Nil">Nil Location</option>
            </select></td>
          <td><textarea class="abbeyscale" name="story" rows="3" cols="10"></textarea></td>
          <td><select class="abbeyscale form-control-sm">
              <option disabled="" selected="" value=""> -- select an option -- </option>
              <option value="None">None</option>
            </select></td>
          <td><select class="testselect3 abbeyscale SelectBoox`+rowIdAbbey+`" multiple=" " name="test[]">
              <option value="Shower">Shower</option>
              <option value="Wash">Wash</option>
              <option value="Half">Half</option>
              <option value="Three quarter">Three quarter</option>
              <option value="Full">Full</option>
            </select></td>
          <td><select class="testselect3 abbeyscale SelectBoox`+rowIdAbbey+`" multiple=" " name="test[]">
              <option value="None">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select></td>
          <td><input class="abbeyscale form-control form-control-sm" type="text" name="role" value="PCA" /></td>
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
        $('#tableToModify2').append(appendData2)
    }
    else {
        alert("Row limit exceeded")
    }
       let classAbbey = '.SelectBoox'+rowIdAbbey;
       console.log(classAbbey)
       $(classAbbey).SumoSelect();

}

let tableVal = Array();
 goAbbey=()=> {
    
    let i = 0;
      $("#tablePreviewAbbey tbody tr").each(function () {
                  let date = $(this).find("td").eq(0).find(":input").val();
                   let time = $(this).find("td").eq(1).find(":input").val();
                   let sel =  $(this).find("td").eq(2).find("select option:selected").map(function(i, el) {
                    return $(el).val();
                }).get();
                  let textarea1 = $(this).find("td").eq(3).find("textarea").val(); 
             
                let sel1 =  $(this).find("td").eq(4).find("select option:selected").map(function(i, el) {
                    return $(el).val();
                }).get();
                  let selectValus =  $(this).find("td").eq(5).find("select option:selected").map(function(i, el) {
                                    return $(el).val();
                                }).get();
                let severe =  $(this).find("td").eq(6).find("select option:selected").map(function(i, el) {
                                    return $(el).val();
                                }).get();  
                   let role = $(this).find("td").eq(7).find(":input").val();
                   let row = {
                     date: date,
                     time: time,
                     sel: sel,
                     textarea1: textarea1,
                     sel1:sel1,
                     selectValus: selectValus,
                     severe: severe,
                     role: role
                   }
                   tableVal.push(row);
              })
              console.log(tableVal)
  }


  const pdfAbbey = () => {
    goAbbey()
    var doc = new jsPDF();
    var col = [["Date", "Time", "x", "xx","xxx","xxxx","xxxxx", "Role"]];

    let arr = tableVal.map(Object.values);
    // console.log("Printing ARR")
    // console.log(arr)

    doc.autoTable({ head: col, body: arr });
    doc.save('Abbey scale.pdf');

}