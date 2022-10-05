function createGroup(event)
{
    event.preventDefault();
    const groupname=document.getElementById('creategroupname');
    
    
        console.log(groupname.value);
        let obj={

            groupname:groupname.value,
        }
       
          console.log("group name is ",obj)
        axios.post('http://localhost:3000/creategroup',obj).then(ress=>{
             console.log(ress)
         })

   
    

}