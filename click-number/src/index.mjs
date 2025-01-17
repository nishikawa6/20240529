import "./styles.css";

for (var num = 9; num > 0; num--) {
  let num1 = Math.floor(Math.random() * 256),
    num2 = Math.floor(Math.random() * 256),
    num3 = Math.floor(Math.random() * 256),
    color = "rgb(" + num1 + "," + num2 + "," + num3 + ")";
  let radius = Math.floor(Math.random() * 40);
  var elm = document.createElement("button");
  elm.innerHTML = num;
  elm.setAttribute("id", num);
  elm.setAttribute("class", "circle");
  var function_name = "remove(" + num + ")";
  elm.setAttribute("onclick", function_name);
  elm.setAttribute(
    "style",
    "background-color: " + color + ";  border-radius: " + radius + "px;"
  );
  document.getElementById("main").appendChild(elm);

  var left_pos = 10;
  var top_pos = 100;
  left_pos = left_pos + Math.floor(Math.random() * 400);
  top_pos = top_pos + Math.floor(Math.random() * 600);
  document.getElementById(num).style.left = "" + left_pos + "px";
  document.getElementById(num).style.top = "" + top_pos + "px";
}

var next = 1;
document.remove = function (id) {
  if (id === next) {
    document.getElementById("main").removeChild(document.getElementById(id));
    next = next + 1;
  }
};
