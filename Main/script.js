$(document).ready(function() {

  $("#search-button").on("click", function(){
    var searchVal = $("#search-value").val();

    $("search-value").val("");

    searchWeather(searchVal);
  });

}