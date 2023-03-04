import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../App';

function ProductDetail() {
     const { id } = useParams();
     const { products } = useContext(AppContext);
     const [detailItem, setDetailItem] = useState();
     console.log(products)

     useEffect(() => {
          const filterData = products.find(el => {
               return el.id == id;
          })

          setDetailItem(filterData)

     }, [])

     return (
          detailItem &&
          <div className='detail-container'>
               <div className='detail-card '>
                    <div style={{ width: "40%", margin: "0 auto" }}>
                         <img className='item-image-d' alt="" width={"320px"} src={detailItem.images[2]} />

                    </div>
                    <div>
                         <p> Category : {detailItem.category}</p>
                         <p> Name : {detailItem.title}</p>
                         <p> Brand : {detailItem.brand}</p>
                         <p> Description : {detailItem.description}</p>
                         <p> Price : {detailItem.price}</p>

                    </div>

               </div>
          </div>
     )
}

export default ProductDetail
