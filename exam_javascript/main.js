
let form = document.getElementById('f1');
let input = document.getElementById('input');
let buttonSortByName = document.getElementById('sortByName');
let buttonSortByValue = document.getElementById('sortByValue');
let buttonDelete = document.getElementById('delete');
let text = document.getElementById('text');
let listSortedFirst = document.getElementById('listSortedFirst');
let listSortedSecond = document.getElementById('listSortedSecond')

let arrayNameValue = [];
console.log(arrayNameValue);

form.onsubmit = function(ev) {
    ev.preventDefault();
    let nameValue = input.value;
    if (!!nameValue.match(/^\s*\w+\s*=\s*\w+\s*$/) || !!nameValue.match(/^\s*\d+\s*=\s*\d+\s*$/)){
        let nameValuePair = nameValue.split('=');
        let nameValuePairMaped = nameValuePair.map(value => value.trim());
        let name = nameValuePairMaped[0];
        if (!isNaN(name)) {
            name = +name;
        }
        let value = nameValuePairMaped[1];
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


buttonSortByName.onclick=function(){

    let arraySortedName=arrayNameValue.sort((a, b) => {
        if (!isNaN (a.name) && !isNaN (b.name)) {
            return a.name - b.name;
        } else {
            return a.name.length - b.name.length;
        }
    });
    let ullNameSortedName = document.createElement('ul');
    for (let item of arraySortedName) {
        let liName = document.createElement('li');
        liName.innerText = `${item.name}=${item.value}`;
        ullNameSortedName.appendChild(liName);
    }
    listSortedFirst.appendChild(ullNameSortedName)
};

buttonSortByValue.addEventListener('click', function(){

    let arraySortedValue=arrayNameValue.sort((a, b) => {
        if (!isNaN (a.value) && !isNaN (b.value)) {
            return a.value - b.value;
        } else {
            return a.value.length - b.value.length;
        }
    });

    let ulNameSortedValue = document.createElement('ul');
    for (let item of arraySortedValue) {
        let liValue = document.createElement('li');
        liValue.innerText = `${item.name}=${item.value}`;
        ulNameSortedValue.appendChild(liValue);
    }
    listSortedSecond.appendChild(ulNameSortedValue)

});

buttonDelete.addEventListener('click', function() {
    text.remove()
    listSortedFirst.remove()
    listSortedSecond.remove()
});







