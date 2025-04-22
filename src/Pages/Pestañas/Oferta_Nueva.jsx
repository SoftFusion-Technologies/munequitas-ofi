import React from 'react'
import BasePage from '../../Components/BasePage'
import {nuevo} from '../../Helpers/Arrays/nuevo'

const Oferta_Nueva = () => {
  return (
    <BasePage title='NUEVA' solo_venta={true} array={nuevo}></BasePage>
  )
}

export default Oferta_Nueva
