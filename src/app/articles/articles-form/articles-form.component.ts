import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IArticle } from '../article.model';
import { ArticleService } from '../article.service';


@Component({
  selector: 'app-articles-form',
  templateUrl: './articles-form.component.html',
  styleUrls: ['./articles-form.component.css']
})
export class ArticlesFormComponent implements OnInit,OnChanges {
  public articleForm;
  @Output() onArticleSave:EventEmitter<any>= new EventEmitter<any>()
  @Input() article?:IArticle
  @Input() context:any;
  
  constructor(private fb:FormBuilder, private articleService:ArticleService) {
      this.articleForm=fb.group({
        id:[''],
        title:[''],
        description:[''],
        photo:[''],
        taille:[''],
        nbreArticle:[''],
        prix:['']
      })
     }

  ngOnInit(): void {
  }
  
  ngOnChanges(){
    this.articleForm.patchValue({id:this.article?.id})
    this.articleForm.patchValue({title:this.article?.title})
    this.articleForm.patchValue({description:this.article?.description})
    this.articleForm.patchValue({photo:this.article?.photo})
    this.articleForm.patchValue({taille:this.article?.taille})
    this.articleForm.patchValue({nbreArticle:this.article?.nbreArticle})
    this.articleForm.patchValue({prix:this.article?.prix})
  }
  
  // addArticleEvent(){
  //   this.onAddArticle.next('onAddArticle')
  // }
  
  saveArticle(){
    if(this.context==='ADD'){
      this.articleService.addArticle(this.articleForm.value).subscribe(data=>{
        this.onArticleSave.emit('Ok')
      })
    }else if(this.context==='UPDATE'){
      this.articleService.updateArticle(this.articleForm.value).subscribe(data=>{
        this.onArticleSave.emit('Ok')
      })
    }
  }
}
    
