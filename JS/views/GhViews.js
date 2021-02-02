class GhViews {
    constructor (model){
        let $ = document.createElement.bind(document);
        let $$ = document.getElementById.bind(document);

        let sectionPrimary = $$('profileSection');

        if(model.repositories == "Error"){
            sectionPrimary.classList.remove('profileSection');
            sectionPrimary.classList.add('pageError');
            this.clearLayout(true);
        } else {
            sectionPrimary.classList.remove('pageError');
            sectionPrimary.classList.add('profileSection');

            if(document.getElementById('userImg')){
                this.clearLayout(false);
            }
            this.img = $('img');
            this.user = $('h3');
            
            this.repos = "";
            model.repositories.forEach(element => {
                this.repos += ` <a href="${element.url}">${element.name} - ${element.language}</a>`
            });
    
            this.ulRepos = `Public Repositories: <ul class = "repoList">${this.repos}</ul>`;
    
            this.img.setAttribute('id','userImg');
            this.user.setAttribute('id','userName');
    
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
    clearLayout(removeReposToo){
        if(removeReposToo){
            document.getElementById('container').remove();
        }
        document.getElementById('userImg').remove();
        document.getElementById('userName').remove();
    }
}