const weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

const startDate = new Date("2019-01-14");
const endDate = new Date();

const result = [];
let currentDate = startDate;
let counter = 1;
const today = new Date();

while (currentDate < endDate) {
    const day = currentDate.getDay();
    if (day !== 0 && day !== 6) {
        let multiplier = 0;
        if (result.length > 0) {
            if ((result.length + 1) % 3 === 0) {
                multiplier = result[result.length - 1].multiplier - 1;
            } else {
                multiplier = result[result.length - 1].multiplier + 1;
            }
        }

        result.push({
            dayOfWeek: weekday[day],
            multiplier: multiplier
        });
        counter++;
    }
    currentDate.setDate(currentDate.getDate() + 1);
}

$(document).ready(function () {
    $("#date-header").html(weekday[today.getDay()] + " " + today.toLocaleDateString());
    const startingDl = 100;
    const startingBP = 60;
    const startingCH = 0;
    const increaseDL = increaseBP = 2.5;
    const increaseCH = 1.25;
    const multiplier = result[result.length - 1].multiplier;
    $("#dl-1").html(startingDl +  multiplier * increaseDL + "kg");
    $("#dl-2").html((startingDl +  multiplier * increaseDL)*0.9 + "kg");
    $("#bp-1").html(startingBP +  multiplier * increaseBP + "kg");
    $("#bp-2").html((startingBP +  multiplier * increaseBP)*0.9 + "kg");
    $("#ch-1").html(startingCH +  multiplier * increaseCH + "kg");
    $("#ch-2").html((startingCH +  multiplier * increaseCH)*0.9 + "kg");
});