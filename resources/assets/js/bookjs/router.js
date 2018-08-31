import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
/*import App from './App.vue'*/
import SignIn from './components/SignIn'
import SignUpView from './components/SignUpView'
import HomeUser from './components/HomeUser'
import HomeUserPersonalInfo from './components/HomeUserPersonalInfo'
import newhome from './components/newhome'
import BooksAnalysis from './components/Introductions/BooksAnalysis'
import BooksMeetings from './components/Introductions/BooksMeetings'
import BooksIntroduction from './components/Introductions/BooksIntroduction'
import BooksMain from './components/Introductions/BooksMain'
import BooksJournal from './components/Introductions/BooksJournal'
import BooksU1OpeningAMeeting from './components/Unit1/BooksU1OpeningAMeeting'
import BooksU1WelcomingParticipants from './components/Unit1/BooksU1WelcomingParticipants'
import BooksU1Practice from './components/Unit1/BooksU1Practice'
import BooksU1Chairing from './components/Unit1/BooksU1Chairing'
import BooksU1StudySuggestion from './components/Unit1/BooksU1StudySuggestion'
import BooksU2PresentingInformation from './components/Unit2/BooksU2PresentingInformation'
import BooksU2Stating from './components/Unit2/BooksU2Stating'
import BooksU2Practice from './components/Unit2/BooksU2Practice'
import BooksU2Consolidation from './components/Unit2/BooksU2Consolidation'
import BooksU2Reference from './components/Unit2/BooksU2Reference'
import BooksU2Review from './components/Unit2/BooksU2Review'
import BooksU3ProblemSolving from './components/Unit3/BooksU3ProblemSolving'
import BooksU3Presentation from './components/Unit3/BooksU3Presentation'
import BooksU3Practice from './components/Unit3/BooksU3Practice'
import BooksU3Consolidation from './components/Unit3/BooksU3Consolidation'
import BooksU3Reference from './components/Unit3/BooksU3Reference'
import BooksU4Explaining from './components/Unit4/BooksU4Explaining'
import BooksU4Presentation from './components/Unit4/BooksU4Presentation'
import BooksU4Practice from './components/Unit4/BooksU4Practice'
import BooksU4Consolidation from './components/Unit4/BooksU4Consolidation'
import BooksU4Reference from './components/Unit4/BooksU4Reference'
import BooksU5AgreeingAndDisagreeing from './components/Unit5/BooksU5AgreeingAndDisagreeing'
import BooksU5Presentation from './components/Unit5/BooksU5Presentation'
import BooksU5Practice from './components/Unit5/BooksU5Practice'
import BooksU5Reference from './components/Unit5/BooksU5Reference'
import BooksU6SummarizeAndClosing from './components/Unit6/BooksU6SummarizeAndClosing'
import BooksU6Presentation from './components/Unit6/BooksU6Presentation'
import BooksU6Practice from './components/Unit6/BooksU6Practice'
import BooksU6Reference from './components/Unit6/BooksU6Reference'
import Summary from './components/Summary'
import Experience from './components/Experience'
import Education from './components/Education'

Vue.use(VueRouter)
const router = new VueRouter({

    routes:[
    {path: '/BooksAnalysis', component: BooksAnalysis},
    {path: '/BooksIntroduction', component: BooksIntroduction},
    {path: '/BooksMeetings', component: BooksMeetings},
    {path: '/BooksMain', component: BooksMain},
    {path: '/BooksJournal', component: BooksJournal},
    {path: '/BooksU1OpeningAMeeting', component: BooksU1OpeningAMeeting},
    {path: '/BooksU1WelcomingParticipants', component: BooksU1WelcomingParticipants},
    {path: '/BooksU1Practice', component: BooksU1Practice},
    {path: '/BooksU1Chairing', component: BooksU1Chairing},
    {path: '/BooksU1StudySuggestion', component: BooksU1StudySuggestion},
    {path: '/BooksU2PresentingInformation', component: BooksU2PresentingInformation},
    {path: '/BooksU2Stating', component: BooksU2Stating},
    {path: '/BooksU2Practice', component: BooksU2Practice},
    {path: '/BooksU2Consolidation', component: BooksU2Consolidation},
    {path: '/BooksU2Reference', component: BooksU2Reference},
    {path: '/BooksU2Review', component: BooksU2Review},
    {path: '/BooksU3ProblemSolving', component: BooksU3ProblemSolving},
    {path: '/BooksU3Presentation', component: BooksU3Presentation},
    {path: '/BooksU3Practice', component: BooksU3Practice},
    {path: '/BooksU3Consolidation', component: BooksU3Consolidation},
    {path: '/BooksU3Reference', component: BooksU3Reference},
    {path: '/BooksU4Explaining', component: BooksU4Explaining},
    {path: '/BooksU4Presentation', component: BooksU4Presentation},
    {path: '/BooksU4Practice', component: BooksU4Practice},
    {path: '/BooksU4Consolidation', component: BooksU4Consolidation},
    {path: '/BooksU4Reference', component: BooksU4Reference},
    {path: '/BooksU5AgreeingAndDisagreeing', component: BooksU5AgreeingAndDisagreeing},
    {path: '/BooksU5Presentation', component: BooksU5Presentation},
    {path: '/BooksU5Practice', component: BooksU5Practice},
    {path: '/BooksU5Reference', component: BooksU5Reference},
    {path: '/BooksU6SummarizeAndClosing', component: BooksU6SummarizeAndClosing},
    {path: '/BooksU6Presentation', component: BooksU6Presentation},
    {path: '/BooksU6Practice', component: BooksU6Practice},
    {path: '/BooksU6Reference', component: BooksU6Reference},
    {path: '/Home', component: Home},
    {path: '/SignIn', component: SignIn},
  /*  {path: '/App', component: App},*/
    {path: '/SignUp', component: SignUpView},
  //  {path: '/HomeUser', component: HomeUser},
    {path: '/HomeUserPersonalInfo/:userID', component: HomeUserPersonalInfo},
    {path: '/newhome', component: newhome},
    {path: '/Summary', component: Summary},
    {path: '/Experience', component: Experience},
    {path: '/Education', component: Education},

  /*  {path: '/sample',php: sample}*/
  ]

})

router.beforeEach((to,from,next)=> {
window.scrollTo(0, 0)
next()
})





export default router
