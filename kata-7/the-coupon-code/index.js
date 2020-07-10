// Story
// Your online store likes to give out coupons for special occasions. Some customers try to cheat the system by entering invalid codes or using expired coupons.
//
//     Task
// Your mission:
//     Write a function called checkCoupon which verifies that a coupon code is valid and not expired.
//
//     A coupon is no longer valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR".
//
//     Examples:
// checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  ===  true
// checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  === false

// fn(str,str,str,str) => boolean
// compare code str
// compare date str
// return true if both are true
// return false if both are false


function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  return enteredCode === correctCode && new Date(currentDate) <= new Date(expirationDate);
}

module.exports = checkCoupon;