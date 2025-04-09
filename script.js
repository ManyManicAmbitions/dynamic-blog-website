function loadBlogPosts(){
    const postList = document.getElementById("post-list");
    const storedPosts = JSON.parse(localStorage.getItem("blogPosts")) || [];

    postList.innerHTML = "";

    storedPosts.forEach((post, index) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = 
        `<h3><a href="post.html?id=${index}">${post.title}</a></h3>
        <p>${post.content}</p>`;

        postList.appendChild(listItem);
    })
}
window.addEventListener("load", loadBlogPosts);