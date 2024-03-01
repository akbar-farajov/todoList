const addBtn = document.querySelector('#add-btn');
const todos = document.querySelector('.todos');
const inputBox = document.querySelector('#input-text');

//Add Button Events

function addTask() {
    let inputTask = inputBox.value;

    if (inputBox.value === '') {
        alert('You must be written something');
    } else {
        let todo = document.createElement('div');
        todo.className = 'todo';
        todos.appendChild(todo);

        let done = document.createElement('input');
        done.type = 'checkbox';
        done.className = 'done';
        todo.appendChild(done);

        let taskContent = document.createElement('input');
        taskContent.className = 'todo-content';
        taskContent.value = inputTask;
        taskContent.type = 'text';
        taskContent.setAttribute('readonly', 'readonly');
        todo.appendChild(taskContent);

        let actions = document.createElement('div');
        actions.className = 'actions';
        todo.appendChild(actions);

        let btnEdit = document.createElement('button');
        btnEdit.className = 'btn edit';
        btnEdit.innerHTML = 'Edit';

        let btnRemove = document.createElement('button');
        btnRemove.className = 'btn remove';
        btnRemove.innerHTML = 'Remove';

        actions.appendChild(btnEdit);
        actions.appendChild(btnRemove);

        inputBox.value = '';
        //Checkbox Events

        done.addEventListener('click', () => {
            if (done.checked == true) {
                taskContent.style.color = 'gray';
                taskContent.style.textDecorationLine = 'line-through';
                taskContent.style.textDecorationThickness = '10%';
            } else {
                taskContent.style.textDecorationLine = 'none';
                taskContent.style.color = 'black';
            }
        });

        //Edit  Button Events

        btnEdit.addEventListener('click', () => {
            if (btnEdit.textContent == 'Edit') {
                btnEdit.textContent = 'Save';
                taskContent.removeAttribute('readonly');
            } else {
                btnEdit.textContent = 'Edit';
                taskContent.setAttribute('readonly', 'readonly');
            }
        });

        btnRemove.addEventListener('click', () => {
            todos.removeChild(todo);
        });
    }
}
