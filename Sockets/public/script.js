let socket = io()
let login = document.querySelector('.login');
let chatApplication = document.querySelector('.chat-application')

document.querySelector('.login-btn').addEventListener('click',(ev)=>{
    ev.preventDefault()
    let userName = document.querySelector('.username').value;
    if(userName.length>0){
        socket.emit('newuser',{
            socketId: socket.id,
            name: userName
        })
    }
})

socket.on('connect',()=>{
    console.log(socket.id)
})

socket.on('useradded',({msg,name})=>{
    console.log(msg)
    login.style.display='none';
    chatApplication.style.display='block';
    const currentUser = document.querySelector('.current-user')
    currentUser.innerHTML=`<div style='margin:auto; width:50%;'>${name}</div>`
})

document.querySelector('.send-button').addEventListener('click',(ev)=>{
    const message = document.querySelector('.message-input').value
    if(message.length>0){
        socket.emit('newmessage',{
            message:message,
            socketId:socket.id
        })
        document.querySelector('.message-input').value=''
    }
})

socket.on('messagereceived',({message,name,socketId})=>{
    const chatMessageWrapper = document.createElement('div');
    chatMessageWrapper.classList.add('chat')
    const chats = document.querySelector('.chats');
    if(socketId==socket.id){
        chatMessageWrapper.innerHTML=`<div class='chat-message my-chat'>${name} :${message}</div>`
        chatMessageWrapper.classList.add('chat-user')
    }else{
        chatMessageWrapper.innerHTML=`<div class='chat-message another-chat'>${name} :${message}</div>`
        chatMessageWrapper.classList.add('chat-other')
    }
    chats.append(chatMessageWrapper)

})