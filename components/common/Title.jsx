import React from 'react'

const Title = ({name}) => {
  return (
    <div className='text-[25px] md:text-[35px] font-normal text-primary-black uppercase'>
      {name}
    </div>
  )
}

export default Title
