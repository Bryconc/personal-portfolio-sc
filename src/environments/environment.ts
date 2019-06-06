// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  birthday: '1994-12-31T12:00:00.000Z',
  links: {
    linkedIn: 'https://linkedin.com/in/bryconc',
    email: 'bryconc@gmail.com',
    github: 'https://github.com/bryconc',
    resume:
      'https://drive.google.com/file/d/0B8gACi5Av5KxSk1BUGF5dWRGV1U/view?usp=sharing'
  },
  images: {
    homePagePicture: {
      ref: 'https://i.imgur.com/4bfS7ng.jpg',
      alt: 'A photo of Brycon with snowy background.'
    },
    aboutPagePicture: {
      ref: 'https://i.imgur.com/V0MHWPw.jpg',
      alt: 'A photo of Brycon in a casual environment in fleece jacket.'
    }
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
