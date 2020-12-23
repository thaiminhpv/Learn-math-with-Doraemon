// JavaScript Document
//[].map.call(document.querySelectorAll('.mdc-text-field'), function (el) {
//    return new mdc.textField.MDCTextField(el);
//});
////animate all button (ripple effect)
[].map.call(document.querySelectorAll('.mdc-button'), function (el) {
   return new mdc.ripple.MDCRipple(el);
});
////animate all combobox (menus select)
//[].map.call(document.querySelectorAll('.mdc-select'), function (el) {
//    return new mdc.select.MDCSelect(el);
//});
// new mdc.ripple.MDCRipple(document.querySelector('.mdc-button'));
const snackbar = new mdc.snackbar.MDCSnackbar(document.querySelector('.mdc-snackbar'));