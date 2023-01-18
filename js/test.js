function sayHello(userName) {
   return `Привет, ${userName}`;
}

function returnNeighboringNumbers(number) {
   return [number - 1, number, number + 1];
}

console.log(returnNeighboringNumbers(5));

function getMathResult(base, nop) {
   if (typeof nop !== 'number' || nop <= 0) {
      return base;
   }
   let result = base;
   for (let i = 2; i <= nop; i++) {
      result += `---${base * i}`;
   }

   return result;
}
