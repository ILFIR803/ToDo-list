
let i = 1
document.querySelector('.add-tasks-list').addEventListener('click', () => {

   i += 1;
   if (document.querySelectorAll('.list-tasks').length == 0) {
      i = 1;
   }
   const tasksListAdd = `
   <div class="list-tasks">
            <div class="check-list">
               <div class="check-list-top">
                  <span class="list-title">
                     Чек лист ${i}
                  </span>
                  <img class="editing" src="./images/pencil-svgrepo-com.svg" alt="">
                  <button class="check-list-delete">Удалить чек-лист</button>
               </div>
               <ul class="tasks">
                  <li class="task none">
                     Нет задач
                  </li>
               </ul>
               
            </div>
            <div class="card bg-light">
                  <div class="card-header">Добавить новую задачу</div>
                  <div class="card-body">
                     <form id="form">
                        <div class="form-group">
                           <input type="text" class="form-control" id="taskInput" placeholder="Текст задачи" required>
                           <small id="emailHelp" class="form-text text-muted">Что делаем, сколько времени тратим, какой
                              результат получаем.</small>
                        </div>
                        <button type="submit" class="btn btn-primary  btn-lg active" ">Добавить</button>
                     </form>
                  </div>
               </div>
         </div>
   `;
   document.querySelector('.check-lists').insertAdjacentHTML('beforeend', tasksListAdd);
});



document.querySelector('.check-lists').addEventListener('click', (e) => {
   const lists = e.target;
   if (lists.classList.contains('check-list-delete')) {
      lists.closest('.list-tasks').remove();
      i -= 1;
   };
   if (lists.classList.contains('delete')) {
      let noneTask = lists.closest('.tasks');
      lists.closest('.task').remove();
      if (noneTask.querySelectorAll('.task').length === 1) {
         noneTask.querySelector('.none').style.display = 'block';
      }
   };
});


document.querySelector('.check-lists').addEventListener('submit', (e) => {
   e.preventDefault();
   const lists = e.target;
   let btn = lists.closest('.list-tasks');
   const inputText = btn.querySelector('#taskInput'),
      taskAdd = btn.querySelector('.tasks'),
      noTask = btn.querySelector('.none');

   const taskInput = inputText.value;

   const taskTextHTML = `   <li class="task">
                        <label>
                           <input type="checkbox" id="check-task" name="interest"/>
                           <span class="task-title">${taskInput}</span>
                        </label>
                        <button type="button" data-action="delete" class="btn-action delete">
                           <img src="./images/garbage-in-trash-bin-recycle-bin-delete-svgrepo-com.svg" alt="Done" width="18"
                              height="18">
                        </button>
      
                     </li>
                     `;
   taskAdd.insertAdjacentHTML('beforeend', taskTextHTML);
   inputText.value = '';
   inputText.focus();
   let task = btn.querySelectorAll('.task');
   if (task.length > 1) {
      noTask.style.display = 'none';
   }
});



document.querySelector('.active-tasks').addEventListener('click', () => {
   const ckeckList = document.querySelectorAll('.list-tasks');
   ckeckList.forEach(item => {
      item.querySelectorAll('#check-task').forEach(i => {
         i.closest('.task').classList.remove('hide');
         if (i.checked) {
            i.closest('.task').classList.add('hide');
         }
      });
   });

});
document.querySelector('.completed-tasks').addEventListener('click', () => {
   const ckeckList = document.querySelectorAll('.list-tasks');
   ckeckList.forEach(item => {
      item.querySelectorAll('#check-task').forEach(i => {
         i.closest('.task').classList.remove('hide');
         if (!i.checked) {
            i.closest('.task').classList.add('hide');
         }
      });
   });

});
document.querySelector('.all-tasks').addEventListener('click', () => {
   const ckeckList = document.querySelectorAll('.list-tasks');
   ckeckList.forEach(item => {
      item.querySelectorAll('#check-task').forEach(i => {
         i.closest('.task').classList.remove('hide');
      });
   });

});
