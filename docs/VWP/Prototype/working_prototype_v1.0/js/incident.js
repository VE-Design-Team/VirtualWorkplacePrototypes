function init() {

    let radioGroups = ["Were multiple incident types involved?", "Impact Type", "Who sustained this incident?"];

var  download = function(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

// Start file download.
document.getElementById("submitIncident").addEventListener("click", function(){
    // Generate download of hello.txt file with some content
    
    let formData = new FormData(document.querySelector('form'));
    let filename = "incident.txt";
    text = "";
    radioGroups.forEach((name)=> {
        let val = "Not selected";
    // get list of radio buttons with specified name
    if(document.forms[0].elements[name]) {
        var radios = Array.from(document.forms[0].elements[name]);
        for (var i=0, len=radios.length; i<len; i++) {
            if ( radios[i].checked ) { // radio checked?
                val = radios[i].value; // if so, hold its value in val
                break; // and break out of for loop
            }
        }
        text += name + "\n" + val + "\n \n";
    };

    })


   
    for (var pair of formData.entries()) {
        text +=  "\n" + pair[0] + "\n" + pair[1]+ "\n \n";
    }
    
    
    download(filename, text);
}, false);
}

init();