#  Test Plan- TodoMVC page //Ayushi Dixit/10-09-2025//
## Scope
This test plan covers basic features of the Todo MVC app:
 - Title verification
 - Input bar verificatiom
 - Add a new todo
 - Mark todo as completed
 - Edit todo
 - Delete todo

## Test Cases

### 1. "Todo MVC page should display correct page title"
  **Steps**: Open page in browser
  **Expected Outcome**: Page Title should contain "TodoMVC".
### 2. "Todo MVC page should show the todo input bar"
  **Steps**: Open the page in browser
  **Expected Outcome**: Input bar with Placeholder "What needs to be done?" should be visible.
### 3. "Todo MVC page should add a new todo"
  **Steps**: Open page in browser.
             Enter text "add item" in input bar.
             Press Enter.
  **Expectecd Outcome**: "add item" should be added in the list. 
### 4. "Todo MVC page should mark a todo as completed".
  **Steps**: Open the page in browser.
             Add a todo in the list as "mark item".
             click check box.
  **Expected Otcome**: "mark item" should appear with strikethrough and completed.
### 5. "Todo MVC page should edit an existing todo".
  **Steps**: Open the page in browser
             Add a todo as "buy item".
             Double click on "buy item".
             Edit "buy item" to "buy item using card".
             Press enter.
  **Expected Outcome**: Updated text "buy item using card" should be visible.
### 6. "Todo MVC page should delete a todo".
  **Steps**: Open the page in browser.
             Add a todo as "clear item".
             hover over on added "clear item"
             click on 'X' to delete.
  **Expected Outcome**: "clear item should be removed from the list".

             
                   