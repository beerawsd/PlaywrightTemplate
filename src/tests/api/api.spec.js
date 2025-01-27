import { test, expect } from '@playwright/test';

// test('GET /protected should require authentication', async ({ request }) => {
//     // ส่ง GET request โดยใช้ headers สำหรับ authentication
//     const response = await request.get('https://jsonplaceholder.typicode.com/protected', {
//         headers: {
//         'Authorization': 'Bearer <your-token-here>',
//         },
//     });
//     // ตรวจสอบสถานะการตอบกลับ
//     expect(response.status()).toBe(200);
// });

test('POST /users should create a new user', async ({ request }) => {
    // ข้อมูลที่ใช้สำหรับ POST
    const newUser = {
      username: 'admin',
      password: '12345678',
    };
  
    // ส่ง POST request
    const response = await request.post('https://warranty-uat.dpluscrm.com/warranty/abm/api/v2/admin/auth/login', {
      data: newUser, // ข้อมูลที่ส่งไปใน POST body
    });
  
    // ตรวจสอบสถานะการตอบกลับ
    expect(response.status()).toBe(200);
  
    // ตรวจสอบข้อมูลที่ตอบกลับมา
    const responseData = await response.json();
    expect(responseData).toHaveProperty('success', true);
    expect(responseData).toHaveProperty('result.fullName', 'Administrator');
    expect(responseData).toEqual(expect.objectContaining({
      "success": true,
      "message": "Success",
    }))

});

// test('PUT /users/1 should update user data', async ({ request }) => {
//     const updatedUser = {
//       name: 'Jane Doe',
//       email: 'jane.doe@example.com',
//     };
  
//     // ส่ง PUT request เพื่ออัปเดตข้อมูล
//     const response = await request.put('https://jsonplaceholder.typicode.com/users/1', {
//       data: updatedUser,
//     });
  
//     // ตรวจสอบสถานะการตอบกลับ
//     expect(response.status()).toBe(200);
  
//     // ตรวจสอบข้อมูลที่ได้รับหลังจากการอัปเดต
//     const responseData = await response.json();
//     expect(responseData).toHaveProperty('name', 'Jane Doe');
//     expect(responseData).toHaveProperty('email', 'jane.doe@example.com');
// });

// test('DELETE /users/1 should delete a user', async ({ request }) => {
//   // ส่ง DELETE request เพื่อลบผู้ใช้
//   const response = await request.delete('https://jsonplaceholder.typicode.com/users/1');

//   // ตรวจสอบสถานะการตอบกลับ
//   expect(response.status()).toBe(200);

//   // ตรวจสอบว่าข้อมูลถูกลบไปแล้ว
//   const responseData = await response.json();
//   expect(responseData).toEqual({});
// });