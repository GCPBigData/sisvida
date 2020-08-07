import { Component, OnInit } from '@angular/core';
import { MessageService } from './message.service';
import { ToastrService } from 'ngx-toastr';
import set = Reflect.set;
import DateTimeFormat = Intl.DateTimeFormat;

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  title = 'message';
  input;
  CurrentTime: any;
  Time = new Date();

  constructor(
    public messageService: MessageService,
    public toastr: ToastrService
  ) {}
  sendMessage() {
    if (this.input) {
      this.messageService.sendMessage(this.input);
      this.input = '';
      /*this.showNotification(`bottom`, `right`);*/
      this.Time = this.Time;
    }
  }

  showNotification(from, align){
        this.toastr.success('<span class="tim-icons icon-bell-55" [data-notify]="icon"></span> Alerta !  <b>Chegou uma mensagem</b> - Favor Verificar !', '', {
          disableTimeOut: true,
          closeButton: true,
          enableHtml: true,
          toastClass: 'alert alert-success alert-with-icon',
          positionClass: 'toast-' + from + '-' +  align
        });
    }
  ngOnInit(): void {
    setInterval(() => {
      this.CurrentTime = new Date().getHours() + ':' + new Date().getMinutes() + ':'+  new Date().getSeconds()}, 1);
  }
}
