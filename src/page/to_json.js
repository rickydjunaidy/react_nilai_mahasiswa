import { useLocation, useNavigate } from "react-router-dom";

const ToJSON = () => {
    const {state} = useLocation();
    const navigate = useNavigate();

    const data = {}
    // console.log(state.scores)
    const result = state.scores.reduce((acc, curr) => {
        for (let key in curr) {
          if (key.startsWith('aspek_penilaian_')) {
            if (!acc[key]) acc[key] = {};
            acc[key]['mahasiswa_' + curr.id] = curr[key];
          }
        }
        return acc;
      }, {});

    const handleClick = () => {
        navigate('/');
      }
    // console.log(context)
    return (
        <div style={{padding: '20px'}}>
            <button className="btn btn-dark" onClick={handleClick}>Kembali</button>
            <br/><br/>
            <div>
                <div><pre>{JSON.stringify(result, null, 2) }</pre></div> 
            </div>
        </div>
    )
}

export default ToJSON;