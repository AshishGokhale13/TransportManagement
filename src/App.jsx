import { useState } from 'react'

import './App.css'
import Login from './components/login/Login'
import { BrowserRouter, Routes, Route, RouterProvider } from 'react-router-dom'
import Admin from './components/admin/Admin'
import Invoice from './components/admin/invoice/Invoice'
import PrintInvoice from './components/admin/invoice/printInvoice'
import Recipt from './components/admin/invoice/Recipt'
import InvoiceList from './components/admin/invoice/InvoiceList'
import InvoiceUpdate from './components/admin/invoice/Update/InvoiceUpdate'
import { getInvoiceList } from './services/invoiceService'
import Dashboard from './components/admin/dashboard/Dashboard'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/admin" element={<Admin />}>
            <Route path="/admin" element={<Dashboard/>}/>
            <Route path="/admin/invoice" element={<Invoice />} />
            <Route path="/admin/invoice/list" element={<InvoiceList/>} />
            <Route path="/admin/invoice/update/:id"   element={<InvoiceUpdate/>} />
          </Route>
          <Route path="/invoice/print/:id"   element={<Recipt/>} />    
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
