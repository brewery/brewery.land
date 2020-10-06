import React, { ReactNode } from "react"
import Head from "next/head"

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = "Brewery" }: Props) => (
  <div className='page'>
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <header>
      <h1>Brewery</h1>
      <div className='container'></div>
      <span>ⓒ 2020 Brewery</span>
    </header>
    <div className='container'>{children}</div>
  </div>
)

export default Layout
