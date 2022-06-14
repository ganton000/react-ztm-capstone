import { useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectCartItems } from '../../store/cart/CartSelector';
import Button from '../button/Button';
import CartItem from '../cart-item/CartItem';

import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from './CartDropdown.styles';

//const sleep = (milliseconds: number): void => {
//  var start = new Date().getTime();
//  for (var i = 0; i<1e7; i++) {
//    if (new Date().getTime() - start > milliseconds) { break; }
//  }
//}


const CartDropdown = () => {

  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate(); //as this doesn't change, should not be in dependency.

  const goToCheckoutHandler = useCallback(() => {
    navigate('/checkout');
  }, []);

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) =>
          <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>
            Your cart is empty
          </EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;