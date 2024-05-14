import { useCart } from "./Context/CartContext";
import { Button } from "./styles/Button";
import NumberFormat from "./componets/NumberFormat";
import Romove from "./images/Trash Can.svg";

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useCart({});
  console.log(cartItems, "object");
  // console.log(cartItems.image.url[0], "singlepage img");
  const totalPrice = cartItems
    ? cartItems.reduce((total, item) => total + item.price, 0)
    : 0;

    

  return (
    <section className="top-pad">
      <div className="container">
        <h2 className="mb-4">Shopping Cart</h2>
        <hr className="mb-4" />
        <div className="d-flex gap-3">
          <div className="flex-1">
            <div>
              <h3 className="mb-4">
                You have{" "}
                {cartItems &&
                  cartItems.reduce(
                    (total, quantity) => total + quantity.quantity,
                    0
                  )}{" "}
                item in your cart{}
              </h3>
              {cartItems &&
                cartItems.map(
                  (item) =>
                    item.id && (
                      <div key={item.id} className="mb-4">
                        <div className="cart-wrapper d-flex align-itmes-center justify-content-between">
                          <img
                            src={
                              Array.isArray(item.image)
                                ? item.image[0].url
                                : item.image
                            }
                            alt={item.name}
                            className="side-img--size"
                          />
                          <h3>
                            {item.name} - Rs{" "}
                            <NumberFormat number={item.price} /> /-
                          </h3>
                          <p> Quantity {item.quantity} </p>
                          <figure
                            onClick={() => removeFromCart(item.id)}
                            className="pointer"
                          >
                            <img src={Romove} alt="Romove" />
                          </figure>
                        </div>
                      </div>
                    )
                )}
            </div>
            <div className="d-flex justify-content-between">
              <Button onClick={clearCart}>Clear Cart</Button>
              <h3>
                Total price ::
                <NumberFormat number={totalPrice} />
              </h3>
            </div>
          </div>
          <div className="flex-1">Pricing menu</div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
