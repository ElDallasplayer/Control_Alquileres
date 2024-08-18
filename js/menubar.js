$(".nav-link").on("click", (e) =>{
    e.stopImmediatePropagation();

    let referencia = e.target.getAttribute("href");
    InsertComponent("principal-container",referencia);
})