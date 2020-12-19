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
function createTable(date, city, state, country, shape, duration, comments){
    
    // Select the table element by class name

    // Initialize the table element to be blank

    // Append the data to the table
};

// Event Handler Function
function runEvent(){

    // Prevent Page from Refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the input value (date) from the input element
    var inputDate = inputElement.property("value");

    // Test 
    console.log(inputDate);
    console.log(tableData);
    // Filter the data.js by the input value
    
    // Set the information for the corresponding date into variables

    // Call the createTable function with the corresponding 
    // date with the parameters for each variable
};

