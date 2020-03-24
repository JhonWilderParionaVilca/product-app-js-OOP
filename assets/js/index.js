"use strict";
/*------------------------------/*
      $CLASS PRODUCT
/*------------------------------*/

class Product {
  constructor(name, price, year) {
    this.name = name;
    this.price = price;
    this.year = year;
  }
}

/*------------------------------/*
    $CLASS UI
/*------------------------------*/

class UI {
  showProduct(productObject) {
    const listProduct = document.getElementById("list-products");
    const element = document.createElement("tr");
    element.className = "table-light";
    element.innerHTML = `
      <th scope="row">${productObject.name}</th>
      <td>${productObject.price}</td>
      <td>${productObject.year}</td>
      <td>
      <button type="button" class="btn btn-danger" name="delete"><span class="fas fa-trash-alt"></span> Eliminar</button>
      </td>
    `;
    listProduct.appendChild(element);
    this.showMsg("Producto Agregado Satisfactoriamente", "success");
    this.resetForm();
  }
  // comparar cuando demos click en el boton y eliminar su padre
  deleteProduct(element) {
    if (element.name === "delete") {
      element.parentElement.parentElement.remove();
      this.showMsg("Producto Eliminado Satisfactoriamente", "success");
    }
  }

  resetForm() {
    document.getElementById("product-form").reset();
  }

  showMsg(msg, classBosstrap) {
    // crear el mensaje
    const div = document.createElement("div");
    div.className = `alert alert-${classBosstrap}`;
    div.appendChild(document.createTextNode(msg));
    // mostrar
    const main = document.getElementById("main");
    const app = document.getElementById("App");
    main.insertBefore(div, app);

    //desaprecer
    setTimeout(() => {
      document.querySelector(".alert").remove();
    }, 1500);
  }
}

/*------------------------------/*
    $CREATE PRODUCT
/*------------------------------*/

document.getElementById("product-form").addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("product-name").value;
  const price = document.getElementById("product-price").value;
  const year = document.getElementById("product-year").value;

  const ui = new UI();
  // validar que los campos esten llenados de manera correcta

  // crear un nuevo producto
  const newProduct = new Product(name, price, year);

  // listar producto
  ui.showProduct(newProduct);
});

/*------------------------------/*
    $DELETE PRODUCT
/*------------------------------*/
const listProduct = document.getElementById("list-products");
listProduct.addEventListener("click", (event) => {
  const ui = new UI();
  ui.deleteProduct(event.target);
});
