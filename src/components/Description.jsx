function Description({ description }) {
    return (
        <ul>
            {description.split("\n").map((line, index) => {
                return <li key={index}>{line}</li>;
            })}
        </ul>
    );
}

export default Description;
