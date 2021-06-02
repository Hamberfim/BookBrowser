// Load up a book from dir
function loadBook(fileName, displayName){
    let currentBook = "";
    let url = "books/" + fileName;

    // reset the UI click display
    document.getElementById("fileName").innerHTML = displayName;
    document.getElementById("searchStat").innerHTML = "";
    document.getElementById("keyword").value = "";
    
}