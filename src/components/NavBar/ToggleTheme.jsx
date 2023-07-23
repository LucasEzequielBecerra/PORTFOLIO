

const ToggleTheme = ({setIsDark, isDark}) => {

  const handleClick = () => {
    setIsDark(!isDark);
    isDark === true ? localStorage.setItem('theme', 'light') : localStorage.setItem('theme', 'dark');
  }

  return (
    <button className="button-theme" onClick={handleClick}>{isDark ? '🌞' : '🌚'}</button>
  )
}

export default ToggleTheme