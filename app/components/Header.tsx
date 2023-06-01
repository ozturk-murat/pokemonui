import React from 'react'
import PropTypes from 'prop-types'
import pokemonuiLogo from '../../public/pokemon-ui-logo.svg';
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
