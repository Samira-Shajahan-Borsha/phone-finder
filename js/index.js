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
    phoneContainer.textContent = '';
    const phoneDetailContainer = document.getElementById('phone-detail-container');
    phoneDetailContainer.textContent = '';
    const first20phones = phones.slice(0, 20);
    // console.log(first20phones);

    first20phones.forEach(phone => {
        // console.log(phone.slug);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <div class="card h-100 align-items-center py-3 shadow-sm">
                <img src="${phone.image}" class="card-img-top" style="width: 180px" alt="...">
                <div class="card-body text-center">
                    <h5 class="card-title">${phone.phone_name}</h5>
                    <p class="card-text">${phone.brand}</p>
                    <button onclick="loadPhoneDetail('${phone.slug}')" type="button" class="btn btn-outline-dark">Explore</button>
                </div>
            </div>
        `;
        phoneContainer.appendChild(div);
    });

    if (phones.length > 20) {
        // console.log(phones);
        const restPhones = phones.slice(20);
        console.log(restPhones);
        restPhones.forEach(phone => {
            console.log(phone);

        });
        // const div = document.getElementById('div');

    }
}

const loadPhoneDetail = phoneId => {
    console.log(phoneId);
    const url = `https://openapi.programming-hero.com/api/phone/${phoneId}`;
    console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displayPhoneDetail(data.data));
}

const displayPhoneDetail = phone => {
    console.log(phone);
    const phoneDetailContainer = document.getElementById('phone-detail-container');
    phoneDetailContainer.textContent = '';
    const sensors = phone.mainFeatures.sensors;
    const div = document.createElement('div');
    div.className = "card py-3 px-2";
    div.setAttribute('style', 'width: 400px');
    div.innerHTML = `
        <div class="text-center">
            <img src="${phone.image}" class="card-img-top" alt="..." style="width: 180px">
        </div>
        <div class="card-body">
            <h5 class="card-title">${phone.name}</h5>
            <p class="card-text">${phone.releaseDate ? phone.releaseDate : 'No release found'}</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item"><span class="text-danger">Display Size: </span> ${phone.mainFeatures.displaySize}</li>
            <li class="list-group-item"><span class="text-danger">Chipset: </span> ${phone.mainFeatures.chipSet}</li>
            <li class="list-group-item"><span class="text-danger">Memory: </span> ${phone.mainFeatures.memory}</li>
            <li class="list-group-item"><span class="text-danger">Storage: </span> ${phone.mainFeatures.storage}</li>
            <li class="list-group-item"><span class="text-danger">Sensors: </span>
                <div class="d-flex flex-column">
                    <div>${sensors[0]}</div> 
                    <div>${sensors[1]}</div> 
                    <div>${sensors[2]}</div> 
                    <div>${sensors[3]}</div> 
                    <div>${sensors[4]}</div> 
                    <div>${sensors[5] ? sensors[5] : ''}</div> 
                    <div>${sensors[6] ? sensors[6] : ''}</div> 
                </div> 
            </li>
            <li class="list-group-item"><span class="text-danger">Other Features: </span>
                <div class="d-flex flex-column">
                    <div>Bluetooth: ${phone?.others?.Bluetooth ? phone.others.Bluetooth : 'N/A'}</div> 
                    <div>GPS: ${phone?.others?.GPS ? phone.others.Bluetooth : 'N/A'}</div> 
                    <div>NFC: ${phone?.others?.NFC ? phone.others.Bluetooth : 'N/A'}</div> 
                    <div>Radio: ${phone?.others?.Radio ? phone.others.Bluetooth : 'N/A'}</div> 
                    <div>USB: ${phone?.others?.USB ? phone.others.Bluetooth : 'N/A'}</div> 
                    <div>WLAN: ${phone?.others?.WLAN ? phone.others.Bluetooth : 'N/A'}</div> 
                </div>
            </li>
        </ul>
    `;
    phoneDetailContainer.appendChild(div);
}