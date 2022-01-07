var currentMousePos = {
    x: -1,
    y: -1
};
$(document).mousemove(function(event) {
    currentMousePos.x = event.pageX;
    currentMousePos.y = event.pageY;
});
var imageArray = new Array();
imageArray[0] = "imgs/exp/1.png";
imageArray[1] = "imgs/exp/2.png";
imageArray[2] = "imgs/exp/3.png";
imageArray[3] = "imgs/exp/4.png";
imageArray[4] = "imgs/exp/5.png";
imageArray[5] = "imgs/exp/6.png";
imageArray[6] = "imgs/exp/7.png";
imageArray[7] = "imgs/exp/8.png";
imageArray[8] = "imgs/exp/9.png";
imageArray[9] = "imgs/exp/10.png";
imageArray[10] = "imgs/exp/11.png";
imageArray[11] = "imgs/exp/12.png";
imageArray[12] = "imgs/exp/13.png";
imageArray[13] = "imgs/exp/14.png";
imageArray[14] = "imgs/exp/15.png";
imageArray[15] = "imgs/exp/16.png";
imageArray[16] = "imgs/exp/17.png";
var imges = new Array();
for (var i = 0; i < imageArray.length; i++) {
    imges[i] = new Image();
    imges[i].src = imageArray[i]
}

function onTransitionEnd(event) {
    event.target.remove();
}
/*
$(".project").on('mouseenter touchstart', function(e){ 

    $(this).find(".overlayimg").addClass("opacityclass");
});
$(".project").on('mouseleave', function(){
    $(this).find(".overlayimg").removeClass("opacityclass");
});
$('body').on('touchstart', function(e){ 
    $( ".project" ).each(function( index ) {
         if($(e.target).closest(this).length === 0) {
            $(this).find(".overlayimg").removeClass("opacityclass");
        }
    });
});
*/
$('body').on('mousemove', function(e){ 
        $(".project").each(function(index, target) {
            $(".project").each(function(index2, target2) {
                    if($(e.target).closest(target).length === 0 && $(e.target).closest(target2).length != 0) {
                            if ($(target).find(".overlayimg").hasClass("opacityclass")){
                                $(target).find(".overlayimg").removeClass("opacityclass");
                            }
                            if (!$(target2).find(".overlayimg").hasClass("opacityclass")){
                                $(target2).find(".overlayimg").addClass("opacityclass");
                            }
                    }
            });
        });
});

$("#artbut").click(function() {
    if (currentMousePos.y < ($("#newmask").position().top + $("#newmask").outerHeight(true))) {
        setTimeout(function() {
            $('html, body').animate({
                scrollTop: $("#chunk0").offset().top - 20
            }, 500);
        }, 500);
    } else {
        $('html, body').animate({
            scrollTop: $("#chunk0").offset().top - 20
        }, 500);
    }
});
$("#resbut").click(function() {
    if (currentMousePos.y < ($("#newmask").position().top + $("#newmask").outerHeight(true))) {
        setTimeout(function() {
            $('html, body').animate({
                scrollTop: $("#chunk1").offset().top - 20
            }, 500);
        }, 500);
    } else {
        $('html, body').animate({
            scrollTop: $("#chunk1").offset().top - 20
        }, 500);
    }
});
$("#gamesbut").click(function() {
    if (currentMousePos.y < ($("#newmask").position().top + $("#newmask").outerHeight(true))) {
        setTimeout(function() {
            window.open(
                'https://landermint.itch.io/',
                '_blank' // <- This is what makes it open in a new window.
            );
        }, 500);
    } else {
        window.open(
            'https://landermint.itch.io/',
            '_blank' // <- This is what makes it open in a new window.
        );
    }
});
$(".emailbut, #emailbuttondesktop").click(function() {
    if (currentMousePos.y < ($("#newmask").position().top + $("#newmask").outerHeight(true))) {
        setTimeout(function() {
            window.open('mailto:jack.lambermont@gmail.com');
        }, 500);
    } else {
        window.open('mailto:jack.lambermont@gmail.com');

    }
})
$(window).scroll(function() {
    hideDivs();
        $(".project").each(function(index, target) {

            $(".project").each(function(index2, target2) {
                if (index != index2) {
                    //if (($(window).scrollTop() >= $(target).offset().top + $(target).outerHeight() - window.innerHeight - 40)) {
                     if ($(window).scrollTop() + (window.innerHeight/2)+100 >= $(target).offset().top + ($(target).outerHeight()/2)) {

                        if ($(".project:eq(" + (index + 1) + ")").find(".overlayimg").hasClass("opacityclass") == false) {
                            $(target).find(".overlayimg").addClass("opacityclass");

                        }
                        if ($(target2).find(".overlayimg").hasClass("opacityclass") && index2 < index) {
                            $(target2).find(".overlayimg").removeClass("opacityclass");
                        }
                    }

                }

            });


                     if ($(window).scrollTop() + (window.innerHeight)-100 < $(target).offset().top + ($(target).outerHeight()/2)) {
                $(this).find(".overlayimg").removeClass("opacityclass");
            }
        });
    
});

$(document).ready(function() {

    hideDivs();
    c = document.getElementById("myCanvas");
    ctx = c.getContext("2d");
    ctx.canvas.width = window.innerWidth;
    if (window.innerWidth >= 900) {
        ctx.canvas.height = 750;
        $(".project").each(function(i) {
            $(this).css("height", "");
        });
    } else {
        ctx.canvas.height = window.innerHeight;

        $(".project").each(function(i) {
            $(this).css("height", "" + ($(this).find(".projectText").outerHeight()) + "px");
        });
    }

    adjustforscroll();
    requestAnimationFrame(drawBeams);

});

function hideDivs() {
    if ($(window).scrollTop() > 0) {
        $(".hideonscroll").addClass("hideboy");
        $(".flex-container2").addClass("newbg");
        if (window.innerWidth >= 900) {
            //$(".titlediv").addClass("hideboy");
            $(".subtitlediv").addClass("hideboy");
        }
    } else {
        $(".hideonscroll").removeClass("hideboy");
        $(".flex-container2").removeClass("newbg");
        $(".subtitlediv").removeClass("hideboy");
    }
}
$(window).bind("resize", function() {
    ctx.canvas.width = window.innerWidth;
    if (window.innerWidth >= 900) {
        ctx.canvas.height = 750;
        $(".project").each(function(i) {
            $(this).css("height", "");
        });
    } else {
        $(".project").each(function(i) {
            $(this).css("height", "" + ($(this).find(".projectText").outerHeight()) + "px");
        });
        ctx.canvas.height = window.innerHeight;
    }
    adjustforscroll();
    hideDivs();
});

function adjustforscroll() {
    if (/Mobi|Android/i.test(navigator.userAgent) && window.innerWidth < 900) {
        $("#canvascontainer").css("left", "10px");
        // $("#overlaycanvas").css("left","10px");
    }
}
var linearr = [];

$("body").click(function(e) {
    //alert( ""+leftEyex+" "+leftEyey+"" );
    /*
                                        ctx.clearRect(0, 0, c.width, c.height);
                        ctx.beginPath();
                        ctx.moveTo(leftEyex, leftEyey);
                        ctx.lineTo(e.pageX, e.pageY);
                        ctx.stroke();
         */
    if (currentMousePos.y < ($("#newmask").position().top + $("#newmask").outerHeight(true))) {
        $("#canvascontainer").effect("shake", {
            direction: "left",
            times: 2,
            distance: 5
        }, 200);
        setTimeout(function() {
            var offset = parseInt($('#canvascontainer').css('top'));
            var leftEyePos = $("#eyeposes").html().split(",");
            var rightEyePos = $("#eyeposes2").html().split(",");
            var leftEyex = Math.round(leftEyePos[0]);
            var leftEyey = Math.round(leftEyePos[1]) + offset;
            var rightEyex = Math.round(rightEyePos[0]);
            var rightEyey = Math.round(rightEyePos[1]) + offset;
            if (window.innerWidth >= 900) {
                //makeLine(50, leftEyex + 290, leftEyey, rightEyex + 290, rightEyey, currentMousePos.x, currentMousePos.y, 0);
                var newLine = {
                    timer: 50,
                    eyeposx: leftEyex + 290,
                    eyeposy: leftEyey,
                    eyeposx2: rightEyex + 290,
                    eyeposy2: rightEyey,
                    mousex: currentMousePos.x,
                    mousey: currentMousePos.y
                }
                linearr.push(newLine);
            } else {
                //makeLine(50, leftEyex + 10, leftEyey, rightEyex + 10, rightEyey, currentMousePos.x, currentMousePos.y, 0);
                var newLine = {
                    timer: 50,
                    eyeposx: leftEyex + 10,
                    eyeposy: leftEyey,
                    eyeposx2: rightEyex + 10,
                    eyeposy2: rightEyey,
                    mousex: currentMousePos.x,
                    mousey: currentMousePos.y
                }
                linearr.push(newLine);
            }
        }, 100);
    }
});
var previousTimestamp;

function drawBeams(timestamp) {
    if (previousTimestamp !== timestamp) {
        ctx.clearRect(0, 0, c.width, c.height);
        if (linearr.length > 0) {
            for (let i = 0; i < linearr.length; i++) {

                if (linearr[i].timer > 0) {
                    ctx.shadowBlur = 10;
                    ctx.shadowColor = '#FD  0100';
                    ctx.strokeStyle = 'rgba(255, 0, 0, ' + scale(linearr[i].timer, 0, 29, 0, 1) + ')';
                    ctx.lineWidth = 3.5;
                    ctx.lineCap = "round";
                    ctx.beginPath();
                    ctx.moveTo(linearr[i].eyeposx, linearr[i].eyeposy);
                    ctx.lineTo(linearr[i].mousex, linearr[i].mousey);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(linearr[i].eyeposx2, linearr[i].eyeposy2);
                    ctx.lineTo(linearr[i].mousex, linearr[i].mousey);
                    ctx.stroke();
                    linearr[i].timer -= 1;
                    ctx.shadowBlur = 0;
                    var mappednum = Math.floor(scale(linearr[i].timer, 49, 1, 0, 16));
                    ctx.drawImage(imges[mappednum], linearr[i].mousex - 60, linearr[i].mousey - 84, 120, 168);
                }
                if (linearr[i].timer == 0) {
                    linearr[i].timer = -1;
                    setTimeout(function() {
                        linearr.shift();
                    }, 500);
                }

            }
        }

    }

    previousTimestamp = timestamp;
    requestAnimationFrame(drawBeams);
}
/*
         function makeLine(timer, eyeposx, eyeposy, eyeposx2, eyeposy2, mousex, mousey, timestamp, previousTimestamp) {
             // ctx.clearRect(0, 0, c.width, c.height);

             if (timer > 0) {
                if (previousTimestamp !== timestamp){
                     ctx.shadowBlur = 10;
                     ctx.shadowColor = '#FD  0100';
                     ctx.strokeStyle = 'rgba(255, 0, 0, ' + scale(timer, 0, 29, 0, 1) + ')';
                     ctx.lineWidth = 3.5;
                     ctx.lineCap = "round";
                     ctx.beginPath();
                     ctx.moveTo(eyeposx, eyeposy);
                     ctx.lineTo(mousex, mousey);
                     ctx.stroke();
                     ctx.beginPath();
                     ctx.moveTo(eyeposx2, eyeposy2);
                     ctx.lineTo(mousex, mousey);
                     ctx.stroke();
                     timer -= 1;
                     ctx.shadowBlur = 0;
                     var mappednum = Math.floor(scale(timer, 49, 1, 0, 16));
                     ctx.drawImage(imges[mappednum], mousex - 60, mousey - 84, 120, 168);
                 }

                previousTimestamp = timestamp;
                requestAnimationFrame(function(timestamp) {
                    ctx.clearRect(0, 0, c.width, c.height);
                    makeLine(timer, eyeposx, eyeposy, eyeposx2, eyeposy2, mousex, mousey, timestamp, previousTimestamp);

                });
             }

         }
*/
function scale(number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}