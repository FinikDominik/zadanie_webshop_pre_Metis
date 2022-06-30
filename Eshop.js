let eshop = document.getElementById("EshopMainDiv");

let kosik = JSON.parse(localStorage.getItem("Data_kosika")) || [];

let GenerateEshop = () => {
  return (eshop.innerHTML = ProduktData.map((x) => {
    let { id, trieda, Nazov, cena, img } = x;
    return `
        <div id=produkt-id-${id} class="Container_pre_produkt"> 
            <div class="poster-container">
                <div ><img src="${img}" class="poster" /></div>
            </div>
        <div class="info-container">
            <div class="info__content">
                <h4  class="nazov_produktu">${Nazov}</h4>
                <p class="cena_produktu_aktual">${cena} €</p>
                <button onclick="PridajDoKošíka(${id})" class="Pridat_do_kosika-btn">Pridať do košíka</button>
            </div>
        </div>
    </div>
    `;
  }).join(""));
};

// kliknutie na Eshop btn v nav menu a vyobrazenie eshopu
let NavBar = document.getElementById("NavMenu");
let eshop_btn = document.getElementById("webshbtn");
let coverVideo = document.getElementById("covervideo");
let Zasterne = document.getElementById("covervideo");
let OrnamentDeliaci = document.getElementById("DeliaciImg");
let NavEshop = document.getElementById("NavEshop");
const UndreDivCloseShop = document.getElementById("UndreDivCloseShop");
eshop_btn.addEventListener("click", () => {
  NavBar.className = "AnimClickOnEshop";
  coverVideo.className = "BlurVideo";
  OrnamentDeliaci.style.display = "block";
  NavEshop.style.display = "flex";
  UndreDivCloseShop.style.display = "block";
  StopClikOnMenu.style.display = "block";

  let zmenDivDisplay = () => {
    NavBar.style.display = "none";
    StopClikOnMenu.style.display = "none";
  };

  setTimeout(zmenDivDisplay, 2000);

  if (orgdiv.style.display === "block") {
    const keyframes = [
      { transform: "translateX(0px)" },
      { transform: "translateX(-1500px)" },
    ];
    const casovanie = {
      duration: 1000,
      iterations: 1,
      easing: "cubic-bezier(0.42, 0, 0.58, 1)",
    };
    orgdiv.animate(keyframes, casovanie);
    setTimeout(function () {
      orgdiv.style.display = "none";
    }, 1000);
  }
  if (clenovia.style.display === "block") {
    const keyframes = [
      { transform: "translateX(0px)" },
      { transform: "translateX(-1000px)" },
    ];
    const casovanie = {
      duration: 1000,
      iterations: 1,
      easing: "cubic-bezier(0.42, 0, 0.58, 1)",
    };
    clenovia.animate(keyframes, casovanie);
    setTimeout(function () {
      clenovia.style.display = "none";
    }, 1000);
  }
  if (oceniadiv.style.display === "block") {
    const keyframes = [
      { transform: "translateX(0px)" },
      { transform: "translateX(1500px)" },
    ];
    const casovanie = {
      duration: 1000,
      iterations: 1,
      easing: "cubic-bezier(0.42, 0, 0.58, 1)",
    };
    oceniadiv.animate(keyframes, casovanie);
    setTimeout(function () {
      oceniadiv.style.display = "none";
    }, 1000);
  }
  if (histdiv.style.display === "block") {
    const keyframes = [
      { transform: "translateX(0px)" },
      { transform: "translateX(1000px)" },
    ];
    const casovanie = {
      duration: 1000,
      iterations: 1,
      easing: "cubic-bezier(0.42, 0, 0.58, 1)",
    };
    histdiv.animate(keyframes, casovanie);
    setTimeout(function () {
      histdiv.style.display = "none";
    }, 900);
  }
  GenerateEshop();
});

// kliknutie na Close Eshop btn
const ProduktyDiv = document.getElementById("#EshopMainDiv");

closeEshop.addEventListener("click", () => {
  OrnamentDeliaci.className = "img-fluid DeliaciImgClBack";
  NavEshop.className = "NavEshopAnim";
  eshop.className = "Hlavny-container EshopMainDivAnimBack";
  NavBar.className = "AfterExitshop";
  NavBar.style.display = "flex";
  UndreDivCloseShop.style.display = "none";

  let zmenDivDisplayBackBlur = () => {
    coverVideo.className = "";
  };

  setTimeout(zmenDivDisplayBackBlur, 1000);

  let zmenDivDisplayBack = () => {
    NavEshop.style.display = "none";
    OrnamentDeliaci.style.display = "none";
    eshop.style.display = "none";

    NavEshop.className = "";
    eshop.className = "Hlavny-container EshopMainDivAnim";
    OrnamentDeliaci.className = "img-fluid DeliaciImgCl";
  };
  setTimeout(zmenDivDisplayBack, 2000);
});

// vyhladávanie v inpute

const SearchInput = document.getElementById("SearchCenaMachProd");
SearchInput.addEventListener("keyup", (e) => {
  const Hladanyvyraz = e.target.value.toUpperCase();
  let eshop = document.getElementById("EshopMainDiv");
  let includesValue = ProduktData.filter((country) =>
    country.Nazov.toLowerCase().includes(Hladanyvyraz.toLowerCase())
  );
  let ZapisVyhladaneho = () => {
    return (eshop.innerHTML = includesValue
      .map((x) => {
        let { id, trieda, Nazov, cena, img } = x;
        return `
        <div id=produkt-id-${id} class="Container_pre_produkt"> 
            <div class="poster-container">
                <div ><img src="${img}" class="poster" /></div>
            </div>
        <div class="info-container">
            <div class="info__content">
                <h4  class="nazov_produktu">${Nazov}</h4>
                <p class="cena_produktu_aktual">${cena} €</p>
                <button onclick="PridajDoKošíka(${id})" class="Pridat_do_kosika-btn">Pridať do košíka</button>
            </div>
        </div>
    </div>
    `;
      })
      .join(""));
  };
  ZapisVyhladaneho();
});

// vyhladávanie podľa kategorii - kožene vyrobky

const KožaSearch_btn = document.getElementById("KožaSearch_btn");
KožaSearch_btn.addEventListener("click", () => {
  let hladanyvyraz = "Kožené vyrobky";
  let includesValue = ProduktData.filter((x) =>
    x.trieda.toLowerCase().includes(hladanyvyraz.toLowerCase())
  );
  let ZapisVyhladaneho = () => {
    return (eshop.innerHTML = includesValue
      .map((x) => {
        let { id, trieda, Nazov, cena, img } = x;
        return `
        <div id=produkt-id-${id} class="Container_pre_produkt ${trieda}"> 
            <div class="poster-container">
                <div ><img src="${img}" class="poster" /></div>
            </div>
        <div class="info-container">
            <div class="info__content">
                <h4  class="nazov_produktu">${Nazov}</h4>
                <p class="cena_produktu_aktual">${cena} €</p>
                <button onclick="PridajDoKošíka(${id})" class="Pridat_do_kosika-btn">Pridať do košíka</button>
            </div>
        </div>
    </div>
    `;
      })
      .join(""));
  };
  ZapisVyhladaneho();
});

// vyhladávanie podľa kategorii - CD/DVD

const CdSearch_btn = document.getElementById("CdSearch_btn");
CdSearch_btn.addEventListener("click", () => {
  let hladanyvyraz = "CD";
  let includesValue = ProduktData.filter((x) =>
    x.trieda.toLowerCase().includes(hladanyvyraz.toLowerCase())
  );
  let ZapisVyhladaneho = () => {
    return (eshop.innerHTML = includesValue
      .map((x) => {
        let { id, trieda, Nazov, cena, img } = x;
        return `
        <div id=produkt-id-${id} class="Container_pre_produkt ${trieda}"> 
            <div class="poster-container">
                <div ><img src="${img}" class="poster" /></div>
            </div>
        <div class="info-container">
            <div class="info__content">
                <h4  class="nazov_produktu">${Nazov}</h4>
                <p class="cena_produktu_aktual">${cena} €</p>
                <button onclick="PridajDoKošíka(${id})" class="Pridat_do_kosika-btn">Pridať do košíka</button>
            </div>
        </div>
    </div>
    `;
      })
      .join(""));
  };
  ZapisVyhladaneho();
});

// vyhladávanie podľa kategorii - Mužský kroj

const MuKrojSearch_btn = document.getElementById("MuKrojSearch_btn");
MuKrojSearch_btn.addEventListener("click", () => {
  let hladanyvyraz = "Mužský kroj";
  let includesValue = ProduktData.filter((x) =>
    x.trieda.toLowerCase().includes(hladanyvyraz.toLowerCase())
  );
  let ZapisVyhladaneho = () => {
    return (eshop.innerHTML = includesValue
      .map((x) => {
        let { id, trieda, Nazov, cena, img } = x;
        return `
        <div id=produkt-id-${id} class="Container_pre_produkt ${trieda}"> 
            <div class="poster-container">
                <div ><img src="${img}" class="poster" /></div>
            </div>
        <div class="info-container">
            <div class="info__content">
                <h4  class="nazov_produktu">${Nazov}</h4>
                <p class="cena_produktu_aktual">${cena} €</p>
                <button onclick="PridajDoKošíka(${id})" class="Pridat_do_kosika-btn">Pridať do košíka</button>
            </div>
        </div>
    </div>
    `;
      })
      .join(""));
  };
  ZapisVyhladaneho();
});

// vyhladávanie podľa kategorii - Ženský kroj

const ZenKrojSearch_btn = document.getElementById("ZenKrojSearch_btn");
ZenKrojSearch_btn.addEventListener("click", () => {
  let hladanyvyraz = "Ženský kroj";
  let includesValue = ProduktData.filter((x) =>
    x.trieda.toLowerCase().includes(hladanyvyraz.toLowerCase())
  );
  let ZapisVyhladaneho = () => {
    return (eshop.innerHTML = includesValue
      .map((x) => {
        let { id, trieda, Nazov, cena, img } = x;
        return `
        <div id=produkt-id-${id} class="Container_pre_produkt ${trieda}"> 
            <div class="poster-container">
                <div ><img src="${img}" class="poster" /></div>
            </div>
        <div class="info-container">
            <div class="info__content">
                <h4  class="nazov_produktu">${Nazov}</h4>
                <p class="cena_produktu_aktual">${cena} €</p>
                <button onclick="PridajDoKošíka(${id})" class="Pridat_do_kosika-btn">Pridať do košíka</button>
            </div>
        </div>
    </div>
    `;
      })
      .join(""));
  };
  ZapisVyhladaneho();
});

// vyhladávanie podľa kategorii - podľa ceny

const rangeInput = document.querySelectorAll(".range");
const OutputCena = document.querySelector(".OutputCena");

rangeInput.forEach((input) => {
  input.addEventListener("input", () => {
    let value = parseInt(rangeInput[0].value);
    let CenaMax = ProduktData.map((x) => x.cena);
    CenaMax = Math.max(...CenaMax);

    rangeInput.value = CenaMax;
    rangeInput.max = CenaMax;
    rangeInput.min = 0;
    OutputCena.innerHTML = value + " €";

    let includesValue = ProduktData.filter((x) => x.cena <= value);
    let ZapisVyhladaneho = () => {
      return (eshop.innerHTML = includesValue
        .map((x) => {
          let { id, trieda, Nazov, cena, img } = x;
          return `
              <div id=produkt-id-${id} class="Container_pre_produkt ${trieda}"> 
                  <div class="poster-container">
                      <div ><img src="${img}" class="poster" /></div>
                  </div>
              <div class="info-container">
                  <div class="info__content">
                      <h4  class="nazov_produktu">${Nazov}</h4>
                      <p class="cena_produktu_aktual">${cena} €</p>
                      <button onclick="PridajDoKošíka(${id})" class="Pridat_do_kosika-btn">Pridať do košíka</button>
                  </div>
              </div>
          </div>
          `;
        })
        .join(""));
    };
    ZapisVyhladaneho();
  });
});

/**
 * TODO Prídavanie a odoberanie z košíka
 */

let PridajDoKošíka = (id) => {
  let hladaj = kosik.find((x) => x.id === id);

  if (hladaj === undefined) {
    kosik.push({
      id: id,
      item: 1,
    });
  } else {
    hladaj.item += 1;
  }
  update(id);
  localStorage.setItem("Data_kosika", JSON.stringify(kosik));
  KonecnaCena();
  Generatekosik();
};

// funkcia pre odoberanie itemy z kosika

let decrementItem = (id) => {
  let hladaj = kosik.find((x) => x.id === id);

  if (hladaj === undefined) return;

  if (hladaj.item === 0) return;
  else {
    hladaj.item -= 1;
  }
  update(id);
  kosik = kosik.filter((x) => x.item !== 0);
  TransformDivDispley();
  KonecnaCena();
  Generatekosik();
  localStorage.setItem("Data_kosika", JSON.stringify(kosik));
};

let update = (id) => {
  let hladaj = kosik.find((x) => x.id === id);
  calkulacia();
};

let odstranitprodukt = (id) => {
  let vybranaitema = id;
  // console.log(vybranaitema + 'toto je ti ID');
  kosik = kosik.filter((x) => x.id !== vybranaitema);
  localStorage.setItem("Data_kosika", JSON.stringify(kosik));
  calkulacia();
  KonecnaCena();
  Generatekosik();
  TransformDivDispley();
};

let VyprazniKosik = () => {
  kosik = [];
  Generatekosik();
  localStorage.setItem("Data_kosika", JSON.stringify(kosik));
  TransformDivDispley();
};

let Clear_btn = document.getElementById("Clear_btn");
Clear_btn.addEventListener("click", () => {
  VyprazniKosik();
  calkulacia();
  KonecnaCena();
});

// spocita vybrany pocet itemov a vysledok ikazuje v ikone košíka
let calkulacia = () => {
  let kosikIcon = document.getElementById("Kosik_pocet_item");
  let SummaryAllItemNum = document.getElementById("pocet_all_item");
  kosikIcon.innerHTML = kosik.map((x) => x.item).reduce((x, y) => x + y, 0);
  pocet = kosik.map((x) => x.item).reduce((x, y) => x + y, 0);
  SummaryAllItemNum.innerHTML = pocet + " ks";
  // console.log('calkulacia je spustena' + kosik.map((x) => x.item).reduce((x,y)=> x + y,0));
};
calkulacia();

let KonecnaCena = () => {
  if (kosik.length !== 0) {
    let množstvo = kosik
      .map((x) => {
        let { item, id } = x;
        let hladaj = ProduktData.find((y) => y.id === id) || [];
        return item * hladaj.cena;
      })
      .reduce((x, y) => x + y, 0);
    // console.log('celkova cena košíka ' + množstvo);
    let CenaSpolu = document.getElementById("Cena_spolu");
    let Sumary_cena_all = document.getElementById("Sumary_cena_all");
    CenaSpolu.innerHTML = množstvo + " €";
    Sumary_cena_all.innerHTML = množstvo + " €";
  } else {
    let CenaSpolu = document.getElementById("Cena_spolu");
    let Sumary_cena_all = document.getElementById("Sumary_cena_all");
    CenaSpolu.innerHTML = "0,00 €";
    Sumary_cena_all.innerHTML.innerHTML = "0,00 €";
  }
};
KonecnaCena();

// Otvorenie karty sumarizácie košíka

let kosik_btn = document.getElementById("kosik_btn");
kosik_btn.addEventListener("click", () => {
  let a = document.querySelector(".Okno_pod_KosikDiv");
  let b = document.querySelector(".pod_zhrnutie_sumyDiv");
  let d = document.querySelector("#zhrnutie_ceny");
  let c = document.querySelector(".Kosik_okno");
  let f = document.querySelector("#Zavri_kosik");
  let g = document.querySelector("#Div_pre_itemi");
  let h = document.querySelector(".Sumarum_produktu");

  a.style.display = "block";
  b.style.display = "block";
  d.style.display = "block";
  c.style.display = "grid";
  f.style.display = "block";
  g.style.display = "flex";
  h.style.display = "flex";

  TransformDivDispley();
  KonecnaCena();
  Generatekosik();

  // console.log("kosik button funguje");
});

// zavretie karty sumarizácie košíka

let Zavri_kosik_btn = document.getElementById("Zavri_kosik");
Zavri_kosik_btn.addEventListener("click", () => {
  let a = document.querySelector(".Okno_pod_KosikDiv");
  let b = document.querySelector(".pod_zhrnutie_sumyDiv");
  let d = document.querySelector("#zhrnutie_ceny");
  let c = document.querySelector(".Kosik_okno");
  let f = document.querySelector("#Zavri_kosik");
  let g = document.querySelector("#Div_pre_itemi");
  let h = document.querySelector(".Sumarum_produktu");
  let Pod_folmularDiv = document.getElementById("Pod_folmular");
  let Zhrnutie = document.getElementById("Zhrnutie");

  a.style.display = "none";
  b.style.display = "none";
  d.style.display = "none";
  c.style.display = "none";
  f.style.display = "none";
  g.style.display = "none";
  h.style.display = "none";
  Pod_folmularDiv.style.display = "none";
  Zhrnutie.style.display = "none";
});

let KosikSumaryBaseDiv = document.getElementById("Div_pod_kosikSumary");
KosikSumaryBaseDiv.addEventListener("click", () => {
  let a = document.querySelector(".Okno_pod_KosikDiv");
  let b = document.querySelector(".pod_zhrnutie_sumyDiv");
  let d = document.querySelector("#zhrnutie_ceny");
  let c = document.querySelector(".Kosik_okno");
  let f = document.querySelector("#Zavri_kosik");
  let g = document.querySelector("#Div_pre_itemi");
  let h = document.querySelector(".Sumarum_produktu");
  let Pod_folmularDiv = document.getElementById("Pod_folmular");
  let Zhrnutie = document.getElementById("Zhrnutie");

  a.style.display = "none";
  b.style.display = "none";
  d.style.display = "none";
  c.style.display = "none";
  f.style.display = "none";
  g.style.display = "none";
  h.style.display = "none";
  Pod_folmularDiv.style.display = "none";
  Zhrnutie.style.display = "none";
});

// funkcia pre vykreslenie obsahu kosika

const Div_pre_itemi = document.getElementById("Div_pre_itemi");

let Generatekosik = () => {
  if (kosik.length !== 0) {
    return (Div_pre_itemi.innerHTML = kosik
      .map((x) => {
        let { id, item } = x;
        let hladaj = ProduktData.find((y) => y.id === id) || [];
        return `
               <div id=produkt-id-${hladaj.id} class="Sumarum_produktu" >
                   <img id="Img_produkt" class="img-fluid" src="${
                     hladaj.img
                   }" alt="">
                   <div>
                       <p>${hladaj.Nazov}</p>
                       <p> Cena za kus:  ${hladaj.cena} €</p>
                       <p> Dostupnosť: Skladom </p>
                   </div>
                   <div class="pocet_produktov">
                       <button id="minus_btn" onclick="decrementItem(${id})">-</button>
                       <div id=${id} >
                       ${item} ks
                       </div>
                       <button onclick="PridajDoKošíka(${id})">+</button>
                   </div>
                   <div class="pocet_produktov">
                       <p>spolu k úhrade:</p>
                       <div>${item * hladaj.cena} €</div>
                       
                   </div>
                   <div class="pocet_produktov">
                       <button onclick="odstranitprodukt(${id})" class="Cancel_btn">X</button>
                   </div>
               </div>
           </div>
       </div>
   `;
      })
      .join(""));
  } else {
    // Div_pre_itemi.innerHTML = ``
    Div_pre_itemi.innerHTML = `
    <p class="Sumarum_produktu">Nič v košíku:</p>
  `;
    // console.log('kosik  je prazdny')
  }
};
Generatekosik();

// Kliknutie na Eshop button v nav bare
let EshopBtn = document.getElementById("webshbtn");
let IkonaKosika = document.getElementById("kosik_btn");
EshopBtn.addEventListener("click", () => {
  eshop.style.display = "flex";
  IkonaKosika.style.display = "block";
});

// Kliknutie na pokračovať v objednávke (k folmuláru)
let Pod_folmularDiv = document.getElementById("Pod_folmular");
let K_objednavke_btn = document.getElementById("K_objednavke_btn");
K_objednavke_btn.addEventListener("click", () => {
  Pod_folmularDiv.style.display = "flex";
});

// kliknutie späť z formulára

let spat_btn = document.getElementById("spat_btn");
spat_btn.addEventListener("click", (event) => {
  event.preventDefault();
  Pod_folmularDiv.style.display = "none";
});

// kliknutie na  submit btn in form
let Submit_Form_btn = document.getElementById("Submit_Form_btn");
Submit_Form_btn.addEventListener("click", (event) => {
  event.preventDefault();
  let Zhrnutie = document.getElementById("Zhrnutie");
  Zhrnutie.style.display = "block";
  ZápisObsahuKosikaDoSumary();
  ZápisDoSumary();
});

// zápis údajov o zákazníkovy do sumary listu
let ZápisDoSumary = () => {
  let meno = document.getElementById("Meno").value;
  let Priezvisko = document.getElementById("Priezvisko").value;
  let Ulica = document.getElementById("Ulica").value;
  let Mesto = document.getElementById("Mesto").value;
  let PSČ = document.getElementById("PSČ").value;
  let Telefón = document.getElementById("Telefón").value;
  let Kontaktný_email = document.getElementById("Kontaktný_email").value;
  let Spôsob_doručenia = document.getElementById("Spôsob_doručenia").value;

  let ZInfo = document.getElementById("ZInfo");

  return (ZInfo.innerHTML = `
      <p>Meno:&nbsp;&nbsp; ${meno} </p>
      <p>Priezvisko:&nbsp;&nbsp; ${Priezvisko}</p>
      <p>Adresa: <br> ${Ulica} <br> ${Mesto} <br> ${PSČ}</p>
      <p>Telefón:&nbsp; &nbsp;   ${Telefón}</p>
      <p>email: &nbsp; &nbsp;  ${Kontaktný_email}</p>
      <p>Dodanie: &nbsp; &nbsp;  ${Spôsob_doručenia}</p>
`);
};
// zápis údajov o obsahu košíka do sumary listu
let ZápisObsahuKosikaDoSumary = () => {
  let V_KosikuSumaryList = document.getElementById("V_Kosiku");
  if (kosik.length !== 0) {
    return (V_KosikuSumaryList.innerHTML = kosik
      .map((x) => {
        let { id, item } = x;
        let hladaj = ProduktData.find((y) => y.id === id) || [];
        return `
     <div id=produkt-id-${hladaj.id} class="ObsahKosikaSumary"  >
        <img class="img-fluid" src="${
          hladaj.img}" alt="Produkt_img_${hladaj.Nazov}">
        <p>  ${hladaj.Nazov} </p>
        <p> cena za kus <br>${hladaj.cena}  €</p>
        <p> počet kusov <span id=${id}>${item}x</span></p>
        <p> = &nbsp; &nbsp; Cena spolu ${item * hladaj.cena} €</p>
      </div>  
 `;
      })
      .join(""));
  } else {
    // Div_pre_itemi.innerHTML = ``
    Div_pre_itemi.innerHTML = `
  <p class="Sumarum_produktu">Nič v košíku:</p>
`;
    // console.log('kosik  je prazdny')
  }
};
ZápisObsahuKosikaDoSumary();

// odoslanie záveznej objednávky
let Z_objednať = document.getElementById("Z_objednať");
Z_objednať.addEventListener("click", () => {
  ObjednavkaSubmit();
});

// funkcia na odoslanie finálnych údajov na ... conslol log
let ObjednavkaSubmit = () => {
  let meno = document.getElementById("Meno").value;
  let Priezvisko = document.getElementById("Priezvisko").value;
  let Ulica = document.getElementById("Ulica").value;
  let Mesto = document.getElementById("Mesto").value;
  let PSČ = document.getElementById("PSČ").value;
  let Telefón = document.getElementById("Telefón").value;
  let Kontaktný_email = document.getElementById("Kontaktný_email").value;
  let Spôsob_doručenia = document.getElementById("Spôsob_doručenia").value;

  console.log(
    "Meno:  " +
      meno +
      "\n" +
      "Priezvisko:   " +
      Priezvisko +
      "\n" +
      "Ulica:  " +
      Ulica +
      "\n" +
      "Mesto: " +
      Mesto +
      "\n" +
      "PSČ: " +
      PSČ +
      "\n" +
      "Telefón: " +
      Telefón +
      "\n" +
      "email: " +
      Kontaktný_email +
      "\n" +
      "Spôsob_doručenia:  " +
      Spôsob_doručenia +
      "\n" +
      "\n" +
      "Objednaný tovar:"
  );

  kosik.map((x) => {
    let { id, item } = x;
    let hladaj = ProduktData.find((y) => y.id === id) || [];

    cemadokopy = item * hladaj.cena;
    return console.log(
      "id " + hladaj.id,
      hladaj.Nazov +
        "  cena za ks  " +
        hladaj.cena +
        " €" +
        " pocet zvolených " +
        item +
        " ks" +
        "spolu " +
        cemadokopy +
        " €"
    );
  });

  alert("Objednávka odoslaná");
};

// Funkcia pre riešenie problému overflow - flex itemi overflowujú parent flex element
// aj napriek tomu že je nadstavený overflow:auto
// pre skúsku vyskúsaj vypnút funkciu, pridaj do kosika 5 a viac produktov
// A prečo som tam nedal daný element ako blockový od začiatku?
//Pretože som si chcel zarovnať elementy v nom pomocov align-items: center
// ale ked tak rozmíšlam... možno by tam stačilo dať Grid ma teraz napadlo ... :D

let TransformDivDispley = () => {
  let NajdiID = kosik.map((x) => x.id);
  let numID = NajdiID.length;

  if (numID >= 4) {
    let a = document.querySelector(".Okno_pod_KosikDiv");

    if (a.style.display == "block" && numID >= 4) {
      let Kosik_okno = document.querySelector(".Kosik_okno");
      Kosik_okno.style.display = "block";
    }
  } else {
    let Kosik_okno = document.querySelector(".Kosik_okno");
    Kosik_okno.style.display = "flex";
  }
};

// kliknutie späť zo zhrnutia objednávky

let spat = document.getElementById("Spať");
spat.addEventListener("click", () => {
  let Zhrnutie = document.getElementById("Zhrnutie");
  Zhrnutie.style.display = "none";
  // console.log('Buton funguje');
});
