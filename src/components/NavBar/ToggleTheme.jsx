

const ToggleTheme = ({setIsDark, isDark}) => {

  return (
    <button onClick={()=> setIsDark(!isDark)}>🌞</button>
  )
}

export default ToggleTheme