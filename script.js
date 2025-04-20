document.addEventListener('DOMContentLoaded', () => {
const postInput = document.getElementById('postInput');
const addPostBtn = document.getElementById('addPostBtn');
const postsContainer = document.getElementById('postsContainer');

// Add new post
addPostBtn.addEventListener('click', () => {
  const postText = postInput.value.trim();
  if (postText === '') return;

  // Create a post element
  const postDiv = document.createElement('div');
  postDiv.className = 'post';

  const contentP = document.createElement('p');
  contentP.textContent = postText;

  const likeBtn = document.createElement('button');
  likeBtn.textContent = 'Like';
  likeBtn.className = 'like-btn';

  // Like/unlike functionality
  likeBtn.addEventListener('click', () => {
    if (likeBtn.textContent === 'Like') {
      likeBtn.textContent = 'Unlike';
    } else {
      likeBtn.textContent = 'Like';
    }
  });

  postDiv.appendChild(contentP);
  postDiv.appendChild(likeBtn);
  postsContainer.prepend(postDiv); // Add to top of feed

  postInput.value = ''; // Clear input
});
});
