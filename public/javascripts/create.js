// Attach a submit event handler to the form with id="CreateForm"
$("#CreateForm").submit(function(e) {
    // Prevent the default behavior of the form, which is to send the data and refresh the page
    e.preventDefault();

    // Get the data from the form fields as an object
    const data = $(this).serialize();

    // Send an AJAX POST request to the server with the data
    $.post("/create", data, function(response) {
        // Handle the response from the server
        // For example, you can display a success message or update the page content
        alert("Your post was created successfully!");
    });
});
