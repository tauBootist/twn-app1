import { Component, OnInit } from '@angular/core';
import { continents } from 'src/app/data/data';

enum QuizLevel {
  continent = 0,
  country = 1,
  city = 2,
}

interface Option {
  optionId: string;
  optionText: string;
}
interface Question {
  questionText: string;
  options: Option[];
}

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
})
export class QuizComponent implements OnInit {
  currentLevel: QuizLevel = QuizLevel.continent;
  currentQuestion: Question = {
    questionText: '',
    options: [],
  };

  constructor() {}

  ngOnInit() {
    this.loadQuestion();
  }

  private loadQuestion() {
    switch (this.currentLevel) {
      case QuizLevel.continent: {
        this.currentQuestion.questionText = 'Select a continent';
        this.currentQuestion.options = continents.map(item => ({
          optionId: item.id,
          optionText: item.name,
        }));
      }
    }
  }

  reset() {
    this.currentLevel = QuizLevel.continent;
  }
}
