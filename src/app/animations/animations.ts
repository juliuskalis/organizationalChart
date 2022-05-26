import {
  AUTO_STYLE,
  animate,
  state,
  style,
  transition,
  trigger,
  query,
  stagger, keyframes, animation, animateChild
} from '@angular/animations';

export const slideInAndOut =
  trigger('slideInAndOut', [
    transition(':enter', [
      style({opacity: 0, transform: 'translate(-50%, -120px)'}),
      animate('300ms ease-in-out', style({opacity: 1, transform: 'translate(-50%, 0)'}))
    ]),
    transition(':leave', [
      style({opacity: 1, transform: 'translate(-50%, 0)'}),
      animate('300ms ease-in-out', style({opacity: 0, transform: 'translate(-50%, -120px)'}))
    ])
  ]);



export const toggleHeightAndItemFade =
  trigger('toggleHeightAndItemFade', [
    transition(':enter', [
      style({height: '0'}),
      animate('300ms ease-in-out', style({height: (60 * 3) + 'px'}))
    ]),
    transition(':leave', [
      style({height: (60 * 3) + 'px'}),
      animate('300ms 500ms ease-in-out', style({height: '0'}))
    ]),
    transition(':enter, :leave', [
      query('@loadItemsInAndOut', animateChild()),
    ])
  ]);

export const loadItemsInAndOut =
  trigger('loadItemsInAndOut', [
    transition(':enter', [
      query('.animationItem', style({transform: 'translateY(-8px)', opacity: 0})),
      query('.animationItem',
        stagger('100ms', [
          animate('200ms 200ms ease-in-out', style({transform: 'translateY(0)', opacity: 1}))
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



export const toggleSelectedUserBox =
  trigger('toggleSelectedUserBox', [
    state('show', style({
      height: (42 * 3) + 'px',
    })),
    state('hide', style({
      height: '0',
    })),
    transition('show => hide', [animate('300ms ease')])
  ]);

export const closeSelectedUserBox =
  trigger('closeSelectedUserBox', [
    transition(':leave', [
      style({height: (42 * 3) + 'px'}),
      animate('300ms ease-in-out', style({height: '0'}))
    ])
  ]);


// export const transformYAndFadeIn =
//   trigger('transformYAndFadeIn', [
//     transition(':enter', [
//       animate('1000ms 300ms', keyframes([
//         style({height: '0', opacity: 0, offset: 0}),
//         style({height: AUTO_STYLE, opacity: 0, offset: 0.5}),
//         style({height: AUTO_STYLE, opacity: 0, offset: 0.7}),
//         style({height: AUTO_STYLE, opacity: 1, offset: 1})
//       ]))
//     ])
//   ]);

// export const transformYAndFadeOut =
//   trigger('transformYAndFadeOut', [
//     transition(':leave', [
//       animate('1000ms', keyframes([
//         style({height: AUTO_STYLE, opacity: 1, offset: 0}),
//         style({height: AUTO_STYLE, opacity: 0, offset: 0.3}),
//         style({height: AUTO_STYLE, opacity: 0, offset: 0.5}),
//         style({height: '0', opacity: 0, offset: 1})
//       ]))
//     ])
//   ]);
