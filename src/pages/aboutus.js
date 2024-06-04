import Layout from "../components/Layout";
const AboutUs = () => {
    return (<Layout>
      <div>
        <h1 style={{marginRight: 2+ 'em',padding:2+'em',color:'blue',marginTop: 1 + 'em',fontSize:30}}>
          Welcome to Hasnazone Shopping app !!!
        </h1>
        <p style={{fontSize:25,paddingLeft:2+'em'}}>We deliver you with exiting offers on all leading brands in all category of products.We have a wonderful Logistics team 
          which <br/>makes the Shipping,delivery,tracking,returns ,exchange and cancellation very easy for you.
          You costumer is our King and we would love to serve you with better products and services.
        </p>
        <p style={{fontSize:25,paddingLeft:2+'em',backgroundColor:'deeppink',color:'white',margin:5 +'em',padding:5+'em',borderRadius:4 +'em'}}>
Subscribe to our NEWSLETTER !<br/><br/>
Your Email Here ____________________________________________ <br/><br/>
<button style={{backgroundColor:'white',color:'deeppink',borderRadius:4 +'em'}}>SUBSCRIBE</button>

        </p>
      </div></Layout>
    );
  };
  
  export default AboutUs;
  