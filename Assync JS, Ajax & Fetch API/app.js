document.getElementById('button'). addEventListener('click', loadData);

function loadData(){
    // Create an XHR Object
    const xhr = new XMLHttpRequest();

    // console.log('ReadyState', xhr.readyState); // ReadyState 0
    
    // OPEN
    xhr.open('GET', 'data.txt', true);

    // console.log('ReadyState', xhr.readyState); // ReadyState 1

    // Optional (to spinners or loaders)
    xhr.onprogress = function(){
        console.log('ReadyState', xhr.readyState); //ReadyState 3
    }

    xhr.onload = function () {
        console.log('ReadyState', xhr.readyState); // ReadyState 4
        if(this.status === 200){
            console.log(this.responseText);
            document.getElementById('output').innerHTML = `<h1> ${this.responseText} </h1>`;
        }
    }

    // THE OLD WAY OF DOING IT ABOVE
    // xhr.onreadystatechange = function(){
    //     console.log('ReadyState', xhr.readyState); // ReadyState 1 until 4
    //     if(this.status === 200 && this.readyState === 4){
    //         console.log(this.responseText);
    //     }
    // }
    // In case something goes wrong
    xhr.onerror = function(){
        console.log('Request error...');
    }

    xhr.send();
}

// readyStatus Values:
// 0: request not initialized
// 1: server connection stablished
// 2: request received
// 3: processing request
// 4: request finished and response is ready

