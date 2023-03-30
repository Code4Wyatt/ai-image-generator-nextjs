import Header from './../components/Header';
import PromptInput from './../components/PromptInput';
import ClientProvider from './../components/ClientProvider';

import '../styles/globals.css'

export const metadata = {
  title: 'AI Art',
  description: 'AI Art Generator using Next.js, ChatGPT, Microsoft Azure and DALL·E',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ClientProvider>
          <Header />

          <PromptInput />

          {children}
        </ClientProvider>
      </body>
    </html>
  )
}
