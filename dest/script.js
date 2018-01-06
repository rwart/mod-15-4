{
  // ex 1
  var H = 'Hello';
  var W = 'World';
  var S = H + ' ' + W;
  console.log('ex 1: ' + S);
}

{
  // ex 2
  var multiply = function multiply(a) {
    var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return a * b;
  };
  console.log('ex 2: multiply(2, 5) = ' + multiply(2, 5));
  console.log('ex 2: multiply(5) = ' + multiply(5));
}

{
  //ex 3, 4
  var average = function average() {
    for (var _len = arguments.length, a = Array(_len), _key = 0; _key < _len; _key++) {
      a[_key] = arguments[_key];
    }

    var s = 0;
    a.forEach(function (a) {
      return s += a;
    });
    return s / a.length;
  };

  console.log('ex 3: average(1, 5) = ' + average(1, 5));
  console.log('ex 3: average(1, 3, 6, 6) = ' + average(1, 3, 6, 6));

  var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
  console.log('ex 4: (average of ' + grades + ') = ' + average.apply(undefined, grades));
}

{
  //ex 5
  var _ref = [1, 4, 'Iwona', false, 'Nowak'],
      firstname = _ref[2],
      lastname = _ref[4];

  console.log('ex 5: firstname = ' + firstname + ', lastname = ' + lastname);
}