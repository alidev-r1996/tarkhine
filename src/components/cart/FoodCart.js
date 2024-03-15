import { useDispatch, useSelector } from "react-redux";
import FoodUi from "./FoodUI";
import { DecrementFood, IncrementFood } from "@/redux/features/cart/cartSlice";

const FoodCart = () => {
  const ShoppingCartInfo = useSelector((state) => state.cart) || foods;
  const dispatch = useDispatch();
  return (
    <>
      {ShoppingCartInfo.cart.map((food) => {
        return <FoodUi key={food.id} food={food} />;
      })}
      {ShoppingCartInfo.cart.map((food) => {
        return (
          <div
            key={food.id}
            className="flex p-2 md:hidden items-center justify-between even:bg-gray-200 odd:bg-gray-50"
          >
            <div className="flex flex-col gap-1">
              <p className="text-xs font-bold ">{food.title}</p>
              <p className="text-[10px] text-gray-500 ">{food.price}تومان</p>
            </div>
            <div className="flex items-center bg-emerald-100 rounded overflow-hidden">
              <button onClick={()=>dispatch(IncrementFood(food.id))} className="px-2  text-emerald-700 hover:bg-emerald-700 hover:text-white">
                +
              </button>
              <button className="px-2 text-sm text-emerald-700 ">{food.quantity || 0}</button>
              <button onClick={()=>dispatch(DecrementFood(food.id))} className="px-2  text-emerald-700 hover:bg-emerald-700 hover:text-white">
                -
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default FoodCart;
