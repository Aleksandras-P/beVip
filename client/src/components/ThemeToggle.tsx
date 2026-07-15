import iconMap from '../utils/iconMap';
import { useThemeContext } from '../hooks/useThemeContext';
import { useAppData } from '../hooks/useAppData';



export const ThemeToggle = () => {

  const {data: appData} = useAppData()

  const { theme, toggleTheme } = useThemeContext()

  const IconSun = iconMap[appData?.navBar?.navIcons?.sunIcon || ""]
  const IconMoon = iconMap[appData?.navBar?.navIcons?.moonIcon || ""]

  return (
    <button
      className={`theme-toggle ${theme === 'light' ? 'theme-toggle--light' : ''}`}
      onClick={toggleTheme}
      aria-label="change theme"
    >
      <span className="theme-toggle__thumb">
        {theme === 'light' ? IconSun && <IconSun /> : IconMoon && <IconMoon />}
      </span>
    </button>
  );
};