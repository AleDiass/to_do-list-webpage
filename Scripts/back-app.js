const tdul = document.getElementById('todo-ul')
///

if(!localStorage.getItem('total')){
    localStorage.setItem('total',1)
}

let total = +localStorage.getItem('total')


// Show todo On load //


window.onload = ()=>{

    


   if(localStorage.length > 0){


        for(let x =0;x<total;x++){
            const data = localStorage[x];
           
            if(data){
                const {title,desc,liid} = JSON.parse(data);
                let htmlLi = (
                    `<li id='${liid}' class='todo-li'>
                    <button onclick='DeleteTodo()' class='btn-remove' type='button'></button>
                        <section class='todo-title-sec'>
                      
                        <h1 class='todo-title'>${title}</h1></section>
            
                        <p class='todo-desc'>${desc}</p>
                 </li>`
        
                )
    
                tdul.innerHTML += htmlLi
    
            }
        
            
        }

   }
    

}




function StartBackEnd(todo){

    let totalnow = +localStorage.getItem('total')
    localStorage.setItem('total', totalnow+1)
    const id = +localStorage.getItem("total");


    todo = {...todo,liid:id}
    const {liid,title , desc} = todo




    tdul.innerHTML += `
        <li id='${liid}'  class='todo-li created-anim'>
        <button onclick='DeleteTodo()' class='btn-remove' type='button'></button>
            <section class='todo-title-sec'>
            <h1 class='todo-title'>${title}</h1></section>

            <p class='todo-desc'>${desc}</p>
        </li>`




    todo = JSON.stringify(todo)
    localStorage.setItem(id,todo)


  


    setTimeout(()=>{
        document.querySelector('.created-anim').classList.remove('created-anim')
    },1000)
    
   
    



};





function DeleteTodo(){
    event.target.parentElement.remove()
    const idlocal = event.target.parentElement.id


    // Remove From LocalStorage


    localStorage.removeItem(idlocal)


   
    if(localStorage.length ==1){
        localStorage.setItem('total',1)

    }

}