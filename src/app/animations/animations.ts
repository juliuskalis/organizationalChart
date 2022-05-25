import {
  AUTO_STYLE,
  animate,
  state,
  style,
  transition,
  trigger,
  query,
  stagger
} from '@angular/animations';

export const slideIn =
  trigger('slideIn', [
    transition(':enter', [
      style({opacity: 0, transform: 'translate(-50%, -120px)'}),
      animate('300ms ease-in-out', style({opacity: 1, transform: 'translate(-50%, 0)'}))
    ])
  ]);

export const slideOut =
  trigger('slideOut', [
    transition(':leave', [
      style({opacity: 1, transform: 'translate(-50%, 0)'}),
      animate('300ms ease-in-out', style({opacity: 0, transform: 'translate(-50%, -120px)'}))
    ])
  ]);
