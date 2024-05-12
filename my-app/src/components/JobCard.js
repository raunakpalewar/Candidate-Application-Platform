import React, { useState } from 'react';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import Modal from './Modal'; 
import ElectricBoltTwoToneIcon from '@mui/icons-material/ElectricBoltTwoTone';

const JobCard = ({ job }) => {
  const [modalOpen, setModalOpen] = useState(false); 

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
        <div className='description-section'>

            <span className='description'>
                <h2>About Company :</h2>
                <h3>About us </h3>
                <p>
                {job.jobDetailsFromCompany.length > 300 ? job.jobDetailsFromCompany.substring(0, 300) + '...' : job.jobDetailsFromCompany}
                </p>
            </span>
            <p className='view-job-p'>
                {job.jobDetailsFromCompany.length > 300 && <button className="view-job" onClick={openModal}>View Job</button>}
            </p>
        </div>



      <Modal isOpen={modalOpen} onClose={closeModal} job={job}>
        <span className="close" onClick={closeModal}>&times;</span>
        <h2>About Company :</h2>
        <h3>About us </h3>
        <p>{job.jobDetailsFromCompany}
        </p>
        <button className="apply-btn">Apply</button>
      </Modal>

        {job.minExp && 
            <span>
                <h2 className='exp'>Minimum Experience:</h2><p> {job.minExp} years</p>
            </span>
        }
        <span className='apply-span'>
            <button className='apply-btn'><ElectricBoltTwoToneIcon style={{ fontSize: '20px', verticalAlign: 'middle' }} className='lighting' />Easy Apply</button>
        </span>
        
    </div>
  );
};

export default JobCard;
