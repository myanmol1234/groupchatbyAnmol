

function sendmsg(event)
{
    event.preventDefault();
    alert("The form was submitted");
const text=document.getElementById("msg");
const sender=document.getElementById("na");

const obj={
    text:text.value,
    sender:sender.value,
}

console.log('object is ', obj);
localStorage.setItem('msg',JSON.stringify(value));
    axios.post("http://localhost:3000/send",obj)
    .then((response) => {
        if(response.status==201)
        {
            console.log(response);
        }
        else
        {
            throw new Error("failed to login")
        }
        
       
      console.log(response);
    
    })
    .catch((err) => {
        
        console.log(err);
    });

    
}

function callingGetMessagesApi(){
    setInterval(()=>{
        getmsgonscreen();
         console.log('dshdf')
     
     }
        
      , 10000)
 }
 callingGetMessagesApi()

function getmsgonscreen()
{
    axios.get('http://localhost:3000/getmsgonscreen?lastmsg=3').then(response =>
     {
        if(response.status === 200)
        {
            console.log(response);
            console.log(response.data.msgs[0]);

        const loop=response.data.msgs;
        console.log(loop);
            const arr=document.getElementById("addtoscreen");
            loop.forEach(txt => {

                const vrr=document.createElement("li");
                vrr.innerHTML=`${txt.sender}-${txt.text}`;
                arr.appendChild(vrr);
                
            });
           
              

        } else {
            throw new Error();
        }
    })
}
