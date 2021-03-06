import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    new Quote(1, "Nancy","Success is most often achieved by those who do not know that failure is inevitable.", "Coco Chanel", new Date(2021, 5,20),0, 0),
    new Quote(3, "Nancy", "If you do what you’ve always done, you’ll get what you’ve always gotten.", "Tony Robbins",new Date(2021, 5,8),0,0),
    new Quote(4, "Nancy", "There is only one way to avoid criticism: do nothing, say nothing, and be nothing.",  "Aristotle",new Date(2021, 5,10,),0,0),
    new Quote(5, "Nancy", "Only those who will risk going too far can possibly find out how far one can go.", "T. S. Eliot",new Date(2021, 5,16),0,0),
    new Quote(6, "Nancy", "If you don’t build your dream, someone else will hire you to help them build theirs.", "Dhirubhai Ambani",new Date(2021, 5,6), 0,0),
    new Quote(7,"Nancy", "Life is being on the wire, everything else is just waiting.", "Karl Wallenda",new Date(2021, 5,25),0,0),
  ];

  currentValue:number;
  newValue:number;
  counter:number;
  highestUpvote(){
    this.currentValue = 0
    this.newValue = 0

    for(this.counter=0 ; this.counter < this.quotes.length; this.counter++) {
      this.newValue = this.quotes[this.counter].upvote;
      if(this.newValue > this.currentValue){this.currentValue = this.newValue}
    }
    return  this.currentValue
  }

    toggleQuotes(index){
      this.quotes
      [index].showDescription = !this.quotes[index].showDescription;
    }
  
    completeQuote(isComplete, index){
      if (isComplete) {
        this.quotes.splice(index,1);
      }
    }
  
    deleteQuote(isComplete, index){
      if (isComplete) {
        let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)//alert
  
        if (toDelete){
          this.quotes.splice(index,1)
        }
      }
    }
  
    addNewQuote(quote){
      let quoteLength = this.quotes.length;
      quote.id = quoteLength + 1;
      quote.completeDate = new Date( quote.completeDate) 
      this.quotes.push(quote);
  }

  
    
    constructor() { }
  
    ngOnInit() {
    }
  
  }
  
