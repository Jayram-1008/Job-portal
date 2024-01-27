import React from 'react'
import SelectField from '../SelectField'

const EmpType = ({handleChange}) => {
  return (
    <div>
        <h4 className='text-lg font-medium mb-2'>Employment Type</h4>
        <div>
            <label className='sidebar-label-container'>
                <input type="radio" name="test" id="test" value="" onChange={handleChange}/>
                <span className='checkmark'></span>Any
            </label>

            <SelectField
                name="test"
                value="Full-time"
                title="Full-time"
                handleChange={handleChange}
            />
            <SelectField
                name="test"
                value="Temporary"
                title="Temporary"
                handleChange={handleChange}
            />
            <SelectField
                name="test"
                value="Part-time"
                title="Part-time"
                handleChange={handleChange}
            />
            
        </div>
    </div>
  )
}

export default EmpType