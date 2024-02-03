// modal.js

document.addEventListener("DOMContentLoaded", function () {
  // Get the modal elements
  var modalBackdrop = document.querySelector(".modal-backdrop");
  var closeButton = document.querySelector(".close-button");

  // Show modal function
  function showModal() {
    modalBackdrop.style.display = "block";
  }

  // Hide modal function
  function hideModal() {
    modalBackdrop.style.display = "none";
  }

  // Attach event listeners to open and close the modal
  document.querySelector(".btn-order").addEventListener("click", showModal);
  closeButton.addEventListener("click", hideModal);
});
