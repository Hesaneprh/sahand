const sidebar=document.getElementById ("sidebar");
const button= document.getElementById ("btn_sidebar");
const cross=document.getElementById ("close");

console.log(sidebar);

button.addEventListener("click" , () => {
    sidebar.classList.toggle("show_sidebar");

})
cross.addEventListener("click" , ( ) => {
    sidebar.classList.remove("show_sidebar");
})