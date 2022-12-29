const searchPhone = () => {
    const searchField = document.getElementById('search-field');
    const searchFieldText = searchField.value;
    // console.log(searchFieldText);

    //load data
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchFieldText}`;

    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchPhone(data.data));

    searchField.value = '';
}

const displaySearchPhone = phones => {
    console.log(phones);
    phones.forEach(phone => {
        console.log(phone);
    });
}