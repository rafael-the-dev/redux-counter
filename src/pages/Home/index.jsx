import './styles.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment} from '../../redux/actions'
import { useCallback } from 'react'

const Home = () => {
    const counter = useSelector(state => state.value);
    const dispatch = useDispatch();
    const clickHandler = useCallback(action => () => dispatch(action), [ dispatch ]);

    return (
        <main>
            <section className="flex flex-column justify-center align-items-center container">
                <h1 className="container__counter">{ counter }</h1>
                <div className="container__buttons-container">
                    <button 
                        className="container__button container__button--increment"
                        onClick={clickHandler(increment())}
                        >
                        Increment
                    </button>
                    <button 
                        className="container__button"
                        onClick={clickHandler(decrement())}>
                        Decrement
                    </button>
                </div>
            </section>
        </main>
    );
};

export default Home;