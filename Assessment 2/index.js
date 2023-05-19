const form = document.getElementById('postsForm');
form.addEventListener('submit', function(e) {
  e.preventDefault();

  const title = document.getElementById('postTitle').value;
  const body = document.getElementById('postBody').value;

  // Create a new post
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: title,
      body: body,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then(function(response) {
      return response.json();
    })
    .then(function(post) {
      console.log(post);
      const results = document.getElementById('results');
      results.innerHTML = `<h2>${post.title}</h2>
        <p>${post.body}</p>`;
    })
    .catch(function(error) {
      console.error('Error:', error);
    });
});

// Fetch posts
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(function(response) {
    return response.json();
  })
  .then(function(posts) {
    const postsList = document.getElementById('postsList');
    postsList.innerHTML = '';

    // Create list items
    posts.forEach(function(post) {
      const listItem = document.createElement('li');
      listItem.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
        <button onclick="editPost(${post.id})">Edit</button>
        <button onclick="deletePost(${post.id})">Delete</button>
      `;
      postsList.appendChild(listItem);
    });
  })
  .catch(function(error) {
    console.error('Error:', error);
  });

// Edit a post
function editPost(postId) {
  const newTitle = prompt('Enter the new title:');
  if (!newTitle) return;

  fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
    method: 'PATCH',
    body: JSON.stringify({ title: newTitle }),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  })
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log(data);
      // Refresh the posts after editing
      fetchPosts();
    })
    .catch(function(error) {
      console.error('Error:', error);
    });
}

// Delete a post
function deletePost(postId) {
  if (!confirm('Are you sure you want to delete this post?')) return;

  fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
    method: 'DELETE',
  })
    .then(function(response) {
      if (response.ok) {
        // Refresh the posts after deleting
        fetchPosts();
      } else {
        throw new Error('Error:', response.status);
      }
    })
    .catch(function(error) {
      console.error('Error:', error);
    });
}

// Filter posts
fetch('https://jsonplaceholder.typicode.com/posts?userId=1') 
    .then(function(response) {
    return response.json();
  })
  .then(function(posts) {
    const postsList = document.getElementById('postsList');
    postsList.innerHTML = '';

    // Create list items
    posts.forEach(function(post) {
      const listItem = document.createElement('li');
      listItem.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
        <button onclick="editPost(${post.id})">Edit</button>
        <button onclick="deletePost(${post.id})">Delete</button>
      `;
      postsList.appendChild(listItem);
    });
  })
  .catch(function(error) {
    console.error('Error:', error);
  });