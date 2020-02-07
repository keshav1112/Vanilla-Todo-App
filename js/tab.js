let myInput = document.getElementById('myInput');
let createElement = document.getElementById('addTodoList');
let list = [];

function addTodoElement(){
    if(myInput.value){
        list.includes(myInput.value) ? console.log('Already exists'):list.push(myInput.value);
        addList();
    }else{
        console.log('Please fill the value first');
        // console.log('Please fill the value first');
    }
}

function addList(){
    let bindData = '';
    console.log(list);

    list.forEach(el =>{
        bindData += `<li>${el} <div><span onclick="edit()">Edit</span> <span onclick="del(currentElDelete)">Delete</span></div></li>`;
    });
    
    createElement.innerHTML = bindData;
}

function edit(){

}

function del(deleteCurrentEl){
    console.log(deleteCurrentEl);
}