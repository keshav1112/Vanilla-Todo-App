let myInput = document.getElementById('myInput');
let createElement = document.getElementById('addTodoList');
let editedInputIndex;
let addBtn = document.getElementById('add');
let updateBtn = document.getElementById('update');
let list = [];

function addTodoElement(){
    if(myInput.value){
        list.includes(myInput.value) ? console.log('Already exists'):list.push(myInput.value);
        addList();
    }else{
        console.log('Please fill the value first');
        // console.log('Please fill the value first');
    }
    myInput.value = null;
}

function addList(){
    let bindData = '';
    console.log(list);

    list.forEach((el,index) =>{
        bindData += `<li>${el} <div><span onclick="edit(${index})">Edit</span> <span onclick="del(${index})">Delete</span></div></li>`;
    });
    
    createElement.innerHTML = bindData;
}

function edit(index){
    editedInputIndex  = index;
    console.log(index);
    myInput.value = list[index];
    addBtn.style.display = 'none';
    updateBtn.style.display = 'block';
}

function del(index){
    console.log(index);
    list.splice(index,1);
    console.log(list);
    addList();
}

function updateTodoElement(){
    console.log(list[editedInputIndex],myInput.value);
    list[editedInputIndex] = myInput.value;
    myInput.value = null;
    addBtn.style.display = 'block';
    updateBtn.style.display = 'none';
    addList();

}