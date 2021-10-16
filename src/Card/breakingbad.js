import styles from"./card.module.css";

const Breakingbad = (props)=>{
  
    
    return(
        <div>
            <div className={styles.card}>
             <img key={props.id} src={props.img} alt="photo"/>
             <h4> Name: {props.name}</h4>
             <h4>Nick Name: {props.nickname}</h4>
             <h4> Status: {props.status}</h4>
             
             
            </div>

        </div>
        
    )
}
export default Breakingbad;