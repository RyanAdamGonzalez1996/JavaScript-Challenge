// from data.js
var tableData = data;

// Initialize the button instance
var button = d3.select("#filter-btn");

// Initialize the form instance
var form = d3.select("#form");

// Create Event handlers
button.on("click", runEvent);
form.on("submit", runEvent);

// Function to create and append data to the table
function createTable(filteredData){
    
    // Select the table element by id
    var table = d3.select("#ufo-table");
    var header = d3.selectAll(".table-head");

    // Select the tbody element by id 
    var tbody = table.select("tbody");
    var thead = table.select("thead");
    var trow;

    // Sets the table to it's default blank setting for population
    tbody.html("");

    // Loop through each object and append the data to the table
    filteredData.forEach(function(dataObject){
        // Create new row for each object
        trow = tbody.append("tr");
        trow.append("td").text("test");
    });

};

// Event Handler Function
function runEvent(){

    // Prevent Page from Refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the input value (date) from the input element
    var inputData = inputElement.property("value");

    // Test 
    console.log(inputData);
    console.log(tableData);

    // Filter the data.js by the input value
    var filteredData = tableData.filter(sighting => sighting.datetime === inputData);
    
    // Test
    console.log(filteredData);

    // Call the createTable function with the 
    // filteredData as the parameter
    createTable(filteredData);
};

