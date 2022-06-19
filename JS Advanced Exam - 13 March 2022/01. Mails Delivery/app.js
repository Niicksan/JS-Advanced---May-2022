function solve() {
    const input = {
        recipientName: document.getElementById('recipientName'),
        title: document.getElementById('title'),
        message: document.getElementById('message')
    };

    const mails = {
        listedMails: document.getElementById('list'),
        sentMails: document.getElementsByClassName('sent-list')[0],
        deletedMails: document.getElementsByClassName('delete-list')[0]
    };

    document.getElementById('add').addEventListener('click', add);
    document.getElementById('reset').addEventListener('click', reset);

    function add(event) {
        event.preventDefault();

        // read input fields
        const recipientName = input.recipientName.value;
        const title = input.title.value;
        const message = input.message.value;

        // validate input
        if (!title || !recipientName || !message) {
            return;
        }

        // create list item
        const li = document.createElement('li');
        li.innerHTML = `
             <h4>Title: ${title}</h4>
             <h4>Recipient Name: ${recipientName}</h4>
             <span>${message}</span>
         <div id="list-action">
            <button type="submit" id="send">Send</button>
            <button type="submit" id="delete">Delete</button>
         </div>`;

        // add functionality to buttons
        const sendBtn = li.querySelector('#send');
        sendBtn.addEventListener('click', sendMail);
        const deleteBtn = li.querySelector('#delete');
        deleteBtn.addEventListener('click', deleteMail);

        // append to Mails listed
        mails.listedMails.appendChild(li);

        // clear input fields
        input.recipientName.value = '';
        input.title.value = '';
        input.message.value = '';

        function sendMail(event) {
            event.preventDefault();

            // create li item
            li.innerHTML = '';
            li.innerHTML = `
            <span>To: ${recipientName}</span>
            <span>Title: ${title}</span>
            <div class="btn">
                <button type="submit" class="delete">Delete</button>
            </div>`;

            const deleteBtn = li.querySelector('.delete');
            deleteBtn.addEventListener('click', deleteMail);

            // append to sentMails
            mails.sentMails.appendChild(li);
        }

        function deleteMail(event) {
            event.preventDefault();

            // create li item
            li.innerHTML = '';
            li.innerHTML = `
            <span>To: ${recipientName}</span>
            <span>Title: ${title}</span>`;

            // append to sentMails
            mails.deletedMails.appendChild(li);
        }
    }

    function reset(event) {
        event.preventDefault();

        // clear input fields
        input.recipientName.value = '';
        input.title.value = '';
        input.message.value = '';
    }
}
solve()