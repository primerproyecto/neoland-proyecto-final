import './App.css';
import '../src/css/reset.css';

import Header from './components/header/Header';
import Main from './components/main/Main';
import { TokenProvider } from './context/userContext';
import GlobalStyles from './css/globalStyles';
import { Theme } from './theme/theme';

function App() {
  return (
    <TokenProvider>
      <Theme>
        <GlobalStyles />
        <div className="App">
          <Header />
          <Main />
        </div>
      </Theme>
    </TokenProvider>
  );
}

export default App;
