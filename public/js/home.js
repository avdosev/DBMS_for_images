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
        file.click()
    })

    file.addEventListener('change', () => {
        responseFile().then(response => {
            if (response.ok) {
                return response.json()
            }
        }).then(json => {
            const id = json.id
            const localurl = `/storage/${id}`
            const url = `${document.location.host}/storage/${id}`;

            const block = `
            <div class = "preview">
                <div class="preview_image">
                    <img src="${localurl}"></img>
                </div>
                <div class="preview_fields">
                    <div class="preview_links">
                        <div class="preview-link tm-preview-link_direct">
                            <p>url: ${url}</p>
                        </div>
                        <div class="tm-preview-link tm-preview-link_html">
                            <p>HTML: &#60img src="${url}"&#62&#60/img&#62</p>
                        <div class="tm-preview-link tm-preview-link_markdown">
                            <p>Markdown: ![](${url})</p>
                        </div>
                    </div>
                </div>
            </div>
            `

            const container_inner = document.querySelector('.container-inner')
            container_inner.insertAdjacentHTML('beforeend', block);
        })
        fileForm.reset()
    })
})

// аааааааааааааа
// тупо минус три дня 
function responseFile() {
    const data = new FormData(fileForm);
    data.append('file', fileForm)
    return fetch('/load-to-storage', {
        method: 'post',
        body: data
    }).catch(console.error)
}