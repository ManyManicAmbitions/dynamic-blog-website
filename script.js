const postTitleInput = document.getElementById("post-title");
const postContentInput = document.getElementById("post-content");
const saveBtn = document.getElementById("save-btn");
const postList = document.getElementById("post-list");

saveBtn.addEventListener("click", savePost);

function savePost(){
    const title = postTitleInput.value;
    const content = postContentInput.value;
        if (title && content){
            const newPost = {
                title: title,
                content: content
            };
            let storedPosts = JSON.parse(localStorage.getItem("blogPosts")) || [];
                storedPosts.push(newPost);
            
                localStorage.setItem("blogPosts", JSON.stringify(storedPosts));

                postTitleInput.value = "";
                postContentInput.value = "";

            loadBlogPosts();
        }
}

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