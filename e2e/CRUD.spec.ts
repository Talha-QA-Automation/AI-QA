import {test, Expect, expect } from '@playwright/test';

//GET FUNCTION
    test('GET  -user lyna' ,async ({ request})=>
    {
const response = await request.get('https://jsonplaceholder.typicode.com/users/1')
expect(response.status()).toBe(200);
    });  
 // POST FUNCTION  
    test('POST  - new user Banana' ,async ({ request})=>
    {
const response = await request.post('https://jsonplaceholder.typicode.com/users',{
data:{ name: 'ALi' , email:'ali@gmail.com'}
    }); 
expect(response.status()).toBe(201);
    });
// PUT FUNCTION
test('PUT  - Data Updat krna' ,async ({ request})=>
    {
const response = await request.put('https://jsonplaceholder.typicode.com/users/1',{
data:{ name: 'baki' , email:'baki@gmail.com'}
    }); 
expect(response.status()).toBe(200);
    });
//DELETE FUNCTION
test('Delete  - Data Delete krna' ,async ({ request})=>
    {
const response = await request.delete('https://jsonplaceholder.typicode.com/users/1',{
//data:{ name: 'baki' , email:'baki@gmail.com'}
    }); 
expect(response.status()).toBe(200);
    });    