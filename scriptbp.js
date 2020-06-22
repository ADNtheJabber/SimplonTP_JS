var enregistrer = document.getElementById('submit');
enregistrer.addEventListener('click', check_entrees);

var annuler = document.getElementById('reset');
annuler.addEventListener('click', refresh)


       
    
    var nom = document.getElementById("nom");
    var nom_m = document.getElementById('name_error');

    var prenom = document.getElementById("prenom");
    var prenom_m = document.getElementById('firstname_error');

    var adresse = document.getElementById('adresse');
    var adresse_m = document.getElementById('adress_error');

    var tel = document.getElementById('tel');
    var tel_m = document.getElementById('tel_error');

    var telformat = /^\d{10}$/;

    var email = document.getElementById("email");
    var email_m = document.getElementById('email_error');

    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    var salaire = document.getElementById("salaire");
    var salaire_m = document.getElementById('salary_error');

    var id = document.getElementById("identity");
    var id_m = document.getElementById("id_error");

    var numeroCompte = document.getElementById("num_compte");
    var numeroCompte_m = document.getElementById('account_error');
    
    

    function check_entrees(e) {
        
        if (!nom.value || nom.length < 3 || nom[0] === '') {
            e.preventDefault();
                nom_m.textContent ='renseignez le  nom';
                nom_m.style.color ='red';            
        }

        else if (!prenom.value || prenom.length < 3 || prenom[0] === '') {
            e.preventDefault();
                prenom_m.textContent ='renseignez le  prenom';
                prenom_m.style.color ='red';
        }
       
        else if (!adresse.value || adresse[0] === '') {
            e.preventDefault();
                prenom_m.textContent ='renseignez l\'adresse';
                prenom_m.style.color ='red';
        }

        else if (!email.value.match(mailformat)) {
            e.preventDefault();
                email_m.textContent ='renseignez le  bon mail';
                email_m.style.color ='red';
        }
        
        else if (tel.length < 9) {
            e.preventDefault();
                tel_m.textContent ='renseignez le  telephone';
                tel_m.style.color ='red';
        }

        /*
        else if (!salaire.) {
            e.preventDefault();
                email_m.textContent ='renseignez le  telephone';
                email_m.style.color ='red';
        }
        */

        else if (!id.value || id[0] === '' || id.length < 10) {
            e.preventDefault();
                id_m.textContent ='renseignez le bon identifiant';
                id_m.style.color ='red';
        }

        else if (!numeroCompte.value || numeroCompte[0] === '' || numeroCompte.length < 6) {
            e.preventDefault();
                numeroCompte_m.textContent ='renseignez le bon identifiant';
                numeroCompte_m.style.color ='red';
        }

        else {
            window.alert('Formulaire envoyé !');
        }
    }

    function refresh(e) {
        e.preventDefault();
        location.reload();
    }