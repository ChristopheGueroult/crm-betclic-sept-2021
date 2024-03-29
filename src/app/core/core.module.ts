import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { IconsModule } from '../icons/icons.module';
import { LoginModule } from '../login/login.module';
import { TemplateModule } from '../template/template.module';
import { UiModule } from '../ui/ui.module';
import { FooterComponent } from './components/footer/footer.component';
import { Footer2Component } from './components/footer2/footer2.component';
import { HeaderComponent } from './components/header/header.component';
import { Header2Component } from './components/header2/header2.component';
import { NavComponent } from './components/nav/nav.component';
import { Nav2Component } from './components/nav2/nav2.component';

@NgModule({
  declarations: [
    HeaderComponent,
    NavComponent,
    FooterComponent,
    Header2Component,
    Nav2Component,
    Footer2Component,
  ],
  imports: [CommonModule, RouterModule, IconsModule, TranslateModule],
  exports: [
    UiModule,
    LoginModule,
    TemplateModule,
    IconsModule,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    Header2Component,
    Nav2Component,
    Footer2Component,
  ],
})
export class CoreModule {}
