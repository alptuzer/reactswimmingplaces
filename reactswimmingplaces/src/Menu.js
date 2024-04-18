import React from 'react'

export default function Menu({datas}) {
  return (
    <div className='section-center'>
        {datas.map((item) => {
            const {id,title,img,desc,price} = item;
            return(
                <article className='menu-item' key={id}>
                    <img src={img} alt={title} className='photo'></img>
                    <div className='item-info'>
                        <header>
                            <h4>{title}</h4>
                            <h4 className='price'>{price} TL </h4>
                        </header>
                        <p className='item-text'> {desc}</p>
                    </div>
                </article>
            )
        })}
      
    </div>
  )
}
