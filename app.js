var Ac = document.getElementById("AC");
var Del = document.getElementById("Del");
var equal = document.getElementById("equal");
var mul = document.getElementById("mul");
var co = document.getElementById("cos");
var si = document.getElementById("sin");
var ta = document.getElementById("tan");
var exp = document.getElementById("exp");
var ln = document.getElementById("ln");
var lo = document.getElementById("log");
//var power = document.getElementById("power");
var sqroot = document.getElementById("sqrt");
var screen = document.getElementById("screen");
var hiMath = document.querySelector(".d1");
var d2_el = document.querySelector(".d2-equal");
var d2Css = window.getComputedStyle(d2_el, null).getPropertyValue("display");
var S = document.getElementById("Scientific");
var B = document.getElementById("Basic");
//
var arr1 = document.getElementsByClassName("show1");
var arr2 = [co, si, ta, exp, ln, log, sqroot];
//
function resetCalculator() {
  if (d2Css == "block") {
    d2_el.style.display = "none";
    d2Css = "none";
    screen.textContent = "";
    hiMath.textContent = "";
  }
}
//
S.addEventListener("click", function () {
  document.querySelector(".sc1").style.display = "flex";
  document.querySelector(".sc1").style.flex = "1";
  document.querySelector(".sc2").style.display = "flex";
  document.querySelector(".sc2").style.flex = "1";
});
B.addEventListener("click", function () {
  document.querySelector(".sc1").style.display = "none";
  document.querySelector(".sc1").style.flex = "none";
  document.querySelector(".sc2").style.display = "none";
  document.querySelector(".sc2").style.flex = "none";
});
//
for (var i = 0; i < arr1.length; i++) {
  arr1[i].addEventListener("click", function () {
    resetCalculator();
    document.getElementById("screen").textContent += this.textContent;
  });
}
arr2.forEach(function (item) {
  item.addEventListener("click", function () {
    resetCalculator();
    document.getElementById("screen").textContent += item.textContent + "(";
  });
});
//
Ac.addEventListener("click", function () {
  hiMath.textContent = "";
  screen.textContent = "";
  d2_el.style.display = "none";
  d2Css = "none";
});
Del.addEventListener("click", function () {
  resetCalculator();
  let str = screen.textContent;
  let strArr = str.split("");
  strArr.pop();
  let strJoin = strArr.join("");
  screen.textContent = strJoin;
});
mul.addEventListener("click", function () {
  resetCalculator();
  screen.textContent += "*";
});
equal.addEventListener("click", function () {
  let str = screen.textContent;
  let strResult = str
    .replaceAll("Cos(", "Math.cos(")
    .replaceAll("Sin(", "Math.sin(")
    .replaceAll("Tan(", "Math.tan(")
    .replaceAll("Pi", "Math.PI")
    .replaceAll("Log(", "Math.log10(")
    .replaceAll("Ln(", "Math.log(")
    .replaceAll("Exp(", "Math.exp(")
    .replaceAll("√(", "Math.sqrt(");
  try {
    let finalResult = eval(strResult);
    if (Math.abs(finalResult) < 0.00000001) {
      screen.textContent = 0;
    } else {
      screen.textContent = finalResult;
    }
    hiMath.textContent = str;
    d2_el.style.display = "block";
    d2Css = "block";
  } catch (error) {
    screen.textContent = "ERROR";
    hiMath.textContent = str;
    d2_el.style.display = "block";
    d2Css = "block";
  }
});
