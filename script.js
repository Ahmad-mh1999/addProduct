
function product() {
    const product = localStorage.getItem("product");
    // check if local sotrage has the todo key
    if (product) {
        // parse it to be as an array and return it
        return JSON.parse(product);
    } else {
        // store a new array and convert it into string
        localStorage.setItem("product", JSON.stringify([]));
        return [];
    }
}
product();
function displayProduct() {
    // ge the todo
    // const product = getProduct();
    const product1 = product();
    // loop in each item
    console.log(product1);
    product1.forEach(function (item, index) {
        // get todolist ul
        const products = document.querySelector(".products");
        console.log(typeof item);
        // create a new li
        const child = document.createElement("div");
        // give the created li classes
        child.className =
            "col-md-6 col-lg-6 col-xl-4";
        child.innerHTML = 
            `
            
            <div class="card text-black  m-3 " >`+
                                `<i class="fab fa-apple fa-lg pt-3 pb-1 px-3"></i>
                                <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/3.webp"
                                    class="card-img-top"  />
                                    <div class="card-body">
                                    <div class="text-center">
                                    <h5 class="card-title">`+item.title+`</h5>
                                    <p class="text-muted mb-4">`+item.description+`</p>
                                        </div>
                                        <div>
                                        <div class="d-flex justify-content-between">
                                            <span>Rating : </span><span>`+item.rating+`</span>
                                        </div>
                                        <div class="d-flex justify-content-between">
                                            <span>Category : </span><span>`+item.category+`</span>
                                        </div>
                                        <div class="d-flex justify-content-between">
                                            <span>Stock : </span><span>`+item.stock+`</span>
                                        </div>
                                    </div>
                                    <div class="d-flex justify-content-between total font-weight-bold mt-4">`+
                                    `<span>Price :</span><span>`+item.price+`</span>`+
                                    `</div>
                                    </div>
                                    <div class="mx-auto mb-3">
                                    <button class="btn btn-sm btn-danger " onclick="deleteProduct(${index})">Delete This Product</button>
                                    </div>
                                    
                                </div>
            `
        products.append(child);
    });
}
function addProduct() {
    const product1 = product();
    let productObj = {
        title:document.querySelector("#product-name").value ,
        description:document.querySelector("#product-des").value,
        rating:document.querySelector("#product-rating").value,
        category:document.querySelector("#product-category").value,
        stock:document.querySelector("#product-stock").value,
        price:document.querySelector("#product-price").value
    };
    
    product1.push(productObj);
    localStorage.setItem("product", JSON.stringify(product1));
    
    
    const products = document.querySelector(".products");
    products.innerHTML = "";
    displayProduct();
    document.querySelector("#product-name").value = "";
    document.querySelector("#product-des").value = "";
    document.querySelector("#product-rating").value = "";
    document.querySelector("#product-category").value = "";
    document.querySelector("#product-stock").value = "";
    document.querySelector("#product-price").value = "";
}
function deletAll() {
    localStorage.clear();
    window.location.reload();
}
function deleteProduct(indexFromArray) {
    const product1 = product();

    const newProduct = product1.filter(function (item, indexFromFilterFunction) {
        return indexFromArray != indexFromFilterFunction;
    });

    localStorage.setItem("product", JSON.stringify(newProduct));

    const products = document.querySelector(".products");
    products.innerHTML = "";
    displayProduct();
}
displayProduct();
