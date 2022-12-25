import React from 'react'

export type productTagCardProps = {
  id: number;
  // icon: JSX.Element;
  title: string;
}

const ProductTagCard = ({id,  title}: productTagCardProps) => {
  return (
    <div>
      <div className='border border-lineGray' >
        <div>
          {/* {icon} */}
        </div>
      </div>
      <p>{title}</p>
    </div>
  )
}

export default ProductTagCard