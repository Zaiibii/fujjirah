import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/footer.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import {MdbCheckboxModule} from 'mdb-angular-ui-kit/checkbox';
import { AboutUsComponent } from './about-us/about-us.component';
// import { RouterModule, Routes } from '@angular/router';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NgImageSliderModule } from 'ng-image-slider';
import { SideBarMenueComponent } from './side-bar-menue/side-bar-menue.component';
import { InstantChatComponent } from './instant-chat/instant-chat.component';
import { SearchComponent } from './search/search.component';
import { StrategicPlanComponent } from './AboutUS-SubMenus/strategic-plan/strategic-plan.component';
import { DirectorMsgComponent } from './AboutUS-SubMenus/director-msg/director-msg.component';
import { OrganizationalChartComponent } from './AboutUS-SubMenus/organizational-chart/organizational-chart.component';
import { CertificateAwardsComponent } from './AboutUS-SubMenus/certificate-awards/certificate-awards.component';
import { LawsRegulationsComponent } from './laws-regulations/laws-regulations.component';
import { MediaCenterComponent } from './media-center/media-center.component';
import { ServicesComponent } from './services/services.component';
import { HRLawComponent } from './Laws-Regulations-Sub-Menus/hr-law/hr-law.component';
import { CircularComponent } from './Laws-Regulations-Sub-Menus/circular/circular.component';
import { LegalCultureComponent } from './Laws-Regulations-Sub-Menus/legal-culture/legal-culture.component';
import { HealthSafteyPolicyComponent } from './Laws-Regulations-Sub-Menus/health-saftey-policy/health-saftey-policy.component';
import { QualityPolicyComponent } from './Laws-Regulations-Sub-Menus/quality-policy/quality-policy.component';
import { PrivacyPolicyComponent } from './Laws-Regulations-Sub-Menus/privacy-policy/privacy-policy.component';
import { DisclaimerComponent } from './Laws-Regulations-Sub-Menus/disclaimer/disclaimer.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AboutOverviewComponent } from './about-overview/about-overview.component';
import { LawRegulationOverviewComponent } from './law-regulation-overview/law-regulation-overview.component';
import { EmployeeProcComponent } from './employee-proc/employee-proc.component';
import { RecruitmentComponent } from './recruitment/recruitment.component';
import { LegalAffairsComponent } from './legal-affairs/legal-affairs.component';
import { CarouselComponent } from './carousel/carousel.component';
import { SignInUAEComponent } from './sign-in-uae/sign-in-uae.component';
import { FieldsetModule } from "primeng/fieldset";
import { PartnersComponent } from './partners/partners.component';
import { PartnerSignInComponent } from './partner-sign-in/partner-sign-in.component';
import { JobOfferDetailsComponent } from './job-offer-details/job-offer-details.component';
import { RegisterForPartnerComponent } from './register-for-partner/register-for-partner.component';
import { SpokesPersonComponent } from './spokes-person/spokes-person.component';
import { MediaCenterOpenDataComponent } from './media-center-open-data/media-center-open-data.component';
import { NewsComponent } from './news/news.component';
import { PhotoVideoGalleryComponent } from './photo-video-gallery/photo-video-gallery.component';
import { CareerPlatformComponent } from './career-platform/career-platform.component';
import { JobRegisterationPageComponent } from './job-registeration-page/job-registeration-page.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ServicesOverviewComponent } from './services-overview/services-overview.component';
import { MediaCenterOverviewComponent } from './media-center-overview/media-center-overview.component';
import { CourseTrainingPlatformComponent } from './course-training-platform/course-training-platform.component';
import { CoursesComponent } from './courses/courses.component';
import { ProgramCoursesComponent } from './program-courses/program-courses.component';
import { CoursesDetailsComponent } from './courses-details/courses-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { CoursesRegisterationComponent } from './courses-registeration/courses-registeration.component';
import { SuggestCoursesComponent } from './suggest-courses/suggest-courses.component';
import { TrainingHallBookingComponent } from './training-hall-booking/training-hall-booking.component';
import { TrainingPartnersComponent } from './training-partners/training-partners.component';
import { TrainingPartnerloginComponent } from './training-partnerlogin/training-partnerlogin.component';
import { RegisterationNowComponent } from './registeration-now/registeration-now.component';
import { CoursesOverviewComponent } from './courses-overview/courses-overview.component';
import { CourseTrainingPlatformOverviewComponent } from './course-training-platform-overview/course-training-platform-overview.component';
import { CareerPlatformOverviewComponent } from './career-platform-overview/career-platform-overview.component';
import { RecruitmentOverviewComponent } from './recruitment-overview/recruitment-overview.component';
import { RegisterAsPartnerComponent } from './register-as-partner/register-as-partner.component';
import { TrainingPartnersOverviewComponent } from './training-partners-overview/training-partners-overview.component';
import { TrainingPartnerloginOverviewComponent } from './training-partnerlogin-overview/training-partnerlogin-overview.component';
import { ProgramCoursesOverviewComponent } from './program-courses-overview/program-courses-overview.component';
import { ReadMoreComponent } from './read-more/read-more.component';
import { CarouselTwoComponent } from './carousel-two/carousel-two.component';



// const routes:Routes=[
//   {path:'',component:HomeComponent},
//   // {path:'about-us',component:AboutUsComponent},
//   { path: 'about-us', component: AboutUsComponent, children: [
//     { path: 'strategic-plan', component: StrategicPlanComponent },
//     { path: 'directors-message', component: DirectorMsgComponent },
//     { path: 'organizational-chart', component: OrganizationalChartComponent },
//     { path: 'certificates-awards', component: CertificateAwardsComponent }
//   ]},
//   {path:'laws-regulations',component:LawsRegulationsComponent,children: [
//     { path: 'name', component: StrategicPlanComponent },
//     { path: 'name', component: DirectorMsgComponent },
//     { path: 'name', component: OrganizationalChartComponent },
//     { path: 'name', component: CertificateAwardsComponent }
//   ]},
//   {path:'media-center',component:MediaCenterComponent},
//   {path:'services',component:ServicesComponent },
//   { path: 'app', loadChildren: () => import('./app-routing/app-routing.module').then(m => m.AppRoutingModule) },
// ];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    AboutUsComponent,
    SideBarMenueComponent,
    InstantChatComponent,
    SearchComponent,
    StrategicPlanComponent,
    DirectorMsgComponent,
    OrganizationalChartComponent,
    CertificateAwardsComponent,
    LawsRegulationsComponent,
    MediaCenterComponent,
    ServicesComponent,
    HRLawComponent,
    CircularComponent,
    LegalCultureComponent,
    HealthSafteyPolicyComponent,
    QualityPolicyComponent,
    PrivacyPolicyComponent,
    DisclaimerComponent,
    AboutOverviewComponent,
    LawRegulationOverviewComponent,
    EmployeeProcComponent,
    RecruitmentComponent,
    LegalAffairsComponent,
    CarouselComponent,
    SignInUAEComponent,
    PartnersComponent,
    PartnerSignInComponent,
    JobOfferDetailsComponent,
    RegisterForPartnerComponent,
    SpokesPersonComponent,
    MediaCenterOpenDataComponent,
    NewsComponent,
    PhotoVideoGalleryComponent,
    CareerPlatformComponent,
    JobRegisterationPageComponent,
    ContactUsComponent,
    ServicesOverviewComponent,
    MediaCenterOverviewComponent,
    CourseTrainingPlatformComponent,
    CoursesComponent,
    ProgramCoursesComponent,
    CoursesDetailsComponent,
    CoursesRegisterationComponent,
    SuggestCoursesComponent,
    TrainingHallBookingComponent,
    TrainingPartnersComponent,
    TrainingPartnerloginComponent,
    RegisterationNowComponent,
    CoursesOverviewComponent,
    CourseTrainingPlatformOverviewComponent,
    CareerPlatformOverviewComponent,
    RecruitmentOverviewComponent,
    RegisterAsPartnerComponent,
    TrainingPartnersOverviewComponent,
    TrainingPartnerloginOverviewComponent,
    ProgramCoursesOverviewComponent,
    ReadMoreComponent,
    CarouselTwoComponent,

    
  ],
  imports: [
    BrowserModule,
    NgbModule,
    CarouselModule,
    MdbCheckboxModule,
    NgbDropdownModule,
    FormsModule,
    NgImageSliderModule,
    AppRoutingModule,
    FieldsetModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
