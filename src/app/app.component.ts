import {
  NzContentComponent,
  NzHeaderComponent,
  NzLayoutComponent,
  NzSiderComponent
} from "ng-zorro-antd/layout";
import {FaIconComponent, IconDefinition} from "@fortawesome/angular-fontawesome";
import {faCaretDown, faHome} from "@fortawesome/free-solid-svg-icons";
import {Component, HostListener, OnDestroy, OnInit} from '@angular/core';
import {SharedService} from "./services/shared/shared.service";
import {NgClass, NgForOf, NgIf, NgTemplateOutlet} from '@angular/common';
import {NzIconDirective} from "ng-zorro-antd/icon";
import {NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {filter, Subscription} from "rxjs";
import {animate, keyframes, state, style, transition, trigger} from "@angular/animations";
import {MenuItem} from "./model/partner";
import {TranslatePipe} from "./pipes/translation/translate.pipe";
import {TranslationService} from "./services/translation/translation.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NzContentComponent,
    NzHeaderComponent,
    NzLayoutComponent,
    NgTemplateOutlet,
    NzSiderComponent,
    NzIconDirective,
    FaIconComponent,
    TranslatePipe,
    RouterOutlet,
    NgIf,
    NgForOf,
    RouterLink,
    RouterLinkActive,
    NgClass,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [
    trigger('vibrate', [
      state('idle', style({ transform: 'translateX(0)' })),
      state('vibrating', style({})),
      transition('idle => vibrating', [
        animate(
          '300ms',
          keyframes([
            style({ transform: 'translateX(-2px)', offset: 0.1 }),
            style({ transform: 'translateX(2px)', offset: 0.2 }),
            style({ transform: 'translateX(-2px)', offset: 0.3 }),
            style({ transform: 'translateX(2px)', offset: 0.4 }),
            style({ transform: 'translateX(-1px)', offset: 0.5 }),
            style({ transform: 'translateX(1px)', offset: 0.6 }),
            style({ transform: 'translateX(0)', offset: 1 })
          ])
        )
      ])
    ])
  ]
})
export class AppComponent implements OnInit, OnDestroy{
  protected readonly caretDown: IconDefinition = faCaretDown;
  protected readonly homeIcon: IconDefinition = faHome;
  private subscription: Subscription = new Subscription();
  protected isCollapsed: boolean = true;
  protected mobileWidth: number = 985;
  protected windowSize: number = 0;
  protected hoveredIndex: number | null = null;
  protected currentUrl: string = '';
  protected menuItems: MenuItem[] = [
    { label: this.tService.translateMessage('dashboard'), icon: 'home', link: ''},
    { label: this.tService.translateMessage('partners'), icon: 'user', link: '/partners' },
    { label: this.tService.translateMessage('binding'), icon: 'check-square', link: '/binding' },
    { label: this.tService.translateMessage('component_communication'), icon: 'mail', link: '/communication'},
    { label: this.tService.translateMessage('directives_pipes'), icon: 'line', link: '/directives-pipes' },
    { label: this.tService.translateMessage('signals'), icon: 'fork', link: '/signals'},
    { label: this.tService.translateMessage('admin'), icon: 'user-switch', link: '/admin' }
  ];

  constructor(private sharedService: SharedService, private tService: TranslationService, private router: Router) {
    this.subscription.add(
      this.sharedService.windowWidth$.subscribe((width: number) => {
          this.windowSize = width;
        })
    );
  }

  @HostListener('window:resize', ['$event'])
  onResize(): void {
    this.sharedService.setWindowWidthAndHeight(window.innerWidth, window.innerHeight);
  }

  setHover(index: number | null) {
    this.hoveredIndex = index;
  }

  closeDrawer(): void {
    this.isCollapsed = true;
  }

  ngOnDestroy(): void{
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  ngOnInit(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.currentUrl = event.urlAfterRedirects;
      });
  }
}
