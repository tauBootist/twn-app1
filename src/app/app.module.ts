import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { NavBarItemComponent } from './components/nav-bar-item/nav-bar-item.component';
import { QuestionComponent } from './components/question/question.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { OptionComponent } from './components/option/option.component';

@NgModule({
  declarations: [AppComponent, NavBarComponent, NavBarItemComponent, QuestionComponent, QuizComponent, OptionComponent],
  imports: [BrowserModule, AppRoutingModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
