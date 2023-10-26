var currentTab = null; // Variable to track the currently active tab

function openPage(pageName, elmnt, color) {
  // Hide all elements with class="tabcontent" by default
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Remove the background color of all tablinks/buttons
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }

  // Show the specific tab content
  document.getElementById(pageName).style.display = "block";

  // Add the specific color to the button used to open the tab content
  elmnt.style.backgroundColor = color;

  // Reset the previous tab's color
  if (currentTab && currentTab !== elmnt) {
    currentTab.style.backgroundColor = ""; // Reset to its original color
  }

  // Set the current tab to the newly clicked tab
  currentTab = elmnt;
}

// Get the element with id "defaultOpen" and click on it
document.getElementById("defaultOpen").click();