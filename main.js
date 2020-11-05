function addNewEmployee(employee) {
  
    var table = document.getElementById(employee);

    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);
    var colCount = table.rows[0].cells.length;

    for(var i=0; i<colCount; i++) {

      var newcell	= row.insertCell(i);
      newcell.innerHTML = table.rows[1].cells[i].innerHTML;
     
      switch(newcell.childNodes[0].type) {
        case "text":
            newcell.childNodes[0].value = "";
            break;
        case "checkbox":
            newcell.childNodes[0].checked = false;
            break;
      }
    }
  }

  function deleteEmployee(employee) {

    var table = document.getElementById(employee);
    var rowCount = table.rows.length;

    for(var i=0; i<rowCount; i++) {
        var row = table.rows[i];
        var chkbox = row.cells[0].childNodes[0];
        if(null != chkbox && true == chkbox.checked) {
            table.deleteRow(i);
            rowCount--;
            i--;
        }	
    }
    }
