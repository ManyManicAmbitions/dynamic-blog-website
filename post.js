document.addEventListener("DOMContentLoaded", function(){
    const postId = new URLSearchParams(window.location.search).get("id");
    const storedPosts = JSON.parse(localStorage.getItem("blogPosts")) || [];
    const post = storedPosts[postId];

    if (post){
        document.getElementById("post-title").innerText = post.title;
        document.getElementById("post-content").innerText = post.content
    }

    document.getElementById("edit-btn").addEventListener("click", function(){
        document.getElementById("post-title").contentEditable = true;
        document.getElementById("post-content").contentEditable = true;
        document.getElementById("edit-btn").style.display = "none";
        document.getElementById("save-btn").style.display = "block";
    });

    document.getElementById("save-btn").addEventListener("click", function(){
        post.title = document.getElementById("post-title").innerText;
        post.content = document.getElementById("post-content").innerText;
            storedPosts[postId] = post;
            localStorage.setItem("blogPosts", JSON.stringify(storedPosts));

            document.getElementById("post-title").contentEditable = false;
            document.getElementById("post-content").contentEditable = false;
            document.getElementById("edit-btn").style.display = "block";
            document.getElementById("save-btn").style.display = "none"

            alert("Post updated");
    });

    document.getElementById("delete-btn").addEventListener("click", function(){
        if (confirm("Please confirm you want to delete this post")){
          storedPosts.splice(postId, 1);  
          localStorage.setItem("blogPosts", JSON.stringify(storedPosts));
            document.getElementById("post-details").innerHTML = "<h2>Post Deleted</h2>";
        }
    })
});