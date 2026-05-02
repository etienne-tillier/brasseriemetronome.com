import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mentions légales | Brasserie Métronome",
  description: "Mentions légales du site Brasserie Métronome : éditeur, hébergeur, propriété intellectuelle et informations légales obligatoires.",
};

export default function MentionsLegalesPage() {
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
            Mentions légales
          </h1>
          <p style={{ color: "rgba(250,246,240,0.7)", marginTop: "0.75rem" }}>
            Dernière mise à jour : janvier 2024
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section">
        <div className="container">
          <div style={{ maxWidth: "780px", margin: "0 auto" }} className="prose-blog">

            <h2>1. Éditeur du site</h2>
            <p>
              Le site <strong>brasseriemetronome.com</strong> est édité par :<br />
              <strong>SARL Brasserie Métronome</strong><br />
              Capital social : 15 000 €<br />
              Siège social : 47 rue de la République, 75011 Paris<br />
              SIRET : 921 456 789 00015<br />
              RCS Paris : 921 456 789<br />
              TVA intracommunautaire : FR 12 921456789
            </p>
            <p>
              Directeur de la publication : Nicolas Fontaine<br />
              Email : <a href="mailto:contact@brasseriemetronome.com">contact@brasseriemetronome.com</a>
            </p>

            <h2>2. Hébergement</h2>
            <p>
              Le site est hébergé par :<br />
              <strong>Vercel Inc.</strong><br />
              340 Pine Street, Suite 701<br />
              San Francisco, CA 94104, États-Unis<br />
              Site : <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">vercel.com</a>
            </p>

            <h2>3. Propriété intellectuelle</h2>
            <p>
              L&apos;ensemble du contenu de ce site (textes, guides, illustrations, structure) est protégé par le droit
              d&apos;auteur et appartient à SARL Brasserie Métronome ou à ses partenaires. Toute reproduction, même
              partielle, est interdite sans autorisation préalable écrite de l&apos;éditeur.
            </p>
            <p>
              La marque &ldquo;Brasserie Métronome&rdquo; est une marque déposée. Toute utilisation non autorisée
              constitue une contrefaçon passible des sanctions prévues aux articles L.716-1 et suivants du Code de la Propriété Intellectuelle.
            </p>

            <h2>4. Données personnelles</h2>
            <p>
              La collecte et le traitement des données personnelles des utilisateurs sont détaillés dans notre{" "}
              <Link href="/politique-confidentialite">Politique de confidentialité</Link>.
              Conformément au RGPD et à la loi Informatique et Libertés, vous disposez d&apos;un droit d&apos;accès,
              de rectification et de suppression de vos données.
            </p>

            <h2>5. Cookies</h2>
            <p>
              Le site brasseriemetronome.com peut utiliser des cookies techniques nécessaires à son fonctionnement.
              Aucun cookie publicitaire n&apos;est déposé sans votre consentement préalable.
            </p>

            <h2>6. Liens hypertextes</h2>
            <p>
              Le site peut contenir des liens vers des sites tiers. SARL Brasserie Métronome n&apos;est pas responsable
              du contenu de ces sites et ne peut être tenu pour responsable des dommages résultant de leur consultation.
            </p>

            <h2>7. Limitation de responsabilité</h2>
            <p>
              Les informations publiées sur ce site sont données à titre indicatif et éducatif. Elles ne constituent
              pas un conseil juridique, fiscal ou financier personnalisé. Brasserie Métronome ne saurait être tenu
              responsable d&apos;une décision prise sur la base de ces informations sans consultation d&apos;un professionnel qualifié.
            </p>

            <h2>8. Droit applicable</h2>
            <p>
              Le présent site est soumis au droit français. En cas de litige relatif à l&apos;utilisation du site,
              les tribunaux français sont seuls compétents.
            </p>

            <h2>9. Contact</h2>
            <p>
              Pour toute question relative aux présentes mentions légales :{" "}
              <a href="mailto:contact@brasseriemetronome.com">contact@brasseriemetronome.com</a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
