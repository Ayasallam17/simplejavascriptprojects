function calculateTip(){
    var billAmt        = document.getElementById("billamt").value;
    var serviceQuality = document.getElementById("servicesQuality").value;
    var numOfPeople    = document.getElementById("peopleamp").value;

    // validate unput

    if(billAmt === "" || serviceQuality == 0){
        alert("please enter values");
        return;
    }
    if(numOfPeople === "" || numOfPeople <=1){
        numOfPeople =1;
        document.getElementById("each").style.display = "none";
    } else{
        document.getElementById("each").style.display = "block";
    }

    //calculate tip 
    var total = (billAmt * serviceQuality) / numOfPeople;
    //round to decimal places
    total = Math.round(total *100) / 100;
    //it make sure we alwys have two decimal fixed
    total = total.toFixed(2);

    //display the tip
    document.getElementById("totalTip").style.display = "block";
    var resultShow = document.getElementById("tip");
    resultShow.innerHTML = total;
    billAmt.value = '';
    numOfPeople.value='';
}
    //hide tip amount in loading
function hideresultOnLoading(){ 
    document.getElementById("totalTip").style.display= "none";
    document.getElementById("each").style.display = "none";
}

    //calling function when press button
    hideresultOnLoading();
    document.getElementById("calculateButton").onclick = function(){
        calculateTip();
    }

