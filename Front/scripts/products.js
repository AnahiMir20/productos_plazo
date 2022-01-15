var productSKU
var plazos

async function getPlazos(){
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      fetch("http://localhost:3000/deadlines", requestOptions)
        .then(response => response.json())
        .then((result) => {
            console.log(result[0])
            plazos=result[0];
        })
        .catch(error => console.log('error', error));
}

async function getProducts() {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    fetch("http://localhost:3000/products", requestOptions)
        .then(response => response.json())
        .then(result => showProducts(result[0]))
        .catch(error => console.log('error', error));
}

function showProducts(products) {
    products.forEach(producto => {
        console.log(producto)


        let productox = `
    <div class="block product no-border z-depth-2-top z-depth-2--hover">
    <div class="block-image">
        <a href="#">
            <img src="img/play.jpg" class="img-center">
        </a>
        <span class="product-ribbon product-ribbon-right product-ribbon--style-1 bg-blue text-uppercase">New</span>
    </div>
    <div class="block-body text-center">
        <h3 class="heading heading-5 strong-600 text-capitalize">
            <a href="#">
               ${producto.name}
            </a>
        </h3>
        <p class="product-description">
            ${producto.description} $${producto.price} SKU:${producto.SKU}
        </p>
        <div class="product-buttons mt-4">
            <div class="row align-items-center"> 
            <div class="col-4">
            <button type="button"  onclick=editProduct(${producto.SKU}) class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Editar
        </button>
                </div>
                <div class="col-4">
                    <button type="button" onclick=deleteProduct(${producto.SKU}) class="btn btn-block btn-danger btn-circle btn-icon-left">
                        Eliminar
                    </button>
                </div>
                <div class="col-4">
                <button type="button"  onclick=seeProduct(${producto.SKU},"${producto.name}",${producto.price}) class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal2">
                Ver plazos
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>`;

        let productoHTML = document.createElement('div');
        // productoHTML.classList.add('contenedor-producto', 'col-xl-3', 'col-md-4', 'col-sm-6', 'Secondary')
        productoHTML.classList.add('col-md-6')

        productoHTML.innerHTML += productox;
        document.getElementById('productosInternos').appendChild(productoHTML);
    });
}


const editProduct = (id) => {
    productSKU = id;
}

async function actualizarProductoPut() {
    console.log(productSKU)
    editarPrecio = document.getElementById('editarPrecio').value;
    console.log(editarPrecio)
    if (editarPrecio) {
        console.log("editando")
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "SKU": productSKU,
            "price": editarPrecio
        });

        var requestOptions = {
            method: 'PUT',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:3000/products/update", requestOptions)
            .then(response => response.text())
            .then((result) => {
                console.log(result)
                alert("Actualizado")
                location.reload();
            })
            .catch(error => console.log('error', error));
    }
    else {
        alert("Favor de ingresar un numero valido")
        
    }
}

async function deleteProduct(SKU) {
    var requestOptions = {
        method: 'DELETE',
        redirect: 'follow'
    };

    fetch("http://localhost:3000/products/delete/" + SKU, requestOptions)
        .then(response => response.text())
        .then((result) => {
            console.log(result)
            location.reload();
        })
        .catch(error => console.log('error', error));
}

const seeProduct = (SKU, name, description, price) => {
    console.log(SKU, name, description, price)
    let plazoTML = document.createElement('ul');

    plazoTML.classList.add('list-group')
    plazos.forEach(plazo => {
        console.log(plazo)


        let plazox = `
        <li class="list-group-item">Semanas: ${plazo.weeks}</li>
   `;

        

        plazoTML.innerHTML += plazox;
        document.getElementById('listaPlazos').appendChild(plazoTML);
    });
    // productSKU = producto;
}

getProducts()
getPlazos()
