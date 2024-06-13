import { CryptoContextProvider } from './context/Crypto-context';
import AppLayout from './components/Layout/appLayout';




export default function App() {
  return (
    <CryptoContextProvider>
  <AppLayout />
  </CryptoContextProvider>)
}
