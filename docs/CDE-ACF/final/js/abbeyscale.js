// // window.onload = function() {
// //     if (window.location.href.indexOf('abbeyscale.html') > -1) {
// //         $('.abbeyscale').SumoSelect();
// //     }
// //   }
  
//   $(document).ready(function(){   
//     $('.abbeyscale').SumoSelect();
// });

// $(document).ready(function() {
//     $('.tol').attr('disabled', 'disabled');
  
//     var $checkBox = $('.allergies');
  
//     $checkBox.on('change', function(e) {
//       //get the previous element to us, which is the select
//       var $select = $(this).next();
      
//       if (this.checked) {
//         $select.removeAttr('disabled');
//       } else {
//         $select.attr('disabled', 'disabled');
//       }
//     });
  
//   });
// // //function to add rows to table in PersonalCarePage

// // let flagAbbey = 1
// // let rowIdAbbey = 0;
// // const addRowAbbey = () => {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
// //     flagAbbey++
// //     if (flagAbbey <= 10) {
// //         let idforCone = 'rowToClone_'+rowIdAbbey;
// //         let row = document.getElementById("rowToClone2") // find row to replicate
// //         let table = document.getElementById("tableToModify2") // find table to append to
// //         let clone = row.cloneNode(true); // copy children 
// //         // clone.id = "newID"; // change id or other attributes/contents
// //         // table.appendChild(clone); // add new row to end of tabl
// //         let InputType = clone.getElementsByClassName("abbeyscale")
// //         rowIdAbbey++;
// //         let appendData2 = `<tr id="rowToClone_`+rowIdAbbey+`">
// //           <td><input class="abbeyscale form-control form-control-sm" type="date" placeholder="yyyy/mm/dd" min="1990-01-01" max="2040-12-31" /></td>
// //           <td><input class="abbeyscale form-control form-control-sm" type="time" placeholder="hh:mm" /></td>
// //           <td><select class="abbeyscale form-control-sm" id="amountTaken">
// //               <option disabled="" selected="" value=""> -- select an option -- </option>
// //               <option value="Nil">Nil Location</option>
// //             </select></td>
// //           <td><textarea class="abbeyscale" name="story" rows="3" cols="10"></textarea></td>
// //           <td><select class="abbeyscale form-control-sm">
// //               <option disabled="" selected="" value=""> -- select an option -- </option>
// //               <option value="None">None</option>
// //             </select></td>
// //           <td><select class="testselect3 abbeyscale SelectBoox`+rowIdAbbey+`" multiple=" " name="test[]">
// //               <option value="Shower">Shower</option>
// //               <option value="Wash">Wash</option>
// //               <option value="Half">Half</option>
// //               <option value="Three quarter">Three quarter</option>
// //               <option value="Full">Full</option>
// //             </select></td>
// //           <td><select class="testselect3 abbeyscale SelectBoox`+rowIdAbbey+`" multiple=" " name="test[]">
// //               <option value="None">1</option>
// //               <option value="2">2</option>
// //               <option value="3">3</option>
// //             </select></td>
// //           <td><input class="abbeyscale form-control form-control-sm" type="text" name="role" value="PCA" /></td>
// //         </tr>`

// //         for (let i = 0; i < InputType.length; i++) {
// //             if (InputType[i].name == 'role' || InputType[i].type=='checkbox') {
// //                  //InputType[i].type=='checkbox'
// //                  InputType[i].checked = false; 
// //                  //$('.testselect2').SumoSelect();
// //                 //&&InputType[i].value!=' ' 
// //             } else {
// //                 InputType[i].value = ''
// //             }
// //         }
// //         $('#tableToModify2').append(appendData2)
// //     }
// //     else {
// //         alert("Row limit exceeded")
// //     }
// //        let classAbbey = '.SelectBoox'+rowIdAbbey;
// //        console.log(classAbbey)
// //        $(classAbbey).SumoSelect();

// // }

// let tableVal = Array();
//  goAbbey=()=> {
    
//     let i = 0;
//       $("#tablePreviewAbbey tbody tr").each(function () {
//                   let date = $(this).find("td").eq(0).find(":input").val();
//                    let time = $(this).find("td").eq(1).find(":input").val();
//                    let sel =  $(this).find("td").eq(2).find("select option:selected").map(function(i, el) {
//                     return $(el).val();
//                 }).get();
//                   let textarea1 = $(this).find("td").eq(3).find("textarea").val(); 
             
//                 let sel1 =  $(this).find("td").eq(4).find("select option:selected").map(function(i, el) {
//                     return $(el).val();
//                 }).get();
//                   let selectValus =  $(this).find("td").eq(5).find("select option:selected").map(function(i, el) {
//                                     return $(el).val();
//                                 }).get();
//                 let severe =  $(this).find("td").eq(6).find("select option:selected").map(function(i, el) {
//                                     return $(el).val();
//                                 }).get();  
//                    let role = $(this).find("td").eq(7).find(":input").val();
//                    let row = {
//                      date: date,
//                      time: time,
//                      sel: sel,
//                      textarea1: textarea1,
//                      sel1:sel1,
//                      selectValus: selectValus,
//                      severe: severe,
//                      role: role
//                    }
//                    tableVal.push(row);
//               })
//               console.log(tableVal)
//   }


//   const pdfAbbey = () => {
//     goAbbey()
//     var doc = new jsPDF();
//     var col = [["Date", "Time", "x", "xx","xxx","xxxx","xxxxx", "Role"]];

//     let arr = tableVal.map(Object.values);
//     console.log("Printing ARR")
//     console.log(arr)

//     // doc.autoTable({ head: col, body: arr });
//     // doc.save('Abbey scale.pdf');

// }

// // <td>
// // 	<button class="btn abbeyscale collapsed" type="button" data-toggle="collapse" data-target="#collapseThree">
// // 		<i class="fa fa-plus"></i>
// // 	</button>
// // 	<div class="collapse" id="collapseThree" aria-labelledby="headingThree" data-parent="#accordionExample">
// // 		<input class="abbeyscale allergies" id="allergies" type="checkbox" name="allergen[]" value="Glue" />Vocalisation
      
// // 		<select class="tol" name="tolerance[]" disabled="">
// // 			<option value="Low">Low</option>
// // 			<option value="Medium">Medium</option>
// // 			<option value="High">High</option>
// // 		</select>
// // 		<input class="abbeyscale allergies" id="allergies" type="checkbox" name="allergen[]" value="Facial" />Facial Expression
        
// // 		<select class="tol" name="tolerance[]" disabled="">
// // 			<option value="Low">Low</option>
// // 			<option value="Medium">Medium</option>
// // 			<option value="High">High</option>
// // 			</select>
// // 			<input class="abbeyscale allergies" id="allergies" type="checkbox" name="allergen[]" value="body"/>
// // 		Change
// //         in body language
        
// // 		<select class="tol" name="tolerance[]" disabled="">
// // 			<option value="Low">Low</option>
// // 			<option value="Medium">Medium</option>
// // 			<option value="High">High</option>
// // 			</select>
// // 			<input class="abbeyscale allergies" id="allergies" type="checkbox" name="allergen[]" value="Behavioural"/>
// // 		Behavioural
// //         change
        
// // 		<select class="tol" name="tolerance[]" disabled="">
// // 			<option value="Low">Low</option>
// // 			<option value="Medium">Medium</option>
// // 			<option value="High">High</option>
// // 			</select>
// // 			<input class="abbeyscale allergies" id="allergies" type="checkbox" name="allergen[]" value="Physiological"/>
// // 		Physiological change
// // 		<select class="tol" name="tolerance[]" disabled="">
// // 			<option value="Low">Low</option>
// // 			<option value="Medium">Medium</option>
// // 			<option value="High">High</option>
// // 		</select>
// // 	</div>
// // </td>
// let flagAbbey = 1
// let rowIdAbbey = 0;
// const addRowAbbey = () => {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
//     flagAbbey++
// //     if (flagAbbey <= 10)
// //let count = 1
// //const addRow = () => {
//    // count++
//    if (flagAbbey <= 10) {
//         let row = document.getElementById("rowToClone2") // find row to replicate
//         let table = document.getElementById("tableToModify2") // find table to append to
//         let clone = row.cloneNode(true); // copy children 
//         // clone.id = "newID"; // change id or other attributes/contents
//         // table.appendChild(clone); // add new row to end of tabl
//         let InputType = clone.getElementsByClassName("abbeyscale")

//         for (let i = 0; i < InputType.length; i++) {
//             if (InputType[i].name == 'role') {
//                 // InputType[i].type=='checkbox'
//                 //  InputType[i].checked = false; 
//                 //&&InputType[i].value!=' ' 
//             } else {
//                 InputType[i].value = ''
//             }
//         }
//         table.appendChild(clone)
//     }
//     else {
//         alert("Row limit exceeded")
//     }

// }

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
// goAbbey=()=> {
  
//   let i = 0;
//     $("#tablePreviewAbbey tbody tr").each(function () {
//                 let date = $(this).find("td").eq(0).find(":input").val();
//                  let time = $(this).find("td").eq(1).find(":input").val();
//                  let sel =  $(this).find("td").eq(2).find("select option:selected").map(function(i, el) {
//                   return $(el).val();
//               }).get();
//                 let textarea1 = $(this).find("td").eq(3).find("textarea").val(); 
           
//               let sel1 =  $(this).find("td").eq(4).find("select option:selected").map(function(i, el) {
//                   return $(el).val();
//               }).get();
//                 let selectValus =  $(this).find("td").eq(5).find("select option:selected").map(function(i, el) {
//                                   return $(el).val();
//                               }).get();
//               let severe =  $(this).find("td").eq(6).find("select option:selected").map(function(i, el) {
//                                   return $(el).val();
//                               }).get();  
//                  let role = $(this).find("td").eq(7).find(":input").val();
//                  let row = {
//                    date: date,
//                    time: time,
//                    sel: sel,
//                    textarea1: textarea1,
//                    sel1:sel1,
//                    selectValus: selectValus,
//                    severe: severe,
//                    role: role
//                  }
//                  tableVal.push(row);
//             })
//             console.log(tableVal)
// }


// const pdfAbbey = () => {
//   goAbbey()
//   var doc = new jsPDF();
//   var col = [["Date", "Time", "Location", "Verbal/Non Verbal","Comments","xxxx","xxxxx", "Role"]];

//   let arr = tableVal.map(Object.values);
//   // console.log("Printing ARR")
//   // console.log(arr)

//   doc.autoTable({ head: col, body: arr });
//   doc.save('Abbey scale.pdf');
  

// }

var selects = $('select[name^=score]');
selects.change(function(){
  var value = 0;
  selects.each(function(){ value += +this.value; });
  $('#total').val(value);
}).trigger('change');

rowws = []
tableDaata = [] 
const pdfAbbey =()=> {
  goAbbey()

  var doc = new jsPDF('l', 'mm', 'a4');
  var col = [["Date", "Time", "Location", "Verbal/Non Verbal","Comments","Vocalisation","Physiological change", "Physical change","Facial Expression","Change in body language","Behavioural change","Total score"]];
 // rows = []
 // let arr = tableVal.map(Object.values);
  // console.log("Printing ARR")
//   // console.log(arr)
//   for (let i = 0; i < tableDaata.length; i++) {
//     // arr.push(returnedTarget[Object.keys(returnedTarget)[i]])
//     rows.push(tableDaata[i]);
// }
console.log("RPWS"+rowws)
let header = function (data) {
  // doc.setFontSize(18);
  // doc.setTextColor(40);
  // doc.setFontStyle('normal')
  doc.text("Pain Abbey Scale", data.settings.margin.left, 10);
};
  doc.autoTable({ head: col, body: rowws,beforePageContent: header });
  doc.save('Abbey scale.pdf');
  clearAll()
}

const goAbbey=()=> {
const myTab = document.getElementsByClassName('abbeyscale'),
      //tableData = []
      _length = myTab.length;

  for (let i = 0; i < _length; i++) {
      const _value = myTab[i].value,
          _innerText = myTab[i].innerText;
      if (_value) {
          console.log(_value);
          tableDaata.push(_value)
          //newTable.push(tableData)
      } else if (_innerText) {
          //console.log( _innerText );
          tableDaata.push(_innerText)

          //newTable.push(tableData)
      }

  }
  console.log(tableDaata)
  rowws.push(tableDaata)
}

// let c=0
 
// $('#time').on('focusout', function(){
//  const regex = /^\d+((:\d+)*|-\d+)?$/;
// const str =document.getElementById('time');
// let m;

// if ((m = regex.exec(str)) !== null) {
//     // The result can be accessed through the `m`-variable.
//    // m.forEach((match, groupIndex) => {
//         alert("time field must be in HH:MM format")
//    // });
// }
// else c++
// })
// $('#time').on('focusout', function(){
// var regex=/^([0-2])|0[1-9]:[0-5][0-9]$/;
// let doc= document.getElementById('time').value

// if(doc.match(regex)) 
// {
//    // whatever you want it to do now...
//     return true;
// }
// else {

//     alert("Invalid date");
//     return false;
// }
// })

// let m=0;
// function checkInput () {
//   const myTabe = document.getElementsByClassName('abbeyscale'),
//       //tableData = []
//       _lengthe = myTabe.length;

//   for (let i = 0; i < _lengthe; i++) {
//       const _valuee = myTabe[i].value,
//           _innerTexxt = myTabe[i].innerText;
//       if (_valuee) 
//         m+=1
//       else if (_innerTexxt) 
//       m++
//   }
//   if(m===myTabe)
//   pdfAbbey()
//   else 
//   alert("All input fields are mandatory")
// }

$(document).ready(function() {
  $('#time').keypress(validateNumber);
});

function validateNumber(event) {
  var key = window.event ? event.keyCode : event.which;
  if (key < 48 || key > 58) {
    return false;
  } else {
    return true;
  }
};


$(document).ready(function() {

  $('[data-toggle="popover"]').popover();


  $(document).on('show.bs.popover', function(event) {
    // could use [data-toggle="popover"] instead
    // using a different selector allows to have different sets of single instance popovers.
    $('[data-popover-type="singleton"]').not(event.target).each(function(key, el) {
      $(el).popover('hide'); // this way everything gets propagated properly
    });
  });

  $(document).on('click', function(event) {
    // choose to close all popovers if clicking on anything but a popover element.
    if (!($(event.target).data('toggle') === "popover" /* the trigger buttons */ 
          || $(event.target).hasClass('popover') /* the popup menu */
          || $(event.target).parents('.popover[role="tooltip"]').length /* this one is a bit fiddly but also catches child elements of the popup menu. */ )) {
      
      $('[data-toggle="popover"]').popover('hide');
    }
  });


});