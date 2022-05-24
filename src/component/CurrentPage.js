import React from 'react'
import AboutMe from '../pages/aboutMe'
import Contact from '../pages/contact'
import Portfolio from '../pages/portfolio'
import Resume from '../pages/resume'

function getCurrentPage(currentPage){
    if(currentPage ==='About Me'){
      return <AboutMe/>
    } else if (currentPage === 'Contact'){
      return <Contact/>
    } else if (currentPage === 'Portfolio'){
      return <Portfolio/>
    } else if (currentPage === 'Resume'){
      return <Resume/>
    }
}
export default function CurrentPage(props) {
  return (
    <div>{getCurrentPage(props.currentPage)}</div>
  )
}
