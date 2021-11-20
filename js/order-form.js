import { createModal } from "./modal";

const SEND_MAIL_URL = "http://94.26.230.151/sendmail";
const SEND_EMAIL = "beats-world@apple.com";
const FIELD_LIST = ['name', 'phone', 'comment'];

const formElem = document.querySelector('.order__form');

formElem.addEventListener('submit', (event) => {
    event.preventDefault();

    const FD = new FormData(formElem);

    const body = {
        to: SEND_EMAIL,
        name: FD.get('name'),
        phone: FD.get('phone'),
        comment: FD.get('comment')
    }

    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
    };

    const clearErrors = () => {
        FIELD_LIST.map(field => {
            const errorElem = document.querySelector(`[data-name=${field}]`);
            errorElem.textContent = '';
        })
    }
    
    fetch(SEND_MAIL_URL, options)
        .then(async (response) => {
            const data = await response.json();

            clearErrors();

            if (data.status === undefined) {
                FIELD_LIST.map(field => {
                    if (data[field]) {
                        const errorElem = document.querySelector(`[data-name=${field}]`);
                        errorElem.textContent = data[field][0];
                    }
                })

                return
            }

            if (data.message) {
                const modal = createModal({ text: data.message, isErrosMsg: !Boolean(data.status) });
                modal.openModal();
            }

        })
});