        let timer, currSeconds = 0;
  
        function resetTimer() {
            /* Hide the timer text */
            //document.querySelector(".timertext").style.display = 'none';
            /* Clear the previous interval */
            clearInterval(timer);
            /* Reset the seconds of the timer */
            currSeconds = 0;
            /* Set a new interval */
            timer = setInterval(startIdleTimer, 1000);
            if($('.screensaverDiv').hasClass('active')) {
                window.location.href = "pkr-activator-pipeline.html";
            }
            $('.screensaverDiv').addClass('d-none').removeClass('active');
        }
  
        // Define the events that
        // would reset the timer
        window.onload = resetTimer;
        window.onmousemove = resetTimer;
        window.onmousedown = resetTimer;
        window.ontouchstart = resetTimer;
        window.onclick = resetTimer;
        window.onkeypress = resetTimer;
  
        function startIdleTimer() {
            /* Increment the timer seconds */
            currSeconds++;
            /* Set the timer text
                to the new value */
            //document.querySelector(".secs").textContent = currSeconds;
            /* Display the timer text */
            //document.querySelector(".timertext").style.display = 'block';
            if(currSeconds == 120) {
              $('.screensaverDiv').removeClass('d-none').addClass('active');
            }
        }

        $( "body" ).dblclick(function() {
             document.fullScreenElement && null !== document.fullScreenElement || !document.mozFullScreen && !document.webkitIsFullScreen ? document.documentElement.requestFullScreen ? document.documentElement.requestFullScreen() : document.documentElement.mozRequestFullScreen ? document.documentElement.mozRequestFullScreen() : document.documentElement.webkitRequestFullScreen && document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT) : document.cancelFullScreen ? document.cancelFullScreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitCancelFullScreen && document.webkitCancelFullScreen()
        });