import React, { useState } from 'react';

const JobCard = ({ job }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (

        <div className="job-card">
        <img src={job.logoUrl} alt="Company Logo" />
        <h2>{job.companyName}</h2>
        <p>{job.location}</p>
        <p>{expanded ? job.jobDetailsFromCompany : `${job.jobDetailsFromCompany.slice(0, 100)}...`}
            {!expanded && (
            <button onClick={toggleExpand}>Read more</button>
            )}
        </p>
        <p>Experience: {job.minExp} - {job.maxExp} years</p>
        <p>Salary: {job.minJdSalary || 'Not specified'} - {job.maxJdSalary || 'Not specified'} {job.salaryCurrencyCode}</p>
        <button>Apply</button>
        </div>

  );
};

export default JobCard;
