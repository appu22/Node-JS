const tasks ={
    tasks :[{
        text:'Grocery  shoping',
        completed : true
    },{
        text : 'Pan shop',
        completed :false
    },{
        text:'wine shop',
        completed : false
    }],
     getTasksToDo()
    {
        return this.tasks.filter((task)=>task.completed === false)
        // {
        //         return task.completed === false
        // })
        // return taskToDo
    }
}
console.log(tasks.getTasksToDo());
