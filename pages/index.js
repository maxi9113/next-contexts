import Head from 'next/head'
import Button from '@material-ui/core/Button';
import Provider from '../provider/index'
import Tasks from '../components/tasks/index';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next Test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
     
    <Provider>
      <Tasks />
    </Provider> 
    </div>
  )
}
