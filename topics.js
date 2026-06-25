// ── Voeg een nieuw onderwerp toe onder de juiste klas ────────────────────────
// { id, titel, beschrijving, kleur (optioneel) }
// 'id' moet overeenkomen met de bestandsnaam in /data/  (bijv. "romeinen" → data/romeinen.json)

const KLASSEN = [
  {
    id: "brugklas",
    naam: "Brugklas",
    onderwerpen: [
      { id: "lorem-brugklas-1", titel: "Lorem Ipsum I",   beschrijving: "Dolor sit amet, consectetur adipiscing elit", kleur: "#c0392b" },
      { id: "lorem-brugklas-2", titel: "Lorem Ipsum II",  beschrijving: "Sed do eiusmod tempor incididunt ut labore",   kleur: "#e67e22" },
      { id: "lorem-brugklas-3", titel: "Lorem Ipsum III", beschrijving: "Ut enim ad minim veniam, quis nostrud",        kleur: "#f39c12" },
    ],
  },
  {
    id: "4havo",
    naam: "4 havo",
    onderwerpen: [
      { id: "4havo-7-2-eerste-wereldoorlog", titel: "7.2 – De Eerste Wereldoorlog", beschrijving: "Achterliggende oorzaken van de Eerste Wereldoorlog", kleur: "#1a6eb5" },
      { id: "4havo-staatsinrichting-grondwet-1848", titel: "Staatsinrichting – De grondwet van 1848", beschrijving: "Hoe en waarom Nederland in 1848 een nieuwe grondwet kreeg", kleur: "#2471a3" },
      { id: "4havo-staatsinrichting-pacificatie-1917", titel: "Staatsinrichting – De pacificatie van 1917", beschrijving: "Het compromis over de schoolstrijd en het kiesrecht", kleur: "#1a5276" },
      { id: "4havo-7-5-opkomst-hitler", titel: "7.5 – De opkomst van Hitler", beschrijving: "Waarom het nationaalsocialisme populair werd in Duitsland", kleur: "#922b21" },
      { id: "lorem-4havo-1", titel: "Lorem Ipsum I",   beschrijving: "Dolor sit amet, consectetur adipiscing elit", kleur: "#1a6eb5" },
      { id: "lorem-4havo-2", titel: "Lorem Ipsum II",  beschrijving: "Sed do eiusmod tempor incididunt ut labore",   kleur: "#2980b9" },
      { id: "lorem-4havo-3", titel: "Lorem Ipsum III", beschrijving: "Ut enim ad minim veniam, quis nostrud",        kleur: "#16a085" },
      { id: "lorem-4havo-4", titel: "Lorem Ipsum IV",  beschrijving: "Duis aute irure dolor in reprehenderit",       kleur: "#27ae60" },
    ],
  },
  {
    id: "5havo",
    naam: "5 havo",
    onderwerpen: [
      { id: "lorem-5havo-1", titel: "Lorem Ipsum I",   beschrijving: "Dolor sit amet, consectetur adipiscing elit", kleur: "#158a4e" },
      { id: "lorem-5havo-2", titel: "Lorem Ipsum II",  beschrijving: "Sed do eiusmod tempor incididunt ut labore",   kleur: "#1abc9c" },
      { id: "lorem-5havo-3", titel: "Lorem Ipsum III", beschrijving: "Ut enim ad minim veniam, quis nostrud",        kleur: "#2ecc71" },
    ],
  },
  {
    id: "3vwo",
    naam: "3 vwo",
    onderwerpen: [
      { id: "lorem-3vwo-1", titel: "Lorem Ipsum I",   beschrijving: "Dolor sit amet, consectetur adipiscing elit", kleur: "#7b1fa2" },
      { id: "lorem-3vwo-2", titel: "Lorem Ipsum II",  beschrijving: "Sed do eiusmod tempor incididunt ut labore",   kleur: "#8e44ad" },
      { id: "lorem-3vwo-3", titel: "Lorem Ipsum III", beschrijving: "Ut enim ad minim veniam, quis nostrud",        kleur: "#6c3483" },
      { id: "lorem-3vwo-4", titel: "Lorem Ipsum IV",  beschrijving: "Duis aute irure dolor in reprehenderit",       kleur: "#2471a3" },
      { id: "lorem-3vwo-5", titel: "Lorem Ipsum V",   beschrijving: "Excepteur sint occaecat cupidatat non proident", kleur: "#1a5276" },
    ],
  },
  {
    id: "5vwo",
    naam: "5 vwo",
    onderwerpen: [
      { id: "lorem-5vwo-1", titel: "Lorem Ipsum I",   beschrijving: "Dolor sit amet, consectetur adipiscing elit", kleur: "#c0392b" },
      { id: "lorem-5vwo-2", titel: "Lorem Ipsum II",  beschrijving: "Sed do eiusmod tempor incididunt ut labore",   kleur: "#922b21" },
      { id: "lorem-5vwo-3", titel: "Lorem Ipsum III", beschrijving: "Ut enim ad minim veniam, quis nostrud",        kleur: "#784212" },
      { id: "lorem-5vwo-4", titel: "Lorem Ipsum IV",  beschrijving: "Duis aute irure dolor in reprehenderit",       kleur: "#b7950b" },
    ],
  },
];
