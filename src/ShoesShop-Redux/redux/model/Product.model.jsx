class Product {
  constructor(
    id,
    name,
    alias,
    price,
    description,
    shortDescription,
    quantity,
    image,
    quantityInCart = 0
  ) {
    this.id = id;
    this.name = name;
    this.alias = alias;
    this.price = price;
    this.description = description;
    this.shortDescription = shortDescription;
    this.quantity = quantity;
    this.image = image;
    this.quantityInCart = quantityInCart;
  }

  getItemTotalPrice = function () {
    return this.price * this.quantityInCart;
  };
}

export { Product };
