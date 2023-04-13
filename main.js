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
});