document.addEventListener("DOMContentLoaded", () => {
  function MakeButton({$target, text, onClick}) {
    const $btn = document.createElement("button");
    
    $target.appendChild($btn);
    
    this.render = () => {
      $btn.textContent = text;
      
      if(onClick) {
        $btn.addEventListener("click", () => {
          onClick();
        })
      }
    }
    this.render();
  };

  new MakeButton({
    $target: document.querySelector("body"),
    text: "눌러줘 친구야",
    onClick : () => {
      console.log("눌러줘 친구야")
    }
  });

  new MakeButton({
    $target: document.querySelector("body"),
    text: "눌러",
    onClick : () => {
      console.log("눌러")
    }
  });

  new MakeButton({
    $target: document.querySelector("body"),
    text: "누르지마",
    onClick : () => {
      console.log("누르지마")
    }
  });

  const body = document.querySelector("body");
  const button1 = document.createElement("button");
  const button2 = document.createElement("button");
  const button3 = document.createElement("button");

  button1.textContent = "Button1";
  button1.className = "button1";

  button2.textContent = "Button2";
  button2.className = "button2";

  button3.textContent = "Button3";
  button3.className = "button3";

  body.appendChild(button1);
  body.appendChild(button2);
  body.appendChild(button3);

  document.querySelector("button").addEventListener("click", (e) => {
    e.target.style.textDecoration = "line-through";
  });
});
