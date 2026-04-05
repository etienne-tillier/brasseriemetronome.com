import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité | Brasserie Métronome",
  description: "Politique de confidentialité de Brasserie Métronome : données collectées, droits des utilisateurs, protection RGPD.",
};

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: "var(--color-secondary)", padding: "3.5rem 0" }}>
        <div className="container">
          <h1 style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
            color: "white",
          }}>
            Politique de confidentialité
          </h1>
          <p style={{ color: "rgba(250,246,240,0.7)", marginTop: "0.75rem" }}>
            Dernière mise à jour : janvier 2024 — Conformité RGPD
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section">
        <div className="container">
          <div style={{ maxWidth: "780px", margin: "0 auto" }} className="prose-blog">

            <h2>1. Responsable du traitement</h2>
            <p>
              <strong>SARL Brasserie Métronome</strong><br />
              47 rue de la République, 75011 Paris<br />
              Email DPO : <a href="mailto:contact@brasseriemetronome.com">contact@brasseriemetronome.com</a>
            </p>

            <h2>2. Données collectées</h2>
            <p>Dans le cadre de l&apos;utilisation du site brasseriemetronome.com, nous pouvons collecter les informations suivantes :</p>
            <ul>
              <li><strong>Données de navigation :</strong> adresse IP, type de navigateur, pages visitées, durée de visite (via cookies analytiques anonymisés)</li>
              <li><strong>Données de contact :</strong> nom, adresse email lorsque vous nous contactez via email</li>
              <li><strong>Données d&apos;inscription :</strong> nom, email, informations sur votre projet brasserie si vous souscrivez à nos services</li>
            </ul>

            <h2>3. Finalités des traitements</h2>
            <p>Nous utilisons vos données personnelles pour :</p>
            <ul>
              <li>Répondre à vos demandes de contact et de consultation</li>
              <li>Vous envoyer les ressources et guides demandés</li>
              <li>Améliorer les fonctionnalités du site (analytics anonymisées)</li>
              <li>Vous informer de nos nouvelles formations et ressources (avec votre consentement)</li>
              <li>Assurer la sécurité du site</li>
            </ul>

            <h2>4. Base légale des traitements</h2>
            <p>Selon la nature des traitements, la base légale est :</p>
            <ul>
              <li><strong>Votre consentement</strong> : pour les communications marketing</li>
              <li><strong>L&apos;exécution d&apos;un contrat</strong> : pour nos services de formation et accompagnement</li>
              <li><strong>Notre intérêt légitime</strong> : pour l&apos;amélioration du site et la sécurité</li>
              <li><strong>Nos obligations légales</strong> : pour la conservation de certains documents</li>
            </ul>

            <h2>5. Durée de conservation</h2>
            <ul>
              <li>Données de contact : 3 ans à compter du dernier échange</li>
              <li>Données clients (contrats) : 5 ans après la fin du contrat</li>
              <li>Données de navigation : 13 mois maximum</li>
              <li>Cookies analytiques : 13 mois</li>
            </ul>

            <h2>6. Destinataires des données</h2>
            <p>
              Vos données ne sont jamais vendues à des tiers. Elles peuvent être partagées avec nos prestataires techniques
              (hébergement, email) dans le strict cadre de leur mission et sous contrat de traitement de données en sous-traitance.
            </p>
            <p>
              Nos prestataires principaux : Vercel (hébergement), Supabase (base de données infrastructure).
              Tous sont soumis au RGPD ou à des clauses contractuelles types approuvées par la Commission européenne.
            </p>

            <h2>7. Vos droits</h2>
            <p>Conformément au RGPD, vous disposez des droits suivants :</p>
            <ul>
              <li><strong>Droit d&apos;accès :</strong> obtenir une copie de vos données personnelles</li>
              <li><strong>Droit de rectification :</strong> corriger des données inexactes</li>
              <li><strong>Droit à l&apos;effacement :</strong> demander la suppression de vos données</li>
              <li><strong>Droit à la portabilité :</strong> recevoir vos données dans un format structuré</li>
              <li><strong>Droit d&apos;opposition :</strong> vous opposer à certains traitements</li>
              <li><strong>Droit à la limitation :</strong> restreindre temporairement le traitement</li>
            </ul>
            <p>
              Pour exercer ces droits, contactez notre DPO à :{" "}
              <a href="mailto:contact@brasseriemetronome.com">contact@brasseriemetronome.com</a>. Nous répondons sous 30 jours.
            </p>

            <h2>8. Cookies</h2>
            <p>Le site utilise des cookies dans les catégories suivantes :</p>
            <ul>
              <li><strong>Cookies strictement nécessaires :</strong> fonctionnement technique du site (pas de consentement requis)</li>
              <li><strong>Cookies analytiques anonymisés :</strong> mesure d&apos;audience (consentement requis)</li>
            </ul>
            <p>Vous pouvez gérer vos préférences cookies via les paramètres de votre navigateur.</p>

            <h2>9. Transferts hors UE</h2>
            <p>
              Certains de nos prestataires (Vercel) sont basés aux États-Unis. Ces transferts sont encadrés par
              des clauses contractuelles types approuvées par la Commission européenne, conformément à l&apos;article 46 du RGPD.
            </p>

            <h2>10. Réclamations</h2>
            <p>
              Si vous estimez que vos droits ne sont pas respectés, vous pouvez déposer une réclamation auprès de la CNIL :{" "}
              <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">www.cnil.fr</a>
            </p>

            <h2>11. Modification de la politique</h2>
            <p>
              Cette politique peut être mise à jour. La date de dernière modification est indiquée en haut de page.
              Nous vous informerons de toute modification substantielle par email si vous êtes client.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
