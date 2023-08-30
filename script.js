let input = document.getElementById('text');
let wrapper = document.getElementById('wrapper')
let container = document.getElementById('container')
let ul = document.getElementById('ul')
let item = document.getElementById('item')
let edit = document.getElementById('edit')
let del = document.getElementById('del')
let btn = document.getElementById('btn')



const show = document.createElement('div');
    const edits = document.createElement('button');
    const dels = document.createElement('button');
    const span = document.createElement('input');
    const buttons = document.createElement('div');
    let result = input.value;

btn.onclick = function (){
    let result = input.value;
    const show = document.createElement('div');
    const edits = document.createElement('button');
    const dels = document.createElement('button');
    const span = document.createElement('input');
    const buttons = document.createElement('div');
    edits.innerHTML = 'EDIT'
    dels.innerHTML = 'DELETE'
    container.append(show);
    show.append(span)
    show.append(buttons)
    buttons.append(edits)
    buttons.append(dels)
    span.classList.add('item')
    show.classList.add('ul')
    buttons.classList.add('buttons')
    edits.classList.add('edit')
    dels.classList.add('del')
    // ul.style.display = 'flex';
    span.value = result;
input.value =''


dels.addEventListener('click', function(){
    // alert('delete me');
    // ul.style.display ='none';
    // wrapper.remove(show)
    // show.classList.remove('ul')
    show.style.display ='none';
save()

})

edits.addEventListener('click', ()=>{
    // alert('you clicked')
    if(edits.innerText.toLowerCase() == 'edit'){
        span.removeAttribute('readonly')
        span.focus();
        edits.innerText = 'SAVE'
        save()

    }
    else{
        span.setAttribute('readonly', 'readonly')
        edits.innerText = 'EDIT'
        save()

    }

    
save()
    
})
}
//     const span = document.createElement('input');
//     const edits = document.createElement('button');

//     console.log(result);

// }
    


    




function save(){
    localStorage.setItem('data', result);
}
function showTask(){
    result = localStorage.getItem('data')

}

showTask()