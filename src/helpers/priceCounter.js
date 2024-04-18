export default function priceCounter(cart, discount) {
  return cart.reduce((total, item) => {
    let price = item.amount * item.price;

    if (discount) {
      if (discount === "DSLR" && item.categories === "dslr") {
        price *= 0.65;
      } else if (
        discount === "MIRRORLESS" &&
        item.categories === "mirrorless"
      ) {
        price *= 0.75;
      } else if (discount === "FIRST ORDER") {
        price *= 0.8;
      }
    }

    return total + price;
  }, 0);
}
