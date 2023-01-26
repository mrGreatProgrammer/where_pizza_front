import React from 'react'
import CartItem from '../../Products/Cart/CartItem/CartItem'

const CartDrawer = () => {
  return (
    <div>
      <CartItem
      count={1}
      desc={"Традиционное тесто, 23 см"}
      discount={0}
      id={1}
      img={""}
      price={499}
      title={'Чикен Сладкий Чили'}
      />
      </div>
  )
}

export default CartDrawer