import './App.css';
import '../src/css/reset.css';

//idiomaticos
import Header from './components/header/Header';
import Main from './components/main/Main';
import CartProvider from './context/cartContext';
import ProviderLanguage from './context/languageContext';
import { TokenProvider } from './context/userContext';
import GlobalStyles from './css/globalStyles';
import { Theme } from './theme/theme';

function App() {
  return (
    <CartProvider>
      <ProviderLanguage>
        <TokenProvider>
          <Theme>
            <GlobalStyles />
            <div className="App">
              <Header />
              <Main />
            </div>
          </Theme>
        </TokenProvider>
      </ProviderLanguage>
    </CartProvider>
  );
}

export default App;
