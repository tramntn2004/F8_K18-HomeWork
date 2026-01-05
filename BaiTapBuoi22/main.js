// 1
function checkScore(score) {
  if (typeof score !== "number" || score < 0 || score > 10) {
    console.log("Giá trị không hợp lệ.")
    return
  }

  if (score >= 9) {
    console.log("Excellent")
  } else if (score >= 8) {
    console.log("Very good")
  } else if (score >= 6.5) {
    console.log("Good")
  } else if (score >= 5) {
    console.log("Average")
  } else {
    console.log("Weak")
  }
}

// 2
function countDays(month) {
  switch(month) {
    case 1:
    case 3:
    case 5: 
    case 7:
    case 8:
    case 10:
    case 12:
      console.log("This month has 31 days.")
      break
    case 4:
    case 6:
    case 9:
    case 11:
      console.log("This month has 30 days.")
      break
    case 2:
      console.log("This month has 28 or 29 days.")
      break
    default:
      console.log("Invalid month.")
  }
}

// 3
let n
const result = n % 2 === 0 ? "Even" : "Odd"

// 4
function ticketPrice(age) {
  const basePrice = 100
  if (age < 13 ) {
    return basePrice * 0.5
  }
  return basePrice
}

// 5
function bai5(c) {
  return c * 1.8 + 32
}

// 6
function bai6(k) {
  if (k < 0 ||  typeof k !== "number") {
    return "Invalid value."
  }
  let total = 0
  if (k <= 50) {
    total = k * 1678
  } else if (k <= 100) {
    total = 50 * 1678 + (k - 50) * 1734
  } else if (k <= 200) {
    total = 50 * 1678 + 50 * 1734 + (k - 100) * 2014
  } else {
    50 * 1678 + 50 * 1734 + 100 * 2014 + (k - 200) * 2536
  }
  return total
}