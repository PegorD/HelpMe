'use strict';
(function () {




    var text = "> Hello Alice, ^500 it's good to see that you have decided to help me.^500<br><br>"
    + "> I am trapped ^500 and I am in desperate need of your help.^500<br><br>"
    + "> Last night ^500 I managed to hack into The Matrix^500, and what I saw was amazing^500, but that is for another time.^500<br><br>"
    + "> When I came to leave The Matrix ^500  I was surprised to see that I couldn't.^500<br><br>"
    + "> After a quick debug ^500 I found out that a portion of my code which I had on a USB stick was missing.^500<br><br>"
    + "> So^500, I reviewed the feed from my webcam ^500 only to find out that He-Who-Must-Not-Be-Named had taken my USB stick^1000, to use as a Horcrux!!!^500<br><br>"
    + "> Fortunately^500, he left a clue behind^500, use it to find my USB stick so that I can escape The Matrix.^500<br><br>"
    + "> This is the clue: 66/2/222/222/2/222/44/33 22/777/444/3/4/33^500<br><br>"
    + "> Once you retrive my code^500, come back here to give me the code.^500<br><br>"
    + "> Neo cannot protect me from Agent Smith for much longer.^500<br><br>"
    + "> Run Alice. ^500  Show me the meaning of haste.^500<br><br>";
    $(document).ready(function () {
        $(function () {
            $("#text").typed({
                strings: [text],
                typeSpeed: 10,
                showCursor: false,
                cursorChar: "_",
                attr: null,
                contentType: 'html'
            });
        });
    });




})();

var code = "function ExitMatrix(person){\n"
    + "connect.toRealWorld();\n"
    + "connect.Extract(person);\n"
    + "connect.Close();\n"
    + "}"

var success = "> Thank you for your help Alice.<br><br>"
    + "> Now I am able to leave The Matrix.<br><br>"
    + "> While you were busy, I managed to prepare a gift for you.<br><br>"
    + "> In the USB stick you will find a ZIP file, use the password \"P@$$w0rd\" to open it and view your gift.<br><br>";

var fail = "> The code you have entered is wrong!<br><br>"
    + "> Hurry Alice, I do not have much time left.<br><br>";

function submitcode() {

    if (code == $('.textbox').val()) {
        $("#text").typed({
            strings: [success],
            typeSpeed: 10,
            showCursor: false,
            cursorChar: "_",
            attr: null,
            contentType: 'html'
        });
    } else {
        $("#text").typed({
            strings: [fail],
            typeSpeed: 10,
            showCursor: false,
            cursorChar: "_",
            attr: null,
            contentType: 'html'
        });
    }
}
