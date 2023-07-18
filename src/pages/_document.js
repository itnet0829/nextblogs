import { Html, Head, Main, NextScript } from 'next/document'
import Image from 'next/image'
import Link from 'next/link'

function Header() {
  const catchcopy = "『便利』を\n琉球王国から発信"
  const list = [
    {
      "link":"/link",
      "title":"紹介"
    },
    {
      "link":"/link2",
      "title":"活動実績"
    },
    {
      "link":"/link2",
      "title":"会社概要"
    },
    {
      "link":"/link2",
      "title":"お問い合わせ"
    },
    {
      "link":"/link2",
      "title":"ログイン"
    }
  ]
  var roops = function(){
    var items = []
    for (var i = 0; i<list.length; i++){
      items.push(
          <li className="mx-5 px-1 text-white hover:bg-white hover:text-black transition ease-in-out">
            <Link href={list[i].link}>
              <p>{list[i].title}</p>
            </Link>
          </li>
      )
    }
    return (<ul className='flex flex-row flex-grow block text-center'>{items}</ul>)
  }
  return (
    <header className='bg-black py-1 shadow-md w-full fixed z-10'>
      <Link href='/'>
        <Image src='/logo.png' width={130} height={100} className='ml-3 -mb-5 -mt-1 inline' />
      </Link>
      <nav className='float-right font-sawarabi text-xl mr-7 mt-5 m-center relative'>
        { roops() }
      </nav>
    </header>
  )
}

function Footer(){
  return (
    <footer className='bg-white -mt-12 py-3 text-center'>
      <caption>YSMT Factory 2022-2023</caption>
    </footer>
  )
}


export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Header />
        <Main />
        <NextScript />
        <Footer />
      </body>
    </Html>
  )
}