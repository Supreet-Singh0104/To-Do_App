# ToDo App

A simple, interactive To-Do App built with HTML, CSS, and JavaScript. This project is designed to provide users with a straightforward way to manage tasks, featuring the ability to add and remove tasks dynamically.

## Features

- **Add Tasks**: Users can input tasks and add them to the task list.
- **Delete Tasks**: Each task has an associated delete button for quick removal.
- **Responsive Design**: The app is designed to be user-friendly and works well on different screen sizes.


## File Details

### index.html
The main structure of the app, including input fields and a task list:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ToDo App</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>ToDo-App</h1>
        <input placeholder="Enter your task">
        <button>Add Task</button>
        <ul>
            <li>Eat <button class="delete">delete</button></li>
            <li>Sleep <button class="delete">delete</button></li>
        </ul>
    </div>
    <script src="app.js"></script>
</body>
</html>
How to Run
Clone the repository to your local machine.
Open index.html in your web browser to start using the app.
Future Improvements
Add the ability to mark tasks as complete.
Implement local storage to save tasks between sessions.
Enhance the UI with animations and themes.
License
This project is open-source and available under the MIT License.

