// let textArea = document.querySelector('.textarea');
//
// textArea.innerHTML = '<h2>THis is MEEEE!</h2> <p>This is also me</p>';

let numberFieldData = document.querySelector('#number');

async function fetchData(){
    let textArea = document.querySelector('.textarea');
    textArea.innerHTML = `<h4>Loading</h4>`;
    let fetchedData = await axios.get(`http://numbersapi.com/${numberFieldData.value}`);
    textArea.innerHTML = `<p>${fetchedData.data}</p>`;
}



