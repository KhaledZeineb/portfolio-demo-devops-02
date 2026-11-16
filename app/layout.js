import './globals.css';

export const metadata = {
  title: 'Portfolio de Démonstration',
  description: 'Portfolio professionnel presentant mes competences en developpement web, Cloud et automatisation DevOps.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
