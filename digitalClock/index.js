window.onload = function () {
    function clock() {
        var months = [
            'Jan',
            "Feb",
            'March',
            'April',
            'May',
            'June',
            'July',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec'
        ]

        setInterval(function () {
            var currdate = new Date("Wed Mar 25 2020 12:13:14 GMT +0530");
            var h1 = document.getElementById('time');
            var greet = document.getElementById('greeting');
            var merdian = "AM";
            var message = "Good Morning";

            var date = document.getElementById('date');

            if (currdate.getHours() > 12) {
                var hours = currdate.getHours() % 12;

            }
         

            else {
                var hours = currdate.getHours();
            }

            if(currdate.getHours()>=12)
            {
               
                    merdian = "PM";
            }

          
            if (hours >= 0 && hours <= 4 && merdian == 'PM') {
                message = "Good Afternoon";
            }
            else if (hours > 4 && hours <= 12 && merdian == "PM") {
                message = "Good Evening";
            }
            hours = cnv(hours);

            var sec = cnv(currdate.getSeconds())
            var day = cnv(currdate.getDate());
            var min = cnv(currdate.getMinutes());
            greet.innerHTML = message;
            h1.innerHTML = hours + " : " + min + " : " + sec + " " + merdian;
            date.innerHTML = day + " " + months[currdate.getMonth()] + " " + currdate.getFullYear();
        }, 1000)
    }

    clock();


    function cnv(n) {
        if (n < 10) {
            n = n.toString();
            n = '0' + n;
        }
        return n;
    }
}