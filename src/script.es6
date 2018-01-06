{ // ex 1
  const H = 'Hello';
  const W = 'World';
  const S = `${H} ${W}`;
  console.log(`ex 1: ${S}`);
}

{ // ex 2
  const multiply = (a, b = 1) => a * b;
  console.log(`ex 2: multiply(2, 5) = ${multiply(2, 5)}`);
  console.log(`ex 2: multiply(5) = ${multiply(5)}`);
}

{ //ex 3, 4
  const average = (...a) => {
    let s = 0;
    a.forEach(a => s += a);
    return s / a.length;
  };

  console.log(`ex 3: average(1, 5) = ${average(1, 5)}`);
  console.log(`ex 3: average(1, 3, 6, 6) = ${average(1, 3, 6, 6)}`);

  const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
  console.log(`ex 4: (average of ${grades}) = ${average(...grades)}`);
}

{ //ex 5
  let [,, firstname,, lastname] = [1, 4, 'Iwona', false, 'Nowak'];
  console.log(`ex 5: firstname = ${firstname}, lastname = ${lastname}`);
}
