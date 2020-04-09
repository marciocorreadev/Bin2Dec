var BINARIO = (function () {
    ui = {
        binario: document.querySelector('#binario'),
        resultado: document.querySelector('#resultado'),
        erro: document.querySelector('#error')
    }

    function converteBinario(e) {
        if ((e.key != 0 && e.key != 1)) {
            ui.binario.value = ui.binario.value.replace(e.key, '')
            ui.binario.classList.add('error')
            ui.erro.style.display = 'block'
        } else {
            ui.erro.style.display = 'none'
            ui.binario.classList.remove('error')
        }
        if ((ui.binario.value).length > 8) {
            ui.binario.value = ui.binario.value.substring(0, 8)
        }

        var decimal = parseInt(ui.binario.value, 2)
        ui.resultado.value = decimal

        if (isNaN(decimal)) {
            ui.resultado.value = ''
        }
    }

    var init = function () {
        ui.binario.onkeyup = converteBinario
    }()
})()