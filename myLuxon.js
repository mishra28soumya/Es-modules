const { DateTime } = require("luxon");

const now = DateTime.now();
// console.log(now)

//parsing ISO date strings
let dt = DateTime.fromISO("2017-05-15") 
// console.log(dt)

dt = DateTime.now().toString();
// console.log(dt);

// console.log(now.zoneName)

// console.log(now.daysInMonth)

// console.log(now.toLocaleString())

// console.log(now.toISO())

dt = DateTime.now();

dt1 = dt.minus({ days: 7 });
// console.log(dt1.toLocaleString())



console.log(DateTime.utc(2017, 5, 15));
console.log(DateTime.utc()); // now, in UTC time zone
console.log(DateTime.now().toUTC());
console.log(DateTime.utc().toLocal());

