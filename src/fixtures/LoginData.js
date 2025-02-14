const loginValidData = [
    { 
        username: process.env.NAME, 
        password: process.env.PASSWORD
    }
];
  
const loginInvalidData = [
    { 
        username: 'admi', 
        password: '12345678' 
    },
    { 
        username: 'admin', 
        password: '1234567' 
    },
];
  
module.exports = { 
    loginValidData,
    loginInvalidData
};