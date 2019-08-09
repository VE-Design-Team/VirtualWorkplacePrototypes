// let mark = 1
// let rowIds = 0;
// const addMoreRow = () => {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
//     mark++
//     if (mark <= 10) {
//         let idforCone = 'rowToClone_'+rowIds;
//         let row = document.getElementById("rowToClone") // find row to replicate
//         let table = document.getElementById("tableToModify") // find table to append to
//         let clone = row.cloneNode(true); // copy children 
//         // clone.id = "newID"; // change id or other attributes/contents
//         // table.appendChild(clone); // add new row to end of tabl
//         let InputType = clone.getElementsByClassName("contrecord")
//         rowIds++;
//         let appendData = `<tr id="rowToClone_`+rowIds+`">
//         <td><input class="contrecord form-control-sm form-control" id="continTime" type="text" value="00:00" /></td>
//         <td><select class="continOption contrecord form-control-sm"><option disabled="" selected="" value=""> -- select an option -- </option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="4b">4b</option><option value="c">c</option></select>
//             <textarea
//                 class="contrecord" name="story" rows="1" cols="16"></textarea>
//         </td>
//         <td><select class="continOption contrecord form-control-sm"><option disabled="" selected="" value=""> -- select an option -- </option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="4b">4b</option><option value="c">c</option></select>
//             <textarea
//                 class="contrecord" name="story" rows="1" cols="16"></textarea>
//         </td>
//         <td><select class="continOption contrecord form-control-sm"><option disabled="" selected="" value=""> -- select an option -- </option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="4b">4b</option><option value="c">c</option></select>
//             <textarea
//                 class="contrecord" name="story" rows="1" cols="16"></textarea>
//         </td>
//         </tr>`

//         for (let i = 0; i < InputType.length; i++) {
//             if (InputType[i].name == 'role' || InputType[i].type=='checkbox') {
//                  //InputType[i].type=='checkbox'
//                  InputType[i].checked = false; 
//                  //$('.testselect2').SumoSelect();
//                 //&&InputType[i].value!=' ' 
//             } else {
//                 InputType[i].value = ''
//             }
//         }
//         $('#tableToModify').append(appendData)
//     }
//     else {
//         alert("Row limit exceeded")
//     }
//        let classs = '.SlectBox'+rowIds;
//        console.log(classs)
//        $(classs).SumoSelect();

// }

// let tableDataCont = Array();
//  saveconti=()=> {
    
//     let i = 0;
//       $("#tablePreview tbody tr").each(function () {
//                   let time = $(this).find("td").eq(0).find(":input").val();
//                    let date = $(this).find("td").eq(1).find(":input").val();
//                   let selectVals =  $(this).find("td").eq(2).find("select option:selected").map(function(i, el) {
//                                     return $(el).val();
//                                 }).get();
//                    let textarea = $(this).find("td").eq(3).find("textarea").val();     
//                    let role = $(this).find("td").eq(4).find(":input").val();
//                    let row = {
//                      date: date,
//                      time: time,
//                      selectVals: selectVals,
//                      textArea: textarea,
//                      role: role
//                    }
//                    tableDataCont.push(row);
//               })
//               console.log(tableDataCont)
//   }


//   const pdfCT = () => {
//     saveconti()
//     var doc = new jsPDF();
//     var col = [["Time", "Date", "Date", "Date"]];

//     let arr = tableDa.map(Object.values);
//     // console.log("Printing ARR")
//     // console.log(arr)

//     // doc.autoTable({ head: col, body: arr });
//     // doc.save('Personal Care.pdf');

// }

function print() {
    const filename  = 'Continence.pdf';

    html2canvas(document.querySelector('#tablePreview')).then(canvas => {
        let pdf = new jsPDF('p', 'mm', 'a4');
        pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 211, 298);
        pdf.save(filename);
    });
}

// Variant
// This one lets you improve the PDF sharpness by scaling up the HTML node tree to render as an image before getting pasted on the PDF.
function print(quality = 1) {
    const filename  = 'Continence.pdf';

    html2canvas(document.querySelector('#tablePreview'), 
                            {scale: quality}
                     ).then(canvas => {
        let pdf = new jsPDF('p', 'mm', 'a4');
        pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 211, 298);
        pdf.save(filename);
    });
}


//chunks = []
samplearr = []
//chunkSize = 4
function cont() {
    const myTab = document.getElementsByClassName('contrecord'),
        //tableData = []
        _length = myTab.length;

    for (let i = 0; i < _length; i++) {
        const _value = myTab[i].value,
            _innerText = myTab[i].innerText;
        if (_value) {
            console.log(_value);
            tableData.push(_value)
            //newTable.push(tableData)
        } else if (_innerText) {
            //console.log( _innerText );
            tableData.push(_innerText)

            //newTable.push(tableData)
        }

    }

    console.log( tableData );
    // tableData = []

    //chunks.push(tableData.slice(0, 0 + chunkSize));

    //console.log("first slice"+chunks)
    let newrm =[]
    let removed = tableData.splice(0,4);
    for (let i =0;i<removed.length;i++){

        if(i>=2){
            newrm.push(" ")
            newrm.push(removed[i])
        }
        else {
            newrm.push(removed[i])
        }
    }
    samplearr.push(newrm)
   // samplearr.push(tableData)

    //console.log(samplearr);
}

const pdfContinence = () => {
    cont()
    var doc = new jsPDF();
    // let returnedTarget = Object.assign({}, tableData);
    // console.log("inside the new fun  ")
    // console.log(returnedTarget)
    // console.log(returnedTarget[Object.keys(returnedTarget)[0]])
    var col = [["Time", "Date","    ", "Date","    ", "Date","    "]];
    //var col1 = ["Details", "Values"];
    var rows = [];
    var rows1 = [];    

    // for (let i = 0; i < tableData.length; i++) {
    //     arr.push(returnedTarget[Object.keys(returnedTarget)[i]])
    //     rows.push(arr[i]);
    // }
    
    let temparray
    let chunk = 7; let len = tableData.length;
    for (let i = 0; i < len; i += chunk) {
        temparray = tableData.slice(i, i + chunk);
        
         // temparray.join(',').replace(/, ([^,]*)$/, ' and $1')
        //}
       samplearr.push(temparray)

        // do whatever
    }
    console.log(samplearr)
     doc.autoTable({ head: col, body: samplearr });
     doc.save('continence.pdf');

}