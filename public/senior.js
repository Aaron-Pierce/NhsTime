//THIS IS THE OLD ALGORITHM



//^^^^^^^^^^^^^^^^^^^^



//^^^^^^^^^^^^^^^^^^^^^^


/*
 var textHeight = $(".p").height()/2;
 var bodyHeight = $(window).height()/2;

 $(".p").css("margin-top",bodyHeight - textHeight);



 var end0 = 8
 var end1 = 9
 var end2 = 10
 var end3 = 11
 var end4 = 12
 var end5 = 13
 var end6 = 13
 var end7 = 14
 var end8 = 15





 var currentdate = new Date();
 var currentHours;
 var currentMinutes;
 var timeLeft;
 var currentTime;
 var currentPeriod;
 var minleft;



 function checkvars(){
 var textHeight = $(".p").height()/2;
 var bodyHeight = $(window).height()/2;

 $(".p").css("margin-top",bodyHeight - textHeight);

 currentdate = new Date();
 currentHours = currentdate.getHours();
 currentMinutes = currentdate.getMinutes();
 timeLeft;
 currentTime = currentHours+""+currentMinutes;
 currentPeriod = 0;
 minleft = 0;

 if(currentMinutes == 0){
 currentMinutes = "00";
 }
 else if(currentMinutes == 1){
 currentMinutes = "01";
 }else if(currentMinutes == 2){
 currentMinutes = "02";
 }else if(currentMinutes == 3){
 currentMinutes = "03";
 }else if(currentMinutes == 4){
 currentMinutes = "04";
 }else if(currentMinutes == 5){
 currentMinutes = "05";
 }else if(currentMinutes == 6){
 currentMinutes = "06";
 }else if(currentMinutes == 7){
 currentMinutes = "07";
 }else if(currentMinutes == 8){
 currentMinutes = "08";
 }else if(currentMinutes == 9){
 currentMinutes = "09";
 }
 }
 checkvars();
 run();
 function run(){

 var textHeight = $(".p").height()/2;
 var bodyHeight = $(window).height()/2;

 $(".p").css("margin-top",bodyHeight - textHeight);

 currentTime = currentHours+""+currentMinutes;



 if(currentMinutes == 0){
 currentMinutes = "00";
 }
 else if(currentMinutes == 1){
 currentMinutes = "01";
 }else if(currentMinutes == 2){
 currentMinutes = "02";
 }else if(currentMinutes == 3){
 currentMinutes = "03";
 }else if(currentMinutes == 4){
 currentMinutes = "04";
 }else if(currentMinutes == 5){
 currentMinutes = "05";
 }else if(currentMinutes == 6){
 currentMinutes = "06";
 }else if(currentMinutes == 7){
 currentMinutes = "07";
 }else if(currentMinutes == 8){
 currentMinutes = "08";
 }else if(currentMinutes == 9){
 currentMinutes = "09";
 }









 if(currentTime>= 1541 || currentTime<=729){
 if(currentHours == 13){
 currentHours = 1;
 }else if(currentHours == 14){
 currentHours = 2;
 }else if(currentHours == 15){
 currentHours = 3;
 }else if(currentHours == 16){
 currentHours = 4;
 }else if(currentHours == 17){
 currentHours = 5;
 }else if(currentHours == 18){
 currentHours = 6;
 }else if(currentHours == 19){
 currentHours = 7;
 }else if(currentHours == 20){
 currentHours = 8;
 }else if(currentHours == 21){
 currentHours = 9;
 }else if(currentHours == 22){
 currentHours = 10;
 }else if(currentHours == 23){
 currentHours = 11;
 }else if(currentHours == 24){
 currentHours = 12;
 }
 $(".body").html("<p class='p'>The Current Time Is: <br>"+currentHours+":"+currentMinutes);
 }





 if(currentTime>=730 && currentTime<=820){
 if(end0 == currentHours){
 currentPeriod = 0;
 timeLeft = 820 - currentTime;
 $(".body").html("<p class='p'> There Are " + timeLeft + " Minutes Left In " +currentPeriod +" Period");
 }else{
 currentPeriod = 0;
 timeLeft = (820 - currentTime)-40;
 $(".body").html("<p class='p'> There Are " + timeLeft + " Minutes Left In " +currentPeriod +" Period");
 }






 }else if(currentTime>=821 && currentTime<=835){

 timeLeft = 835 - currentTime;
 currentPeriod = "passing";
 $(".body").html("<p class='p'> There Are " + timeLeft + " Minutes Left In " +currentPeriod +" Period");
 }









 else if(currentTime>=835 && currentTime<=925){
 if(end1 == currentHours){
 timeLeft = 925 - currentTime;
 currentPeriod = 1;
 $(".body").html("<p class='p'> There Are " + timeLeft + " Minutes Left In " +currentPeriod +"st Hour");
 }else{
 timeLeft = (925 - currentTime)-40;
 currentPeriod = 1;
 $(".body").html("<p class='p'> There Are " + timeLeft + " Minutes Left In " +currentPeriod +"st Hour");
 }
 }







 else if(currentTime>=926 && currentTime<=929){
 timeLeft = 929 - currentTime;
 currentPeriod = "passing";
 $(".body").html("<p class='p'> There Are " + timeLeft + " Minutes Left In " +currentPeriod +" Period");
 }





 else if(currentTime>=929 && currentTime<=1019){
 if(end2 == currentHours){
 timeLeft = 1019 - currentTime;
 currentPeriod = 2;
 $(".body").html("<p class='p'> There Are " + timeLeft + " Minutes Left In " +currentPeriod +"nd Hour");
 }else{
 timeLeft = (1019 - currentTime)-40;
 currentPeriod = 2;
 $(".body").html("<p class='p'> There Are " + timeLeft + " Minutes Left In " +currentPeriod +"nd Hour");



 }
 }





 else if(currentTime>=1020 && currentTime<=1023){
 timeLeft = 1023 - currentTime;
 currentPeriod = "passing";
 $(".body").html("<p class='p'> There Are " + timeLeft + " Minutes Left In " +currentPeriod +" Period");
 }





 else if(currentTime>=1023 && currentTime<=1113){
 if(end3 == currentHours){
 timeLeft = 1113 - currentTime;
 currentPeriod = 3;
 $(".body").html("<p class='p'> There Are " + timeLeft + " Minutes Left In " +currentPeriod +"rd Hour");
 }else{
 timeLeft = (1113 - currentTime)-40;
 currentPeriod = 3;
 $(".body").html("<p class='p'> There Are " + timeLeft + " Minutes Left In " +currentPeriod +"rd Hour");
 }
 }




 else if(currentTime>=1113 && currentTime<=1117){
 timeLeft = 1117 - currentTime;
 currentPeriod = "passing";
 $(".body").html("<p class='p'> There Are " + timeLeft + " Minutes Left In " +currentPeriod +" Period");
 }




 else if(currentTime>=1117 && currentTime<=1207){
 if(end4 == currentHours){
 timeLeft = 1207 - currentTime;
 currentPeriod = 4;
 $(".body").html("<p class='p'> There Are " + timeLeft + " Minutes Left In " +currentPeriod +"th Hour");
 }else{
 timeLeft = (1207 - currentTime)-40;
 currentPeriod = 4;
 $(".body").html("<p class='p'> There Are " + timeLeft + " Minutes Left In " +currentPeriod +"th Hour");
 }
 }




 else if(currentTime>=1207 && currentTime<=1211){
 timeLeft = 1211 - currentTime;
 currentPeriod = "passing";
 $(".body").html("<p class='p'> There Are " + timeLeft + " Minutes Left In " +currentPeriod +" Period");
 }





 else if(currentTime>=1211 && currentTime<=1301){
 if(end5 == currentHours){
 timeLeft = 1301 - currentTime;
 currentPeriod = 5;
 $(".body").html("<p class='p'> There Are " + timeLeft + " Minutes Left In " +currentPeriod +"th Hour");
 }else{
 timeLeft = (1301 - currentTime)-40;
 currentPeriod = 5;
 $(".body").html("<p class='p'> There Are " + timeLeft + " Minutes Left In " +currentPeriod +"th Hour");
 }
 }





 else if(currentTime>=1301 && currentTime<=1305){
 timeLeft = 1305 - currentTime;
 currentPeriod = "passing";
 $(".body").html("<p class='p'> There Are " + timeLeft + " Minutes Left In " +currentPeriod +" Period");
 }





 else if(currentTime>=1305 && currentTime<=1355){
 if(end6 == currentHours){
 timeLeft = 1355 - currentTime;
 currentPeriod = 6;
 $(".body").html("<p class='p'> There Are " + timeLeft + " Minutes Left In " +currentPeriod +"th Hour");
 }else{
 timeLeft = (1355 - currentTime)-40;
 currentPeriod = 6;
 $(".body").html("<p class='p'> There Are " + timeLeft + " Minutes Left In " +currentPeriod +"th Hour");
 }
 }





 else if(currentTime>=1355&& currentTime<=1359){
 timeLeft = 1359 - currentTime;
 currentPeriod = "passing";
 $(".body").html("<p class='p'> There Are " + timeLeft + " Minutes Left In " +currentPeriod +" Period");
 }






 else if(currentTime>=1359 && currentTime<=1449){
 if(end7 == currentHours){
 timeLeft = 1449 - currentTime;
 currentPeriod = 7;
 $(".body").html("<p class='p'> There Are " + timeLeft + " Minutes Left In " +currentPeriod +"th Hour");
 }else{
 timeLeft = (1449 - currentTime)-40;
 currentPeriod = 7;
 $(".body").html("<p class='p'> There Are " + timeLeft + " Minutes Left In " +currentPeriod +"th Hour");
 }
 }





 else if(currentTime>=1449 && currentTime<=1454){
 timeLeft = 1454 - currentTime;
 currentPeriod = "Passing";
 $(".body").html("<p class='p'> There Are " + timeLeft + " Minutes Left In " +currentPeriod +" Period");
 }





 else if(currentTime>=1454 && currentTime<=1540){
 if(end8 == currentHours){
 timeLeft = 1540 - currentTime;
 currentPeriod = 8;
 $(".body").html("<p class='p'> There Are " + timeLeft + " Minutes Left In " +currentPeriod +"th Hour");
 }else{
 timeLeft = (1540 - currentTime)-40;
 currentPeriod = 8;
 $(".body").html("<p class='p'> There Are " + timeLeft + " Minutes Left In " +currentPeriod +"th Hour");
 }
 }


 if(timeLeft < 1){
 $(".body").html("<p class='p'> There Is Less Than 1 Minute Left In " +currentPeriod +" Period");
 }

 }

 setInterval(function(){

 var textHeight = $(".p").height()/2;
 var bodyHeight = $(window).height()/2;

 $(".p").css("margin-top",bodyHeight - textHeight);

 $(".style").css(".style","body{ background-color: #333; color: #fff; text-align: center; height: 100%; width: 100%; } p{ left: 0; font-size: 10em; color: #337ab7; text-shadow: 12px 12px #292929; }");
 run();
 checkvars();

 }, 1000);

 */

















var currentdate = new Date();
var d = new Date();
var weekday = new Array(7);
weekday[0]=  "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var day = weekday[d.getDay()];



var textHeight = $(".p").height()/2;
var bodyHeight = $(window).height()/2;

$(".p").css("margin-top",bodyHeight - textHeight);



var end0 = 8;
var end1 = 10;
var end2 = 11;
var end3 = 12;
var end4 = 13;
var end5 = 13;
var end6 = 15;
var end7 = 16;
var endStretch =  8;


var end0wed = 8;
var end1wed = 9;
var end2wed = 11;
var end3wed = 12;
var end4wed = 13;
var end5wed = 13;
var end6wed = 15;
var end7wed = 16;
var endStretchwed =  8;
var endStars = 10;
var endTT = 14;

//If stars is 1st, and TT is second, make this 0. If TT is first, make this 1
var rotation = 0;

var start0 =  735;
var start1 =  900;
var start2 =  1008;
var start3 =  1112;
var start4 =  1207;
var start5 =  1302;
var start6 =  1406;
var start7 =  1510;
var startStretch =  835;
var startStars = 1356;

var endtime0 = 840;
var endtime1 = 1000;
var endtime2 = 1104;
var endtime3 = 1207;
var endtime4 = 1302;
var endtime5 = 1358;
var endtime6 = 1502;
var endtime7 = 1605;
var endTimeStretch =  855;
var endTimeStars = 1420;

var start0wed =  735;
var start1wed =  900;
var start2wed =  1029;
var start3wed =  1122;
var start4wed =  1213;
var start5wed =  1303;
var start6wed =  1428;
var start7wed =  1521;
var startStretchwed =  835;
var startStarswed = 956;
var startTTwed = 1356;

var endtime0wed = 840;
var endtime1wed = 948;
var endtime2wed = 1114;
var endtime3wed = 1213;
var endtime4wed = 1303;
var endtime5wed = 1348;
var endtime6wed = 1513;
var endtime7wed = 1605;
var endTimeStretchwed =  855;
var endTimeStarswed = 1021;
var endTimeTTwed = 1420;


var currentHours;
var currentMinutes;
var timeLeft;
var currentTime;
var currentPeriod;
var minleft;


function checkvars(){
    var textHeight = $(".p").height()/2;
    var bodyHeight = $(window).height()/2;

    $(".p").css("margin-top",bodyHeight - textHeight);

    currentdate = new Date();
    currentHours = currentdate.getHours();
    currentMinutes = currentdate.getMinutes();
    timeLeft;
    currentTime = currentHours+""+currentMinutes;
    currentPeriod = 0;
    minleft = 0;

    if(currentMinutes == 0){
        currentMinutes = "00";
    }
    else if(currentMinutes == 1){
        currentMinutes = "01";
    }else if(currentMinutes == 2){
        currentMinutes = "02";
    }else if(currentMinutes == 3){
        currentMinutes = "03";
    }else if(currentMinutes == 4){
        currentMinutes = "04";
    }else if(currentMinutes == 5){
        currentMinutes = "05";
    }else if(currentMinutes == 6){
        currentMinutes = "06";
    }else if(currentMinutes == 7){
        currentMinutes = "07";
    }else if(currentMinutes == 8){
        currentMinutes = "08";
    }else if(currentMinutes == 9){
        currentMinutes = "09";
    }
}
checkvars();
run();
function run(){

    var textHeight = $(".p").height()/2;
    var bodyHeight = $(window).height()/2;

    $(".p").css("margin-top",bodyHeight - textHeight);

    currentTime = currentHours+""+currentMinutes;



    if(currentMinutes == 0){
        currentMinutes = "00";
    }
    else if(currentMinutes == 1){
        currentMinutes = "01";
    }else if(currentMinutes == 2){
        currentMinutes = "02";
    }else if(currentMinutes == 3){
        currentMinutes = "03";
    }else if(currentMinutes == 4){
        currentMinutes = "04";
    }else if(currentMinutes == 5){
        currentMinutes = "05";
    }else if(currentMinutes == 6){
        currentMinutes = "06";
    }else if(currentMinutes == 7){
        currentMinutes = "07";
    }else if(currentMinutes == 8){
        currentMinutes = "08";
    }else if(currentMinutes == 9){
        currentMinutes = "09";
    }









    if(currentTime>= 1541 || currentTime<=729){
        if(currentHours == 13){
            currentHours = 1;
        }else if(currentHours == 14){
            currentHours = 2;
        }else if(currentHours == 15){
            currentHours = 3;
        }else if(currentHours == 16){
            currentHours = 4;
        }else if(currentHours == 17){
            currentHours = 5;
        }else if(currentHours == 18){
            currentHours = 6;
        }else if(currentHours == 19){
            currentHours = 7;
        }else if(currentHours == 20){
            currentHours = 8;
        }else if(currentHours == 21){
            currentHours = 9;
        }else if(currentHours == 22){
            currentHours = 10;
        }else if(currentHours == 23){
            currentHours = 11;
        }else if(currentHours == 24){
            currentHours = 12;
        }
        $(".body").html("<p class='p'>The Current Time Is: <br>"+currentHours+":"+currentMinutes);
    }


    if(day != "Wednesday") {


        if (currentTime >= start0 && currentTime <= endtime0) {
            if (end0 == currentHours) {
                currentPeriod = 0;
                timeLeft = endtime0 - currentTime;
                $(".body").html("<p class='p'> There Are " + timeLeft + " Minutes Left In " + currentPeriod + " Period");
            } else {
                currentPeriod = 0;
                timeLeft = (endtime0 + 1 - currentTime) - 40;
                $(".body").html("<p class='p'> There Are " + timeLeft + " Minutes Left In " + currentPeriod + " Period");
            }


        }


        else if (currentTime >= endtime0 && currentTime <= start1 && day != "Friday") {
            if (start1 == currentHours) {
                timeLeft = start1 + 1 - currentTime;
                currentPeriod = "Stretch";
                $(".body").html("<p class='p'> There Are " + timeLeft + " Minutes Left In " + currentPeriod + " Period");
            } else {
                timeLeft = (start1 - currentTime) - 40;
                currentPeriod = "Stretch";
                $(".body").html("<p class='p'> There Are " + timeLeft + " Minutes Left In " + currentPeriod + " Period");
            }
        }


        else if (currentTime >= start1 && currentTime <= endtime1) {
            if (end1 == currentHours) {
                timeLeft = endtime1 + 1 - currentTime;
                currentPeriod = 1;
                $(".body").html("<p class='p'> There Are " + timeLeft + " Minutes Left In " + currentPeriod + "st Hour");
            } else {
                timeLeft = (endtime1 - currentTime) - 40;
                currentPeriod = 1;
                $(".body").html("<p class='p'> There Are " + timeLeft + " Minutes Left In " + currentPeriod + "st Hour");
            }
        }


        else if (currentTime >= endtime1 + 1 && currentTime <= start2 - 1) {
            timeLeft = start2 - currentTime;
            currentPeriod = "passing";
            $(".body").html("<p class='p'> There Are " + timeLeft + " Minutes Left In " + currentPeriod + " Period");
        }


        else if (currentTime >= start2 && currentTime <= endtime2) {
            if (end2 == currentHours) {
                timeLeft = endtime2 + 1 - currentTime;
                currentPeriod = 2;
                $(".body").html("<p class='p'> There Are " + timeLeft + " Minutes Left In " + currentPeriod + "nd Hour");
            } else {
                timeLeft = (endtime2 + 1 - currentTime) - 40;
                currentPeriod = 2;
                $(".body").html("<p class='p'> There Are " + timeLeft + " Minutes Left In " + currentPeriod + "nd Hour");


            }
        }


        else if (currentTime >= endtime2 + 1 && currentTime <= start3 - 1) {
            timeLeft = start3 - currentTime;
            currentPeriod = "passing";
            $(".body").html("<p class='p'> There Are " + timeLeft + " Minutes Left In " + currentPeriod + " Period");
        }


        else if (currentTime >= start3 && currentTime <= endtime3) {
            if (end3 == currentHours) {
                timeLeft = endtime3 + 1 - currentTime;
                currentPeriod = 3;
                $(".body").html("<p class='p'> There Are " + timeLeft + " Minutes Left In " + currentPeriod + "rd Hour");
            } else {
                timeLeft = (endtime3 + 1 - currentTime) - 40;
                currentPeriod = 3;
                $(".body").html("<p class='p'> There Are " + timeLeft + " Minutes Left In " + currentPeriod + "rd Hour");
            }
        }


        else if (currentTime >= endtime3 + 1 && currentTime <= start4 - 1) {
            timeLeft = start4 - currentTime;
            currentPeriod = "passing";
            $(".body").html("<p class='p'> There Are " + timeLeft + " Minutes Left In " + currentPeriod + " Period");
        }


        else if (currentTime >= start4 && currentTime <= endtime4) {
            if (end4 == currentHours) {
                timeLeft = endtime4 + 1 - currentTime;
                currentPeriod = 4;
                $(".body").html("<p class='p'> There Are " + timeLeft + " Minutes Left In " + currentPeriod + "th Hour");
            } else {
                timeLeft = (endtime4 + 1 - currentTime) - 40;
                currentPeriod = 4;
                $(".body").html("<p class='p'> There Are " + timeLeft + " Minutes Left In " + currentPeriod + "th Hour");
            }
        }


        else if (currentTime >= endtime4 && currentTime <= start5) {
            if (start5 == currentHours) {
                timeLeft = start5 - currentTime;
                currentPeriod = "Passing";
                $(".body").html("<p class='p'> There Are " + timeLeft + " Minutes Left In " + currentPeriod + " Period");
            } else {
                timeLeft = (start5 - currentTime) - 40;
                currentPeriod = "Passing";
                $(".body").html("<p class='p'> There Are " + timeLeft + " Minutes Left In " + currentPeriod + " Period");
            }
        }


        else if (currentTime >= start5 && currentTime <= endtime5) {
            if (end5 == currentHours) {
                timeLeft = endtime5 - currentTime;
                currentPeriod = 5;
                $(".body").html("<p class='p'> There Are " + timeLeft + " Minutes Left In " + currentPeriod + "th Hour");
            } else {
                timeLeft = (endtime5 - currentTime) - 40;
                currentPeriod = 5;
                $(".body").html("<p class='p'> There Are " + timeLeft + " Minutes Left In " + currentPeriod + "th Hour");
            }
        }


        else if (currentTime >= endtime5 && currentTime <= start6) {
            if (start6 == currentHours) {
                timeLeft = endtime6 - currentTime;
                currentPeriod = "passing";
                $(".body").html("<p class='p'> There Are " + timeLeft + " Minutes Left In " + currentPeriod + " Period");
            } else {
                timeLeft = (endtime6 - currentTime) - 40;
                currentPeriod = "passing";
                $(".body").html("<p class='p'> There Are " + timeLeft + " Minutes Left In " + currentPeriod + " Period");
            }
        }


        else if (currentTime >= start6 && currentTime <= endtime6) {
            if (end6 == currentHours) {
                timeLeft = endtime6 - currentTime;
                currentPeriod = 6;
                $(".body").html("<p class='p'> There Are " + timeLeft + " Minutes Left In " + currentPeriod + "th Hour");
            } else {
                timeLeft = (endtime6 - currentTime) - 40;
                currentPeriod = 6;
                $(".body").html("<p class='p'> There Are " + timeLeft + " Minutes Left In " + currentPeriod + "th Hour");
            }
        }


        else if (currentTime >= endtime6 + 1 && currentTime <= start7 - 1) {
            timeLeft = start7 - currentTime;
            currentPeriod = "passing";
            $(".body").html("<p class='p'> There Are " + timeLeft + " Minutes Left In " + currentPeriod + " Period");
        }


        else if (currentTime >= start7 && currentTime <= endtime7) {
            if (end7 == currentHours) {
                timeLeft = endtime7 - currentTime;
                currentPeriod = 7;
                $(".body").html("<p class='p'> There Are " + timeLeft + " Minutes Left In " + currentPeriod + "th Hour");
            } else {
                timeLeft = (endtime7 - currentTime) - 40;
                currentPeriod = 7;
                $(".body").html("<p class='p'> There Are " + timeLeft + " Minutes Left In " + currentPeriod + "th Hour");
            }
        }

        //**************************************************************************************************************************************



    }else{


        if (currentTime >= start0wed && currentTime <= endtime0wed) {
            if (end0wed == currentHours) {
                currentPeriod = 0;
                timeLeft = endtime0wed - currentTime;
                $(".body").html("<p class='p'> There Are " + timeLeft + " Minutes Left In " + currentPeriod + " Hour");
            } else {
                currentPeriod = 0;
                timeLeft = (endtime0wed + 1 - currentTime) - 40;
                $(".body").html("<p class='p'> There Are " + timeLeft + " Minutes Left In " + currentPeriod + " Hour");
            }


        }


        else if (currentTime >= endtime0wed && currentTime <= start1wed && day != "Friday") {
            if (start1wed == currentHours) {
                timeLeft = start1wed + 1 - currentTime;
                currentPeriod = "Stretch";
                $(".body").html("<p class='p'> There Are " + timeLeft + " Minutes Left In " + currentPeriod + " Period");
            } else {
                timeLeft = (start1wed - currentTime) - 40;
                currentPeriod = "Stretch";
                $(".body").html("<p class='p'> There Are " + timeLeft + " Minutes Left In " + currentPeriod + " Period");
            }
        }


        else if (currentTime >= start1wed && currentTime <= endtime1wed) {
            if (end1wed == currentHours) {
                timeLeft = endtime1wed + 1 - currentTime;
                currentPeriod = 1;
                $(".body").html("<p class='p'> There Are " + timeLeft + " Minutes Left In " + currentPeriod + "st Hour");
            } else {
                timeLeft = (endtime1wed - currentTime) - 40;
                currentPeriod = 1;
                $(".body").html("<p class='p'> There Are " + timeLeft + " Minutes Left In " + currentPeriod + "st Hour");
            }
        }


        else if (currentTime >= endtime1wed + 1 && currentTime <= startStarswed - 1) {
            timeLeft = start2wed - currentTime;
            currentPeriod = "passing";
            $(".body").html("<p class='p'> There Are " + timeLeft + " Minutes Left In " + currentPeriod + " Period");
        }


        else if (currentTime >= startStarswed && currentTime <= endTimeStarswed) {
            if (end2wed == currentHours) {
                timeLeft = endtime2wed + 1 - currentTime;
                if(rotation == 0){
                    currentPeriod = "Stars";
                }else{
                    currentPeriod = "Tiger Time";
                }
                $(".body").html("<p class='p'> There Are " + timeLeft + " Minutes Left In " + currentPeriod + "");
            } else {
                timeLeft = (endtime2wed + 1 - currentTime) - 40;
                if(rotation == 0){
                    currentPeriod = "Stars";
                }else{
                    currentPeriod = "Tiger Time";
                }
                $(".body").html("<p class='p'> There Are " + timeLeft + " Minutes Left In " + currentPeriod + "");


            }
        }
        else if (currentTime >= endTimeStars + 1 && currentTime <= start2wed - 1) {
            timeLeft = start2wed - currentTime;
            currentPeriod = "passing";
            $(".body").html("<p class='p'> There Are " + timeLeft + " Minutes Left In " + currentPeriod + " Period");
        }

        else if (currentTime >= start2wed && currentTime <= endtime2wed) {
            if (end2wed == currentHours) {
                timeLeft = endtime2wed + 1 - currentTime;
                currentPeriod = 2;
                $(".body").html("<p class='p'> There Are " + timeLeft + " Minutes Left In " + currentPeriod + "nd Hour");
            } else {
                timeLeft = (endtime2wed + 1 - currentTime) - 40;
                currentPeriod = 2;
                $(".body").html("<p class='p'> There Are " + timeLeft + " Minutes Left In " + currentPeriod + "nd Hour");


            }
        }


        else if (currentTime >= endtime2wed + 1 && currentTime <= start3wed - 1) {
            timeLeft = start3wed - currentTime;
            currentPeriod = "passing";
            $(".body").html("<p class='p'> There Are " + timeLeft + " Minutes Left In " + currentPeriod + " Period");
        }


        else if (currentTime >= start3wed && currentTime <= endtime3wed) {
            if (end3wed == currentHours) {
                timeLeft = endtime3wed + 1 - currentTime;
                currentPeriod = 3;
                $(".body").html("<p class='p'> There Are " + timeLeft + " Minutes Left In " + currentPeriod + "rd Hour");
            } else {
                timeLeft = (endtime3wed + 1 - currentTime) - 40;
                currentPeriod = 3;
                $(".body").html("<p class='p'> There Are " + timeLeft + " Minutes Left In " + currentPeriod + "rd Hour");
            }
        }


        else if (currentTime >= endtime3wed + 1 && currentTime <= start4wed - 1) {
            timeLeft = start4wed - currentTime;
            currentPeriod = "passing";
            $(".body").html("<p class='p'> There Are " + timeLeft + " Minutes Left In " + currentPeriod + " Period");
        }


        else if (currentTime >= start4wed && currentTime <= endtime4wed) {
            if (end4wed == currentHours) {
                timeLeft = endtime4wed + 1 - currentTime;
                currentPeriod = 4;
                $(".body").html("<p class='p'> There Are " + timeLeft + " Minutes Left In " + currentPeriod + "th Hour");
            } else {
                timeLeft = (endtime4wed + 1 - currentTime) - 40;
                currentPeriod = 4;
                $(".body").html("<p class='p'> There Are " + timeLeft + " Minutes Left In " + currentPeriod + "th Hour");
            }
        }


        else if (currentTime >= endtime4wed && currentTime <= start5wed) {
            if (start5wed == currentHours) {
                timeLeft = start5wed - currentTime;
                currentPeriod = "Passing";
                $(".body").html("<p class='p'> There Are " + timeLeft + " Minutes Left In " + currentPeriod + " Period");
            } else {
                timeLeft = (start5wed - currentTime) - 40;
                currentPeriod = "Passing";
                $(".body").html("<p class='p'> There Are " + timeLeft + " Minutes Left In " + currentPeriod + " Period");
            }
        }


        else if (currentTime >= start5wed && currentTime <= endtime5wed) {
            if (end5 == currentHours) {
                timeLeft = endtime5wed - currentTime;
                currentPeriod = 5;
                $(".body").html("<p class='p'> There Are " + timeLeft + " Minutes Left In " + currentPeriod + "th Hour");
            } else {
                timeLeft = (endtime5wed - currentTime) - 40;
                currentPeriod = 5;
                $(".body").html("<p class='p'> There Are " + timeLeft + " Minutes Left In " + currentPeriod + "th Hour");
            }
        }


        else if (currentTime >= endtime5wed && currentTime <= startTTwed) {
            if (startTTwed == currentHours) {
                timeLeft = endTimeTTwed - currentTime;
                if(rotation = 0){
                    currentPeriod = "passing";
                }else{
                    currentPeriod = "passing";
                }

                $(".body").html("<p class='p'> There Are " + timeLeft + " Minutes Left In " + currentPeriod + " Period");
            } else {
                timeLeft = (endTimeTTwed - currentTime) - 40;
                if(rotation = 0){
                    currentPeriod = "passing";
                }else{
                    currentPeriod = "passing";
                }

                $(".body").html("<p class='p'> There Are " + timeLeft + " Minutes Left In " + currentPeriod + " Period");
            }
        }


        else if (currentTime >= startTTwed && currentTime <= endTimeTTwed) {
            if (startTTwed == currentHours) {
                timeLeft = endTimeTTwed - currentTime;
                if(rotation = 0){
                    currentPeriod ="Tiger Time";
                }else{
                    currentPeriod ="Stars";
                }
                $(".body").html("<p class='p'> There Are " + timeLeft + " Minutes Left In " + currentPeriod + "");
            } else {
                timeLeft = (endTimeTTwed - currentTime) - 40;
                if(rotation = 0){
                    currentPeriod ="Tiger Time";
                }else{
                    currentPeriod ="Stars";
                }
                $(".body").html("<p class='p'> There Are " + timeLeft + " Minutes Left In " + currentPeriod + "");
            }
        }


        else if (currentTime >= endTimeTTwed && currentTime <= start6wed) {
            if (startTTwed == currentHours) {
                timeLeft = start6wed - currentTime;
                currentPeriod = "passing";
                $(".body").html("<p class='p'> There Are " + timeLeft + " Minutes Left In " + currentPeriod + " Period");
            } else {
                timeLeft = (start6wed - currentTime) - 40;
                currentPeriod ="passing";
                $(".body").html("<p class='p'> There Are " + timeLeft + " Minutes Left In " + currentPeriod + " Period");
            }
        }


        else if (currentTime >= start6wed && currentTime <= endtime6wed) {
            if (end6wed == currentHours) {
                timeLeft = endtime6wed - currentTime;
                currentPeriod = 6;
                $(".body").html("<p class='p'> There Are " + timeLeft + " Minutes Left In " + currentPeriod + "th Hour");
            } else {
                timeLeft = (endtime6wed - currentTime) - 40;
                currentPeriod = 6;
                $(".body").html("<p class='p'> There Are " + timeLeft + " Minutes Left In " + currentPeriod + "th Hour");
            }
        }


        else if (currentTime >= endtime6wed + 1 && currentTime <= start7wed - 1) {
            timeLeft = start7wed - currentTime;
            currentPeriod = "passing";
            $(".body").html("<p class='p'> There Are " + timeLeft + " Minutes Left In " + currentPeriod + " Period");
        }


        else if (currentTime >= start7wed && currentTime <= endtime7wed) {
            if (end7wed == currentHours) {
                timeLeft = endtime7wed - currentTime;
                currentPeriod = 7;
                $(".body").html("<p class='p'> There Are " + timeLeft + " Minutes Left In " + currentPeriod + "th Hour");
            } else {
                timeLeft = (endtime7wed - currentTime) - 40;
                currentPeriod = 7;
                $(".body").html("<p class='p'> There Are " + timeLeft + " Minutes Left In " + currentPeriod + "th Hour");
            }
        }




    }

    if(timeLeft < 1){
        $(".body").html("<p class='p'> There Is Less Than 1 Minute Left In " +currentPeriod +" Period");
    }


}

setInterval(function(){

    var textHeight = $(".p").height()/2;
    var bodyHeight = $(window).height()/2;

    $(".p").css("margin-top",bodyHeight - textHeight);

    $(".style").css(".style","body{ background-color: #333; color: #fff; text-align: center; height: 100%; width: 100%; } p{ left: 0; font-size: 10em; color: #337ab7; text-shadow: 12px 12px #292929; }");
    run();
    checkvars();

}, 1000);

