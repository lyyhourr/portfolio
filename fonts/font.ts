import {
  IBM_Plex_Sans,
  Inter,
  Lato,
  Montserrat,
  Open_Sans,
  Oswald,
  Playfair_Display,
  Poppins,
  Proza_Libre,
  Space_Grotesk,
} from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["500"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["500"] });
const imbPlexSans = IBM_Plex_Sans({ subsets: ["latin"], weight: ["500"] });
const prozaLibre = Proza_Libre({ subsets: ["latin"], weight: ["500"] });
const montserrat = Montserrat({ subsets: ["latin"], weight: ["500"] });
const lato = Lato({
  subsets: ["latin"],
  weight: ["700"],
});

export {
  inter,
  spaceGrotesk,
  poppins,
  prozaLibre,
  imbPlexSans,
  montserrat,
  lato,
};
