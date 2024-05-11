import React from 'react';

const Modal = ({ isOpen, onClose, job }) => {
    console.log("jobid",job)
  return (
    <>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <span className="close" onClick={onClose}>&times;</span>
            <h2>{job.companyName}</h2>
            <h3>{job.jobRole}</h3>
            <p><strong>Location:</strong> {job.location}</p>
            <p><strong>Minimum Experience:</strong> {job.minExp} years</p>
            <p><strong>Maximum Experience:</strong> {job.maxExp} years</p>
            <p><strong>Minimum JD Salary:</strong> {job.minJdSalary}</p>
            <p><strong>Maximum JD Salary:</strong> {job.maxJdSalary}</p>
            <p><strong>Job Details:</strong> {job.jobDetailsFromCompany}</p>
            <p><strong>Jd Link:</strong> <a href={job.jdLink}>{job.jdLink}</a></p>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
