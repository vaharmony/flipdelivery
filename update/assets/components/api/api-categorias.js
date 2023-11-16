 data=[]
database=[]
msgLoadContainer=document.getElementById('msgLoad')
var apiContainer=document.getElementById('api') 
var categoriesContainer=document.getElementById('categories') 
STATUSMESA=false
msgLoading=document.getElementById('msgLoading')
btnSubmitformSalvar=document.getElementById('btnSalvar')
console.log(document.getElementById('btnSalvar'))


modalToggole=()=>{
    modalElement=document.getElementById('modalcontainer') 
    if(modalElement){ 
        return modalElement.classList.toggle('show')
    }else{
        return console.log('modal não encontrado...')
    }
}

fullScreen=()=>{
    var element = document.documentElement;
    
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
    }
} 


 getApi=(container,databd,referencia)=>{
    container.innerHTML =` <div class="tab"> </div>`;
    prods=""
    getdatabd=databd  
    ref=referencia
    catid=0

    if(data.length==0){
        getdatabd.map((databdMap)=>{
       
            databdMap.dataProd.map((mapProd)=>{
              data.push(mapProd)
      
              
            }) 
      
          })
    }else if(ref==false){
       
        getdatabd.map((databdMap)=>{
            
          
      
          })

    }else if(ref==true){
        data=[]
        getdatabd.map((databdMap)=>{
       
            databdMap.dataProd.map((mapProd)=>{
              data.push(mapProd)
      
              
            }) 
      
          })
        
    }
 
    data.map((apiData)=>{ 
        container.childNodes[1].innerHTML += ` 

            <button key="`+apiData.id+`" class="tablinks" onclick="openCity(event, '`+apiData.id +`')">
                <img class="img1" src=" `+apiData.image +`" alt="">
                <img class="img2"  src=" `+apiData.image2 +`" alt="">
                `+apiData.name +`
            </button>
          
        `;
        container.innerHTML += ` 

            <div id="`+apiData.id +`" class="tabcontent">  
            </div>
      
        `; 
        document.getElementById(apiData.id.toString()).innerHTML+= `  
        <div class="tab sub"  >
            <div class="swiper mySwiperTabs">
            <div class="swiper-wrapper" id="`+apiData.key +`" >
                
           
            
            </div>
            
            </div>
        </div>
          `; 
          
        var subs=document.getElementById(apiData.key)
       
        apiData.itens.map((itensMap)=>{        

            subs.innerHTML+= ` 
                 <div class="swiper-slide"> 
                    <button class="tablinks" onclick="openCity(event, '`+itensMap.id +`', '`+apiData.id +`')">`+itensMap.name +`</button> 
                 </div>
            `;
           
          
        }) 
        apiData.itens.map((tabContentMap)=>{ 
           
           
            document.getElementById(apiData.id.toString()).innerHTML+= ` 
               
                <div id="`+tabContentMap.id +`" class="tabcontent">   
                    <button key=`+tabContentMap.id +` onclick="createProd(event)" class='btn addProd'><i class="fa-solid fa-bottle-droplet"></i> ADICIONAR PRODUTOS EM `+tabContentMap.name    +` </button>  

                </div>

              
            `; 

            var Contentsubs=document.getElementById(tabContentMap.id)
           
          innitProd=tabContentMap.products.map((productsMap)=>{  
            prods+=productsMap 

                    Contentsubs.innerHTML+= `  
                        <div class="produto">
                                <img src="`+productsMap.img +`" alt="" style="display:none;" ></img>
                          
                                <div class="prod-val">
                                <h3 class="title-prod">`+productsMap.name +`</h3> 
                                <span class="valor">`+parseFloat(productsMap.price).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})+`</span>
                            </div>

                            <div class="editProd" >
                                <button key="`+productsMap.id +`" onclick="editPrd(this,`+productsMap.id +`); "><i class="fa-regular fa-pen-to-square"></i></button>
                                
                                <button key="`+productsMap.id +`" onclick="removeProd(this,`+productsMap.id +`); ">
                                <i class="fa-solid fa-trash"></i>
                                </button>
              
                            </div>

                            <div class="quantidade" style="display:none;">
                                <button key="`+productsMap.id +`" onclick="addProd(this,`+productsMap.id +`); ">+</button>
                                <input  id="`+productsMap.id +`" value="`+productsMap.quantidade +`" type="text" placeholder="0">
                                <button key="`+productsMap.id +`" onclick="removeProd(this,`+productsMap.id +`); ">-</button>
              
                            </div>
                       
                        </div>
                    `;


                if(productsMap.price==undefined){
                  

                }
   
                }) 
        }) 

        
     }) 

     openTable(false)
    
 }
  
 

 var value = 0

 removeProd=(ProdThis, inputProd)=>{ 
 
    var key=ProdThis.getAttribute('key')
    input=document.getElementById(inputProd)
    
    data.map((apiData)=>{   
        apiData.itens.map((itensMap)=>{     
             itensMap.products.map((productsMap)=>{ 
              

              if(productsMap.id==key && productsMap.quantidade>0){

         
                productsMap.quantidade-- 
                value=productsMap.quantidade 
                input.setAttribute('value',value)   
                refrashCart(inputProd)

              }
             }) 
        }) 

     }) 

    

    
  }

 

 addProd=(ProdThis, inputProd)=>{ 
 
    var key=ProdThis.getAttribute('key')
     
    input=document.getElementById(inputProd)
    inputSearch=document.getElementById(inputProd+'search')
      
  
data.map((apiData)=>{   
apiData.itens.map((itensMap)=>{     
        itensMap.products.map((productsMap)=>{ 
    
    

        if(productsMap.id==key ){
        productsMap.quantidade++
        value=productsMap.quantidade 
        input.setAttribute('value',value)
        if(inputSearch){
            inputSearch.setAttribute('value',value)

        }
        }
        }) 
}) 

}) 

     
     refrashCart(inputProd)

    
  }

  createProd=(event)=>{

    var submitbtn=document.getElementById('btnSalvar')   
    const key=event.target.getAttribute('key')   
    var h2Title=document.querySelector('.modal h2') 
    // 
    h2Title.innerHTML='Novo produto.'  
    submitbtn.setAttribute('key',key) 

    submitbtn.setAttribute('status','create')
    //submitbtn
    modalToggole()

  }
 
 
   
  inputNome=document.getElementById("m-nome")
  inputCategory=document.getElementById("m-categoria")
  inputPrice=document.getElementById("m-price")
  modalForm=document.querySelector('.modal form')


   editPrd=(ProdThis, inputProd)=>{
 
        // conso.le.log(ProdThis, inputProd)
        var h2Title=document.querySelector('.modal h2')
        h2Title.innerHTML='Editar produto.'

        idProdThis=false
        var key=ProdThis.getAttribute('key')
        var modal=document.querySelector('.modal-container')
        modal.classList.toggle('show')
     
        var submitbtn=document.getElementById('btnSalvar')   

        submitbtn.setAttribute('status','update')
          input=document.getElementById(inputProd)
          inputSearch=document.getElementById(inputProd+'search')
          
      
        data.map((apiData)=>{   
            apiData.itens.map((itensMap)=>{     
                 itensMap.products.map((productsMap)=>{ 
                
               
                //   ADIÇÃO
                    
                //   EDIÇÃO
                  if(productsMap.id==key ){
                    idProdThis=key
                    inputNome.value=productsMap.name 
                    inputPrice.value=productsMap.price 

 
                    if(inputSearch){
                        inputSearch.setAttribute('value',value)
    
                    }
                  }




                 }) 
            }) 
    
         }) 
    
       
        
      
        //  modalForm.addEventListener('submit',function(e){ 
        //     e.preventDefault()
        //     upDateProd()
        // })
  } 
 
  

    upDateProd=()=>{
 
        msgLoading.classList.toggle('show')
 
       
        data.map((apiData)=>{     
            apiData.itens.map((itensMap)=>{     
                 itensMap.products.map((productsMap)=>{    
                        if(productsMap.id==idProdThis){ 
                                productsMap.name=inputNome.value
                                // productsMap.price=parseInt(inputPrice.value).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
                                productsMap.price=inputPrice.value  
                        }
                    
                 }) 
            }) 
    
         }) 
     
         
         getApi(categoriesContainer,data, false)
        

  }
 refrashCart=(inputProd)=>{ 
     

  var cartContainer = document.getElementById('cart')
  var cartPreview = document.getElementById('cartPreview')
  input =document.getElementById(inputProd)

  cartQtd=0
  totalCart=0
  itensTotal=0
  list=null

   cartPreview.innerHTML= `<div><button id="cartPreview" onclick="showCart()"><img src="assets/images/shopping-cart.png" alt=""></button>      </div>`;  
   cartContainer.innerHTML= `<div class="content"><h2>Pedido</h2><p ><span id="itensTotal"></span>  Itens na Cesta</p></div>`;  
   msg="Olá, Pedido via APP Canoas" + "%0a" + "Nome: "+inputUserName
   retirada="";

    //  url = "https://wa.me/5512982969703?text=" // Seu numero test
     url = "https://wa.me/551296218661?text=" // Seu numero Produção
   + "*Pedido via APP* <3" + "%0a" // Mensagem personalizada
   + "%0a" // Quebra de linhas
   + "*Nome*: " + inputUserName + "%0a" // Dados do formulário
   + "%0a" // Quebra de linhas
   + "*Itens Pedidos*" + "%0a" // Mensagem personalizada
   + "%0a" // Quebra de linhas


  allordersBuy=[]
  prodsSelct=[]
 

       
        data.map((apiData)=>{   
            apiData.itens.map((itensMap)=>{     
                itensMap.products.map((productsMap)=>{ 
                
    
                    if(productsMap.quantidade>0){
                        
                        cartQtd+=productsMap.quantidade
                        itensTotal+=productsMap.quantidade
                        prodMultiply=productsMap.price*productsMap.quantidade
                        totalCart+=prodMultiply
                        list+=productsMap.name 
                        prodsSelct.push(productsMap) 
                
                        cartPreview.innerHTML= `    <div >     <button id="cartPreview" onclick="showCart()"><img src="assets/images/shopping-cart.png" alt=""></button> <span class="qtdIcon">`+cartQtd +` </span>   </div>  `;  
                        cartContainer.innerHTML+= `  
                        
                        <div class="produto">
                                        <img src="`+productsMap.img +`" alt="">
                                    <div class="prod-val">
                                        <h3 class="title-prod"> `+productsMap.name +` </h3> 
                                        <span class="valor">`+prodMultiply.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) +` </span>
                                    </div>
                                    <div class="quantidade">
                                            <button key="`+productsMap.id +`" onclick="addProd(this,`+productsMap.id +`); ">+</button>
                                        <input  id="`+productsMap.id +`Cart" value="`+productsMap.quantidade +`" type="text" placeholder="0">
                                        <button key="`+productsMap.id +`" onclick="removeProd(this,`+productsMap.id +`); ">-</button>
                    
                                    </div>
                                    <button><img src="assets/images/trash.png" style="width: 20px; height: 21px;"></button>

                                </div>
                                
                        `;  
                        // msg+=``+productsMap.quantidade +`,`+productsMap.name +`,`+prodMultiply.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) +`` 
                    
                        url+=""+productsMap.quantidade+"un. / *"+productsMap.name+"* / " + prodMultiply.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
                        +"%0a" // Dados do formulário


                    }
                    
                
                }) 

                
            }) 

        }) 
     
         
 
       
        if(1==0){  
            // if(database.length>0){ 
 
            lastOrderDoc=JSON.parse(localStorage.getItem("last"))
            
    
            lastOrderDoc.map((dataMap)=>{
                laslastorder=dataMap
            
            })
            
            atualOrder=[laslastorder,{ 
                idPedido:Math.random() * 1000,
                itens:prodsSelct
            }]


            allordersBuy=atualOrder
     
    
        }else{ 
            allordersBuy=[{ 
                idPedido:Math.floor(Math.random() * 1000).toString(),
                itens:prodsSelct
            }]
        }

        document.getElementById("itensTotal").innerHTML+=  itensTotal
        cartContainer.innerHTML+= ` 

            <div class="controls"  > 
                <button onclick="showCart()"><i class="fa-solid fa-chevron-left"></i></button>
                <button onclick="showCart()"><i class="fa-solid fa-xmark"></i></button>  
            </div> 
             <div class="total"> 
                Total da compra
                `+totalCart.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) +` 
                <button onclick="getCheckout()">FINALIZAR PEDIDO <i class="fa-regular fa-rectangle-list"></i></button> 
            </div> 
        `; 

        totalfinesh.innerHTML+=`
        <div class="total" id="fineshPay" style=" z-index: 99;"> 
            Total da compra
            `+totalCart.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) +` 

            <span id="clickpague"   onclick="animatedCheckOut()">clique e pague</span>
            
            <div id="rrcode" style="
            background: white;
            padding: 0 7px 6px; display:none;
        ">
                <img  style="
                position: relative;
                width: 195px;
                left:0;
            " src="https://lidneyr.github.io/adm/assets/components/impressao/andd.png"> 

           <span > Pague com QR CODE </span>
        <span style="
        text-align: center;
        display: inline-flex;
        margin: 20px auto;
        font-weight: 300;
    ">CHAVE </br>  12996218661 </span>
           </div>
        
             <button type="submit" id="submitCheck">ENVIAR MEU PEDIDO </button>
        </div> 
        `;
  }


sendOrder=(event)=>{
    event.preventDefault() 

    mesaCheck=document.getElementById('selectMesaCheckout').value

    if(retiradavalue=='mesa'){
            
        retirada=retiradavalue+" N* "+mesaCheck
        send()
    }else if(retiradavalue=='balcao'){
        
        retirada=retiradavalue 
        send()
    }else{
        alert('Preencha os Campos')

    }

    function send(){
        comments=document.getElementById("areaObs").value
        url+=""
        + "*Forma de Retirada*: " + retirada+ "%0a" // Dados do formulário
        +"%0a" 
        + "*Observações do Pedido*"
        + "%0a" // Quebra de linhas 
        +comments

        location.href = url
    }
}


innerNewProd=()=>{

    var key=document.getElementById('btnSalvar').getAttribute('key')
    var newListProd = []
        newProd={
                id:Math.floor(Math.random() * 1000).toString(),
                img:"assets/images/produtos/semfoto.png",
                key: "",
                name:inputNome.value, 
                price:inputPrice.value,
                quantidade:0
            }
 
        
        data.forEach(apiData => { 
            apiData.itens.forEach(element => {  
                if(parseInt(element.id)===parseInt(key)){  

                    element.products.forEach(ListProds => {    

                        newListProd.push(ListProds)

                    });

                } 
                
            });
        });

        newListProd.push(newProd)
        
        data.forEach(apiData => { 
            apiData.itens.forEach(element => {  
                if(parseInt(element.id)===parseInt(key)){  
                    element.products=newListProd
                    

                } 
                
            });
        });
        

        getApi(categoriesContainer,data, false)
        
 } 
updateNewProd=()=>{{
   
    var iname=document.getElementById('m-nome')
    msgLoading.classList.toggle('show') 
    
     iname.value.length>0  ? innerNewProd() : alert('Preencha os campos..')
}}

closeCheckout=()=>{ 
    containerCheckout.classList.toggle("hide");
}


    ///update
   
   
    openTable=(event)=>{

       
      
        setTimeout(function(){
    
            tabcontent = document.getElementsByClassName("tabcontent");
            tablinks = document.getElementsByClassName("tablinks");

            if(event==false){
 
            tabcontent[0].style.cssText="display:block"
            tabcontent[1].style.cssText="display:block"
            tablinks[0].setAttribute("class", "tablinks active")


            var swiper = new Swiper(".mySwiperTabs", {
                slidesPerView: 2,
                cssMode: true,
                 autoplay: {
                delay: 5500,
                disableOnInteraction: false,
                },
                
            }); 
            }else{
               
            }



        
        
        }, 500);
    }
 
  

    btnSubmitformSalvar.addEventListener('click',(e)=>{
        e.preventDefault()
        attr=e.target.getAttribute('status')
        //
        msgLoading.classList.toggle('show') 

        setTimeout(function(){ 
            attr==='create' ? updateNewProd() : upDateProd() 
       }, 500);
        
        modalToggole()
    })