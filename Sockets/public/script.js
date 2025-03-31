const loginButton = document.querySelector('.login-btn')
const sendButton = document.querySelector('.send-button')
const messageInput = document.querySelector('.message-input')
const socket = io()
let userName;

loginButton.addEventListener('click',()=>{
    userName= document.querySelector('.username').value;
    document.querySelector('.login').style.display='none';
    document.querySelector('.chat-application').style.display='block';
    document.querySelector('.current-user').innerText=userName;
    socket.emit('newuseradded',{
        username:userName,
        socketId:socket.id
    })
})

sendButton.addEventListener('click',()=>{
    const message=messageInput.value;
    messageInput.value=''
    socket.emit('newmessage',{
        message:message,
        socketId:socket.id,
        username:userName
    })
})

socket.on('messagereceived',({message,username,socketId})=>{
    const messageWrapper=document.createElement('div');
    messageWrapper.classList.add('chat')
    
    const messageElement = document.createElement('div')
    messageElement.innerText=`${username}: ${message}`

    if(socketId==socket.id){
        messageWrapper.classList.add('chat-user')
        messageElement.classList.add('my-chat')
    }else{
        messageWrapper.classList.add('chat-other')
        messageElement.classList.add('another-chat')
    }

    messageWrapper.appendChild(messageElement)

    document.querySelector('.chats').appendChild(messageWrapper)
    

})

socket.on('activeusers',({activeUsers})=>{
    console.log(activeUsers)
    document.querySelector('.active-users').innerText=activeUsers
})