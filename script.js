//Declares a function that will be called when anywhere in the website has been clicked
document.onclick = function(e){
    // Checks if the target is not the navigation bar, so the sidebar will not close when the user clicks at anywhere inside the navigation bar.
    if(e.target.id !== 'navbar')
    {
        //Ensures that when you click at a different place other than the navigation bar, the sidebar will close
        document.getElementById("navbar").style.width = "0%";
    }
}
let clicked = false;
// Function to open the navigation bar. It is mapped to the html file with the event “onclick” to indicate that the function works when the sidebar menu is clicked by the user.
function openNav(event) {
    
    //Stops the propagation of the event
    event.stopPropagation();
    clicked = true;
    //Opens the sidebar by checking the width of the browser window
    if(window.innerWidth > 700){
        //If the width of the window exceeds 700 pixels, only reveal 700 pixels of the navigation bar
        document.getElementById("navbar").style.width = "700px";
    } else{
        //Otherwise if the width of the window is below 700 pixels, show the whole navigation bar on the screen.
        document.getElementById("navbar").style.width = "100%";
    }
}
// Function to close the navigation bar when the close button has been clicked by the user.
function closeNav() {
    //Closes the sidebar by removing the sidebar from view.
    document.getElementById("navbar").style.width = "0%";
}

// Javascript to allow the user to search after pressing “Enter” on the keyboard.
// Initialises a variable which is mapped to the search function.
var input = document.getElementById("search");
// Adds a event listener that a function will occur, i.e. clicking the search button, when a keypress, i.e. “Enter” has been pressed by the user.
input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        // The search button, indicated by element “searchButton” will be clicked when Enter is pressed.
        document.getElementById("searchButton").click();
    }
});
