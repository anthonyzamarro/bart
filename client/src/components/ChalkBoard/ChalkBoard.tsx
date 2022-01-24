
interface Props {
    text: string
}

const ChalkBoard = ({ text }: Props) => {
    return (
        <div data-testid="chalkboard">
            {text}
        </div>
    )
}

export default ChalkBoard