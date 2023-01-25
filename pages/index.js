import React from 'react'
import Container from '../components/Container'
import Navigation from '../components/navigation'
import Head from 'next/head'
import fetch from 'isomorphic-fetch'
import Users from '../components/Users'


const Index = (props) =>{
    console.log(props)
    return (
        <Container>
            <Head>
            <title>Nextproyect.js-HOME</title>
        </Head>
            <h1>_Next.js</h1>
            <Users users={props.users}/>
        </Container>  
         
        
        
    );

};
Index.getInitialProps = async(ctx) => {
   const res = await fetch('https://reqres.in/api/users')
   const resJSON = await res.json();
   return {users: resJSON.data}
   

}
export default Index;