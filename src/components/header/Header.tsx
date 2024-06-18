import Menu from '../../assets/Menu.svg'
import Back from '../../assets/Back.svg'
import Icon from '../../assets/icon.svg'
import {Title, TitleNav, Wrapper, WrapperNav, WrapperTitle} from "./Header.styled.tsx";

export const Header = () => {
    return (
        <Wrapper>
            <WrapperNav>
                <img src={Menu}/>
                <img src={Back}/>
                <p>Просмотр</p>
                <p>Управление</p>
            </WrapperNav>
            <WrapperTitle>
                <TitleNav>
                    <div>
                        <p>Название проекта</p>
                        <p>Аббревиатура</p>
                    </div>
                    <img src={Icon}/>
                </TitleNav>
                <Title>
                    <p>
                        Строительно-монтажные работы
                    </p>
                </Title>
            </WrapperTitle>
        </Wrapper>
    );
};


