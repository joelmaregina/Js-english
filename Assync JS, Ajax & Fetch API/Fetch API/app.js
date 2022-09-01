document.getElementById('button1').addEventListener('click', getText);

document.getElementById('button2').addEventListener('click', getJson);

document.getElementById('button3').addEventListener('click', getExternal);

// Get local text data
function getText() {
    fetch('text.txt')
        .then (res => res.text())
        .then(data => document.getElementById('output').innerHTML = data)
        .catch(err => console.log(err));
}

// Get local JSON data
function getJson() {
    fetch('posts.json')
    .then(res => res.json())
    .then(data => {
        let output = '';
        data.forEach(post => {
            output += `
                <ul>
                    <li>Title: ${post.title}</li>
                    <li> Body: ${post.body}</li>
                </ul>
                `
        });
        document.getElementById('output').innerHTML = output;
    })
    .catch(err => console.log(err));
}

// Get from external API
function getExternal() {
    fetch('https://api.github.com/users')
    .then(res => res.json())
    .then( data => {
        let output = '';
        data.forEach(user => {
            output += `
                <ul>
                    <li>User: ${user.login}</li>
                    <li>Link: ${user.html_url}</li>
                </ul>
                `
        });
        document.getElementById('output').innerHTML = output;
    })
    .catch(err => console.log(err));
}