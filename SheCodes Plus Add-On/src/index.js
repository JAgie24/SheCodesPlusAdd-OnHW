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
      alert`It is ${tokyoDate} in Aisa/Tokyo`;
    }
    if (event.target.value === "paris") {
      alert`It is ${parisDate} in Europe/Paris`;
    }
    if (event.target.value === "sydney") {
      alert`It is ${sydneyDate} in Austrailia/Sydney`;
    }
  }
}

let country = document.querySelector("#county");
country.addEventListener("change", aletDate);
