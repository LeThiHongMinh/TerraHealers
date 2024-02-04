import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Dashboard from "./scenes/dashboard";
import Sidebar from "./scenes/global/Sidebar";
import Inventory from "./scenes/inventory/MedicationTypes";
import Disposed from "./scenes/disposed";
import MedicationTypes from "./scenes/inventory/MedicationTypes";
import MedicationBatches from "./scenes/inventory/MedicationBatches";


const App = () => {
  const [theme, colorMode] = useMode();

  return (<ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className='app'>
        <Sidebar />
        <main className="content">
          <Topbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/medication-types" element={<MedicationTypes />} />
            <Route path="/medication-batches" element={<MedicationBatches />} />
            <Route path="/disposed" element={<Disposed />} />
          </Routes>
        </main>
      </div>
    </ThemeProvider>
  </ColorModeContext.Provider>
  )
}

export default App
