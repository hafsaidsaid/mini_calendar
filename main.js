//Get HTML elements
const monthCon = document.querySelector(".month");
console.log(monthCon);
const dayCon = document.querySelector(".day");
console.log(dayCon);

const dayNumCon = document.querySelector(".dayNum");
console.log(dayNumCon);

const yearCon = document.querySelector(".year");
console.log(yearCon);

window.addEventListener("load", () => {
    //Today's date
    let dateToday = new Date();

    //display the name of the month
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August",
        "September", "October", "November", "December"];
    monthCon.textContent = monthNames[dateToday.getMonth()];

    //display the name of the weekday
    let weekDays = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    dayCon.textContent = weekDays[dateToday.getDay()];

    //display the day of the month(number)
    dayNumCon.textContent = dateToday.getDate();

    //display the year
    yearCon.textContent = dateToday.getFullYear();
})
