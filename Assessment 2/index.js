var from = document.getElementById('form')
form.addEventListener('submit', function(e){
    e.preventDefault()

    var title = document.getElementById('title').value
    var body = document.getElementById('body').value

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: title,
            body: body,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
    })
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data)
    })
})