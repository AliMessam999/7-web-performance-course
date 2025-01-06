// products(source, alt, )
let products = {
    
}
function displayAllProducts()
{
    const container = document.querySelector('#best-sellers-section .product-slider .container');
    
    products.forEach(product => {
        // Create the main product div
        const productElement = document.createElement('div');
        productElement.classList.add('product');

        // Create the product picture div
        const pictureDiv = document.createElement('div');
        pictureDiv.classList.add('product-picture');
        const img = document.createElement('img');
        img.src = product.image;
        img.alt = `product: ${product.title}`;
        img.loading="lazy";
        img.width=155;
        pictureDiv.appendChild(img);

        // Create the product info div
        const infoDiv = document.createElement('div');
        infoDiv.classList.add('product-info');

        const category = document.createElement('h5');
        category.classList.add('categories');
        category.textContent = product.category;

        const title = document.createElement('h4');
        title.classList.add('title');
        title.textContent = product.title;

        const price = document.createElement('h3');
        price.classList.add('price');
        const priceSpan = document.createElement('span');
        priceSpan.textContent = `US$ ${product.price}`;
        price.appendChild(priceSpan);

        const button = document.createElement('button');
        button.textContent = 'Add to bag';

        // Append elements to the product info div
        infoDiv.appendChild(category);
        infoDiv.appendChild(title);
        infoDiv.appendChild(price);
        infoDiv.appendChild(button);

        // Append picture and info divs to the main product element
        productElement.appendChild(pictureDiv);
        productElement.appendChild(infoDiv);

        // Append the new product element to the container
        container.appendChild(productElement);
    });
}






{/*
    <div class="product new">
        <div class="product-picture">
            <img width="155px" height="155px" src="images/vr1.webp" alt="product: Penom Case">
        </div>
        <div class="product-info">
            <h5 class="categories">Headsets, Apple</h5>
            <h4 class="title">Apple Headset</h4>
            <h3 class="price">
                <span>US$ 450.00</span>
                </h3>
            <button>Add to bag</button>
        </div>
    </div>
*/}