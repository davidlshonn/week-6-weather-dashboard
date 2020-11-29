$(document).ready(function() {
//Adding onclick to the search button
  $("#search-button").on("click", function(){
    //Assigns the input value to a variable
    var searchVal = $("#search-value").val();
    //Clear input box
    $("search-value").val("");
    //Searching for the weather using input value
    searchWeather(searchVal);
  });
  //Input is saved when button is clicked
  $(".history").on("click", "li", function() {
    searchWeather($(this).text());
  });
  //Adds a new row using saved input
  function addRow(text){
    var list = $("<li>").addClass("list-group").text(text);
    $(".history").append(list);
  }

  //API call to get current weather of city input
  function searchWeather(searchVal){
    $.ajax({
      type: "GET",
      url: "http://api.openweathermap.org/data/2.5/weather?q=" + searchValue + "&appid=ddea68b1fb7bb0ae74cba7cd32689361",
      dataType: "json",
      success: function(data) {
        //Creates history link of each search
        if (history.indexOf(searchVal) === -1) {
          history.push(searchVal);
          window.localStorage.setItem("history", JSON.stringify(history));

          addRow(searchVal);
        }
        
        //Clear any old content
        $("#today").empty();

        
      }
    })
  }


}