const stars = document.querySelectorAll('.star');
const message = document.querySelector('.message');
const submit = document.querySelector('.submit');

let rating = 0;

stars.forEach(star => {
  star.addEventListener('click', () => {
    rating = star.getAttribute('data-star');
    message.innerText = `You rated this product ${rating} stars`;
    stars.forEach(s => s.classList.remove('selected'));
    star.classList.add('selected');
  });
});

submit.addEventListener('click', () => {
  if (rating > 0) {
    alert(`Thank you for rating this product ${rating} stars`);
    rating = 0;
    message.innerText = '';
    stars.forEach(s => s.classList.remove('selected'));
  } else {
    alert('Please select a rating');
  }
});
// ===========================================


