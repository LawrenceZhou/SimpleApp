//All the data of songs stored here.
const Rooms = [
  {
    name: "room1",
    intro: "room1_intro",
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
    name: "room2",
    intro: "room2_intro",

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
    name: "room3",
    background: "https://s3-us-west-2.amazonaws.com/museumpalazzo/sanctuary-santuario.JPG",
    pics: ["https://s3-us-west-2.amazonaws.com/museumpalazzo/sanctuary-santuario.JPG",
           "https://s3-us-west-2.amazonaws.com/museumpalazzo/singing-angels-and-birds.JPG",],
    intro: "room3_intro",
    songs: [
      {
        title: "Misericordia-1",
        album: "The Church",
        url: "https://s3-us-west-2.amazonaws.com/museumpalazzo/16+Misericordia_edit.mp3",
      },
      {
        title: "Misericordia-2",
        album: "The Church",
        url: "https://s3-us-west-2.amazonaws.com/museumpalazzo/17+Misericordia_edit.mp3",
      },
      {
        title: "Misericordia-3",
        album: "The Church",
        url: "https://s3-us-west-2.amazonaws.com/museumpalazzo/18+Misericordia_edit.mp3",
      },
    ],
  },

  {
    name: "room4",
    background: "https://s3-us-west-2.amazonaws.com/museumpalazzo/img_1872_med_hr.jpeg",
    pics: ["https://s3-us-west-2.amazonaws.com/museumpalazzo/img_1872_med_hr.jpeg",],
    intro: "room4_intro",
    songs: [
      {
        title: "Misericordio - Excerpt as audible in coretto",
        album: "Felice Anerio",
        url: "https://s3-us-west-2.amazonaws.com/museumpalazzo/07-misericordias-pa7-corett.mp3",
      },
    ]
  },
  {
    name: "room5",
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
    intro: "room5_intro",
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
    name: "room6",
    background: "https://s3-us-west-2.amazonaws.com/museumpalazzo/altemps-fresco2-lowResolution.jpg",
    pics: ["https://s3-us-west-2.amazonaws.com/museumpalazzo/altemps-fresco2-lowResolution.jpg",
           "https://s3-us-west-2.amazonaws.com/museumpalazzo/fresco-score_med_hr.jpeg",
           "https://s3-us-west-2.amazonaws.com/museumpalazzo/leoni-altempsCut.jpg",
           "https://s3-us-west-2.amazonaws.com/museumpalazzo/02-ottavio-leoni-portrait_med_hr.jpeg",
           "https://s3-us-west-2.amazonaws.com/museumpalazzo/18-ottavio-leoni-selfportra_med_hr.jpeg",],
    intro: "room6_intro",
    songs: [
      {
        title: "Canon a3",
        album: "-",
        url: "https://s3-us-west-2.amazonaws.com/museumpalazzo/ALTEMPS-CANON.mp3",
      },
    ],
  },
  {
    name: "room7",
    background: "https://s3-us-west-2.amazonaws.com/museumpalazzo/leoni-altempsCut.jpg",
    pics:["https://s3-us-west-2.amazonaws.com/museumpalazzo/leoni-altempsCut.jpg",
          "https://s3-us-west-2.amazonaws.com/museumpalazzo/altemps-goldoni-2_med_hr.jpeg",
          "https://s3-us-west-2.amazonaws.com/museumpalazzo/tota-pulchra-tenor1-p1_med_hr-2.jpeg",
          "https://s3-us-west-2.amazonaws.com/museumpalazzo/tota-pulchra-tenor2_med_hr.jpeg",
          "https://s3-us-west-2.amazonaws.com/museumpalazzo/altemps-tota-pulchra-organ_med_hr.jpeg",],
    intro: "room7_intro",
    songs: [
            {
              title: "Tota pulchra es",
              album: "GIovanni Angelo Attempts",
              url: "https://s3-us-west-2.amazonaws.com/museumpalazzo/tota-pulchra-es-altemps-dry.mp3",
            },
      ],
  },
  {
    name: "room8",
    background: "https://s3-us-west-2.amazonaws.com/museumpalazzo/felice-anerioCut.jpg",
    pics:["https://s3-us-west-2.amazonaws.com/museumpalazzo/felice-anerioCut.jpg",
          "https://s3-us-west-2.amazonaws.com/museumpalazzo/anerio-misericordio-soprano_med_hr.jpeg"],
    intro: "room8_intro",
    quote: "room8_quote",
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
    name: "room9",
    background: "https://s3-us-west-2.amazonaws.com/museumpalazzo/palestrina-ascende-organ_84_hr.jpeg",
    pics: ["https://s3-us-west-2.amazonaws.com/museumpalazzo/palestrina-ascende-organ_84_hr.jpeg",
           "https://s3-us-west-2.amazonaws.com/museumpalazzo/palestrina-ascende-alto_119_hr.jpeg",
           "https://s3-us-west-2.amazonaws.com/museumpalazzo/miserere-48-memorare-sopran_med_hr-2.jpeg",
           "https://s3-us-west-2.amazonaws.com/museumpalazzo/miserere-48-memorare-tenor2_med_hr-2.jpeg",
           "https://s3-us-west-2.amazonaws.com/museumpalazzo/miserere-48-memorare-alto_med_hr-2.jpeg",
           "https://s3-us-west-2.amazonaws.com/museumpalazzo/miserere-48-memorare-organ_med_hr-2.jpeg",],
    intro: "room9_intro",
    songs: [
            {
              title: "Tota pulchra es",
              album: "GIovanni Angelo Attempts",
              url: "https://s3-us-west-2.amazonaws.com/museumpalazzo/tota-pulchra-es-altemps-dry.mp3",
            },
          ]
  },
  {
    name: "room10",
    background: "https://s3-us-west-2.amazonaws.com/museumpalazzo/frescos_of_ignatius_of_loyo_med_hr.jpeg",
    pics: ["https://s3-us-west-2.amazonaws.com/museumpalazzo/frescos_of_ignatius_of_loyo_med_hr.jpeg",
           "https://s3-us-west-2.amazonaws.com/museumpalazzo/img_2037_med_hr.jpeg",
           "https://s3-us-west-2.amazonaws.com/museumpalazzo/volta-chiesa-del-gesu-bacic_med_hr.jpeg",
           "https://s3-us-west-2.amazonaws.com/museumpalazzo/img_2002_med_hr.jpeg",],
    intro: "room10_intro",
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
        title: "IR Model of Altemps",
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
