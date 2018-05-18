document.getElementById("submit").addEventListener("click", ajax);

function ajax(){
  console.log("function ajax has run");
  var searchTerm = document.getElementById("search").value;
  console.log(searchTerm);
        $.getJSON('https://en.wikipedia.org/w/api.php?action=opensearch&callback=?&suggest=true&search=' + searchTerm, function(json){
      console.log(json);

      
    });
}
