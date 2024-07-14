import { ThemeProvider } from "@/components/theme-provider";
import { RouterProvider } from "react-router-dom";

import router from "./routes";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="seller-spot-buyer">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
