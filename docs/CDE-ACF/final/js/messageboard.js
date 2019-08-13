
// window.onload = function() {
//     if (window.location.href.indexOf('messageboard.html') > -1) {
    //   currentDateAndTime();
    //   dt();

    
//Print current date on messageBoard
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1; //January is 0!
    let yyyy = today.getFullYear();
    
    if (dd < 10) {
        dd = '0' + dd
    }
    
    if (mm < 10) {
        mm = '0' + mm
    }
    
    // today = yyyy + '/' + mm + '/' + dd;
    today = dd + '/' + mm + '/' + yyyy;
    todayDate = dd + '/' + mm + '/' + yyyy
    
    // console.log(today);
    document.getElementById('inlineFormInput').value = today;
    document.getElementById('inlineFormInputGroup').value = today;
    document.getElementById('inbox1').innerHTML = todayDate;
    document.getElementById('inbox2').innerHTML = todayDate;




    const checkTime = (i) => {
        return (i < 10) ? "0" + i : i;
    }

    const startTime = () => {
        var today = new Date(),
            h = checkTime(today.getHours()),
            m = checkTime(today.getMinutes()),
            s = checkTime(today.getSeconds());
        document.getElementById('time1').innerHTML = h + ":" + m
        document.getElementById('time2').innerHTML = h + ":" + m
        t = setTimeout(function () {
            startTime()
        }, 500);
    }
    startTime();
   // }
  //}


// currentDateAndTime = () => {
// let today = new Date();
// let dd = today.getDate();
// let mm = today.getMonth() + 1; //January is 0!
// let yyyy = today.getFullYear();

// if (dd < 10) {
//     dd = '0' + dd
// }

// if (mm < 10) {
//     mm = '0' + mm
// }

// // today = yyyy + '/' + mm + '/' + dd;
// today = yyyy + '/' + mm + '/' + dd;
// //todayDate = dd + '-' + mm + '-' + yyyy

// // console.log(today);
// document.getElementById('inlineFormInput').value = today;
// document.getElementById('inlineFormInputGroup').value = today;
// document.getElementById('inbox1').innerHTML = todayDate;
// document.getElementById('inbox2').innerHTML = todayDate;

// //Prints the current local time in messageBoard
// (() => {
//     const checkTime = (i) => {
//         return (i < 10) ? "0" + i : i;
//     }

//     const startTime = () => {
//         var today = new Date(),
//             h = checkTime(today.getHours()),
//             m = checkTime(today.getMinutes()),
//             s = checkTime(today.getSeconds());
//         document.getElementById('time1').innerHTML = h + ":" + m
//         document.getElementById('time2').innerHTML = h + ":" + m
//         t = setTimeout(function () {
//             startTime()
//         }, 500);
//     }
//     startTime();
// })();
// }
    