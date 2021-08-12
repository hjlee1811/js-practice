/* if (조건식) {
  실행문1;
  실행문2;
  실행문3;  조건이 참일 경우 실행문이 실행, 거짓일 경우 실행문이 실행되지 않음

if (true) {
  console.log('Hello, if!');
}

if (false) {
  console.log('Hello, if!');
}


let condition = true;
if (condition) {
  console.log('Hello, if!');
}


if (0) {
  console.log('Hello, if!'); //0은 불값으로 false이므로 실행되지 않는다.
}

if (true) {
  console.log('Hello, if!');
  console.log('Hello, again!');
}


let value = '사과';
let condition = true;
if (condition) {
  value ='바나나'
}
console.log(value);


/* if-else condition
  if(조건식) {
    실행문; 조건식이 참일경우 실행
  } else {
    실행문; 조건식이 거짓일경우 실행
  }


let value = '사과';
let condition = false;
if (condition) {
  value = '바나나';
} else {
  value = '포도';
}
console.log(value);

/*
if (조건식) {
  실행문;
} else if (조건식) {
  실행문;
} else {
  실행문;
}

if (조건식) {
  실행문;
} else if (조건식) {
  실행문;
} else if (조건식) {
  실행문;
}


const score = 90;
if (score >= 90) {
  console.log('A+');
} else if (score < 90 && score >= 80) {
  console.log('A');
} else if (score < 80 && score >= 70) {
  console.log('B+');
} else if (score < 70 && score >= 60) {
  console.log('B');
} else {
  console.log('F');
}

if (score >= 90) {
  console.log('A+');
} else if (score >= 80) {
  console.log('A');
} else if (score >= 70) {
  console.log('B+');
} else if (score >= 60) {
  console.log('B');
} else {
  console.log('F');
}

let first = true;
let second = false;
if (first ) {
  console.log('첫 번째 조건 충족!');
  if (false) {
    console.log ('두 번째 조건도 충족!');
  } else {
    console.log('두 번째 조건은 불충족!');
  }
} else {
  console.log('첫 번쨰 조건 불충족!');
}

// 중첩 if문은 들여쓰기가 깊어질수록 코드의 가독성이 떨어짐.
// if-else if-else로 변환하는게 코드의 가독성을 높임.

if (first && second) {
  console.log ('첫 번쨰 조건 충족!');
  console.log ('두 번째 조건 충족!');
} else if (first) {
  console.log ('첫 번째 조건 충족!');
  console.log ('두 번째 조건 불충족!');
} else {
  console.log ('첫 번째 조건 불충족!');
}

//Switch

let value = 'A';
switch (value) {
  case 'A':
    console.log('A');
}

switch (value) {
  case 'A':
    console.log('A');
    console.log('B');
}


let value = 'B';
switch (value) {
  case 'A':
    console.log('A');
  case 'B':
    console.log('B');
  case 'C':
    console.log('C');
}   //switch문은 일치하는 case를 발견하면 일치여부와 상관없이 모든 case문을 실행함.

switch (value) {
  case 'A':
    console.log('A');
    break;
  case 'B':
    console.log('B');
    break;
  case 'C':
    console.log('C');
    break;
} case에 일치된 값만 실행하려면 break문을 사용


let value = 'F';
switch (value) {
  case 'A':
    console.log('A');
    break;
  case 'B':
    console.log('B');
    break;
  case 'C':
    console.log('C');
    break;
  default:
    console.log('아무것도 일치하지 않음');
  } //어떠한 값도 해당하지 않을때는 defalut를 사용하면 되고 defalut에는 break 문을 사용할 필요가 없음

  let fruit = '사과';
  if (fruit === '사과') {
    console.log('사과 입니다.!');
  } else if (fruit === '배') {
    console.log('배입니다!');
  } else if (fruit === '포도') {
    console.log('포도 입니다!');
  } else {
    console.log('뭔지 모르겠습니다.');
  }

switch (fruit) {
  default:
    console.log('뭔지 모르겠습니다.');
    break;
  case '사과':
    console.log('사과 입니다!');
    break;
  case '배':
    console.log('배 입니다!');
    break;
  case '포도':
    console.log('포도 입니다.');
    break;
}

//삼항 연산자 조건식 ? 참일 때 실행되는 식 : 거짓일 때 실행되는 식

let condition = true;
let value = condition ? '참' : '거짓';
console.log(value);

if (condition) {
  value = '참';
} else {
  value = '거짓';
}
console.log(value);


let condition1 = true;
let condition2 = false;
let value = condition1 ? (condition2 ? '둘 다 참' : 'condition1만 참') : 'condition1이 거짓';
console.log(value);  //가독성을 높이기 위해서 괄호연산자를 쓰면 수월하게 읽을수 있음

// 반복문 
while (true) {
  console.log('Hello, while!'); //조건식이 참이므로 무한히 실행됨.
}


let i = 0;
while (i < 100) {
  console.log('Hello, while!');
  i++;
}

//for문을 while문으로 바꾸어 보기
for (let i = 0; i < 100; i++){
  console.log('Hello, while!');
}


//1부터 100까지
let i = 0;
while ( i < 100 ) {
  console.log( i + 1);
  i++;
}

for(let i = 0; i < 100; i++) {
  console.log( i + 1);
}


let i = 0;
while (true) {
  if(i === 5) break; //break문에 의해서 조건식이 같을때 반복문을 빠져나간다.
  i++;
}
console.log(i);


let i = 0;
while (i < 10) {
  i++;
  if(i % 2 === 0) {
    continue; //조건식 충족되는 값만 건너뛴 값만 출력함.
  }
  console.log(i);
}


//중첩 반복문
for (let i = 0; i < 10; i++) {
  for (let j =0; j < 10; j++) {
    console.log (i, j);
  }
}

for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    if (i % 2 === 0 || j % 2 === 0) continue;
    console.log ( i, '*', j, '=' , i * j);
  }
}



const fruits = ['사과', '오렌지', '배', '딸기']; //배열의 자릿수 인덱스는 0부터 시작.
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);

const arrayOfArray = [[1,2,3], [4,5]];
console.log(arrayOfArray[0]);
const a = 10;
const b = 20;
const variable = [a, b, 30];
console.log(variable[1]);

const everything = ['사과', 1, undefined, true, '배열', null];
const duplicated = ['가', '가', '가', '가', '가'];
const empty = [null, undefined, false, '', NaN];
console.log(everything.length);
console.log(empty.length);

const findLastElement = ['a','b','c','d','e'];
console.log(findLastElement[findLastElement.length - 1]);

const target = ['a','b','c','d','e'];
target[5] = 'f'; //target 배열에 요소 추가
console.log(target);

const target = ['가', '나','다','라','마'];
target[target.length] = '바';
console.log(target);


const target = ['나', '다', '라','마', '바'];
target[0] = '가'; //target 요소에 추가하면 값이 추가 되는게 아니라 값이 변경 되어버림.
console.log(target);


const target = ['나', '다', '라','마', '바'];
target.unshift('가'); //unshift는 요소에 추가하면 다른값들이 하나씩 뒤로 밀려버림.
console.log(target);


const target = ['가','나', '다', '라','마'];
target.push('바');
console.log(target);


const target = ['가', '나', '다', '라', '마'];
target.pop(); //배열에서 요소 제거
console.log(target);

const target = ['가', '나', '다', '라', '마'];
target.shift(); //배열에서 첫번째 요소 제거
console.log(target);

const target = ['가', '나', '다', '라', '마'];
target.splice(1, 1); //시작 인덱스, 제거될 요소 개수
console.log(target);


const target = ['가', '나', '다', '라', '마'];
target.splice(1); //요소의 첫번째 값만 제외하고 모든배열 제거
console.log(target);


const target = ['가', '나', '다', '라', '마'];
target.splice(1,3,'타','파'); // 요소를 지워지고 그자리에 넣을수 있음, 세번째자리부터 바꿀값을 넣어주면됨.
console.log(target);


const target = ['가', '나', '다', '라', '마'];
const result = target.includes('다'); //include는 값이 포함되어 있는지 아닌지 검색
const result2 = target.includes('카');
console.log(result);
console.log(result2);

const target = ['라', '나', '다', '라', '다'];
const result = target.indexOf('다'); //앞에서 부터 값을 검색하고
const result2 = target.lastIndexOf('라'); //lastIndexOf는 값을 뒤에서 부터 검색
const result3 = target.indexOf('가');
console.log(result);
console.log(result2);
console.log(result3);


const target = ['가', '나', '다', '라', '마'];
let i = 0;
while (i < target.length) {
  console.log(target[i]);
  i++;
}

const target = ['가', '나', '다', '라', '마'];
for (let i = 0; i < target.length; i++) {
  console.log(target[i]);
}

const arr = ['가','라','다','라','마','라'];
let index = arr.indexOf('라');
while(index > -1) {
  arr.splice(index, 1);
  index = arr.indexOf('라');
}



//function 

function a() {
  console.log('Hello');
  console.log('Function');
}
a();


function a() {
  return 10;
}
const b = a();
console.log(b);

function a() {
  console.log('Hello');
  return;
  console.log('Return');
}
a();

function a() {
  if(false) {
    return;
  }
  console.log('실행 됩니다.');
}
a();


function a(parameter) {
  console.log(parameter);
}
a('argument');

function a(w, x, y, z) {
  console.log(w, x, y, z);
  console.log(arguments);
}
a('Hello', 'Parameter', 'Argument');

function add(x, y) {
  return x + y;
}
console.log(add(3, 5));
console.log(add(8, 7));

function multiply(x, y, z) {
  return x * y * z;
}
console.log(multiply(3,4,5));



function minus1(x, y) {
  const a = 100;
  return (x - y) * a;
}
console.log(minus1(5, 3)); //함수 내부에서만 사용하는 함수를 순수함수

const a = 100;
  function minus2(x, y) {
    return (x - y) * a;
  }
  console.log(minus2(5, 3)); //함수 외부변수를 접근했으면 순수함수라고 할수 없다.

//객체 형식
const 객체 = {
 속성이름: 속성값,
}


const zerocho = { // 객체에서 속성, 속성이름과 속성값으로 구분
  name: '조현영',
  year: 1994,
  month: 8,
  date: 12,
  gender: 'M',
};

console.log(zerocho.name);
console.log(zerocho['name']);
console.log(zerocho.date);
console.log(zerocho['date']);

// 객체 속성 수정하기
zerocho.gender = 'F';
console.log(zerocho.gender); //변수.속성 = 값; 속성값이 바뀜

//객체 속성 삭제하기
delete zerocho.gender;
console.log(zerocho.gender);

//메서드
const debug = {
  log: function(value) {
    console.log(value);
  },
};
debug.log('Hello, Method');

*/

const zerocho = {
  name: {
    first: '현영',
    last: '조',
  },
  gender: 'm',
};

console.log(zerocho.name['last']);

