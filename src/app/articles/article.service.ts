import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IArticle } from './article.model';

export const INITIAL_ARTICLES: IArticle[] = [];

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http:HttpClient){}
  
  getAllArticles ():Observable<any>{
    return this.http.get(`${environment.BASE_API_URI}/articles/featured`) as Observable<IArticle[]> 
  }
  
  addArticle(article:IArticle):Observable<IArticle>{
    return this.http.post(`${environment.BASE_API_URI}/articles`,article) as Observable<IArticle>
  }
  
  // addArticleToTheList(article:IArticle):void{
  //   this.articles.push(article);
  // }
  
  removeArticle(article:IArticle):Observable<any>{
    return this.http.delete(`${environment.BASE_API_URI}/articles/${article.id}`)
  }
  
  updateArticle(article:IArticle):Observable<any>{
    return this.http.put(`${environment.BASE_API_URI}/articles/${article.id}`,article)
    
  }
  
}
