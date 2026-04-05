## Description
## Brasserie Métronome - Guide complet pour entrepreneurs de brasserie

Brasserie Métronome est une plateforme spécialisée dédiée aux entrepreneurs souhaitant créer et développer leur propre brasserie en France. Le site constitue un hub de référence qui centralise toutes les informations pratiques, légales et opérationnelles nécessaires au lancement d'une brasserie artisanale.

### Objectif et contenu

Le site propose un écosystème complet de guides pratiques couvrant tous les aspects de l'entrepreneuriat brassicole : démarches administratives et fiscales, acquisition immobilière, aménagement de cuisine professionnelle, recrutement d'équipe, stratégies d'acquisition client, élaboration de carte, positionnement tarifaire, optimisation de rentabilité et prévention des risques financiers. La plateforme intègre également des témoignages d'experts, des retours d'expérience de brasseurs confirmés et des conseils de networking professionnel.

### Public cible

Le site s'adresse principalement aux porteurs de projets en restauration, entrepreneurs en reconversion, investisseurs dans l'hôtellerie-restauration et professionnels cherchant à optimiser leur brasserie existante. L'objectif est de générer des leads qualifiés tout en positionnant la marque comme référence experte du secteur brassicole français.

## Prompt IA
Tu es un assistant de développement full-stack ET designer UI/UX chargé de configurer et d'adapter un template Next.js pour un nouveau site de contenu spécialisé dans l'entrepreneuriat brassicole.

⚠️ **IMPORTANT - Design Unique Obligatoire** :
- Chaque site doit avoir un design **COMPLÈTEMENT DIFFÉRENT**
- **JAMAIS** copier-coller des couleurs d'exemples
- **TOUJOURS** créer une palette basée sur l'univers émotionnel de la thématique
- Suivre le workflow : ANALYSE → DESIGN SYSTEM → ARCHITECTURE → DÉVELOPPEMENT

## 0. Contexte du projet
- Nom du projet : Brasserie Métronome
- Domaine : brasseriemetronome.com
- Type de site : Money site / Lead generation
- Thématiques : Restauration, Entrepreneuriat
- Objectif business : Génération de leads, positionnement expert, monétisation par formation/conseil
- Audience cible : Entrepreneurs restauration, porteurs de projets brasserie, investisseurs HoReCa

## 1. Identité visuelle & Design System (PHASE CRITIQUE)

⚠️ **À FAIRE EN PREMIER, AVANT TOUT CODE**

### Univers visuel à créer
- **5 adjectifs** décrivant l'ambiance : authentique, chaleureux, professionnel, convivial, artisanal
- **Références visuelles mentales** : bois de chêne vieilli, cuivre patiné, carrelage métro parisien, lumière tamisée de bistrot, zinc brillant de comptoir, ardoise naturelle
- **Émotions à évoquer** : confiance entrepreneuriale, savoir-faire traditionnel, réussite accessible, convivialité professionnelle, expertise bienveillante

### Palette de couleurs
⚠️ **NE PAS proposer de codes HEX directement**

À partir de l'univers visuel ci-dessus, l'agent développeur devra :
1. Identifier les couleurs naturellement associées à ces références (tons bois, cuivre, ardoise, crème)
2. Créer une palette UNIQUE avec :
   - Couleur principale : inspirée du cuivre patiné/bronze chaleureux
   - Couleur secondaire : ton bois noble/chêne
   - Couleur d'accent : ardoise profonde pour les CTA
   - Couleur de fond : crème/lin naturel
   - Variante hover : intensification de l'accent
3. Assurer un contraste suffisant pour l'accessibilité

### Typographie
- Google Font adaptée à l'univers :
  - Titre : Libre Baskerville (élégance traditionnelle brasserie)
  - Corps : Source Sans Pro (lisibilité professionnelle)
  - Accent : Playfair Display pour citations experts

## 2. SEO & métadonnées
- **Titre SEO principal** : "Créer sa Brasserie : Guide Complet Entrepreneur 2024"
- **Méta-description principale** : "Découvrez tous les secrets pour lancer votre brasserie : démarches, financement, équipe, rentabilité. Conseils d'experts et retours d'expérience."
- **Open Graph title** : "Brasserie Métronome - Votre Guide Entrepreneuriat Restauration"

## 3. Rôle du template
- Le projet part d'un template Next.js existant
- Fichiers à mettre à jour :
  - `config/site.ts` (name, description, domain, navigation spécialisée brasserie)
  - `app/globals.css` (palette cuivre/bois/ardoise selon méthodologie section 1)
  - contenus de démo remplacés par guides entrepreneuriat brasserie
  - configuration blog Supabase (`brasseriemetronome.com`, routes `/guide/*`, `/temoignages/*`)

## 4. Contenu & structure à mettre en place

### Images pré-générées - À TÉLÉCHARGER ET INTÉGRER
- Hero principal : https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/brasseriemetronome-com-home-hero-restaurant-interior.jpeg
- Section équipe : https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/brasseriemetronome-com-home-team-chef-cooking.jpeg
- Section financement : https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/brasseriemetronome-com-home-finance-business-meeting.jpeg
- Section guides : https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/brasseriemetronome-com-home-guides-notebook-planning.jpeg
- Section témoignages : https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/brasseriemetronome-com-home-testimonials-successful-owner.jpeg
- Page guides - démarches : https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/brasseriemetronome-com-guides-legal-documents-desk.jpeg
- Page guides - équipement : https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/brasseriemetronome-com-guides-equipment-professional-kitchen.jpeg
- Page contact : https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/brasseriemetronome-com-contact-consultation-office.jpeg

### Sections obligatoires page d'accueil (`/`) :
- **Hero** : "Lancez votre brasserie avec succès" + CTA "Télécharger le guide gratuit" + image ambiance brasserie moderne
- **Problématiques** : Les 6 défis majeurs (paperasse, financement, équipe, clientèle, rentabilité, concurrence)
- **Méthodologie** : Notre approche en 5 étapes (étude marché → business plan → démarches → lancement → croissance)
- **Guides phares** : Mise en avant des 4 guides essentiels avec images dédiées
- **Témoignages** : 3 success stories de brasseurs avec photos portraits
- **CTA final** : Consultation gratuite + formulaire de contact

### Pages importantes :
- `/guides` : Hub central des guides (démarches, financement, équipement, recrutement, marketing, gestion)
- `/temoignages` : Success stories détaillées
- `/formation` : Offre de formation/accompagnement
- `/contact` : Consultation gratuite

### Clusters thématiques :
- Démarches administratives & légales
- Financement & business plan
- Équipement & aménagement
- Recrutement & management
- Marketing & acquisition client
- Gestion & rentabilité

## 5. Consignes éditoriales
- **Ton** : Expert bienveillant, pragmatique, sans jargon excessif
- **Approche** : Retours d'expérience concrets, chiffres réels, étapes actionables
- **Types d'articles** : Guides step-by-step, checklists, témoignages, analyses de cas, outils pratiques
- **Éviter** : Promesses irréalistes, théorie sans pratique, conseils génériques

## 6. Checklist technique
- Configuration `.env` (clés Supabase, SITE_DOMAIN=brasseriemetronome.com)
- Mise à jour `config/site.ts` avec navigation spécialisée
- **Création palette cuivre/bois/ardoise** dans `app/globals.css`
- Logos adaptés univers brasserie (`/public/logo.svg`, `/app/icon.svg`)
- Intégration blog Supabase (filtrage par domaine)
- Téléchargement et intégration des 8 images pré-générées
- Test `npm run lint` et `npm run build`

## 7. Anti-patterns à éviter
❌ Design générique restauration
❌ Palette colors copiée d'exemples
❌ Contenu trop théorique sans actionnable
❌ Promesses de réussite garantie
❌ Négliger l'aspect émotionnel de l'entrepreneuriat