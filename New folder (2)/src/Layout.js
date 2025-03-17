import Bottom from './Component/Footer';
import Header from './Component/Header';
import Slider from './Component/Slider';
import Cardsection from './Component/Cardsection';

import Navebaar from './Component/Navbaaar';

function Layout(){
    return(
        <>
            <Navebaar/>
        {/* <Header /> */}
      <Slider/>
      <Cardsection/>
       <Bottom/>
       </>
      
    );
}
export default Layout;