import { ThemeProvider } from "@/components/theme-provider";
import { RouterProvider } from "react-router-dom";

import router from "./routes";
import { Toaster } from "./components/ui/sonner";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="seller-spot-buyer">
      <RouterProvider router={router} />
      <Toaster richColors />
    </ThemeProvider>
  );
}

export default App;
