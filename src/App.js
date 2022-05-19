import { useState } from 'react';
import styles from './App.module.css';
import powerImage from './assets/powered.png';
import {levels , calculateImc} from './helpers/imc';
import {GridItem} from './components/gridItem';
import arrowImage from './assets/leftarrow.png';

const App = () =>{

  const [heightField,setHeight] = useState(0);
  const [weightField,setWidth] = useState(0);
  const [toShow,setToShow] = useState(null)

  function handleCalculateBtn(){

    if(heightField && weightField) {

      setToShow(calculateImc(heightField,weightField))


    }  else {
      alert('Preencha os campos')
    }

  };

  function handleBackBtn(){

    setToShow(null);
    setHeight(0);
    setWidth(0);


  }

  return(

    <div className={styles.main}>

      <header>
        <div className={styles.headerContainer}>
          <img src={powerImage} width={150} ></img>
        </div>
      </header>

      <div className={styles.container}>

        <div className={styles.leftSide}>

          <h1>Calcule seu IMC</h1>
          <p>IMC é a sigla para Indice de Massa Corpórea, parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa. </p>

            <input 
            type='number'
            placeholder='Digite a sua altura. Ex 1.5 (em metros)'
            value={heightField ? heightField : '' }
            onChange={e => setHeight(parseFloat(e.currentTarget.value))}
            disabled={toShow ? true : false}
            />

            <input 
            type='number'
            placeholder='Digite a seu peso. Ex 70.5 (em kg)'
            value={weightField ? weightField : '' }
            onChange={e => setWidth(parseFloat(e.currentTarget.value))}
            disabled={toShow ? true : false}
            />

            <button onClick={handleCalculateBtn} disabled={toShow ? true : false} >Calcular</button>
        </div>

        <div className={styles.rightSide}>

        {!toShow &&
          <div className={styles.grid}>

            {levels.map((item,key)=>(
              <GridItem key={key} item={item}/>
            ))}
          </div>
        } {toShow && 
          <div className={styles.rightBig}>
            <div className={styles.rightArrow} onClick={handleBackBtn} >
              <img src={arrowImage} width={25}/>
            </div>
            <GridItem  item={toShow}/>

          </div>
        };

        </div>

      </div>

    </div>

  );

};

export default App;
