'use striсt';

//console.log(4/0);

// let persone = {
//     name: "John",
//     age: 25,
//     isMarried: false
// };
// console.log(persone["name"]);

// let arr = ['plum.png','orange.jpg','apple.bmp'];
// console.log(arr[0]);

// alert('hello word!');
// alert("Привет");

// let age = prompt('Сколько Вам лет?', 100);
// alert('Тебе ' + age + ' лет!');

// let answer = prompt("Есть ли Вам 18 лет?", "Да");
// console.log(answer);

// let secAge= confirm('Are you here?');
// alert(secAge);

// let x=5, y=8, z;
// z=x+y;// вернет 13
// alert(z + " - здесь оператор +, где z=х + у");
// z=x-y;
// alert(z + " - здесь оператор -, где z=х - у");
// z= -y;
// alert(z + " - здесь оператор унарный -, где z= - у");
// z=x*y;
// alert(z + " - здесь оператор *, где z=х * у");
// z=x/y;
// alert(z + " - здесь оператор /, где z=х / у");
// z=y%x;
// alert(z + "  - здесь оператор %, где z= у % х");
// z=x**y;
// alert(z + " - здесь оператор **, где z=х ** у");

// let s="моя" + " строка";
// alert(s + " - пример конкатенации, где код let s='моя' + 'строка'");

// alert('1'+ 2 + " - здесь строка со значением 1 + цифра 2 как результат цифра стала строкой 12");//12<br>
// alert(2 + '1' + " - здесь цифра 2 + строка со значением 1 как результат цифра стала строкой 21");
// let x = 10;
// x += 10;
// alert(x + ' - это х+=10, где х=10');
// x -=10;
// alert(x + ' - это х-=10, здесь уже х=20');
// x *=10;
// alert(x + ' - это х*=10, здесь уже х=10');
// x /=10;
// alert(x + ' - это х/=10, здесь уже х=100');
// x %=10;
// alert(x + ' - это х%=10, здесь х=10');

// let d = 5;
// let f = 2;
// d +=f;
// alert(d);
// d **=2;
// alert(d);

// let y=10;
// let b=10;
// alert(y++);
// alert(++b);

// x = 5; 
// s=x++*2; 
// alert(s+'\n'+x);

// let v=1;
// v++;
// alert(v++ + ' это результат v');

// let b=4;
// ++b;
// alert(++b + ' это результат b');

// alert((null == undefined) + '  это результат (null == undefined)'); // true
// alert((NaN == NaN) + '  это результат (NaN == NaN)'); // false
// alert((NaN != NaN) + '  это результат (NaN != NaN)'); // true
// alert((false == 0) + '  это результат (false == 0)'); // true
// alert((true == 1) + '  это результат (true == 1)'); // true
// alert(("1" == true) + '  это результат ("1" == true)'); // true
// alert(("" == false) + '  это результат ("" == false)'); // true
// alert((undefined == 0) + '  это результат (undefined == 0)'); // false
// alert((null == 0) + '  это результат (null == 0)'); // false

// alert((null === undefined) + '  это результат (null === undefined)'); // false
// alert((NaN === NaN) + '  это результат (NaN === NaN)'); // false
// alert((NaN !== NaN) + '  это результат (NaN !== NaN)'); // true
// alert((false === 0) + '  это результат (false === 0)'); // false
// alert((true === 1) + '  это результат (true === 1)'); // false
// alert(("1" === true) + '  это результат ("1" === true)'); // false
// alert(("" !== false) + '  это результат ("" === false)'); // true
// alert((undefined !== 0) + '  это результат (undefined !== 0)'); // true
// alert((null === 0) + '  это результат (null === 0)'); // false

//  let str1 = "Апельсин";
//  let str2 = "абрикос";
// alert( str1.charCodeAt(0) ); // 1040, код 'А'<br>
// alert( str2.charCodeAt(0) ); // 1072, код 'а'<br>
             
// alert( str1.charCodeAt(0) < str2.charCodeAt(0) ); // true (1040 < 1072)<br>
                             
// document.write( (str1 < str2) + '<br>' ); // true<br>

// alert( (str1 < str2) + ' это код сравнения переменных (str1"<"str2)' ); // true

// const userName = 'Боб';
// if (Boolean(userName)) {
//   alert(`Привет,  ${userName} !`);
// } else {
//   alert('Привет, гость!');
// }

// let name = 2>3 ? 'Marina' : 'Dasha';
// alert(name);

// let array = [1,2,3];
// alert(15 in array); // false
// alert(1 in array);

// let array1 = [];
// alert(array1 instanceof Array); // true
// alert({} instanceof Object); // true

// let c = (6 > 8) ^ (6 > 7);
// alert(c);

// let b = (6 > 5) || (7 > 4);
// alert(b);

let hello= 'Привет';
alert(hello);

let page = 'Это старница обучения JS';
 
let form = 'Весь указанный на странице код рабочий и его можно проверить раскомментировав его';
let forml= 'Но будь осторожен и внимателен :)';
 alert(page + " " + "\n" + forml);
 alert(form);