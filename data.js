/* ============================================================
   PérinatalitéQuest — Soins à la mère et au nouveau-né
   Moteur cloné de PédiatrieQuest. 2 compétences officielles du
   programme Santé, assistance et soins infirmiers (DEP 5325) :

     • Compétence 27 — Approche privilégiée pour la mère et le
       nouveau-né (code de cours 252-532)
     • Compétence 28 — Soins aux mères et aux nouveaux-nés
       (code de cours 252-542)

   ⚠️⚠️ CONTENU D'AMORÇAGE — À VALIDER PAR UNE PROFESSIONNELLE ⚠️⚠️
   Le découpage en 2 compétences et les codes de cours ont été
   confirmés par Jessica Ouellet (infirmière/enseignante), mais les
   QUESTIONS ci-dessous sont un PREMIER JET rédigé à partir de
   connaissances générales et reconnues en soins infirmiers
   périnataux (INSPQ, Société des obstétriciens et gynécologues du
   Canada, OIIAQ pour le champ d'exercice, Initiative des amis des
   bébés, pratiques usuelles au Québec). Elles doivent être revues,
   corrigées et complétées AVANT tout usage en salle de classe :
     • concordance avec le manuel de référence CÉMEQ utilisé ;
     • valeurs numériques et protocoles du centre (seuils de
       glycémie néonatale, de température, de perte de poids…) ;
     • vocabulaire exact enseigné par Jessica.
   Même convention que « EXEMPLES à valider/remplacer par les
   enseignants » dans sasi-web/data.js et pediatriequest-web/data.js.

   Format des choix: chaque question a un tableau "choices" où chaque
   item a { fr, en, correct }. L'ordre est mélangé au moment de
   l'affichage (voir app.js) — la position de la bonne réponse change
   donc à chaque tentative.
   ============================================================ */

const PROGRAM = {
  fr: { title: "PérinatalitéQuest — Soins à la mère et au nouveau-né", subtitle: "Compétences 27 et 28 — contenu d'amorçage à valider" },
  en: { title: "PérinatalitéQuest — Mother and Newborn Care", subtitle: "Competencies 27 and 28 — starter content to be validated" }
};

function ch(fr, en, correct) { return { fr, en, correct: !!correct }; }

/* Question de type vrai/faux: affirmation à juger. */
function tf(fr, en, isTrue) { return { type: "tf", fr, en, isTrue: !!isTrue }; }

/* Question de type "association de termes": l'élève touche un terme puis
   sa définition correspondante. pairs: tableau de
   { term_fr, term_en, def_fr, def_en }. Toutes les paires doivent être
   associées correctement pour que la question soit considérée réussie. */
function pair(term_fr, term_en, def_fr, def_en) { return { term_fr, term_en, def_fr, def_en }; }
function match(fr, en, pairs) { return { type: "match", fr, en, pairs }; }

/* Question de type "situation complexe" (mise en situation): un court
   scénario réaliste suivi d'un choix multiple basé sur le jugement
   professionnel. Réutilise le même format "choices" qu'un QCM standard. */
function scenario(fr, en, choices) { return { type: "scenario", fr, en, choices }; }

/* Paliers de difficulté d'une quête. Chaque compétence est divisée en
   3 paliers progressifs (tiers[]), débloqués l'un après l'autre:
   Débutant -> Intermédiaire -> Avancé. Réussir le palier 1 d'une compétence
   déverrouille la compétence suivante sur la carte; réussir le palier 3
   (Avancé) accorde le badge de maîtrise de la compétence. */
const TIER_META = [
  { level: 1, name_fr: "Débutant", name_en: "Beginner", icon: "🌱" },
  { level: 2, name_fr: "Intermédiaire", name_en: "Intermediate", icon: "⚙️" },
  { level: 3, name_fr: "Avancé", name_en: "Advanced", icon: "🏆" }
];

/* Chaque compétence = une "quête". order = ordre de déblocage.
   Le programme n'en compte que deux : on compense par la profondeur
   (12 questions par palier, soit 36 questions par compétence — le
   double de PédiatrieQuest).
   ⚠️ Contenu d'amorçage — voir l'avertissement en tête de fichier. */
const COMPETENCIES = [

/* ================================================================
   COMPÉTENCE 27 — Approche privilégiée pour la mère et le nouveau-né
   Code de cours 252-532
   ================================================================ */
{
  id: "approche_perinatale", order: 1, code: "252-532",
  title_fr: "Approche privilégiée pour la mère et le nouveau-né",
  title_en: "Preferred Approach for Mother and Newborn",
  icon: "🤰",
  tiers: [
    /* ---------- Palier 1 — Débutant : vocabulaire et repères ---------- */
    {
      level: 1,
      questions: [
        {
          fr: "Quelle période la périnatalité couvre-t-elle ?",
          en: "What period does the perinatal period cover?",
          choices: [
            ch("Uniquement le jour de l'accouchement", "Only the day of delivery"),
            ch("De la grossesse jusqu'à la première année de vie de l'enfant", "From pregnancy until the child's first year of life", true),
            ch("Les 28 premiers jours de vie seulement", "Only the first 28 days of life"),
            ch("De la naissance jusqu'à l'âge scolaire", "From birth until school age")
          ],
          explFr: "La périnatalité englobe la grossesse, l'accouchement et la période qui suit la naissance, généralement jusqu'au premier anniversaire de l'enfant. C'est une période de grande vulnérabilité et d'adaptation pour toute la famille.",
          explEn: "The perinatal period covers pregnancy, birth and the period that follows, generally until the child's first birthday. It is a time of great vulnerability and adaptation for the whole family."
        },
        {
          fr: "Une grossesse est considérée « à terme » lorsqu'elle se situe entre :",
          en: "A pregnancy is considered full term when it falls between:",
          choices: [
            ch("34 et 36 semaines", "34 and 36 weeks"),
            ch("37 et 42 semaines", "37 and 42 weeks", true),
            ch("40 et 44 semaines", "40 and 44 weeks"),
            ch("30 et 37 semaines", "30 and 37 weeks")
          ],
          explFr: "On parle de grossesse à terme entre 37 et 42 semaines complètes. Avant 37 semaines, la naissance est prématurée ; après 42 semaines, la grossesse est prolongée (post-terme).",
          explEn: "A pregnancy is at term between 37 and 42 completed weeks. Before 37 weeks the birth is preterm; after 42 weeks the pregnancy is post-term."
        },
        {
          type: "tf",
          fr: "Le post-partum (ou puerpéralité) désigne habituellement les six semaines qui suivent l'accouchement.",
          en: "The postpartum period (puerperium) usually refers to the six weeks following delivery.",
          isTrue: true,
          explFr: "Vrai. Le post-partum classique dure environ six semaines : c'est le temps que prend l'organisme maternel pour revenir à son état d'avant la grossesse. L'adaptation psychologique, elle, se poursuit bien au-delà.",
          explEn: "True. The classic postpartum period lasts about six weeks: the time the mother's body takes to return to its pre-pregnancy state. Psychological adaptation, however, continues well beyond."
        },
        {
          fr: "Qu'est-ce que le colostrum ?",
          en: "What is colostrum?",
          choices: [
            ch("Le premier lait, épais et jaunâtre, riche en anticorps", "The first milk, thick and yellowish, rich in antibodies", true),
            ch("Un supplément de fer donné à la mère après l'accouchement", "An iron supplement given to the mother after delivery"),
            ch("Le liquide amniotique recueilli à la naissance", "Amniotic fluid collected at birth"),
            ch("Le premier vaccin administré au nouveau-né", "The first vaccine given to the newborn")
          ],
          explFr: "Le colostrum est le lait produit durant les premiers jours. Sécrété en petite quantité mais très concentré, il est riche en immunoglobulines et joue un rôle protecteur majeur : c'est la première « vaccination » naturelle du bébé.",
          explEn: "Colostrum is the milk produced in the first days. Secreted in small amounts but highly concentrated, it is rich in immunoglobulins and plays a major protective role: the baby's first natural immunization."
        },
        {
          type: "tf",
          fr: "Une femme notée « G3 P2 » a vécu trois grossesses et donné naissance à deux reprises.",
          en: "A woman recorded as G3 P2 has had three pregnancies and given birth twice.",
          isTrue: true,
          explFr: "Vrai. G (gravidité) = nombre total de grossesses, incluant celle en cours ; P (parité) = nombre d'accouchements après le seuil de viabilité. La notation permet de situer rapidement l'expérience obstétricale.",
          explEn: "True. G (gravidity) = total number of pregnancies including the current one; P (parity) = number of births past the threshold of viability. The notation quickly situates a woman's obstetrical history."
        },
        {
          fr: "Le terme « nouveau-né » s'applique à un bébé âgé de :",
          en: "The term newborn (neonate) applies to a baby aged:",
          choices: [
            ch("0 à 7 jours", "0 to 7 days"),
            ch("0 à 28 jours", "0 to 28 days", true),
            ch("0 à 3 mois", "0 to 3 months"),
            ch("0 à 12 mois", "0 to 12 months")
          ],
          explFr: "La période néonatale couvre les 28 premiers jours de vie. Au-delà, on parle de nourrisson, jusqu'à 12 mois.",
          explEn: "The neonatal period covers the first 28 days of life. Beyond that, the baby is called an infant, up to 12 months."
        },
        {
          ...match("Associe chaque terme obstétrical à sa définition.", "Match each obstetrical term with its definition.", [
            pair("Nullipare", "Nulliparous", "Femme qui n'a jamais accouché", "A woman who has never given birth"),
            pair("Primipare", "Primiparous", "Femme qui accouche pour la première fois", "A woman giving birth for the first time"),
            pair("Multipare", "Multiparous", "Femme qui a déjà accouché plus d'une fois", "A woman who has already given birth more than once"),
            pair("Gravidité", "Gravidity", "Nombre total de grossesses", "Total number of pregnancies"),
            pair("Parité", "Parity", "Nombre d'accouchements", "Number of births")
          ]),
          explFr: "Ce vocabulaire structure tout le dossier obstétrical : il indique d'un coup d'œil ce à quoi s'attendre (durée du travail, besoin d'enseignement, risques).",
          explEn: "This vocabulary structures the entire obstetrical chart: at a glance it tells you what to expect (length of labour, teaching needs, risks)."
        },
        {
          fr: "Au Québec, quel énoncé décrit le mieux le rôle de l'infirmière auxiliaire en périnatalité ?",
          en: "In Quebec, which statement best describes the licensed practical nurse's role in perinatal care?",
          choices: [
            ch("Elle contribue à l'évaluation, prodigue les soins et surveille l'état de la mère et du nouveau-né", "She contributes to assessment, provides care and monitors the condition of mother and newborn", true),
            ch("Elle pose elle-même le diagnostic obstétrical", "She establishes the obstetrical diagnosis herself"),
            ch("Elle se limite à l'entretien de la chambre et au service des repas", "She is limited to room upkeep and meal service"),
            ch("Elle décide seule du congé de la mère et du bébé", "She decides alone when mother and baby are discharged")
          ],
          explFr: "L'infirmière auxiliaire contribue à l'évaluation (observations, signes vitaux, surveillance), applique les soins et l'enseignement prévus au plan de soins, et signale tout changement. Le diagnostic et le congé relèvent d'autres professionnels.",
          explEn: "The licensed practical nurse contributes to assessment (observations, vital signs, monitoring), delivers the care and teaching planned, and reports any change. Diagnosis and discharge belong to other professionals."
        },
        {
          type: "tf",
          fr: "L'infirmière auxiliaire peut procéder seule à l'évaluation initiale complète de la condition physique et mentale d'une nouvelle accouchée.",
          en: "A licensed practical nurse may independently perform the complete initial assessment of a new mother's physical and mental condition.",
          isTrue: false,
          explFr: "Faux. L'évaluation initiale complète est une activité réservée à l'infirmière. L'infirmière auxiliaire y CONTRIBUE par ses observations et ses mesures — une distinction essentielle de son champ d'exercice.",
          explEn: "False. The complete initial assessment is reserved to the registered nurse. The licensed practical nurse CONTRIBUTES to it through observations and measurements — an essential distinction in her scope of practice."
        },
        {
          fr: "Qu'est-ce que l'approche centrée sur la famille en périnatalité ?",
          en: "What is family-centred care in perinatal nursing?",
          choices: [
            ch("Reconnaître les parents comme partenaires de soins et les intégrer aux décisions", "Recognizing parents as care partners and including them in decisions", true),
            ch("Confier tous les soins du bébé à l'équipe pour laisser la mère se reposer", "Handing all baby care to the team so the mother can rest"),
            ch("Limiter les visites pour éviter de déranger la mère", "Limiting visits so the mother is not disturbed"),
            ch("Demander à la famille de sortir pendant tous les soins", "Asking the family to step out during all care")
          ],
          explFr: "L'approche centrée sur la famille considère les parents comme les premiers soignants de leur enfant : on les informe, on les fait participer et on respecte leurs choix, plutôt que de faire « à leur place ».",
          explEn: "Family-centred care treats parents as their child's primary caregivers: they are informed, involved and their choices respected, rather than being replaced by the team."
        },
        {
          type: "tf",
          fr: "Le contact peau à peau dès la naissance favorise à la fois la thermorégulation du nouveau-né et l'attachement.",
          en: "Skin-to-skin contact right after birth supports both the newborn's thermoregulation and bonding.",
          isTrue: true,
          explFr: "Vrai. Le peau à peau stabilise la température, la glycémie et la respiration du bébé, facilite la première mise au sein et soutient le lien d'attachement. On le favorise sans interruption inutile.",
          explEn: "True. Skin-to-skin stabilizes the baby's temperature, blood sugar and breathing, supports the first feeding and strengthens bonding. It should not be interrupted needlessly."
        },
        {
          ...scenario(
            "Vous entrez dans la chambre pour prendre les signes vitaux d'une nouvelle accouchée qui somnole. Quelle est la conduite appropriée ?",
            "You enter the room to take the vital signs of a new mother who is dozing. What is the appropriate course of action?",
            [
              ch("La réveiller doucement, vous nommer, expliquer le soin et obtenir son accord", "Wake her gently, introduce yourself, explain the procedure and obtain her agreement", true),
              ch("Procéder sans la réveiller pour ne pas la déranger", "Proceed without waking her so as not to disturb her"),
              ch("Demander au conjoint s'il est d'accord et procéder", "Ask the partner if he agrees and proceed"),
              ch("Reporter le soin sans en aviser personne", "Postpone the care without telling anyone")
            ]),
          explFr: "Le consentement libre et éclairé est la base de tout soin, même routinier : on se nomme, on explique ce qu'on fait et pourquoi, et on obtient l'accord de la personne. La femme demeure la seule décideuse de ce qui touche son corps.",
          explEn: "Free and informed consent is the basis of all care, even routine care: introduce yourself, explain what will be done and why, and obtain the person's agreement. The woman remains the sole decision-maker about her own body."
        }
      ]
    },

    /* ---------- Palier 2 — Intermédiaire : grossesse normale et suivi ---------- */
    {
      level: 2,
      questions: [
        {
          fr: "Le deuxième trimestre de la grossesse s'étend approximativement :",
          en: "The second trimester of pregnancy extends approximately:",
          choices: [
            ch("De la 1re à la 13e semaine", "From week 1 to week 13"),
            ch("De la 14e à la 27e semaine", "From week 14 to week 27", true),
            ch("De la 28e à la 40e semaine", "From week 28 to week 40"),
            ch("De la 20e à la 30e semaine", "From week 20 to week 30")
          ],
          explFr: "Premier trimestre : jusqu'à environ 13 semaines ; deuxième : 14 à 27 semaines ; troisième : 28 semaines jusqu'à l'accouchement. Le découpage oriente le suivi et l'enseignement.",
          explEn: "First trimester: up to about 13 weeks; second: 14 to 27 weeks; third: 28 weeks to delivery. This division guides follow-up and teaching."
        },
        {
          fr: "Une primipare perçoit habituellement les premiers mouvements fœtaux vers :",
          en: "A first-time mother usually feels the first fetal movements around:",
          choices: [
            ch("10 à 12 semaines", "10 to 12 weeks"),
            ch("18 à 20 semaines", "18 to 20 weeks", true),
            ch("26 à 28 semaines", "26 to 28 weeks"),
            ch("32 à 34 semaines", "32 to 34 weeks")
          ],
          explFr: "Les premiers mouvements perçus surviennent vers 18 à 20 semaines chez une primipare, un peu plus tôt (16 à 18 semaines) chez une multipare, qui les reconnaît mieux.",
          explEn: "First perceived movements occur around 18 to 20 weeks in a first-time mother, and somewhat earlier (16 to 18 weeks) in a multipara, who recognizes them more readily."
        },
        {
          type: "tf",
          fr: "Les nausées du premier trimestre sont fréquentes et s'estompent généralement au début du deuxième trimestre.",
          en: "First-trimester nausea is common and usually subsides at the start of the second trimester.",
          isTrue: true,
          explFr: "Vrai. Les nausées touchent la majorité des femmes enceintes et diminuent habituellement vers 12 à 16 semaines. Des vomissements incoercibles avec perte de poids (hyperémèse) sortent du cadre normal et doivent être signalés.",
          explEn: "True. Nausea affects most pregnant women and usually eases around 12 to 16 weeks. Intractable vomiting with weight loss (hyperemesis) is not normal and must be reported."
        },
        {
          fr: "Quel malaise est particulièrement fréquent au troisième trimestre ?",
          en: "Which discomfort is particularly common in the third trimester?",
          choices: [
            ch("Les brûlures d'estomac et le reflux", "Heartburn and reflux", true),
            ch("La fièvre en soirée", "Evening fever"),
            ch("La perte de vision d'un œil", "Loss of vision in one eye"),
            ch("Les convulsions", "Seizures")
          ],
          explFr: "L'utérus qui prend du volume comprime l'estomac et le relâchement du sphincter favorise le reflux. C'est inconfortable mais normal ; fièvre, trouble visuel ou convulsion, eux, sont des signes d'alerte.",
          explEn: "The growing uterus compresses the stomach and sphincter relaxation promotes reflux. Uncomfortable but normal; fever, visual disturbance or seizure, by contrast, are warning signs."
        },
        {
          ...match("Associe chaque malaise courant de la grossesse au conseil approprié.", "Match each common pregnancy discomfort with the appropriate advice.", [
            pair("Nausées matinales", "Morning sickness", "Prendre de petites collations fréquentes, éviter l'estomac vide", "Eat small frequent snacks, avoid an empty stomach"),
            pair("Brûlures d'estomac", "Heartburn", "Éviter de s'allonger tout de suite après le repas", "Avoid lying down right after a meal"),
            pair("Constipation", "Constipation", "Augmenter les fibres, l'hydratation et la marche", "Increase fibre, fluids and walking"),
            pair("Œdème des jambes", "Leg swelling", "Surélever les jambes et éviter la station debout prolongée", "Elevate the legs and avoid prolonged standing"),
            pair("Lombalgie", "Low back pain", "Corriger la posture et porter des chaussures de soutien", "Correct posture and wear supportive footwear")
          ]),
          explFr: "Ces malaises sont physiologiques : l'enseignement de mesures simples évite bien des consultations inutiles et rassure la femme sur ce qui est normal.",
          explEn: "These discomforts are physiological: teaching simple measures avoids many unnecessary visits and reassures the woman about what is normal."
        },
        {
          fr: "Quel supplément est recommandé avant la conception et en début de grossesse pour réduire le risque d'anomalie du tube neural ?",
          en: "Which supplement is recommended before conception and in early pregnancy to reduce the risk of neural tube defects?",
          choices: [
            ch("L'acide folique", "Folic acid", true),
            ch("La vitamine K", "Vitamin K"),
            ch("Le calcium", "Calcium"),
            ch("La vitamine C", "Vitamin C")
          ],
          explFr: "L'acide folique (souvent dans une multivitamine prénatale) doit être commencé idéalement avant la conception, car le tube neural se ferme dans les toutes premières semaines, souvent avant que la grossesse ne soit connue.",
          explEn: "Folic acid (often within a prenatal multivitamin) should ideally start before conception, since the neural tube closes in the very first weeks, often before the pregnancy is known."
        },
        {
          type: "tf",
          fr: "On recommande à la femme enceinte avancée de se coucher en décubitus latéral gauche plutôt que sur le dos.",
          en: "A woman late in pregnancy is advised to lie on her left side rather than on her back.",
          isTrue: true,
          explFr: "Vrai. Sur le dos, l'utérus comprime la veine cave inférieure (syndrome de compression aorto-cave) : la tension artérielle chute et la perfusion du placenta diminue. Le décubitus latéral gauche lève la compression.",
          explEn: "True. Lying supine, the uterus compresses the inferior vena cava (supine hypotensive syndrome): blood pressure drops and placental perfusion decreases. Left lateral position relieves the compression."
        },
        {
          ...scenario(
            "Une femme enceinte de 22 semaines vous confie qu'elle fume encore une dizaine de cigarettes par jour et ajoute aussitôt : « Je sais, je suis une mauvaise mère. » Quelle intervention est la plus appropriée ?",
            "A woman at 22 weeks of pregnancy tells you she still smokes about ten cigarettes a day and immediately adds: I know, I'm a bad mother. Which intervention is most appropriate?",
            [
              ch("Accueillir sa confidence sans jugement, explorer sa motivation et l'informer des ressources d'aide à l'arrêt", "Welcome her disclosure without judgment, explore her motivation and inform her of smoking cessation resources", true),
              ch("Lui énumérer les malformations que le tabac peut causer pour qu'elle réagisse", "List the malformations smoking can cause so that she reacts"),
              ch("Lui dire que ce n'est pas si grave à ce stade de la grossesse", "Tell her it is not that serious at this stage of pregnancy"),
              ch("Noter l'information au dossier sans en reparler", "Chart the information and never raise it again")
            ]),
          explFr: "La culpabilisation nuit à l'alliance et pousse la femme à taire ses habitudes. L'approche motivationnelle — accueillir, explorer, informer, offrir — donne de bien meilleurs résultats qu'un discours moralisateur.",
          explEn: "Shaming damages the therapeutic alliance and leads women to hide their habits. A motivational approach — welcome, explore, inform, offer — works far better than moralizing."
        },
        {
          fr: "Parmi ces manifestations, laquelle doit amener la femme enceinte à consulter sans délai ?",
          en: "Which of these findings should prompt a pregnant woman to seek care without delay?",
          choices: [
            ch("Une céphalée intense accompagnée de troubles visuels", "A severe headache with visual disturbances", true),
            ch("Une fatigue en fin de journée", "Tiredness at the end of the day"),
            ch("Des mouvements fœtaux plus marqués après un repas", "More noticeable fetal movements after a meal"),
            ch("Une envie d'uriner plus fréquente en fin de grossesse", "More frequent urination late in pregnancy")
          ],
          explFr: "Céphalée intense, troubles visuels, douleur épigastrique, œdème soudain du visage, saignement vaginal ou diminution des mouvements fœtaux : ce sont les signaux d'alarme à enseigner à toutes les femmes enceintes.",
          explEn: "Severe headache, visual disturbances, epigastric pain, sudden facial swelling, vaginal bleeding or decreased fetal movement: these are the warning signs to teach every pregnant woman."
        },
        {
          type: "tf",
          fr: "Le plan de naissance est un document contraignant que l'équipe doit suivre à la lettre, peu importe l'évolution clinique.",
          en: "A birth plan is a binding document the team must follow to the letter, regardless of clinical developments.",
          isTrue: false,
          explFr: "Faux. Le plan de naissance est un outil de communication : il exprime les préférences de la femme. L'équipe s'y réfère et l'honore autant que possible, mais la sécurité de la mère et du bébé prime et les préférences peuvent devoir être réajustées, en expliquant pourquoi.",
          explEn: "False. A birth plan is a communication tool expressing the woman's preferences. The team refers to it and honours it as much as possible, but the safety of mother and baby comes first and preferences may need to be adjusted, with an explanation."
        },
        {
          fr: "Une femme enceinte ne parle ni français ni anglais. Quelle est la meilleure façon d'assurer la communication ?",
          en: "A pregnant woman speaks neither French nor English. What is the best way to ensure communication?",
          choices: [
            ch("Recourir à un service d'interprète reconnu", "Use a recognized interpreter service", true),
            ch("Demander à son enfant de 10 ans de traduire", "Ask her 10-year-old child to translate"),
            ch("Parler plus fort et plus lentement", "Speak louder and more slowly"),
            ch("Remettre les documents écrits et passer à la patiente suivante", "Hand over the written documents and move on to the next patient")
          ],
          explFr: "Un interprète reconnu garantit l'exactitude et la confidentialité. Faire traduire par un enfant l'expose à des contenus inappropriés et fausse le message ; c'est à éviter sauf urgence vitale.",
          explEn: "A recognized interpreter ensures accuracy and confidentiality. Having a child translate exposes them to inappropriate content and distorts the message; avoid it except in a life-threatening emergency."
        },
        {
          ...scenario(
            "Une adolescente de 16 ans se présente seule à sa première visite prénatale. Elle regarde le sol, répond par monosyllabes et dit qu'elle n'a encore parlé à personne de sa grossesse. Quelle attitude adopter d'abord ?",
            "A 16-year-old comes alone to her first prenatal visit. She looks at the floor, answers in monosyllables and says she has not yet told anyone about her pregnancy. What should you do first?",
            [
              ch("L'accueillir sans jugement, lui expliquer la confidentialité et explorer son réseau de soutien", "Welcome her without judgment, explain confidentiality and explore her support network", true),
              ch("Téléphoner à ses parents pour les informer de la grossesse", "Phone her parents to inform them of the pregnancy"),
              ch("Lui remettre la documentation prénatale et fixer le prochain rendez-vous", "Hand her the prenatal documentation and book the next appointment"),
              ch("Lui demander pourquoi elle n'a pas utilisé de contraception", "Ask her why she did not use contraception")
            ]),
          explFr: "Créer le lien de confiance vient avant tout le reste. L'adolescente a droit à la confidentialité et il faut d'abord vérifier de quel soutien elle dispose ; l'enseignement suivra une fois la relation établie.",
          explEn: "Building trust comes before everything else. The teen has a right to confidentiality, and the first step is to find out what support she has; teaching follows once the relationship is established."
        }
      ]
    },

    /* ---------- Palier 3 — Avancé : jugement, éthique, attachement ---------- */
    {
      level: 3,
      questions: [
        {
          ...scenario(
            "Une femme vient d'accoucher d'un enfant mort-né à 38 semaines. Elle est silencieuse et ne demande rien. Quelle intervention est la plus appropriée ?",
            "A woman has just delivered a stillborn baby at 38 weeks. She is silent and asks for nothing. Which intervention is most appropriate?",
            [
              ch("Lui offrir doucement de voir et de tenir son bébé, sans l'imposer, et proposer des souvenirs (photo, empreintes, bracelet)", "Gently offer her the chance to see and hold her baby, without imposing, and offer mementos (photo, footprints, bracelet)", true),
              ch("Emmener le bébé rapidement pour lui éviter de la peine", "Take the baby away quickly to spare her distress"),
              ch("Lui dire qu'elle est jeune et qu'elle pourra avoir d'autres enfants", "Tell her she is young and will be able to have other children"),
              ch("Éviter d'aborder le sujet tant qu'elle n'en parle pas elle-même", "Avoid the subject until she brings it up herself")
            ]),
          explFr: "En deuil périnatal, on offre le choix plutôt que de décider à la place des parents. Voir, tenir et garder des souvenirs aide souvent le processus de deuil. Les phrases qui minimisent la perte (« vous en aurez d'autres ») blessent.",
          explEn: "In perinatal bereavement, offer choices rather than deciding for the parents. Seeing, holding and keeping mementos often helps grieving. Phrases that minimize the loss (you'll have others) are hurtful."
        },
        {
          ...scenario(
            "Une femme enceinte se présente avec des ecchymoses à différents stades. Son conjoint répond à toutes les questions à sa place et refuse de quitter la pièce. Quelle est la conduite la plus appropriée ?",
            "A pregnant woman arrives with bruises at different stages of healing. Her partner answers every question for her and refuses to leave the room. What is the most appropriate course of action?",
            [
              ch("Trouver un prétexte clinique pour la voir seule, poser la question avec respect, documenter objectivement et offrir les ressources", "Find a clinical reason to see her alone, ask the question respectfully, document objectively and offer resources", true),
              ch("Questionner le couple ensemble sur la violence conjugale", "Question the couple together about domestic violence"),
              ch("Ne rien dire : ce n'est pas du ressort des soins périnataux", "Say nothing: this is not within the scope of perinatal care"),
              ch("Appeler la police immédiatement sans en parler à la femme", "Call the police immediately without telling the woman")
            ]),
          explFr: "Le dépistage de la violence conjugale se fait TOUJOURS en privé : questionner devant le conjoint peut augmenter le danger. On documente les faits observés, on offre les ressources et on respecte le rythme de la femme, tout en suivant le protocole du centre.",
          explEn: "Screening for intimate partner violence is ALWAYS done in private: asking in front of the partner can increase danger. Document observed facts, offer resources and respect the woman's pace, while following the facility's protocol."
        },
        {
          ...match("Associe chaque intervention des premières heures de vie à son principal effet.", "Match each intervention in the first hours of life with its main effect.", [
            pair("Peau à peau immédiat", "Immediate skin-to-skin", "Stabilise la température, la glycémie et la respiration du bébé", "Stabilizes the baby's temperature, blood sugar and breathing"),
            pair("Cohabitation mère-enfant 24 h sur 24", "24-hour rooming-in", "Permet à la mère de reconnaître tôt les signes de faim", "Lets the mother recognize feeding cues early"),
            pair("Allaitement à la demande", "Feeding on demand", "Soutient la production de lait par la stimulation fréquente", "Supports milk production through frequent stimulation"),
            pair("Nommer le bébé et le regarder dans les yeux", "Naming the baby and making eye contact", "Renforce le processus d'attachement parent-enfant", "Strengthens the parent-child bonding process")
          ]),
          explFr: "Ces quatre pratiques sont au cœur de l'Initiative des amis des bébés : simples, gratuites, et elles agissent à la fois sur la physiologie du nouveau-né et sur le lien familial.",
          explEn: "These four practices are at the heart of the Baby-Friendly Initiative: simple, free, and acting both on the newborn's physiology and on family bonding."
        },
        {
          type: "tf",
          fr: "Il est approprié de demander à une mère endeuillée si elle souhaite voir et tenir son bébé décédé.",
          en: "It is appropriate to ask a bereaved mother whether she wishes to see and hold her deceased baby.",
          isTrue: true,
          explFr: "Vrai. Offrir le choix, sans insister et sans juger la réponse, fait partie des soins de deuil reconnus. Certains parents voudront, d'autres non : les deux décisions sont respectables et peuvent être reconsidérées plus tard.",
          explEn: "True. Offering the choice, without insisting and without judging the answer, is part of recognized bereavement care. Some parents will want to, others will not: both decisions are respectable and may be revisited later."
        },
        {
          ...scenario(
            "Des parents refusent l'injection de vitamine K prévue pour leur nouveau-né. Quelle est la conduite la plus appropriée pour l'infirmière auxiliaire ?",
            "Parents refuse the planned vitamin K injection for their newborn. What is the most appropriate course of action for the licensed practical nurse?",
            [
              ch("Expliquer calmement le but et les risques du refus, aviser l'infirmière ou le médecin, et consigner le refus au dossier", "Calmly explain the purpose and the risks of refusal, inform the nurse or physician, and document the refusal in the chart", true),
              ch("Administrer quand même l'injection pendant que les parents sont sortis", "Give the injection anyway while the parents are out of the room"),
              ch("Accepter le refus sans rien dire ni documenter", "Accept the refusal without saying anything or documenting it"),
              ch("Menacer les parents d'un signalement à la protection de la jeunesse", "Threaten the parents with a report to youth protection")
            ]),
          explFr: "Les parents peuvent refuser un soin pour leur enfant après avoir été informés. Le rôle de l'infirmière auxiliaire : informer clairement, ne jamais contourner le refus, aviser l'équipe et documenter — l'information donnée comme le refus exprimé.",
          explEn: "Parents may refuse a treatment for their child once informed. The licensed practical nurse's role: inform clearly, never bypass the refusal, notify the team and document both the information given and the refusal expressed."
        },
        {
          fr: "Quelle différence distingue le mieux le « blues du post-partum » de la dépression post-partum ?",
          en: "Which difference best distinguishes postpartum blues from postpartum depression?",
          choices: [
            ch("Le blues est transitoire (quelques jours) et n'empêche pas la mère de fonctionner ; la dépression persiste au-delà de deux semaines et nuit au fonctionnement", "Blues is transient (a few days) and does not prevent the mother from functioning; depression persists beyond two weeks and impairs functioning", true),
            ch("Le blues touche seulement les primipares", "Blues only affects first-time mothers"),
            ch("La dépression post-partum apparaît toujours dès le premier jour", "Postpartum depression always starts on the first day"),
            ch("Le blues exige toujours une médication", "Blues always requires medication")
          ],
          explFr: "Le blues touche la majorité des accouchées vers le 3e au 5e jour et se résorbe en quelques jours. Une tristesse qui dure plus de deux semaines, avec perte d'intérêt, troubles du sommeil non liés au bébé ou idées noires, oriente vers une dépression post-partum à faire évaluer.",
          explEn: "Blues affects most new mothers around day 3 to 5 and resolves within days. Sadness lasting more than two weeks, with loss of interest, sleep problems unrelated to the baby or dark thoughts, points to postpartum depression requiring assessment."
        },
        {
          ...scenario(
            "Le conjoint d'une nouvelle accouchée reste à l'écart et vous dit : « De toute façon, je ne sers à rien, c'est elle qui allaite. » Quelle intervention favorise le mieux l'attachement ?",
            "The partner of a new mother stays at a distance and tells you: Anyway I'm useless, she's the one breastfeeding. Which intervention best supports bonding?",
            [
              ch("L'inviter à faire du peau à peau, à changer la couche et à participer aux soins du bébé", "Invite him to do skin-to-skin, change the diaper and take part in the baby's care", true),
              ch("Lui suggérer de se reposer à la maison pendant l'hospitalisation", "Suggest he rest at home during the hospital stay"),
              ch("Lui confirmer que les premières semaines appartiennent surtout à la mère", "Confirm that the first weeks belong mainly to the mother"),
              ch("Lui demander de préparer un biberon pour qu'il se sente utile", "Ask him to prepare a bottle so he feels useful")
            ]),
          explFr: "Le second parent crée son propre lien par le contact, le portage, le bain, le change et le réconfort. On le nomme partenaire de soins dès la naissance — sans introduire de biberon, qui pourrait nuire à l'allaitement en cours d'établissement.",
          explEn: "The second parent builds their own bond through contact, holding, bathing, changing and comforting. Name them a care partner from birth — without introducing a bottle, which could undermine breastfeeding while it is being established."
        },
        {
          type: "tf",
          fr: "Le secret professionnel s'applique aussi aux renseignements confiés par une adolescente enceinte de 15 ans.",
          en: "Professional confidentiality also applies to information disclosed by a pregnant 15-year-old.",
          isTrue: true,
          explFr: "Vrai. Au Québec, une personne de 14 ans et plus peut consentir seule aux soins et bénéficie du secret professionnel. Ce secret cède seulement dans les cas prévus par la loi, comme un danger grave et imminent ou un signalement obligatoire.",
          explEn: "True. In Quebec, a person aged 14 and over can consent to care alone and is covered by professional confidentiality. That confidentiality yields only in cases set out by law, such as serious imminent danger or a mandatory report."
        },
        {
          fr: "Une famille souhaite appliquer une pratique culturelle après la naissance (bain retardé, rituel, aliments particuliers). Quelle attitude reflète une pratique culturellement sécuritaire ?",
          en: "A family wishes to follow a cultural practice after birth (delayed bath, ritual, specific foods). Which attitude reflects culturally safe practice?",
          choices: [
            ch("S'informer du sens de la pratique et l'intégrer au plan de soins si elle est sécuritaire", "Learn the meaning of the practice and integrate it into the care plan if it is safe", true),
            ch("Refuser toute pratique qui ne figure pas dans le protocole du centre", "Refuse any practice not listed in the facility's protocol"),
            ch("Accepter toutes les demandes, même celles qui compromettent la santé du bébé", "Accept every request, even those that compromise the baby's health"),
            ch("Rediriger la famille vers un autre établissement", "Redirect the family to another facility")
          ],
          explFr: "La sécurisation culturelle consiste à comprendre avant de juger et à négocier : on intègre ce qui est sans danger et on explique clairement ce qui ne peut pas l'être, en cherchant une solution acceptable pour la famille.",
          explEn: "Cultural safety means understanding before judging and negotiating: integrate what is harmless and clearly explain what cannot be, seeking a solution acceptable to the family."
        },
        {
          ...scenario(
            "Au troisième jour post-partum, une mère pleure facilement, se dit « à fleur de peau », mais prend bien soin de son bébé, mange et dort par périodes. Quelle est l'interprétation la plus probable ?",
            "On the third postpartum day, a mother cries easily and says she feels raw, yet cares well for her baby, eats and sleeps in stretches. What is the most likely interpretation?",
            [
              ch("Un blues du post-partum : écoute, réassurance, repos et surveillance de l'évolution", "Postpartum blues: listening, reassurance, rest and monitoring of the course", true),
              ch("Une dépression post-partum nécessitant une hospitalisation immédiate", "Postpartum depression requiring immediate hospitalization"),
              ch("Un rejet du bébé qui exige un signalement", "Rejection of the baby requiring a report"),
              ch("Une psychose puerpérale", "Puerperal psychosis")
            ]),
          explFr: "Labilité émotive au 3e jour, avec maintien du fonctionnement et du lien avec le bébé : c'est le tableau typique du blues. On informe la mère que c'est fréquent et transitoire, et on lui enseigne quand consulter si cela persiste au-delà de deux semaines.",
          explEn: "Emotional lability on day 3, with preserved functioning and bonding: the classic picture of blues. Tell the mother it is common and transient, and teach her when to seek help if it lasts beyond two weeks."
        },
        {
          ...match("Associe chaque ressource périnatale à son rôle.", "Match each perinatal resource with its role.", [
            pair("Sage-femme", "Midwife", "Suit les grossesses à faible risque et assiste l'accouchement", "Follows low-risk pregnancies and attends the birth"),
            pair("Consultante en lactation", "Lactation consultant", "Soutient les situations d'allaitement difficiles", "Supports difficult breastfeeding situations"),
            pair("Travailleuse sociale", "Social worker", "Accompagne les difficultés psychosociales et financières", "Addresses psychosocial and financial difficulties"),
            pair("Programme OLO", "OLO program", "Offre œufs, lait, oranges et suivi aux femmes enceintes vulnérables", "Provides eggs, milk, oranges and follow-up to vulnerable pregnant women"),
            pair("Info-Santé 811", "Info-Santé 811", "Donne un avis infirmier par téléphone, 24 heures sur 24", "Provides nursing advice by phone, 24 hours a day")
          ]),
          explFr: "Connaître le réseau permet d'orienter la famille vers la bonne porte plutôt que de la renvoyer à l'urgence. L'orientation fait partie intégrante du rôle d'enseignement en périnatalité.",
          explEn: "Knowing the network lets you direct families to the right door instead of sending them to the emergency room. Referral is an integral part of the perinatal teaching role."
        },
        {
          ...scenario(
            "Une femme enceinte de 12 semaines vous demande : « Est-ce qu'un verre de vin de temps en temps, c'est vraiment dangereux ? » Quelle réponse est la plus appropriée ?",
            "A woman at 12 weeks of pregnancy asks you: Is a glass of wine now and then really dangerous? Which answer is most appropriate?",
            [
              ch("Expliquer qu'aucun seuil sécuritaire n'a été établi et que l'abstinence est la recommandation, tout en offrant du soutien sans jugement", "Explain that no safe threshold has been established and that abstinence is the recommendation, while offering support without judgment", true),
              ch("Lui confirmer qu'un verre par semaine est sans danger", "Confirm that one glass a week is harmless"),
              ch("Lui dire que son enfant aura certainement un trouble du spectre de l'alcoolisation fœtale", "Tell her that her child will certainly have fetal alcohol spectrum disorder"),
              ch("Éviter le sujet pour ne pas la culpabiliser", "Avoid the subject so as not to make her feel guilty")
            ]),
          explFr: "Aucune quantité d'alcool n'a été démontrée sécuritaire durant la grossesse : la recommandation officielle est l'abstinence. On informe clairement, sans dramatiser ni culpabiliser, et on offre les ressources si une consommation est déjà installée.",
          explEn: "No amount of alcohol has been shown to be safe in pregnancy: the official recommendation is abstinence. Inform clearly, without dramatizing or shaming, and offer resources if drinking is already established."
        }
      ]
    }
  ]
},

/* ================================================================
   COMPÉTENCE 28 — Soins aux mères et aux nouveaux-nés
   Code de cours 252-542
   ================================================================ */
{
  id: "soins_mere_nouveaune", order: 2, code: "252-542",
  title_fr: "Soins aux mères et aux nouveaux-nés",
  title_en: "Care of Mothers and Newborns",
  icon: "🍼",
  tiers: [
    /* ---------- Palier 1 — Débutant : le nouveau-né sain ---------- */
    {
      level: 1,
      questions: [
        {
          fr: "À quels moments l'indice d'Apgar est-il habituellement évalué ?",
          en: "At what times is the Apgar score usually assessed?",
          choices: [
            ch("À 1 minute et à 5 minutes de vie", "At 1 minute and 5 minutes of life", true),
            ch("À la naissance seulement", "At birth only"),
            ch("À 30 minutes et à 2 heures de vie", "At 30 minutes and 2 hours of life"),
            ch("Une fois par jour durant le séjour", "Once a day during the stay")
          ],
          explFr: "L'Apgar est coté à 1 et à 5 minutes ; on le répète à 10 minutes si le score de 5 minutes reste bas. Il évalue l'adaptation du nouveau-né à la vie extra-utérine, il ne prédit pas son avenir.",
          explEn: "Apgar is scored at 1 and 5 minutes; it is repeated at 10 minutes if the 5-minute score remains low. It assesses the newborn's adaptation to extrauterine life, not their future."
        },
        {
          fr: "Quels sont les cinq paramètres de l'indice d'Apgar ?",
          en: "What are the five parameters of the Apgar score?",
          choices: [
            ch("Fréquence cardiaque, respiration, tonus musculaire, réactivité aux stimuli, coloration", "Heart rate, respiration, muscle tone, reflex irritability, colour", true),
            ch("Poids, taille, périmètre crânien, température, glycémie", "Weight, length, head circumference, temperature, blood sugar"),
            ch("Fréquence cardiaque, tension artérielle, saturation, diurèse, coloration", "Heart rate, blood pressure, saturation, urine output, colour"),
            ch("Succion, déglutition, respiration, sommeil, pleurs", "Sucking, swallowing, breathing, sleep, crying")
          ],
          explFr: "Chaque paramètre est coté 0, 1 ou 2, pour un total sur 10. Un score de 7 et plus à 5 minutes est rassurant ; un score bas commande une réanimation déjà en cours, pas une simple observation.",
          explEn: "Each parameter is scored 0, 1 or 2, for a total out of 10. A score of 7 or more at 5 minutes is reassuring; a low score calls for resuscitation already underway, not mere observation."
        },
        {
          ...match("Associe chaque paramètre de l'Apgar à ce qu'il observe.", "Match each Apgar parameter with what it observes.", [
            pair("Fréquence cardiaque", "Heart rate", "Battements par minute, au stéthoscope", "Beats per minute, by stethoscope"),
            pair("Respiration", "Respiration", "Vigueur du cri et effort respiratoire", "Strength of the cry and respiratory effort"),
            pair("Tonus musculaire", "Muscle tone", "Flexion active des membres", "Active flexion of the limbs"),
            pair("Réactivité aux stimuli", "Reflex irritability", "Réaction à l'aspiration ou à la stimulation", "Response to suctioning or stimulation"),
            pair("Coloration", "Colour", "Rosé, extrémités bleutées ou pâleur généralisée", "Pink, bluish extremities or generalized pallor")
          ]),
          explFr: "Retenir ce que chaque paramètre observe évite de confondre l'Apgar avec un examen physique complet : c'est une cote d'adaptation rapide, faite en quelques secondes au chevet.",
          explEn: "Remembering what each item observes avoids confusing Apgar with a full physical exam: it is a quick adaptation score, done in seconds at the bedside."
        },
        {
          fr: "Quelle est la fréquence cardiaque normale d'un nouveau-né au repos ?",
          en: "What is the normal resting heart rate of a newborn?",
          choices: [
            ch("60 à 90 battements par minute", "60 to 90 beats per minute"),
            ch("110 à 160 battements par minute", "110 to 160 beats per minute", true),
            ch("180 à 220 battements par minute", "180 to 220 beats per minute"),
            ch("40 à 70 battements par minute", "40 to 70 beats per minute")
          ],
          explFr: "Environ 110 à 160 battements par minute au repos, avec des variations normales durant les pleurs ou le sommeil profond. Une fréquence sous 100 chez un nouveau-né est une urgence.",
          explEn: "About 110 to 160 beats per minute at rest, with normal variation during crying or deep sleep. A rate under 100 in a newborn is an emergency."
        },
        {
          fr: "Quelle est la fréquence respiratoire normale d'un nouveau-né ?",
          en: "What is the normal respiratory rate of a newborn?",
          choices: [
            ch("12 à 20 respirations par minute", "12 to 20 breaths per minute"),
            ch("20 à 30 respirations par minute", "20 to 30 breaths per minute"),
            ch("30 à 60 respirations par minute", "30 to 60 breaths per minute", true),
            ch("70 à 90 respirations par minute", "70 to 90 breaths per minute")
          ],
          explFr: "De 30 à 60 respirations par minute, souvent irrégulières et de type abdominal. On compte une minute complète. Au-delà de 60 de façon soutenue, on parle de tachypnée : à signaler.",
          explEn: "30 to 60 breaths per minute, often irregular and abdominal. Count for a full minute. Sustained above 60 is tachypnea: report it."
        },
        {
          type: "tf",
          fr: "La température axillaire normale d'un nouveau-né se situe entre 36,5 °C et 37,5 °C.",
          en: "The normal axillary temperature of a newborn is between 36.5 °C and 37.5 °C.",
          isTrue: true,
          explFr: "Vrai. Sous 36,5 °C, on parle d'hypothermie : on réchauffe (peau à peau, bonnet, couverture) et on réévalue. Le nouveau-né perd sa chaleur très vite à cause de sa grande surface corporelle.",
          explEn: "True. Below 36.5 °C is hypothermia: rewarm (skin-to-skin, hat, blanket) and reassess. Newborns lose heat very quickly because of their large body surface area."
        },
        {
          fr: "Un nouveau-né encore mouillé de liquide amniotique perd surtout sa chaleur par :",
          en: "A newborn still wet with amniotic fluid mainly loses heat through:",
          choices: [
            ch("Évaporation", "Evaporation", true),
            ch("Conduction", "Conduction"),
            ch("Radiation", "Radiation"),
            ch("Convection", "Convection")
          ],
          explFr: "L'évaporation est la première cause de perte de chaleur à la naissance : d'où le geste réflexe d'assécher le bébé immédiatement et de changer la serviette mouillée avant de l'installer en peau à peau.",
          explEn: "Evaporation is the leading cause of heat loss at birth: hence the reflex of drying the baby immediately and changing the wet towel before placing them skin-to-skin."
        },
        {
          fr: "Quel est le soin recommandé du cordon ombilical chez un nouveau-né en santé ?",
          en: "What is the recommended umbilical cord care in a healthy newborn?",
          choices: [
            ch("Le garder propre et sec, à l'air libre, et replier la couche sous le cordon", "Keep it clean and dry, exposed to air, and fold the diaper below the cord", true),
            ch("L'entourer d'un pansement occlusif humide", "Wrap it in a moist occlusive dressing"),
            ch("L'imbiber d'alcool à 70 % à chaque change", "Soak it in 70% alcohol at every diaper change"),
            ch("Le recouvrir d'un onguent antibiotique quotidiennement", "Cover it daily with antibiotic ointment")
          ],
          explFr: "Propre et sec, à l'air : c'est ce qui accélère la chute du cordon, généralement entre 7 et 14 jours. Rougeur étendue, écoulement purulent ou odeur nauséabonde doivent être signalés.",
          explEn: "Clean, dry and exposed to air: this speeds cord separation, usually between 7 and 14 days. Spreading redness, purulent discharge or foul odour must be reported."
        },
        {
          type: "tf",
          fr: "La vitamine K est administrée par voie intramusculaire au nouveau-né afin de prévenir la maladie hémorragique du nouveau-né.",
          en: "Vitamin K is given intramuscularly to the newborn to prevent hemorrhagic disease of the newborn.",
          isTrue: true,
          explFr: "Vrai. Le nouveau-né naît avec très peu de vitamine K et une flore intestinale immature ; l'injection intramusculaire donnée après la naissance prévient les saignements graves, dont l'hémorragie intracrânienne.",
          explEn: "True. Newborns are born with very little vitamin K and immature gut flora; the intramuscular injection given after birth prevents serious bleeding, including intracranial hemorrhage."
        },
        {
          fr: "À quoi sert l'onguent ophtalmique à l'érythromycine administré au nouveau-né ?",
          en: "What is the purpose of the erythromycin eye ointment given to the newborn?",
          choices: [
            ch("À prévenir l'ophtalmie néonatale, une infection oculaire acquise au passage", "To prevent neonatal ophthalmia, an eye infection acquired during birth", true),
            ch("À traiter un ictère des yeux", "To treat yellowing of the eyes"),
            ch("À humidifier les yeux du bébé pendant le sommeil", "To moisten the baby's eyes during sleep"),
            ch("À corriger un strabisme du nouveau-né", "To correct newborn strabismus")
          ],
          explFr: "Il s'agit d'une prophylaxie contre les infections oculaires, notamment gonococciques, transmises lors du passage dans la filière génitale. Les parents peuvent la refuser après avoir été informés.",
          explEn: "It is prophylaxis against eye infections, notably gonococcal, transmitted during passage through the birth canal. Parents may refuse it once informed."
        },
        {
          type: "tf",
          fr: "Une perte d'environ 5 à 10 % du poids de naissance durant les premiers jours de vie est considérée comme normale.",
          en: "A loss of about 5 to 10% of birth weight during the first days of life is considered normal.",
          isTrue: true,
          explFr: "Vrai. Cette perte physiologique est liée à l'élimination du surplus de liquide et des premières selles ; le poids de naissance est généralement repris vers 10 à 14 jours. Une perte qui dépasse 10 % doit être évaluée.",
          explEn: "True. This physiological loss reflects excess fluid elimination and the first stools; birth weight is generally regained by 10 to 14 days. A loss exceeding 10% must be assessed."
        },
        {
          ...scenario(
            "Au moment du congé, un père vous dit qu'il couchera son bébé sur le ventre, « comme on faisait dans le temps ». Quelle est la meilleure intervention ?",
            "At discharge, a father tells you he will put his baby to sleep on the stomach, the way it used to be done. What is the best intervention?",
            [
              ch("Expliquer que le dodo sur le dos, sur une surface ferme et dégagée, réduit le risque de mort subite, puis vérifier sa compréhension", "Explain that back sleeping, on a firm and uncluttered surface, reduces the risk of sudden infant death, then check his understanding", true),
              ch("Lui dire qu'il a raison : les habitudes familiales priment", "Tell him he is right: family habits come first"),
              ch("Lui remettre le dépliant sans commentaire", "Hand him the pamphlet without comment"),
              ch("Lui suggérer de coucher le bébé sur le côté, un compromis sécuritaire", "Suggest side sleeping as a safe compromise")
            ]),
          explFr: "« Dodo sur le dos » : la position dorsale sur une surface ferme, dans un lit dégagé, reste la mesure la plus efficace pour réduire le risque de mort subite du nourrisson. La position latérale n'est pas un compromis sécuritaire : le bébé peut basculer sur le ventre.",
          explEn: "Back to sleep: the supine position on a firm surface in an uncluttered crib remains the most effective measure to reduce the risk of sudden infant death syndrome. Side sleeping is not a safe compromise: the baby can roll onto the stomach."
        }
      ]
    },

    /* ---------- Palier 2 — Intermédiaire : travail, suites de couches, allaitement ---------- */
    {
      level: 2,
      questions: [
        {
          fr: "Le premier stade du travail se termine par :",
          en: "The first stage of labour ends with:",
          choices: [
            ch("La dilatation complète du col, à 10 cm", "Complete dilation of the cervix, at 10 cm", true),
            ch("La naissance du bébé", "The birth of the baby"),
            ch("L'expulsion du placenta", "Delivery of the placenta"),
            ch("La rupture des membranes", "Rupture of the membranes")
          ],
          explFr: "Le premier stade va du début du travail régulier jusqu'à la dilatation complète : c'est le plus long. Le deuxième va de la dilatation complète à la naissance, le troisième à la délivrance du placenta.",
          explEn: "The first stage runs from the onset of regular labour to full dilation: it is the longest. The second runs from full dilation to birth, the third to delivery of the placenta."
        },
        {
          ...match("Associe chaque stade du travail à sa définition.", "Match each stage of labour with its definition.", [
            pair("Premier stade", "First stage", "Du début du travail à la dilatation complète du col", "From onset of labour to complete cervical dilation"),
            pair("Deuxième stade", "Second stage", "De la dilatation complète à la naissance du bébé", "From complete dilation to the birth of the baby"),
            pair("Troisième stade", "Third stage", "De la naissance à l'expulsion du placenta", "From birth to delivery of the placenta"),
            pair("Quatrième stade", "Fourth stage", "Les deux premières heures suivant l'accouchement", "The first two hours after delivery")
          ]),
          explFr: "Le quatrième stade est celui de la surveillance rapprochée : c'est durant ces deux heures que surviennent la plupart des hémorragies post-partum immédiates.",
          explEn: "The fourth stage is the close-monitoring period: most immediate postpartum hemorrhages occur during those two hours."
        },
        {
          fr: "Après l'accouchement, le fond utérin descend habituellement d'environ :",
          en: "After delivery, the fundus of the uterus usually descends by about:",
          choices: [
            ch("1 cm (un travers de doigt) par jour", "1 cm (one fingerbreadth) per day", true),
            ch("5 cm par jour", "5 cm per day"),
            ch("1 cm par semaine", "1 cm per week"),
            ch("Il ne descend pas avant la fin du premier mois", "It does not descend before the end of the first month")
          ],
          explFr: "C'est l'involution utérine : le fond, palpable au niveau de l'ombilic juste après l'accouchement, descend d'environ un travers de doigt par jour et n'est généralement plus palpable vers le 10e jour.",
          explEn: "This is uterine involution: the fundus, palpable at the umbilicus right after delivery, descends about one fingerbreadth a day and is generally no longer palpable by day 10."
        },
        {
          ...match("Associe chaque type de lochies à son moment et à son aspect.", "Match each type of lochia with its timing and appearance.", [
            pair("Lochies rubra", "Lochia rubra", "Rouge vif, environ les 3 premiers jours", "Bright red, about the first 3 days"),
            pair("Lochies serosa", "Lochia serosa", "Rosées ou brunâtres, environ du 4e au 10e jour", "Pinkish or brownish, about days 4 to 10"),
            pair("Lochies alba", "Lochia alba", "Blanchâtres ou jaunâtres, jusqu'à quelques semaines", "Whitish or yellowish, up to a few weeks")
          ]),
          explFr: "L'évolution des lochies suit toujours le même sens : du rouge au blanc. Un retour au rouge vif, des caillots volumineux ou une odeur nauséabonde sont anormaux et doivent être signalés.",
          explEn: "Lochia always evolves in the same direction: from red to white. A return to bright red, large clots or a foul odour is abnormal and must be reported."
        },
        {
          type: "tf",
          fr: "Un utérus mou et non contracté (atonique) après l'accouchement est un signe d'alerte d'hémorragie.",
          en: "A soft, uncontracted (atonic) uterus after delivery is a warning sign of hemorrhage.",
          isTrue: true,
          explFr: "Vrai. L'utérus doit rester ferme et centré : c'est sa contraction qui comprime les vaisseaux du site placentaire. Un utérus mou laisse saigner — d'où le massage du fond utérin comme premier geste.",
          explEn: "True. The uterus must stay firm and midline: its contraction compresses the vessels at the placental site. A soft uterus bleeds — hence fundal massage as the first action."
        },
        {
          fr: "Quels signes indiquent une mise au sein efficace ?",
          en: "Which signs indicate an effective latch?",
          choices: [
            ch("Bouche grande ouverte, menton contre le sein, lèvres retroussées, succions lentes avec déglutitions audibles", "Wide-open mouth, chin against the breast, flanged lips, slow sucking with audible swallowing", true),
            ch("Lèvres pincées sur le mamelon seulement, joues creusées, claquements de langue", "Lips pinched on the nipple only, dimpled cheeks, clicking sounds"),
            ch("Le bébé s'endort dans les deux premières minutes de chaque boire", "The baby falls asleep within the first two minutes of every feed"),
            ch("La mère ressent une douleur vive pendant toute la tétée", "The mother feels sharp pain throughout the feed")
          ],
          explFr: "Une prise efficace est large : le bébé prend une bonne partie de l'aréole, pas seulement le mamelon. Une douleur persistante signale presque toujours une mauvaise prise à corriger.",
          explEn: "An effective latch is deep: the baby takes a good portion of the areola, not just the nipple. Persistent pain almost always signals a poor latch to be corrected."
        },
        {
          fr: "Quel est l'indicateur le plus fiable qu'un nouveau-né allaité boit suffisamment ?",
          en: "What is the most reliable indicator that a breastfed newborn is getting enough milk?",
          choices: [
            ch("Le nombre de couches mouillées et de selles, combiné à la courbe de poids", "The number of wet diapers and stools, combined with the weight curve", true),
            ch("La durée de chaque tétée en minutes", "The length of each feed in minutes"),
            ch("La sensation de seins pleins chez la mère", "The mother's feeling of full breasts"),
            ch("Le nombre d'heures de sommeil entre les boires", "The number of hours slept between feeds")
          ],
          explFr: "Les sorties renseignent sur les entrées : on compte les couches mouillées et les selles, qui augmentent au fil des premiers jours, et on suit le poids. La durée du boire ou la sensation de seins pleins ne disent rien de fiable.",
          explEn: "Output tells you about intake: count wet diapers and stools, which increase over the first days, and track weight. Feed duration or a feeling of fullness are not reliable."
        },
        {
          type: "tf",
          fr: "Allaiter à la demande, soit environ 8 à 12 fois par 24 heures les premières semaines, soutient la production de lait.",
          en: "Feeding on demand, about 8 to 12 times per 24 hours in the first weeks, supports milk production.",
          isTrue: true,
          explFr: "Vrai. La production fonctionne selon l'offre et la demande : plus le sein est drainé souvent, plus il produit. Espacer les boires ou imposer un horaire rigide réduit la production.",
          explEn: "True. Milk production follows supply and demand: the more often the breast is drained, the more it produces. Spacing feeds or imposing a rigid schedule reduces supply."
        },
        {
          ...scenario(
            "Au deuxième jour, une mère se plaint de mamelons très douloureux et crevassés. Le bébé prend peu d'aréole et sa bouche reste à peine ouverte. Quelle est la première intervention ?",
            "On day two, a mother complains of very sore, cracked nipples. The baby takes little areola and barely opens their mouth. What is the first intervention?",
            [
              ch("Observer une tétée complète et corriger la prise du sein avec elle", "Observe a full feed and correct the latch with her", true),
              ch("Interrompre l'allaitement pendant 48 heures", "Stop breastfeeding for 48 hours"),
              ch("Introduire un biberon de préparation commerciale", "Introduce a bottle of commercial formula"),
              ch("Appliquer un onguent et poursuivre sans rien changer", "Apply an ointment and continue without any change")
            ]),
          explFr: "Des mamelons douloureux sont presque toujours le symptôme d'une prise superficielle. On observe, on corrige la position et la prise : la douleur cède généralement dès les boires suivants. Arrêter ou complémenter sans raison fragilise l'allaitement.",
          explEn: "Sore nipples are almost always a symptom of a shallow latch. Observe, correct positioning and latch: pain usually resolves from the next feeds. Stopping or supplementing without reason undermines breastfeeding."
        },
        {
          fr: "L'ictère physiologique du nouveau-né apparaît habituellement :",
          en: "Physiological jaundice in the newborn usually appears:",
          choices: [
            ch("Après 24 heures de vie, avec un pic vers le 3e au 5e jour", "After 24 hours of life, peaking around days 3 to 5", true),
            ch("Dans les 6 premières heures de vie", "Within the first 6 hours of life"),
            ch("Seulement après la deuxième semaine", "Only after the second week"),
            ch("Uniquement chez les bébés nourris à la préparation commerciale", "Only in formula-fed babies")
          ],
          explFr: "L'ictère physiologique résulte de la destruction normale des globules rouges fœtaux et de l'immaturité du foie. Il apparaît après 24 heures, culmine vers le 3e au 5e jour et se résorbe ensuite.",
          explEn: "Physiological jaundice results from the normal breakdown of fetal red blood cells and liver immaturity. It appears after 24 hours, peaks around days 3 to 5 and then resolves."
        },
        {
          type: "tf",
          fr: "Un ictère qui apparaît durant les 24 premières heures de vie doit toujours être signalé sans délai.",
          en: "Jaundice appearing within the first 24 hours of life must always be reported without delay.",
          isTrue: true,
          explFr: "Vrai. Un ictère précoce n'est jamais physiologique : il évoque notamment une incompatibilité sanguine ou une hémolyse et exige un dosage de bilirubine rapidement.",
          explEn: "True. Early jaundice is never physiological: it suggests blood group incompatibility or hemolysis and requires a prompt bilirubin measurement."
        },
        {
          fr: "Que faire du lait restant dans un biberon de préparation commerciale une fois la tétée terminée ?",
          en: "What should be done with the milk left in a bottle of commercial formula once the feed is over?",
          choices: [
            ch("Le jeter, car la salive du bébé l'a contaminé", "Discard it, because the baby's saliva has contaminated it", true),
            ch("Le remettre au réfrigérateur pour le prochain boire", "Put it back in the fridge for the next feed"),
            ch("Le laisser à la température de la pièce jusqu'au boire suivant", "Leave it at room temperature until the next feed"),
            ch("Le réchauffer au micro-ondes avant de le redonner", "Reheat it in the microwave before giving it again")
          ],
          explFr: "Le reste d'un biberon entamé se jette : les bactéries de la bouche s'y multiplient. On ne réchauffe jamais un biberon au micro-ondes non plus — la chaleur y est inégale et peut brûler la bouche du bébé.",
          explEn: "Leftover formula from a started bottle is discarded: mouth bacteria multiply in it. Never microwave a bottle either — the heat is uneven and can burn the baby's mouth."
        }
      ]
    },

    /* ---------- Palier 3 — Avancé : complications et urgences ---------- */
    {
      level: 3,
      questions: [
        {
          ...scenario(
            "Une heure après l'accouchement, vous constatez que la serviette hygiénique de la mère est imbibée en quelques minutes et que son fond utérin est mou et déplacé vers la droite. Quelle est votre première action ?",
            "One hour after delivery, you find the mother's pad soaked within minutes and her fundus soft and displaced to the right. What is your first action?",
            [
              ch("Masser le fond utérin, inviter la mère à vider sa vessie et alerter immédiatement l'infirmière ou le médecin", "Massage the fundus, have the mother empty her bladder and immediately alert the nurse or physician", true),
              ch("Changer la serviette et réévaluer dans une heure", "Change the pad and reassess in an hour"),
              ch("Installer la mère en position assise et lui offrir à boire", "Sit the mother up and offer her a drink"),
              ch("Attendre la tournée médicale prévue", "Wait for the scheduled medical rounds")
            ]),
          explFr: "Utérus mou et dévié vers la droite : deux signes classiques d'atonie, souvent aggravée par une vessie pleine qui empêche l'utérus de se contracter. On masse, on fait vider la vessie et on alerte sans attendre.",
          explEn: "A soft uterus deviated to the right: two classic signs of atony, often worsened by a full bladder preventing contraction. Massage, have the bladder emptied and raise the alarm immediately."
        },
        {
          fr: "Quelle est la cause la plus fréquente d'hémorragie post-partum immédiate ?",
          en: "What is the most common cause of immediate postpartum hemorrhage?",
          choices: [
            ch("L'atonie utérine", "Uterine atony", true),
            ch("Une infection de la plaie de césarienne", "Infection of the cesarean wound"),
            ch("Une anémie préexistante", "Pre-existing anemia"),
            ch("Une mastite", "Mastitis")
          ],
          explFr: "L'atonie utérine explique la grande majorité des hémorragies des premières 24 heures : l'utérus ne se contracte pas et les vaisseaux du site placentaire restent ouverts. Les déchirures et la rétention placentaire viennent ensuite.",
          explEn: "Uterine atony explains the vast majority of hemorrhages in the first 24 hours: the uterus fails to contract and the placental site vessels stay open. Lacerations and retained placenta come next."
        },
        {
          fr: "Quels signes évoquent une prééclampsie chez une femme enceinte ?",
          en: "Which signs suggest preeclampsia in a pregnant woman?",
          choices: [
            ch("Hypertension artérielle avec protéinurie, céphalée, troubles visuels ou douleur épigastrique", "High blood pressure with proteinuria, headache, visual disturbances or epigastric pain", true),
            ch("Hypotension avec somnolence et soif intense", "Low blood pressure with drowsiness and intense thirst"),
            ch("Fièvre avec toux et expectorations", "Fever with cough and sputum"),
            ch("Douleur unilatérale au mollet avec rougeur", "Unilateral calf pain with redness")
          ],
          explFr: "La prééclampsie associe hypertension et atteinte d'organes, souvent une protéinurie. Céphalée intense, troubles visuels et douleur en barre sous les côtes annoncent une aggravation vers l'éclampsie : c'est une urgence.",
          explEn: "Preeclampsia combines hypertension with organ involvement, often proteinuria. Severe headache, visual disturbances and band-like pain under the ribs herald progression toward eclampsia: an emergency."
        },
        {
          ...scenario(
            "Une femme enceinte de 32 semaines se présente avec une céphalée intense, une vision embrouillée et un œdème du visage apparu en une journée. Quelle est la conduite prioritaire ?",
            "A woman at 32 weeks of pregnancy presents with severe headache, blurred vision and facial swelling that appeared within a day. What is the priority action?",
            [
              ch("Prendre sa tension artérielle immédiatement et aviser sans délai l'infirmière ou le médecin", "Take her blood pressure immediately and notify the nurse or physician without delay", true),
              ch("La rassurer : l'œdème est fréquent en fin de grossesse", "Reassure her: swelling is common late in pregnancy"),
              ch("Lui conseiller de se reposer et de revenir si cela persiste demain", "Advise her to rest and come back if it persists tomorrow"),
              ch("Lui donner un analgésique en vente libre pour la céphalée", "Give her an over-the-counter analgesic for the headache")
            ]),
          explFr: "Cette triade évoque une prééclampsie sévère. Un œdème du visage d'apparition brutale n'a rien à voir avec l'œdème banal des chevilles. On mesure la tension et on alerte immédiatement : le délai peut conduire à une éclampsie.",
          explEn: "This triad suggests severe preeclampsia. Sudden facial swelling has nothing to do with ordinary ankle edema. Measure blood pressure and alert immediately: delay can lead to eclampsia."
        },
        {
          ...match("Associe chaque complication du post-partum à son signe le plus caractéristique.", "Match each postpartum complication with its most characteristic sign.", [
            pair("Hémorragie post-partum", "Postpartum hemorrhage", "Saignement abondant avec utérus mou", "Heavy bleeding with a soft uterus"),
            pair("Endométrite", "Endometritis", "Fièvre avec lochies malodorantes et utérus sensible", "Fever with foul-smelling lochia and a tender uterus"),
            pair("Mastite", "Mastitis", "Zone d'un sein rouge, chaude et douloureuse avec symptômes grippaux", "A red, hot, painful area of one breast with flu-like symptoms"),
            pair("Thrombophlébite", "Thrombophlebitis", "Douleur, chaleur et œdème d'un seul mollet", "Pain, warmth and swelling in one calf")
          ]),
          explFr: "Chacune a sa signature : saignement et utérus mou, fièvre et lochies malodorantes, sein rouge et douloureux, mollet unilatéral. Savoir les distinguer oriente la surveillance et l'urgence du signalement.",
          explEn: "Each has its signature: bleeding with a soft uterus, fever with foul lochia, a red painful breast, a unilateral calf. Telling them apart guides monitoring and the urgency of reporting."
        },
        {
          type: "tf",
          fr: "En cas d'engorgement mammaire, il faut continuer à allaiter fréquemment pour drainer les seins.",
          en: "In case of breast engorgement, the mother should keep breastfeeding frequently to drain the breasts.",
          isTrue: true,
          explFr: "Vrai. L'engorgement se soulage en vidant le sein : tétées fréquentes, expression d'un peu de lait pour assouplir l'aréole avant la prise, compresses. Cesser d'allaiter aggrave l'engorgement.",
          explEn: "True. Engorgement is relieved by emptying the breast: frequent feeds, expressing a little milk to soften the areola before latching, compresses. Stopping breastfeeding makes engorgement worse."
        },
        {
          fr: "Une mère développe une mastite au sein droit. Que doit-on lui recommander concernant l'allaitement ?",
          en: "A mother develops mastitis in the right breast. What should she be advised about breastfeeding?",
          choices: [
            ch("Poursuivre l'allaitement et bien drainer le sein atteint", "Continue breastfeeding and drain the affected breast well", true),
            ch("Cesser définitivement d'allaiter de ce sein", "Permanently stop feeding from that breast"),
            ch("Cesser d'allaiter des deux seins pendant le traitement", "Stop feeding from both breasts during treatment"),
            ch("Allaiter uniquement du sein gauche jusqu'à la guérison", "Feed only from the left breast until it heals")
          ],
          explFr: "Le lait reste sécuritaire pour le bébé et le drainage fait partie du traitement : arrêter aggrave la stase et le risque d'abcès. On ajoute repos, hydratation, analgésie et antibiotique si prescrit.",
          explEn: "The milk remains safe for the baby and drainage is part of the treatment: stopping worsens stasis and the risk of abscess. Add rest, fluids, analgesia and an antibiotic if prescribed."
        },
        {
          ...scenario(
            "Un nouveau-né de 4 heures présente un tirage intercostal, un geignement expiratoire et une fréquence respiratoire de 80 par minute. Quelle est la conduite appropriée ?",
            "A 4-hour-old newborn shows intercostal retractions, expiratory grunting and a respiratory rate of 80 per minute. What is the appropriate course of action?",
            [
              ch("Reconnaître des signes de détresse respiratoire et aviser immédiatement, tout en surveillant étroitement le bébé", "Recognize signs of respiratory distress and report immediately, while closely monitoring the baby", true),
              ch("Installer le bébé sur le ventre pour faciliter sa respiration", "Place the baby on their stomach to ease breathing"),
              ch("Attendre le prochain boire pour réévaluer", "Wait until the next feed to reassess"),
              ch("Emmailloter le bébé plus serré pour le calmer", "Swaddle the baby more tightly to settle them")
            ]),
          explFr: "Tirage, geignement, battement des ailes du nez et tachypnée soutenue sont les signes cardinaux de détresse respiratoire néonatale. C'est une situation qui se détériore vite : on alerte tout de suite.",
          explEn: "Retractions, grunting, nasal flaring and sustained tachypnea are the cardinal signs of neonatal respiratory distress. This deteriorates quickly: raise the alarm at once."
        },
        {
          fr: "Un nouveau-né de mère diabétique présente des trémulations, de la léthargie et une mauvaise succion. Quelle hypothèse doit-on envisager en premier ?",
          en: "A newborn of a diabetic mother shows jitteriness, lethargy and poor sucking. Which hypothesis should be considered first?",
          choices: [
            ch("Une hypoglycémie néonatale : mesurer la glycémie capillaire et aviser", "Neonatal hypoglycemia: check capillary blood glucose and report", true),
            ch("Un ictère physiologique", "Physiological jaundice"),
            ch("Une réaction normale au bain", "A normal reaction to the bath"),
            ch("Une poussée dentaire", "Teething")
          ],
          explFr: "Le bébé de mère diabétique produit beaucoup d'insuline in utero ; l'apport de glucose maternel cessant à la naissance, sa glycémie chute. Trémulations, léthargie et mauvaise succion doivent faire vérifier la glycémie selon le protocole.",
          explEn: "The infant of a diabetic mother produces a lot of insulin in utero; once the maternal glucose supply stops at birth, blood sugar drops. Jitteriness, lethargy and poor feeding call for a glucose check per protocol."
        },
        {
          type: "tf",
          fr: "Une température rectale de 38 °C chez un nouveau-né de 5 jours doit être signalée immédiatement.",
          en: "A rectal temperature of 38 °C in a 5-day-old newborn must be reported immediately.",
          isTrue: true,
          explFr: "Vrai. Chez le nouveau-né, la fièvre peut être le seul signe d'une infection grave, et son système immunitaire immature ne permet pas d'attendre. Toute fièvre à cet âge exige une évaluation médicale sans délai.",
          explEn: "True. In a newborn, fever may be the only sign of serious infection, and an immature immune system leaves no room to wait. Any fever at this age requires prompt medical assessment."
        },
        {
          ...scenario(
            "Trois semaines après l'accouchement, une mère pleure sans arrêt, dort très peu même quand le bébé dort, se dit incapable de s'en occuper et ajoute qu'elle a parfois « envie de disparaître ». Quelle est la conduite prioritaire ?",
            "Three weeks after delivery, a mother cries constantly, sleeps very little even when the baby sleeps, says she is unable to care for him and adds that she sometimes feels like disappearing. What is the priority action?",
            [
              ch("Prendre au sérieux les propos, ne pas la laisser seule avec le bébé et faire évaluer sans délai", "Take her words seriously, not leave her alone with the baby and arrange an assessment without delay", true),
              ch("La rassurer : c'est le blues du post-partum, cela va passer", "Reassure her: it is postpartum blues, it will pass"),
              ch("Lui conseiller de dormir davantage et reprendre contact dans un mois", "Advise her to sleep more and follow up in a month"),
              ch("Lui suggérer de sevrer le bébé pour réduire sa fatigue", "Suggest weaning the baby to reduce her fatigue")
            ]),
          explFr: "Durée de plus de deux semaines, atteinte du fonctionnement et propos évoquant des idées suicidaires : ce n'est pas un blues. On évalue le risque, on assure la sécurité de la mère et du bébé et on fait intervenir l'équipe sans délai.",
          explEn: "Lasting more than two weeks, impaired functioning and words suggesting suicidal thoughts: this is not blues. Assess the risk, ensure the safety of both mother and baby and involve the team without delay."
        },
        {
          ...scenario(
            "Au troisième jour, un nouveau-né allaité a perdu 9 % de son poids de naissance. La mère est déterminée à allaiter, mais le bébé ne fait que cinq boires par 24 heures. Quelle est la meilleure conduite ?",
            "On day three, a breastfed newborn has lost 9% of birth weight. The mother is determined to breastfeed, but the baby only feeds five times per 24 hours. What is the best course of action?",
            [
              ch("Observer une tétée, corriger la prise, augmenter la fréquence des boires, aviser l'équipe et assurer un suivi rapproché du poids", "Observe a feed, correct the latch, increase feeding frequency, inform the team and follow the weight closely", true),
              ch("Introduire immédiatement un biberon de préparation commerciale à chaque boire", "Immediately introduce a bottle of formula at every feed"),
              ch("Rassurer la mère : une perte de poids est toujours normale les premiers jours", "Reassure the mother: weight loss is always normal in the first days"),
              ch("Conseiller de réveiller le bébé seulement s'il pleure", "Advise waking the baby only if he cries")
            ]),
          explFr: "Une perte de 9 % approche du seuil critique de 10 % et cinq boires par jour, c'est trop peu. On intervient sur la cause — fréquence et efficacité des boires — avec le soutien de l'équipe, avant d'envisager une complémentation, qui relève d'une décision clinique.",
          explEn: "A 9% loss is approaching the critical 10% threshold, and five feeds a day is too few. Address the cause — feeding frequency and effectiveness — with team support, before considering supplementation, which is a clinical decision."
        }
      ]
    }
  ]
}

];

const UI_TEXT = {
  fr: {
    appName: "PérinatalitéQuest",
    tagline: "Deviens un pro des soins à la mère et au nouveau-né",
    start: "Commencer l'aventure",
    yourName: "Ton prénom",
    chooseAvatar: "Choisis ton avatar",
    map: "Mon parcours",
    badges: "Badges",
    trophies: "Trophées",
    leaderboard: "Palmarès",
    profile: "Profil",
    level: "Niveau",
    xp: "XP",
    locked: "Verrouillé",
    completeToUnlock: "Termine la quête précédente pour déverrouiller",
    startQuest: "Démarrer la quête",
    retryQuest: "Reprendre la quête",
    question: "Question",
    of: "sur",
    submit: "Valider",
    next: "Suivant",
    finish: "Terminer",
    correct: "Bonne réponse!",
    incorrect: "Ce n'est pas ça...",
    questResult: "Résultat de la quête",
    score: "Score",
    passed: "Quête réussie! 🎉",
    failed: "Pas encore réussi — réessaie pour débloquer le badge (seuil: 70%)",
    backToMap: "Retour à la carte",
    newBadge: "Nouveau badge!",
    newTrophy: "Nouveau trophée!",
    hours: "heures",
    switchLang: "EN",
    privacy: "Confidentialité",
    resetProgress: "Réinitialiser tout",
    confirmReset: "Tout réinitialiser? Ton avatar, tes badges, trophées et toute ta progression seront effacés. Cette action est irréversible.",
    installApp: "Installer l'application",
    rank: "Rang",
    you: "Toi",
    leaderboardNote: "Classement local (démo) — un vrai palmarès de classe nécessite un serveur partagé.",
    completedQuests: "quêtes complétées",
    chooseVehicle: "Choisis ta machine",
    myVehicle: "Ta machine",
    vehicleGrows: "Évolue avec ton expérience",
    maxSize: "Taille maximale atteinte!",
    trueLabel: "Vrai",
    falseLabel: "Faux",
    tfPrompt: "Vrai ou faux?",
    masteredLabel: "compétences maîtrisées",
    tierLabel: "Palier",
    year1Label: "1re année",
    year2Label: "2e année",
    matchPrompt: "Touche un terme, puis sa définition qui correspond.",
    scenarioLabel: "Mise en situation",
    masteryUnlocked: "Compétence maîtrisée — badge débloqué!",
    accessCodeTitle: "Code d'accès",
    accessCodePrompt: "Entre le code d'accès fourni par ton enseignant pour continuer.",
    accessCodeTrialOver: "Ton essai gratuit de 7 jours est terminé. Entre le code d'accès fourni par ton centre de formation pour continuer.",
    accessCodePlaceholder: "Code d'accès",
    accessCodeSubmit: "Valider",
    accessCodeChecking: "Vérification...",
    accessCodeInvalid: "Code invalide ou inactif. Vérifie auprès de ton enseignante ou de ton enseignant.",
    accessCodeOffline: "Connexion Internet requise pour valider ton code la première fois. Réessaie une fois connecté.",
    accessCodeNotConfigured: "L'application n'est pas encore configurée. Contacte ton enseignant.",
    welcomeHeading: "Comment ça marche",
    welcomeIntro: "Avant de commencer, voici un survol rapide de l'application.",
    welcomeSteps: [
      { icon: "🗺️", title: "Mon parcours", text: "Les deux compétences du programme (27 et 28) sont des quêtes sur la carte. Termine-les dans l'ordre pour avancer." },
      { icon: "📝", title: "Questions", text: "Réponds à des questions à choix multiples, vrai/faux, associations et mises en situation cliniques." },
      { icon: "🎖️", title: "Badges", text: "Réussis une quête à 70% ou plus pour débloquer son badge." },
      { icon: "🏆", title: "Trophées", text: "Décroche des trophées spéciaux pour tes exploits et ta progression." },
      { icon: "📊", title: "Palmarès", text: "Compare ton avancement avec celui du reste de la classe." },
      { icon: "🍼", title: "Ton avatar", text: "Choisis ton avatar — il évolue à mesure que tu gagnes de l'expérience." }
    ]
  },
  en: {
    appName: "PérinatalitéQuest",
    tagline: "Become a pro in mother and newborn care",
    start: "Start the adventure",
    yourName: "Your first name",
    chooseAvatar: "Choose your avatar",
    map: "My path",
    badges: "Badges",
    trophies: "Trophies",
    leaderboard: "Leaderboard",
    profile: "Profile",
    level: "Level",
    xp: "XP",
    locked: "Locked",
    completeToUnlock: "Complete the previous quest to unlock",
    startQuest: "Start quest",
    retryQuest: "Retry quest",
    question: "Question",
    of: "of",
    submit: "Submit",
    next: "Next",
    finish: "Finish",
    correct: "Correct!",
    incorrect: "Not quite...",
    questResult: "Quest Result",
    score: "Score",
    passed: "Quest passed! 🎉",
    failed: "Not passed yet — try again to unlock the badge (threshold: 70%)",
    backToMap: "Back to map",
    newBadge: "New badge!",
    newTrophy: "New trophy!",
    hours: "hours",
    switchLang: "FR",
    privacy: "Privacy",
    resetProgress: "Reset everything",
    confirmReset: "Reset everything? Your avatar, badges, trophies and all progress will be erased. This cannot be undone.",
    installApp: "Install the app",
    rank: "Rank",
    you: "You",
    leaderboardNote: "Local (demo) ranking — a real class leaderboard needs a shared server.",
    completedQuests: "quests completed",
    chooseVehicle: "Choose your machine",
    myVehicle: "Your machine",
    vehicleGrows: "Evolves with your experience",
    maxSize: "Maximum size reached!",
    trueLabel: "True",
    falseLabel: "False",
    tfPrompt: "True or false?",
    masteredLabel: "competencies mastered",
    tierLabel: "Tier",
    year1Label: "Year 1",
    year2Label: "Year 2",
    matchPrompt: "Tap a term, then its matching definition.",
    scenarioLabel: "Scenario",
    masteryUnlocked: "Competency mastered — badge unlocked!",
    accessCodeTitle: "Access code",
    accessCodePrompt: "Enter the access code given by your teacher to continue.",
    accessCodeTrialOver: "Your free 7-day trial has ended. Enter the access code provided by your training center to continue.",
    accessCodePlaceholder: "Access code",
    accessCodeSubmit: "Submit",
    accessCodeChecking: "Checking...",
    accessCodeInvalid: "Invalid or inactive code. Check with your teacher.",
    accessCodeOffline: "Internet connection required to validate your code the first time. Try again once connected.",
    accessCodeNotConfigured: "The app isn't configured yet. Contact your teacher.",
    welcomeHeading: "How it works",
    welcomeIntro: "Before you start, here's a quick overview of the app.",
    welcomeSteps: [
      { icon: "🗺️", title: "My path", text: "The program's two competencies (27 and 28) are quests on the map. Complete them in order to move forward." },
      { icon: "📝", title: "Questions", text: "Answer multiple-choice, true/false, matching and clinical scenario questions." },
      { icon: "🎖️", title: "Badges", text: "Pass a quest with 70% or more to unlock its badge." },
      { icon: "🏆", title: "Trophies", text: "Earn special trophies for your achievements and progress." },
      { icon: "📊", title: "Leaderboard", text: "Compare your progress with the rest of the class." },
      { icon: "🍼", title: "Your avatar", text: "Choose your avatar — it evolves as you earn experience." }
    ]
  }
};

/* ---- Paliers de niveau (basés sur XP total) ----
   ⚠️ Barème recalibré pour un programme à 2 compétences : un parcours
   parfait rapporte environ 1520 XP (2 compétences × 3 paliers de
   12 questions). Avec le barème de PédiatrieQuest (3500 XP pour Maître),
   le dernier niveau aurait été inatteignable. */
const LEVELS = [
  { min: 0,    name_fr: "Novice",       name_en: "Novice",     avatarStage: 0 },
  { min: 200,  name_fr: "Apprenti(e)",  name_en: "Apprentice", avatarStage: 2 },
  { min: 450,  name_fr: "Compétent(e)", name_en: "Competent",  avatarStage: 4 },
  { min: 750,  name_fr: "Chevronné(e)", name_en: "Seasoned",   avatarStage: 6 },
  { min: 1100, name_fr: "Expert(e)",    name_en: "Expert",     avatarStage: 9 },
  { min: 1450, name_fr: "Maître",       name_en: "Master",     avatarStage: 11 }
];

/* ---- Personnages d'avatar (créatures légendaires, évolutives) ----
   Chaque personnage est rendu par un emoji qui change de stade avec le XP
   (voir avatarSVG()/avatarStageForXP() dans app.js). Les 12 stades
   correspondent aux avatarStage de LEVELS. */
const AVATAR_CHARACTERS = [
 {
  "id": "dragon",
  "name_fr": "Dragon",
  "name_en": "Dragon",
  "title_fr": "Le Sage",
  "title_en": "The Sage",
  "stages": ["🥚","🥚","🦎","🦎","🐲","🐲","🐉","🐉","🐉","🐉","🐉","🐉"]
 },
 {
  "id": "licorne",
  "name_fr": "Licorne",
  "name_en": "Unicorn",
  "title_fr": "La Guérisseuse",
  "title_en": "The Healer",
  "stages": ["🥚","🥚","🐴","🐴","🦄","🦄","🦄","🦄","🦄","🦄","🦄","🦄"]
 },
 {
  "id": "phenix",
  "name_fr": "Phénix",
  "name_en": "Phoenix",
  "title_fr": "Le Résilient",
  "title_en": "The Resilient One",
  "stages": ["🥚","🥚","🐣","🐣","🐦","🐦","🦅","🦅","🦅","🦅","🦅","🦅"]
 },
 {
  "id": "griffon",
  "name_fr": "Griffon",
  "name_en": "Griffin",
  "title_fr": "Le Courageux",
  "title_en": "The Brave One",
  "stages": ["🥚","🥚","🐱","🐱","🦁","🦁","🦁","🦁","🦁","🦁","🦁","🦁"]
 }
];

const AVATAR_COLORS = [
  { id: "violet", hex: "#6b3fa0", name_fr: "Violet", name_en: "Purple" },
  { id: "turquoise", hex: "#0f8b8d", name_fr: "Turquoise", name_en: "Turquoise" },
  { id: "jaune",  hex: "#f7b500", name_fr: "Jaune soleil", name_en: "Sunny Yellow" },
  { id: "orange", hex: "#ff7a1a", name_fr: "Orange vif", name_en: "Bright Orange" },
  { id: "vert",   hex: "#3bb54a", name_fr: "Vert menthe", name_en: "Mint Green" },
  { id: "rose",   hex: "#e5559c", name_fr: "Rose", name_en: "Pink" }
];

/* ---- Compatibilité du moteur ----
   Le moteur (app.js) est partagé avec les apps de métiers, où l'élève
   choisit une « machine » qui grossit avec le XP. PérinatalitéQuest
   n'utilise pas cette mécanique : on conserve une entrée neutre et un objet
   vide pour les questions de type "hotspot" (aucune dans cette app). */
const VEHICLE_TYPES = [
  { id: "aucun", name_fr: "—", name_en: "—" }
];
const VEHICLE_GROWTH = { minHeight: 78, maxHeight: 178, maxXP: 1450 };
const CABIN_CONTROLS = {};

/* ---- Trophées (méta-réussites) ----
   Ajustés au programme : 2 compétences seulement, et 8 questions
   d'association au total dans l'app. */
const TROPHIES = [
  { id: "t_first", name_fr: "Premier pas", name_en: "First Step", icon: "🥉",
    desc_fr: "Réussir ton premier palier de compétence", desc_en: "Pass your first competency tier",
    check: (state) => Object.keys(state.completed).length >= 1 },
  { id: "t_half", name_fr: "Mi-parcours", name_en: "Halfway There", icon: "🥈",
    desc_fr: "Maîtriser 1 compétence (palier Avancé)", desc_en: "Master 1 competency (Advanced tier)",
    check: (state) => (state.badges || []).length >= 1 },
  { id: "t_all", name_fr: "Diplômé virtuel", name_en: "Virtual Graduate", icon: "🏆",
    desc_fr: "Maîtriser les 2 compétences du programme", desc_en: "Master both competencies of the program",
    check: (state) => (state.badges || []).length >= 2 },
  { id: "t_perfect", name_fr: "Sans faute", name_en: "Flawless", icon: "💯",
    desc_fr: "Obtenir 100% à un palier", desc_en: "Score 100% on a tier",
    check: (state) => Object.values(state.completed).some(s => s.score === 100) },
  { id: "t_accueil", name_fr: "Cœur d'accueil", name_en: "Caring Heart", icon: "💗",
    desc_fr: "Maîtriser la compétence Approche privilégiée", desc_en: "Master the Preferred Approach competency",
    check: (state) => (state.badges || []).includes("approche_perinatale") },
  { id: "t_nouveau_ne", name_fr: "Gardien du nouveau-né", name_en: "Newborn's Guardian", icon: "🛡️",
    desc_fr: "Réussir le palier Débutant de Soins aux mères et aux nouveaux-nés", desc_en: "Pass the Beginner tier of Care of Mothers and Newborns",
    check: (state) => state.completed["soins_mere_nouveaune_1"] && state.completed["soins_mere_nouveaune_1"].score >= 70 },
  { id: "t_streak", name_fr: "Assidu", name_en: "Dedicated", icon: "🔥",
    desc_fr: "Se connecter 3 jours différents", desc_en: "Log in on 3 different days",
    check: (state) => (state.loginDays || []).length >= 3 },
  { id: "t_matcher", name_fr: "Bon association", name_en: "Great Match", icon: "🧩",
    desc_fr: "Réussir 8 questions d'association de termes", desc_en: "Complete 8 term-matching questions",
    check: (state) => (state.matchesCompleted || 0) >= 8 }
];

/* ---- Palmarès (données d'exemple — classe fictive) ----
   À remplacer par de vraies données élèves lorsqu'un palmarès partagé
   sera branché. Le tableau de bord enseignant, lui, utilise Supabase. */
const LEADERBOARD_SEED = [
  { name: "Mia-Rose T.", xp: 1380, avatarChar: "licorne", avatarColor: "vert" },
  { name: "Xavier L.", xp: 1120, avatarChar: "dragon", avatarColor: "turquoise" },
  { name: "Sam D.", xp: 860, avatarChar: "phenix", avatarColor: "orange" },
  { name: "Alicia P.", xp: 610, avatarChar: "griffon", avatarColor: "rose" },
  { name: "Kevin R.", xp: 420, avatarChar: "dragon", avatarColor: "jaune" },
  { name: "Noémie B.", xp: 230, avatarChar: "licorne", avatarColor: "violet" },
  { name: "Tommy G.", xp: 95, avatarChar: "phenix", avatarColor: "vert" }
];
