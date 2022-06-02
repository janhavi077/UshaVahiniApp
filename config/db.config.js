module.exports = {
    HOST: "localhost",
    PORT: 27017,
    DB: "shopping"
  };
  module.exports = {
    FAST2SMS: "GgjxrqzH65PdVTW0N4EbBZpceU7vD8RawsI9nuLlKiFQCmfAyYhn4bdjZi1cIp87yv9fukKLJSUYCXTF"
  };
 

// 1) http://localhost:8081/api/auth/register
// method POST
// body {
//      phone : String
//      name : String
// }

// 2) /api/auth/login_with_phone
// method POST
// body {
//      phone : String
// }

// 3) /api/auth/verify_otp
// method POST
// body {
//      otp : String
//      userId : String
// }

// 4) /api/auth/me
// method GET
// headers {
//      Authorization : Bearer jwt_token
// }
// access for both ADMIN and USER role

// 5) /api/auth/admin
// method GET
// headers {
//     Authorization : Bearer jwt_token
// }
// access for only ADMIN role
