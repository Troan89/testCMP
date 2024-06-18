import vector from '../../assets/Vector.svg'
import {Navigate, WrapperNav} from "./NavBar.styled.tsx";

const data = ['По проекту', 'Объекты', 'РД', 'МТО', 'СМР', 'График', 'МиМ', 'Рабочие', 'Капвложения', 'Бюджет', 'Финансирование', 'Панорамы', 'Камеры', 'Поручения', 'Контрагенты']
export const NavBar = () => {
    return (
        <WrapperNav>
            {data.map((item, index)=>{
                return (
                    <Navigate key={index}>
                        <img src={vector}/> {item}
                    </Navigate>
                )
            })}
        </WrapperNav>
    );
};

