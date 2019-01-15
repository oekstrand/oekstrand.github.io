const weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

const startDate = new Date("2019-01-14");
const endDate = new Date("2019-12-31");
const result = [];
let currentDate = startDate;
let counter = 1;
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


console.dir(result);