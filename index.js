document.getElementById("submit").addEventListener("click", ajax);

function ajax(){
  console.log("function ajax has run");
  var searchTerm = document.getElementById("search").value;
  console.log(searchTerm);
        $.getJSON('https://en.wikipedia.org/w/api.php?action=opensearch&callback=?&suggest=true&search=' + searchTerm, function(json){
      console.log(json);
    });
}

// function ajax() {
//   console.log("function ajax was run");
//   var searchTerm = document.getElementById("search").value;
//   console.log(searchTerm);
//   $.ajax({ 
//    url: "https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=" + searchTerm + "&prop=info&inprop=url&utf8=&format=json",
//    data: queryData,
//    dataType: "json",
//    success: function( jsondata ){
//         alert(jsondata.result);
//        }
//   });
//  };