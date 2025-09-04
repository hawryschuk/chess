import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Terminal, ServiceCenterClient, ServiceCenter } from '@hawryschuk-terminal-restapi';
import { ServiceCenterComponent } from '@hawryschuk-terminal-restapi/frontend/src/app/service-center/service-center.component';
import { CommonModule } from '@angular/common';
import { Util } from '@hawryschuk-common/util';
import { ChessService } from '../../ChessService';
import { ChessComponent } from './chess/chess.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ServiceCenterComponent, ChessComponent],
  providers: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  terminal = new Terminal;
  terminals = [this.terminal];
  serviceCenter = new ServiceCenter().register(ChessService);
  get client() { return ServiceCenterClient.getInstance(this.terminal); }

  async ngOnInit() {
    Object.assign(window, { app: this, Util });

    await this.serviceCenter.join(this.terminal);
    await this.terminal.answer({
      name: 'alex',
      service: 'Chess',
      menu: [
        'Create Table',
        'Sit',
        'Ready',
        'Invite Robot',
      ],
      // move: [
      //   { from: 'e2', to: 'e4' },
      //   { from: 'f1', to: 'c4' },
      //   { from: 'd1', to: 'f3' },
      //   { from: 'f3', to: 'f7' },
      // ]
    });
  }

}
