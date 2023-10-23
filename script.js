//function insert_Row() {
    //Write your code here 
//}

function insert_Row() {
    // Get a reference to the table by its ID
    var table = document.getElementById("sampleTable");

    // Create a new row
    var newRow = table.insertRow(0); // 0 means insert at the top

    // Create two cells in the new row
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);

    // Set the values of the cells
    cell1.innerHTML = "New Cell1";
    cell2.innerHTML = "New Cell2";
}
