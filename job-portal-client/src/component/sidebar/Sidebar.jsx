import React from 'react'
import Location from './Location'
import SelectField from './SelectField'
import Salary from './salary/Salary'
import JobPosting from './jobPosting/JobPosting'
import WorkExperiance from './workExperiance/WorkExperiance'
import EmpType from './Type/EmpType'

const Sidebar = ({handleChange, handleClick}) => {
  return (
    <div className='space-y-5'>
        <h3 className='text-lg font-bold mb-2'>Filters</h3>
        <Location handleChange={handleChange}/>
        <Salary handleClick={handleClick} handleChange={handleChange}/>
        <JobPosting handleChange={handleChange}/>
        <WorkExperiance handleChange={handleChange}/>
        <EmpType handleChange={handleChange}/>
    </div>
    
  )
}

export default Sidebar