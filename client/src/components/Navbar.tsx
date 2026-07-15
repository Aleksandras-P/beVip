import { useState, useEffect } from "react"
import Logo from "./Logo"
import NavbarLinks from "./NavbarLinks"
import { LanguageToggle } from "./LanguageToggle"
import { ThemeToggle } from "./ThemeToggle"
import AuthBox from "./AuthBox"
import { useTranslationContext } from "../hooks/useTranslationContext"

function Navbar () {
  const [scrolled, setScrolled] = useState<boolean>(false)
  const [menuOpen, setMenuOpen] = useState<boolean>(false)
  const {loading: translationDataLoading} = useTranslationContext()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false)
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [menuOpen])

  return (
  <>
    {!translationDataLoading && (
      <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>

        <Logo />
        
        <NavbarLinks className="navbar-links navbar-links--desktop" />

        <button
          className={`navbar__burger ${menuOpen ? "navbar__burger--open" : ""}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`navbar__mobileMenu ${menuOpen ? "navbar__mobileMenu--open" : ""}`}>
          <NavbarLinks
            className="navbar-links navbar-links--mobile"
            onLinkClick={() => setMenuOpen(false)}
          />

          <div className="navbar__mobileSelectors">
            <LanguageToggle />
            <ThemeToggle/>
            <AuthBox />
          </div>
        </div>

        {menuOpen && (
          <div className="navbar__overlay" onClick={() => setMenuOpen(false)}></div>
        )}

        <div className="navbar__selectors">
          <LanguageToggle />
          <ThemeToggle/>
          <AuthBox />
        </div>

      </nav>
    )}
  </>
)
}

export default Navbar