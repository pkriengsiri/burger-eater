$(document).ready(function () {
  // Event listener for the devour/ eat buttons
  // Makes an ajax put call to change the devour state
  $(".devour-state").on("click", function (event) {
    const id = $(this).data("id");
    const devoured = $(this).data("devoured");

    var devouredState = {
      devoured: devoured,
    };

    $.ajax(`/api/burgers/${id}`, {
      type: "PUT",
      data: devouredState,
    }).then(function () {
      if (devoured) {
        console.log("Ate the burger");
      } else {
        console.log("Added burger back to the devoured queue");
      }
      location.reload();
    });
  });

  // Event listener for the delete button
  // Makes and AJAX delete call to delete the burger
  $(".delete-burger").on("click", function (event) {
    const id = $(this).data("id");

    $.ajax(`/api/burger/${id}`, {
        type: "DELETE"
    }).then(function() {
        console.log("Deleted burger of ID: "+id);
        location.reload()
    })
  });
});
