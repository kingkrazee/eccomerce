let items = JSON.parse(localStorage.getItem('items'));
let purchased = JSON.parse(localStorage.getItem('cart'))||[];
let main = document.getElementById('thecart')
let btn = document.querySelector('button')
    purchased.forEach(item => {
        main.innerHTML += `<tr>
                    <td><img src="${item.image}" alt="${item.name}"></td>
                    <td${item.name}<td/>
                    <td>${item.price}</td>
                    </tr>
                            `;
});





// admin
function displayProducts(){
    let productsTableBody = document.getElementById('productsTableBody');
    productsTableBody.innerHTML = '';

    items.forEach((product, index) => {
        let row = `
        <tr>
            <td><img src="${product.image}" alt="${product.name}" class="img-thumbnail"></img></td>
            <td>${product.price.toFixed(2)}</td>
            <td>
               <button class="btn btn-info btn-sm" onclick="editProduct(${index})" id="edit-btn">Edit</button>
               <button class="btn btn-danger btn-sm" onclick="deleteProduct(${index})" id="edit-btn">Edit</button>
        </tr>
        `;
        productsTableBody.innerHTML += row;
    })
 }

 function deleteProduct(index){
    if (confirm('Are you sure you want to delete this product?')){
        items.slice(index,1);
        localStorage.setItem('items', JSON.stringify(items));
        displayProducts();
    }
 }

 function editProduct(index){
    const product = items[index];
    document.getElementById('editProductName').value = product.name;
    document.getElementById('editProductPrice').value = product.price;
    document.getElementById('editProductImage').value = product.image;

    document.getElementById('editProductForm').onsubmit = function (e) {
        e.preventDefault();
        product.name = document.getElementById('editProductName').value;
        product.price = parseFloat(document.getElementById('editProductPrice').value);
        product.image = document.getElementById('editProductImage').value;

        localStorage.setItems('items', JSON.stringify(items));
        displayProducts();
        const editProductModal = bootstrap.editProductModal(document.getElementById('editProductModal'));
        editProductModal.hide();
    };
    const editProductModal = new bootstrap.Modal(document.getElementById('editProductModal'));

    editProductModal.addEventlistener('hidden.bs.modal', function (){
        document.getElementById('editProductForm').reset();
        document.getElementById('editProductForm').onsubmit = null;
    });
 }

document.getElementById('addProductBtn').addEventListener('click',function(){
    const addProductModal = new bootstarp.Modal(document.getElementById('addProductModal'));
    addProductModal.show();

    document.getElementById('addProductForm').onsubmit = function (e){
        e.preventDefault();
        const newProductId = new CreateItem(
            newProductId,
            document.getElementById('productName').value,
            'Uncategorized',
            document.getElementById('productImage').value,
            '',
            parseFloat(document.getElementById('productPrice').value),
            1
        );
        items.push(newProductId);

        localStorage.setItem('items', JSON.stringify(items));

        displayProducts();

        addProductModal.hide();

        document.getElementById('addProductForm').reset();
    }
})