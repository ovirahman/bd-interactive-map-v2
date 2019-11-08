
var tooltip = document.querySelector('.map-tooltip');
window.addEventListener("load", function() {
var svgObject = document.getElementById('svg-object').contentDocument;
var svg = svgObject.getElementById('Moulvibazar_District');
var svgSelector = svgObject.querySelector('.country');

var allButton = document.querySelectorAll("button")

var button = document.getElementById('button-syl');

// var infoText =document.getElementById("info-text");

// testing with button for changing color
// button.addEventListener("click", function(){
//     console.log("clicked on clickme");
//     // svgObject.querySelector(".st4").style.fill="red";
//     var allElements = svgObject.querySelectorAll('.st4');
//     console.log(allElements.length);
//     // for (var i=0; i<allElements.length; i++) {
//     //     allElements[i].setAttribute('style', 'fill:black;');
//     //
//     // }
//
//
//
// var i = 0;                     //  set your counter to 0
//
// function myLoop () {           //  create a loop function
//    setTimeout(function () {    //  call a 3s setTimeout when the loop is called
//       allElements[i].setAttribute('style', 'fill:red;');          //  your code here
//       i++;                     //  increment the counter
//       if (i < allElements.length) {            //  if the counter < 10, call the loop function
//          myLoop();             //  ..  again which will trigger another
//       }                        //  ..  setTimeout()
//   }, 500)
// }
//
// myLoop();
//
// });




function changeDivisonColor(id){

    var allElements = svgObject.querySelectorAll('.'+id);
    console.log(allElements.length);
    // for (var i=0; i<allElements.length; i++) {
    //     allElements[i].setAttribute('style', 'fill:black;');
    //
    // }



var i = 0;                     //  set your counter to 0

function myLoop () {           //  create a loop function
   setTimeout(function () {    //  call a 3s setTimeout when the loop is called
      allElements[i].setAttribute('style', 'fill:red;');          //  your code here
      i++;                     //  increment the counter
      if (i < allElements.length) {            //  if the counter < 10, call the loop function
         myLoop();             //  ..  again which will trigger another
      }                        //  ..  setTimeout()
  }, 40)
}

myLoop();

}



//clear color to green
function changeAllDistrictColor(){
    var allDistricts = svgSelector.querySelectorAll('[id$="District"]');

        for (var i=0; i<allDistricts.length; i++) {
            allDistricts[i].setAttribute('style', 'fill:green;');

        }
        console.log(allDistricts.length);
        console.log("done clearing colors");

}


// set info infoText

$infoText = $('.info-text');

function changeInfoText(id){
    var currentInfo = info[id];
    $infoText.html(currentInfo);

}

//clear info $infoText
function clearInfo() {
    $infoText.html(" ");
}







$(allButton).click(function(event) {

    console.log(event.target.id);

    if(event.target.id == "button-syl"){
        console.log("pressed on sylhet");
        clearInfo();
        changeAllDistrictColor();
        changeInfoText("Sylhet_Division");
        changeDivisonColor('st4');
    }

    else if(event.target.id == "button-dha"){
        console.log("pressed on dhaka");
        clearInfo();
        changeAllDistrictColor();
        changeInfoText("Dhaka_Division");
        changeDivisonColor('st3');
    }

    else if(event.target.id == "button-mym"){
        console.log("pressed on Mymansingh");
        clearInfo();
        changeAllDistrictColor();
        changeInfoText("Mymansingh_Division");
        changeDivisonColor('myman');
    }

    else if(event.target.id == "button-bar"){
        console.log("pressed on Barisal");
        clearInfo();
        changeAllDistrictColor();
        changeInfoText("Barisal_Division");
        changeDivisonColor('st6');
    }
    else if(event.target.id == "button-chi"){
        console.log("pressed on ctg");
        clearInfo();
        changeAllDistrictColor();
        changeInfoText("Chittagong_Division");
        changeDivisonColor('st7');
    }
    else if(event.target.id == "button-khu"){
        console.log("pressed on khulna");
        clearInfo();
        changeAllDistrictColor();
        changeInfoText("Khulna_Division");
        changeDivisonColor('st1');
    }

    else if(event.target.id == "button-raj"){
        console.log("pressed on rajshahi");
        clearInfo();
        changeAllDistrictColor();
        changeInfoText("Rajshahi_Division");
        changeDivisonColor('st2');
    }

    else if(event.target.id == "button-ran"){
        console.log("pressed on rangpur");
        clearInfo();
        changeAllDistrictColor();
        changeInfoText("Rangpur_Division");
        changeDivisonColor('st5');
    }

    else if(event.target.id == "button-clr"){
        console.log("pressed on clear");
        clearInfo();
        changeAllDistrictColor();
        changeInfoText("Developer_Info");
    }





  });






  $(svgSelector).click(function(event) {


      console.log(event.target.id +"cliiiiick");
      changeAllDistrictColor();
      svgObject.getElementById(event.target.id).setAttribute('style', 'fill:red;');
      $infoText.html(data[event.target.id]);



    });





$tooltip = $('.map-tooltip');

$(svgSelector).mouseover(function(event) {


    console.log(event.target.id);
    var currentLocation = data[event.target.id];
    $tooltip.html(event.target.id);
    if(currentLocation!==undefined){
        $tooltip.html(currentLocation);
            }
    else {
        $tooltip.html("tooltip");
         }


     // $tooltip.html(currentLocation);
     tooltip.style.display = 'block';

     tooltip.style.top = event.pageY-30;
     tooltip.style.left = event.pageX+60;


  });
    $(svgSelector).mouseleave(function(event) {
        tooltip.style.display = 'none';

    });




});
