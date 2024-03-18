import {Inter, Jost, Poppins} from 'next/font/google';
import './globals.css';

const inter = Inter({subsets: ['latin'], variable: '--font-inter'});
const jost = Jost({subsets: ['latin'], variable: '--font-jost'});
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
});

export const metadata = {
  title: 'QuillAudits - CarpeDiem Pension',
  description: 'A blockchain based retirement fund',
};

export default function RootLayout({children}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jost.variable} ${poppins.variable}`}>
      <body className={`${poppins.className} text-white`}>{children}</body>
    </html>
  );
}
