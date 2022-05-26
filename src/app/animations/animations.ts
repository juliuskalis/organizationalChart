import {
  AUTO_STYLE,
  animate,
  style,
  transition,
  trigger,
  query,
  stagger,
  animateChild
} from '@angular/animations';

export const slideInAndOut =
  trigger('slideInAndOut', [
    transition(':enter', [
      style({transform: 'translate(-50%, -120px)'}),
      animate('200ms ease-out', style({transform: 'translate(-50%, 0)'}))
    ]),
    transition(':leave', [
      query('@toggleHeightAndItemFade', animateChild(), {optional: true}),
      style({transform: 'translate(-50%, 0)'}),
      animate('200ms ease-in', style({transform: 'translate(-50%, -120px)'}))
    ])
  ]);

export const toggleHeightAndItemFade =
  trigger('toggleHeightAndItemFade', [
    transition(':enter', [
      style({height: '0'}),
      animate('300ms ease-in-out', style({height: AUTO_STYLE})),
      query('@loadItemsInAndOut', animateChild()),
    ]),
    transition(':leave', [
      query('@loadItemsInAndOut', animateChild()),
      style({height: AUTO_STYLE}),
      animate('300ms ease-in-out', style({height: '0'})),
    ])
  ]);

export const loadItemsInAndOut =
  trigger('loadItemsInAndOut', [
    transition(':enter', [
      query('.animationItem', style({transform: 'translateY(-8px)', opacity: 0})),
      query('.animationItem',
        stagger('100ms', [
          animate('200ms ease-in-out', style({transform: 'translateY(0)', opacity: 1}))
        ])
      )
    ]),
    transition(':leave', [
      query('.animationItem', style({transform: 'translateY(0)', opacity: 1})),
      query('.animationItem',
        stagger('-100ms', [
          animate('200ms ease-in-out', style({transform: 'translateY(8px)', opacity: 0}))
        ])
      )
    ])
  ]);
