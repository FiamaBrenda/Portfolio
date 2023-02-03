// function sendEmail() {
//     const mensagem = document.getElementById('mensagem').value;
//     const email = document.getElementById('email').value;
//     const assunto = document.getElementById('assunto').value; 
//     const telefone = document.getElementById('telefone').value;
//     const nome = document.getElementById('nome').value;

//     Email.send({
//         Host:"smtp.gmail.com",
//         Username: "sender@email_address.com",
//         Password:"Enter your password",
//         To: 'fiamabrenda94@gmail.com',
//         From: `${email}`,
//         Subject:`${assunto}`,
//         Body: `${mensagem}`,
//         Telefone:` ${telefone}`,
//         Nome: `${nome} `,
//     })
//         .then(function(message){
//                 alert("E-mail enviado com sucesso")
//         }).catch(() => {
//             alert('Houve um problema no servidor')
//         });
// }

function handleScrollTo(event) {
    event.preventDefault();

    const dataScroll = event.currentTarget.getAttribute('data-scroll-to');
    const $section = document.querySelector(`[data-scroll="${dataScroll}"]`);

    if (!$section) {
        return;
    }

    $section.scrollIntoView({ behavior: 'smooth', block: 'center' });
}
const $linksToScroll = [...document.querySelectorAll('[data-scroll-to]')];

$linksToScroll.forEach(($element) => {
    $element.addEventListener('click', handleScrollTo);
});
const ACTIVE_SCROLL_CSS_CLASS = 'active';

function desactiveAllElements() {
    $linksToScroll.forEach(($link) => (
        $link.classList.remove(ACTIVE_SCROLL_CSS_CLASS)
    ));
}

function activeElement(dataScroll) {
    const $linkFound = $linksToScroll
        .find(($link) => $link.getAttribute('data-scroll-to') === dataScroll);

    desactiveAllElements();

    $linkFound.classList.add(ACTIVE_SCROLL_CSS_CLASS);
}const SCROLL_OFFSET = 200;

const $sections = [...document.querySelectorAll('[data-scroll]')];

function handleScroll() {
    $sections.forEach(($section) => {
        const sectionTop = $section.offsetTop - SCROLL_OFFSET;

        if (scrollY >= sectionTop) {
            const dataScroll = $section.getAttribute('data-scroll');

            activeElement(dataScroll);
        }
    });
}

window.addEventListener('scroll', handleScroll);

