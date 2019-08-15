tableData = []
newArray = []
arr = []
//newTable=[]\
// formcheck=() => {

//     console.log("inside formcheck")
//    let fields = ["Date", "Time", "Food Item", "Amount Taken","Time Taken","Role"];
//   // if (username === ' ' )
//    //alert("cannot be empty")
// //    let InputType = document.getElementsByClassName("foodrecord")
// //    for (let i = 0; i < InputType.length; i++){
// //        if(InputType[i].textContent=== ' ')
// //        alert("All fields must be entered")
// //    }
//          let date = document.getElementById('date').value
//          let time = document.getElementById('time').value
        // let fooditem = document.getElementById('fooditem').value
        // let amount = document.getElementById('amountTaken').value
        // let timetaken = document.getElementById('timeTaken').value
        // let role = document.getElementById('role').value


//}

const pdf = () => {
    //formcheck()
    tableToJson()
    var doc = new jsPDF();
    let returnedTarget = Object.assign({}, tableData);
    console.log("inside the new fun  ")
    console.log(returnedTarget)
    console.log(returnedTarget[Object.keys(returnedTarget)[0]])
    var col = [["Date", "Time", "Food Item", "Amount Taken", "Time Taken", "Role"]];
    //var col1 = ["Details", "Values"];
    var rows = [];
    var rows1 = [];

    /* The following array of object as response from the API req  */


    // returnedTarget.forEach(element => {      
    //      returnedTarget[Object.keys(returnedTarget)[0]]
    //         var temp = [element.date,element.time];
    //        // var temp1 = [element.id,element.name];

    //         // rows.push(temp);
    //        // rows1.push(temp1);

    //     });        

    for (let i = 0; i < tableData.length; i++) {
        arr.push(returnedTarget[Object.keys(returnedTarget)[i]])
        rows.push(arr[i]);
    }
    console.log("Printing ARR")
    console.log(arr)

    console.log("Printing rows")
    console.log(rows)
    // newRow=[]
    // for(let j=0;j<rows.length;j++){
    //     newRow.push(rows[j])
    // }
    let temparray
    let chunk = 6; let len = rows.length;
    for (let i = 0; i < len; i += chunk) {
        temparray = rows.slice(i, i + chunk);

        newArray.push(temparray)

        // do whatever
    }
    let header = function (data) {
        doc.text("Food and Fluids record", data.settings.margin.left, 10);
      };

    doc.autoTable({ head: col, body: newArray,beforePageContent: header });
    //[['21-10-2001','00:30','Apple','None','00:30','PCA']]
    //doc.autoTable(col1, rows1, { startY: 60 });
    doc.save('Food&Fluids.pdf');
    clearAll()

}



function tableToJson() {
    const myTab = document.getElementsByClassName('foodrecord'),
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

    //console.log( tableData );
    // tableData = []

}

function clearAll () {
    window.location.reload()
}

// const check = ()=> {
//     const myTab = document.getElementsByClassName('foodrecord'),
//     //tableData = []
//     _length = myTab.length;

// for (let i = 0; i < _length; i++) {
//     const _value = myTab[i].value,
//         _innerText = myTab[i].innerText;
//     if (_value) {
        
//     } else  {
//         alert("all fields are mandatory")
//     }

// }
// }

