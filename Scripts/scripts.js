'use strict';
(function () {


    var text = "Hello Alice, it's good to see that you have decided to help me.<br><br>"
    + "I am trapped and I am in desperate need of your help.<br><br>"
    + "Last night I managed to hack into The Matrix, and what I saw was amazing, but that is for another time.<br><br>"
    + "When I came to leave The Matrix I was surprised to see that I couldn't.<br><br>"
    + "After a quick debug I found out that a portion of my code which I had on a USB stick was missing.<br><br>"
    + "So, I reviewed the feed from my webcam only to find out that He-Who-Must-Not-Be-Named had taken my USB stick,<br><br> to use as a Horcrux!!!<br><br>"
    + "Fortunately, he left a clue behind, use it to find my USB stick so that I can escape The Matrix.<br><br>"
    + "Insert Clue here.<br><br>"
    + "Neo cannot protect me from Agent Smith for much longer.<br><br>"
    + "Run Alice. Show me the meaning of haste.";
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

