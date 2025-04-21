let form = document.querySelector("form");
form.addEventListener("submit", onFormSubmit);
console.log("form:", form);

function onFormSubmit() {
  event.preventDefault();
  const data = new FormData(event.target);
  const dataObject = Object.fromEntries(data.entries());
  console.log(dataObject);

  form.reset();

  form.style.display = "none";

  message.style.display = "none";
  // create a new element <p></p>
  // add a message
  // add a message within the paragraph
  // add a class to this paragraph element using class list
  // add your style to the class (in css or js)

  let customerOrders = [];

  customerOrders.push(dataObject);
  console.log(customerOrders);
}
