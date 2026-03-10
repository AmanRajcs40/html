const messages1 = document.getElementById('messages1');
const messages2 = document.getElementById('messages2');

const sendMessage = (sender) => {
    const input = sender === 'person1' ? document.getElementById('input1') : document.getElementById('input2');
    const text = input.value.trim();
    if (text === '') return;

    if (sender === 'person1') {
        addMessage(messages1, text, 'sent');
        addMessage(messages2, text, 'received');
    } else {
        addMessage(messages2, text, 'sent');
        addMessage(messages1, text, 'received');
    }
    input.value = '';
};

const addMessage = (container, text, type) => {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', type);
    messageDiv.textContent = text;
    container.appendChild(messageDiv);
    container.scrollTop = container.scrollHeight;
};

const typing1 = document.getElementById('typing1'); // shows in Person1's box when Person2 types
const typing2 = document.getElementById('typing2'); // shows in Person2's box when Person1 types

let typingTimeout1;
let typingTimeout2;

// When Person 1 types, show typing in Person 2's box
document.getElementById('input1').addEventListener('input', () => {
    typing2.style.display = 'block'; // show in Person2's chat box
    clearTimeout(typingTimeout2);
    typingTimeout2 = setTimeout(() => {
        typing2.style.display = 'none';
    }, 1000);
});

// When Person 2 types, show typing in Person 1's box
document.getElementById('input2').addEventListener('input', () => {
    typing1.style.display = 'block'; // show in Person1's chat box
    clearTimeout(typingTimeout1);
    typingTimeout1 = setTimeout(() => {
        typing1.style.display = 'none';
    }, 1000);
});