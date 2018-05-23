function ajax(){
  var searchTerm = document.getElementById("search").value;
    $.getJSON('https://en.wikipedia.org/w/api.php?action=opensearch&callback=?&suggest=true&search=' + searchTerm, function(json){
      $("#results").html("");
      $("")
      for (i=0; i<=json[0].length; i++){
        $("#results").append(
            "<h2>" + (json[1][i] + "</h2>" +
            "<p>" + json[2][i] + "</p>" +
            "<a href=" + json[3][i]) + ">Read More</a>"
            );
      };
      }); //end function(json)
    };