function aletDate(event) {
  if (event.target.value.length > 0) {
    let currentTime = moment()
      .tz(event.target.value)
      .format("dddd, MMMM D, YYYY h:mm A");
    alert(`It is ${currentTime} in ${event.target.value}`);
  }
}

let city = document.querySelector("#city");
city.addEventListener("change", aletDate);
