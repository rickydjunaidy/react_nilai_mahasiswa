import MahasiswaTableScore from "../component/MahasiswaTableScore";
import Header from "../component/Header";

const Home = () =>{
    return (
    <div style={{width: "100%", height: "100%", backgroundColor: '#F7F7F9'}}>
        <Header />
        <MahasiswaTableScore />
    </div>
    );
}

export default Home;