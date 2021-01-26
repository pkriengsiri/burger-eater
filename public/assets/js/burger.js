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
      location.reload();
    });
  });

  // Event listener for the delete button
  // Makes and AJAX delete call to delete the burger
  $(".delete-burger").on("click", function (event) {
    const id = $(this).data("id");

    $.ajax(`/api/burgers/${id}`, {
        type: "DELETE"
    }).then(function() {
        location.reload()
    })
  });
});
