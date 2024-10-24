/**
 * Esocogemos que componetnes queremos mostrar por pantalla.
 * 
*/
document.addEventListener('DOMContentLoaded', function () {
    setTimeout(() => {
        var selectOptions = document.querySelectorAll(`[data-select=web]`);
        selectOptions.forEach(function (selectOption) {
            selectOption.addEventListener('change', function () {
                document.querySelector('.introduction').classList.add('d-none')
                var elements = document.querySelectorAll(`[data-department=web]`)
                elements.forEach(function (e) {
                    if (!e.classList.contains('d-none')) {
                        e.classList.add('d-none')
                    }
                });
                var optionChoose = selectOption.value;
                var dataChoose = document.querySelector(`[data-option=${optionChoose}]`)
                dataChoose.classList.remove('d-none');
            });
        });
    }, 100);

});

/**
 * Con esta función podremos descargar archivos
 */
function downloadStyle() {
    var idUniversity = document.querySelector('select[name="university"]').value;
    var selectedOption = document.querySelector('select[name="university"] option:checked');
    var codga = selectedOption.getAttribute('data-codga');

    if (idUniversity) {
        /**
         * Si el @id es #download_css
        */
        var cssLink = document.querySelector('#download_css');
        cssLink.download = `style-general-${idUniversity}.css`;
        cssLink.href = document.querySelector('link[data-style="general"]').href;
        /**
         * Si el @id es #download_fonts
        */
        var fontsLink = document.querySelector('#download_fonts');
        fontsLink.href = `/assets/fonts/${codga}.zip`;
    } else {
        alert('You need to choose an option');
    }
}

/**
 * Cambia el año automaticamente para el copyright 
 */

var copyright = new Date();
var copy = copyright.getFullYear();
document.querySelector('.copy').innerHTML = `&copy; ${copy} Global Alumni`;