import Navbar from '@/components/Navbar';
import Provider from '@/components/Provider';
import './globals.css';

export const metadata = {
  title: 'Compartir Prompts',
  description: 'Descubre y comparte prompts de escritura',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        {/* <Provider> */}
          <div className="main">
            <div className="gradient"></div>
          </div>

          <main className="app">
            <Navbar />

            {children}
          </main>
        {/* </Provider> */}
      </body>
    </html>
  );
}
