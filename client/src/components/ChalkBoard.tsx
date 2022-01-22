
interface Props {
    text: string
}

const ChalkBoard = ({ text }: Props) => {
    return (
        <>
            board {text}
        </>
    )
}

export default ChalkBoard