document.addEventListener('DOMContentLoaded', function() {
    const taskForms = [1, 2, 3, 4];
    
    taskForms.forEach(function(client) {
      const form = document.getElementById(`todo-form-${client}`);
      const taskList = document.getElementById(`tasks-${client}`);
  
      form.addEventListener('submit', function(e) {
        e.preventDefault();
  
        const taskName = document.getElementById(`task-name-${client}`).value;
        const taskItem = document.createElement('li');
  
        taskItem.innerHTML = `
          ${taskName}
          <div>
            <button class="complete">Complete</button>
            <button class="delete">Delete</button>
          </div>
        `;
  
        taskList.appendChild(taskItem);
        document.getElementById(`task-name-${client}`).value = ''; // Clear input
  
        taskItem.querySelector('.complete').addEventListener('click', function() {
          taskItem.classList.toggle('completed');
        });
  
        taskItem.querySelector('.delete').addEventListener('click', function() {
          taskList.removeChild(taskItem);
        });
      });
    });
  });
  