import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {ThemeProvider} from "styled-components";
import {theme} from "./styles/Theme.styled.tsx";
import {Provider} from "react-redux";
import {store} from "./services/store.ts";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <App/>
        </ThemeProvider>
    </Provider>,
)
