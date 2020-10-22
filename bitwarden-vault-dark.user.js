@-moz-document domain("bitwarden.com") {
/* Global */

body, body.layout_frontend {
    color: #bfbfbf;
    background: #1d1d1d;
	transition: background 0ms ease-in-out;
}

.bg-primary {
    background-color: #4a4a4a !important;
}

.card {
    background-color: #252525;
}

a, a:hover {
    color: #ffffff;
    text-decoration: none;
    background-color: transparent;
}

.table th, .table td {
    padding: 0.75rem;
    vertical-align: top;
    border-top: 1px solid #555;
}

.bg-success, .border-success {
    background-color: #3a3a3a !important;
	border-color: #535353 !important;
}

.table.table-list td small, .table.table-list td > .fa, .table.table-list td .icon {
    color: #a5a5a5;
}

.rounded, .table.table-list td.table-list-icon img, app-avatar img {
	filter: grayscale(1);
}

img.logo {
    filter: contrast(0);
}

/* Buttons */

.btn-primary, .swal2-popup .swal2-actions button.swal2-confirm {
	background-color: #101010;
    border-color: #101010;
}

.btn-primary:hover, .swal2-popup .swal2-actions button.swal2-confirm:hover, .btn-outline-primary:hover, .btn-outline-primary:not(:disabled):not(.disabled):active, .btn-outline-primary:not(:disabled):not(.disabled).active, .show > .btn-outline-primary.dropdown-toggle {
	background-color: #000000;
    border-color: #000000;
}

.btn-outline-primary:not(:disabled):not(.disabled):active:focus, .btn-outline-primary:not(:disabled):not(.disabled).active:focus, .show > .btn-outline-primary.dropdown-toggle:focus, .btn-outline-primary:focus, .btn-outline-primary.focus {
    box-shadow: 0 0 0 0.2rem rgb(80 80 80 / 50%);
}

.btn-outline-primary {
    color: #fff;
    border-color: #000000;
}

.btn-link {
	color: #ffffff;
}

.btn[class*="btn-outline-"]:not(:hover), .swal2-popup .swal2-actions button[class*="btn-outline-"]:not(:hover) {
	border-color: #1b1b1b;
    background-color: #1b1b1b;
}

.btn-outline-secondary:hover:not(:disabled), .swal2-popup .swal2-actions button.swal2-cancel:hover:not(:disabled) {
	border-color: #1b1b1b;
    background-color: #1b1b1b;
	color: #959595;
}

.btn-outline-secondary, .swal2-popup .swal2-actions button.swal2-cancel {
    color: #5d5d5d;
}

app-vault-groupings .card .card-body a, app-org-vault-groupings .card .card-body a {
    color: #fff;
}

app-vault-groupings .card li.active > a:first-of-type, app-vault-groupings .card li.active > div a:first-of-type, app-org-vault-groupings .card li.active > a:first-of-type, app-org-vault-groupings .card li.active > div a:first-of-type {
	color: #fff;
}

.btn-primary.disabled, .swal2-popup .swal2-actions button.disabled.swal2-confirm, .btn-primary:disabled, .swal2-popup .swal2-actions button.swal2-confirm:disabled {
	 background-color: #1b1b1b !important;
	border-color: #1b1b1b;
}


/* Modal */

.modal-open {
	background: #1d1d1d;
}

.modal-open .modal {
    overflow-x: hidden;
    overflow-y: auto;
    background: rgb(0 0 0 / 65%);
}

.modal.show .modal-dialog {
    box-shadow: 1px 1px 1000px #0d0d0d;
}

.modal-content {
      background-color: #232323;
}

.modal-body h3, .text-muted, .card-header small, .modal-header small {
    color: #d0d0d0 !important;
}

.modal-footer {
    background-color: #636363;
}

/* Forms */

.form-control {
    color: #dfdfdf;
    background-color: #565656;
	border: 1px solid #424242;
}

.form-control:focus {
    color: #a9b0b7;
    background-color: #626262;
    border-color: #424242;
    outline: 0;
    box-shadow: 0 0 0 0.05rem rgba(98, 98, 98, .25);
}

/* Change the white to any color ;) */
	input:-webkit-autofill,
	input:-webkit-autofill:hover, 
	input:-webkit-autofill:focus, 
	input:-webkit-autofill:active  {
		-webkit-box-shadow: 0 0 0 30px #626262 inset !important;
}

/* Dropdown */

.dropdown-menu {
	background-color: #595959;
	color: #fff;
}

.dropdown-item, .dropdown-item-text {
	color: #fff;
}

.dropdown-item:hover, .dropdown-item:focus {
	color: #ffffff;
    text-decoration: none;
    background-color: rgba(139, 139, 139, .72);
}
}