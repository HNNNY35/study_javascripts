// 1. 입력
// 문항
const questions_list = [
  {
    questions_uid: "Q1",
    questions: "해당 매장을 방문시 매장은 청결 하였습니까?",
    orders: 1,
  },
  {
    questions_uid: "Q4",
    questions: "직원이 제조한 음료에 대해 맛은 좋았습니까?",
    orders: 4,
  },
  {
    questions_uid: "Q2",
    questions: "주문시 직원은 고객님께 친절 하였습니까?",
    orders: 2,
  },
  {
    questions_uid: "Q5",
    questions: "해당 매장을 다음에도 재방문 하실 의향이 있으십니까?",
    orders: 5,
  },
  {
    questions_uid: "Q3",
    questions: "주문하신 음료가 나오기까지 시간이 적당하였습니까?",
    orders: 3,
  },
];
// 문항 배열 정렬하기
questions_list.sort((a, b) => a.orders - b.orders);

// 설문 답항
const example_list = [
  { example_uid: "E5", example: "매우 그렇다", orders: 5 },
  { example_uid: "E1", example: "전혀 아니다", orders: 1 },
  { example_uid: "E4", example: "그렇다", orders: 4 },
  { example_uid: "E2", example: "아니다", orders: 2 },
  { example_uid: "E3", example: "보통이다", orders: 3 },
];
// 답항 배열 정렬하기
example_list.sort((a, b) => a.orders - b.orders);

// 문항-답항
const answers = [
  { questions_uid: "Q1", example_uid: "E1" },
  { questions_uid: "Q1", example_uid: "E2" },
  { questions_uid: "Q1", example_uid: "E3" },

  { questions_uid: "Q2", example_uid: "E1" },
  { questions_uid: "Q2", example_uid: "E2" },
  { questions_uid: "Q2", example_uid: "E3" },
  { questions_uid: "Q2", example_uid: "E4" },

  { questions_uid: "Q3", example_uid: "E1" },
  { questions_uid: "Q3", example_uid: "E2" },

  { questions_uid: "Q4", example_uid: "E1" },
  { questions_uid: "Q4", example_uid: "E2" },
  { questions_uid: "Q4", example_uid: "E3" },
  { questions_uid: "Q4", example_uid: "E4" },
  { questions_uid: "Q4", example_uid: "E5" },

  { questions_uid: "Q5", example_uid: "E1" },
  { questions_uid: "Q5", example_uid: "E2" },
  { questions_uid: "Q5", example_uid: "E3" },
];

// 사용자 답안 – [1, 2, 2, 3, 3]
const fs = require("fs");
const filepath =
  process.platform === "linux"
    ? "/dev/stdin"
    : "docs/vanilla_js/project/input.txt";
let inputs = fs
  .readFileSync(filepath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let question_uid;
let user_answer;
let combine_arr = [];

// 함수들

// 문항 출력 : 인덱스에 맞는 문항을 출력하고 문항 uid 반환하는 함수
function print_question(i) {
  console.log(`${questions_list[i].orders}. ${questions_list[i].questions}`);
  question_uid = questions_list[i].questions_uid;
  return question_uid;
}

// q_uid와 일치하는 답항들을 출력하는 함수
function match_quid_auid(question_uid) {
  // q_uid와 일치하는 e_uid_list 배열에 담기
  let e_uid_list = answers.filter((e) => e.questions_uid === question_uid);
  // 문항 uid와 매칭되는 답항 uid answers에서 찾기
  for (let i = 0; i < e_uid_list.length; i++) {
    // 매칭되는 답항 uid 리스트 중에서 하나 뽑아서 e_uid에 담기 - E1
    let e_uid = e_uid_list[i].example_uid;
    // e_uid(E1)에 해당되는 example 출력하기
    if (example_list[i].example_uid === e_uid) {
      console.log(`(${example_list[i].orders}) ${example_list[i].example}`);
    }
  }
  console.log();
}

// 인덱스에 맞는 사용자 답안 출력하는 함수
function print_user_answer(i) {
  let user_answer = inputs[i];
  console.log(`답) ${user_answer}\n`);
  return user_answer;
}

// 사용자 답안 번호와 orders가 일치하는 exmaple을 찾아서 반환하는 함수
function match_user_answer(user_answer) {
  // user_answer와 orders가 일치하는 example
  for (let i = 0; i < example_list.length; i++) {
    if (example_list[i].orders === user_answer) {
      let user_example = example_list[i].example;
      return user_example;
    }
  }
}

// 문항, 답항, 사용자 답안 출력
for (let i = 0; i < questions_list.length; i++) {
  question_uid = print_question(i);
  match_quid_auid(question_uid);
  user_answer = print_user_answer(i);

  //  2. 처리
  //  : 문항, 설문 답항, 답변이 각각 분리되어있는 것을 매칭
  user_example = match_user_answer(user_answer);
  combine_arr[i] = {
    q_order: questions_list[i].orders,
    question: questions_list[i].questions,
    user_answer: user_answer,
    user_example: user_example,
  };
}

// 3. 출력
// : 설문 선택이 끝나면 실제로 사용자가 선택한 것을 출력
console.log(`--------------------- 설문자 선택 --------------------------`);
// 출력내용 : 문항orders, question, 사용자답안번호, example

combine_arr.forEach(function (combine, idx) {
  console.log(
    `${combine_arr[idx].q_order}. ${combine_arr[idx].question}\n (${combine_arr[idx].user_answer}) ${combine_arr[idx].user_example}\n`
  );
});

console.log(`이용해주셔서 감사합니다!`);
console.log();
