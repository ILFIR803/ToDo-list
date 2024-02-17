
let i = 1;
document.querySelector('.add-tasks-list').addEventListener('click', () => {

   i += 1;
   if (document.querySelectorAll('.list-tasks').length == 0) {
      i = 1;
   }
   document.querySelector('.no-task').style.display = 'none';


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
                        <input type="text" class="form-control-title" id="taskTitleInput" placeholder="Введите название задачи" required>
                        <textarea name="comment" class="form-control" id="taskInput" cols="40" rows="3" placeholder="Текст задачи" ></textarea>
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
      let items = document.querySelectorAll('.list-tasks');
      if (items.length == 0) {
         document.querySelector('.no-task').style.display = 'block';
         i = 1;
      }
   }

   if (lists.classList.contains('delete')) {
      let noneTask = lists.closest('.tasks');
      lists.closest('.task').remove();
      if (noneTask.querySelectorAll('.task').length === 1) {
         noneTask.querySelector('.none').style.display = 'block';
      }
   }
   if (lists.classList.contains('task-title')) {
      document.querySelectorAll('.task-text').forEach(item => {
         item.classList.remove('task-text-block');
      });
      lists.closest('.task').querySelector('.task-text').classList.add('task-text-block');
   }
   if (lists.classList.contains('close')) {
      document.querySelectorAll('.task-text').forEach(item => {
         item.classList.remove('task-text-block');
      });
   }

});




document.querySelector('.check-lists').addEventListener('submit', (e) => {
   e.preventDefault();
   const lists = e.target;
   let btn = lists.closest('.list-tasks');
   const inputText = btn.querySelector('#taskInput'),
      inputTitleText = btn.querySelector('#taskTitleInput'),
      taskAdd = btn.querySelector('.tasks'),
      noTask = btn.querySelector('.none');

   const taskTitleInput = inputTitleText.value;
   const taskInput = inputText.value;

   const taskTextHTML = `<li class="task">
                           <div>
                              <input type="checkbox" id="check-task" name="interest" />
                              <span class="task-title">${taskTitleInput}</span>
                              <div class="task-text">
                                 ${taskInput}
                                 <img src="./images/crosslinear_106242.svg" alt="" class="close"></img>
                              </div>
                           </div>
                           <button type="button" data-action="delete" class="btn-action delete">
                              <img src="./images/garbage-in-trash-bin-recycle-bin-delete-svgrepo-com.svg" alt="Done" width="18"
                                 height="18">
                           </button>
                        </li>`;
   taskAdd.insertAdjacentHTML('beforeend', taskTextHTML);
   inputTitleText.value = '';
   inputText.value = '';
   inputTitleText.focus();
   let task = btn.querySelectorAll('.task');
   if (task.length > 1) {
      noTask.style.display = 'none';
   }
});




document.querySelector('.active-tasks').addEventListener('click', () => {
   document.querySelector('.active-tasks').classList.add('bg-active');
   document.querySelector('.all-tasks').classList.remove('bg-active');
   document.querySelector('.completed-tasks').classList.remove('bg-active');
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
   document.querySelector('.active-tasks').classList.remove('bg-active');
   document.querySelector('.all-tasks').classList.remove('bg-active');
   document.querySelector('.completed-tasks').classList.add('bg-active');
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
   document.querySelector('.active-tasks').classList.remove('bg-active');
   document.querySelector('.all-tasks').classList.add('bg-active');
   document.querySelector('.completed-tasks').classList.remove('bg-active');
   const ckeckList = document.querySelectorAll('.list-tasks');
   ckeckList.forEach(item => {
      item.querySelectorAll('#check-task').forEach(i => {
         i.closest('.task').classList.remove('hide');
      });
   });

});

