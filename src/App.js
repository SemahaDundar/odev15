
import { useState } from "react";

 const kitapData = {
data:[
    {id:1 , baslik:"Lorem ipsum 1", "sayfa":24, stok: 3},
    {id:2 , baslik:"Lorem ipsum 2", "sayfa":24, stok: 8},
    {id:3 , baslik:"Lorem ipsum 3", "sayfa":24, stok: 2},
    {id:4 , baslik:"Lorem ipsum 4", "sayfa":24, stok: 5},
  ]




 }
function App() {

const [isim, isimguncelle]= 

useState("isim girilmemiş");
const [kitaplar, kitaplarGuncelle] = useState(kitapData);

 const butan1Calistir = ()=>{
  //burada çeşitli kodlar yazarız uzunluk gibi daha sonra fonksiyonu çagiririz.
  
  isimguncelle("Semaca");
 }
    return (
        <>
        <p>Merhaba React</p>
        <p>{isim}</p>
        <button onClick={butan1Calistir}>isim Guncelle</button>
      </>
      
    );
  }
  
  export default App;
  