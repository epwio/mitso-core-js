function getFizzBuzz(num) {
  if (num % 3 === 0 && num % 5 === 0) return 'FizzBuzz';
  if (num % 3 === 0) return 'Fizz';
  if (num % 5 === 0) return 'Buzz';
  return num;
}

function getFactorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i += 1) {
    result *= i;
  }
  return result;
}

function getSumBetweenNumbers(n1, n2) {
  let sum = 0;
  for (let i = n1; i <= n2; i += 1) {
    sum += i;
  }
  return sum;
}

function isTriangle(a, b, c) {
  return a + b > c && a + c > b && b + c > a;
}

function doRectanglesOverlap(r1, r2) {
  if (r1.left + r1.width <= r2.left) return false;
  if (r2.left + r2.width <= r1.left) return false;
  if (r1.top + r1.height <= r2.top) return false;
  if (r2.top + r2.height <= r1.top) return false;
  return true;
}

function isInsideCircle(circle, point) {
  const dx = point.x - circle.center.x;
  const dy = point.y - circle.center.y;
  return dx * dx + dy * dy < circle.radius * circle.radius;
}

function findFirstSingleChar(str) {
  for (let i = 0; i < str.length; i += 1) {
    let count = 0;
    for (let j = 0; j < str.length; j += 1) {
      if (str[i] === str[j]) count += 1;
    }
    if (count === 1) return str[i];
  }
  return null;
}

function getIntervalString(a, b, isStartIncluded, isEndIncluded) {
  const start = Math.min(a, b);
  const end = Math.max(a, b);
  const left = isStartIncluded ? '[' : '(';
  const right = isEndIncluded ? ']' : ')';
  return `${left}${start}, ${end}${right}`;
}

function reverseString(str) {
  return str.split('').reverse().join('');
}

function reverseInteger(num) {
  return parseInt(num.toString().split('').reverse().join(''), 10);
}

function isCreditCardNumber(ccn) {
  const digits = ccn.toString().split('').map((d) => parseInt(d, 10)).reverse();
  const sum = digits.reduce((acc, digit, i) => {
    let d = digit;
    if (i % 2 === 1) {
      d *= 2;
      if (d > 9) d -= 9;
    }
    return acc + d;
  }, 0);
  return sum % 10 === 0;
}

function getDigitalRoot(num) {
  let n = num;
  while (n > 9) {
    n = n
      .toString()
      .split('')
      .reduce((sum, d) => sum + parseInt(d, 10), 0);
  }
  return n;
}

function isBracketsBalanced(str) {
  const stack = [];
  const pairs = {
    ')': '(',
    ']': '[',
    '}': '{',
    '>': '<',
  };
  for (let i = 0; i < str.length; i += 1) {
    const c = str[i];
    if (['(', '[', '{', '<'].includes(c)) stack.push(c);
    else {
      if (!stack.length) return false;
      const last = stack.pop();
      if (pairs[c] !== last) return false;
    }
  }
  return stack.length === 0;
}

function toNaryString(num, n) {
  let result = '';
  let value = num;
  do {
    result = (value % n) + result;
    value = Math.floor(value / n);
  } while (value > 0);
  return result;
}

function getCommonDirectoryPath(paths) {
  if (!paths.length) return '';
  const parts = paths[0].split('/');
  const common = [];
  for (let i = 0; i < parts.length; i += 1) {
    const segment = parts[i];
    if (paths.every((p) => p.split('/')[i] === segment)) common.push(segment);
    else break;
  }
  return common.length ? `${common.join('/')}/` : '';
}

function getMatrixProduct(m1, m2) {
  const rows = m1.length;
  const cols = m2[0].length;
  const inner = m2.length;
  const result = Array.from({ length: rows }, () => Array(cols).fill(0));
  for (let i = 0; i < rows; i += 1) {
    for (let j = 0; j < cols; j += 1) {
      for (let k = 0; k < inner; k += 1) {
        result[i][j] += m1[i][k] * m2[k][j];
      }
    }
  }
  return result;
}

function evaluateTicTacToePosition(position) {
  const lines = [
    [[0, 0], [0, 1], [0, 2]],
    [[1, 0], [1, 1], [1, 2]],
    [[2, 0], [2, 1], [2, 2]],
    [[0, 0], [1, 0], [2, 0]],
    [[0, 1], [1, 1], [2, 1]],
    [[0, 2], [1, 2], [2, 2]],
    [[0, 0], [1, 1], [2, 2]],
    [[0, 2], [1, 1], [2, 0]],
  ];

  for (let l = 0; l < lines.length; l += 1) {
    const line = lines[l].map(([i, j]) => (position[i] ? position[i][j] : undefined));
    const [a, b, c] = line;
    if (a && a === b && a === c) return a;
  }
  return undefined;
}

module.exports = {
  getFizzBuzz,
  getFactorial,
  getSumBetweenNumbers,
  isTriangle,
  doRectanglesOverlap,
  isInsideCircle,
  findFirstSingleChar,
  getIntervalString,
  reverseString,
  reverseInteger,
  isCreditCardNumber,
  getDigitalRoot,
  isBracketsBalanced,
  toNaryString,
  getCommonDirectoryPath,
  getMatrixProduct,
  evaluateTicTacToePosition,
};
