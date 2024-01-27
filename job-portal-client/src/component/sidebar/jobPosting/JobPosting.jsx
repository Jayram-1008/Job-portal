import React from 'react'
import SelectField from '../SelectField'

const JobPosting = ({handleChange}) => {
    const now = new Date();
    const twentyFourHoursAgo = new Date(now - 24 * 60 * 60 * 1000);
    const sevenDaysAgo = new Date(now - 7 * 24 * 60 * 60 * 1000);
    const ThirtyDaysAgo = new Date(now - 30 * 24 * 60 * 60 * 1000);

    // convert date to string
    const twentyFourHoursAgoDate = twentyFourHoursAgo.toISOString().slice(0,10);
    const sevenDaysAgoDate = sevenDaysAgo.toISOString().slice(0,10);
    const ThirtyDaysAgoDate = ThirtyDaysAgo.toISOString().slice(0,10);
    // console.log(twentyFourHoursAgoDate);


  return (
    <div>
        <h4 className='text-lg font-medium mb-2'>Job Posted</h4>
        <div>
            <label className='sidebar-label-container'>
                <input type="radio" name="test" id="test" value="" onChange={handleChange}/>
                <span className='checkmark'></span>All Time
            </label>

            <SelectField
                name="test"
                value={twentyFourHoursAgoDate}
                title="Last 24 hours"
                handleChange={handleChange}
            />
            <SelectField
                name="test"
                value={sevenDaysAgoDate}
                title="Last 7 Days"
                handleChange={handleChange}
            />
            <SelectField
                name="test"
                value={ThirtyDaysAgoDate}
                title="Last 30 Days"
                handleChange={handleChange}
            />
        </div>
    </div>
  )
}

export default JobPosting