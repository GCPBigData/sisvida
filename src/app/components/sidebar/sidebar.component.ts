import { Component, OnInit } from '@angular/core';

declare interface RouteInfo {
  path: string;
  title: string;
  rtlTitle: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  {
    path: '/dashboard',
    title: 'Dashboard',
    rtlTitle:'Dashboard',
    icon: 'icon-chart-pie-36',
    class: ''
  },
  {
    path: '/user',
    title: 'Usuário',
    rtlTitle: 'Usuário',
    icon: 'icon-single-02',
    class: ''
  },
  {
    path: '/funcionario',
    title: 'Funcionário',
    rtlTitle: 'funcionário',
    icon: 'icon-satisfied',
    class: ''
  }
  ,
  {
    path: '/paciente',
    title: ' Paciente',
    rtlTitle: ' Paciente',
    icon: 'icon-trophy',
    class: ''
  },
  {
    path: '/exame',
    title: 'Exames ',
    rtlTitle: ' Exames',
    icon: 'icon-map-big',
    class: ''
  },
  {
    path: '/prontuario',
    title: 'Prontuário Eletrônico',
    rtlTitle: ' Prontuário Eletrônico',
    icon: 'icon-light-3',
    class: ''
  },
  {
    path: '/laudo',
    title: 'Laudo ',
    rtlTitle: ' Laudo',
    icon: 'icon-pin',
    class: ''
  },
  {
    path: '/ia',
    title: 'Inteligência Artificial ',
    rtlTitle: ' Inteligência Artificial',
    icon: 'icon-atom',
    class: ''
  },
  {
    path: '/fileupload',
    title: 'Relatorios ',
    rtlTitle: ' Relatorios',
    icon: 'icon-cloud-upload-94',
    class: ''
  },
  {
    path: '/message',
    title: 'Atendimento Online ',
    rtlTitle: ' Atendimento Online',
    icon: 'icon-send',
    class: ''
  },
  {
    path: '/central',
    title: 'Central Ajustes',
    rtlTitle: ' Central Ajustes',
    icon: 'icon-video-66',
    class: ''
  },
  {
    path: '/area',
    title: 'Area',
    rtlTitle: ' Area',
    icon: 'icon-video-66',
    class: ''
  }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() {}

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }
}
