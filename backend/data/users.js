import bcrypt from 'bcryptjs';

const users = [
  { 
    name: 'Admin User',
    email: 'admin@exaample.com',
    password: bcrypt.hashSync('toor', 10),
    isAdmin: true
  },
  { 
    name: 'Jan Nowak',
    email: 'jan@exaample.com',
    password: bcrypt.hashSync('1234', 10),
  },
  { 
    name: 'Ola Nowak',
    email: 'ola@exaample.com',
    password: bcrypt.hashSync('1234', 10),
  }

];

export default users;