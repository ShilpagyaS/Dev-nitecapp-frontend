import Header from '@/components/Header/Header'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return <>
    <Header />
    <div className='h-screen w-screen bg-black'>
      <div className='w-screen h-full flex flex-col items-center pt-[80px]'>

        <Component {...pageProps} />
      </div>
    </div>
  </>
}
