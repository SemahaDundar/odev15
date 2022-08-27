import React, { useEffect, useReducer, useRef } from "react";
import YapilacakIs from "./YapilacakIs";
//import ilkYapilacaklarObjesi from './ilkYapilacaklarObjesi';
const İptalİnput = useRef(null);

function Todos() {
  //const [yapilacaklar, dispatch] = useReducer(reducer, ilkYapilacaklarObjesi);
  const [yapilacaklar, yapilacaklarGuncelle] = React.useState(null);
  const iptalInput = useRef(null);
  const ekleİnput = useRef(null);

  useEffect(() => {
    const yapilacaklarVerisiAl = async () => {
      const response = await fetch("yapilacaklarData.json");
      const ilkYapilacaklarObjesi = await response.json();
      yapilacaklarGuncelle(ilkYapilacaklarObjesi);

      yapilacaklarVerisiAl();
    };
  }, [yapilacaklarGuncelle]);

  function tamamlandiYap([guncellenecekIs]) {
    const yeniListe = yapilacaklar.map((YapilacakIs) => {
      if (YapilacakIs.id === guncellenecekIs.id) {
        return { ...YapilacakIs, complete: true };
      } else {
        return YapilacakIs;
      }
    });
    yapilacaklarGuncelle(yeniListe);
  }

  //veriler string degeri olarak number yapmak gerekir
  function İptalEt() {
    const iptalDegeri = iptalInput.current.value;
    iptalDegeri = parseInt(iptalDegeri);

    if (
      yapilacaklar.some((eleman) => {
        return eleman.id === iptalDegeri;
      })
    ) {
      alert("uygun iş bulunamadı");
      return;
    }

    const yeniListe = yapilacaklar.map((YapilacakIs) => {
      if (YapilacakIs.id === parseInt(iptalDegeri)) {
        return { ...YapilacakIs, complete: false };
      } else {
        return YapilacakIs;
      }
    });
    yapilacaklarGuncelle(yeniListe);
  }
  function yeniEkle() {
    const yeniTitle = ekleİnput.current.value;
    const yeniIs = { id: 19, title: yeniTitle, complete: false };
    const yeniListe = [yapilacaklar];
  }

  //js document.querySelector karsılık gelir


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
export default Todos;
