// 'use strict';

// {
//   document.querySelector("button").addEventListener("click", () => {
//     const targetNode = document.getElementById('target');
//     targetNode.textContent = "Changed!!!"
//     targetNode.title = "This is title";

//     // targetNode.className = "my-color my-border";

//     // if (targetNode.classList.contains("my-color") === true) {
//     //   targetNode.classList.remove("my-color");
//     // } else {
//     //   targetNode.classList.add("my-color");
//     targetNode.classList.toggle("my-color");
//     });
// }


// TODOリスト
// 'use strict';

// {
//   document.querySelector('button').addEventListener('click', () => {
//     const li = document.createElement("li");
//     const text = document.querySelector("input");
//     li.textContent = text.value;
//     document.querySelector("ul").appendChild(li);

//     text.value = "";
//     text.focus();
//   });
// }

'use strict';

{
  // document.querySelector("button").addEventListener("dblclick", () => {
  //   console.log("Double Clicked!")
  // });

  // document.addEventListener('', e => {
  //   // console.log('moved!');
  //   console.log(e.clientX, e.clientY);
  document.addEventListener('keydown', e => {
    console.log(e.key)
  });
}