import { Component, OnInit } from '@angular/core';
import { FetchUserRepos } from '../../actions/repos.action';
import { Store } from '@ngrx/store';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import 'rxjs'
import { ReposService } from '../../services/repos.service'

@Component({
  selector: 'app-repos-list',
  templateUrl: './repos-list.component.html',
  styleUrls: ['./repos-list.component.css'],
})
export class ReposListComponent implements OnInit {
  public username: string = '';
  search = faSearch
  constructor(private store: Store,private reposService: ReposService) {}
  
  ngOnInit(): void {
  }
  
  public repos =  this.store.select((state: any) => state.repositories.repos);
  public loading =  this.store.select((state: any) => state.repositories.loading);
  public result: any = []
  public profile:any=[]; 
  


  Search(username: string): void {
    if (!this.username) {
      alert (' Please enter a Github Username ');
    } else {
      this.reposService.getProfileInfo(this.username)
      .subscribe((profile)=>{ 
        console.log(profile);
        this.profile =profile})
      this.store.dispatch(FetchUserRepos({ username }));
    }
  }
}
