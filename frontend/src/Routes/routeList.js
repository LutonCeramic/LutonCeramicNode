import HomePage from "../pages/HomePage";
import ProductsPage from "../pages/ProductsPage";
import ContactUsPage from "../pages/ContactUsPage";
import Export from "../pages/Export";
import AboutWhoWeAre from "../components/AboutWhoWheAre";
import { routeConstant } from "../config/routeConstant";
import AboutInfrastructure from "../components/AboutInfrastructure";
import Product400x400Page from "../components/Product400x400Page";
import Product500x500Page from "../components/Product500x500Page";
import Catalogue500x500Page from "../components/Catalogue500x500Page";
import Catalogue400x400Page from "../components/Catalogue400x400Page";
import TechnicalSpecification from "../components/TechnicalSpecification";
import Ecatalogue from "../components/Ecatalogue";

const routeList = [
  {
    path: routeConstant.HOME,
    content: <HomePage />,
    title: 'Home'
  },
  {
    path: routeConstant.ABOUT,
    content: <AboutWhoWeAre />,
    title: 'About Us'
  },
  {
    path: routeConstant.INFRASTRUCTURE,
    content: <AboutInfrastructure />,
    title: 'Infrastructure'
  },
  {
    path: routeConstant.TECHNICAL_SPECIFICATION,  
    content: <TechnicalSpecification />,
    title: 'Technical Specification'
  },
  {
    path: routeConstant.COLLECTION,
    content: <ProductsPage />,
    title: 'Collections'
  },
  {
    path: routeConstant.PRODUCT_400x400,
    content: <Product400x400Page />,
    title: 'products400x400'
  },
  {
    path: routeConstant.PRODUCT_500x500,
    content: <Product500x500Page />,
    title: 'products500x500'
  },
  {
    path: routeConstant.EXPORT,
    content: <Export />,
    title: 'Products'
  },
  {
    path: routeConstant.CATALOGUE_400X400,
    content: <Catalogue400x400Page /> ,
    title: 'Catalogue'
  },
  {
    path: routeConstant.CATALOGUE_500X500,
    content: <Catalogue500x500Page />,
    title: 'Catalogue500x500'
  },
  {
    path: routeConstant.E_CATALOGUE,
    content: <Ecatalogue />,
    title: 'E-Catalogue'
  },
  {
    path: routeConstant.CONTACT,
    content: <ContactUsPage />,
    title: 'Contact Us'
  },

];

export default routeList;
