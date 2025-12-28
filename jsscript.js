function openGame(title, desc, price, buyLink, image) {
  document.getElementById("mTitle").innerText = title;
  document.getElementById("mDesc").innerText = desc;
  document.getElementById("mPrice").innerText = price;
  document.getElementById("buyLink").href = buyLink;
  document.getElementById("mImage").src = image;
  document.getElementById("modal").style.display = "flex";
}

function closeGame() {
  document.getElementById("modal").style.display = "none";
}
