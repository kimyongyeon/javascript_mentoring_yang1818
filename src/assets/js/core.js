// 변수들을 지역변수로 넣어서 만들어 보아라 !
function ToggleChange() {
  const button = document.querySelector(".toggle_btn");

  const toggle = (function () {
    const text = document.querySelector(".chang_text");
    const CLASSNAME = text.className;
    const actived = "active";

    return function () {
      if (CLASSNAME === actived) {
        CLASSNAME = "chang_text";
      } else {
        CLASSNAME = actived;
      }
    };
  })();

  button.addEventListener("click", toggle);
}
ToggleChange();

// 토클 처음 클릭하면 blue
// 두번 클릭하면 red
// 세번 클릭 blue
// 네번 클릭 red

// ES5에서 var를 사용하여 해결법 : 즉시 실행함수
// function timer() {
//   for(var i=0; i<10; i++) {
//     (function (loop) {
//       setTimeout(function() {
//         console.log(loop);
//       }, 1000)
//     })(i)
//   }
// }
// timer();