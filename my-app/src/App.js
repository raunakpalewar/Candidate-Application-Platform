import React, { useState, useEffect } from 'react';
import JobCard from './components/JobCard';
import JobFilters from './components/JobFilters';
import InfiniteScroll from './components/InfiniteScroll';
import data from './data.json';
import './components/styles.css';

const App = () => {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [filters, setFilters] = useState({
    minExperience: 0,
    company: '',
    location: '',
    remote: '',
    onsite: '',
    role: '',
    minBasePay: 0,
  });
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    setJobs(data.job);
    setFilteredJobs(data.job);
  }, []);

  const fetchMoreData = () => {
    console.log('Fetching more data...');
  };

  const applyFilters = (appliedFilters) => {
    setFilters(appliedFilters);
  
    const filtered = jobs.filter(job => {
      const isRemote = job.location.toLowerCase().includes('remote');
      const isOnsite = !isRemote;

  
      return (
        (!appliedFilters.minExperience || job.minExp >= appliedFilters.minExperience) &&
        (!appliedFilters.company || job.companyName.toLowerCase().includes(appliedFilters.company.toLowerCase())) &&
        (!appliedFilters.location || job.location.toLowerCase().includes(appliedFilters.location.toLowerCase())) &&
        (!appliedFilters.remote || job.location.toLowerCase().includes('remote')) &&
        (!appliedFilters.onsite || isOnsite) &&
        (!appliedFilters.role || job.jobRole.toLowerCase().includes(appliedFilters.role.toLowerCase())) &&
        (!appliedFilters.minBasePay || job.minJdSalary >= appliedFilters.minBasePay)
      );
    });
  
    // Update the filteredJobs state with the filtered results
    setFilteredJobs(filtered);
  };

  return (
    <div className="app">
      <h1>Search Jobs</h1>
      <div className="filters-section">
        <JobFilters applyFilters={applyFilters} />
      </div>
      <div className="job-cards-section">
        {filteredJobs.map(job => (
          <JobCard key={job.jdUid} job={job} />
        ))}
        <InfiniteScroll fetchMoreData={fetchMoreData} hasMore={hasMore} />
      </div>
    </div>
  );
};

export default App;
