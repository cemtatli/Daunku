activeMenu = document.querySelectorAll(".active-menu");
activeMenu.forEach((item) => {
  item.addEventListener("click", () => {
    activeMenu.forEach((item) => {
      item.classList.remove("active");
    });
    item.classList.add("active");
  });
});

// bag shopping

addItemButton = document.querySelector("#addItem");
bagValue = document.querySelector("#bag-shopping-number");
addItemButton.addEventListener("click", () => {
  bagValue.textContent = Number(bagValue.textContent) + 1;
});
