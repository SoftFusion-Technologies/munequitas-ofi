import React from 'react'
import BasePage from '../../Components/BasePage'
import {circular} from '../../Helpers/Arrays/circular'

const Oferta_Circular = () => {
  return (
    <BasePage title='CIRCULAR' solo_venta={true} array={circular}></BasePage>
  )
}

export default Oferta_Circular