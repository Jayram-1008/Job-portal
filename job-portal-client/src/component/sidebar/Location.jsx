import React from 'react'
import SelectField from './SelectField'

const Location = ({handleChange}) => {
  return (
    <div>
        <h4 className='text-lg font-medium mb-2'>Location</h4>
        <div>
            <label className='sidebar-label-container'>
                <input type="radio" name="test" id="test" value="" onChange={handleChange}/>
                <span className='checkmark'></span>All
            </label>

            <SelectField
                name="test"
                value="london"
                title="London"
                handleChange={handleChange}
            />
            <SelectField
                name="test"
                value="brussels"
                title="Brussels"
                handleChange={handleChange}
            />
            <SelectField
                name="test"
                value="san Francisco"
                title="San Francisco"
                handleChange={handleChange}
            />
            <SelectField
                name="test"
                value="seattle"
                title="Seattle"
                handleChange={handleChange}
            />
            <SelectField
                name="test"
                value="boston"
                title="Boston"
                handleChange={handleChange}
            />
            <SelectField
                name="test"
                value="madrid"
                title="Madrid"
                handleChange={handleChange}
            />
        </div>
    </div>
    
  )
}

export default Location