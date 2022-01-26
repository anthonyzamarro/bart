import { Wrapper, Chalkboard, TextContainer } from './styles/Chalkboard.styles';


interface Props {
    text: string
}

const ChalkBoard = ({ text }: Props) => {
    return (
        <Wrapper data-testid="chalkboard">
            <div className="wall wall__left">
                <Chalkboard>
                    <TextContainer>
                        <p>
                            {`${text}`.repeat(10)}
                        </p>
                        <p>
                            {`${text}`.repeat(10)}
                        </p>
                    </TextContainer>
                </Chalkboard>
            </div>
            <div className="wall wall__right"></div>
            <div className='floor'></div>
            {/* <div className='floor1'></div> */}
        </Wrapper>
    )
}

export default ChalkBoard