import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Dashboard from "./scenes/dashboard";
import Sidebar from "./scenes/global/Sidebar";
import Disposed from "./scenes/disposed";
import MedicationTypes from "./scenes/inventory/MedicationTypes";
import GenerateBill from "./scenes/generate bill/index.jsx";
import Prescriptions from "./scenes/prescriptions/index.jsx";
import PrescriptionBatch from "./scenes/prescriptions/PrescriptionBatches.jsx";

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
            <Route path="/prescriptions" element={<Prescriptions />} />
            <Route path="/prescriptions/batch-id" element={<PrescriptionBatch />} />
            <Route path="/medication-types" element={<MedicationTypes />} />
            <Route path="/generate-bill" element={<GenerateBill />} />
            <Route path="/disposed" element={<Disposed />} />


          </Routes>
        </main>
      </div>
    </ThemeProvider>
  </ColorModeContext.Provider>
  )
}

export default App
