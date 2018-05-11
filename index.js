
document.getElementById("submit").addEventListener("click", ajax);

function ajax() {
  console.log("function ajax was run");
  var searchTerm = document.getElementById("search").value;
  console.log(searchTerm);
  $.ajax({ 
   type: "GET",
   url: "https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=" + searchTerm + "&prop=info&inprop=url&utf8=&format=json",
   data: queryData,
   dataType: "json",
   headers: { 'Api-User-Agent': 'Example/1.0' },
   success: function( jsondata ){
        alert(jsondata.result);
       }
  });
 };

