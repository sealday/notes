var readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('input a number(1-121): ', function(number) {

  var input = number * 1;
  var arr = [];

  function weight(input, index) {
    if (input == 0) return true;
    if (index < 0) return false;
    var pow = Math.pow(3, index);

    arr.push(pow);
    if (weight(input - pow, index - 1)) return true;
    arr.pop(pow);

    arr.push(-pow);
    if (weight(pow - input, index - 1)) return true;
    arr.pop();

    if (weight(input, index - 1)) return true;
    return false;
  }

  if (weight(input, 4))
    readline.write(arr.toString());
  else
    readline.write('you input number is out of range(1, 121)');
  readline.close();

});

