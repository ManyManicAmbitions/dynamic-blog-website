function loadBlogPosts(){
    const postList = document.getElementById("post-list");
    const storedPosts = JSON.parse(localStorage.getItem("blogPosts")) || [];

    postList.innerHTML = "";

    storedPosts.forEach(post => {
        const listItem = document.createElement("li");
        listItem.innerHTML =  
        `<h3>${post.title}</h3>
        <p>${post.content}</p>`;

        postList.appendChild(listItem);
    });
}
window.addEventListener("load", loadBlogPosts);