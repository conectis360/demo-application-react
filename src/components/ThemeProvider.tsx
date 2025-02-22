type Theme = "light" | "dark";

const ThemeContext = createContext<Theme | undefined>(undefined);

const useTheme = () => {
  const theme = useContext(ThemeContext);
  if (!theme) throw new Error("useTheme must be used within ThemeProvider");
  return theme;
};

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  return <ThemeContext.Provider value="dark">{children}</ThemeContext.Provider>;
};
