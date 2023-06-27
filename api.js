const githubUserInformation = document.querySelector('.username');
const SearchButton = document.querySelector('.searchInfo');
const displayInformation = document.querySelector('.userInformation')

// fetching the data from githubs api 
async function fetchUserInfo(username) {
    // const username = githubUserInformation.value.trim();
    try {         
        const response = await fetch(`https://api.github.com/users/${username}`); //template literal
        const userInfo = await response.json();    
        return userInfo;
    } catch (error) {
        console.log(error.message);
    }
}

// const getData = async () => {
//     const userData = githubUserInformation.value.trim();
//     const request = await fetch(`https://api.github.com/users/${userData}`);

//     const response = await request.json();
//     return response;

// }

// getData().then(data => {
//     if (!data) throw new Error(`${userName.value} is not a valid user`);
// }).catch( (err) => console.log.Error(err));


SearchButton.addEventListener("click", loadData);

// githubUserInformation.addEventListener("keyup", loadData);


const display = function (userInfo) {
    if (!userInfo) {
        alert("No user found");       
        return;
    }else if (userInfo.name === undefined) {
        alert("No user found");
    }


 const display = `
        <img src="${userInfo.avatar_url}" alt="">
        <p><b>Name : ${userInfo.Name} </b></p>
        <small>@username : ${userInfo.login}</small> <br>
        <small>joined : ${new Date(userInfo.created_at).toLocaleDateString()}</small>
        <p>following : ${userInfo.following}</p> <p>follower : ${userInfo.follower}</p>
        `;
        displayInformation.innerHTML = display;
           
}

 async function loadData() {
    const username = githubUserInformation.value.trim();

    if (username === "") {
        alert("Please enter a username");
        
    }
    const userInfo = await fetchUserInfo(username);
    display(userInfo);    
}