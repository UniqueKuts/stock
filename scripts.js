document.getElementById("inventoryForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    const itemName = formData.get("itemName");
    const quantity = formData.get("quantity");

    google.script.run.addToInventory(itemName, quantity);

    // Optional: Clear form fields after submission
    this.reset();
});
