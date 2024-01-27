import React from 'react'

const SelectField = ({title, handleChange, name, value}) => {
  return (
    <div className='text-lg font-medium mb-2'>
        <label className='sidebar-label-container text-primary  text-sm'>
            <input 
                type="radio" 
                name={name} 
                value={value} 
                onChange={handleChange}
            />
            <span className='checkmark'></span>{title}
        </label>
    </div>
  )
}

export default SelectField