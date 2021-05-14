import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    {id:1, name:"Success is most often achieved by those who don’t know that failure is inevitable.” – Coco Chanel"},
    {id:2, name:"I refuse to accept other people’s ideas of happiness for me. As if there’s a one size fits all standard for happiness.”  – Kanye West"},
    {id:3, name:"If you do what you’ve always done, you’ll get what you’ve always gotten.”  – Tony Robbins"},
    {id:4, name:"There is only one way to avoid criticism: do nothing, say nothing, and be nothing.”  – Aristotle"},
    {id:5, name:"I am thankful for all of those who said NO to me. It’s because of them I’m doing it myself.” – Albert Einstein"},
    {id:6, name:"Only those who will risk going too far can possibly find out how far one can go.” – T. S. Eliot"},
    {id:7, name:"Only those who play to win. Only those who risk to win. History favors risk-takers. Forgets the timid. Everything else is commentary.” – Iveta Cherneva"},
    {id:8, name:"If you don’t build your dream, someone else will hire you to help them build theirs.” – Dhirubhai Ambani"},
    {id:9, name:"Don’t be too timid and squeamish about your actions. All life is an experiment. The more experiments you make the better.” – Ralph Waldo Emerson"},
    {id:10, name:"Life is being on the wire, everything else is just waiting.” – Karl Wallenda"}
  ];
  constructor() { }

  ngOnInit() {
  }

}
