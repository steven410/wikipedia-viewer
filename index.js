
document.getElementById("submit").addEventListener("click", ajax);
// document.getElementById("search").addEventListener("keydown", function(event){
//   if (event.keyCode === 13) {
//     document.getElementById("submit").click();
//   }
// });

function ajax(){
  var searchTerm = document.getElementById("search").value;
    $.getJSON('https://en.wikipedia.org/w/api.php?action=opensearch&callback=?&suggest=true&search=' + searchTerm, function(json){
      for (i=0; i<=json[0].length; i++){
        $("#results").append(
            "<h2>" + (json[1][i] + "</h2>" +
            "<p>"+ json[2][i] + "</p>")
            );
      };
      }); //end function(json)
    };