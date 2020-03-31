import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';

class IndexPage extends Component {
    static getInitialProps(context){
        //it can be used to get data from database
        //It initiates the props
        //we can initiate addin function component
        console.log(context);
        const promise = new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve({appName: 'Super App'})
            }, 1000);
        });
        return promise;
    }
    render() {
        return (
            <div>
                <h1>The Main Page {this.props.appName}</h1>
                <p>Go to <Link href="/auth"><a>Auth</a></Link></p>
                <button onClick={() => Router.push('/auth')}>Go to Auth</button>
            </div>
        )
    }
}

// Deploying Next.js
// we need deploy whole folder on server and
// then run npmv install and npm run start which  will run optimised build 
//More info https://github.com/zeit/next.js/
export default IndexPage;