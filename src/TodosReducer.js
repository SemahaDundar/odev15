
import React from "react";
import YapilacakIs from "./YapilacakIs";
//import ilkYapilacaklarObjesi from './ilkYapilacaklarObjesi';


function reducerFonksiyonu(mevcutStateVerisi, islem){
  switch (islem.ad){
    case"Tamamlandı":
 return mevcutStateVerisi.map((yapilacakIs)=>{
        if (yapilacakIs.id === mevcutStateVerisi.id){
          return {...yapilacakIs, complete: true};
        }else{
          return yapilacakIs;
        }
         });
  case "İlkVeriler":
    return islem.data;

    case "İptalEt":
      if (
        !mevcutStateVerisi.some((eleman) => {
          return eleman.id === islem.iptalId;
        })
      ) {
        alert("uygun iş bulunamadı");
        return;
      }
  
   return mevcutStateVerisi.map((YapilacakIs) => {
        if (YapilacakIs.id === islem. iptalId) {
          return { ...YapilacakIs, complete: false };
        } else {
          return YapilacakIs;
        }
      });
      case "YeniEkle":
        const yeniIs = { id: islem.id, title: islem.title, complete: false };
     return [...mevcutStateVerisi, yeniIs];
    
  }
}

function TodosReducer() {
  const [yapilacaklar, dispatchYapilacaklar] = React.useReducer(reducerFonksiyonu, []);
  //const [yapilacaklar, yapilacaklarGuncelle] = React.useState(null);
  const iptalInput = React.useRef(null);
  const ekleInput = React. useRef(null);
  const idInput = React.useRef(null);


  React.useEffect(() => {
    const yapilacaklarVerisiAl = async () => {
      const response = await fetch("yapilacaklarData.json");
      const ilkYapilacaklarObjesi = await response.json();
      dispatchYapilacaklar({ad: "İlkVeriler", data:ilkYapilacaklarObjesi });

    };
    yapilacaklarVerisiAl();
  },[dispatchYapilacaklar]);

  function tamamlandiYap([guncellenecekIs]) {
    const yeniListe = yapilacaklar.map((YapilacakIs) => {
      if (YapilacakIs.id === guncellenecekIs.id) {
        return { ...YapilacakIs, complete: true };
      } else {
        return YapilacakIs;
      }
    });
    dispatchYapilacaklar({ad: "Tamamlandı", id: guncellenecekIs.id});
  }

  //veriler string degeri olarak number yapmak gerekir


  function İptalEt() {
    const iptalDegeri = parseInt(iptalInput.current.value);
 


  //  yapilacaklarGuncelle(yeniListe);
  dispatchYapilacaklar( { ad:"İptalEt", iptalId: iptalDegeri});
  }
  function yeniEkle() {
    const yeniTitle = ekleInput.current.value;
    const yeniId = parseInt(idInput.current.value);

   dispatchYapilacaklar({ ad: "YeniEkle", title: yeniTitle, id: yeniId});
  }

  if(yapilacaklar.length < 1)
  return <>Liste Bos</>


return (
  <>
    <div>
      {yapilacaklar && 
      yapilacaklar.map((YapilacakIs) => {
          return (
            <YapilacakIs
              is={YapilacakIs}
              id={YapilacakIs.id}
              key={YapilacakIs.id}
              tamamlandiYap={tamamlandiYap}
            />
          );
        })}
    </div>

    <div>
      <input ref={ekleInput} type="text" />
      <button onClick={yeniEkle}>Ekle</button>
    </div>

    <div>
      <input ref={iptalInput} type="text" />
      <button onClick={iptalEt}>İptalEt</button>
    </div>
  </>
);
}
//immediately ınvoced Funtion Expression fonksiyonun altında hemen çağırılmasına denir.
export default TodosReducer;
