var view = {}
window.addEventListener('DOMContentLoaded', (event) => {
    saveHtml();
    view.json = JSON.parse(view.data.dataset.json);
    setValues()
});

function saveHtml(){
    view.data = document.querySelector('#data');
    view.tipoUsuario = document.querySelector('#tipoUsuario');
    view.tipoPersona = document.querySelector('#tipoPersona');
}
function setValues(){
    const {json, tipoUsuario, tipoPersona} = view;
    tipoPersona.value = json.tipoPersona;
    tipoUsuario.value = json.tipoUsuario;
}