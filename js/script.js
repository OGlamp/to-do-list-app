function newItem() {
  //1.adding a new item to the list of items:
  let li = $("<li></li>");
  let inputValue = $("#input").val();
  li.append(inputValue);

  if (inputValue === "") {
    alert("Please Enter a Value!");
  } else {
    $("#list").append(li);
  }
  // $(document).ready(function () {
  //   $("#input").keypress(function (e) {
  //     if (e.which == 13) {
  //       e.preventDefault();
  //       $("#list").append(li);
  //     }
  //   });
  // });
  // $(document).ready(function () {
  //   $("#input").on("keydown", function (e) {
  //     if (e.which == 13) {
  //       $("#list").append(li);
  //     }
  //   });
  // });

  //2.crossing an item out

  function crossOut() {
    li.toggleClass("strike");
  }

  li.on("dblclick", function crossOut() {
    li.toggleClass("strike");
  });

  //3. adding delete button

  let crossOutButton = $("<button></button>");
  crossOutButton.append(document.createTextNode("X"));
  li.append(crossOutButton);

  crossOutButton.on("click", deleteListItem);
  function deleteListItem() {
    li.addClass("delete");
  }

  //4. reordering the items
  $("#list").sortable();
}
