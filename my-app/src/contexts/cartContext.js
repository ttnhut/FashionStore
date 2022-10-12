import { createContext, useContext, useState } from "react";

const fakeData = [
  {
    id: 1,
    image:
      "https://product.hstatic.net/1000185342/product/z3675560354662_20d3868f000f209206650f9f1cae3c8b_e30ea2d1f30a432a999b30d337a65b82_large.jpg",
    description: "Áo trễ vai 2 tầng bèo Lili",
    price: "239.000",
  },
  {
    id: 2,
    image:
      "https://product.hstatic.net/1000185342/product/img_2697_34d892c4fe064995ba4abff42b0eed25_large.jpg",
    description: "Áo trễ vai 2 tầng bèo Lili",
    price: "239.000",
  },
  {
    id: 3,
    image:
      "https://product.hstatic.net/1000185342/product/z3524825081196_a9ef1d04515ff76e966264f3d9a2bbc5_ebfc9ad7bb41483d94efee8d55e65671_large.jpg",
    description: "Áo trễ vai 2 tầng bèo Lili",
    price: "239.000",
  },
  {
    id: 4,
    image:
      "https://product.hstatic.net/1000185342/product/z3509895198313_782b45bc7c14e25f87d891ac1bb41b39_97072a597688422c9dbaee9f85b1369a_large.jpg",
    description: "Áo trễ vai 2 tầng bèo Lili",
    price: "239.000",
  },
  {
    id: 5,
    image:
      "https://product.hstatic.net/1000185342/product/z3529867157593_8d918171db8cf2825ba5d25bb189a506_d980e72b60804d1e8fa36f8a5a6f3a79_large.jpg",
    description: "Áo trễ vai 2 tầng bèo Lili",
    price: "239.000",
  },
  {
    id: 6,
    image:
      "https://product.hstatic.net/1000185342/product/2bf549f8-7a55-4e3e-8239-dc88885bbb46_10cc50cfd5364127898ac83dc572f8a0_large.jpg",
    description: "Áo trễ vai 2 tầng bèo Lili",
    price: "239.000",
  },
  {
    id: 7,
    image:
      "https://product.hstatic.net/1000185342/product/z3675560354662_20d3868f000f209206650f9f1cae3c8b_e30ea2d1f30a432a999b30d337a65b82_large.jpg",
    description: "Áo trễ vai 2 tầng bèo Lili",
    price: "239.000",
  },
  {
    id: 8,
    image:
      "https://product.hstatic.net/1000185342/product/z3675560354662_20d3868f000f209206650f9f1cae3c8b_e30ea2d1f30a432a999b30d337a65b82_large.jpg",
    description: "Áo trễ vai 2 tầng bèo Lili",
    price: "239.000",
  },
  {
    id: 9,
    image:
      "https://product.hstatic.net/1000185342/product/z3675560354662_20d3868f000f209206650f9f1cae3c8b_e30ea2d1f30a432a999b30d337a65b82_large.jpg",
    description: "Áo trễ vai 2 tầng bèo Lili",
    price: "239.000",
  },
  {
    id: 10,
    image:
      "https://product.hstatic.net/1000185342/product/z3675560354662_20d3868f000f209206650f9f1cae3c8b_e30ea2d1f30a432a999b30d337a65b82_large.jpg",
    description: "Áo trễ vai 2 tầng bèo Lili",
    price: "239.000",
  },
  {
    id: 11,
    image:
      "https://product.hstatic.net/1000185342/product/z3675560354662_20d3868f000f209206650f9f1cae3c8b_e30ea2d1f30a432a999b30d337a65b82_large.jpg",
    description: "Áo trễ vai 2 tầng bèo Lili",
    price: "239.000",
  },
  {
    id: 12,
    image:
      "https://product.hstatic.net/1000185342/product/z3675560354662_20d3868f000f209206650f9f1cae3c8b_e30ea2d1f30a432a999b30d337a65b82_large.jpg",
    description: "Áo trễ vai 2 tầng bèo Lili",
    price: "239.000",
  },
];

const CartContext = createContext();

function CartProvider(props) {
  const [data, setData] = useState(fakeData);
  const [cartItems, setCartItems] = useState([]);



  function addToCart(newsItems) {
    const productInCart = cartItems.find((item) => item.id === newsItems.id);
    if (productInCart) {
      setCartItems(
        cartItems.map((item) =>
          item.id === newsItems.id
            ? { ...productInCart, quantity: productInCart.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...newsItems, quantity: 1 }]);
    }
    return;
  }
  //remove Cart item
  function RemoveCartItem(cartItem) {
    setCartItems(cartItems.filter((item) => item.id !== cartItem.id));
  }
  //remove increment cart
  function RemoveCart(cartId) {
    const exits = cartItems.find((item) => item.id === cartId.id);
    setCartItems(
      cartItems.map((item) =>
        item.id === cartId.id
          ? { ...exits, quantity: exits.quantity - 1 }
          : item
      )
    );
    return;
  }

  const value = {
    data,
    cartItems,
    setData,
    setCartItems,
    addToCart,
    RemoveCartItem,
    RemoveCart,
  };
  return <CartContext.Provider value={value} {...props}></CartContext.Provider>;
}
function useCart() {
  const context = useContext(CartContext);
  if (typeof context === "undefined")
    throw new Error("CartContext must be use with a CartContext");
  return context;
}

export { useCart, CartProvider };
