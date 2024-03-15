import { toast } from "react-hot-toast";

const { Foods } = require("@/Data/Food");
const { createSlice } = require("@reduxjs/toolkit");

export function UpdateTotal(state) {
  state.total.price = state.cart.reduce((acc, curr) => {
    return acc + curr.price * curr.quantity;
  }, 0);
  state.total.offPrice = state.cart.reduce((acc, curr) => {
    return acc + curr.offPrice * curr.quantity;
  }, 0);
  if (state.total.price && state.total.offPrice) {
    state.total.discount = state.total.offPrice - state.total.price;
  } else {
    state.total.discount = 0;
  }
}

let repeat = 0;

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    total: { price: 0, offPrice: 0, discount: 0, delivery: 0 },
    favorites:[],
    orders:[],
    address:[]
  },
  reducers: {
    AddToCart: (state, action) => {
      const findFoodCart = state.cart.find((food) => {
        return food.id == action.payload.id;
      });
      if (findFoodCart) {
        findFoodCart.quantity++;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
      UpdateTotal(state);
    },
    IncrementFood: (state, action) => {
      const findFoodCart = state.cart.find((item) => {
        return item.id == action.payload;
      });
      findFoodCart.quantity += 1;
      UpdateTotal(state);
    },
    DecrementFood: (state, action) => {
      const findFoodCart = state.cart.find((item) => {
        return item.id == action.payload;
      });
      findFoodCart.quantity -= 1;
      if (findFoodCart.quantity == 0) {
        state.cart = state.cart.filter((food) => {
          return food.id != action.payload;
        });
      }
      UpdateTotal(state);
    },
    RemoveFood: (state, action) => {
      state.cart = state.cart.filter((food) => {
        return food.id != action.payload;
      });
      UpdateTotal(state);
    },
    Clear: (state, action) => {
      state.cart = [];
      state.total = { price: 0, offPrice: 0, discount: 0 , delivery: 0 };
    },
    CouponCart: (state, action) => {
      if (action.payload == "takhfif") {
        if (repeat == 0) {
          const offCalculate = state.total.price * (1 - 0.2);
          let discountCalculate = Math.abs(state.total.price - offCalculate);
          state.total.price = offCalculate;
          state.total.discount += discountCalculate;
          repeat = 1;
          toast.success("کد تخفیف اعمال شد");
        } else {
          toast.error("کد تخفیف منقضی شده است");
        }
      } else {
        toast.error("کد تخفیف وارد‌شده صحیح نمی‌باشد");
      }
    },
    DeliveryCost: (state, action) => {
      if (action.payload == "post") {
        state.total.price += 35000;
        state.total.delivery = 35000;
      }else{
        state.total.price -= 35000;
        state.total.delivery = 0
      }
    },
  },
});

export const {
  CouponCart,
  AddToCart,
  IncrementFood,
  DecrementFood,
  RemoveFood,
  Clear,
  DeliveryCost,
} = CartSlice.actions;

export default CartSlice.reducer;
