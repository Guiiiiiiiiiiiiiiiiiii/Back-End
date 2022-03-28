function started(){
    console.log("Started Download")
}
function update(progress){
    console.log(progress + "% of Download" )
}
function completed(){
    console.log("Finished Download")
}
function performDownload(started_fn, update_fn, completed_fn){
    for(var i=0; i<=100;i++){
        update_fn(i);
    }
    completed_fn();
}
performDownload(started,update, completed)
