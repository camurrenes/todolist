const ulDOM = document.querySelector("#list")
const inputDOM = document.querySelector('#task')

function newElement(event) {
    if (inputDOM.value.trim().length>0) {
        event.preventDefault();
        const liDOM = document.createElement('li')
        const spanDOM = document.createElement('span')
        const onclickDOM = document.createElement('input')
        onclickDOM.onclick
        liDOM.innerHTML = inputDOM.value
        spanDOM.innerHTML = 'x'

        ulDOM.appendChild(liDOM)
        liDOM.appendChild(spanDOM)
        
        $("#addToast").toast("show");
    }else{
        $("#errToast").toast("show");
    }

    const delDOM = document.querySelectorAll('span')
    for (let index = 3; index < delDOM.length; index++) {
        delDOM[index].addEventListener('click', () => {
            delDOM[index].parentElement.style.display = "none";
        })

    }


    ulDOM.addEventListener('click',(event)=>{
        if(event.target.tagName=='LI'){
            event.target.classList.toggle('checked')
        }
    })

    // const slcDOM = document.querySelectorAll('li')
    // console.log(slcDOM.length)
    // for (let index =0; index < slcDOM.length; index++) {
    //     slcDOM[index].addEventListener('click', () => {
    //         slcDOM[index].classList.value==="checked"?slcDOM[index].classList.remove("checked"):slcDOM[index].classList.add("checked")

    //     })
    // }

}