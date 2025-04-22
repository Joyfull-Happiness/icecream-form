let form = document.querySelector("form");
form.addEventListener("submit", onFormSubmit);
console.log("form:", form);

let thankYou = document.querySelector("thankYou");
console.log("thankYou:", thankYou);

function onFormSubmit() {
  event.preventDefault();
  const data = new FormData(event.target);
  const dataObject = Object.fromEntries(data.entries());
  console.log(dataObject);

  form.reset();

  form.style.display = "none";
  thankYou.style.display = "block";

  let name = dataObject.name;

  thankYou = `Thank you ${name} for your order!`;
  console.log("first message to user:", thankYou);

  // create a new element <p></p>
  // add a message
  // add a message within the paragraph
  // add a class to this paragraph element using class list
  // add your style to the class (in css or js)

  let messageParagraph = document.createElement("p");
  messageParagraph.textContent = message;
  container.appendChild(messageParagraph);

  let customerOrders = [];

  customerOrders.push(dataObject);
  console.log(customerOrders);
}
