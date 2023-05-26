import { NgModule } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from '../about-us/about-us.component';
import { StrategicPlanComponent } from '../AboutUS-SubMenus/strategic-plan/strategic-plan.component';
import { DirectorMsgComponent } from '../AboutUS-SubMenus/director-msg/director-msg.component';
import { OrganizationalChartComponent } from '../AboutUS-SubMenus/organizational-chart/organizational-chart.component';
import { CertificateAwardsComponent } from '../AboutUS-SubMenus/certificate-awards/certificate-awards.component';
import { LawsRegulationsComponent } from '../laws-regulations/laws-regulations.component';
import { MediaCenterComponent } from '../media-center/media-center.component';
import { ServicesComponent } from '../services/services.component';
import { AboutOverviewComponent } from '../about-overview/about-overview.component';
import { LawRegulationOverviewComponent } from '../law-regulation-overview/law-regulation-overview.component';
import { HRLawComponent } from '../Laws-Regulations-Sub-Menus/hr-law/hr-law.component';
import { HealthSafteyPolicyComponent } from '../Laws-Regulations-Sub-Menus/health-saftey-policy/health-saftey-policy.component';
import { CircularComponent } from '../Laws-Regulations-Sub-Menus/circular/circular.component';
import { DisclaimerComponent } from '../Laws-Regulations-Sub-Menus/disclaimer/disclaimer.component';
import { QualityPolicyComponent } from '../Laws-Regulations-Sub-Menus/quality-policy/quality-policy.component';
import { PrivacyPolicyComponent } from '../Laws-Regulations-Sub-Menus/privacy-policy/privacy-policy.component';
import { LegalCultureComponent } from '../Laws-Regulations-Sub-Menus/legal-culture/legal-culture.component';
import { CareerPlatformComponent } from '../career-platform/career-platform.component';
import { PhotoVideoGalleryComponent } from '../photo-video-gallery/photo-video-gallery.component';
import { JobRegisterationPageComponent } from '../job-registeration-page/job-registeration-page.component';
import { RecruitmentComponent } from '../recruitment/recruitment.component';
import { SpokesPersonComponent } from '../spokes-person/spokes-person.component';
import { MediaCenterOpenDataComponent } from '../media-center-open-data/media-center-open-data.component';
import { ContactUsComponent } from '../contact-us/contact-us.component';
import { ServicesOverviewComponent } from '../services-overview/services-overview.component';
import { EmployeeProcComponent } from '../employee-proc/employee-proc.component';
import { LegalAffairsComponent } from '../legal-affairs/legal-affairs.component';
import { MediaCenterOverviewComponent } from '../media-center-overview/media-center-overview.component';
import { NewsComponent } from '../news/news.component';
import { CourseTrainingPlatformComponent } from '../course-training-platform/course-training-platform.component';
import { CoursesOverviewComponent } from '../courses-overview/courses-overview.component';
import { CourseTrainingPlatformOverviewComponent } from '../course-training-platform-overview/course-training-platform-overview.component';
import { CoursesComponent } from '../courses/courses.component';
import { ProgramCoursesComponent } from '../program-courses/program-courses.component';
import { TrainingPartnersComponent } from '../training-partners/training-partners.component';
import { TrainingHallBookingComponent } from '../training-hall-booking/training-hall-booking.component';
import { CoursesRegisterationComponent } from '../courses-registeration/courses-registeration.component';
import { SuggestCoursesComponent } from '../suggest-courses/suggest-courses.component';
import { CareerPlatformOverviewComponent } from '../career-platform-overview/career-platform-overview.component';
import { RecruitmentOverviewComponent } from '../recruitment-overview/recruitment-overview.component';
import { JobOfferDetailsComponent } from '../job-offer-details/job-offer-details.component';
import { TrainingPartnersOverviewComponent } from '../training-partners-overview/training-partners-overview.component';
import { PartnerSignInComponent } from '../partner-sign-in/partner-sign-in.component';
import { RegisterAsPartnerComponent } from '../register-as-partner/register-as-partner.component';
import { TrainingPartnerloginComponent } from '../training-partnerlogin/training-partnerlogin.component';
import { RegisterationNowComponent } from '../registeration-now/registeration-now.component';
import { TrainingPartnerloginOverviewComponent } from '../training-partnerlogin-overview/training-partnerlogin-overview.component';
import { ProgramCoursesOverviewComponent } from '../program-courses-overview/program-courses-overview.component';
import { CoursesDetailsComponent } from '../courses-details/courses-details.component';


const routes:Routes=[
  {path:'',component:HomeComponent},
  // {path:'about-us',component:AboutUsComponent},
  { path: 'about', component: AboutUsComponent, children: [
    {path:'', redirectTo:'overview', pathMatch: 'full'},
    {path: 'overview', component:AboutOverviewComponent},
    { path: 'strategic', component: StrategicPlanComponent },
    { path: 'directors-message', component: DirectorMsgComponent },
    { path: 'organizational-chart', component: OrganizationalChartComponent },
    { path: 'certificates-awards', component: CertificateAwardsComponent }
  ]},
  {path:'laws-regulations',component:LawsRegulationsComponent,children: [
    {path:'',redirectTo:'overview', pathMatch:'full'},
    { path: 'overview', component: LawRegulationOverviewComponent },
    { path: 'hr-law', component: HRLawComponent},
    { path: 'health-safety-policy', component: HealthSafteyPolicyComponent },
    { path: 'circular', component: CircularComponent },
    {path:'disclaimer',component:DisclaimerComponent},
    {path:'quality-policy',component:QualityPolicyComponent },
    {path:'privacy-policy',component:PrivacyPolicyComponent },
    {path:'legal-culture',component:LegalCultureComponent },

]},
{path:'media-center',component:MediaCenterComponent, children: [
  {path:'',redirectTo:'overview', pathMatch:'full'},
  { path: 'overview', component: MediaCenterOverviewComponent },
  {path:'spokesPerson', component:SpokesPersonComponent},
  {path:'photo-videoGallery',component:PhotoVideoGalleryComponent},
  {path:'news',component:NewsComponent},
  {path:'open-data',component:MediaCenterOpenDataComponent}

]},

  {path:'services',component:ServicesComponent,  children: [
    {path:'',redirectTo:'overview', pathMatch:'full'},
    { path: 'overview', component: ServicesOverviewComponent },
    {path:'employee-proc', component:EmployeeProcComponent},
    {path:'recruitment',component:RecruitmentComponent},
    {path:'legalAffairs',component:LegalAffairsComponent},

]},

{path:'Course&TrainingPlatform',component:CourseTrainingPlatformComponent,children:[
  {path:'',redirectTo:'overview',pathMatch:'full'},
  {path:'overview',component:CourseTrainingPlatformOverviewComponent},
  {path:'courses', component:CoursesComponent,children:[
    {path:'',redirectTo:'overview',pathMatch:'full'},
    {path:'overview',component:CoursesOverviewComponent},
    {path:'program-courses',component:ProgramCoursesComponent,children:[
      {path:'',redirectTo:'overview', pathMatch:'full'},
      { path: 'overview', component: ProgramCoursesOverviewComponent},
      {path:'courses-details',component:CoursesDetailsComponent}
    ]},
    {path:'course-registeration',component:CoursesRegisterationComponent},
    {path:'suggest-courses',component:SuggestCoursesComponent},
  ]},
  {path:'training',component:ProgramCoursesComponent},
  {path:'Course-Training_partners',component:TrainingPartnersComponent,children:[
    {path:'',redirectTo:'overview',pathMatch:'full'},
    {path:'overview',component:TrainingPartnersOverviewComponent},
    {path:'login-partner',component:TrainingPartnerloginComponent,children:[
      {path:'',redirectTo:'overview',pathMatch:'full'},
      {path:'overview',component:TrainingPartnerloginOverviewComponent},
      {path:'register-now',component:RegisterationNowComponent},
    ]},
    {path:'register-partner',component:RegisterAsPartnerComponent},
  ]},
  {path:'training-hall-booking',component:TrainingHallBookingComponent},
  {path:'contact',component:ContactUsComponent},
]},


  {path:'career-platform',component:CareerPlatformComponent,children:[
    {path:'',redirectTo:'overview', pathMatch:'full'},
    { path: 'overview', component:CareerPlatformOverviewComponent },
    {path:'job-registeration', component:JobRegisterationPageComponent},
    {path:'recruitment',component:RecruitmentComponent,children:[
      {path:'',redirectTo:'overview', pathMatch:'full'},
      { path: 'overview', component:RecruitmentOverviewComponent},
      {path:'job-offer-details',component:JobOfferDetailsComponent}
    ]},
  ]},

  
  {path:'job-registeration-page',component:JobRegisterationPageComponent},
  {path:'job-list', component:RecruitmentComponent},
  {path:'spokes-person', component:SpokesPersonComponent},
  {path:'open-data',component:MediaCenterOpenDataComponent},
  {path:'photo-video-gallery',component:PhotoVideoGalleryComponent},
  {path:'contact-us',component:ContactUsComponent},
  {path:'job-register-page',component:JobRegisterationPageComponent},
  {path:'course-training-platform',component:CourseTrainingPlatformComponent},
];





@NgModule({
  declarations: [

  ],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
