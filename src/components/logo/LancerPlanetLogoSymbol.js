import { Box } from '@mui/material'
import React from 'react'

const LancerPlanetLogoSymbol = ({width, styles}) => {
  return (
    <Box component="img" src="/assets/logo.svg" alt="Lancer Planet" sx={{ width: `${width}`, height: 'auto' , ...styles}} />
  )
}

export default LancerPlanetLogoSymbol
