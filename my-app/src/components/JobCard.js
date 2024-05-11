import React from 'react';

const JobCard = ({ job }) => {
  return (
    <div className="job-card">
      <img src={job.logoUrl} alt="Company Logo" />
      <h2>{job.companyName}</h2>
      <p>{job.location}</p>
      <p>{job.jobDetailsFromCompany}</p>
      <p>Experience: {job.minExp} - {job.maxExp} years</p>
      <p>Salary: {job.minJdSalary || 'Not specified'} - {job.maxJdSalary || 'Not specified'} {job.salaryCurrencyCode}</p>
      <button>Apply</button>
    </div>
  );
};

export default JobCard;
