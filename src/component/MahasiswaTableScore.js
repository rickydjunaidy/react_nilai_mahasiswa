import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const MahasiswaTableScore = () => {
  const navigate = useNavigate();

  const score_ui = (mahasiswa ,score_name) => (
    <select className="form-select" name={score_name} id={mahasiswa} defaultValue="1" onChange={handleChange} >
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9</option>
      <option value="10">10</option>
    </select>
  )

  // GENERATE INITIAL SCORE
  const [scores, setScores] = useState(() => {
    const scoreCount = 10; 
    const initialScoreValue = "1"; 
    const scoreObjects = [];
  
    for (let i = 1; i <= scoreCount; i++) {
      const scoreObj = { id: i };
  
      for (let j = 1; j <= 4; j++) {
        scoreObj[`aspek_penilaian_${j}`] = initialScoreValue;
      }
  
      scoreObjects.push(scoreObj);
    }
  
    return scoreObjects;
  });

  const handleChange = (event) => {
    const { id, name, value } = event.target;
    const mahasiswa_id = parseInt(id.split(" ")[0]);
    // console.log(name, id, value)
    
    setScores(prevScores => {
      return prevScores.map(mahasiswa => {
        
        // return mahasiswa
        if (mahasiswa.id === mahasiswa_id) {
          return {...mahasiswa, [name]: value};
        } else {
          return mahasiswa;
        }
      });
    });
  };

  const handleClick = () => {
    navigate('/to-json', { state: { scores: scores } });
  }

  const tableRows = scores.map((score) => (
    <tr style={{ borderStyle: '1px solid black' }} key={score.id}>
      <td style={{ verticalAlign: 'middle' }}>Mahasiswa {score.id}</td>
      <td scope="row">
        { score_ui(score.id, "aspek_penilaian_1") }
      </td>
      <td scope="row">
        { score_ui(score.id, "aspek_penilaian_2") }
      </td>
      <td scope="row">
        { score_ui(score.id, "aspek_penilaian_3") }
      </td>
      <td scope="row">
        { score_ui(score.id, "aspek_penilaian_4") }
      </td>
    </tr>
  ));

  return (
    <div style={{padding: "25px 100px 100px 100px", textAlign: 'right' }}>
      <table className="table">
        <thead>
          <tr>
            <th style={{textAlign: 'Center'}} scope="col"></th>
            <th style={{textAlign: 'Center'}} scope="col">Aspek Penilaian 1</th>
            <th style={{textAlign: 'Center'}} scope="col">Aspek Penilaian 2</th>
            <th style={{textAlign: 'Center'}} scope="col">Aspek Penilaian 3</th>
            <th style={{textAlign: 'Center'}} scope="col">Aspek Penilaian 4</th>
          </tr>
        </thead>
        <tbody>
          {tableRows}
        </tbody>
      </table>
      <button className="btn btn-dark" onClick={handleClick}>Simpan</button>
    </div>
  );
};

export default MahasiswaTableScore;