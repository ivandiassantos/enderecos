import { HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
    constructor(){}
    intercept(req: import("@angular/common/http").HttpRequest<any>, 
        next: import("@angular/common/http").HttpHandler): 
        import("rxjs").Observable<import("@angular/common/http").HttpEvent<any>> {
            const token = localStorage.getItem('token');
            if(token && !req.url.includes('viacep')){
                req = req.clone({
                    setHeaders:{
                        'Authorization': 'Bearer '+token
                    }
                })
            } 
            return next.handle(req);
    }

}