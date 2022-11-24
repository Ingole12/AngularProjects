import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'angularapp';
  name='HI DataBinding';
  serverCreationStatus:string='Server not Created';

  serverId:number=10;
  serverStatus:string='online';
  // imgurl='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png?20221110153201';
  servername:string='liveserver';

  onclickServer(){
    this.serverCreationStatus='server Created';
  }
  allowNewServer = false;

  getServerStatus(){
    return this.serverStatus;
  }
  constructor(){
    // setTimeout(()=>{
    //    this.allowNewServer=true;
    // },2000);
  }
}
