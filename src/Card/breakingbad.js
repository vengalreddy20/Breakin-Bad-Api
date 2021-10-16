import styles from"./card.module.css";

const Breakingbad = (props)=>{
  
    
    return(
        <div>
            <div className={styles.card}>
             <img key={props.id} src={props.img} alt="photo"/>
             <p> Name:<span> {props.name}</span></p>
             <p>Nick Name:<span> {props.nickname}</span></p>
             <p> Status: <span> {props.status}</span></p>
             
             
            </div>

        </div>
        
    )
}
export default Breakingbad;