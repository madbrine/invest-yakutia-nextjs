import '@/styles/globals.css'
import type { AppProps } from 'next/app'

//Декларирую что есть елементы p1,p2 итд
declare global {
  namespace JSX {
    interface IntrinsicElements {
      p1: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      p2: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      p3: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      p4: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      p5: React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>; //чтобы вел себя как <a></a>
      p6: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
