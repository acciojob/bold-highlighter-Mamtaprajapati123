// Get all the bold tags in the paragraph
let boldTags = document.getElementsByTagName('strong');

// Define the highlight function
function highlight() {
  // Loop through all the bold tags and change their color to green
  for (let i = 0; i < boldTags.length; i++) {
    boldTags[i].style.color = 'green';
  }
}

// Define the return_normal function
function return_normal() {
  // Loop through all the bold tags and change their color back to black
  for (let i = 0; i < boldTags.length; i++) {
    boldTags[i].style.color = 'black';
  }
}
