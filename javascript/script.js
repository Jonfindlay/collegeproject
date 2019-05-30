// JavaScript Document Sean Mahoney 2019

												//SCRIPT STARTS
$(document).ready(function(){
  $(".greyButton").click(function(){			//GREY BUTTON SCRIPT STARTS
    $("#splashscreen").css("display", "none");
  });
  $(".greyButton").click(function(){
$("#loginpage").animate({
      width: 'toggle'
    });
$("#loginpage").css("display", "block");
  });											//GREY BUTTON SCRIPT ENDS
												//BLUE BUTTON SCRIPT STARTS
$(".blueButton").click(function(){
    $("#splashscreen").css("display", "none");
  });
  $(".blueButton").click(function(){
$("#sign-up").animate({
      width: 'toggle'
    });
$("#sign-up").css("display", "block");
  });											//BLUE BUTTON SCRIPT ENDS
												//BACK BUTTON 1 SCRIPT STARTS
	$("#back-button1").click(function(){
		$("#loginpage").css("display", "none");
$("#splashscreen").animate({
width: 'toggle'
	});
});												//BACK BUTTON 1 SCRIPT ENDS
												//GO BUTTON 1 SCRIPT STARTS
$("#go-button-one").click(function(){
    $("#loginpage").css("display", "none");
  });
	$("#go-button-one").click(function(){
		$("#chooseCar").animate({
      width: 'toggle'
    });
});												//GO BUTTON 1 SCRIPT ENDS												
												//ALTERNATE METHOD OF NAVIGATING TO SIGN UP PAGE-STARTS										
 $("#signupalternate").click(function(){
    $("#loginpage").css("display", "none");
  });
  $("#signupalternate").click(function(){
$("#sign-up").animate({
      width: 'toggle'
    });
  });											//ALTERNATE METHOD OF NAVIGATING TO SIGN UP PAGE-ENDS
												//BACK BUTTON 2 SCRIPT STARTS
	$("#backbutton2").click(function(){
		$("#chooseCar").css("display", "none");
$("#loginpage").animate({
width: 'toggle'
	});
});												//BACK BUTTON 2 SCRIPT ENDS
												//SIGN-UP-SUBMIT BUTTON CODE STARTS
	$("#sign-up-submit").click(function(){
		$("#sign-up").css("display", "none");
	});
$("#sign-up-submit").click(function(){
		$("#create-password").animate({
width: 'toggle'
	});
});												//SIGN-UP-SUBMIT BUTTON CODE ENDS										
												//BACK BUTTON 3 SCRIPT STARTS
	$("#back-button3").click(function(){
		$("#sign-up").css("display", "none");
$("#splashscreen").animate({
width: 'toggle'
	});
});												//BACK BUTTON 3 SCRIPT ENDS
												//ALTERNATE METHOD OF NAVIGATING TO SIGN UP PAGE-STARTS										
 $("#go-to-log-in").click(function(){
    $("#sign-up").css("display", "none");
  });
  $("#go-to-log-in").click(function(){
$("#loginpage").animate({
      width: 'toggle'
    });
  });											//ALTERNATE METHOD OF NAVIGATING TO SIGN UP PAGE-ENDS	
												//BACK BUTTON 4 CODE STARTS										
$("#back-button4").click(function(){
		$("#create-password").css("display", "none");
$("#sign-up").animate({
width: 'toggle'
		});
});
$("#back-button4").click(function(){
		$("#sign-up").css("display", "block");
	$("#splashscreen").css("display", "none");
});												//BACK BUTTON 4 CODE ENDS
												//PASSWORD-SUBMIT BUTTON CODE STARTS
$("#password-submit").click(function(){
		$("#create-password").css("display", "none");
	});
$("#password-submit").click(function(){
		$("#connect").animate({
width: 'toggle'
	});
});												//PASSWORD-SUBMIT BUTTON CODE ENDS
												//BACK BUTTON 5 SCRIPT STARTS
$("#back-button5").click(function(){
		$("#connect").css("display", "none");
$("#create-password").animate({
width: 'toggle'
	});
});												//BACK BUTTON 5 SCRIPT ENDS
												//CONNECT-GO BUTTON CODE STARTS
$("#connect-go").click(function(){
		$("#connect-go").css("display", "none");
	});
$("#connect-go").click(function(){
		$("#loadinggif").animate({
width: 'toggle'
	});
});												//CONNECT-GO BUTTON CODE ENDS
												//CONNECT-GO BUTTON AND ANIMATION CODE STARTS
$("#connect-go").click(function(){
		setTimeout( "$('#loadinggif').fadeOut();", 4000);
	});
$("#connect-go").click(function(){
		setTimeout( "$('#connect-submit').fadeIn();", 5000);
	});											//CONNECT-GO BUTTON AND ANIMATION CODE ENDS
												//CONNECT-SUBMIT BUTTON CODE STARTS
$("#connect-submit").click(function(){
		$("#connect").css("display", "none");
	});
$("#connect-submit").click(function(){
		$("#chooseCar2").animate({
width: 'toggle'
	});
});												//CONNECT-SUBMIT BUTTON CODE ENDS
												//SUMMON VEHICLE BUTTON CODE STARTS
$("#summon-butt").click(function(){
		$("#summon-butt").css("display", "none");
	$("#loadinggif2").css("display", "none");
	$("#car-parked").css("display", "none");
	$("#sign-up").css("display", "none");
	});
$("#summon-butt").click(function(){
		$("#summon-vehicle").animate({
width: 'toggle'
	});
});												//SUMMON VEHICLE BUTTON CODE ENDS
												//SUMMON VEHICLE BUTTON AND ANIMATION CODE STARTS
$("#summon-butt").click(function(){
		setTimeout( "$('#summon-vehicle').fadeOut();", 8000);
	});
$("#summon-butt").click(function(){
		setTimeout( "$('#arrived').fadeIn();", 8000);
	});											//SUMMON VEHICLE BUTTON AND ANIMATION CODE ENDS
												//BACK BUTTON 6 CODE STARTS										
$("#backbutton6").click(function(){
		$("#chooseCar2").css("display", "none");
$("#create-password").animate({
width: 'toggle'
		});
});												//BACK BUTTON 6 CODE ENDS
												//FORD-FOCUS OPTION BUTTON CODE STARTS
$("#ford-focus").click(function(){
		$("#chooseCar").css("display", "none");
	});
$("#ford-focus").click(function(){
		$("#parking-options").animate({
width: 'toggle'
	});
});												//FORD-FOCUS OPTION BUTTON CODE ENDS
												//FORD-MUSTANG OPTION BUTTON CODE STARTS
$("#mustang").click(function(){
		$("#chooseCar").css("display", "none");
	});
$("#mustang").click(function(){
		$("#parking-options").animate({
width: 'toggle'
	});
});												//FORD-MUSTANG OPTION BUTTON CODE ENDS
												//MODEL S OPTION BUTTON CODE STARTS
$("#model-s").click(function(){
		$("#chooseCar").css("display", "none");
	});
$("#model-s").click(function(){
		$("#parking-options").animate({
width: 'toggle'
	});
});												//MODEL S OPTION BUTTON CODE ENDS
//----------------------------------------------------------------------------------------------- SECOND SET OF CAR OPTIONS FOR SET UP --------------------------------------------------------------------------------------------------
												//FORD FOCUS 2 OPTION BUTTON CODE STARTS
$("#ford-focus2").click(function(){
		$("#chooseCar2").css("display", "none");
	});
$("#ford-focus2").click(function(){
		$("#parking-options").animate({
width: 'toggle'
	});
});												//FORD FOCUS 2 OPTION BUTTON CODE ENDS
												//MUSTANG 2 OPTION BUTTON CODE STARTS
$("#mustang2").click(function(){
		$("#chooseCar2").css("display", "none");
	});
$("#mustang2").click(function(){
		$("#parking-options").animate({
width: 'toggle'
	});
});												//MUSTANG 2 OPTION BUTTON CODE ENDS
												//FIESTA OPTION BUTTON CODE STARTS
$("#fiesta").click(function(){
		$("#chooseCar2").css("display", "none");
	});
$("#fiesta").click(function(){
		$("#parking-options").animate({
width: 'toggle'
	});
});												//FIESTA OPTION BUTTON CODE ENDS
												//MODEL S2 OPTION BUTTON CODE STARTS
$("#model-s2").click(function(){
		$("#chooseCar2").css("display", "none");
	});
$("#model-s2").click(function(){
		$("#parking-options").animate({
width: 'toggle'
	});
});												//MODEL S2 OPTION BUTTON CODE ENDS
												//MODEL 3 OPTION BUTTON CODE STARTS
$("#model-3").click(function(){
		$("#chooseCar2").css("display", "none");
	});
$("#model-3").click(function(){
		$("#parking-options").animate({
width: 'toggle'
	});
});												//MODEL 3 OPTION BUTTON CODE ENDS
												//MODEL X OPTION BUTTON CODE STARTS
$("#model-X").click(function(){
		$("#chooseCar2").css("display", "none");
	});
$("#model-X").click(function(){
		$("#parking-options").animate({
width: 'toggle'
	});
});												//MODEL X OPTION BUTTON CODE ENDS
//----------------------------------------------------------------------------------------------- SECOND SET OF CAR OPTIONS FOR SET UP ENDS ---------------------------------------------------------------------------------------------
												//BACK BUTTON 7 SCRIPT STARTS
	$("#backbutton7").click(function(){
		$("#parking-options").css("display", "none");
$("#chooseCar").animate({
width: 'toggle'
	});
});												//BACK BUTTON 7 SCRIPT ENDS
												//BACK BUTTON 8 SCRIPT STARTS
$("#backbutton8").click(function(){
		$("#quick-nearby-section").css("display", "none");
$("#parking-options").animate({
width: 'toggle'
	});
});												//BACK BUTTON 8 SCRIPT ENDS
												//QUICK-NEARBY BUTTON OPTION BUTTON CODE STARTS
$("#quick-nearby").click(function(){
		$("#parking-options").css("display", "none");
	});
$("#quick-nearby").click(function(){
		$("#loginpage").css("display", "none");
	});
$("#quick-nearby").click(function(){
		$("#quick-nearby-section").animate({
width: 'toggle'
	});
});												//QUICK-NEARBY BUTTON CODE ENDS
												//BACK BUTTON 9 SCRIPT STARTS
$("#backbutton9").click(function(){
		$("#cheap-nearby-section").css("display", "none");
$("#parking-options").animate({
width: 'toggle'
	});
});												//BACK BUTTON 9 SCRIPT ENDS
												//CHEAP-NEARBY BUTTON OPTION BUTTON CODE STARTS
$("#cheap-nearby").click(function(){
		$("#parking-options").css("display", "none");
	});
$("#cheap-nearby").click(function(){
		$("#loginpage").css("display", "none");
	});
$("#cheap-nearby").click(function(){
		$("#cheap-nearby-section").animate({
width: 'toggle'
	});
});												//CHEAP-NEARBY BUTTON CODE ENDS
												//BACK BUTTON 10 SCRIPT STARTS
$("#backbutton10").click(function(){
		$("#recent-section").css("display", "none");
$("#parking-options").animate({
width: 'toggle'
	});
});												//BACK BUTTON 10 SCRIPT ENDS
												//BACK BUTTON 11 SCRIPT STARTS
$("#backbutton11").click(function(){
		$("#custom-parking").css("display", "none");
$("#parking-options").animate({
width: 'toggle'
	});
});												//BACK BUTTON 11 SCRIPT ENDS
												//CUSTOM PARKING BUTTON STARTS
$("#custom-parking-button").click(function(){
		$("#parking-options").css("display", "none");
	$("#sign-up").css("display", "none");
$("#custom-parking").animate({
width: 'toggle'
	});
});												//CUSTOM PARKING BUTTON ENDS
												//RECENT BUTTON OPTION BUTTON CODE STARTS
$("#recent-parking").click(function(){
		$("#parking-options").css("display", "none");
	});
$("#recent-parking").click(function(){
		$("#loginpage").css("display", "none");
	});
$("#recent-parking").click(function(){
		$("#recent-section").animate({
width: 'toggle'
	});
});												//RECENT BUTTON CODE ENDS
												//CONFIRM BUTTON 1 CODE STARTS
$("#confirm-nearby").click(function(){
		$("#quick-nearby-section").css("display", "none");
	});
$("#confirm-nearby").click(function(){
		$("#sign-up").css("display", "none");
	});
$("#confirm-nearby").click(function(){
		$("#main-page").animate({
			width: 'toggle'
		});
	});
$("#confirm-nearby").click(function(){
		$("#connect-go2").css("display", "none");
	});
$("#confirm-nearby").click(function(){
		$("#loadinggif2").animate({
width: 'toggle'
	});
});
$("#confirm-nearby").click(function(){
		setTimeout( "$('#loadinggif2').fadeOut();", 30000);
	});
$("#confirm-nearby").click(function(){
		setTimeout( "$('#car-parked').fadeIn();", 30000);
	});											//CONFIRM BUTTON 1 CODE ENDS
												//CONFIRM BUTTON 2 CODE STARTS
$("#confirm-cheap").click(function(){
		$("#cheap-nearby-section").css("display", "none");
	});
$("#confirm-cheap").click(function(){
		$("#sign-up").css("display", "none");
	});
$("#confirm-cheap").click(function(){
		$("#main-page").animate({
			width: 'toggle'
		});
	});
$("#confirm-cheap").click(function(){
		$("#connect-go2").css("display", "none");
	});
$("#confirm-cheap").click(function(){
		$("#loadinggif2").animate({
width: 'toggle'
	});
});
$("#confirm-cheap").click(function(){
		setTimeout( "$('#loadinggif2').fadeOut();", 30000);
	});
$("#confirm-cheap").click(function(){
		setTimeout( "$('#car-parked').fadeIn();", 30000);
	});											//CONFIRM BUTTON 2 CODE ENDS
												//CONFIRM BUTTON 3 CODE STARTS
$("#confirm-recent").click(function(){
		$("#recent-section").css("display", "none");
	});
$("#confirm-recent").click(function(){
		$("#sign-up").css("display", "none");
	});
$("#confirm-recent").click(function(){
		$("#main-page").animate({
			width: 'toggle'
		});
	});
$("#confirm-recent").click(function(){
		$("#connect-go2").css("display", "none");
	});
$("#confirm-recent").click(function(){
		$("#loadinggif2").animate({
width: 'toggle'
	});
});
$("#confirm-recent").click(function(){
		setTimeout( "$('#loadinggif2').fadeOut();", 30000);
	});
$("#confirm-recent").click(function(){
		setTimeout( "$('#car-parked').fadeIn();", 30000);
	});											//CONFIRM BUTTON 3 CODE ENDS
$("#main-menu").click(function(){				//MAIN MENU CODE STARTS
		$("#navm").animate({width:'toggle'},250);
	});
$('#close-icon').click(function(){
		$("#navm").animate({width:'toggle'},250);
	});											//MAIN MENU CODE ENDS
$("#main-menu2").click(function(){				//MAIN MENU2 CODE STARTS
		$("#navm2").animate({width:'toggle'},250);
	});
$('#close-icon2').click(function(){
		$("#navm2").animate({width:'toggle'},250);
	});											//MAIN MENU2 CODE ENDS
												//LATEST NEWS BUTTON SCRIPT STARTS
$("#latest-news-button").click(function(){
		$("#main-page").css("display", "none");
$("#RSS-FEED").animate({
width: 'toggle'
	});
$("#navm").animate({
width: 'toggle'
	});
});												//LATEST NEWS BUTTON SCRIPT ENDS
												//LATEST NEWS2 BUTTON SCRIPT STARTS
$('#latest-news-button2').click(function(){
		$("#navm2").animate({width:'toggle'},250);
	});											//LATEST NEWS2 BUTTON SCRIPT ENDS
												//DASHBOARD BUTTON SCRIPT STARTS
$('#dashboard-button').click(function(){
		$("#navm").animate({width:'toggle'},250);
	});											//DASHBOARD BUTTON SCRIPT ENDS
												//DASHBOARD BUTTON 2 SCRIPT STARTS
$("#dashboard-button2").click(function(){
		$("#RSS-FEED").css("display", "none");
$("#main-page").animate({
width: 'toggle'
	});
$("#navm2").animate({
width: 'toggle'
	});
});												//DASHBOARD BUTTON 2 SCRIPT ENDS
												//CONFIRM CUSTOM BUTTON STARTS
$("#confirm-custom").click(function(){
		$("#custom-parking").css("display", "none");
	});
$("#confirm-custom").click(function(){
		$("#sign-up").css("display", "none");
	});
$("#confirm-custom").click(function(){
		$("#main-page").animate({
			width: 'toggle'
		});
	});
$("#confirm-custom").click(function(){
		$("#connect-go2").css("display", "none");
	});
$("#confirm-custom").click(function(){
		$("#loadinggif2").animate({
width: 'toggle'
	});
});
$("#confirm-custom").click(function(){
		setTimeout( "$('#loadinggif2').fadeOut();", 30000);
	});
$("#confirm-custom").click(function(){
		setTimeout( "$('#car-parked').fadeIn();", 30000);
	});											//CONFIRM CUSTOM BUTTON ENDS
												//CONFIRM CUSTOM 1 BUTTON STARTS
$("#confirm-custom1").click(function(){
		$("#quick-nearby-section").css("display", "none");
	$("#loginpage").css("display", "none");
$("#custom-parking").animate({
width: 'toggle'
	});
});												//CONFIRM CUSTOM 1 BUTTON ENDS
												//CONFIRM CUSTOM 2 BUTTON STARTS
$("#confirm-custom2").click(function(){
		$("#cheap-nearby-section").css("display", "none");
	$("#loginpage").css("display", "none");
$("#custom-parking").animate({
width: 'toggle'
	});
});												//CONFIRM CUSTOM 2 BUTTON ENDS
												//CONFIRM CUSTOM 3 BUTTON STARTS
$("#confirm-custom3").click(function(){
		$("#recent-section").css("display", "none");
	$("#loginpage").css("display", "none");
$("#custom-parking").animate({
width: 'toggle'
	});
});												//CONFIRM CUSTOM 3 BUTTON ENDS
												//ALERTS START
$("#sound-horn").click(function(){
	alert('Sounding Horn  BEEP! BEEP!');
	$("#loginpage").css("display", "none");
});	
$("#flash-headlights").click(function(){
	alert('Flashing Headlights!');
	$("#loginpage").css("display", "none");
});												//ALERTS END
});												//SCRIPT ENDS


$(document).ready( function () {				//CALCULATOR SCRIPT STARTS


        // VARIABLES
    // ----------------------------------------------------------

    var amount, percent, result;
    var calculator = $('.calculator');
    var calculatorBill = calculator.find('.calculator__bill');
    var calculatorTip = calculator.find('.calculator__tip');
    var calculatorResult = calculator.find('.calculator__result');
    var tipAmount = calculator.find('.tip-amount');


    // INIT BILL
    // ----------------------------------------------------------

    $(window).on('DOMContentLoaded', function () {
        tipAmount.text( calculatorTip.val()  );
        amount = calculatorBill.val() * 1;
        percent = calculatorTip.val() * 1;
        result = amount *percent ;
        calculatorResult.text( result.toFixed(2)  );
    });


    // RANGE FUNCTION
    // ----------------------------------------------------------

    calculatorTip.on('change', function () {

        if ( calculatorBill.val() === '' || isNaN( calculatorBill.val() ) ) {
            alert('Enter bill amount, please!')
        } else {
            amount = calculatorBill.val() * 1;
        }

        tipAmount.text( calculatorTip.val() +' HOURS' );
        percent = calculatorTip.val() * 1;
        result = amount * percent;
        calculatorResult.text( '£' + result.toFixed(2)  );
    });
   });											//CALCULATOR SCRIPT ENDS
												//SCRIPT ENDS