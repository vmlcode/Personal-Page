import {
  Links,
  LiveReload,
  Meta,
  Scripts,
  ScrollRestoration
} from '@remix-run/react'
import Layout from './components/layout'
import styles from './styles/app.css'

export function links () {
  return [{ rel: 'stylesheet', href: styles }]
}

export const meta = () => ({
  charset: 'utf-8',
  title: 'Vmldev',
  viewport: 'width=device-width,initial-scale=1'
})

export default function App () {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <main className='bg-background text-white'>
        <Layout/>
        </main>
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
      </body>
    </html>
  )
}
