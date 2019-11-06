/* js function의 활용 */
function toggler(self) {
  var shortening = document.querySelector(".java__test");
  if (self.value === "to night") {
    shortening.style.backgroundColor = "black";
    shortening.style.color = "white";
    self.value = "to day";

    /*while문 예제--> */
    var alist = document.querySelectorAll("a");
    var i = 0;
    while (i < alist.length) {
      /* console.log(alist[i]); 내용 출력용 code */
      alist[i].style.color = "powderblue";
      i = i + 1;
    }
    /* <--while문 예제*/
  } else {
    shortening.style.backgroundColor = "white";
    shortening.style.color = "black";
    self.value = "to night";

    /*while문 예제--> */
    var alist = document.querySelectorAll("a");
    var i = 0;
    while (i < alist.length) {
      alist[i].style.color = "blue";
      i = i + 1;
    }
    /* <--while문 예제*/
  }
}
/* object 부분 coding 안함. 
library 사용 안 함. (jQuery추천) 
다양한 API 추천: 마지막 강의 */
