import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { CartContext } from '../../contexts/CartContext/CartContext';

const Cart = () => {
  const cart = useContext(CartContext);
  console.log(cart);
  const uniqueArr = [...new Set(cart.cartState)];

  return (
    <div>
      <Helmet>
        <title>Cart</title>
      </Helmet>
      <h1>Cart Items</h1>
      <div className="row">
        {uniqueArr?.map((cartItems) => {
          return (
            <div className="col-md-4" key={cartItems.id}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{cartItems.name}</h5>
                  <p className="card-text">{cartItems.description}</p>
                  <p>Rs. {cartItems.price}</p>
                </div>
                <div className="card-footer">
                  <button
                    type="button"
                    className="ms-2 btn btn-outline-danger btn-sm"
                  >
                    Favorite
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
