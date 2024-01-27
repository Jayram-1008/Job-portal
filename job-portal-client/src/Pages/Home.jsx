import React, {useEffect, useState} from 'react'
import Banner from '../component/Banner'
import Jobs from './Jobs';
import JobCard from '../component/JobCard';
import Sidebar from '../component/sidebar/Sidebar';
import Newsletter from '../component/rightSide/Newsletter';

const Home = () => {

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [query, setQuery] = useState('')
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  
  const itemsPerPage = 6;


  useEffect(() => {
    setIsLoading(true);
    fetch('jobs.json')
    .then(res => res.json())
    .then(data => {
      setJobs(data);
      setIsLoading(false); 
    })
  }, [])
  

  // filter jobs by title
  const filterItems = jobs.filter((job) => job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1);



  // ------------Radio Filtering----------
  const handleChange = (event) => {
    setSelectedCategory(event.target.value)
  }

  //---------button based filtering
  const handleClick = (event) => {
    setSelectedCategory(event.target.value)
  }

  // calculate the index range 
  const calculatePageRange = () => {
    const startIndex = (currentPage-1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return {startIndex, endIndex};
  }

  // function for next page
  const nextPage = () => {
    if(currentPage < Math.ceil(filterItems.length / itemsPerPage)){
      setCurrentPage(currentPage + 1);
    }
  }
  // function for previous page
  const prevPage = () => {
    if(currentPage > 1){
      setCurrentPage(currentPage - 1);
    }
  }

  // main function
  const filterData = (jobs, selectedCategory, query) => {
    let filtredJobs = jobs;


    // filtered input item
    if(query){
      filtredJobs = filterItems;
    }

    // category filtering
    if(selectedCategory){
      filtredJobs = filtredJobs.filter(({jobLocation, maxPrice, salaryType, experienceLevel, employmentType, postingDate}) => (
        jobLocation.toLowerCase() === selectedCategory.toLowerCase() ||
        parseInt(maxPrice) <= parseInt(selectedCategory) ||
        salaryType.toLowerCase() === selectedCategory.toLowerCase() ||
        employmentType.toLowerCase() === selectedCategory.toLowerCase() || 
        experienceLevel.toLowerCase() === selectedCategory.toLowerCase() || 
        postingDate >= selectedCategory
      ));
    }

    // slice the data based on current page
    const {startIndex, endIndex} = calculatePageRange();
    filtredJobs = filtredJobs.slice(startIndex, endIndex);

    return filtredJobs.map((data, index) => <JobCard key={index} data = {data}/>)
  }

  // calling for filtering the jobs
  const result = filterData(jobs, selectedCategory, query);
  console.log(result)
// handle input change
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  }
 
  return (
    <div>
      <Banner query={query} handleInputChange={handleInputChange} />

      {/* main content */}
      <div className='bg-[#FAFAFA] md:grid grid-cols-4 gap-8 lg:px-24 px-4 py-12'>
        {/* left side */}
        <div className='bg-white p-4 rounded'>
          <Sidebar handleChange={handleChange} handleClick={handleClick}/>
        </div>

        {/* job Cards  */}
        <div className='col-span-2 bg-white p-4 rounded-sm'> 
          {
            isLoading ? (<p className='font-medium'>Loading...</p>) : result.length > 0 ? (<Jobs result={result}/>) : <>
              <h3 className='text-lg font-bold mb-2'>{result.length} Jobs</h3>
              <p>No data found!</p>
            </>
          }

          {/* define pagination */}
          {
            result.length > 0 ? (
              <div className='flex justify-center mt-4 space-x-8'>
                <button onClick={prevPage} disabled={currentPage == 1} className='hover:underline'>Previous</button>
                <span>Page {currentPage} of {Math.ceil(filterItems.length / itemsPerPage)}</span>
                <button onClick={nextPage} disabled={currentPage === Math.ceil(filterItems.length / itemsPerPage)} className='hover:underline'>Next</button>
              </div>
            )
            : ""
          }

          
        </div>

        {/* right side */}
        <div className='bg-white p-4 rounded'>
          <Newsletter/>
        </div>
      </div>
      <div>
        {/* in this element all the filtered job are stored in form of card */}
       
      </div>
    </div>
  )
}

export default Home