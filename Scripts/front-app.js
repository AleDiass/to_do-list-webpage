let btnC = document.getElementById("create-new");
let tdds = document.querySelector(".todo-create");
let btnS = document.querySelector(".btn-add-remove");
let titlebox = document.getElementById("event-mess");
let AnimScrollDown;

btnC.addEventListener("click", () => {
  tdds.style.display = "flex";
  btnC.style.display = "none";
  btnS.style.display = "flex";

  
  // Scroll down anim

  document.documentElement.scrollTop += 200; 

})

const addbtn = document.getElementById("add-btn");
const lvbtn = document.getElementById("lv-btn");

//
addbtn.addEventListener("click", () => {
  // 
  

  let title = document.getElementById("title-in");
  let desc = document.getElementById("desc-in");

  if (title.value && desc.value && desc.value.length > 6) {
  

    RemoveButtonsAdd();





    let todo = { title: title.value, desc: desc.value };

    ///////////////////////////
    StartBackEnd(todo); ////////////////////
    //////////////////////////////

    // Reset Input values
    title.value = "";
    desc.value = "";


    ///
  } else {
    let Input = document.querySelector("input");
    let txtarea = document.querySelector("textarea");

    Input.style.border = "1px red solid";
    txtarea.style.border = "1px red solid";

    titlebox.innerText = "Invalid Text/Desc";
    titlebox.style.color = "red";

    setTimeout(() => {
      Input.style.border = "1px rgb(131, 124, 124)solid";
      txtarea.style.border = "1px rgb(131, 124, 124)solid";
      titlebox.innerText = "";
      titlebox.style.color = "black";
    }, 2000);
  }
});

lvbtn.addEventListener("click", () => {
  RemoveButtonsAdd()
});


function RemoveButtonsAdd(){
  tdds.style.display = "none";
  btnC.style.display = "flex";
  btnS.style.display = "none";
}