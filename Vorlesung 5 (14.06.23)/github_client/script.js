//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

function getRepos() {
    const token = document.getElementById('password').value;

    console.log(token);

    fetch('https://api.github.com/user/repos', {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    })
        .then(res => res.json())
        .then(res => {
            res.forEach(element => {
                var ul = document.getElementById('repos-list');
                var li = document.createElement('li');
                li.innerText = element.name;
                ul.appendChild(li);
            });
        })
        
    }

