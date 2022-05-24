import React from 'react'

export default function navigation(props) {
  return (
    <nav> 
      <button type='text' onClick={()=>props.setCurrentPage('About Me')}> About Me </button>
      <button type='text' onClick={()=>props.setCurrentPage('Portfolio')}> Portfolio </button>
      <button type='text' onClick={()=>props.setCurrentPage('Contact')}> Contact </button>
      <button type='text' onClick={()=>props.setCurrentPage('Resume')}> Resume </button>
    </nav> 
  )
}
