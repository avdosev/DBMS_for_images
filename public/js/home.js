document.addEventListener('DOMContentLoaded', () => {
    const drag_elem = document.body
    const elem = document.querySelector('.container')
    const elem_inner = document.querySelector('.container-inner')
    
    drag_elem.addEventListener('drag', (event) => {
        console.log('puk')
        elem.classList.remove('drag');
    })
    
    drag_elem.addEventListener('dragenter', (event) => {
        console.log('enter')
        elem.classList.add('drag')
        //elem.classList.remove('drag');
    })
    
    function removeDrag() { elem.classList.remove('drag'); console.log('remove') }
    drag_elem.addEventListener('dragleave', removeDrag)

    drag_elem.addEventListener('dragover', () => {
        elem.classList.add('drag')
    })

    drag_elem.addEventListener('drop', (event) => {
        removeDrag(elem)
        console.log(event.dataTransfer.files)
        console.log('drop')
    })

    drag_elem.addEventListener('load', (event) => {
        console.log('load')
    })

    drag_elem.addEventListener('copy', (event) => {
        console.log('copy')
    })

    loadBtn.addEventListener('click', () => {
        fileForm.click()
    })

    fileForm.addEventListener('change', () => {
        responseFile()
    })
})


function responseFile() {
    const data = new FormData();
    data.append('file', fileForm)
    return fetch('/load-to-storage', {
        method: 'post',
        body: data
    }).catch(console.error)
}