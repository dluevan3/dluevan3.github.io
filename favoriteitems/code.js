// Declare array using var
var favoriteItems = ["Food", "Coffee", "Podcasts", "Gaming", "Amusement Parks", "Horror Movies", "Hiking", "Music", "Dogs", "Traveling"];

// Function to display items
function displayItems() 
{
  var list = document.getElementById("itemList");

  for (var i = 0; i < favoriteItems.length; i++) 
    {
    var listItem = document.createElement("li");
    listItem.textContent = favoriteItems[i];
    list.appendChild(listItem);
    }
}

// Call the function
displayItems();