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

  $(function () {
    $("form").submit(function () {
      return false;
    });
  });

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

function newItemOnEnter(event) {
  var x = event.code;
  if (x == "Enter") {
    event.preventDefault(); // Don't submit form
    newItem();
  }
}
