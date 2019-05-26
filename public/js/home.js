document.addEventListener('DOMContentLoaded', () => {
    const drag_elem = document.body
    const elem = document.querySelector('.container')
    
    drag_elem.addEventListener('drag', (event) => {
        console.log('puk')
        elem.classList.remove('drag');
    })
    
    drag_elem.addEventListener('dragenter', (event) => {
        console.log('enter')
        elem.classList.add('drag')
        //elem.classList.remove('drag');
    })

    drag_elem.addEventListener('dragend', (event) => {
        console.log('end');
        
        elem.classList.remove('drag');
    })


    
    drag_elem.addEventListener('drop', (event) => {
        elem.classList.remove('drag');
        console.log(event.dataTransfer.files)
        console.log('drop')
    })

    drag_elem.addEventListener('load', (event) => {
        console.log('load')
    })

    drag_elem.addEventListener('copy', (event) => {
        console.log('copy')
    })
})

function responseFile(file) {
    const data = new FormData();
    data.append('file', file)
    return fetch('/load-to-storage', {
        method: 'post',
        body: file
    }).catch(console.error)
}