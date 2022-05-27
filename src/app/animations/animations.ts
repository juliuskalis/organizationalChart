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
      style({transform: 'translate(-50%, -120px)', backdropFilter: 'blur(8px)'}),
      animate('200ms ease-out', style({transform: 'translate(-50%, 0)', backdropFilter: 'blur(8px)'}))
    ]),
    transition(':leave', [
      query('@toggleHeightAndItemFade', animateChild(), {optional: true}),
      style({transform: 'translate(-50%, 0)', backdropFilter: 'blur(8px)'}),
      animate('200ms ease-in', style({transform: 'translate(-50%, -120px)', backdropFilter: 'blur(8px)'}))
    ])
  ]);

export const slideInAndOutReversed =
  trigger('slideInAndOutReversed', [
    transition(':enter', [
      style({transform: 'translate(-50%, 120px)', backdropFilter: 'blur(8px)'}),
      animate('200ms ease-out', style({transform: 'translate(-50%, 0)', backdropFilter: 'blur(8px)'}))
    ]),
    transition(':leave', [
      query('@toggleHeightAndItemFade', animateChild(), {optional: true}),
      style({transform: 'translate(-50%, 0)', backdropFilter: 'blur(8px)'}),
      animate('200ms ease-in', style({transform: 'translate(-50%, 120px)', backdropFilter: 'blur(8px)'}))
    ])
  ]);

export const slideInAndOutPhone =
  trigger('slideInAndOutPhone', [
    transition(':enter', [
      style({transform: 'translateY(-120px)', backdropFilter: 'blur(8px)'}),
      animate('200ms ease-out', style({transform: 'translateY(0)', backdropFilter: 'blur(8px)'}))
    ]),
    transition(':leave', [
      query('@toggleHeightAndItemFade', animateChild(), {optional: true}),
      style({transform: 'translateY(0)', backdropFilter: 'blur(8px)'}),
      animate('200ms ease-in', style({transform: 'translateY(-120px)', backdropFilter: 'blur(8px)'}))
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
      query('.animationItem', style({transform: 'translateY(8px)', opacity: 0})),
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

export const transformInOut =
  trigger('transformInOut', [
    transition(':enter', [
      style({transform: 'scale(.5) translate(-3rem, -3rem)', opacity: 0}),
      animate('200ms ease-out', style({transform: 'scale(1) translate(0, 0)', opacity: 1}))
    ]),
    transition(':leave', [
      // query('@toggleHeightAndItemFade', animateChild(), {optional: true}),
      style({transform: 'scale(1) translate(0, 0)', opacity: 1}),
      animate('200ms ease-in', style({transform: 'scale(.5) translate(-3rem, -3rem)', opacity: 0}))
    ])
  ]);

export const scale =
  trigger('scale', [
    transition(':enter', [
      style({transform: 'scale(0)'}),
      animate('200ms ease-in-out', style({transform: 'scale(1)'}))
    ]),
    transition(':leave', [
      style({transform: 'scale(1)'}),
      animate('200ms ease-in-out', style({transform: 'scale(0)'}))
    ])
  ]);
