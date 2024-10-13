const products = [
    { id: 1, name: "SF90", category: "Spider", price: 423000, rating: 5 },
    { id: 2, name: "296", category: "GTB", price: 315000, rating: 3 },
    { id: 3, name: "296", category: "GTS", price: 320000, rating: 3 },
    { id: 4, name: "12 Cilindri", category: "Classic", price: 387000, rating: 5 },
    { id: 5, name: "12 Cilindri", category: "Spider", price: 427000, rating: 5 },
    { id: 6, name: "Purosangue", category: "SUV", price: 384000, rating: 2 },
    { id: 7, name: "Roma", category: "Classic", price: 246000, rating: 3 },
    { id: 8, name: "Roma", category: "Spider", price: 255000, rating: 4 },
    { id: 9, name: "812", category: "Competizione", price: 491000, rating: 5 }];

function displayProducts(productsToShow) {
    const productGrid = document.querySelector('.product-grid');
    productGrid.innerHTML = '';

    productsToShow.forEach(product => {
        const stars = '✪'.repeat(product.rating);

        const productElement = document.createElement('div');
        productElement.className = 'product-item';
        productElement.innerHTML = 
    '<img src="' + product.id + '.Avif" alt="' + product.name + '">' +
    '<h3>' + product.name + '</h3>' +
    '<p class="category">' + product.category + '</p>' +
    '<p class="price">$' + product.price.toLocaleString() + '</p>' +
    '<div class="rating">' + stars + '</div>' +
    '<button class="add-to-cart">&#128230;</button>';
        productGrid.appendChild(productElement);});}

        function searchProducts() {
            const searchTerm = document.getElementById('search-input').value.toLowerCase();
            const filteredProducts = products.filter(product => 
                product.name.toLowerCase().includes(searchTerm) ||
                product.category.toLowerCase().includes(searchTerm)
            );
            displayProducts(filteredProducts);
        }
        

document.getElementById('search-input').addEventListener('input', searchProducts);
displayProducts(products);