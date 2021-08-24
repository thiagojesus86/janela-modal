
//pegar o evento de clique
document.querySelectorAll('[data-toggle="open-modal"]').forEach( o => {
   o.addEventListener("click", () => {
       const modal = document.createElement("div")
       modal.setAttribute("id","modal")
       modal.innerHTML = '<div id="modal" class="fadeIn">'+
                            '<div id="containerModal" class="zoomIn">'+
                                '<div id="headerModal">'+
                                    '<ion-icon name="checkmark-circle-outline"></ion-icon>'+
                                '</div>'+
                                '<div id="contentModal">'+o.dataset.msg+'</div>'+
                                '<div id="footerModal">'+
                                    '<button id="confirmModal">OK!</button>'+
                                '</div>'+
                            '</div>'+
                        '</div>'
       document.body.appendChild(modal)

       modal.addEventListener("click", m => {
           if(m.target.id=="modal" || m.target.id=="confirmModal"){
            
            const containerModal = document.querySelector("#containerModal")
            
            modal.classList.remove("fadeIn")
            modal.classList.add("fadeOut")
            containerModal.classList.remove("zoomIn")
            containerModal.classList.add("zoomOut")
            
            setInterval(()=>{
                modal.remove()
            },800)
           }
       })
   })
})
