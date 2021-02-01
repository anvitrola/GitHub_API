class GhViews {
    constructor (model){
        let $ = document.createElement.bind(document);
        let $$ = document.getElementById.bind(document);
        
        this.img = $('img');
        this.user = $('h3');
        
        this.repos = "";
        model.repositories.forEach(element => {
            this.repos += ` <a href="${element.url}">${element.name} - ${element.language}</a>`
        });

        this.ulRepos = `Public Repositories: <ul class = "repoList">${this.repos}</ul>`;

        this.img.setAttribute('id','userImg');

        this.imgDiv = $$('imgDiv');
        this.usernameDiv = $$('usernameDiv');
        this.reposDiv = $$('reposDiv');
        
        this.img.src = model.pictureUrl;
        this.user.textContent = model.username;
        
        imgDiv.appendChild(this.img);
        usernameDiv.appendChild(this.user);
        
        this.reposDiv.innerHTML = this.ulRepos;
    }
    
}