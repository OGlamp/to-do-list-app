function newItem() {
  //1.adding a new item to the list of items:
  let li = $("<li></li>");
  let inputValue = $("#input").val();
  li.append(inputValue);

  if (inputValue === "") {
    alert("Please Enter a Value!");
  } else {
    let list = $("#list");
    list.append(li);
  }

  //2.crossing an item out:

  function crossOut() {
    li.toggleClass("strike");
  }

  //3. adding delete button "X"

  let crossOutButton = $("<button></button>");
  crossOutButton.append(document.createTextNode("X"));
  li.append(crossOutButton);

  crossOutButton.on("click", deleteListItem);

  //3.2 adding class as 'delete' in the list

  function deleteListItem() {
    li.addClass("delete");
  }

  //4. reordering the items
  $("#list").sortable();
}
