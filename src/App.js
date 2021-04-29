import MyFirstComponent from './components/MyFirstComponent';
import MySecondComponent from './components/MySecondComponent';


function App () {
    const user = {
        name: 'Iryna',
    };

    return (
        <div className="App"> 
        <h1>Hello React Mykola </h1>
        <MyFirstComponent jkhkj={user} />
        <MySecondComponent user={user} />
        </div>

    );
}
export default App;