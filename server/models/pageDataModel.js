import mongoose from "mongoose"

const Schema = mongoose.Schema

const navIconsSchema = new Schema({
sunIcon: String,
moonIcon: String,
userIcon: String,
logInIcon: String
})

const imgsSchema = new Schema ({
  disocuntCardBg: String
})

const contactsSchema = new Schema ({
  companyName: String,
  registrationNumber: Number,
  VAT: String,
  contactPhone: String,
  email: String,
  companyInformation: String
})

const footerSchema = new Schema ({
  contacts: contactsSchema
})

const filtersCategoriesSchema = new Schema ({
  brandCategories: [String],
  modificationCategories: [String]
})

const searchFiltersSchema = new Schema ({
  categories: filtersCategoriesSchema
})

const searchIconsSchema = new Schema ({
  searchFilters: String
})

const carsPageIconsSchema = new Schema ({
  loadMoreIcons: String,
  bookingIcon: String
})

const carsPageSchema = new Schema ({
  icons: carsPageIconsSchema
})

const globalSchema = new Schema ({
  
    projectName: String,
    logoIcon: String,
    selectIcon: String,
    currency: String,
    discountIcon: String
  
})

const aboutUsImgsSchema = new Schema ({
  aboutCompanyImg: String,
  carsImg: String,
  modificationsImg: String
})

const aboutUsPageSchema = new Schema ({
  imgs: aboutUsImgsSchema
})

const appDataSchema = new Schema({
  navBar: {
  navIcons: navIconsSchema
  },
  footer: footerSchema,
  global: globalSchema,
  home: {
    imgs: imgsSchema
  },
  cars: carsPageSchema,
  aboutUs: aboutUsPageSchema,
  searchFilters: searchFiltersSchema,
  icons: searchIconsSchema
})



export default mongoose.model("PageData", appDataSchema)
