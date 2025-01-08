// const fs = require('fs');
// const filePath = 'todos.txt';
// const ensureFileExists = () => {
//     if (!fs.existsSync(filePath)) {
//         fs.writeFileSync(filePath, '', 'utf8');
//     }
// };
// const readTodos = () => {
//     const data = fs.readFileSync(filePath, 'utf8');
//     return data.split('\n').filter(line => line.trim().length > 0);
// };
// const writeTodos = (todos) => {
//     fs.writeFileSync(filePath, todos.join('\n'), 'utf8');
// };
// const addTodo = (task) => {
//     const todos = readTodos();
//     todos.push(task);
//     writeTodos(todos);
//     console.log('Todo added!');
// };
// const listTodos = () => {
//     const todos = readTodos();
//     if (todos.length === 0) {
//         console.log('No todos found!');
//         return;
//     }
//     todos.forEach((todo, index) => {
//         console.log(`${index + 1}. ${todo}`);
//     });
// };
// const deleteTodo = (index) => {
//     const todos = readTodos();
//     if (index < 1 || index > todos.length) {
//         console.log('Invalid todo number!');
//         return;
//     }
//     todos.splice(index - 1, 1);
//     writeTodos(todos);
//     console.log('Todo deleted!');
// };
// const handleCommand = () => {
//     ensureFileExists();
//         const command = process.argv[2];
//     const argument = process.argv[3];
//     switch (command) {
//         case 'add':
//             if (!argument) {
//                 console.log('Please provide a task to add!');
//             } else {
//                 addTodo(argument);
//             }
//             break;
//         case 'list':
//             listTodos();
//             break;
//         case 'delete':
//             const todoIndex = parseInt(argument);
//             if (isNaN(todoIndex)) {
//                 console.log('Please provide a valid todo number to delete!');
//             } else {
//                 deleteTodo(todoIndex);
//             }
//             break;
//         case undefined:
//         case '':
//             console.log('Usage:');
//             console.log('  node todo.js add <task>      # Add a new task');
//             console.log('  node todo.js list            # Display all tasks');
//             console.log('  node todo.js delete <number> # Delete a task by its number');
//             break;
//         default:
//             console.log('Unknown command!');
//             break;
//     }
// };
// handleCommand();



const fs = require('fs');
const fileName = 'todos.txt';
if (!fs.existsSync(fileName)) {
    fs.writeFileSync(fileName, '');
}
function readTasks() {
    const data = fs.readFileSync(fileName, 'utf8');
    return data ? data.split('\n').filter(task => task.trim() !== '') : [];
}
function writeTasks(tasks) {
    fs.writeFileSync(fileName, tasks.join('\n'));
}
const command = process.argv[2];
const args = process.argv.slice(3);
switch (command) {
    case 'add': {
        const task = args.join(' ');
        if (!task) {
            console.log('Error: Task description cannot be empty.');
        } else {
            const tasks = readTasks();
            tasks.push(task);
            writeTasks(tasks);
            console.log('Todo added!');
        }
        break;
    }
    case 'list': {
        const tasks = readTasks();
        if (tasks.length === 0) {
            console.log('Todo list is empty.');
        } else {
            tasks.forEach((task, index) => {
                console.log(`${index + 1}. ${task}`);
            });
        }
        break;
    }
    case 'delete': {
        const index = parseInt(args[0], 10) - 1;
        const tasks = readTasks();
        if (isNaN(index) || index < 0 || index >= tasks.length) {
            console.log('Error: Invalid task number.');
        } else {
            tasks.splice(index, 1);
            writeTasks(tasks);
            console.log('Todo deleted!');
        }
        break;
    }
    case 'mark': {
        const index = parseInt(args[0], 10) - 1;
        const tasks = readTasks();
        if (isNaN(index) || index < 0 || index >= tasks.length) {
            console.log('Error: Invalid task number.');
        } else {
            tasks[index] = `[X] ${tasks[index]}`;
            writeTasks(tasks);
            console.log(' Your Task marked as complete!!!');
        }
        break;
    }
    case 'clear': {
        writeTasks([]);
        console.log('All tasks are cleared!');
        break;
    }
    default: {
        console.log('Usage:');
        console.log('  node myTodoApp.js add <task>      # Add Your new task');
        console.log('  node myTodoApp.js list            # Display all tasks');
        console.log('  node myTodoApp.js delete <number> # Delete a task by its number');
        console.log('  node myTodoApp.js mark <number>   # Mark a task as completed!');
        console.log('  node myTodoApp.js clear           # Delete all tasks');
        break;
    }
}
