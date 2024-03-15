import { Foods } from "@/Data/Food";
import users from "@/Data/User";

const GetUserInfo = (phoneNumber) => {
  const userTarget = users.find((user) => user.phoneNumber == phoneNumber);
  let { orders, favorites, cart } = userTarget;

  const ordersFood = Foods.filter((food) => {
    return orders.includes(food.id);
  });
  userTarget.orders = ordersFood;

  const favoritesFood = Foods.filter((food) => {
    return favorites.includes(food.id);
  });
  userTarget.favorites = favoritesFood;

  const cartFood = Foods.filter((food) => {
    return cart.includes(food.id);
  });
  userTarget.cart = cartFood;

  return userTarget;
};

export default GetUserInfo;
