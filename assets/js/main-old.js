/*!
 * Copyright (c) 2025 Global Alumni
 * Este software se distribuye bajo la licencia MIT. Consulta el archivo LICENSE para más detalles.
 */

/**
 * @deprecated:
 *  @function departamentSelection()
 *  @function clear()
 *  @function loadDepartmentContent()
 */
/**
 * @function departamentSelection() recoge el valor del select con name departament y llamara 
 * a la @function clear() y dependiendo del valor llamara a la @function departamentWeb() o a la
 * @function departamentDelivery()
 *

function departamentSelection() {
    var departament = document.querySelector('select[name=departament]').value;
    if (departament) {
        switch (departament) {
            case 'web':
                clear();
                chooseDepartament('web.html', 'contentWeb');
                break;
            case 'delivery':
                clear();
                chooseDepartament('delivery.html', 'contentDelivery');
                break;
            default:
                break;
        }
    }
}

/**
 * @function clear() elimina el contendio de div con clase content
 *
function clear() {
    document.querySelector('.content').innerHTML = '';
}

/**
 * @function loadDepartmentContent carga el contenido de una página HTML y lo añade a un div con el ID especificado
 * @param {string} pageName - El nombre de la página HTML a cargar (por ejemplo, 'web.html' o 'delivery.html').
 * @param {string} divId - El ID del div donde se añadirá el contenido.
 *
function chooseDepartament(pageName, divId) {
    var newDiv = document.createElement('div');
    newDiv.id = divId;
    var contentContainer = document.querySelector('.content');
    contentContainer.appendChild(newDiv);

    fetch(`departament/${pageName}`)
        .then(response => response.text())
        .then(data => {
            document.getElementById(divId).innerHTML = data;
        })
        .catch(error => console.error('Error al cargar el archivo', error));
}

/**
 * Cuando se recargue la página el select volverá a su posición original y no tendra ningun valor.
 *
document.addEventListener("DOMContentLoaded", function () {
    var departamentoSelect = document.getElementsByName("departament")[0];
    departamentoSelect.value = "";
});

/**
 * Esocogemos que opción queremos que nos salga por pantalla
*
var departament = document.querySelector('select[name="departament"]');
departament.addEventListener('change', function () {
    var departamentValue = departament.value;
    if (departamentValue) {
        setTimeout(() => {
            var selectOptions = document.querySelectorAll(`[data-select=${departamentValue}]`);
            selectOptions.forEach(function (selectOption) {
                selectOption.addEventListener('change', function () {
                    document.querySelector('.introduction').classList.add('d-none')
                    var elements = document.querySelectorAll(`[data-department=${departamentValue}]`)
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
    } else {
        alert('No hay valor');
    }
});*/


