import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles.css';

const JobFilters = ({ applyFilters }) => {
  const [minExp, setMinExp] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [location, setLocation] = useState('');
  const [remoteOnsite, setRemoteOnsite] = useState('');
  const [role, setRole] = useState('');
  const [minBasePay, setMinBasePay] = useState('');
  const [locations, setLocations] = useState([]);
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('data.json');
        const jobs = response.data.job;
        const uniqueLocations = Array.from(new Set(jobs.map(job => job.location.toUpperCase())));
        const uniqueRoles = Array.from(new Set(jobs.map(job => job.jobRole.toUpperCase())));
        setLocations(uniqueLocations);
        setRoles(uniqueRoles);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  console.log(companyName)

  const handleFilterChange = () => {
    const filters = {
      minExp,
      company: companyName, // Include the company name in the filters object
      location,
      remoteOnsite,
      role,
      minBasePay
    };
    applyFilters(filters);
  };

  const minExpOptions = Array.from({ length: 10 }, (_, i) => i + 1);
  const minBasePayOptions = Array.from({ length: 10 }, (_, i) => (i + 1) * 10);

  const handleInputChange = (e, setStateFunction) => {
    const { name, value } = e.target; 
    setStateFunction(value);
    if (value.trim() !== '') {
      e.target.classList.add('active');
    } else {
      e.target.classList.remove('active');
    }
  };
  

  return (
    <div className="job-filters">
      <select value={minExp} onChange={(e) => setMinExp(e.target.value)} onBlur={(e) => handleInputChange(e, setMinExp)}>
        <option value="">Select Minimum Experience</option>
        {minExpOptions.map(value => (
          <option key={value} value={value}>{value} years</option>
        ))}
      </select>
      <input
            type="text"
            placeholder="Company Name"
            value={companyName}
            name="companyName" // Corrected name attribute
            onChange={(e) => handleInputChange(e, setCompanyName)}
            />

      <select value={location} onChange={(e) => setLocation(e.target.value)} onBlur={(e) => handleInputChange(e, setLocation)}>
        <option value="">Select Location</option>
        {locations.map(location => (
          <option key={location} value={location}>{location}</option>
        ))}
      </select>
      <select value={remoteOnsite} onChange={(e) => setRemoteOnsite(e.target.value)} onBlur={(e) => handleInputChange(e, setRemoteOnsite)}>
        <option value="">Select Remote/Onsite</option>
        <option value="remote">Remote</option>
        <option value="onsite">Onsite</option>
      </select>
      <select value={role} onChange={(e) => setRole(e.target.value)} onBlur={(e) => handleInputChange(e, setRole)}>
        <option value="">Select Role</option>
        {roles.map(role => (
          <option key={role} value={role}>{role}</option>
        ))}
      </select>
      <select value={minBasePay} onChange={(e) => setMinBasePay(e.target.value)} onBlur={(e) => handleInputChange(e, setMinBasePay)}>
        <option value="">Select Min Base Pay</option>
        {minBasePayOptions.map(value => (
          <option key={value} value={value}>{value} LPA</option>
        ))}
      </select>
      <button onClick={handleFilterChange}>Apply Filters</button>
    </div>
  );
};

export default JobFilters;
