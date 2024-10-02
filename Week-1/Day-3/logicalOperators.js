let userRating = 7;
let userSpaceTime = 5;
let userContact = true;
let userEmail = null;

let badRating  = userRating < 8 && userSpaceTime >= 1
let vip = userRating === 10 || userSpaceTime > 3
let sendEmail = userContact === true && userEmail != null
