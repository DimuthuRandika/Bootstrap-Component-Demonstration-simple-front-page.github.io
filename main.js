// JavaScript to show toast
var showToastButton = document.getElementById('showToast');

showToastButton.addEventListener('click', function () {
  var toastContainer = document.querySelector('.toast-container');
  var toastElement = document.createElement('div');
  toastElement.classList.add('toast');
  toastElement.setAttribute('role', 'alert');
  toastElement.setAttribute('aria-live', 'assertive');
  toastElement.setAttribute('aria-atomic', 'true');
  toastElement.setAttribute('data-bs-autohide', 'true');
  toastElement.setAttribute('data-bs-delay', '5000');
  toastElement.innerHTML = `
    <div class="toast-header">
      <strong class="me-auto">Stacking Toast</strong>
      <small>Just now</small>
      <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
    <div class="toast-body">
      This is a stacking toast notification.
    </div>
  `;
  toastContainer.appendChild(toastElement);

  var toast = new bootstrap.Toast(toastElement);
  toast.show();
});

// JavaScript to show toast
var showToastButton = document.getElementById('showToast');
var toast = new bootstrap.Toast(document.querySelector('.toast'));

showToastButton.addEventListener('click', function () {
  toast.show();
});


// Initialize tooltips and popovers
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});

var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl);
});
   