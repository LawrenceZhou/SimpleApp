//All the data of songs stored here.
const Rooms = [
  {
    name: "Introduction(Narthex)",
    intro: "We begin our tour standing in the narthex of the Cheese di Sant’Aniceto in Palazzo Altemps. " + 
           "We are looking into the church from the rear. The musical excerpt we are hearing is from a " + 
           "work by Felice Anerio written specifically to be performed in this church. Anerio, one of " + 
           "the most important composers of the late Renaissance and early Baroque eras, wrote this work " + 
           "in his final year, soon after the church was constructed. As we explore the music, art, "+ 
           "and architecture of this precious place, we will focus on the way these aspects were integrated.\n\n" + 
           "The Chiesa di Sant’Aniceto was built in 1612 and was consecrated in 1617.\n\n" + 
           "The architects of Sant’Aniceto were among the most notable in Rome, including Onorio Lunghi "+ 
           "(a companion and partner in crime of Caravaggio, whose work includes Sant’ Amrogio e San Carlos), "+ 
           "Flamino Ponzio (architect of Villa Borghese and Aqua Paola), and Girolamo Rinandi (who designed the "+ 
           "façade of Chiesa di Gesu). The frescos and  paintings. completed in 1619, are  by Antonio Circignani "+ 
           "(Il Pomarancio) and Ottavio Leoni (il Padovano).\n\n "+ 
           "The church was dedicated to Our Lady of Clemency (La Madona della Clemenza) and to the martyrdom of "+ 
           "Saint Aniceto, whose remains were moved here from the cacacombs of San Callisto in 1609.",
    background: "https://s3-us-west-2.amazonaws.com/museumpalazzo/altemps-church-entry-lowResolution.jpg",
    pics:["https://s3-us-west-2.amazonaws.com/museumpalazzo/altemps-church-entry-lowResolution.jpg",
          "https://s3-us-west-2.amazonaws.com/museumpalazzo/ChurchEntrance.jpg",
          "https://s3-us-west-2.amazonaws.com/museumpalazzo/med_hr.jpeg"],
    songs: [
      {
        title: "Firmatur manus tua, from Misericordia, c. 1614",
        album: "Felice Anerio",
        url: "https://s3-us-west-2.amazonaws.com/museumpalazzo/anerio-dry.mp3",
      },
    ]
  },

  {
    name: "Tota pulchra es",
    intro:[ "On the left wall near the rear of the nave is a marble inscription with the text:",
            "(You are completely beautiful Maria, there is no flaw in you)\n\n" + 
            "The text is from an antiphon sung at vespers on the Feast of the Immaculate Conception " + 
            "- a theme linked to La Madona della Clemenza, but in ironic conflict with the story of " + 
            "Giovanni Angelo’s father - whose death sets the tone of Sant’Aniceto.\n\n" + 
            "This musical setting of Tota pulchra es is by Giovanni Angelo Altemps. This remarkable composition " + 
            "is included in the Altemps library collection and was subsequently published by Luca Antonio Soldi.\n\n" + 
            "The setting, for two tenors and organ, is unorthodox and somewhat curious, both from musical and acoustical " + 
            "perspectives. Amidst points of imitation and homophonic singing in parallel thirds, there are segments of " + 
            "curious counterpoint replete with voice crossings and close intervals in a relatively low range, suggesting " + 
            "that the work was written with the acoutics of Sant’Aniceto, whose moderate decay time does not obscure the " + 
            "clarity of line as would be the case in a large space sich as Chiesa dei Gesu.\n\n" +
            "Altemps setting of Tota pulchra es incorporates elements of the new ‘Baroque style, yet preserves the purity " + 
            "and simplicity of the style of Palestrina that is, by this time, conservative. The composition portrays the  " + 
            "perfection of the Virgin Mary, starting with a certain somberness and turning lighter towards the end. Ths work " + 
            "adapts perfectly to Chiesa di Sant’Aniceto - both in terms of acoustics and in terms of the use of the architectural light and space.\n\n" +
            "In contrast, this excerpt from Felice Anerio’s Misericordia, also written for performance in Sant’Aniceto is closer  " + 
            "to the newer style, leaving room for vocal elaboration and using expressive leaps. One can imagine the splendor of this  " + 
            "high soprano ringing through the nave from the cantoria behind.",
          ],

    background: "https://s3-us-west-2.amazonaws.com/museumpalazzo/img_1732_med_hr.jpeg",
    pics:["https://s3-us-west-2.amazonaws.com/museumpalazzo/img_1732_med_hr.jpeg",
          "https://s3-us-west-2.amazonaws.com/museumpalazzo/img_1823_med_hr.jpeg",
          "https://s3-us-west-2.amazonaws.com/museumpalazzo/tota-plaque_med_hr.jpeg",
          "https://s3-us-west-2.amazonaws.com/museumpalazzo/altemps-tota-pulchra-tenor1_med_hr.jpeg",
          "https://s3-us-west-2.amazonaws.com/museumpalazzo/handout-1-tota-pulchra-alto_med_hr.png"],
    songs: [
      {
        title: "Tota pulchra es (1614?)",
        album: "Giovanni Angelo Altemps",
        url: "https://s3-us-west-2.amazonaws.com/museumpalazzo/tota-pulchra-es-altemps.m4a",
      },
      {
        title: "processed through the acoustic model of Ciesa dei Gesu",
        album: "Giovanni Angelo Altemps",
        url: "https://s3-us-west-2.amazonaws.com/museumpalazzo/10-misericordia_edit.mp3",
      },
      {
        title: "from  Misericordia",
        album: "Felice Anerio",
        url: "https://s3-us-west-2.amazonaws.com/museumpalazzo/tota-pulchra-es_cdg-mix.mp3",
      },
    ]
  },

  {
    name: "Coretto",
    background: "https://s3-us-west-2.amazonaws.com/museumpalazzo/img_1872_med_hr.jpeg",
    pics: ["https://s3-us-west-2.amazonaws.com/museumpalazzo/img_1872_med_hr.jpeg",],
    intro: "A notable feature of Sant’Aniceto is just to the right of the entrance. Although currently " + 
    "a service room and broom closet (and not open to the public) the inoccuous wooden door opens to a coretto.\n\n" + 
    "This small darkened room, whose light enters from an oddly shaped cave-like openinng simulates the entrance " + 
    "to a catacomb. Inside are frescos of corpses (presumably incuding Saint Aneceto).\n\n" + 
    "The room is isolated from the church. A latice grating permits the sound to enter allowing one to hear the " + 
    "service while sitting alone in a dark, contemplative room. The same musical excerpt by Felice Anerio that we " + 
    "heard as we entered might sound like this when heard within the coretto.",
    songs: [
      {
        title: "Misericordio - Excerpt as audible in coretto",
        album: "Felice Anerio",
        url: "https://s3-us-west-2.amazonaws.com/museumpalazzo/07-misericordias-pa7-corett.mp3",
      },
    ]
  },
  {
    name: "Pomerancio's fresci",
    background: "https://s3-us-west-2.amazonaws.com/museumpalazzo/papa_aniceto_med_hr.jpeg",
    pics: ["https://s3-us-west-2.amazonaws.com/museumpalazzo/papa_aniceto_med_hr.jpeg",
           "https://s3-us-west-2.amazonaws.com/museumpalazzo/img_1833_med_hr.jpeg",
           "https://s3-us-west-2.amazonaws.com/museumpalazzo/papa_aniceto_cropped_204.jpeg",
           "https://s3-us-west-2.amazonaws.com/museumpalazzo/img_1877_med_hr.jpeg",
           "https://s3-us-west-2.amazonaws.com/museumpalazzo/img_1990_med_hr.jpeg",
           "https://s3-us-west-2.amazonaws.com/museumpalazzo/img_1997_med_hr.jpeg",
           "https://s3-us-west-2.amazonaws.com/museumpalazzo/img_2035-2_med_hr.jpeg",
           "https://s3-us-west-2.amazonaws.com/museumpalazzo/img_2153_med_hr.jpeg",
           "https://s3-us-west-2.amazonaws.com/museumpalazzo/smariadegliangeli09_med_hr.jpeg"],
    intro: "Duke Altemps commissioned Antonio Circignani (Il Pomerancio) to paint the frescos emphasizing the martyrdom of Saint Aniceto.\n\n" +  
           "The particularly gruesome account of Aniceto’s  torture and beheading  (an account since refuted) was likely slected " + 
           "by Duke Altemps to memorialize his father, Roberto,, who, was beheaded by order of Pope Sixtus V after being charge with adultery. " +
           "Syrian born Anicetus was the Bishop of Rome from 157-168 AD. Anicetus is most remembered for his opposition to adhering to the Jewish calendar so that " + 
           "Easter occurs on the first day of Passover (14 Nissan)  instead favoring a fixed date on the first Sunday.following the full moon after the Spring equinox.\n\n" + 
           "Circignani divided the north wall of Sant’Aniceto into three panels. In the center, Saint Aniceto, dressed in contemporary 16th century garb) kneels before " + 
           "his executioner. To the left (just above the Tota Pluchra es inscription), Christ carries his cross, adorned with a crown of throns. To the right lies the " + 
           "headless body of Aniceto while a woman collects the saint’s blood into a jug.\n\n" + 
           "On the ceiling above, Pomerancio paints trompe l'oeil ballustrades with a march of putti carrying instruments of torture, a virtual catalogue of the " + 
           "tools of martyrdom, along with the keys of St. Peter and the sword of Aniceto’s execution.",
    songs: [
      {
        title: "Domine in lumine from Misericordia",
        album: "Felice Anerio",
        url: "https://s3-us-west-2.amazonaws.com/museumpalazzo/08-misericordias-pa8-mix.mp3",
      },
      {
        title: "Misericordia",
        album: "Felice Anerio",
        url: "https://s3-us-west-2.amazonaws.com/museumpalazzo/10-misericordia_edit.mp3",
      },
    ]
  },
  {
    name: "Leoni's canon",
    background: "https://s3-us-west-2.amazonaws.com/museumpalazzo/altemps-fresco2-lowResolution.jpg",
    pics: ["https://s3-us-west-2.amazonaws.com/museumpalazzo/altemps-fresco2-lowResolution.jpg",
           "https://s3-us-west-2.amazonaws.com/museumpalazzo/fresco-score_med_hr.jpeg",
           "https://s3-us-west-2.amazonaws.com/museumpalazzo/leoni-altempsCut.jpg",
           "https://s3-us-west-2.amazonaws.com/museumpalazzo/02-ottavio-leoni-portrait_med_hr.jpeg",
           "https://s3-us-west-2.amazonaws.com/museumpalazzo/18-ottavio-leoni-selfportra_med_hr.jpeg",],
    intro: "One of Leoni’s paintings, to the left side of the alter depicts angels singing to the Virgin and Child. The painting " + 
    "includes a musical scroll with a three part canon, possibly composed by Duke Altemps). Beneath the painting there is a " + 
    "strip of opus sectile with five birds done in rare minerals including lapis lazuli and mother of pearl - perhaps part of Altemps’ collection of rare antiquities.",
    songs: [
      {
        title: "Canon a3",
        album: "-",
        url: "https://s3-us-west-2.amazonaws.com/museumpalazzo/ALTEMPS-CANON.mp3",
      },
    ],
  },
  {
    name: "Duke Altemps and his music",
    background: "https://s3-us-west-2.amazonaws.com/museumpalazzo/leoni-altempsCut.jpg",
    pics:["https://s3-us-west-2.amazonaws.com/museumpalazzo/leoni-altempsCut.jpg",
          "https://s3-us-west-2.amazonaws.com/museumpalazzo/altemps-goldoni-2_med_hr.jpeg",
          "https://s3-us-west-2.amazonaws.com/museumpalazzo/tota-pulchra-tenor1-p1_med_hr-2.jpeg",
          "https://s3-us-west-2.amazonaws.com/museumpalazzo/tota-pulchra-tenor2_med_hr.jpeg",
          "https://s3-us-west-2.amazonaws.com/museumpalazzo/altemps-tota-pulchra-organ_med_hr.jpeg",],
    intro: "Giovanni Angelo Altemps was an erudite collector of books and music. Interested in astronomy and mathematics, " + 
           "he consulted with Galileio regarding the newly invented telescope. He wrote a biography of Sant’Aniceto (Vita di Santo Aniceto, " + 
           "Papa, et Martir, published by Francesco Zanetti in 1610). He even wrote a comedy in five acts titled Eutalia under the pseudonym " + 
           "Nuntio Bonagratia Germano. In addition to the vast collection of sculpture he inherited, he had a collection of musical instruments. He also composed music.\n\n" + 
           "In addition to selecting the composers to grace the services of Sant’Aniceto, Doke Altemps was, himself, a skilled amateur composer " + 
           "whose work was included in the musical manuscripts in the Codex Minore of Palazzo Altemps.\n\n" + 
           "Altemps also wrote at leat one theatrical work, a comedie titled Eutelia under the nom de plume Nuntio Bonagratia.\n\n" + 
           "Of the sacred music written for Sant’Aniceto, there is an account of the performance of a Te Deum composed by " + 
           "Duke Altemps that toodk place on May 19th, 1609. to commemorate the placement of the skull of San Anicetto in a separate ossuary on the alter. " + 
           "In addition to selecting the composers to grace the services of Sant’Aniceto.\n\n" + 
           "Duke Altemps' interest in music and theater reached beyond the sacred. In addition to the Churh, " + 
           "Palazzo Attempts houses the Goldoni Theatre, one of the oldest theater’s in Rome. The Duke regularly hosted comedie in the Palazzo.\n\n" + 
           "Altemps also wrote at leat one theatrical work, a comedie titled Eutelia under the nom de plume Nuntio Bonagratia.\n\n" +
           "Below are the manuscript pages of Tota Pulchra es from the Altemps Codex. Like all the works in the collection the " + 
           "music is in ‘part-books’ in which each voice and the organ are in separate books.",
    songs: [
            {
              title: "Tota pulchra es",
              album: "GIovanni Angelo Attempts",
              url: "https://s3-us-west-2.amazonaws.com/museumpalazzo/tota-pulchra-es-altemps-dry.mp3",
            },
      ],
  },
  {
    name: "Felice Anerio",
    background: "https://s3-us-west-2.amazonaws.com/museumpalazzo/felice-anerioCut.jpg",
    pics:["https://s3-us-west-2.amazonaws.com/museumpalazzo/felice-anerioCut.jpg",
          "https://s3-us-west-2.amazonaws.com/museumpalazzo/anerio-misericordio-soprano_med_hr.jpeg"],
    intro: "Felice Anerio (1560-1614) resided in Rome throughout his life. Anerio started singing in Capella Giulia at the age of eight. " + 
           "Following the death of Palestrina in 1584, Anerio was selected to replace the master as the official composer of the Papal choir " + 
           "at the Collegio degli Inglesi. Anerio’s music bears the influence of the Rennaisance masters, including Marenzio, yet incorporates the developing harmonic language of the Baroque period.\n\n" + 
           "In addition to the Sistine Chapel, Anerio served in Santa Maria in Monserrato and San Giovanni dei Florentini, in the immediate vacinity of Palazzo Altemps. " + 
           "During his time as papal composer, Anerio formed a close relationship with his patron, Duke Giovanni Angelo Altemps.\n\n" + 
           "The majority of sacred works composed by Anerio were written specifically for the Altemps chapel. Anerio’s music for Sant’Aniceto " + 
           "constitutes a significant portion of the collection in the Altemps Library.\n\n" + 
           "The dedication of Anerio’s Responsoria (1606) written for Sant’Aniceto states:",
    songs: [
      {
        title: "IRPA",
        album: "Felice Anerio",
        url: "https://s3-us-west-2.amazonaws.com/museumpalazzo/anerio_irPA-02_WET.mp3",
      },
      {
        title: "Misericordia-1 - Misericordia, In generazione",
        album: "Felice Anerio",
        url: "https://s3-us-west-2.amazonaws.com/museumpalazzo/01-misericordias-pa1-mix.mp3",
      },
      {
        title: "Misericordia-2 - Disposui testamentum",
        album: "Felice Anerio",
        url: "https://s3-us-west-2.amazonaws.com/museumpalazzo/02-misericordia_edit.mp3",
      },
      {
        title: "Misericordia-3 - Confite buntur",
        album: "Felice Anerio",
        url: "https://s3-us-west-2.amazonaws.com/museumpalazzo/03-misericordia_edit.mp3",
      },
      {
        title: "Misericordia-4",
        album: "Felice Anerio",
        url: "https://s3-us-west-2.amazonaws.com/museumpalazzo/04-misericordia_edit.mp3",
      },
      {
        title: "Misericordia-5",
        album: "Felice Anerio",
        url: "https://s3-us-west-2.amazonaws.com/museumpalazzo/05-misericordia_edit.mp3",
      },
      {
        title: "Misericordia-6",
        album: "Felice Anerio",
        url: "https://s3-us-west-2.amazonaws.com/museumpalazzo/06-misericordia_edit.mp3",
      },
      {
        title: "Misericordia-7",
        album: "Felice Anerio",
        url: "https://s3-us-west-2.amazonaws.com/museumpalazzo/07-misericordia_edit.mp3",
      },
      {
        title: "Misericordia-8",
        album: "Felice Anerio",
        url: "https://s3-us-west-2.amazonaws.com/museumpalazzo/08-misericordia_edit.mp3",
      },
      {
        title: "Misericordia-9",
        album: "Felice Anerio",
        url: "https://s3-us-west-2.amazonaws.com/museumpalazzo/09-misericordia_edit.mp3",
      },
      {
        title: "Misericordia-10",
        album: "Felice Anerio",
        url: "https://s3-us-west-2.amazonaws.com/museumpalazzo/10-misericordia_edit.mp3",
      },
      {
        title: "Misericordia-11",
        album: "Felice Anerio",
        url: "https://s3-us-west-2.amazonaws.com/museumpalazzo/11-misericordia_edit.mp3",
      },
      {
        title: "Misericordia-12",
        album: "Felice Anerio",
        url: "https://s3-us-west-2.amazonaws.com/museumpalazzo/12-misericordia_edit.mp3",
      },
      {
        title: "Misericordia-13",
        album: "Felice Anerio",
        url: "https://s3-us-west-2.amazonaws.com/museumpalazzo/13-misericordias-pa13-mix.mp3",
      },
      {
        title: "Misericordia-14",
        album: "Felice Anerio",
        url: "https://s3-us-west-2.amazonaws.com/museumpalazzo/14-misericordias-pa14-mix.mp3",
      },
      {
        title: "Misericordia-15",
        album: "Felice Anerio",
        url: "https://s3-us-west-2.amazonaws.com/museumpalazzo/15-misericordias-pa15-mix.mp3",
      },
      {
        title: "Misericordia-16",
        album: "Felice Anerio",
        url: "https://s3-us-west-2.amazonaws.com/museumpalazzo/16-misericordias-pa16-mix.mp3",
      },
      {
        title: "Misericordia-17",
        album: "Felice Anerio",
        url: "https://s3-us-west-2.amazonaws.com/museumpalazzo/17-misericordias-pa17-mix.mp3",
      },
      {
        title: "Misericordia-18",
        album: "Felice Anerio",
        url: "https://s3-us-west-2.amazonaws.com/museumpalazzo/18-misericordias-pa18-mix.mp3",
      },
    ]
  },
  {
    name: "The Altemps Codex",
    background: "https://s3-us-west-2.amazonaws.com/museumpalazzo/palestrina-ascende-organ_84_hr.jpeg",
    pics: ["https://s3-us-west-2.amazonaws.com/museumpalazzo/palestrina-ascende-organ_84_hr.jpeg",
           "https://s3-us-west-2.amazonaws.com/museumpalazzo/palestrina-ascende-alto_119_hr.jpeg",
           "https://s3-us-west-2.amazonaws.com/museumpalazzo/miserere-48-memorare-sopran_med_hr-2.jpeg",
           "https://s3-us-west-2.amazonaws.com/museumpalazzo/miserere-48-memorare-tenor2_med_hr-2.jpeg",
           "https://s3-us-west-2.amazonaws.com/museumpalazzo/miserere-48-memorare-alto_med_hr-2.jpeg",
           "https://s3-us-west-2.amazonaws.com/museumpalazzo/miserere-48-memorare-organ_med_hr-2.jpeg",],
    intro: "The collection of musical manuscripts in the Altemsp Codex is a rich collection of musical manuscripts from 1614. " + 
           "The collection comprises music written at the request of Giovanni Angelo Altemps, largely for performacne in Sant’Aniceto. " + 
           "In addition to the exuisite music the codex provides a unique glmpse at music that represents the transitionfrom the Renaissance " + 
           "to the Baroque. It contains vital information on how sacred music was performed at the end of the 16th century. including very early examples of figured bass.\n\n" + 
           "Included in the codex are works by the most important composers in Rome at the time including Palestrina. After the dissolution ot Palzaao Altemps, " + 
           "the collection was moved to Coleggio Romano and then was lost, and presumably stolen. Since an incomplete set of the codex was available. " + 
           "Some of the works were trasncribed and some (such as Palestrina’ Ascende…) were published in the late 19th century. However, only with the " + 
           "reunification of the collection in the late 1990’s when the Museo Nazionale Romano purchased the incomplete set at an auction, and joined it " + 
           "together with the ‘missing’ volume (that was in Rome all the time!) - are we able to reocoinstruct these works as they were menat to be heard.\n\n" + 
           "The work below was published in the late nineteenth centruy transcribed from an incomplete set of parts. Here, for the first time, " + 
           "we see the score with an additional organ part, replete with an early example of figured bass.",
    songs: [
            {
              title: "Tota pulchra es",
              album: "GIovanni Angelo Attempts",
              url: "https://s3-us-west-2.amazonaws.com/museumpalazzo/tota-pulchra-es-altemps-dry.mp3",
            },
          ]
  },
  {
    name: " On the acoustics of sacred spaces in 16th century Rome",
    background: "https://s3-us-west-2.amazonaws.com/museumpalazzo/frescos_of_ignatius_of_loyo_med_hr.jpeg",
    pics: ["https://s3-us-west-2.amazonaws.com/museumpalazzo/frescos_of_ignatius_of_loyo_med_hr.jpeg",
           "https://s3-us-west-2.amazonaws.com/museumpalazzo/img_2037_med_hr.jpeg",
           "https://s3-us-west-2.amazonaws.com/museumpalazzo/volta-chiesa-del-gesu-bacic_med_hr.jpeg",
           "https://s3-us-west-2.amazonaws.com/museumpalazzo/img_2002_med_hr.jpeg",],
    intro: "The Chiesa di Sant’Aniceto's unique architectural features create an extraordinary acoustic environment - one which offers both richness and perceptual " + 
           "clarity - befitting the music written for services there.\n\n" + 
           "A substantial number off works were composed expressly for performance in the church. These works were collected in the form of part-books. " + 
           "This Altemps codex, provides a wealth of source materials comprising music that we can reliably assert to have been composed specifically for Sant’Aniceto.\n\n" + 
           "Since the music was written contemporaneous with the church’s construction, it is tempting to conjecture that the particular acoustics of " + 
           "Sant’Aniceto may have influenced the composition either consciously or subconsciously.\n\n" + " However, there have not been performances " + 
           "of these works in Sant’Aniceto in the recent past. Nor are there recordings of this music performed in the Church. In fact most of the music " + 
           "has not been performed for centuries. Thus, we can only conjecture about the interaction and interplay between the architecture and the music. " + 
           "Furthermore, whle we can roughly describe the acoustics in terms of relative ‘wetness’ and resonance, we lack a precise understanding of " + 
           "Sant’Aniceto's acoustical properties. To address this we build a computational model of the acoustical space by recording and analyzing impulse responses. " + 
           "The impulse (in this case a balloon pop) is recorded and used to create a profie that simulates the respones of the architectural space to the impulse. " + 
           "By convolving the impulse response profile with any audio signal, the acoustic features of the space are applied to that signal. " + 
           "This process (called convolution reverberation) essentially creates a filter that simulates a desired acoustical space. " +
           "Understanding the acoustical characteristiscs of the spaces in whcih music was performed is critical in understanding performance practices and reception. " + 
           "Broadly speaking, if the reverberation decay time exceeds the rate of change of harmonic rhythm or the resolution of dissonance,  the result is often obfuscated. " + 
           "Whether by conscious choice or intuition, performers often adapt tempi, phrasing, and articulation to these acoustical conditions. However, it is in the detailed " + 
           "study and comparison of individual spaces that may facilitate a refined view of the interplay between music composition, performance, and architectural space.\n\n" + 
           "Background\n\n" + 
           "1. Space\n\n" + 
           "Artists and architects in the late 16th century were manipulating acoustic amd visual perception. How then did composers respond to these perceptual interactions of sound and space?" + 
           "One trend was the rise of polychoral music in the 16th century, in which spatially placed ensembles were in dialogue often simulating calls and echoes. " + 
           "The composed echo, such as in the Gloria Patri duet in Monteverdi’s Vespers, not only alludes to echo, but, given the right acoustical space, could actually give an aural illusion of acoustic reflection.\n\n" + 
           "Together with its half domes and cavernous chapels, cupolae, such as the dome of Vignola’s monumental Chiesa dei Gesu create a complex acoustic environment - resonant, with many reflections, and long delay times..\n\n" + 
           "This acoustic complexity can both enrich and severely distort music and, in particular, distort speech. Francesco Girorgi (1535) the mystic monk who consulted on the design of Sam Francisco della Vigna. " + 
           "Along with his mystical and neo-Platonic reliance on numeircal ratios, Girorgi pragmatically observed the acoustical needs in the church demanding that the chapels and choirs be vaulted to create an echo " + 
           "for the music and chant, and a ceiling over the nave so that the sermons would not be obscured and ‘the voice of the preacher may not escape or re-echo from the vaults.’ (Stevens, Monteverdi in Venice, 2001 P. 119).\n\n" + 
           "Similar sensitivity to acoustics was doubtless a concern of composers. Yet we have relatively little evidence that expliciltly links particular music or performance practices to particular acoustic features. " + 
           "General comments, such as architect Francesco Guitti’s note regarding the construction of a theater in Parma stating that “At last Monteverdi has found the right sound effect.” (Stevens, P. 116). " + 
           "Yet details are typically lacking. The question then arises, is it possible to infer how a composer incoporated the features and avoided the misfeatures of particular acoustic effects through a " + 
           "combined analysis of the music and the acoustics of the particular space for which the work was composed. As enticing an approach as this sounds, it is not without significant challenges. " + 
           "Churches, chapels, ballrooms,  and concert halls, are often rennovated or repurposed. Yet, whereas it may be possible to find important spaces that have not undergone significant renovation, " + 
           "in some cases, for instance in the Sistine Chapel, the existence of tapestries that lined the chapel walls would have had a significant impact on the sound. (See, for example, Boren and Longair’s " + 
           "analyses of the effects of tapestries and wooden chairs on the acoustic delay time in San Marco in Venice [Boren, B. et al Acoustic Simulation of Renaissance Venetion Churches, Acoustics in Practice, vol. 1, no. 2, 2013])\n\n" + 
           "2. Illusion\n\n" + 
           "Seventeenth century artists and architects revelled in illusion. The presence of trompe l’oile  increased during these years, as evident in the counter-reformation extravaganzas of Giovanni Battista Gaulli’s celing of De Gesu.\n\n" + 
           "In some instances, the illusion of resonant space (such as Pozzo’s false dome in Chiesa di Sant’Ignazio di Loyola) , or, conversely, of echoless open air (for example Pozzo’s fresco on the  ceiing of the same church), " + 
           "challenge the acoustic properties of the place. It is difficult to imagine that these cross modal dissonances were done naively.",
    songs: [
      {
        title: "Misericordia(excerpt)",
        album: "Felice Anerio",
        url: "https://s3-us-west-2.amazonaws.com/museumpalazzo/16-misericordias-pa16-mix.mp3",
      },
      {
        title: "near-anechoic recording",
        album: "Felice Anerio",
        url: "https://s3-us-west-2.amazonaws.com/museumpalazzo/04-mis-dry-excerpt.mp3",
      },
      {
        title: "processed with acoustic model of Sant'Aniceto",
        album: "Felice Anerio",
        url: "https://s3-us-west-2.amazonaws.com/museumpalazzo/04-misericordias-pa4-mix.mp3",
      },
      {
        title: "processed with acoustic model of Chiesa dei Gesu",
        album: "Felice Anerio",
        url: "https://s3-us-west-2.amazonaws.com/museumpalazzo/04-misericordias-gesu-mix.mp3",
      },
      {
        title: "IR Model  of Altemps",
        album: "Tota pulchra es",
        url: "https://s3-us-west-2.amazonaws.com/museumpalazzo/tota-pulchra-es-ALTEMPS.m4a",
      },
      {
        title: "IR model of Chiesa dei Gesu",
        album: "Giovanni Angelo Altemps",
        url: "https://s3-us-west-2.amazonaws.com/museumpalazzo/tota-pulchra-es-cdg.mp3",
      },
    ],
  },
]

module.exports = { Rooms: Rooms };
