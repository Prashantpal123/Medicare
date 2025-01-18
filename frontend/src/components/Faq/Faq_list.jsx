import React from 'react'
import {faqs} from "../../assets/data/faqs"
import Faq_item from './Faq_item'

const Faq_list = () => {
  return (
    <ul className='mt-[38px] '>
        {faqs.map((item, index)=>(<Faq_item item={item} key={index}/>))}

    </ul>
  )
}

export default Faq_list
