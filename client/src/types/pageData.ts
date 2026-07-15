export interface NavIcons {
  sunIcon: string
  moonIcon: string
  useIcon: string
  logedInIcon: string
}

export interface Imgs {
    discountCardBg: string
}

export interface Contacts {
    companyName: string
    registrationNumber: number 
    VAT: string
    contactPhone: string
    email: string
    companyInformation: string
}

export interface Footer {
    contacts: Contacts
}

export interface FiltersCategories {
    brandCategories: string[]
    modificationCategories: string[]
}

export interface SearchIcons {
    searchFilters: string
}

export interface SearchFilters {
    categories: FiltersCategories
    icons: SearchIcons
}

export interface CarsPageIcons {
    loadMoreIcons: string
    bookingIcon: string
}

export interface CarsPage {
    icons: CarsPageIcons
}

export interface Global {
    projectName: string
    logoIcon: string
    selectIcon: string
    currency: string
    discountIcon: string
}

export interface AboutUsImgs {
    aboutCompanyImg: string
    carsImg: string
    modificationsImg: string
}

export interface AboutUsPage {
    img: AboutUsImgs
}

export interface AppData {
    navBar: {
        navIcons: NavIcons
    }
    footer: Footer
    global: Global
    home: {
        imgs: Imgs
    }
    cars: CarsPage
    aboutUs: AboutUsPage
    searchFilters: SearchFilters
}