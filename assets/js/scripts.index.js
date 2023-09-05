class Contact{
    constructor(name, fixtel, tel, pfp, birthdate, email, CEP, city, insta, github) {
      this.name = name;
      this.fixtel = fixtel;
      this.tel = tel;
      this.pfp = pfp;
      this.birthdate = birthdate;
      this.age = this.getAge(birthdate);
      this.sign = this.getZodiacSign();
      this.id = this.getUserId();
      this.email = email;
      this.CEP = CEP;
      this.city = city;
      this.insta = insta;
      this.github = github;
    }

    getAge(birthdate) {
        // Data do usuário
        const dataFormatadaJS = new Date(birthdate);
        const dataAno = dataFormatadaJS.getFullYear();
    
        const dataHoje = new Date();
        const dataAtual = dataHoje.getFullYear();
    
        const age = dataAtual - dataAno;
        return age
      }

      getZodiacSign() {
        let birthdate = new Date(this.birthdate);
        let day = birthdate.getDate();
        let month = birthdate.getMonth() + 1;
        console.log("Passou pelo getSigno() da class User");
    
        if ((month == 1 && day <= 20) || (month == 12 && day >= 22)) {
          return "Capricórnio ♑";
        } else if ((month == 1 && day >= 21) || (month == 2 && day <= 18)) {
          return "Aquário ♒";
        } else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
          return "Peixes ♓";
        } else if ((month == 3 && day >= 21) || (month == 4 && day <= 20)) {
          return "Áries ♈";
        } else if ((month == 4 && day >= 21) || (month == 5 && day <= 20)) {
          return "Touro ♉";
        } else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
          return "Gêmeos ♊";
        } else if ((month == 6 && day >= 22) || (month == 7 && day <= 22)) {
          return "Câncer ♋";
        } else if ((month == 7 && day >= 23) || (month == 8 && day <= 23)) {
          return "Leão ♌";
        } else if ((month == 8 && day >= 24) || (month == 9 && day <= 23)) {
          return "Virgem ♍";
        } else if ((month == 9 && day >= 24) || (month == 10 && day <= 23)) {
          return "Libra ♎";
        } else if ((month == 10 && day >= 24) || (month == 11 && day <= 22)) {
          return "Escorpião ♏";
        } else if ((month == 11 && day >= 23) || (month == 12 && day <= 21)) {
          return "Sagitário ♐";
        }    
}
getUserId(){
    const id = Math.floor(Math.random());
    return id;
}
}
class ListContact{
    constructor() {
      this.contacts = [];
    }
    addContact(contact) {

       if (isAnyInputEmpty()) {
         sendErrorMsg("Preencha todos os campos");
       } else {
         sendSuccessMsg("Contato Adicionado");
        this.contacts.push(contact);
    }
  }
}


  const listContact = new ListContact;

function createContact() {
    console.log("entrou creatContact");
    const name = document.getElementById("name").value;
    const fixtel = document.getElementById("fixtel").value;
    const tel = document.getElementById("tel").value;
    const pfp = document.getElementById("pfp").value;
    const birthdate = document.getElementById("date").value;
    const email = document.getElementById("email").value;
    const cep = document.getElementById("cep").value;
    const city = document.getElementById("city").value;
    const insta = document.getElementById("insta").value;
    const github = document.getElementById("github").value;
    /* vai retornar false para reprensentar nao registrado */
  
    const user = new Contact(name, fixtel, tel, pfp, birthdate, email, cep, city, insta, github);
    listContact.addContact(user);
  
    console.log(user);
   clearInputs();
   isAnyInputEmpty();
   formatedCellphone(fixtel);
   showContact();
  }

function clearInputs(){
  console.log("entrou clearInputs");
  const name = document.getElementById("name").value = "";
  const fixtel = document.getElementById("fixtel").value = "";
  const tel = document.getElementById("tel").value = "";
  const pfp = document.getElementById("pfp").value = "";
  const birthdate = document.getElementById("date").value = "";
  const email = document.getElementById("email").value = "";
  const cep = document.getElementById("cep").value = "";
  const city = document.getElementById("city").value = "";
  const insta = document.getElementById("insta").value = "";
  const github = document.getElementById("github").value = "";
  }
function isAnyInputEmpty(){
    console.log("entrou isAnyInputEmpty");
    const name = document.getElementById("name").value;
    const fixtel = document.getElementById("fixtel").value;
    const tel = document.getElementById("tel").value;
    const pfp = document.getElementById("pfp").value;
    const birthdate = document.getElementById("date").value;
    const email = document.getElementById("email").value;
    const cep = document.getElementById("cep").value;
    const city = document.getElementById("city").value;
    const insta = document.getElementById("insta").value;
    const github = document.getElementById("github").value;

    if(name == "" || fixtel == "" ||tel == "" || pfp == "" ||birthdate == "" || email == "" ||cep == "" || city == "" ||insta == "" || github == ""){
        return sendErrorMsg("Preencha os campos");
    }
}
function showContact() {
    console.log("entrou pela funcao showContact");
  
    let html = "";
  
    listContact.contacts.forEach((contact) => {
      html += `<div id="contactCard" onclick="contactDetail()">
      <img src="${contact.pfp}" alt="${contact.name}" id="pfpShow">
      <div id="info-container">
      <h2 id="contactName">${contact.name}</h2>
      <p id="contactFixTel">Telefone Fixo: ${contact.fixtel}</p>
      <p id="contactTel">Telefone: ${contact.tel}</p>
  </div>
                  `;
    });
    document.getElementById("post-container").innerHTML = html;
  }
  function contactDetail() {
    console.log("entrou pela funcao contactDetail");
  
    let html = "";
  
    listContact.contacts.forEach((contact) => {
      html = ` <p>Detalhe</p>
      <img src="${contact.pfp}" alt="${contact.name}" id="pfpDetail">
      <h2 id="contactName">${contact.name}</h2>
      <p id="identifyContact">${contact.id}</p>
      
      <p id="contactTel">Celular: ${contact.tel}</p>
      <p id="contactTel">Telefone: ${contact.fixtel}</p>
      <p id="contactTel">Data de Nascimento: ${contact.birthdate}</p>
      <p id="contactTel">Idade: ${contact.idade}</p>
      <p id="contactTel">Signo: ${contact.signo}</p>
      <p id="contactTel">Email: ${contact.email}</p>
      <p id="contactTel">CEP: ${contact.cep}</p>
      <p id="contactTel">Cidade: ${contact.city}</p>
      <p id="contactTel">Instagram: ${contact.insta}</p>
      <p id="contactTel">Github: ${contact.github}</p>

      <a id="whatsappIcon">whatsap</a>
      <a id="instagramIcon">instagram</a>
      <a id="githubIcon">github</a>
                  `;
    });
    document.getElementById("sidePost-container").innerHTML = html;
  }
function formatedCellphone(fixtel) {
    console.log("Passou pela funcao formatedCellphone()");
  
    let cellphoneArray = fixtel.split("");
    let cellphoneFormated =
      "(" +
      cellphoneArray[0] +
      cellphoneArray[1] +
      ")" +
      " " +
      cellphoneArray[2] +
      cellphoneArray[3] +
      cellphoneArray[4] +
      cellphoneArray[5] +
      cellphoneArray[6] +
      "-" +
      cellphoneArray[7] +
      cellphoneArray[8] +
      cellphoneArray[9] +
      cellphoneArray[10];
    return cellphoneFormated;
  }

function sendErrorMsg(msg) {
    console.log("Passou pela funcao sendErrorMsg()");
  
    document.getElementById("error-msg").innerHTML = msg;
    document.getElementById("error-msg").classList.remove("hidden");
    setTimeout(function () {
      document.getElementById("error-msg").classList.add("hidden");
    }, 4000);
  }
function sendSuccessMsg(msg) {
    console.log("Passou pela funcao sendSucessMsg()");
  
    document.getElementById("success-msg").innerHTML = msg;
    document.getElementById("success-msg").classList.remove("hidden");
    setTimeout(function () {
      document.getElementById("success-msg").classList.add("hidden");
    }, 4000);
  }
