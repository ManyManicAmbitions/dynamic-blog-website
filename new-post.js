document.getElementById("newPostForm").addEventListener("submit", function(event){
    event.preventDefault();

    const title = document.getElementById("title").value;

    const content = document.getElementById("content").value;

    if (title.trim() === "" || content.trim() === ""){
        alert("The title and content is required.");
        return;
    }

    const newPost = {title, content};
    savePostToLocalStorage(newPost)

    alert("Saved the post successfully.");
    window.location.href = "index.html";
});

function savePostToLocalStorage(post){
    let posts = JSON.parse(localStorage.getItem("blogPosts")) || [];
    posts.push(post);
    localStorage.setItem("blogPosts", JSON.stringify(posts));
}