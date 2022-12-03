(function () {
    const secound = 1000;
    const minute = secound * 60;
    const hour = minute * 60;
    const day = hour * 24;

    let new_year = "Jan 1, 2023 00:00:00",
        countDown = new Date(new_year).getTime(),
        x = setInterval(function() {

            let now = new Date().getTime(),
                distance = countDown - now;


            document.getElementById("days").innerHTML = Math.floor(distance / (day));
            document.getElementById("hours").innerHTML = Math.floor((distance % (day)) / (hour));
            document.getElementById("minutes").innerHTML = Math.floor((distance % (hour)) / (minute));
            document.getElementById("seconds").innerHTML = Math.floor((distance % (minute)) / secound);
            

            // what to do after new year was over

            if(distance < 0) {
                let headline = document.getElementById("headline"),
                    countdown = document.getElementById("countdown"),
                    content = document.getElementById("content");
                
                headline.innerHTML = "Today is New Year";
                countdown.style.display = "none";
                content.style.display = "block";

                clearInterval(x);
            }

    }, 0)
}());