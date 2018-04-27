console.log('start app');

setTimeout(() => {
  console.log('inside of callback');
}, 2000);

setTimeout(() => {
  console.log('inside of callback');
}, 0);
  
console.log('finish app');