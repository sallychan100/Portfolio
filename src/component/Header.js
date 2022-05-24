import React from 'react'
import Navigation from './Navigation'

export default function Header(props) {
  return (
    <header>
      <div> Sally </div>
      <Navigation setCurrentPage={props.setCurrentPage}/>
    </header>
  )
}
