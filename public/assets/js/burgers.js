$(function(){
    $(".eatbttn").on("click", function (event) {
        var id = $(this).data("id");
        var devoured = $(this).data("devoured");

        var devouredState = {
            devoured: true
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devouredState
        }).then(
            function () {
                console.log("ate this burger", devoured);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
    $(".create-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newBurger = {
            burger_name: $("#bu").val().trim(),
            
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
    $(".purgeit").on("click", function (event) {
        var id = $(this).data("id");
        var devoured = $(this).data("devoured");

        var devouredState = {
            devoured: false
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devouredState
        }).then(
            function () {
                console.log("ate this burger", devoured);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
    $(".deleteit").on("click", function (event) {
        var id = $(this).data("id");

        // Send the DELETE request.
        $.ajax("/api/burgers/" + id, {
            type: "DELETE"
        }).then(
            function () {
                console.log("deleted burger", id);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});