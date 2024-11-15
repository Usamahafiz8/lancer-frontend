import { Box } from '@mui/material'
import React from 'react'

const LancerPlanetLogo = ({width, styles}) => {
  return (
    <Box component="img" src="/assets/full_logo.svg" alt="Lancer Planet" sx={{ width: `${width}`, height: 'auto' , ...styles}} />
  )
}

export default LancerPlanetLogo
