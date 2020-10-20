let newButton = document.createElement("button");
newButton.className = "remove";
newButton.append("Remove");
let bodyElement = document.querySelector("body");
bodyElement.append(newButton);

let newMain = document.createElement("main");
bodyElement.append(newMain);

let newImg = document.createElement("img");
newImg.className = "image";
newImg.src =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQk4W05H3zBIve_Rg6mOaYJiBubac6USqobM7bOH68fwak6Cq91Y8inrdEkwx8&usqp=CAc";
let mainElement = document.querySelector("main");
mainElement.append(newImg);

let removeButton = document.querySelector("#remove");
removeButton.addEventListener("click", function () {
  let mainElement = document.querySelector("main");
  mainElement.remove();
});
