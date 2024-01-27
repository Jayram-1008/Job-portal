import React from 'react'

const SalaryButton = ({title, handleClickHnadler, value}) => {
  return (
    <button onClick={handleClickHnadler} value={value} className='px-4 py-1 border text-base hover:bg-blue '>
        {title}
    </button>
  )
}

export default SalaryButton