var chk = 0;
function draw(){
  if (chk==0){
    document.getElementById('drawer').style.marginLeft = "0px";
    document.getElementById('content').style.display = "none";
    chk = 1;
  }else {
    drawback();

  }

}
function drawback(){
  document.getElementById('drawer').style.marginLeft = "-200px";
  document.getElementById('content').style.display = "block";
  chk = 0;
}
function roadTrip(){
  try {
    var km = document.form1.km.value;
    var millage = document.form1.millage.value;
    var passenger = document.form1.passenger.value;
    var rs = document.form1.rs.value;
    if ((km=="") || (millage=="") || (passenger=="") || (rs=="")){
      alert("Please enter all the data");
    }else{
      var result = ((km / millage) * rs ) / passenger;
      result = result.toFixed(2);
      document.getElementById("result").innerHTML = "For each it cost <b> &#8377;" + result + "</b>";
    }
  }
  catch(err) {
      alert("Sothing Wrong !")
  }
}
function electric(){
  try {
    var watt = document.form1.watt.value;
    var hours = document.form1.hours.value;
    var rs = document.form1.rs.value;
    if ((watt=="") || (hours=="")|| (rs=="")){
      alert("Please enter all the data");
    }else{
      var result = (watt *rs) / 1000 ;
      var result1 = result * hours;
      result = result.toFixed(2);
      result1 = result1.toFixed(2);
      document.getElementById("result").innerHTML = "Cost Per Hour <b>&#8377; " + result + "</b> <br/>Cost Per Day <b> &#8377; " + result1 + " </b><br/>Cost Month <b>&#8377; " + (result1 * 30).toFixed(2) + "</b>";
    }
  }
  catch(err) {
      alert("Sothing Wrong !")
  }
}
function bmi(){
  try {
    var weight = document.form1.weight.value;
    var height = document.form1.height.value;
    if ((weight=="") || (height=="")){
      alert("Please enter all the data");
    }else{
      var result = weight / (height * height);
      result = result.toFixed(2);
      document.getElementById("result").innerHTML = "Your BMI is <b>" + result + "</b>";
    }
  }
  catch(err) {
      alert("Sothing Wrong !")
  }
}
function emi(){
  try {
    var amount = document.form1.amount.value;
    var rate = document.form1.rate.value;
    var install = document.form1.install.value;
    if ((amount=="") || (rate=="")|| (install=="")){
      alert("Please enter all the data");
    }else{
      var per = (amount * (rate/100)) * install;

      var result =( Number(amount) + Number(per) )/install;
      result = result.toFixed(2);
      document.getElementById("result").innerHTML = "EMI each month is <b> &#8377; " + result + "</b> for " + install + " Months";
    }
  }
  catch(err) {
      alert("Sothing Wrong !")
  }
}
function incomeTax(){
  try {
    var income = document.form1.income.value;
    var rate = document.form1.rate.value;
    if ((income=="") || (rate=="")){
      alert("Please enter all the data");
    }else{

      if (income<50000){
        document.getElementById("result").innerHTML = "Your Don't need to pay tax"
      }else
      {
      var result = income * (rate/100);
      result = result.toFixed(2);
      document.getElementById("result").innerHTML = "You need to pay <b> &#8377; " + result + "</b>";
      }
    }
  }
  catch(err) {
      alert("Sothing Wrong !")
  }
}
