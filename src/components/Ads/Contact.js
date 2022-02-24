import { Avatar } from '@mui/material';
import React from 'react';

const Contact = ({ name }) => {
  const contacts = [
    'Debra Jacqui',
    'Leon Billy',
    'Billy Emily',
    'Darryl Adams',
    'Emily Moca',
    'John Cane',
    'Aaron Brushi',
    'Jacqui Burdt',
  ];

  return (
    <div className='mt-2'>
      {contacts.map((contact) => (
        <div className='d-flex mb-1'>
          <Avatar />
          <p className='ms-3 mt-2'>{contact}</p>
        </div>
      ))}
    </div>
  );
};

export default Contact;
