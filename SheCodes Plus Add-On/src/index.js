function aletDate(event) {
  let tokyoDate = moment().tz("Asia/Tokyo").format("dddd, MMMM D, YYYY h:mm A");
  let parisDate = moment()
    .tz("France/Paris")
    .format("dddd, MMMM D, YYYY h:mm A");
  let sydneyDate = moment()
    .tz("Austrailia/Sydney")
    .format("dddd, MMMM D, YYYY h:mm A");
  if (event.target.value.length > 0) {
    if (event.target.value === "tokyo") {
      alert``;
    }
    if (event.target.value === "paris") {
      alert``;
    }
    if (event.target.value === "sydney") {
      alert``;
    }
  }
}

let country = document.querySelector("#county");
country.addEventListener("change", aletDate);
