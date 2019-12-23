import { Component, Input } from '@angular/core';
import RepoDetails from "../../entities/RepoDetails";

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export default class HeaderComponent {
    @Input() repositorydetails: RepoDetails;
}
