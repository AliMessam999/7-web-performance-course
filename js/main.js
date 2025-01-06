// function showTopBar(){
//     let country = "France";
//     let vat = 20;
//     setTimeout(() => {
//         document.querySelector("section.country-bar")
//         .innerHTML = `<p>Orders to <b>${country}</b> are subject to <b>${vat}%</b> VAT</p>`
//         document.querySelector("section.country-bar")
//         .classList.remove('hidden')
//     }, 1000);
// }



// showTopBar();


function showTopBar() {
    let country = "France";
    let vat = 20;
    setTimeout(() => {
        const section = document.querySelector("section.country-bar");
        
        // Create content dynamically instead of using innerHTML
        const paragraph = document.createElement('p');
        const strongCountry = document.createElement('b');
        strongCountry.textContent = country;
        const strongVat = document.createElement('b');
        strongVat.textContent = `${vat}%`;

        paragraph.appendChild(document.createTextNode('Orders to '));
        paragraph.appendChild(strongCountry);
        paragraph.appendChild(document.createTextNode(' are subject to '));
        paragraph.appendChild(strongVat);
        paragraph.appendChild(document.createTextNode(' VAT'));

        section.appendChild(paragraph);
        section.classList.remove('hidden');
    }, 1000);
}




