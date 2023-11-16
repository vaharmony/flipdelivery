formcheckout=document.getElementById('checkoutform')
totalfinesh=document.getElementById("totalfinesh") 

inpuMMesa=document.getElementById('inputMesa')

inputLocation=document.getElementById('inputLocation')
locationvalue=""

whatsappId=document.getElementById('whatsappId')
inpuMWhats="" 

 
function showNumber(){  var n=100;  return n+=1 }
getCheckout=()=>{ 
 

    select=document.getElementById('selectValidate')
    text = select.options[select.selectedIndex].text;
    containerCheckout=document.getElementById('checkout')
    containerCheckout.setAttribute("class", "checkout") 
    selectCheck=document.getElementById('selectCheckout')
    optionsCheck=selectCheck.options[selectCheck.selectedIndex].text
    observacaoPedido='Nenhuma observação'
    retiradavalue=0

    
 

    areaObs.addEventListener('change', function(event){ 
        observacaoPedido=event.target.value
        obs=observacaoPedido
        obsData={'observacaoPedido':observacaoPedido} 

    })


    // VALIDA CAMPO HOME
    if(text=="Mesa"){
        mesaCheck=document.getElementById('selectMesaCheckout') 
    }

    // VALIDA CAMPO CHECKOUT 
    if(optionsCheck=="Mesa"){ 
        mesaCheck.parentNode.style.cssText="display:flex"   

    }
 
    // Open Checkout container
    containerCheckout.style.cssText="display:block"




    
}


formaRetirada=()=>{
       
    retiradavalue=document.getElementById('selectCheckout').value
    setMesa=document.getElementById('setMesa') 
    clickpague=document.getElementById('clickpague')


    if(retiradavalue=='mesa'){
        setMesa.style.cssText="display:flex"   
        whatsappId.style.cssText="display:none"  
        clickpague.style.cssText="display:none"  



         
    totalfinesh.innerHTML=` 
    <div class="total" id="fineshPay" style=" z-index: 99;"> 
            Total compra
            `+totalCart.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) +`  
             
        
             <button type="submit" id="submitCheck">ENVIAR MEU PEDIDO 
                <i class="fa-solid fa-paper-plane"></i>
             </button>
        </div>
    `;

    }else if(retiradavalue=='delivery'){

        setMesa.style.cssText="display:none"  
        whatsappId.style.cssText="display:block" 
        inpuMVaue=0

        
        var vardez=totalCart*10/100 
        var resultDez=totalCart+vardez
        var warningCheck=document.querySelectorAll('.alertcheck') 

        var arrWarn=Array.from(warningCheck)

        
        arrWarn.map((element)=>{
            element.style.cssText='display:flex;'
        })
        document.getElementById('setPhone').style.cssText="display:flex"  

        totalfinesh.innerHTML=`
        <div class="total" id="fineshPay" style=" z-index: 99;"> 
            Total compra delivery
            `+resultDez.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) +` 

            <span style='display:none;' id="clickpague"   onclick="animatedCheckOut()">clique e pague</span>
            
            <div id="rrcode" style='display:none;' >
                <img src="https://lidneyr.github.io/adm/assets/components/impressao/andd.png"> 

           <span > Pague com QR CODE </span>
      
           </div>
        
             <button type="submit" id="submitCheck">ENVIAR MEU PEDIDO 
             <i class="fa-solid fa-paper-plane"></i>
             </button>
        </div> 
        `;
        
    }else if(retiradavalue=='balcao'){

        setMesa.style.cssText="display:none"  
        whatsappId.style.cssText="display:block" 
        document.getElementById('setPhone').style.cssText="display:none"  
        document.getElementById('dezdelivery').style.cssText="display:none"  
        
        // clickpague.style.cssText="display:block"   
        // inpuMVaue=0

        totalfinesh.innerHTML=`
        <div class="total" id="fineshPay" style=" z-index: 99;"> 
            Total compra
            `+totalCart.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) +`  
             
        
             <button type="submit" id="submitCheck">ENVIAR MEU PEDIDO 
                <i class="fa-solid fa-paper-plane"></i>
             </button>
        </div> 
        `;
    }


    //Mesa Digitada
    setMesa.addEventListener('focusout', function(e){ 
        inpuMVaue=document.getElementById('inputMesa').value.toString()   
    })

    
    //Endereço Digitado
    inputLocation.addEventListener('focusout', function(e){ 
        locationvalue=e.target.value
    })

    //whats Digitado
    whatsappId.addEventListener('focusout', function(e){
        inpuMWhats=e.target.value.toString()  
    
    })  

    allordersBuy=[{ 
        idPedido:Math.floor(Math.random() * 1000).toString(),
        data:dataHora(),
        hora:relogio(),
        itens:prodsSelct,
        location:locationvalue, 
        observacao:obs

    }]
}


window.onload=()=>{
    
    ordersLabDeliveryArr=[] 
    recebePedidos=[]


    const date = new Date();
    // console.log(date)

   
 
}
