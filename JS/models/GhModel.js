class GhModel{
    constructor (user){
        this._username = user;
        this._img = "";
        this._repos = [];
    }
    openRequest(){
        let request = new XMLHttpRequest;
        request.open('GET', `https://api.github.com/users/${this.username}/repos`, false);

        request.addEventListener('load', () =>{
            let results = JSON.parse(request.responseText);
            if(request.status == 200){
                this._img = results[0].owner.avatar_url;

                results.forEach((object)=>{
                    let repository = {
                        name: object.name,
                        url: object.html_url,
                        language: object.language
                    }
                    this._repos.push(repository);
                });
            } else{
                this._repos = "Error";
                throw new Error(`Request error ${request.status}: ${request.statusText}.`);
            }
        });
        request.send();
    }
    get username (){
        return this._username;
    }
    get pictureUrl (){
        return this._img;
    }
    get repositories () {
        return this._repos
    }
}