document.addEventListener('DOMContentLoaded', () => {
    
})

function responseFile(file) {
    const data = new FormData();
    data.append('file', file)
    return fetch('/load-to-storage', {
        method: 'post',
        body: file
    }).catch(console.error)
}