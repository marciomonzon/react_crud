
import { ThemeProvider } from "@mui/system";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { MenuLateral } from "./shared/components";
import { AppThemeProvider } from "./shared/contexts";
import { DarkTheme, LightTheme } from "./shared/themes";

export const App = () => {
  return (
    <AppThemeProvider>
      <BrowserRouter>
      <MenuLateral>
          <AppRoutes />
      </MenuLateral>
      </BrowserRouter>
    </AppThemeProvider>
  );
}