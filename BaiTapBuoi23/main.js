// 1
function checkTriangle(a, b, c) {
  if (a + b <= c || a + c <= b || b + c <= a) {
    return "Không phải tam giác"
  }
  if (a === b && b === c) {
    return "Tam giác đều"
  } else if (a === b || b === c || a === c) {
    return "Tam giác cân"
  } else if (a * a + b * b === c * c || b * b + c * c === a * a || a * a + c * c === b * b) {
    return "Tam giác vuông"
  } else {
    return "Tam giác thường"
  }
}

// 2
function isPerfectSquare(a) {
  if (a < 0 ) {
    return false
  } else {
    const sqrt = Math.sqrt(a)
    return Number.isInteger(sqrt)
  }
}



