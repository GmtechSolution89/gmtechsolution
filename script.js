// function searchGames() {
//     // Declare variables
//     var input, filter, ul, li, a, i, txtValue;
//     input = document.getElementById('search-bar');
//     filter = input.value.toUpperCase();
//     ul = document.getElementsByClassName("game-list")[0];
//     li = ul.getElementsByTagName('h4');
  
//     // Loop through all games and hide those that don't match the search query
//     for (i = 0; i < li.length; i++) {
//       a = li[i].getElementsByTagName("h4")[0];
//       txtValue = a.textContent || a.innerText;
//       if (txtValue.toUpperCase().indexOf(filter) > -1) { 
//         li[i].style.display = "";
//       } else {
//         li[i].style.display = "none";
//       }
//     }
//   }

//   To use this code, simply copy and paste the HTML, CSS, and JS code into separate files named
//    index.html, style.css, and script.js, respectively. Then, open the index.html file in a
//     web browser to see the search bar in action.

// if (txtValue.toUpperCase().indexOf(filter) > -1) {
  