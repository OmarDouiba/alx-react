import $ from "jquery";
import "./body.css";
import _ from "lodash";

$("body").append("<button>Click here to get started</button>");
$("body").append("<p id='count'></p>");

let count = 0;
function updateCounter() {
  count += 1;
  $("#count").text(`${count} clicks on the button`);
}

$("button").on("click", _.debounce(updateCounter, 500));
