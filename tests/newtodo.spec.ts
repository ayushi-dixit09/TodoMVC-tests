import { test, expect } from '@playwright/test';

test.describe('TodoMVC App-Basic Features',()=>{
    test.beforeEach(async({page})=>{
      // Navigate to the Todo MVC demo application before each test
     await page.goto('https://demo.playwright.dev/todomvc/');
    })
   
   test('Todo MVC page should display correct page title', async ({ page }) => {
     await expect(page).toHaveTitle(/Todo/);
   })

   test('Todo MVC page should show the todo input bar',async({page})=>{
     // verify using placeholder locator
     await expect(page.getByPlaceholder('What needs to be done?')).toBeVisible();
   })

   test('Todo MVC page should add a new todo',async({page})=>{
     await page.locator('.new-todo').fill('add item');
     await page.locator('.new-todo').press('Enter');
     const todo= page.locator('.todo-list li');
     await expect(todo).toHaveText('add item');
   })

   test('Todo MVC page should mark a todo as completed',async({page})=>{
     await page.locator('.new-todo').fill('mark item');
     await page.locator('.new-todo').press('Enter');
     await page.locator('.toggle').check();
     const todo=page.locator('.todo-list li');
     await expect(todo).toHaveClass(/completed/);
   })

   test('Todo MVC page should edit an existing todo',async({page})=>{
     await page.locator('.new-todo').fill('buy item');
     await page.locator('.new-todo').press('Enter');
     const todoItem=page.locator('.todo-list li').first();
     await todoItem.dblclick();

     const editInput=todoItem.locator('.edit');
     await editInput.fill('buy item using card');
     await editInput.press('Enter');
     await expect(todoItem).toHaveText('buy item using card');
   })

   test('Todo MVC page should delete a todo',async({page})=>{
     await page.locator('.new-todo').fill('clear item');
     await page.locator('.new-todo').press('Enter');
     const todoItem = page.locator('.todo-list li').first();
     await todoItem.hover();
     await todoItem.locator('.destroy').click();
     await expect(page.locator('.todo-list li')).toHaveCount(0);
   })

     
   
   
})








