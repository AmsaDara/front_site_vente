// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  BASE_API_URI : 'http://localhost:3000',
  CLOUDINARY: {
    CLOUD_NAME: 'alfa-computers',
    API_KEY: '284629792882378',
    API_SECRET: 'lRTk5ONZWexPauyAyu8_fjvWCMc',
    API_ENVIRONMENT_VARIABLE: {
      CLOUDINARY_URL: `cloudinary://284629792882378:lRTk5ONZWexPauyAyu8_fjvWCMc@alfa-computers`
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
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
