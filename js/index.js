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
    // console.log(phones);
    const phoneContainer = document.getElementById('phone-container');
    const first20phones = phones.slice(0, 20);
    console.log(first20phones);

    first20phones.forEach(phone => {
        console.log(phone);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <div class="card h-100 align-items-center py-3 shadow-sm">
                <img src="${phone.image}" class="card-img-top" style="width: 180px" alt="...">
                <div class="card-body text-center">
                    <h5 class="card-title">${phone.phone_name}</h5>
                    <p class="card-text">${phone.brand}</p>
                    <button type="button" class="btn btn-outline-dark">Explore</button>
                </div>
            </div>
        `;
        phoneContainer.appendChild(div);
    });

    /* if (phones.length > 20) {
        // console.log(phones);
        const restPhones = phones.slice(20);
        console.log(restPhones);
        restPhones.forEach(phone => {
            console.log(phone);
            
        });
        // const div = document.getElementById('div');

    } */
}