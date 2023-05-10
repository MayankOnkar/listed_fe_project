import React from 'react'
import PropTypes from 'prop-types'

function SignInCard({children}) {
  return (
    <div className='signincard'>
      {children}
    </div>
  )
}

SignInCard.propTypes = {
  children : PropTypes.node.isRequired,
}

export default SignInCard