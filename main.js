// https://api.telegram.org/bot6829522464:AAGHm1BJfZ2kv_49qxk1-8HTqAaqBbvVBrw/getUpdates

let token = "6829522464:AAGHm1BJfZ2kv_49qxk1-8HTqAaqBbvVBrw"
let chat_id="1483811575"
let url_api=`https://api.telegram.org/bot${token}/sendMessage`
let success=document.getElementById("success")

document.getElementById('tg').addEventListener("submit", function (e){
    e.preventDefault()
    let message=`<b>Заявка с сайта!</b>\n`
    message+=`<b>Отправитель:</b> ${this.name.value}\n`
    message+=`<b>Номер:</b> ${this.number.value}\n`
    message+=`<b>Почта:</b> ${this.email.value}\n`
    console.log(message);
    axios.post(url_api,{
        chat_id:chat_id,
        parse_mode:"html",
        text:message
    }).then((res)=>{
        this.name.value=""
        this.number.value=""
        this.email.value=""
        success.innerHTML="Сообщение отправлено!"
        success.style.display="block"
    }).catch((err)=>{
        console.log(err);
    }).finally(()=>console.log("succesfully"))
})