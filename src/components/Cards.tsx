import Card from "./Card";

const imgPaths = [
    "/images/cat.webp",
    "/images/saaf.jpeg",
    "/images/sholin.jpeg",
    "/images/stairs.jpeg",
    "/images/starry-night.jpeg",
];

const Cards = () => {
    return (
        <div className="cards">
            {imgPaths.map((src) => (
                <Card key={src} src={src} />
            ))}
        </div>
    );
};

export default Cards;
