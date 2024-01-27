import React from 'react'
import SelectField from '../SelectField'

const WorkExperiance = ({handleChange}) => {
  return (
    <div>
        <h4 className='text-lg font-medium mb-2'>Work Experiance</h4>
        <div>
            <label className='sidebar-label-container'>
                <input type="radio" name="test" id="test" value="" onChange={handleChange}/>
                <span className='checkmark'></span>Any experiance
            </label>

            <SelectField
                name="test"
                value="Internship"
                title="Internship"
                handleChange={handleChange}
            />
            <SelectField
                name="test"
                value="Remotely"
                title="Remotely"
                handleChange={handleChange}
            />
            <SelectField
                name="test"
                value="Hybrid"
                title="Hybrid"
                handleChange={handleChange}
            />
            
        </div>
    </div>
  )
}

export default WorkExperiance