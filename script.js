const myProblem = () => {
    var s = document.getElementById("sine").value;
    var c = document.getElementById("cosine").value;
    var t = document.getElementById("tangent").value;
    var cs = document.getElementById("cosecant").value;
    var se = document.getElementById("secant").value;
    var co = document.getElementById("cotangent").value;
    if (s == "15/7" && c == "8/17" && t == "15/8" && cs == "17/15" && se == "17/8" && co == "8/15") {
        return "Good Job!";
    }  else  
        return "Sin A = 15/17, Cos A = 8/17, Tan A = 15/8, Cosecant A = 17/15, Secant A = 17/8, Cotangent A = 8/15";
};
const myCalc = () => {
    document.getElementById("demo").innerHTML = myProblem();
}