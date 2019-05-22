// 加法函数
function add(x) {
  return function(y) {
      return x + y;
  };
}

// 乘法函数
function multi(x) {
  return function(y) {
      return x * y;
  };
}

//if函数测试
function ifTest(boolean) {
  if (boolean) {
      return "热热";
  } else {
      return "凉凉";
  }
}

// 反转字符串
function reverseStr (string) {
  return string.split("").reverse().join("");
}