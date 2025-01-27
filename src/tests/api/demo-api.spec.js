import { test, expect } from '@playwright/test';

test(`api demo`,async({playwright}) => {
    const request = await playwright.request.newContext({
        baseURL: 'https://demoqa.com',
    });
    const response = await request.post('/Account/v1/Login', {
        data: {
            userName: 'demoqa',
            password: 'Welcome1!',
        },   
    });
    await expect(response).toBeOK();
    await expect(response).toEqual(expect.objectContaining({
        "success": true,
        "message": "Success",
      }))
});


test(`api add book demo`,async({playwright}) => {
    const request = await playwright.request.newContext({
        baseURL: 'https://demoqa.com',
    });
    const response = await request.post('/Account/v1/Login', {
        data: {
            userName: 'demoqa',
            password: 'Welcome1!',
        },   
    });
    await expect(response).toBeOK();
    let responseData = await response.json();
    request.post('BookStore/v1/Books',{
        headers: {
            'Authorzition': `Bearer ${responseData.token}`,
        },
        data: {
            "userDI": "asdfasdfasd-asdfasdf-adfasdf",
            "collectionOfIsbns": [{
                "isbn": "123124125123",
            }]
        },
    });
    expect(response.status).toEqual(400);
});


