import React from 'react'

 function Hero({heroName}) {

    if(heroName==="anjana")
    throw new Error('Not a Error')
  return (
    <div>
     {heroName}

    </div>
  )
}

export default Hero
