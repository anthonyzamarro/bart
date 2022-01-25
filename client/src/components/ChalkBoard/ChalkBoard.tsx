import { Wrapper, Chalkboard } from './styles/Chalkboard.styles';


interface Props {
    text: string
}

const ChalkBoard = ({ text }: Props) => {
    return (
        <Wrapper data-testid="chalkboard">
            <div className="wall wall-1">
                <Chalkboard>{text}</Chalkboard>
            </div>
            <div className="wall wall-2"></div>
            <div className='floor'></div>
        </Wrapper>
    )
}

export default ChalkBoard