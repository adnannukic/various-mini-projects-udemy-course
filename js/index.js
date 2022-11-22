function isYearALeapYear(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                console.log(year + " is leap");
            }
            else {
                console.log(year + " is no leap");
            }
        }
        else {
            console.log(year + " is leap");
        }
    }
    else {
        console.log(year + " is no leap");
    }
}

isYearALeapYear(2000);