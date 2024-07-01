let result_text = document.getElementById("result-text");
let resultAreaImg = document.querySelector(".main-img");
let chance_area = document.getElementById("chance-area");
let user_input = document.getElementById("user-input");
let play_button = document.getElementById("play-button");
let button_reset = document.getElementById("button-reset");

let computer_num = 0;
let chances = 5;
let user_inputList = [];
let gameover = false;

play_button.addEventListener("click", play);
button_reset.addEventListener("click", reset);
user_input.addEventListener("focus", function() { user_input.value = ""})

function pickRandomNumber() { // 랜덤 숫자 뽑는 함수
  computer_num = Math.floor(Math.random()*100) + 1
  console.log('정답 : ', computer_num)
}
function play() {   // 숫자 추측하는 main 함수
  const input = user_input.value
  console.log('input : ', input)
  console.log('computer_num : ', computer_num)
  if(input < 1 || input > 100) {
    result_text.textContent = "1부터 100 사이의 숫자를 입력하세요.";
    return;
  }else if(user_inputList.includes(input)){
    result_text.textContent = "이미 입력한 숫자입니다. 다른 숫자를 입력해주세요.";
    return;
  }
  
  user_inputList.push(input);
  chances--;
  chance_area.innerHTML = `남은 기회 : ${chances}번`;
  if(input>computer_num) {
    console.log('Down')
    result_text.textContent = "Down!";
    resultAreaImg.src = "https://media1.giphy.com/media/vOsRhrnqdyFnPp2OrG/200.webp?cid=ecf05e4774iadpetukt59trksn35yipi1oit8p4ynjhldpbp&ep=v1_gifs_search&rid=200.webp&ct=g"
  }else if(input<computer_num) {
    console.log('Up')
    result_text.textContent = "Up!";
    resultAreaImg.src = "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExYXI1aHU3MW40M2x4aDM3ZmJ4MzkxN3o1cGZueW16MHlxbGxraDBlciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/z835RsRqQHOlC4rsBr/giphy.gif"
  }else {
    console.log('Right')
    result_text.textContent = "That's right!";
    gameover = true;
  }
  
  if(chances==0) {
    gameover = true;
  }

  if(gameover==true) {
    play_button.disabled = true;
  }
}

function reset() {  // 리셋 함수
  pickRandomNumber();
  
  user_input.value = "";
  user_inputList = [];
  play_button.disabled = false;
  gameover = false;
  result_text.textContent = "죽기 싫다면 맞춰라";
  chances = 5;
  chance_area.innerHTML = `남은 기회 : ${chances}번`;
}

pickRandomNumber();