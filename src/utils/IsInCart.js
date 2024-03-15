export default function IsInCart(cart, foodID) {
  return cart.some((item) => item.id == foodID);
}
