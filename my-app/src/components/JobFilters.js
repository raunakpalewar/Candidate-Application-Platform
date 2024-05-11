import React, { useState, useEffect } from 'react';
import axios from 'axios';

const JobFilters = ({ applyFilters }) => {
  // Define state for each filter
  const [minExp, setMinExp] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [location, setLocation] = useState('');
  const [remoteOnsite, setRemoteOnsite] = useState('');
  const [role, setRole] = useState('');
  const [minBasePay, setMinBasePay] = useState('');
  const [locations, setLocations] = useState([]);
  const [roles, setRoles] = useState([]);

  // Fetch data from JSON file on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('data.json');
        const jobs = response.data.jobs;
        const uniqueLocations = Array.from(new Set(jobs.map(job => job.location)));
        const uniqueRoles = Array.from(new Set(jobs.map(job => job.jobRole)));
        setLocations(uniqueLocations);
        setRoles(uniqueRoles);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Function to handle filter changes
  const handleFilterChange = () => {
    // Construct filter object
    const filters = {
      minExp,
      companyName,
      location,
      remoteOnsite,
      role,
      minBasePay
    };
    // Apply filters
    applyFilters(filters);
  };

  return (
    <div className="job-filters">
      <input
        type="text"
        placeholder="Minimum Experience"
        value={minExp}
        onChange={(e) => setMinExp(e.target.value)}
      />
      <input
        type="text"
        placeholder="Company Name"
        value={companyName}
        onChange={(e) => setCompanyName(e.target.value)}
      />
      <select value={location} onChange={(e) => setLocation(e.target.value)}>
        <option value="">Select Location</option>
        {locations.map(location => (
          <option key={location} value={location}>{location}</option>
        ))}
      </select>
      <select value={remoteOnsite} onChange={(e) => setRemoteOnsite(e.target.value)}>
        <option value="">Select Remote/Onsite</option>
        <option value="remote">Remote</option>
        <option value="onsite">Onsite</option>
      </select>
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="">Select Role</option>
        {roles.map(role => (
          <option key={role} value={role}>{role}</option>
        ))}
      </select>
      <select value={minBasePay} onChange={(e) => setMinBasePay(e.target.value)}>
        <option value="">Select Min Base Pay</option>
        <option value="0">0 LPA</option>
        <option value="10">10 LPA</option>
        <option value="20">20 LPA</option>
        {/* Add more options as needed */}
      </select>
      <button onClick={handleFilterChange}>Apply Filters</button>
    </div>
  );
};

export default JobFilters;
