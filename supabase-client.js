/* =========================================================================
   supabase-client.js
   Client Supabase partagé par toutes les pages.
   La clé "publishable" est PUBLIQUE : elle est conçue pour être exposée
   côté navigateur. La sécurité repose sur les politiques RLS côté serveur.
   ========================================================================= */

const SUPABASE_URL      = 'https://jfkrmqbncyegcgmiegci.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_eIN6RDagZJVfjZvd5qslpA_xr28oH1T';

// Client partagé
const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Utilitaires de redirection
function redirectToLogin() {
  window.location.replace(encodeURI('Connexion _ Permis de Conduire.html'));
}
function redirectToEspace() {
  window.location.replace(encodeURI('Mon espace candidat _ RdvPermis.html'));
}
function redirectToAdmin() {
  window.location.replace('admin.html');
}