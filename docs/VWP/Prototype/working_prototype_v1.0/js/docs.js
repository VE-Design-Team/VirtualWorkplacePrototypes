function init() {

    const docs = [
        {
            "fileName": "test.pdf",
            "downloadLink" : "./docs/test.pdf",
            "date": "26/11/2018",
            "type": "PDF File"
        },
        {
            "fileName": "general.doc",
            "downloadLink" : "./docs/general.doc",
            "date": "04/01/2019",
            "type": "Microsoft Word"
        },
        {
            "fileName": "guide.pdf",
            "downloadLink" : "./docs/guide.pdf",
            "date": "16/02/2019",
            "type": "PDF File"
        },
        {
            "fileName": "FAQs.doc",
            "downloadLink" : "./docs/FAQs.doc",
            "date": "12/06/2009",
            "type": "Microsoft Word"
        },
        {
            "fileName": "holidays.pdf",
            "downloadLink" : "./docs/FAQs.doc",
            "date": "12/06/2009",
            "type": "PDF File"
        }
    ];
    let createFilesList = function() {
        let listContainer = document.querySelector("#listContainer");
        docs.forEach(function (file) {
      
          const content = `
          <div class="list-item">
          <div class="file-name">
          <a href=${file.downloadLink} download>${file.fileName}</a>
          </div>
          
          <div class="file-date">
          <p >${file.date}<p>
          </div>

          <div class="file-type">
          <p >${file.type}<p>
          </div>
      
        </div>
          `;
          listContainer.innerHTML += content;
      
        });
      }
      createFilesList();


}

init();

