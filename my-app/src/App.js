import React, { useState, useEffect } from 'react';
import JobCard from './components/JobCard';
import JobFilters from './components/JobFilters';
import InfiniteScroll from './components/InfiniteScroll';
// import './styles.css';

const App = () => {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [filters, setFilters] = useState({
    minExperience: 0,
    company: '',
    location: '',
    remote: false,
    techStack: '',
    role: '',
    minBasePay: 0,
  });
  const [hasMore, setHasMore] = useState(true);

  // Fetch initial data
  useEffect(() => {
    // Fetch data from data.json file
    fetch('/data/data.json')
      .then(response => response.json())
      .then(data => {
        setJobs(data.job);
        setFilteredJobs(data.job);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  // Function to fetch more data for infinite scroll
  const fetchMoreData = () => {
    // This is just a placeholder function, you need to implement your logic here
    console.log('Fetching more data...');
  };

  // Function to apply filters
  const applyFilters = () => {
    // Implement filtering logic based on 'filters' state
    // Update 'filteredJobs' state accordingly
    console.log('Applying filters...');
  };

  return (
    <div className="app">
      <h1>Candidate Application Platform</h1>
      <div className="filters-section">
        <JobFilters />
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
