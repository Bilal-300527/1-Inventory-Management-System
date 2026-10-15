import supabase from "./credential.js";
import { validation } from "./validation.js";

// Sidebar navigation is in common.js

// ================= Get elements =================
const sellCustomer = document.getElementById("sellCustomer");
const sellProduct = document.getElementById("sellProduct");
const sellQty = document.getElementById("sellQty");
const sellClearBtn = document.getElementById("sellClearBtn");
const sellSaveBtn = document.getElementById("sellSaveBtn");
const sellTableBody = document.getElementById("sellTableBody");


// ================= Save sale =================
sellSaveBtn.onclick = async () => {
  // customer ka naam name field ki tarah check hoga
  const validateCustomer = validation(sellCustomer.value, false, false, false);
  if (validateCustomer === false) {
    return;
  }

  // click hote hi button ka text badlo aur disable kar do
  sellSaveBtn.innerHTML = "Saving...";
  sellSaveBtn.disabled = true;

 

  // function ke akhir me button wapis theek
  sellSaveBtn.innerHTML = "Save sale";
  sellSaveBtn.disabled = false;
};