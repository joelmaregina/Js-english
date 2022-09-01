document.getElementById('button1').addEventListener('click', loadCostumer);

document.getElementById('button2').addEventListener('click', loadCostumers);

// Load Single Costumer
function loadCostumer(e){
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'costumer.json', true);

    xhr.onload = function(){
        if(xhr.status === 200){
            // console.log(this.responseText);
            const costumer = JSON.parse(this.responseText);

            const output = `
                <ul>
                    <li>ID: ${costumer.id}</li>
                    <li>Name: ${costumer.name}</li>
                    <li>Company: ${costumer.company}</li>
                    <li>${costumer.phone}</li>
                </ul>
                `;

                document.getElementById('costumer').innerHTML = output;

        }
    }

    xhr.send();
}

// Load Costumers
function loadCostumers(e){
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'costumers.json', true);

    xhr.onload = function(){
        if(xhr.status === 200){
            // console.log(this.responseText);
            const costumers = JSON.parse(this.responseText);

            let output = '';

            costumers.forEach(costumer => {
                output += `
                    <ul>
                        <li>ID: ${costumer.id}</li>
                        <li>Name: ${costumer.name}</li>
                        <li>Company: ${costumer.company}</li>
                        <li>${costumer.phone}</li>
                    </ul>
            `;
            });

            document.getElementById('costumers').innerHTML = output;

        }
    }

    xhr.send();
}