var searchTerm = function(){
  var searchValue = document.getElementById("search").value;
  console.log(searchValue);
};
document.getElementById("submit").addEventListener("click", searchTerm);
