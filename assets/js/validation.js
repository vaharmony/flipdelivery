 let validateView=document.getElementById('validation')
 
 

  function validation(event,guser,gphoto){ 
    
      event.preventDefault() 
      
      var gname=guser
      var gnphoto=gphoto
      var userContainer=document.getElementById('user')
 
      // validateView.style.cssText=`display:none`
      console.log('t3',validateView)
      
      userContainer.style.cssText=`justify-content: flex-end;display: flex;a lign-items: center;
      font-size: 13px;`
      userContainer.innerHTML=` 
        <div>
          Olá, `+gname+` 
        </div> 
        <div style="
        width: 25px;
        height: 25px;
        margin-left: 10px;
        ">
          <img src=' `+gnphoto+` ' alt=''>
        </div>
      `
      function resolverDepoisDe2Segundos(gnphoto) {
        return new Promise((gnphoto) => {
          setTimeout(() => {
           
            validateView.style.cssText=`display:none`

          }, 2000);
        });
      }

      resolverDepoisDe2Segundos(gnphoto) 
      
 
      }
 


 