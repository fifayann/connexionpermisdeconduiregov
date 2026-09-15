/* =========================================================================
   candidats.js — Données des candidats (à éditer librement)
   -------------------------------------------------------------------------
   - La clé de recherche est `email`.
   - Modifiez ici les dates, auto-écoles, résultats, compétences, etc.
     → L'espace candidat se met à jour automatiquement.
   - Les dates acceptent les formats : "2026-06-04" ou "04/06/2026".
   ========================================================================= */

const CANDIDATS = [
  {
    email: "dimitri.ferrand13@gmail.com",
    nom: "Dimitri Aurel FERRAND",
    neph: "220477200527",
    dateNaissance: "2003-11-13",
    categoriePermis: "B",

    autoEcole: {
      nom: "PERMIS LIBRE",
      email: "stych@rdvpermis.fr"
    },

    examens: [
      {
        type: "Pratique",
        date: "2026-06-04",
        resultat: "Favorable",
        centreExamen: "CRETEIL B (094)",
        adresseCentre: "12/14 rue des archives",
        examinateur: "32995",
        observations: "Conduite régulière et respectueuse du code. Permis délivré.",
        certificat: "#",   // lien vers le PDF (laisser "#" si non applicable)
        bilan: [
          {
            categorie: "Connaître et maîtriser son véhicule",
            competences: [
              { nom: "Savoir s'installer et assurer la sécurité à bord", points: 1, max: 2 },
              { nom: "Effectuer des vérifications du véhicule",            points: 2, max: 3 },
              { nom: "Connaître et utiliser les commandes",                points: 2, max: 3 }
            ]
          },
          {
            categorie: "Appréhender la route",
            competences: [
              { nom: "Prendre l'information",                 points: 2, max: 3 },
              { nom: "Adapter son allure aux circonstances",  points: 3, max: 3 },
              { nom: "Appliquer la réglementation",           points: 3, max: 3 }
            ]
          },
          {
            categorie: "Partager la route avec les autres usagers",
            competences: [
              { nom: "Communiquer avec les autres usagers",   points: 3, max: 3 },
              { nom: "Partager la chaussée",                  points: 3, max: 3 },
              { nom: "Maintenir les espaces de sécurité",     points: 2, max: 3 }
            ]
          },
          {
            categorie: "Autonomie, conscience du risque",
            competences: [
              { nom: "Analyse des situations",     points: 1, max: 1 },
              { nom: "Adaptation aux situations",  points: 1, max: 1 },
              { nom: "Conduite autonome",          points: 1, max: 1 }
            ]
          },
          {
            categorie: "Conduite respectueuse",
            competences: [
              { nom: "Conduite économique et respectueuse de l'environnement", points: 1, max: 1 },
              { nom: "Courtoisie",                                             points: 1, max: 1 }
            ]
          }
        ]
      },
      {
        type: "Code",
        date: "07/10/2026",
        resultat: "Favorable",
        validite: "2027-07-30",
        dispensePratique: "Non"
      }
    ]
  },

  /* ---------- Exemple d'un second candidat ---------- */
  {
    email: "jean.dupont@example.com",
    nom: "Jean DUPONT",
    neph: "987654321",
    dateNaissance: "1995-05-20",
    categoriePermis: "A",
    autoEcole: { nom: "AUTO-ÉCOLE DU CENTRE", email: "contact@aec.fr" },
    examens: [
      {
        type: "Pratique",
        date: "15/09/2026",
        resultat: "Favorable",
        centreExamen: "PARIS 15e (075)",
        adresseCentre: "10 rue de Vaugirard",
        examinateur: "45678",
        observations: "Bonne maîtrise, conduite sûre.",
        certificat: "#",
        bilan: [
          {
            categorie: "Connaître et maîtriser son véhicule",
            competences: [
              { nom: "Savoir s'installer et assurer la sécurité à bord", points: 2, max: 2 },
              { nom: "Effectuer des vérifications du véhicule",            points: 3, max: 3 },
              { nom: "Connaître et utiliser les commandes",                points: 3, max: 3 }
            ]
          }
          /* ... autres catégories si nécessaire ... */
        ]
      }
    ]
  }
];