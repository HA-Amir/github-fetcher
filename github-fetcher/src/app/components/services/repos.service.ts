import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ReposService {

    constructor(private httpClient: HttpClient) {}
    
    private clientid = 'f3571d8e55e169540825';
    private clientsecret = 'a6c2b7d8f7c691e771b1908873e1322028e097c4';
    getReposByUsername(username: string){
       return  this.httpClient
            .get(`https://api.github.com/users/${username}/repos`)
    }

    
    getProfileInfo(username:String){
    return this.httpClient.get("https://api.github.com/users/" + username + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)

}


}