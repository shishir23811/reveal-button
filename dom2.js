//reveal button

const revealBtn = document.querySelector('.reveal-btn');
const hidden = document.querySelector('.hidden');
const container = document.querySelector('.container');


function revealContent() {
    if(hidden.classList.contains('hidden')){
        hidden.classList.remove('hidden');
        revealBtn.classList.add('hidden');
        
    }
}

if (revealBtn) {
    revealBtn.addEventListener('click', revealContent);
} else {
    console.error('Reveal button not found!');
}

function hideContent(e) {
  if (e.target !== revealBtn) {
    hidden.classList.add('hidden');
    revealBtn.classList.remove('hidden');
  }
}

revealBtn.addEventListener('click', revealContent);
container.addEventListener('click', hideContent);