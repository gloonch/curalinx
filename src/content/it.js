// Italian copy. Mirrors en.js key for key; change both together.

const LOREM = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
const LOREM_S = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'

export default {
  locale: 'it-IT',

  lang: { label: 'Lingua', en: 'English', it: 'Italiano' },

  nav: {
    links: [
      { label: 'Perché Curalinx', section: 'why-curalinx' },
      { label: 'Piani', section: 'plans' },
      { label: 'Chi siamo', to: '/about' },
      { label: 'Contattaci', section: 'contact' },
    ],
    cta: 'Richiedi una demo',
    home: 'Home Curalinx',
    main: 'Principale',
    openMenu: 'Apri il menu',
    closeMenu: 'Chiudi il menu',
  },

  hero: {
    live: 'stima live',
    scroll: 'scorri',
    scrollLabel: 'Scorri a Perché Curalinx',
    stats: [
      {
        id: 'diabetes',
        title: 'nuovi casi di diabete in Italia',
        perSecond: 1 / 90,
        counted: 'Conteggio dalle 00:00 UTC di oggi',
        rate: 'tasso: +0,011 al secondo (1 ogni 90 secondi)',
        source: 'Fonte: AGENAS/Ministero della Salute, 2025',
        note: 'Stima basata sull\'incidenza annuale; non rappresenta un conteggio in tempo reale.',
      },
      {
        id: 'dementia',
        title: 'Nuovi casi di demenza',
        perSecond: 1 / 90,
        counted: 'Dalle 00:00 UTC di oggi',
        rate: 'tasso: +0,011 al secondo (1 ogni 90 secondi)',
        source: 'Fonte: AUSL Piacenza, 2025',
        note: 'Stima basata sull\'incidenza annuale; non rappresenta un conteggio in tempo reale.',
      },
      {
        id: 'cardio',
        title: 'Nuovi casi di malattie cardiovascolari, renali e metaboliche',
        perSecond: 1 / 36,
        counted: 'Dalle 00:00 UTC di oggi',
        rate: 'tasso: +0,028 al secondo (1 ogni 36 secondi)',
        source: 'Fonte: ANSA, 2026',
        note: 'Stima basata sull\'incidenza annuale; non rappresenta un conteggio in tempo reale.',
      },
    ],
  },

  why: {
    titleBefore: 'perché',
    titleAfter: '?',
    story: {
      problem: [
        'Le patologie croniche rappresentano una parte significativa del carico sui sistemi sanitari. La loro gestione, tuttavia, rimane spesso concentrata su momenti specifici: una visita, una prescrizione, un controllo.',
        'Tra un appuntamento e l’altro, il paziente vive la propria condizione ogni giorno: i sintomi cambiano, le terapie proseguono, emergono eventi e nuove informazioni.',
        'Gran parte di ciò che accade in questo intervallo, però, può rimanere frammentato o non essere disponibile al momento della visita.',
      ],
      quote: 'La cura è episodica, ma la patologia cronica è continua e la vita del paziente cambia ogni giorno.',
      answerTitle: 'curalinX nasce per colmare questo spazio.',
      answer: [
        'Crea una continuità digitale tra ciò che accade ogni giorno e ciò che avviene durante la visita.',
        'Raccoglie le informazioni del percorso del paziente nel tempo e le organizza in un quadro strutturato, rendendo più ordinato e condivisibile il percorso tra paziente con una patologia cronica e professionista sanitario privato.',
      ],
    },
    prompt: 'Scegli la tua prospettiva e scopri come curalinX può essere utile per te.',
    tabsLabel: 'Scegli la tua prospettiva',
    empty: 'Curalinx collega pazienti, dati sanitari e medici. Scegli un’opzione qui sopra per vedere i dettagli.',
    flow: [
      { label: 'Paziente', sub: 'Condivide in sicurezza' },
      { label: 'Dati sanitari', sub: 'Referti · parametri' },
      { label: 'Curalinx', sub: 'Collega e protegge' },
      { label: 'Medico', sub: 'Agisce con il contesto' },
    ],
    plansEyebrow: 'Piani',
    plansTitle: 'Scegli il tuo piano',
    patient: {
      tab: 'Per i pazienti',
      plansFor: '(per i pazienti)',
      title: 'Il tuo percorso, sempre con te',
      intro: [
        'curalinX ti accompagna tra una visita e l’altra e non ti lascia solo durante il tuo percorso di cura. Ti aiuta a organizzare le informazioni nel tempo, ritrovare ciò che è importante e condividerlo con i professionisti sanitari.',
      ],
      cards: [
        { icon: 'file-text', title: 'Tracciamento completo', text: 'Registra sintomi, terapie, referti, riepiloghi delle visite, esami ed eventi rilevanti. Le informazioni vengono organizzate nel tempo, per mantenere una visione completa e ordinata del tuo percorso.' },
        { icon: 'calendar', title: 'Appuntamenti', text: 'Inserisci gli appuntamenti già programmati, anche se prenotati attraverso altri canali, oppure accedi alle possibilità di prenotazione disponibili tramite curalinX.' },
        { icon: 'bell', title: 'Promemoria', text: 'Ricevi promemoria per l’assunzione dei farmaci, per i farmaci in esaurimento e per le visite e gli esami in programma.' },
        { icon: 'star', title: 'Tieni sotto controllo', text: 'Scegli le informazioni a cui vuoi prestare maggiore attenzione e accedi facilmente agli elementi più rilevanti del tuo percorso di cura.' },
        { icon: 'share-2', title: 'Condivisione', text: 'Crea un riepilogo strutturato del tuo percorso e condividilo con il professionista sanitario, con il tuo consenso.' },
        { icon: 'shield-check', title: 'Privacy', text: 'Le informazioni del tuo percorso sono gestite nel rispetto della privacy e delle tue scelte sulla gestione e condivisione dei dati.' },
      ],
      plans: [
        {
          name: 'Base',
          description: 'Tutto ciò che ti serve per organizzare il tuo percorso.',
          features: [
            'Registrazione di sintomi ed eventi',
            'Gestione di farmaci e terapie',
            'Promemoria per visite ed esami',
            'Timeline del percorso',
            'Condivisione con i professionisti sanitari',
          ],
          ctaLabel: 'Inizia',
          ctaSection: 'request-demo',
        },
        {
          name: 'Pro',
          description: 'Più libertà e semplicità nel gestire il tuo percorso.',
          features: [
            'Tutto ciò che è incluso nel piano Base',
            { title: 'Accesso per familiari e caregiver', text: 'Invita un familiare o un caregiver a partecipare alla gestione del percorso del paziente.' },
            { title: 'Assistenza vocale', text: 'Registra a voce sintomi, eventi e altre informazioni del tuo percorso, senza doverle scrivere.' },
            { title: 'Inserimento di foto', text: 'Aggiungi fotografie alle tue registrazioni per documentare visivamente ciò che desideri conservare nel tuo percorso.' },
          ],
          ctaLabel: 'Inizia',
          ctaSection: 'request-demo',
          featured: true,
        },
      ],
    },
    doctor: {
      tab: 'Per i medici',
      plansFor: '(per i medici)',
      title: 'Più tempo per il paziente, meno tempo per ricostruire la sua storia',
      intro: [
        'Durante ogni visita, una parte del tempo può essere dedicata a ricostruire ciò che è accaduto dall’ultimo incontro: sintomi, terapie, eventi e altre informazioni riferite dal paziente. Non sempre, però, il paziente riesce a ricordare tutti gli eventi avvenuti nel periodo precedente.',
        'curalinX organizza queste informazioni nel tempo e le rende disponibili durante la visita, con il consenso del paziente.',
        'Il medico può così consultare più rapidamente la storia riportata dal paziente e dedicare più tempo al confronto e alla propria attività professionale.',
      ],
      cards: [
        { icon: 'calendar', title: 'Agenda e prenotazioni', text: 'Gestisci le richieste di appuntamento e visualizza il motivo della visita indicato dal paziente al momento della prenotazione.' },
        { icon: 'clipboard-list', title: 'Preparazione alla visita', text: 'Puoi fornire al paziente indicazioni su cosa portare alla visita, quali documenti avere con sé o come prepararsi all’appuntamento.' },
        { icon: 'user-check', title: 'Riepilogo del percorso', text: 'Con il consenso del paziente, consulta le informazioni registrate tra una visita e l’altra, come sintomi, farmaci, eventi e variazioni riportate dal paziente.' },
        { icon: 'chart-column', title: 'Visualizzazione nel tempo', text: 'Visualizza le informazioni condivise dal paziente attraverso grafici organizzati nel tempo, per una consultazione più immediata.' },
        { icon: 'sliders-horizontal', title: 'Personalizzazione', text: 'Filtra e seleziona le informazioni da visualizzare, scegliendo quali elementi avere a disposizione per primi durante la consultazione.' },
        { icon: 'monitor-smartphone', title: 'Accesso sicuro', text: 'Accedi a curalinX da computer, tablet o smartphone, dallo studio o da remoto, senza installare software. Le informazioni sono gestite nel rispetto della privacy.' },
      ],
      plans: [
        {
          name: 'Medico Singolo',
          description: 'Per un singolo professionista privato.',
          features: [
            'Accesso al portale',
            'Riepilogo del percorso del paziente',
            'Timeline delle informazioni',
            'Grafici e visualizzazioni',
            'Filtri e personalizzazione',
            'Gestione delle prenotazioni ed agenda',
          ],
          ctaLabel: 'Inizia',
          ctaSection: 'request-demo',
        },
        {
          name: 'Studio Privato',
          description: 'Fino a 5 professionisti.',
          features: [
            'Accesso al portale con dashboard separate',
            'Riepilogo del percorso del paziente',
            'Timeline delle informazioni',
            'Grafici e visualizzazioni',
            'Filtri e personalizzazione',
            'Gestione dei ruoli e dei permessi',
            'Gestione delle prenotazioni ed agenda',
          ],
          ctaLabel: 'Inizia',
          ctaSection: 'request-demo',
          featured: true,
        },
      ],
    },
  },

  demo: {
    eyebrow: 'Richiedi una demo',
    title: 'Scopri curalinX in azione',
    lead: 'Un incontro per vedere da vicino come funziona curalinX e come può inserirsi nel tuo percorso.',
    intro: 'Durante la demo potrai esplorare le principali funzioni della piattaforma, vedere come vengono organizzate le informazioni e capire come curalinX mette in comunicazione pazienti e professionisti tra una visita e l’altra.',
    fields: {
      name: 'Nome e Cognome',
      namePlaceholder: 'Mario Rossi',
      email: 'Indirizzo Email',
      emailPlaceholder: 'nome@esempio.com',
      role: 'Sono un/una',
      doctor: 'Medico',
      patient: 'Paziente',
      organization: 'Organizzazione (facoltativo)',
      phone: 'Numero di telefono (facoltativo)',
      phonePlaceholder: '+39 000 000 0000',
      message: 'Messaggio',
      messagePlaceholder: 'Cosa ti piacerebbe vedere durante la demo?',
    },
    consent: 'Inviando il modulo accetti la nostra Privacy Policy.',
    formLabel: 'Richiedi una demo',
    submit: 'Richiedi una demo',
    sending: 'Invio della richiesta in corso',
    errors: {
      name: 'Inserisci nome e cognome.',
      role: 'Seleziona Medico o Paziente.',
      message: 'Raccontaci brevemente cosa ti piacerebbe vedere.',
    },
    done: {
      title: 'Richiesta ricevuta',
      text: 'Grazie. Ti contatteremo entro un giorno lavorativo per fissare la demo.',
      again: 'Invia un’altra richiesta',
    },
  },

  newsletter: {
    label: 'Newsletter',
    title: 'Rimani aggiornato su curalinX',
    text: 'Ricevi novità, aggiornamenti e nuove funzionalità di curalinX. Niente spam. Puoi annullare l’iscrizione in qualsiasi momento.',
    email: 'Indirizzo Email',
    emailPlaceholder: 'inserisci il tuo indirizzo email',
    submit: 'Iscriviti',
    done: 'Iscrizione completata. Controlla la tua casella di posta per confermare.',
  },

  contact: {
    title: 'Contattaci',
    intro: 'Hai una domanda, vuoi parlare di una collaborazione o sei della stampa? Scrivici e ti risponderemo il prima possibile.',
    fields: {
      name: 'Nome e Cognome',
      email: 'Indirizzo Email',
      emailPlaceholder: 'nome@esempio.com',
      phone: 'Numero di telefono',
      phonePlaceholder: '+39 000 000 0000',
      subject: 'Oggetto',
      subjectPlaceholder: 'Scegli un argomento',
      message: 'Messaggio',
      submit: 'Invia il messaggio',
    },
    subjects: ['Domanda generale', 'Collaborazioni', 'Stampa', 'Supporto tecnico'],
    email: 'hello@curalinx.com',
    phone: '+1 (000) 000-0000',
    address: 'Città, Paese',
    formLabel: 'Contattaci',
    sending: 'Invio in corso',
    emailOk: 'Perfetto.',
    errors: { message: 'Scrivi un messaggio.' },
    done: {
      title: 'Messaggio inviato',
      text: 'Grazie per averci scritto. Ti risponderemo al più presto.',
      again: 'Invia un altro messaggio',
    },
  },

  form: {
    optional: 'Facoltativo',
    emailRequired: 'L’indirizzo email è obbligatorio.',
    emailInvalid: 'Inserisci un indirizzo email valido, ad esempio nome@esempio.com.',
  },

  footer: {
    tagline: 'Colleghiamo pazienti, dati sanitari e medici, in modo sicuro.',
    about: 'Chi siamo',
    product: 'Prodotto',
    contact: 'contatti',
    links: {
      about: 'Chi siamo',
      contact: 'Contattaci',
      demo: 'Richiedi una demo',
      why: 'Perché Curalinx',
      plans: 'Piani',
    },
    socialOn: 'Curalinx su',
    legal: 'Note legali',
    privacy: 'Privacy Policy',
    terms: 'Termini di servizio',
    rights: 'Curalinx. Tutti i diritti riservati.',
  },

  about: {
    docTitle: 'Chi siamo',
    eyebrow: 'Chi siamo',
    title: 'Il team dietro Curalinx',
    lead: `Curalinx collega i pazienti, i loro dati sanitari e i loro medici. ${LOREM} Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    pillars: [
      { title: 'La nostra missione', text: `${LOREM_S} Sed do eiusmod tempor incididunt ut labore.` },
      { title: 'La nostra visione', text: `${LOREM_S} Sed do eiusmod tempor incididunt ut labore.` },
      { title: 'Il nostro team', text: `${LOREM_S} Sed do eiusmod tempor incididunt ut labore.` },
    ],
    teamLabel: 'Membri del team',
    team: [
      { name: 'Membro del team 1', role: 'Co-fondatore e CEO', tone: 'brand', bio: `Breve biografia segnaposto. ${LOREM_S}` },
      { name: 'Membro del team 2', role: 'Co-fondatore e CTO', tone: 'doctor', bio: `Breve biografia segnaposto. ${LOREM_S}` },
      { name: 'Membro del team 3', role: 'Responsabile clinico', tone: 'patient', bio: `Breve biografia segnaposto. ${LOREM_S}` },
      { name: 'Membro del team 4', role: 'Lead Product Designer', tone: 'brand', bio: `Breve biografia segnaposto. ${LOREM_S}` },
      { name: 'Membro del team 5', role: 'Responsabile dati e sicurezza', tone: 'doctor', bio: `Breve biografia segnaposto. ${LOREM_S}` },
    ],
  },

  pages: {
    legal: 'Note legali',
    privacy: { title: 'Privacy Policy', text: 'La nostra privacy policy sarà pubblicata qui.' },
    terms: { title: 'Termini di servizio', text: 'I nostri termini di servizio saranno pubblicati qui.' },
    notFound: { eyebrow: '404', title: 'Pagina non trovata', text: 'La pagina che cerchi non esiste o è stata spostata.' },
    back: 'Torna alla home',
  },

  social: [
    { label: 'LinkedIn', icon: 'linkedin', href: 'https://www.linkedin.com' },
    { label: 'Instagram', icon: 'instagram', href: 'https://www.instagram.com' },
  ],
}
