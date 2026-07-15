import mongoose from "mongoose"

const Schema = mongoose.Schema

const languageSchema = new Schema({
  en: String,
  lt: String,
})

const navItemSchema = new Schema({
  key: String,
  langs: languageSchema,
})

const headerSchema = new Schema ({
  heading: languageSchema,
  subheading: languageSchema,
  btnText: languageSchema
})

const adContentSchema = new Schema ({
  id: Number,
  title: languageSchema,
  description: languageSchema,
  adress: languageSchema
})

const offersContainerSchema = new Schema ({
  title: languageSchema,
  description: languageSchema
})

const carInfoDescriptionsSchema = new Schema ({
  brand: languageSchema,
  model: languageSchema,
  modification: languageSchema,
  engine: languageSchema,
  description: languageSchema,
  available: languageSchema,
  unavailable: languageSchema,
  price: languageSchema,
  week: languageSchema,
  day: languageSchema
})

const buttonsSchema = new Schema ({
  closeBtn: languageSchema,
  allCarsBtn: languageSchema,
  renNowBtn: languageSchema,
  signupBtn: languageSchema,
  loginBtn: languageSchema,
  logoutBtn: languageSchema,
  signupNowBtn: languageSchema,
  createAccountBtn: languageSchema,
  rentBtn: languageSchema,
  confirmBooking: languageSchema
})

const pageTitleSchema = new Schema ({
  key: languageSchema,
  title: languageSchema
})

const pageTitlesSchema = new Schema ({
  carsPage: pageTitleSchema,
  offersPage: pageTitleSchema,
  aboutUsPage: pageTitleSchema,
  profilePage: pageTitleSchema
})

const authPlaceholdersSchema = new Schema ({
  name: languageSchema,
  email: languageSchema,
  password: languageSchema,
  logging: languageSchema,
  registering: languageSchema,
  wrongEmail: languageSchema,
  enterPassword: languageSchema
})

const globalSchema = new Schema ({
  buttons: buttonsSchema,
  pageTitles: pageTitlesSchema,
  greeting: languageSchema,
  authPlaceholders: authPlaceholdersSchema,
  loadMore:languageSchema,
  balance: languageSchema
})

const carSchema = new Schema ({
  id: String,
  description: languageSchema,
  adContent: languageSchema
})

const labelsSchema = new Schema ({
  companyName: languageSchema,
  companyAdress: languageSchema,
  registrationNumber: languageSchema,
  VAT: languageSchema,
  contactPhone: languageSchema,
  email: languageSchema,
  companyInformation: languageSchema
})

const contactsSchema = new Schema ({
  labels: labelsSchema,
  adress: languageSchema
})

const footerSchema = new Schema ({
  contacts: contactsSchema,
  copyright: languageSchema
})

const byPriceOptionsSchema = new Schema ({
  day: languageSchema,
  week: languageSchema,
  minPrice: languageSchema,
  maxPrice: languageSchema
})

const byPriceSchema = new Schema ({
  title: languageSchema,
  options: byPriceOptionsSchema
})

const filtersSchema = new Schema ({
  byBrand: languageSchema,
  byModification: languageSchema,
  byPrice: byPriceSchema,
  byInput: languageSchema
})

const searchFiltersSchema = new Schema ({
  openFilters: languageSchema,
  closeFilters: languageSchema,
  cleanFilters: languageSchema,
  filters: filtersSchema

})

const loginFormSchema = new Schema ({
  login: languageSchema,
  noAccount: languageSchema
})

const registrationFormSchema = new Schema ({
  register: languageSchema,
  haveAccount:languageSchema
})

const bookingPageSchema = new Schema ({
  pickDates: languageSchema,
  dayPrice: languageSchema,
  period: languageSchema,
  totalPrice: languageSchema,
  weekDiscount: languageSchema,
  days: languageSchema,
  lowBalance: languageSchema
})

const aboutUsPageSchema = new Schema ({
  aboutCompany: languageSchema,
  aboutCars: languageSchema,
  aboutModifications: languageSchema
})

const contentSchema = new Schema({
  nav: {
  navLinks: [navItemSchema]
  },
  footer: footerSchema,
  homepage: {
    header: headerSchema,
    offersContainerSchema: offersContainerSchema
  },
  carInfoDescriptions: carInfoDescriptionsSchema,
  cars: [carSchema],
  searchFilters: searchFiltersSchema,
  global: globalSchema,
  loginForm: loginFormSchema,
  registrationForm: registrationFormSchema,
  bookingPage: bookingPageSchema,
  aboutUsPage: aboutUsPageSchema
})



export default mongoose.model("Translation", contentSchema)



