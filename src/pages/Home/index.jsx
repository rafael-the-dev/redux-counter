import './styles.css'

const Home = () => {
    return (
        <main>
            <section className="flex flex-column justify-center align-items-center container">
                <h1 className="container__counter">0</h1>
                <div className="container__buttons-container">
                    <button className="container__button container__button--increment">Increment</button>
                    <button className="container__button">Decrement</button>
                </div>
            </section>
        </main>
    );
};

export default Home;