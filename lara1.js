var frm=document.querySelector("form");
var rest=document.querySelector("h3");
frm.addEventListener("submit", (e) => {
    e.preventDefaut();
    var nome =frm.inNome.value;
    rest.innertext="Olá"+nome;

});