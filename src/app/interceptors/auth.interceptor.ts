import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authToken: string = 'my-secret-token';
  const language: string = 'en';

  const clonedRequest = req.clone({
    setHeaders: {
      Authorization: `Bearer ${authToken}`,
      'X-Source-System': 'WEB',
      'CGI-COM': 'WEB',
      'Accept-Language': `${language}`
    }
  });
  return next(clonedRequest);
};
