import bcrypt from 'bcryptjs'
const users = [
  {
    name: 'Admin user',
    email: 'hayatmk4@gmail.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'john Doe',
    email: 'john@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'jane Doe',
    email: 'jane@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  }
]
  export default users