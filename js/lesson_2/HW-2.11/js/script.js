let x = 0;
x = x || 'default';
console.log(x);

x = null;
x = x || 'default';
console.log(x);

x = undefined;
x = x || 'default';
console.log(x);

x = '';
x = x || 'default';
console.log(x);

x = 'hello';
x = x || 'default';
console.log(x);
