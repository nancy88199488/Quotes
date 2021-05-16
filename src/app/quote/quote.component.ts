import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    new Quote(1, "Success is most often achieved by those who don’t know that failure is inevitable.",  " By Coco Chanel",new Date(2021, 5,16)),
    new Quote(2, "I refuse to accept other people’s ideas of happiness for me. As if there’s a one size fits all standard for happiness.", "By Kanye West",new Date(2021, 5,16)),
    new Quote(3, "If you do what you’ve always done, you’ll get what you’ve always gotten.", " By Tony Robbins",new Date(2021, 5,16)),
    new Quote(4, "There is only one way to avoid criticism: do nothing, say nothing, and be nothing.",  "By Aristotle",new Date(2021, 5,16)),
    new Quote(5, "I am thankful for all of those who said NO to me. It’s because of them I’m doing it myself.", "By Albert Einstein",new Date(2021, 5,16)),
    new Quote(6, "Only those who will risk going too far can possibly find out how far one can go.", "By T. S. Eliot",new Date(2021, 5,16)),
    new Quote(7, "Only those who play to win. Only those who risk to win. History favors risk-takers. Forgets the timid. Everything else is commentary.", "By Iveta Cherneva",new Date(2021, 5,16)),
    new Quote(8, "If you don’t build your dream, someone else will hire you to help them build theirs.", "By  Dhirubhai Ambani",new Date(2021, 5,16)),
    new Quote(9, "Don’t be too timid and squeamish about your actions. All life is an experiment. The more experiments you make the better.", " By Ralph Waldo Emerson",new Date(2021, 5,16)),
    new Quote(10, "Life is being on the wire, everything else is just waiting.", "By Karl Wallenda",new Date(2021, 5,16)),
  ];

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
  
