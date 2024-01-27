import React from 'react'
import SalaryButton from './SalaryButton'
import SelectField from '../SelectField'

const Salary = ({handleChange, handleClick}) => {
  return (
    <div>
        <h4 className='text-lg font-medium mb-2'>Salary</h4>
        <div className='mb-4'>
            <SalaryButton title="Hourly" onClickHandler={handleClick} value="Hourly"/>
            <SalaryButton title="Monthly" onClickHandler={handleClick} value="Monthly"/>
            <SalaryButton title="Yearly" onClickHandler={handleClick} value="Yearly"/>
        </div>
        <div>
            
            <SelectField
                name="test2"
                value={30}
                title="< 30000K"
                handleChange={handleChange}
            />
            <SelectField
                name="test2"
                value={50}
                title="< 50000K"
                handleChange={handleChange}
            />
            <SelectField
                name="test2"
                value={80}
                title="< 80000K"
                handleChange={handleChange}
            />
            <SelectField
                name="test2"
                value={100}
                title="< 100000K"
                handleChange={handleChange}
            />
        </div>
    </div>
  )
}

export default Salary