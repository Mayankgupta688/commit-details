import { Component, OnInit } from '@angular/core';
import RepoDetails from "../../entities/RepoDetails";
import CommitDetails from "../../entities/CommitDetails";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {

  repositoryDetails: RepoDetails;
  commitList: CommitDetails[] = [];

  constructor(private _http: HttpClient) { }

  ngOnInit() {
    this._http.get("https://api.github.com/repos/angular/angular").subscribe((res)=>{
      this.repositoryDetails = new RepoDetails()
      this.repositoryDetails.avatarUrl = res['organization']['avatar_url'];
      this.repositoryDetails.ownerLogin = res['owner']['login'];
      this.repositoryDetails.repositoryName = res['name'];
      this.repositoryDetails.homePage = res["homepage"];
      this.repositoryDetails.repoSize = res["size"];
      this.repositoryDetails.subscribersCount = res["subscribers_count"];
      this.repositoryDetails.defaultBranch = res["default_branch"];
      this.repositoryDetails.openIssueCount = res["open_issues_count"];
      this.repositoryDetails.language = res["language"];
    });

    this._http.get("https://api.github.com/repos/angular/angular/commits").subscribe((commitList: any)=>{
      commitList.forEach(commitData => {
        let singleCommit: CommitDetails = new CommitDetails();
        singleCommit.author = commitData.commit.author.name;
        singleCommit.avatarUrl = commitData.author.avatar_url;
        singleCommit.message = commitData.commit.message
        singleCommit.email = commitData.commit.author.email
        this.commitList.push(singleCommit);
      });
    });
  }
}
