import './App.css'
import styled from "styled-components";
import {NavBar} from "./components/navBar/NavBar.tsx";
import {Header} from "./components/header/Header.tsx";
import {CMPPages} from "./components/pages/CMP.pages.tsx";

function App() {

    return (
        <Wrapper>
            <HeaderStyle>
                <Header />
            </HeaderStyle>
            <Nav>
                <NavBar/>
            </Nav>
            <Content>
                <CMPPages />
            </Content>
        </Wrapper>
    )
}

export default App

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 234px 6fr;
    grid-template-rows: auto 1fr;
    height: 100vh;
    width: 100vw;
    box-sizing: border-box;
`

const HeaderStyle = styled.header`
    grid-column: 1 / span 2;
    width: 100vw;
`

const Nav = styled.nav`
    //background-color: lightcoral;
`

const Content = styled.main`
    background-color: rgba(32, 33, 36, 1);
`
