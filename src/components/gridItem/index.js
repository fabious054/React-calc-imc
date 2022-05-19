import styles from './gridItem.module.css';

import upImage from '../../assets/up.png';
import downImage from '../../assets/down.png';

export const GridItem = (item)=>{

    return(
        <div className={styles.main} style={{backgroundColor:item.item.color}}>
            <div className={styles.gridIcon}>
                <img src={item.item.icon === 'up' ? upImage : downImage} alt='' width='30' />
            </div>
            <div className={styles.gridTitle}>{item.item.title}</div>
            <div className={styles.gridInfo}>
               <>
               IMC está entre <strong>{item.item.imc[0]}</strong> e <strong>{item.item.imc[1]}</strong>
               </>
            </div>
        </div>
    );

}