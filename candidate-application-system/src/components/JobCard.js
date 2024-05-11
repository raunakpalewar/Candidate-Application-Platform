import React, { useState } from 'react';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import Modal from './Modal'; 

const JobCard = ({ job }) => {
  const [modalOpen, setModalOpen] = useState(false); // State to control the modal

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="job-card">
      <div className='img-section'>
        <img src={job.logoUrl} alt="Company Logo" />
        <span className='name-role'>
          <h2>{job.companyName}</h2>
          {job.jobRole && <h4>{job.jobRole}</h4>}
          {job.location && <p className='location'>{job.location}</p>}
        </span>
      </div>
      {(job.minJdSalary !== null || job.maxJdSalary !== null) && (
        <p className='salary'>
          Estimated Salary:
          <CurrencyRupeeIcon style={{ fontSize: '18px', verticalAlign: 'middle' }} className='icon' />
          {job.minJdSalary !== null ? job.minJdSalary : ''}
          {job.minJdSalary !== null && job.maxJdSalary !== null && ' - '}
          {job.maxJdSalary !== null ? job.maxJdSalary : ''}
          {job.minJdSalary !== null || job.maxJdSalary !== null} LPA <CheckBoxIcon className='check-icon icon' />
        </p>
      )}

      <p className='description'>
        <h2>About Company :</h2>
        <h3>About us </h3>
        {job.jobDetailsFromCompany}
      </p>

      <button className="view-job" onClick={openModal}>View Job</button>

      {/* Fullscreen modal */}
      <Modal isOpen={modalOpen} onClose={closeModal} job={job}>
        <span className="close" onClick={closeModal}>&times;</span>
        <h2>About Company :</h2>
        <h3>About us </h3>
        <p>{job.jobDetailsFromCompany}</p>
        <button className="apply-btn">Apply</button>
      </Modal>

      {job.minExp && <p>Minimum Experience: {job.minExp} years</p>}
      <button>Apply</button>
    </div>
  );
};

export default JobCard;
