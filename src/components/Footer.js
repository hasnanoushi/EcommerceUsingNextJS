import styles from './Styling.module.css';
const Footer = () => {
    return (
      <footer>
         <div className={styles.foot}>
        <div className='row' > 
        <div className='col-2'></div>
        <div className='col-2'>
            <ul className={styles.ull}>
                <li>
Contact Us
                </li><li>About Us</li>

                <li>
                FAQ    
                </li>
               
            </ul>
        </div>
        <div className='col'></div><div className='col-2'>
        <ul className={styles.ull}>
                <li>
Hasnazone Logistics
                </li><li>Cancellation</li>

                <li>
             Returns & Exchange   
                </li></ul></div>
               <div className='col'></div>
               <div className='col-2'> <ul className={styles.ull}>
                <li>
Partners
                </li><li>Payments</li>

                <li>
               Services 
                </li>
               
            </ul></div>
           
            <div className='col-2'></div>
            <p className={styles.date}>&copy; {new Date().getFullYear()} HasnaZone Shopping App </p>
        </div>
    </div>
  
       
      </footer>
    );
  };
  
  export default Footer;
  