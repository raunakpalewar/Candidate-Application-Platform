import React, { useState } from 'react';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
const JobCard = ({ job }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="job-card">
      <img src={job.logoUrl} alt="Company Logo" />
      <h2>{job.companyName}</h2>
      {job.jobRole && <h2>{job.jobRole}</h2>}
      {job.location && <p>{job.location}</p>}
      {(job.minJdSalary !== null || job.maxJdSalary !== null) && (
        <p>
          Estimated Salary: {job.minJdSalary  || ''} -{' '}
          {job.maxJdSalary || ''} LPA <CheckBoxIcon className='icon' />
        </p>
      )}
      <p>
        {expanded ? job.jobDetailsFromCompany : `${job.jobDetailsFromCompany.slice(0, 100)}...`}
        {!expanded && <button onClick={toggleExpand}>Read more</button>}
      </p>
      {job.minExp && <p>Minimum Experience: {job.minExp} years</p>}
      <button>Apply</button>
    </div>
  );
};

export default JobCard;
