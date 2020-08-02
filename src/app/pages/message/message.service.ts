import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

declare var SockJS;
declare var Stomp;
@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private toastr: ToastrService) {
    this.initializeWebSocketConnection();
  }
  public stompClient;
  public msg = [];
  initializeWebSocketConnection() {
    this.showNotification(`bottom`, `right`);
    const serverUrl = 'http://191.252.204.57:8081/socket';
    const ws = new SockJS(serverUrl);
    this.stompClient = Stomp.over(ws);
    const that = this;
    // tslint:disable-next-line:only-arrow-functions
    this.stompClient.connect({}, function(frame) {

      that.stompClient.subscribe('/message', (message) => {
        if (message.body) {
          that.msg.push(message.body);
        }
      });
    });
  }

  sendMessage(message) {
    this.stompClient.send('/app/send/message' , {}, message);
    this.showNotification(`bottom`, `right`);
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
}
