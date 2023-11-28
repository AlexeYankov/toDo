function handle(e){
    console.log("event")
    if(e.keyCode === 13){
        addTask() // Ensure it is only this code that runs
    }
}