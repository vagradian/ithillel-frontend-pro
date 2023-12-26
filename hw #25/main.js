// Використовуючи API https://jsonplaceholder.typicode.com/ зробити пошук поста за ід.
// Ід має бути введений в інпут (валідація: ід від 1 до 100) Якщо знайдено пост,
// то вивести на сторінку блок з постом і зробити кнопку для отримання комкоментарів до посту.
// Зробити завдання використовуючи проміси, перехопити помилки.

document.addEventListener('DOMContentLoaded', function () {
  const postIdInput = document.getElementById('postIdInput');
  const searchButton = document.getElementById('searchButton');
  const postContainer = document.getElementById('postContainer');
  const postContent = document.getElementById('postContent');
  const commentsButton = document.getElementById('commentsButton');
  const commentsContainer = document.getElementById('commentsContainer');

  searchButton.addEventListener('click', function () {
    const postId = postIdInput.value;

    findPostById(postId)
      .then(post => {
        postContainer.style.display = 'block';

        postContent.innerHTML = `
          <p><strong>Title:</strong> ${post.title}</p>
          <p><strong>Body:</strong> ${post.body}</p>
        `;

        commentsButton.addEventListener('click', function () {
          getComments(postId)
            .then(comments => {
              commentsContainer.innerHTML = '<h3>Comments:</h3>';
              comments.forEach(comment => {
                commentsContainer.innerHTML += `
                  <div>
                    <p><strong>Email:</strong> ${comment.email}</p>
                    <p><strong>Body:</strong> ${comment.body}</p>
                  </div>
                `;
              });
            })
            .catch(error => console.error('Error while receiving comments:', error));
        });
      })
      .catch(error => console.error('Error while receiving post:', error));
  });

  function findPostById(postId) {
    return new Promise((resolve, reject) => {
      if (!postId || isNaN(postId) || postId < 1 || postId > 100) {
        reject('The post ID is incorrect. Enter a number from 1 to 100.');
      }

      fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(response => response.json())
        .then(post => resolve(post))
        .catch(error => reject(error));
    });
  }

  function getComments(postId) {
    return new Promise((resolve, reject) => {
      fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
        .then(response => response.json())
        .then(comments => resolve(comments))
        .catch(error => reject(error));
    });
  }
});
