 let validateView=document.getElementById('validation')
 
 

  function validation(event,guser,gphoto){ 
    
      event.preventDefault() 
      
      var gname=guser
      var gnphoto=gphoto
      var userContainer=document.getElementById('user') 
      
      console.log('validation',gname)
    
      
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
      setTimeout(() => { 
        if(gname){ 
          console.log('oksetTimeout1',gname)
          validateView.style.cssText=`display:none`
        }

      }, 2000);
      
 
      }
 


 