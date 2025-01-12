function getAll(){
    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(console.log);
}

function getSingle(){
    fetch('https://dummyjson.com/products/1')
    .then(res => res.json())
    .then(console.log);
}

function addProduct(){
    fetch('https://dummyjson.com/products/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: 'BMW Pencil',
          /* other product data */
        })
      })
      .then(res => res.json())
      .then(console.log);
}

function deleteAll(){
    fetch('https://dummyjson.com/products/1', {
        method: 'DELETE',
      })
      .then(res => res.json())
      .then(console.log);
}

function update(){
    fetch('https://dummyjson.com/products/1', {
        method: 'PUT', /* or PATCH */
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: 'iPhone Galaxy +1'
        })
      })
      .then(res => res.json())
      .then(console.log);
}