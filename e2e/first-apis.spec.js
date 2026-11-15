import {test, expect,} from '@playwright/test';
test('my first api test', async({request}) =>{
const response= await request.get('https://fakestoreapi.com/products/11')
expect(response.status()).toBe(200);
expect(response.status()).toBe(404);
})