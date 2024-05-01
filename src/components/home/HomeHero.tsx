import Image from 'next/image'
import React from 'react'

function HomeHero() {
  return (
    <div>
        <Image
        className='rounded-full'
          src="https://avatars.githubusercontent.com/u/91860458?v=4"
          alt="johstn.dev"
          width={168}
          height={168}
        />
    </div>
  )
}

export default HomeHero