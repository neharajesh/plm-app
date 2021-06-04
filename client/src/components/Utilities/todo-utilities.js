export const updateTodoList = (currentTodoList, taskId, taskUpdates) => {
    let updatedTodoList;
    const currentTask = currentTodoList.filter(task => task.taskId === taskId)
    if(!currentTask) {
        return currentTodoList
    } else {
        updatedTodoList = currentTodoList.map(currentTask => {
            if(currentTask.taskId === taskId) {
                currentTask.task = taskUpdates?.task || currentTask.task
                currentTask.isDone = taskUpdates?.isDone
            }
            return currentTask
        })
    }
    return updatedTodoList
}