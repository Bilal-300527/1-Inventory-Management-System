import supabase from "./credential.js";
// ================= Get elements =================
const purchaseProduct = document.getElementById("purchaseProduct");
const purchaseQty = document.getElementById("purchaseQty");
const purchasePrice = document.getElementById("purchasePrice");
const purchaseTotal = document.getElementById("purchaseTotal");
const purchaseSaveBtn = document.getElementById("purchaseSaveBtn");

// purchaseTotal.value = purchaseQty.value * purchasePrice.value;

// ================= Save purchase =================
purchaseSaveBtn.onclick = async () => {
  // click hote hi button ka text badlo aur disable kar do
  purchaseSaveBtn.innerHTML = "Saving...";
  purchaseSaveBtn.disabled = true;

  console.log(purchaseProduct.value);
  console.log(purchaseQty.value);
  console.log(purchasePrice.value);

  const obj = {
    product_name: purchaseProduct.value,
    quantity: purchaseQty.value,
    price: purchasePrice.value,
  };

  const { data, error } = await supabase.from("purchases").insert(obj);
  console.log(data);

  // function ke akhir me button wapis theek
  purchaseSaveBtn.innerHTML = "Save purchase";
  purchaseSaveBtn.disabled = false;
};
