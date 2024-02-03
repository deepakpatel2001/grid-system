var inputData
var customInputVal;
document.querySelector(".inc").addEventListener("click", () => {
    inputData = document.querySelector(".mainData").innerHTML
    inputData = parseInt(inputData)
    customInputVal = document.querySelector("#cstmVal").value;
    customInputVal = parseInt(customInputVal);
    var result = customInputVal + inputData;
    document.querySelector(".mainData").innerHTML = result;
})

var negative;
var customInputVal2;
document.querySelector(".dec").addEventListener("click", () => {
  negative = document.querySelector(".mainData").innerHTML;
  negative = parseInt(negative);
  customInputVal2 = document.querySelector("#cstmVal").value;
  customInputVal2 = parseInt(customInputVal2);
  var result = negative - customInputVal2;
  document.querySelector(".mainData").innerHTML = result;
});

document.querySelector(".reset").addEventListener('click', () => {
    document.querySelector(".mainData").innerHTML = 0;
})