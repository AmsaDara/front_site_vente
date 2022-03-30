import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IArticle } from './article.model';

export const INITIAL_ARTICLES: IArticle[] = [
  
];

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private articles: IArticle[]=[];
  
  constructor(private http:HttpClient){
    
  }
  
  getAllArticles ():Observable<any>{
    return this.http.get('http://localhost:3000/articles/featured') as Observable<IArticle[]> 
  }
  
  addArticle(article:IArticle):Observable<IArticle>{
    return this.http.post('http://localhost:3000/articles',article) as Observable<IArticle>
  }
  
  // addArticleToTheList(article:IArticle):void{
  //   this.articles.push(article);
  // }
  
  removeArticle(article:IArticle):Observable<any>{
    return this.http.delete(`http://localhost:3000/articles/${article.id}`)
  }
  
  updateArticle(article:IArticle):Observable<any>{
    return this.http.put(`http://localhost:3000/articles/${article.id}`,article)
    
  }
  
}
