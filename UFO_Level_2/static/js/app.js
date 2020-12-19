// from data.js
var tableData = data;

// Initialize the button instance
var button = d3.select("#filter-btn");

// Initialize the form instance
var form = d3.select("#form");

// Create Event handlers
button.on("click", runEvent);
form.on("submit", runEvent);

//d3.selectAll(".filter").on("change", runFilter);

// Function to create and append data to the table
function createTable(filteredData){
    
    // Select the table element by id
    var table = d3.select("#ufo-table");

    // Select the tbody element by id 
    var tbody = table.select("tbody");
    var trow;

    // Sets the table to it's default blank setting for population
    tbody.html("");

    // Loop through each object and append the data to the table
    filteredData.forEach(function(dataObject){
        // Create new row for each object
        trow = tbody.append("tr");
        trow.append("td").text(dataObject.datetime);
        trow.append("td").text(dataObject.city);
        trow.append("td").text(dataObject.state);
        trow.append("td").text(dataObject.country);
        trow.append("td").text(dataObject.shape);
        trow.append("td").text(dataObject.durationMinutes);
        trow.append("td").text(dataObject.comments);

    });

};

// Function to apply the filters that are selected
function applyFilters(){

};

// Function to check which Filters are selectd
function checkFilters(){
    var usedFilters = [];
    var ul = document.getElementById("filters");
    var filters = ul.getElementsByTagName("li");
    var test = filters[0].
    console.log(filters);
   // for (var i = 0; i < 7; i++){
    //    var ul = d3.g
     //   var li = li.select("input").property("value");
     //   usedFilters.push(test);
    //}
    console.log(usedFilters);
};

// Event Handler Function
function runEvent(){

    // Prevent Page from Refreshing
    d3.event.preventDefault();

    checkFilters();
    // Select the input element and get the raw HTML node
    //var inputElement = checkFilters();

    // Get the input value (date) from the input element
    //var inputData = inputElement.property("value");

    // Test
    //console.log(inputData);
    // Filter the data.js by the input value
    //var filteredData = tableData.filter(sighting => sighting.datetime === inputData);

    // Call the createTable function with the 
    // filteredData as the parameter
    //createTable(filteredData);
};

