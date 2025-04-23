import React from 'react'
import {sacos} from '../../Helpers/Arrays/sacos'
import BasePage from '../../Components/BasePage'

const Sacos = () => {
  return (
    <BasePage title='Sacos' array={sacos}></BasePage>
  )
}

export default Sacos