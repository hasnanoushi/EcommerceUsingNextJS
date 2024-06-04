import Layout from "../components/Layout";
import styles from '../components/Styling.module.css';
const ContactUs = () => {
  return (<Layout>
    <div className="row">
    <div className="col"></div>
<div className="col-4">
  <ul className={styles.ull}>
    <li><br/>
      <h1>HELP CENTRE</h1>
      <h5>We are here to help you</h5></li><br/>
      <li><p>SELECT QUERY TYPE</p></li><br/>
      <li> <button>Order Related Queries</button></li><br/>
      <li><button>Non-Order Related Queries</button></li><br/>
      <li><button>Recent Issues</button></li><br/>
      <li> <button>FAQ</button></li>

  
      
   
  </ul>
</div>

<div className="col-5">
  <p className={styles.pstyle}>TRACK,CANCEL,RETURN/EXCHANGE 
  <button 
style={{marginLeft:2 + 'em'}}>
    ORDERS</button> <span>Manage your Purchases</span></p>

<br/>
    <p className={styles.pstyle}>Please Login if you have Queries <br/>Related to Recent Purchases
  <button 
style={{marginLeft:6 + 'em'}}>
  LOGIN</button> </p>
 
 
</div><div className="col"></div>


    </div>
   </Layout>
  );
};

export default ContactUs;
