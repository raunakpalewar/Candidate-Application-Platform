import React from 'react';
import ElectricBoltTwoToneIcon from '@mui/icons-material/ElectricBoltTwoTone';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';


const Modal = ({ isOpen, onClose, job }) => {
    console.log("jobid",job)
  return (
    <>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <span className="close" onClick={onClose}>&times;</span>
            <span className='img-section'>
                <img src={job.logoUrl} alt="Company Logo" />
                <span className='name-role'>
                    <h1>{job.companyName}</h1>
                    <h3 className='job-role'> {job.jobRole}</h3>
                    <p className='location'> {job.location}</p>
                </span>
            </span>
            
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
            <p className='jobdescription'>
                <h2>About Company :</h2>
                <h3>About us </h3>
                {job.jobDetailsFromCompany}
            </p>
            {job.minExp && 
            <span >
                <h2 className='exp'>Minimum Experience:</h2><p> {job.minExp} years</p>
            </span>
        }
            {/* <p className='jd'><strong>Jd Link:</strong> <a href={job.jdLink}>{job.jdLink}</a></p> */}
            <button className='apply-btn'><ElectricBoltTwoToneIcon style={{ fontSize: '20px', verticalAlign: 'middle' }} className='lighting' />Easy Apply</button>

          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
