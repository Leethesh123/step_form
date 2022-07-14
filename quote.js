var Back_Button = [];

var Form_Data = [];

var whichKindOfFule = "";
var whatTypeOfBoiler = "";
var whichTypeOfWaterTank = "";
var outComeWater = "";
var whereConvertToCombiBoiler = "";
var whereConvertToCombiBoilerYes = "";
var upgradeToWaterCylinder = "no";
var newBoilerInDifferentPlace = "";
var whereIsCurrentBoiler = "";
var whereYouWantNewBoiler = "";
var boilerPlacementCharge = "";
var bestDescribeYourHome = "";
var bedroomsDoYouHave = "";
var howManayBedroomsDoYouHave = "";
var howManyBathtubsDoYouHave = "";
var howManyShowersDoYouHave = "";
var flueComeFrom = "";
var extraFlueCharges = 0;
var flue30cm = "";
var underTheFlue = "";
var hearAboutus = "";
var firstname = "";
var emailaddress = "";
var phonenumber = "";
var lastName = "";
var postcode = "";
var address = "";
var city = "";

if(sessionStorage.getItem('whichKindOfFule')){
    onClickSection1(sessionStorage.getItem('whichKindOfFule'));
}


function onClickSection1(val) {
    console.log(val);
    whichKindOfFule = val;
    jQuery("#section1").hide();
    sessionStorage.setItem("whichKindOfFule", whichKindOfFule);
    jQuery("#section2").show();
    jQuery("#section1").removeClass("active");
    jQuery("#section2").addClass("active");
    Form_Data.push("section1");

}

function onClickSection2(val) {
    console.log(val);
    whatTypeOfBoiler = val;
    
    if (val == "Combi Boiler") {
        Back_Button["section6"] = "section2";
        jQuery("#section2").hide();
        sessionStorage.setItem("whatTypeOfBoiler", whatTypeOfBoiler);
        jQuery("#section6").show();
        jQuery("#section2").removeClass("active");
        jQuery("#section6").addClass("active");
    } else if (val == "Back Boiler" || val == "No Boiler") {
        Back_Button["section9"] = "section2";
        jQuery("#section2").hide();
        sessionStorage.setItem("whatTypeOfBoiler", whatTypeOfBoiler);
        jQuery("#section9").show();
        jQuery("#section2").removeClass("active");
        jQuery("#section9").addClass("active");
    } else {
        Back_Button["section3"] = "section2";
        jQuery("#section2").hide();
        sessionStorage.setItem("whatTypeOfBoiler", whatTypeOfBoiler);
        jQuery("#section3").show();
        jQuery("#section2").removeClass("active");
        jQuery("#section3").addClass("active");
    }
    Form_Data.push("section2");
}

function onClickSection3(val) {
    console.log(val);
    whichTypeOfWaterTank = val;
    Back_Button["section4"] = "section3";
    jQuery("#section3").hide();
    sessionStorage.setItem("whichTypeOfWaterTank", whichTypeOfWaterTank);
    jQuery("#section4").show();
    jQuery("#section3").removeClass("active");
    jQuery("#section4").addClass("active");
    Form_Data.push("section3");
}

function onClickSection4(val) {
    whereConvertToCombiBoiler = val;
    console.log(val);
    sessionStorage.setItem("whereConvertToCombiBoiler", whereConvertToCombiBoiler);
    if (whereConvertToCombiBoiler == "yes") {
        whereConvertToCombiBoilerYes = "Combi Boiler";
        Back_Button["section5"] = "section4";

        jQuery("#section4").hide();
        sessionStorage.setItem("whereConvertToCombiBoilerYes", whereConvertToCombiBoilerYes);
        jQuery("#section5").show();
        jQuery("#section4").removeClass("active");
        jQuery("#section5").addClass("active");
    } else {
        whereConvertToCombiBoilerYes = "no";
        Back_Button["section4_1"] = "section4";

        jQuery("#section4").hide();
        sessionStorage.setItem("whereConvertToCombiBoilerYes", whereConvertToCombiBoilerYes);
        jQuery("#section4_1").show();
        jQuery("#section4").removeClass("active");
        jQuery("#section4_1").addClass("active");
    }

    Form_Data.push("section4");
}

function onClickSection4_1(val) {
    console.log(val);
    jQuery("#section4_1").hide();
    jQuery("#section5").show();
    jQuery("#section4_1").removeClass("active");
    jQuery("#section5").addClass("active");

    Back_Button["section5"] = "section4_1";

    if (val == "yes") {
        upgradeToWaterCylinder = "yes";
        sessionStorage.setItem("upgradeToWaterCylinder", upgradeToWaterCylinder );
    
    } else {
        upgradeToWaterCylinder = "no";
        sessionStorage.setItem("upgradeToWaterCylinder", upgradeToWaterCylinder );
    }
    Form_Data.push("section4_1");
}

function onClickSection5(val) {
    console.log(val);
    Back_Button["section6"] = "section5";
    outComeWater = val;
    jQuery("#section5").hide();
    
    jQuery("#section6").show();
    jQuery("#section5").removeClass("active");
    jQuery("#section6").addClass("active");
    Form_Data.push("section5");

}

function onClickSection6(val) {
    console.log(val);
    newBoilerInDifferentPlace = val;
    sessionStorage.setItem("newBoilerInDifferentPlace", newBoilerInDifferentPlace);
    if (val == "Yes") {
        Back_Button["section7"] = "section6";
        jQuery("#section6").hide();
        jQuery("#section7").show();
        jQuery("#section6").removeClass("active");
        jQuery("#section7").addClass("active");
    } else {
        Back_Button["section9"] = "section6";
        jQuery("#section6").hide();
        jQuery("#section9").show();
        jQuery("#section6").removeClass("active");
        jQuery("#section9").addClass("active");
    }
    Form_Data.push("section6");
}

function onClickSection7(val) {
    console.log(val);
    whereIsCurrentBoiler = val;
    sessionStorage.setItem("whereIsCurrentBoiler", whereIsCurrentBoiler);
    Back_Button["section8"] = "section7";
    jQuery("#section7").hide();
    jQuery("#section8").show();
    jQuery("#section7").removeClass("active");
    jQuery("#section8").addClass("active");
    Form_Data.push("section7");
}

function onClickSection8(place_name, cost) {
    console.log(place_name, cost);
    whereYouWantNewBoiler = place_name;
    sessionStorage.setItem("whereYouWantNewBoiler", whereYouWantNewBoiler);
    boilerPlacementCharge = cost;
    sessionStorage.setItem("boilerPlacementCharge", boilerPlacementCharge);
    if (place_name == "Somewhere else") {
        document.location.href = "./manual-quote/";
    } else {
        Back_Button["section9"] = "section8";
        jQuery("#section8").hide();
        jQuery("#section9").show();
        jQuery("#section8").removeClass("active");
        jQuery("#section9").addClass("active");
    }
    Form_Data.push("section8");
}

function onClickSection9(val) {
    console.log(val);
    bestDescribeYourHome = val;
    sessionStorage.setItem("bestDescribeYourHome", bestDescribeYourHome);
    if (val == "Flat") {
        Back_Button["section10"] = "section9";
        jQuery("#section9").hide();
        jQuery("#section10").show();
        jQuery("#section9").removeClass("active");
        jQuery("#section10").addClass("active");
    } else {
        Back_Button["section10"] = "section9";
        jQuery("#section9").hide();
        jQuery("#section10").show();
        jQuery("#section9").removeClass("active");
        jQuery("#section10").addClass("active");
    }
    Form_Data.push("section9");
}

function onClickSection10(val) {
    console.log(val);
    howManayBedroomsDoYouHave = val;
    sessionStorage.setItem("howManayBedroomsDoYouHave", howManayBedroomsDoYouHave);
    Back_Button["section11"] = "section10";
    jQuery("#section10").hide();
    jQuery("#section11").show();
    jQuery("#section10").removeClass("active");
    jQuery("#section11").addClass("active");
    Form_Data.push("section10");
}

function onClickSection11(val) {
    console.log(val);
    howManyBathtubsDoYouHave = val;
    sessionStorage.setItem("howManyBathtubsDoYouHave", howManyBathtubsDoYouHave);
    Back_Button["section12"] = "section11";

    jQuery("#section11").hide();
    jQuery("#section12").show();
    jQuery("#section11").removeClass("active");
    jQuery("#section12").addClass("active");
    Form_Data.push("section11");
}

function onClickSection12(val) {
    console.log(val);
    howManyShowersDoYouHave = val;
    sessionStorage.setItem("howManyShowersDoYouHave", howManyShowersDoYouHave);
    Back_Button["section13"] = "section12";
    jQuery("#section12").hide();
    jQuery("#section13").show();
    jQuery("#section12").removeClass("active");
    jQuery("#section13").addClass("active");
    Form_Data.push("section12");
}

function onClickSection13(val) {
    console.log(val);
    flueComeFrom = val;
    sessionStorage.setItem("flueComeFrom", flueComeFrom);
    if (val == "Wall") {
        Back_Button["section14"] = "section13";
        jQuery("#section13").hide();
        jQuery("#section14").show();
        jQuery("#section13").removeClass("active");
        jQuery("#section14").addClass("active");
        extraFlueCharges = 0;
    } else if (val == "Roof") {
        Back_Button["section17"] = "section13";
        jQuery("#section13").hide();
        jQuery("#section16").show();
        jQuery("#section13").removeClass("active");
        jQuery("#section16").addClass("active");
        extraFlueCharges = 474.4;
    }
    Form_Data.push("section13");
}

function onClickSection14(val) {
    console.log(val);
    flue30cm = val;
    sessionStorage.setItem("flue30cm", flue30cm);
    Back_Button["section14"] = "section13";
    jQuery("#section14").hide();
    jQuery("#section15").show();
    jQuery("#section14").removeClass("active");
    jQuery("#section15").addClass("active");
    Form_Data.push("section14");
}
function onClickSection15(val) {
    console.log(val);
    underTheFlue = val;
    sessionStorage.setItem("underTheFlue", underTheFlue);
    Back_Button["section16"] = "section15";
    jQuery("#section15").hide();
    jQuery("#section16").show();
    jQuery("#section15").removeClass("active");
    jQuery("#section16").addClass("active");
    Form_Data.push("section15");
}

function onClickFormSubmit() {
    firstname = document.getElementById('firstName').value;
    lastName = document.getElementById('lastName').value;
    emailaddress = document.getElementById('emailaddress').value;
    phonenumber = document.getElementById('phonenumber').value;
    if(firstname == "")
    {
        document.getElementById('firstName').innerHTML = '** Please enter your first name. '
        return false;
    }
    if((firstname.length < 2) || (firstname.length > 20))
    {
        document.getElementById('firstName').innerHTML = '** Length Between 2 to 20 Character. '
        return false;
    }
    if(!isNaN(firstname))
    {
        document.getElementById('firstName').innerHTML = '** Only Character are allowed ';
        return false;
    }

    if(lastname == "")
    {
        document.getElementById('lastName').innerHTML = '** Please enter your last name. '
        return false;
    }
    if((lasttname.length < 2) || (lastname.length > 20))
    {
        document.getElementById('lastName').innerHTML = '** Length Between 2 to 20 Character. '
        return false;
    }
    if(!isNaN(lastname))
    {
        document.getElementById('lastName').innerHTML = '** Only Character are allowed ';
        return false;
    }
    if((lastname.length <= 2) || (lastname.length > 20) )
    {
        jQuery("#lastname2-error").show();
        return;
    }
    if(emailaddress == "")
    {
        document.getElementById('emailaddress').innerHTML = '** Please enter your last name. '
        return false;
    }
    if(emailaddress.indexOf('@') <= 0)
    {
        document.getElementById('emailaddress').innerHTML = '** @ Invialid Position. '
        return false;
    }
    if((emailaddress.charAt(emailaddress.length-4) != "." && emailaddress.charAt(emailaddress.length-3)!='.'))
    {
        document.getElementById('emailaddress').innerHTML = '** . Invialid Position. '
        return false;
    }
    if(phonenumber == "")
    {
        document.getElementById('phonenumber').innerHTML = '** Please enter your phone number. '
        return false;
    }
    if(!isNaN(phonenumber))
    {
        document.getElementById('phonenumber').innerHTML = '** Only digits are allow. '
        return false;
    }
    if(phonenumber.length != 10)
    {
        document.getElementById('phonenumber').innerHTML = '** Please Provied Valid Phone Number. '
        return false;
    }
    sessionStorage.setItem("firstname", firstname);
    sessionStorage.setItem("emailaddress", emailaddress);
    sessionStorage.setItem("phonenumber", phonenumber);
    sessionStorage.setItem("lastName", lastName);

}


function onBackClick(backFrom, backTo) {


    jQuery("#section" + backFrom).hide();
    jQuery("#section" + backFrom).removeClass("active");

    let backToNew = Form_Data.pop();
    jQuery("#" + backToNew).show();
    jQuery("#" + backToNew).addClass("active");
}

