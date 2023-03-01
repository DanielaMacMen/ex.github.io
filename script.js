function addToCart(card) {
    card.classList.add("added");
    var btn = card.getElementsByClassName("buy-btn")[0];
    btn.innerHTML = "Agregado al carrito";
  }
  