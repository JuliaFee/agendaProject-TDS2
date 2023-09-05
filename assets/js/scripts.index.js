class Contact{
    constructor(name, fixtel, tel, pfp, birthdate, email, CEP, city, insta, github) {
      this.name = name;
      this.fixtel = fixtel;
      this.tel = tel;
      this.pfp = pfp;
      this.birthdate = birthdate;
      this.age = this.getAge(birthdate);
      this.sign = this.getZodiacSign();
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
