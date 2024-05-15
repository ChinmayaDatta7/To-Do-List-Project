const listContainer = document.querySelector("#list-container");

//For Checking and Unchecking the list
listContainer.addEventListener(
  "click",
  function (event) {
    if (event.target.tagName === "LI") {
      event.target.classList.toggle("checked");
    }
  },
  false
);
