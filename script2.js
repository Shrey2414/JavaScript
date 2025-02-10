function validateForm(){
    let productName = document.forms ['product-form'] ['product-name'].value;
    let productColor = document.forms ['product-form'] ['product-color'].value;
    let productPrice = document.forms ['product-form'] ['product-price'].value;
    let productImage = document.forms ['product-form'] ['product-image'].value;

    if (productName == ""){
        alert("Product name must be filled out");
        return false;
    }
    if (productColor == "other"){
        alert("Please select a color");
        return false;
    }
    if (productPrice == ""){
        alert("Product price must be filled out");
        return false;
    }
    if (productImage == ""){
        alert("Product image must be filled out");
        return false;
    }
    alert("Product added successfully!");
    return true;
}
function resetForm(){
    document.forms['product-form'].reset();
    alert("Form has been reset");
}