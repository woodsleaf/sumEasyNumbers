// Здесь явная ошибка, но и задание с неверными тестовыми данными, так как не суммируется 1,
// а это ведь тоже простое число. Чтобы было правильно нужно добавить 1 к результату.

function sumPrimes(num) {

  // формируем обьект с свойствами равными числовому периоду и типом массив, пример: {1: []...}
  let obj = {};
  for(let ip=1; ip <= num; ip++) {
    obj[ip] = [];
  }; //console.log(JSON.stringify(obj));

  //превращаем обьект в число и массив делимых без остатка
  // 1 надо бы убрать, поэтому начальное i=2, чтобы привести все подмассивы с простыми числами к общему виду
  //проблема с последним числом
  for (let key in obj) {
    for (let i = 2; i <= num; i++) {
      if (key%i === 0) { 
        //console.log(key + ' ' + obj[key]);
        if (obj[key].indexOf(i) === -1){
          obj[key].push(i);
  }}}}
  console.log(JSON.stringify(obj));
  
  // теперь остается пройтись по обьекту, и сложить все числа с длинной подмассива равному еденице.
  let sum = 0; //императивный reduce )))
  for (let key in obj) {
    if (obj[key].length === 1 ) {
      //console.log(sum + ' + ' + key);
      sum += obj[key][0];
    }
  }
  console.log(sum);
  return sum;
}

sumPrimes(10);   // 17 +1
sumPrimes(977);  // 73156 +1
