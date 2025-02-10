function confirmDelete() {
    let productSelect = document.getElementById("productSelect");
    let selectedProduct = productSelect.options[productSelect.selectedIndex].text;
    
    if (selectedProduct === "Select a product") {
        alert("Please select a product to delete");
        return false;
    }
    let confirmation = confirm("Are you sure you want to delete " + selectedProduct + "?");
    if (confirmation) {
        alert(selectedProduct + " has been deleted");
        productSelect.selectedIndex = 0;
    }
    return false;
}