import React from 'react'
import { CartIcon } from '../../../imgs/icons'

const CartBtnMobile = ({price=0}): JSX.Element => {
  return (
    <button className='cart_btn_shadow z-10 shadow-2xl fixed bottom-5 right-5 p-4 rounded-full bg-primery md:hidden' >
      <div className='absolute top-[-2px] right-[-3px] bg-white border border-primery rounded-full w-5 h-5 flex justify-center items-center text-xs text-primery' >
        {price}
      </div>
      <CartIcon />
    </button>
  )
}

export default CartBtnMobile