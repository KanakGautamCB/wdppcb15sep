const RouterModule = require('router')
const router = RouterModule()
const todoController = require('../Controller/todoController')



router.get('/tasks',todoController.getTasks)

router.post('/add-task',todoController.addTask)

router.post('/update-tasks',todoController.updateTask)

router.post('/delete-task',todoController.deleteTask)

router.post('/edit-task',todoController.editTask)

router.post('/complete-task',todoController.completeTask)

router.post('/filter-task',todoController.filterTask)

router.get('/clear-completed-task',todoController.clearCompletedTask)

module.exports=router
