
const stars = document.querySelectorAll('.star');
const ratingSpan = document.getElementById('rating');
const reviewTextarea = document.getElementById('review');
const submitButton = document.getElementById('submit');
const reviewsContainer = document.getElementById('reviews');

let rating = 0;
let reviews = [];

stars.forEach((star) => {
  star.addEventListener('click', (e) => {
    rating = parseInt(e.target.getAttribute('data-value'));
    ratingSpan.textContent = rating + '/5';
  });
});

submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  const reviewText = reviewTextarea.value.trim();
  if (reviewText && rating > 0) {
    const review = {
      rating,
      text: reviewText,
    };
    reviews.push(review);
    reviewTextarea.value = '';
    rating = 0;
    ratingSpan.textContent = '0/5';
    displayReviews();
  }
});

function displayReviews() {
  reviewsContainer.innerHTML = '';
  reviews.forEach((review) => {
    const reviewHTML = `
      <div class="review">
        <p>Rating: ${review.rating}/5</p>
        <p>${review.text}</p>
      </div>
    `;
    reviewsContainer.innerHTML += reviewHTML;
  });
}