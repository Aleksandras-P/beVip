export interface Languages {
  GB: string
  LT: string
}

export interface NavItem {
  key: string
  langs: Languages
}

export interface Header {
  heading: Languages
  subheading: Languages
  btnText: Languages
}

export interface OffersContainer {
  title: Languages
  description: Languages
}

export interface CarInfoDescriptions {
  brand: Languages
  model: Languages
  modification: Languages
  engine: Languages
  description: Languages
  available: Languages
  unavailable: Languages
  price: Languages
  week: Languages
  day: Languages
}

export interface Buttons {
  closeBtn: Languages
  allCarsBtn: Languages
  rentNowBtn: Languages
  signupBtn: Languages
  loginBtn: Languages
  logoutBtn: Languages
  signupNowBtn: Languages
  createAccountBtn: Languages
  rentBtn: Languages
  confirmBooking: Languages
}

export interface PageTitle {
  key: Languages
  title: Languages
}

export interface PageTitles {
  carsPage: PageTitle 
  offersPage: PageTitle
  aboutUsPage: PageTitle
  profilePage: PageTitle
}

export interface AuthPlaceholders {
  name: Languages
  email: Languages
  password: Languages
  logging: Languages
  registering: Languages
  wrongEmail: Languages
  enterPassword: Languages
}

export interface Global {
  buttons: Buttons
  pageTitles: PageTitles
  greeting: Languages
  authPlaceholders: AuthPlaceholders
  loadMore: Languages
  balance: Languages
}

export interface Car {
  id: string
  description: Languages
  adContent: Languages
}

export interface Labels {
  companyName: Languages
  companyAdress: Languages
  registrationNumber: Languages
  VAT: Languages
  contactPhone: Languages
  email: Languages
  companyInformation: Languages
}

export interface Contacts {
  labels: Labels
  adress: Languages
}

export interface Footer {
  contacts: Contacts
  copyright: Languages
}

export interface ByPriceOptions {
  day: Languages
  week: Languages
  minPrice: Languages
  maxPrice: Languages
}

export interface ByPrice {
  title: Languages
  options: ByPriceOptions
}

export interface Filters {
  byBrand: Languages
  byModification: Languages
  byPrice: ByPrice
  byInput: Languages
}

export interface SearchFilters {
  openFilters: Languages
  closeFilters: Languages
  cleanFilters: Languages
  filters: Filters
}

export interface LoginForm {
  login: Languages
  noAccount: Languages
}

export interface RegistrationForm {
  register: Languages
  haveAccount: Languages
}

export interface BookingPage {
  pickDates: Languages
  dayPrice: Languages
  period: Languages
  totalPrice: Languages
  weekDiscount: Languages
  days: Languages,
  lowBalance: Languages
}

export interface AboutUsPage {
  aboutCompany: Languages
  aboutCars: Languages
  aboutModifications: Languages
}

export interface TranslationData {
  nav: {
    navLinks: NavItem[]
  }
  footer: Footer
  homepage: {
    header: Header
    offersContainer: OffersContainer
  }
  carInfoDescriptions: CarInfoDescriptions
  cars: Car[]
  searchFilters: SearchFilters
  global: Global
  loginForm: LoginForm
  registrationForm: RegistrationForm
  bookingPage: BookingPage
  aboutUsPage: AboutUsPage
}