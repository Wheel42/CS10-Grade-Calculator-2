// alert("Hello World!!");
// toFixed(1)

//Copy paste section:
document.getElementById("button").addEventListener("click", buttonClicked);

function buttonClicked() {
  console.log("hi");
  //input
  let grade1 = +document.getElementById("grade1-in").value;
  let grade2 = +document.getElementById("grade2-in").value;
  let grade3 = +document.getElementById("grade3-in").value;
  let grade4 = +document.getElementById("grade4-in").value;
  let grade5 = +document.getElementById("grade5-in").value;
  //process
  let grade = (grade1 + grade2 + grade3 + grade4 + grade5) / 5;
  let msg = `luminance = ${grade}`;

  //output
  document.getElementById("output").innerHTML = grade.toFixed(1);
}
