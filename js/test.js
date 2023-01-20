function fib(arg) {
   if (arg === 0 || typeof arg !== 'number' || arg % 1 !== 0) {
      return '';
   }

   if(arg === 1) {
      return '0';
   }
   
   let next = 1;
   let prev = 0;
   let some;
   let result = `${prev} ${next}`;

   for (let i = 0; i < arg - 2; i++) {
      result += ' ' + (next + prev);
      some = next + prev;
      prev = next;
      next = some;

   }
   return result;
}

console.log(fib(8));