import React from 'react'

const Card = ({img , card, data}) => {
  return (

    <>
      <div className='border-4 border-indigo-300/50 p-5 max-w-[250px] ml-20 '>

      <img src={img} width={200} height={200} alt="Tree" />
      <h1>{card}</h1>
      <p>{data}</p>
    </div>
    </>

  )
}

export default Card
