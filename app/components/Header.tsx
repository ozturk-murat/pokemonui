import React from 'react'
import Image from 'next/image';

function Header() {
  return (
    <div className='header'>
        <Image
              src="/pokemon-ui-logo.svg"
              alt="Vercel Logo"
              width={600}
              height={144}
              priority
            />
    </div>
  )
}

export default Header
