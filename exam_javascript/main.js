
let form = document.getElementById('f1');
let input = document.getElementById('input');
let buttonSortByName = document.getElementById('sortByName');
let buttonSortByValue = document.getElementById('sortByValue');
let buttonDelete = document.getElementById('delete');
let text = document.getElementById('text');
let listSorted = document.getElementById('listSorted');

let arrayNameValue = [];
console.log(arrayNameValue);

form.onsubmit = function(ev) {
    ev.preventDefault();
    let nameValue = input.value.trim();
    if (!!nameValue.match(/^\s*\w+\s*=\s*\w+\s*$/) || !!nameValue.match(/^\s*\d+\s*=\s*\d+\s*$/)){
        let nameValuePair = nameValue.split('=');
        nameValuePair = nameValuePair.map(s => s.trim());
        let name = nameValuePair[0];
        if (!isNaN(name)) {
            name = +name;
        }
        let value = nameValuePair[1];
        if (!isNaN(value)) {
            value = +value;
        }
        arrayNameValue.push({name: name, value: value});
        let divObject = document.createElement('div');
        divObject.innerText = `${name}=${value}`;
        text.appendChild(divObject);
    } else {
        let pError = document.createElement('p');
        pError.innerText = `this is error`;
        text.appendChild(pError);
    }
};

buttonSortByName.onclick = function() {
    arrayNameValue.sort((a, b) => {
        if (!isNaN(a.name) && !isNaN(b.name)) {
            return a.name - b.name;
        } else {
            return a.name.length - b.name.length;
        }
    });

    let ullNameSorted = document.createElement('ul');
    for (let item of arrayNameValue) {
        let li = document.createElement('li');
        li.innerText = `${item.name}=${item.value}`;
        ullNameSorted.appendChild(li);
    }
    listSorted.appendChild(ullNameSorted)
};


buttonSortByValue.addEventListener('click', function(){

    arrayNameValue.sort((a, b) => {
        if (!isNaN(a.value) && !isNaN(b.value)) {
            return a.value - b.value;
        } else {
            return a.value.length - b.value.length;
        }
    });

    let ullNameSorted = document.createElement('ul');
    for (let item of arrayNameValue) {
        let li = document.createElement('li');
        li.innerText = `${item.name}=${item.value}`;
        ullNameSorted.appendChild(li);
    }
    listSorted.appendChild(ullNameSorted)

});

buttonDelete.addEventListener('click', function() {
    arrayNameValue = [];
    text.remove()
    listSorted.remove()
});








