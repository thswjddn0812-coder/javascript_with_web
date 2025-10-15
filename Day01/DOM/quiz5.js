const data = [
  {
    color: "#18e4e6",
    avatar: "https://robohash.org/idducimusmagni.png?size=50x50&set=set1",
    name: "Martainn Swannie",
    university: "Wingate University",
    sentences:
      "Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus.",
    Email: "mswannie0@apple.com",
  },
  {
    color: "#6d5d93",
    avatar: "https://robohash.org/eosexpeditapossimus.png?size=50x50&set=set1",
    name: "Winthrop Alcide",
    university: "Slovak University of Technology in Bratislava",
    sentences: "Proin interdum mauris non ligula pellentesque ultrices.",
    Email: "walcide1@elegantthemes.com",
  },
  {
    color: "#b6148a",
    avatar: "https://robohash.org/expeditasuntaut.png?size=50x50&set=set1",
    name: "Elena Heifer",
    university: "Washburn University",
    sentences:
      "Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
    Email: "eheifer2@un.org",
  },
  {
    color: "#e699ee",
    avatar:
      "https://robohash.org/repellendusconsequaturdolorem.png?size=50x50&set=set1",
    name: "Vincenty Livezey",
    university: "Michigan State University",
    sentences:
      "Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy.",
    Email: "vlivezey3@npr.org",
  },
  {
    color: "#bf4ddb",
    avatar: "https://robohash.org/eaqueutquidem.png?size=50x50&set=set1",
    name: "Wenda Breadon",
    university: "Ferris State University",
    sentences:
      "Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum.",
    Email: "wbreadon4@weebly.com",
  },
  {
    color: "#f1fb91",
    avatar: "https://robohash.org/velatsed.png?size=50x50&set=set1",
    name: "Ingar Mackie",
    university: "University of Moncton, Shippagan",
    sentences:
      "Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio.",
    Email: "imackie5@ycombinator.com",
  },
  {
    color: "#ec0bb0",
    avatar: "https://robohash.org/quiconsequunturrerum.png?size=50x50&set=set1",
    name: "Lesya Lambrechts",
    university: "William Jewell College",
    sentences:
      "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum.",
    Email: "llambrechts6@list-manage.com",
  },
  {
    color: "#c7605f",
    avatar: "https://robohash.org/nullaadipiscidebitis.png?size=50x50&set=set1",
    name: "Judi Fewless",
    university: "Nagoya University",
    sentences:
      "In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc.",
    Email: "jfewless7@sphinn.com",
  },
  {
    color: "#e682d0",
    avatar: "https://robohash.org/namdoloresomnis.png?size=50x50&set=set1",
    name: "Park Lutz",
    university: "Pan Africa Christian University",
    sentences:
      "Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
    Email: "plutz8@wikispaces.com",
  },
  {
    color: "#d43cd2",
    avatar: "https://robohash.org/quiamolestiaeut.png?size=50x50&set=set1",
    name: "Maury Coombe",
    university: "Sikha 'O' Anushandhan University",
    sentences:
      "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus.",
    Email: "mcoombe9@parallels.com",
  },
  {
    color: "#039e33",
    avatar: "https://robohash.org/omnisrerumesse.png?size=50x50&set=set1",
    name: "Alastair Alliott",
    university: "Dai Ichi University, College of Technology",
    sentences:
      "Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
    Email: "aalliotta@hud.gov",
  },
  {
    color: "#b48b7d",
    avatar: "https://robohash.org/eumitaqueeaque.png?size=50x50&set=set1",
    name: "Sherwynd Spirritt",
    university: "Universidad Nacional Daniel Alcides Carrion",
    sentences:
      "Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
    Email: "sspirrittb@wufoo.com",
  },
  {
    color: "#dde9e5",
    avatar: "https://robohash.org/quisquamvoluptatem.png?size=50x50&set=set1",
    name: "Gualterio Casarini",
    university: "University of El Imam El Mahdi University",
    sentences: "Morbi a ipsum. Integer a nibh.",
    Email: "gcasarinic@webs.com",
  },
  {
    color: "#bf1ef1",
    avatar: "https://robohash.org/dictamaioresdolorum.png?size=50x50&set=set1",
    name: "Thalia Methley",
    university: "Indira Gandhi National Open University",
    sentences:
      "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
    Email: "tmethleyd@utexas.edu",
  },
  {
    color: "#41c89d",
    avatar: "https://robohash.org/iuresintaperiam.png?size=50x50&set=set1",
    name: "Nicko Elloway",
    university: "Fukuoka University",
    sentences: "Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.",
    Email: "nellowaye@arizona.edu",
  },
  {
    color: "#a0f8fe",
    avatar: "https://robohash.org/sedrerumquos.png?size=50x50&set=set1",
    name: "Mame Perryman",
    university: "Ripon College",
    sentences:
      "Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo.",
    Email: "mperrymanf@booking.com",
  },
  {
    color: "#5fbe7c",
    avatar: "https://robohash.org/facerepossimusea.png?size=50x50&set=set1",
    name: "Cyndy Hollingsby",
    university: "Veer Kunwar Singh University",
    sentences:
      "Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.",
    Email: "chollingsbyg@fotki.com",
  },
  {
    color: "#b4c347",
    avatar: "https://robohash.org/utomnisexpedita.png?size=50x50&set=set1",
    name: "Ramsay Valentinetti",
    university: "Islamic Azad University, Shirvan",
    sentences:
      "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc.",
    Email: "rvalentinettih@newsvine.com",
  },
  {
    color: "#0d5f82",
    avatar:
      "https://robohash.org/voluptassimiliquenostrum.png?size=50x50&set=set1",
    name: "Jaimie Thorndycraft",
    university: "Florida Metropolitan University, Tampa College Lakeland",
    sentences: "Sed ante. Vivamus tortor.",
    Email: "jthorndycrafti@dagondesign.com",
  },
  {
    color: "#15801c",
    avatar: "https://robohash.org/cumqueverovoluptas.png?size=50x50&set=set1",
    name: "Tatiania Lomas",
    university: "Business and Hotel Management School",
    sentences:
      "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus.",
    Email: "tlomasj@biglobe.ne.jp",
  },
  {
    color: "#68aaf1",
    avatar: "https://robohash.org/sedestut.png?size=50x50&set=set1",
    name: "Marlo MacFadyen",
    university:
      "Ecole pour les Etudes et la Recherche en Informatique et Electronique",
    sentences:
      "Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
    Email: "mmacfadyenk@ucoz.com",
  },
  {
    color: "#5298e7",
    avatar: "https://robohash.org/illumeligenditotam.png?size=50x50&set=set1",
    name: "Faulkner Libero",
    university: "Kocaeli University",
    sentences:
      "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
    Email: "fliberol@spiegel.de",
  },
  {
    color: "#33f9f3",
    avatar: "https://robohash.org/autdignissimosqui.png?size=50x50&set=set1",
    name: "Randolf Lancetter",
    university: "Trent University",
    sentences:
      "Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
    Email: "rlancetterm@bluehost.com",
  },
  {
    color: "#8f835a",
    avatar:
      "https://robohash.org/accusamusatqueexpedita.png?size=50x50&set=set1",
    name: "Wenona Munsey",
    university: "Rajamangala University of Technology, Lanna Chiang Rai",
    sentences:
      "Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.",
    Email: "wmunseyn@goo.gl",
  },
  {
    color: "#10e6f4",
    avatar: "https://robohash.org/excepturimagnamsit.png?size=50x50&set=set1",
    name: "Paulita Rissom",
    university: "Escuela Nacional de Estudios Superiores Unidad León",
    sentences:
      "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.",
    Email: "prissomo@netlog.com",
  },
  {
    color: "#337d16",
    avatar: "https://robohash.org/inquiamagnam.png?size=50x50&set=set1",
    name: "Ursola Nerger",
    university: "National Taichung Teachers College",
    sentences:
      "Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum.",
    Email: "unergerp@hao123.com",
  },
  {
    color: "#91a947",
    avatar: "https://robohash.org/estdolornihil.png?size=50x50&set=set1",
    name: "Padraig Raulin",
    university: "Universidad Autónoma de Santo Domingo",
    sentences:
      "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
    Email: "praulinq@list-manage.com",
  },
  {
    color: "#679ec6",
    avatar: "https://robohash.org/eiusquiet.png?size=50x50&set=set1",
    name: "Gerti Brear",
    university: "University of Veterinary & Animal Science",
    sentences:
      "Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.",
    Email: "gbrearr@google.co.jp",
  },
  {
    color: "#6b1cda",
    avatar: "https://robohash.org/laboriosamquianobis.png?size=50x50&set=set1",
    name: "Jemmy Mainstone",
    university: "University Marien Ngouabi Brazzaville",
    sentences:
      "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
    Email: "jmainstones@uiuc.edu",
  },
  {
    color: "#720b57",
    avatar: "https://robohash.org/fugitnihilbeatae.png?size=50x50&set=set1",
    name: "Dun Adelberg",
    university: "Universidad Técnica Particular de Loja",
    sentences:
      "Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio.",
    Email: "dadelbergt@go.com",
  },
  {
    color: "#a53dcf",
    avatar:
      "https://robohash.org/inventoreperspiciatisdolorum.png?size=50x50&set=set1",
    name: "Karen Robard",
    university: "NED University of Engineering and Technology Karachi",
    sentences:
      "In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem.",
    Email: "krobardu@tmall.com",
  },
  {
    color: "#9a8a42",
    avatar: "https://robohash.org/quasquaeassumenda.png?size=50x50&set=set1",
    name: "Marion Corrington",
    university: "Universidad Pública de Navarra",
    sentences:
      "Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
    Email: "mcorringtonv@indiatimes.com",
  },
  {
    color: "#3d58e3",
    avatar:
      "https://robohash.org/sedblanditiisrecusandae.png?size=50x50&set=set1",
    name: "Bernetta Clace",
    university: "University of Milan - Bicocca",
    sentences:
      "Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst.",
    Email: "bclacew@oracle.com",
  },
  {
    color: "#c02f55",
    avatar:
      "https://robohash.org/fugiatnumquamrepudiandae.png?size=50x50&set=set1",
    name: "Devonna Muckley",
    university: "Universidade de Mogi das Cruzes",
    sentences:
      "Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.",
    Email: "dmuckleyx@economist.com",
  },
  {
    color: "#de5b47",
    avatar:
      "https://robohash.org/consequaturmolestiaeet.png?size=50x50&set=set1",
    name: "Tobiah Cranna",
    university: "Universidad Tecnológica del Centro",
    sentences:
      "Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus.",
    Email: "tcrannay@phoca.cz",
  },
  {
    color: "#ffda50",
    avatar:
      "https://robohash.org/suntplaceatperferendis.png?size=50x50&set=set1",
    name: "Bo Handscombe",
    university: "Université du Sud, Toulon et Var",
    sentences:
      "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
    Email: "bhandscombez@wiley.com",
  },
  {
    color: "#502956",
    avatar: "https://robohash.org/namquidemmagnam.png?size=50x50&set=set1",
    name: "Lynn Corrao",
    university: "Gdansk Management College",
    sentences:
      "Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
    Email: "lcorrao10@irs.gov",
  },
  {
    color: "#9bea2b",
    avatar:
      "https://robohash.org/exercitationemquidemeos.png?size=50x50&set=set1",
    name: "Augusto Joriot",
    university: "The Global College Lahore",
    sentences:
      "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst.",
    Email: "ajoriot11@goodreads.com",
  },
  {
    color: "#2aa030",
    avatar: "https://robohash.org/beataemolestiasoptio.png?size=50x50&set=set1",
    name: "Clevey Mabbott",
    university: "Universidad Metropolitana",
    sentences:
      "Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst.",
    Email: "cmabbott12@state.gov",
  },
  {
    color: "#158a11",
    avatar: "https://robohash.org/accusamusetnisi.png?size=50x50&set=set1",
    name: "Roscoe Haldane",
    university: "Mankato State University",
    sentences:
      "Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim.",
    Email: "rhaldane13@parallels.com",
  },
  {
    color: "#cd34fe",
    avatar: "https://robohash.org/voluptatemodioest.png?size=50x50&set=set1",
    name: "Angelika Jansky",
    university: "Zuyd University",
    sentences:
      "In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.",
    Email: "ajansky14@marriott.com",
  },
  {
    color: "#0bcf12",
    avatar: "https://robohash.org/utaspernaturest.png?size=50x50&set=set1",
    name: "Livvyy Rumming",
    university: "Ecole des Hautes Etudes Commerciales",
    sentences:
      "Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.",
    Email: "lrumming15@paginegialle.it",
  },
  {
    color: "#886a1a",
    avatar: "https://robohash.org/mollitiaetipsa.png?size=50x50&set=set1",
    name: "Rudy Godbert",
    university: "St. Louis Christian College",
    sentences:
      "In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.",
    Email: "rgodbert16@ucoz.com",
  },
  {
    color: "#7916d8",
    avatar:
      "https://robohash.org/praesentiumaspernaturnostrum.png?size=50x50&set=set1",
    name: "Percival Triplett",
    university: "University of Agriculture Abeokuta",
    sentences:
      "Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.",
    Email: "ptriplett17@cyberchimps.com",
  },
  {
    color: "#c3fd67",
    avatar:
      "https://robohash.org/perferendispariaturharum.png?size=50x50&set=set1",
    name: "Gisele Lovelace",
    university: "Mount Kenya University",
    sentences:
      "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
    Email: "glovelace18@ted.com",
  },
  {
    color: "#e9a462",
    avatar: "https://robohash.org/aliquamadsuscipit.png?size=50x50&set=set1",
    name: "Brandy Fairbairn",
    university: "Astrakhan State University",
    sentences:
      "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.",
    Email: "bfairbairn19@networkadvertising.org",
  },
  {
    color: "#ddcc62",
    avatar:
      "https://robohash.org/repudiandaenihilalias.png?size=50x50&set=set1",
    name: "Thaine Keymer",
    university: "Emeishan Buddhist College",
    sentences:
      "Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh.",
    Email: "tkeymer1a@friendfeed.com",
  },
  {
    color: "#e37b7d",
    avatar: "https://robohash.org/quiatreiciendis.png?size=50x50&set=set1",
    name: "Hally Emson",
    university: "Konan Women's University",
    sentences:
      "Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.",
    Email: "hemson1b@rakuten.co.jp",
  },
  {
    color: "#e251e5",
    avatar:
      "https://robohash.org/inciduntconsequunturvoluptatem.png?size=50x50&set=set1",
    name: "Georgia Morshead",
    university: "Claremont Graduate University",
    sentences:
      "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl.",
    Email: "gmorshead1c@51.la",
  },
  {
    color: "#cae478",
    avatar: "https://robohash.org/quosdolorsint.png?size=50x50&set=set1",
    name: "Marga Lenihan",
    university: "Pillsbury Baptist Bible College",
    sentences:
      "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis.",
    Email: "mlenihan1d@businesswire.com",
  },
  {
    color: "#fc3e71",
    avatar: "https://robohash.org/dictacumquedebitis.png?size=50x50&set=set1",
    name: "Nelia Tolefree",
    university: "Miyagi Gakuin Women's College",
    sentences:
      "Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
    Email: "ntolefree1e@wired.com",
  },
  {
    color: "#357f02",
    avatar: "https://robohash.org/hicnontotam.png?size=50x50&set=set1",
    name: "Hobie Woodyear",
    university: "University of Basrah",
    sentences:
      "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.",
    Email: "hwoodyear1f@skype.com",
  },
  {
    color: "#1a88cd",
    avatar: "https://robohash.org/quiharumvoluptatem.png?size=50x50&set=set1",
    name: "Maddy Skottle",
    university: "Universidad Yacambu",
    sentences:
      "In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
    Email: "mskottle1g@blogs.com",
  },
  {
    color: "#ed3f11",
    avatar:
      "https://robohash.org/repellendusexcepturifuga.png?size=50x50&set=set1",
    name: "Indira Wight",
    university: "National Taiwan University of Science and Technology",
    sentences:
      "Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
    Email: "iwight1h@discovery.com",
  },
  {
    color: "#c1d89a",
    avatar: "https://robohash.org/consequunturundequod.png?size=50x50&set=set1",
    name: "Paulie Ambler",
    university: "Shanxi University",
    sentences:
      "Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat.",
    Email: "pambler1i@nydailynews.com",
  },
  {
    color: "#134f60",
    avatar: "https://robohash.org/natusetmollitia.png?size=50x50&set=set1",
    name: "Elene Joplin",
    university: "Fachhochschule für das öffentliche Bibliothekswesen Bonn",
    sentences:
      "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.",
    Email: "ejoplin1j@sina.com.cn",
  },
  {
    color: "#3d312b",
    avatar: "https://robohash.org/errorexpeditaculpa.png?size=50x50&set=set1",
    name: "Pansy Spriddle",
    university: "Toyo University",
    sentences:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
    Email: "pspriddle1k@altervista.org",
  },
  {
    color: "#4b95eb",
    avatar: "https://robohash.org/etiustocorrupti.png?size=50x50&set=set1",
    name: "Arturo Radbourne",
    university: "Universidad de Viña del Mar",
    sentences:
      "Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh.",
    Email: "aradbourne1l@sogou.com",
  },
  {
    color: "#70ba83",
    avatar: "https://robohash.org/corruptisintamet.png?size=50x50&set=set1",
    name: "Wilhelmine McDonell",
    university: "Technical University of Warsaw",
    sentences:
      "Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum.",
    Email: "wmcdonell1m@youku.com",
  },
  {
    color: "#462775",
    avatar: "https://robohash.org/etestconsequuntur.png?size=50x50&set=set1",
    name: "Clarisse Bedson",
    university: "Ecole Supérieure d'Electronique de l'Ouest",
    sentences:
      "Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
    Email: "cbedson1n@posterous.com",
  },
  {
    color: "#139a28",
    avatar:
      "https://robohash.org/delectusvoluptatesminima.png?size=50x50&set=set1",
    name: "Helenka Crewe",
    university: "Sebatian Kolowa University College",
    sentences:
      "Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla.",
    Email: "hcrewe1o@uol.com.br",
  },
  {
    color: "#5efe79",
    avatar: "https://robohash.org/deseruntsedfacilis.png?size=50x50&set=set1",
    name: "Amos O'Halligan",
    university: "University of Hawaii - Hilo",
    sentences:
      "Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
    Email: "aohalligan1p@jimdo.com",
  },
  {
    color: "#fbf054",
    avatar: "https://robohash.org/uterrormaxime.png?size=50x50&set=set1",
    name: "Ealasaid Tonna",
    university: "College of St. Joseph",
    sentences: "Etiam vel augue. Vestibulum rutrum rutrum neque.",
    Email: "etonna1q@digg.com",
  },
  {
    color: "#38eb70",
    avatar: "https://robohash.org/quodnobislaudantium.png?size=50x50&set=set1",
    name: "Caryn Eunson",
    university: "Wilmington College",
    sentences: "Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
    Email: "ceunson1r@wiley.com",
  },
  {
    color: "#858a4e",
    avatar: "https://robohash.org/etsuntqui.png?size=50x50&set=set1",
    name: "Maisie Caccavella",
    university: "Royal Academy of Music, University of London",
    sentences:
      "Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue.",
    Email: "mcaccavella1s@hostgator.com",
  },
  {
    color: "#9b56df",
    avatar: "https://robohash.org/atarchitectoquaerat.png?size=50x50&set=set1",
    name: "Terra Farden",
    university: "Université du Québec à Trois-Rivières",
    sentences:
      "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue.",
    Email: "tfarden1t@mlb.com",
  },
  {
    color: "#633595",
    avatar: "https://robohash.org/quisintincidunt.png?size=50x50&set=set1",
    name: "Justinn Alliker",
    university: "Universidad Nacional de Chimborazo",
    sentences:
      "In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.",
    Email: "jalliker1u@bbb.org",
  },
  {
    color: "#0c28fa",
    avatar: "https://robohash.org/numquametdolor.png?size=50x50&set=set1",
    name: "Sarita Schoffler",
    university: "Universidade Potiguar",
    sentences:
      "Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.",
    Email: "sschoffler1v@artisteer.com",
  },
  {
    color: "#7d8e9c",
    avatar:
      "https://robohash.org/voluptasveniamexercitationem.png?size=50x50&set=set1",
    name: "Eada Parfett",
    university: "Princess Sumaya University for Technology",
    sentences:
      "Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst.",
    Email: "eparfett1w@npr.org",
  },
  {
    color: "#0e267d",
    avatar:
      "https://robohash.org/doloresdoloresaccusantium.png?size=50x50&set=set1",
    name: "Nissa Kenneford",
    university: "Ahmadu Bello University",
    sentences:
      "Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.",
    Email: "nkenneford1x@gmpg.org",
  },
  {
    color: "#78b7e5",
    avatar:
      "https://robohash.org/perspiciatismaximemaiores.png?size=50x50&set=set1",
    name: "Brena Hasted",
    university: "Benedictine College",
    sentences: "Quisque ut erat. Curabitur gravida nisi at nibh.",
    Email: "bhasted1y@people.com.cn",
  },
  {
    color: "#5c8419",
    avatar: "https://robohash.org/estrationeea.png?size=50x50&set=set1",
    name: "Keene Montel",
    university: "Universidad ICESI",
    sentences:
      "Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
    Email: "kmontel1z@unc.edu",
  },
  {
    color: "#f6b6df",
    avatar: "https://robohash.org/harumvoluptatumqui.png?size=50x50&set=set1",
    name: "Danit Wallwood",
    university: "University of Food Technology",
    sentences:
      "Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
    Email: "dwallwood20@com.com",
  },
  {
    color: "#e1b43e",
    avatar: "https://robohash.org/omnisnonlaborum.png?size=50x50&set=set1",
    name: "Giulietta Medcalf",
    university: "Doane College",
    sentences:
      "Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.",
    Email: "gmedcalf21@technorati.com",
  },
  {
    color: "#e0d970",
    avatar: "https://robohash.org/natusrecusandaesint.png?size=50x50&set=set1",
    name: "Natala Downey",
    university: "Winthrop University",
    sentences:
      "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
    Email: "ndowney22@squidoo.com",
  },
  {
    color: "#4637dc",
    avatar: "https://robohash.org/corporisquifacere.png?size=50x50&set=set1",
    name: "Cleon Laurenzi",
    university: "University of Pittsburgh at Greensburg",
    sentences:
      "Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt.",
    Email: "claurenzi23@paginegialle.it",
  },
  {
    color: "#b151b9",
    avatar:
      "https://robohash.org/autperspiciatisvoluptatibus.png?size=50x50&set=set1",
    name: "Ninetta Lishmund",
    university: "Centre Universitaire de Jijel",
    sentences:
      "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus.",
    Email: "nlishmund24@paginegialle.it",
  },
  {
    color: "#cd0860",
    avatar:
      "https://robohash.org/voluptasnequemollitia.png?size=50x50&set=set1",
    name: "Nefen Debell",
    university: "Arak University of Technology",
    sentences:
      "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo.",
    Email: "ndebell25@rakuten.co.jp",
  },
  {
    color: "#f55628",
    avatar: "https://robohash.org/culpaullamdolores.png?size=50x50&set=set1",
    name: "Britta Odger",
    university: "Islamic Azad University, Lahijan",
    sentences:
      "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum.",
    Email: "bodger26@gravatar.com",
  },
  {
    color: "#cb74c8",
    avatar: "https://robohash.org/etdistinctiosed.png?size=50x50&set=set1",
    name: "Hermon Halford",
    university: "Politeknik Pos Indonesia",
    sentences:
      "Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo.",
    Email: "hhalford27@spiegel.de",
  },
  {
    color: "#f7d238",
    avatar: "https://robohash.org/quibusdamestipsa.png?size=50x50&set=set1",
    name: "Gerhard Mendes",
    university: "The Petroleum Institute",
    sentences:
      "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum.",
    Email: "gmendes28@fotki.com",
  },
  {
    color: "#ea0dc4",
    avatar: "https://robohash.org/delectuslaborebeatae.png?size=50x50&set=set1",
    name: "Nicolle Jeffs",
    university: "KDU College Sdn Bhd",
    sentences:
      "Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.",
    Email: "njeffs29@ox.ac.uk",
  },
  {
    color: "#d8706c",
    avatar: "https://robohash.org/consequunturidet.png?size=50x50&set=set1",
    name: "Enrique Garrod",
    university: "Instituto Tecnológico de Buenos Aires",
    sentences:
      "Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend.",
    Email: "egarrod2a@answers.com",
  },
  {
    color: "#4547a6",
    avatar:
      "https://robohash.org/nonrepellatlaudantium.png?size=50x50&set=set1",
    name: "Bren Weatherhogg",
    university: "Alaska Pacific University",
    sentences:
      "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.",
    Email: "bweatherhogg2b@npr.org",
  },
  {
    color: "#56351b",
    avatar: "https://robohash.org/doloresquasimodi.png?size=50x50&set=set1",
    name: "Prudence Cesaric",
    university: "Hochschule Bremerhaven",
    sentences:
      "Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.",
    Email: "pcesaric2c@webmd.com",
  },
  {
    color: "#5d424c",
    avatar:
      "https://robohash.org/doloremrepellendusaccusantium.png?size=50x50&set=set1",
    name: "Joelly Jan",
    university: "Beloit College",
    sentences:
      "Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.",
    Email: "jjan2d@umich.edu",
  },
  {
    color: "#c242ff",
    avatar: "https://robohash.org/optiodictaillo.png?size=50x50&set=set1",
    name: "Aindrea Ackerman",
    university: "Universidad Finis Terrae",
    sentences:
      "Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus.",
    Email: "aackerman2e@oaic.gov.au",
  },
  {
    color: "#7addf4",
    avatar: "https://robohash.org/eumutunde.png?size=50x50&set=set1",
    name: "Laurel Maffia",
    university: "Aichi Institute of Technology",
    sentences:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna.",
    Email: "lmaffia2f@homestead.com",
  },
  {
    color: "#f48629",
    avatar: "https://robohash.org/corporisnemooptio.png?size=50x50&set=set1",
    name: "Orville Karby",
    university: "Azerbaijan Technology University",
    sentences:
      "Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
    Email: "okarby2g@wikia.com",
  },
  {
    color: "#08aa7f",
    avatar:
      "https://robohash.org/voluptatesexpeditaillum.png?size=50x50&set=set1",
    name: "Ahmad Marrian",
    university: "Shinshu University",
    sentences:
      "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit.",
    Email: "amarrian2h@merriam-webster.com",
  },
  {
    color: "#dc02fa",
    avatar:
      "https://robohash.org/inciduntcorporiserror.png?size=50x50&set=set1",
    name: "Benedicta Heasley",
    university: "Sakarya University",
    sentences:
      "Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.",
    Email: "bheasley2i@google.de",
  },
  {
    color: "#f35f49",
    avatar: "https://robohash.org/enimipsamet.png?size=50x50&set=set1",
    name: "Riordan Gillie",
    university: "Woosuk University",
    sentences:
      "Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.",
    Email: "rgillie2j@last.fm",
  },
  {
    color: "#112e7d",
    avatar: "https://robohash.org/voluptatererumnon.png?size=50x50&set=set1",
    name: "Ailis Walthew",
    university: "Ebonyi State University",
    sentences:
      "Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.",
    Email: "awalthew2k@over-blog.com",
  },
  {
    color: "#c12491",
    avatar: "https://robohash.org/eligendieaqui.png?size=50x50&set=set1",
    name: "Helaina Sartin",
    university: "Facultés Universitaires Saint-Louis",
    sentences:
      "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.",
    Email: "hsartin2l@omniture.com",
  },
  {
    color: "#31fef2",
    avatar: "https://robohash.org/eumillodoloribus.png?size=50x50&set=set1",
    name: "Shaw Lasham",
    university: "Elisabeth University of Music",
    sentences:
      "In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    Email: "slasham2m@jalbum.net",
  },
  {
    color: "#edabee",
    avatar: "https://robohash.org/eiusquosint.png?size=50x50&set=set1",
    name: "Elaine Boule",
    university: "Colby College",
    sentences:
      "Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend.",
    Email: "eboule2n@surveymonkey.com",
  },
  {
    color: "#8d400c",
    avatar: "https://robohash.org/inciduntquisquamunde.png?size=50x50&set=set1",
    name: "Somerset Dalyiel",
    university: "Kookmin University",
    sentences:
      "Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
    Email: "sdalyiel2o@ca.gov",
  },
  {
    color: "#f15cad",
    avatar:
      "https://robohash.org/inventorevoluptatequidem.png?size=50x50&set=set1",
    name: "Harriott Petzold",
    university: "Jishou University",
    sentences:
      "Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
    Email: "hpetzold2p@un.org",
  },
  {
    color: "#69baf6",
    avatar:
      "https://robohash.org/architectodictaquidem.png?size=50x50&set=set1",
    name: "Glynis Orhrt",
    university: "Belarussian State Technological University",
    sentences:
      "Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum.",
    Email: "gorhrt2q@topsy.com",
  },
  {
    color: "#644e75",
    avatar:
      "https://robohash.org/eligendimolestiasexplicabo.png?size=50x50&set=set1",
    name: "Virginia Chazerand",
    university: "Universitas Negeri Makassar",
    sentences:
      "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
    Email: "vchazerand2r@java.com",
  },
  {
    color: "#d6bcfa",
    avatar: "https://robohash.org/veniamutaut.png?size=50x50&set=set1",
    name: "Siegfried Comberbach",
    university: "King Mongkut's University of Technology Ladkrabang",
    sentences:
      "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum.",
    Email: "scomberbach2s@dmoz.org",
  },
  {
    color: "#29777b",
    avatar:
      "https://robohash.org/reprehenderitinadipisci.png?size=50x50&set=set1",
    name: "Brad Rabat",
    university: "Tallinn University",
    sentences:
      "Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl.",
    Email: "brabat2t@shutterfly.com",
  },
  {
    color: "#88f3f9",
    avatar:
      "https://robohash.org/recusandaelaudantiumitaque.png?size=50x50&set=set1",
    name: "Merl Milbank",
    university: "Hannibal-Lagrange College",
    sentences: "Morbi vel lectus in quam fringilla rhoncus.",
    Email: "mmilbank2u@list-manage.com",
  },
  {
    color: "#d64cad",
    avatar: "https://robohash.org/quosquisdicta.png?size=50x50&set=set1",
    name: "Dannie Bridell",
    university: "National Chung Hsing University, Taichung",
    sentences:
      "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.",
    Email: "dbridell2v@bbc.co.uk",
  },
  {
    color: "#33c195",
    avatar:
      "https://robohash.org/voluptatumdistinctionon.png?size=50x50&set=set1",
    name: "Tracie Dunkerly",
    university: "Potti Sreeramulu Telugu University",
    sentences:
      "Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.",
    Email: "tdunkerly2w@wordpress.org",
  },
  {
    color: "#6942ef",
    avatar:
      "https://robohash.org/doloremconsequunturveniam.png?size=50x50&set=set1",
    name: "Bent Duffyn",
    university: "University of Texas at Tyler",
    sentences:
      "Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.",
    Email: "bduffyn2x@census.gov",
  },
  {
    color: "#3dc802",
    avatar: "https://robohash.org/asperioresestamet.png?size=50x50&set=set1",
    name: "Ingrid Piwall",
    university: "Inner Mongolia Normal University",
    sentences:
      "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.",
    Email: "ipiwall2y@eventbrite.com",
  },
  {
    color: "#36ae49",
    avatar:
      "https://robohash.org/quisquamlaudantiumeaque.png?size=50x50&set=set1",
    name: "Earlie Dewhurst",
    university: "National Chung Cheng University",
    sentences:
      "Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
    Email: "edewhurst2z@ask.com",
  },
  {
    color: "#e41f69",
    avatar:
      "https://robohash.org/harumfugiatvoluptatum.png?size=50x50&set=set1",
    name: "Bradney MacGovern",
    university: "Gifu Keizai University",
    sentences:
      "Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.",
    Email: "bmacgovern30@gnu.org",
  },
  {
    color: "#84e04d",
    avatar: "https://robohash.org/nequeetsit.png?size=50x50&set=set1",
    name: "Zsa zsa Carverhill",
    university: "Instituto Tecnológico de Aguascalientes",
    sentences:
      "Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus.",
    Email: "zzsa31@ycombinator.com",
  },
  {
    color: "#708a41",
    avatar:
      "https://robohash.org/temporibuslaudantiumlaboriosam.png?size=50x50&set=set1",
    name: "Ronnie Tofanini",
    university: "Universidad Nacional de Quilmes",
    sentences:
      "Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.",
    Email: "rtofanini32@friendfeed.com",
  },
  {
    color: "#63e3d4",
    avatar: "https://robohash.org/etcupiditatenam.png?size=50x50&set=set1",
    name: "Rufus Georgievski",
    university: "Moldova State University",
    sentences:
      "Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero.",
    Email: "rgeorgievski33@reference.com",
  },
  {
    color: "#8b3e8c",
    avatar: "https://robohash.org/eainventoresed.png?size=50x50&set=set1",
    name: "Julietta Howbrook",
    university: "College of St. Benedict and St. John's University",
    sentences:
      "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.",
    Email: "jhowbrook34@nhs.uk",
  },
  {
    color: "#5e7e64",
    avatar: "https://robohash.org/eosveromaxime.png?size=50x50&set=set1",
    name: "Nikolai Basant",
    university: "School of Banking and Management in Cracow",
    sentences:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo.",
    Email: "nbasant35@rediff.com",
  },
  {
    color: "#b33a76",
    avatar:
      "https://robohash.org/ipsumvoluptatemconsequatur.png?size=50x50&set=set1",
    name: "Karlene Shinn",
    university: "Shujitsu Women's University",
    sentences:
      "Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
    Email: "kshinn36@salon.com",
  },
  {
    color: "#d5fef6",
    avatar: "https://robohash.org/similiquesaepeut.png?size=50x50&set=set1",
    name: "Vilma Torfin",
    university: "Universitas Bojonegoro",
    sentences:
      "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
    Email: "vtorfin37@zdnet.com",
  },
  {
    color: "#d94cb1",
    avatar: "https://robohash.org/adipisciquoet.png?size=50x50&set=set1",
    name: "Eloisa Jouannin",
    university: "Jacobs University Bremen",
    sentences:
      "Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.",
    Email: "ejouannin38@issuu.com",
  },
  {
    color: "#66f9aa",
    avatar: "https://robohash.org/quoarchitectosint.png?size=50x50&set=set1",
    name: "Yule Rutley",
    university: "National Taiwan Ocean University",
    sentences: "Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
    Email: "yrutley39@mail.ru",
  },
  {
    color: "#2eb4d1",
    avatar: "https://robohash.org/quiprovidentfugiat.png?size=50x50&set=set1",
    name: "Ondrea Worlidge",
    university: "Yeshiva University",
    sentences:
      "Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis.",
    Email: "oworlidge3a@rambler.ru",
  },
  {
    color: "#342d70",
    avatar: "https://robohash.org/porroenimsit.png?size=50x50&set=set1",
    name: "Marillin Gammett",
    university: "Khomeinishahr Payame Noor University",
    sentences:
      "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh.",
    Email: "mgammett3b@amazon.co.jp",
  },
  {
    color: "#e71303",
    avatar: "https://robohash.org/laboriosamquasiiure.png?size=50x50&set=set1",
    name: "Forrester Weeks",
    university: "Johannes-Gutenberg Universität Mainz",
    sentences:
      "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.",
    Email: "fweeks3c@youtu.be",
  },
  {
    color: "#c4863f",
    avatar: "https://robohash.org/repellendusautquae.png?size=50x50&set=set1",
    name: "Cleavland Yakushkin",
    university: "Märkische Fachhochschule Iserlohn",
    sentences:
      "Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo.",
    Email: "cyakushkin3d@yale.edu",
  },
  {
    color: "#204b56",
    avatar: "https://robohash.org/porrosedaliquam.png?size=50x50&set=set1",
    name: "Laurene Crick",
    university: "Khana-e-Noor Institute of Higher Education",
    sentences:
      "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
    Email: "lcrick3e@spotify.com",
  },
  {
    color: "#2e54ff",
    avatar: "https://robohash.org/ametpariaturnisi.png?size=50x50&set=set1",
    name: "Jephthah Sallans",
    university: "Mendeleev Russian University of Chemical Technology",
    sentences:
      "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
    Email: "jsallans3f@bing.com",
  },
  {
    color: "#ed6393",
    avatar: "https://robohash.org/quamminimasuscipit.png?size=50x50&set=set1",
    name: "Ailyn Weekes",
    university: "Aichi Prefectural University of Fine Arts & Music",
    sentences:
      "Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.",
    Email: "aweekes3g@techcrunch.com",
  },
  {
    color: "#099377",
    avatar: "https://robohash.org/etidaut.png?size=50x50&set=set1",
    name: "Celina Bedberry",
    university: "Universidad Iberoamericana",
    sentences:
      "Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.",
    Email: "cbedberry3h@nps.gov",
  },
  {
    color: "#e744fb",
    avatar: "https://robohash.org/oditestsequi.png?size=50x50&set=set1",
    name: "Tildy Pope",
    university: "Mahsa University College for Health and Medical Science",
    sentences:
      "Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    Email: "tpope3i@berkeley.edu",
  },
  {
    color: "#d6086d",
    avatar: "https://robohash.org/maioressediusto.png?size=50x50&set=set1",
    name: "Nadean Arnholz",
    university: "Philosophisch-Theologische Hochschule SVD Sankt Augustin",
    sentences:
      "Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
    Email: "narnholz3j@irs.gov",
  },
  {
    color: "#dc5271",
    avatar: "https://robohash.org/utidquibusdam.png?size=50x50&set=set1",
    name: "Nora Moodycliffe",
    university: "University of Gastronomic Sciences",
    sentences:
      "Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.",
    Email: "nmoodycliffe3k@gizmodo.com",
  },
  {
    color: "#b75007",
    avatar: "https://robohash.org/estminimarem.png?size=50x50&set=set1",
    name: "Dov Denver",
    university: "Hanoi University of Science",
    sentences:
      "Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.",
    Email: "ddenver3l@wired.com",
  },
  {
    color: "#f887e0",
    avatar: "https://robohash.org/modienimfugiat.png?size=50x50&set=set1",
    name: "Ethan Philcock",
    university: "Institute of Teachers Education, Ilmu Khas",
    sentences:
      "Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.",
    Email: "ephilcock3m@mlb.com",
  },
  {
    color: "#3956d3",
    avatar: "https://robohash.org/dictaculpaaut.png?size=50x50&set=set1",
    name: "Hyman Lamb-shine",
    university: "Moscow State University of Ecological Engineering",
    sentences:
      "In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
    Email: "hlambshine3n@squidoo.com",
  },
  {
    color: "#d10034",
    avatar: "https://robohash.org/voluptasipsumquo.png?size=50x50&set=set1",
    name: "Susanne Gabriely",
    university: "University of Gujrat",
    sentences:
      "Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet.",
    Email: "sgabriely3o@google.com.hk",
  },
  {
    color: "#24def5",
    avatar: "https://robohash.org/enimadipisciet.png?size=50x50&set=set1",
    name: "Chrisy Tracey",
    university: "University of Greenwich",
    sentences:
      "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius.",
    Email: "ctracey3p@webmd.com",
  },
  {
    color: "#182909",
    avatar: "https://robohash.org/quamsuscipitquidem.png?size=50x50&set=set1",
    name: "Brandy Marunchak",
    university: "Zabol University",
    sentences:
      "Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
    Email: "bmarunchak3q@flickr.com",
  },
  {
    color: "#a8619a",
    avatar: "https://robohash.org/nostrumvelitfacilis.png?size=50x50&set=set1",
    name: "Robin Glazer",
    university: "Universidad Mariano Egaña",
    sentences:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.",
    Email: "rglazer3r@360.cn",
  },
  {
    color: "#96e8bd",
    avatar: "https://robohash.org/etcommodieligendi.png?size=50x50&set=set1",
    name: "Annice Budgett",
    university: "Northern Michigan University",
    sentences:
      "Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
    Email: "abudgett3s@typepad.com",
  },
  {
    color: "#8e20cb",
    avatar: "https://robohash.org/eteumincidunt.png?size=50x50&set=set1",
    name: "Alidia Rodell",
    university: "Guru Gobind Singh Indraprastha University",
    sentences:
      "Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat.",
    Email: "arodell3t@mayoclinic.com",
  },
  {
    color: "#c2c8c0",
    avatar: "https://robohash.org/etipsumquas.png?size=50x50&set=set1",
    name: "Leupold Moodie",
    university: "Notre Dame College",
    sentences:
      "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
    Email: "lmoodie3u@paypal.com",
  },
  {
    color: "#4e82a2",
    avatar: "https://robohash.org/accusamusmodised.png?size=50x50&set=set1",
    name: "Hill Bartolomeazzi",
    university: "Indian Institute of Technology, Roorkee",
    sentences:
      "Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue.",
    Email: "hbartolomeazzi3v@mozilla.org",
  },
  {
    color: "#074394",
    avatar:
      "https://robohash.org/voluptasveritatispariatur.png?size=50x50&set=set1",
    name: "Lari Beagrie",
    university: "University of Alabama - Birmingham",
    sentences:
      "Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.",
    Email: "lbeagrie3w@zimbio.com",
  },
  {
    color: "#78e01c",
    avatar: "https://robohash.org/excepturieaquebeatae.png?size=50x50&set=set1",
    name: "Pincas Rowbottam",
    university: "Godfrey Okoye University ",
    sentences:
      "Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
    Email: "prowbottam3x@ted.com",
  },
  {
    color: "#1b8c2b",
    avatar:
      "https://robohash.org/inventoreadipiscisunt.png?size=50x50&set=set1",
    name: "Maximilianus Rutledge",
    university: "Augustana Hochschule Neuendettelsau",
    sentences:
      "Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
    Email: "mrutledge3y@amazon.com",
  },
  {
    color: "#87a3fb",
    avatar:
      "https://robohash.org/pariaturquisquamconsequatur.png?size=50x50&set=set1",
    name: "Horace Chazier",
    university: "Temple University",
    sentences:
      "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.",
    Email: "hchazier3z@imdb.com",
  },
  {
    color: "#4f59d2",
    avatar: "https://robohash.org/velvoluptasincidunt.png?size=50x50&set=set1",
    name: "Tabbatha Spiteri",
    university: "Universitas Islam Riau",
    sentences:
      "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
    Email: "tspiteri40@mayoclinic.com",
  },
  {
    color: "#b5d3f8",
    avatar: "https://robohash.org/etnihilpraesentium.png?size=50x50&set=set1",
    name: "Rebe Simnor",
    university: "Jones International University",
    sentences:
      "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt.",
    Email: "rsimnor41@hibu.com",
  },
  {
    color: "#7daa58",
    avatar: "https://robohash.org/eoseiusquia.png?size=50x50&set=set1",
    name: "Shawn Delagnes",
    university: "Delaware State University",
    sentences:
      "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet.",
    Email: "sdelagnes42@marriott.com",
  },
  {
    color: "#36e5b1",
    avatar:
      "https://robohash.org/numquamdignissimoseos.png?size=50x50&set=set1",
    name: "Stanwood Prettyjohns",
    university: "Fitchburg State College",
    sentences:
      "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
    Email: "sprettyjohns43@senate.gov",
  },
  {
    color: "#343577",
    avatar: "https://robohash.org/nemoipsumvelit.png?size=50x50&set=set1",
    name: "Briggs Bukac",
    university: "Wuhan University of Technology",
    sentences:
      "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
    Email: "bbukac44@google.pl",
  },
  {
    color: "#af057f",
    avatar: "https://robohash.org/modiexpeditaminima.png?size=50x50&set=set1",
    name: "Abeu Becerra",
    university: "International School of Management",
    sentences:
      "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis.",
    Email: "abecerra45@google.com.au",
  },
  {
    color: "#a7e5bd",
    avatar: "https://robohash.org/abdoloreminventore.png?size=50x50&set=set1",
    name: "Lorin Sponder",
    university: "Kashan University of Medical Sciences",
    sentences:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus.",
    Email: "lsponder46@nature.com",
  },
  {
    color: "#a27deb",
    avatar: "https://robohash.org/enimliberofugiat.png?size=50x50&set=set1",
    name: "Rhonda Detloff",
    university: "Universidad Dominico-Americana",
    sentences: "Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
    Email: "rdetloff47@webnode.com",
  },
  {
    color: "#1363f5",
    avatar: "https://robohash.org/sitquisquamunde.png?size=50x50&set=set1",
    name: "Bernelle Filinkov",
    university: "Northwest A&F University",
    sentences:
      "Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
    Email: "bfilinkov48@japanpost.jp",
  },
  {
    color: "#73ff1d",
    avatar: "https://robohash.org/vitaererumea.png?size=50x50&set=set1",
    name: "Jaquelyn McCarty",
    university: "Technological University (Maubin)",
    sentences:
      "Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.",
    Email: "jmccarty49@hud.gov",
  },
  {
    color: "#079a23",
    avatar: "https://robohash.org/quiaeiusincidunt.png?size=50x50&set=set1",
    name: "Michal Losano",
    university: "Dneprodzerzhinsk State Technical University",
    sentences:
      "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis.",
    Email: "mlosano4a@washington.edu",
  },
  {
    color: "#d3d6d5",
    avatar: "https://robohash.org/nihilnonlibero.png?size=50x50&set=set1",
    name: "Nessy Ilewicz",
    university: "Universidad Católica de Santa María",
    sentences:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
    Email: "nilewicz4b@about.me",
  },
  {
    color: "#6b77c1",
    avatar:
      "https://robohash.org/praesentiumdoloresdelectus.png?size=50x50&set=set1",
    name: "Helaine McKinlay",
    university: "Southern College of Optometry",
    sentences:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.",
    Email: "hmckinlay4c@mac.com",
  },
  {
    color: "#9cf7ef",
    avatar:
      "https://robohash.org/doloresrepudiandaefugiat.png?size=50x50&set=set1",
    name: "Linet Fincken",
    university: "National University of Computer & Emerging Sciences",
    sentences:
      "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum.",
    Email: "lfincken4d@gravatar.com",
  },
  {
    color: "#7b91f5",
    avatar: "https://robohash.org/itaqueveniampariatur.png?size=50x50&set=set1",
    name: "Marten Slayton",
    university: "Institute of Teachers Education, Perlis",
    sentences:
      "Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    Email: "mslayton4e@discuz.net",
  },
  {
    color: "#6274e3",
    avatar: "https://robohash.org/quisametdeleniti.png?size=50x50&set=set1",
    name: "Minny Dellit",
    university: "Immanuel Kant State University of Russia",
    sentences:
      "Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.",
    Email: "mdellit4f@shareasale.com",
  },
  {
    color: "#996b01",
    avatar: "https://robohash.org/quasdolorsint.png?size=50x50&set=set1",
    name: "Nannette Tolcher",
    university: "Hainan University",
    sentences:
      "Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet.",
    Email: "ntolcher4g@netvibes.com",
  },
  {
    color: "#d26603",
    avatar:
      "https://robohash.org/sitrecusandaerepellendus.png?size=50x50&set=set1",
    name: "Roger Ripon",
    university: "Ghana Christian University College",
    sentences: "Nulla justo.",
    Email: "rripon4h@goodreads.com",
  },
  {
    color: "#7c0bed",
    avatar:
      "https://robohash.org/rerumpossimusprovident.png?size=50x50&set=set1",
    name: "Bethany Escalante",
    university: "Kanazawa Medical University",
    sentences:
      "Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy.",
    Email: "bescalante4i@biglobe.ne.jp",
  },
  {
    color: "#88ffd2",
    avatar: "https://robohash.org/quiaillumiste.png?size=50x50&set=set1",
    name: "Stanleigh Dimanche",
    university: "University of Burdwan",
    sentences:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
    Email: "sdimanche4j@prnewswire.com",
  },
  {
    color: "#8119b8",
    avatar: "https://robohash.org/doloreexcepturiquia.png?size=50x50&set=set1",
    name: "Bartolemo Lathbury",
    university: "School for International Training",
    sentences:
      "Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis.",
    Email: "blathbury4k@nymag.com",
  },
  {
    color: "#711d93",
    avatar: "https://robohash.org/undeipsuminventore.png?size=50x50&set=set1",
    name: "Gibb Farnon",
    university: "Technische Universität Darmstadt",
    sentences:
      "Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    Email: "gfarnon4l@xing.com",
  },
  {
    color: "#a459a4",
    avatar: "https://robohash.org/placeatculpaut.png?size=50x50&set=set1",
    name: "Hagan Wingham",
    university: "Bangkok University",
    sentences:
      "Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
    Email: "hwingham4m@abc.net.au",
  },
  {
    color: "#0e6ff0",
    avatar:
      "https://robohash.org/aspernaturcupiditateest.png?size=50x50&set=set1",
    name: "Aaron Whyard",
    university: "University of Palestine",
    sentences:
      "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo.",
    Email: "awhyard4n@sfgate.com",
  },
  {
    color: "#e49fa5",
    avatar:
      "https://robohash.org/natusquaeratdignissimos.png?size=50x50&set=set1",
    name: "Jacquelyn Kyte",
    university: "Arab Academy for Banking and Financial Sciences",
    sentences:
      "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    Email: "jkyte4o@edublogs.org",
  },
  {
    color: "#5dea26",
    avatar: "https://robohash.org/utaex.png?size=50x50&set=set1",
    name: "Tatiana Deplacido",
    university: "Universität Linz",
    sentences:
      "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
    Email: "tdeplacido4p@businessweek.com",
  },
  {
    color: "#bf7037",
    avatar: "https://robohash.org/autaccusamusnihil.png?size=50x50&set=set1",
    name: "Roderic Eallis",
    university: "Delta University",
    sentences:
      "Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.",
    Email: "reallis4q@who.int",
  },
  {
    color: "#8a3d0b",
    avatar: "https://robohash.org/namvoluptatumrerum.png?size=50x50&set=set1",
    name: "Horatius Kitteringham",
    university: "St. Edwards University",
    sentences:
      "Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.",
    Email: "hkitteringham4r@tinypic.com",
  },
  {
    color: "#f268f2",
    avatar: "https://robohash.org/autquidolorum.png?size=50x50&set=set1",
    name: "Bing Towle",
    university: "Pan Africa Christian University",
    sentences:
      "Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
    Email: "btowle4s@diigo.com",
  },
  {
    color: "#138965",
    avatar: "https://robohash.org/assumendaremvel.png?size=50x50&set=set1",
    name: "Genny Oxbrow",
    university: "University of Ljubljana",
    sentences:
      "Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy.",
    Email: "goxbrow4t@ycombinator.com",
  },
  {
    color: "#d41f05",
    avatar: "https://robohash.org/rerumenimvitae.png?size=50x50&set=set1",
    name: "Coleman Stivers",
    university: "Morris Brown College",
    sentences:
      "Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.",
    Email: "cstivers4u@meetup.com",
  },
  {
    color: "#00e3aa",
    avatar: "https://robohash.org/autnoneaque.png?size=50x50&set=set1",
    name: "Agnes Blincoe",
    university: "La Sierra University",
    sentences:
      "Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim.",
    Email: "ablincoe4v@scientificamerican.com",
  },
  {
    color: "#6bbf3a",
    avatar:
      "https://robohash.org/consequaturteneturmollitia.png?size=50x50&set=set1",
    name: "Bil Lubbock",
    university: "Saratov State Medical University",
    sentences:
      "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
    Email: "blubbock4w@sitemeter.com",
  },
  {
    color: "#0cc8b4",
    avatar: "https://robohash.org/estatqueharum.png?size=50x50&set=set1",
    name: "Kris McGillivray",
    university: "Swedish University of Agricultural Sciences",
    sentences:
      "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus.",
    Email: "kmcgillivray4x@about.com",
  },
  {
    color: "#9a9129",
    avatar: "https://robohash.org/nonsintquis.png?size=50x50&set=set1",
    name: "Maurise Insall",
    university: "Birsk State Pedagogical Institute",
    sentences:
      "Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
    Email: "minsall4y@discuz.net",
  },
  {
    color: "#668f5e",
    avatar: "https://robohash.org/voluptatibusatnon.png?size=50x50&set=set1",
    name: "Percy MacTerrelly",
    university: "Bangladesh University of Professionals",
    sentences:
      "Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.",
    Email: "pmacterrelly4z@infoseek.co.jp",
  },
  {
    color: "#7f4dca",
    avatar:
      "https://robohash.org/enimveritatisofficiis.png?size=50x50&set=set1",
    name: "Cherilyn Othick",
    university: "Wheelock College",
    sentences:
      "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
    Email: "cothick50@tmall.com",
  },
  {
    color: "#d84db4",
    avatar: "https://robohash.org/estquasifacilis.png?size=50x50&set=set1",
    name: "Carley Ellsworthe",
    university: "Augustana College",
    sentences: "Proin eu mi. Nulla ac enim.",
    Email: "cellsworthe51@facebook.com",
  },
  {
    color: "#c8b03d",
    avatar: "https://robohash.org/ducimuslaboriosamqui.png?size=50x50&set=set1",
    name: "Rolph Dishmon",
    university: "Concordia College, Selma",
    sentences:
      "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.",
    Email: "rdishmon52@fastcompany.com",
  },
  {
    color: "#57e57b",
    avatar: "https://robohash.org/providentetcorrupti.png?size=50x50&set=set1",
    name: "Lamont Speddin",
    university: "Avicenna International College",
    sentences:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor.",
    Email: "lspeddin53@gnu.org",
  },
  {
    color: "#6651ee",
    avatar:
      "https://robohash.org/velitdeseruntmollitia.png?size=50x50&set=set1",
    name: "Gonzalo Arkill",
    university: "Université de Buéa",
    sentences:
      "Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
    Email: "garkill54@oakley.com",
  },
  {
    color: "#a33e8e",
    avatar: "https://robohash.org/iureautemest.png?size=50x50&set=set1",
    name: "Maury Witherington",
    university: "Tula State University",
    sentences:
      "Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
    Email: "mwitherington55@delicious.com",
  },
  {
    color: "#e2fd3b",
    avatar: "https://robohash.org/ipsanostrumhic.png?size=50x50&set=set1",
    name: "Phineas Tatem",
    university: "Brandon University",
    sentences:
      "Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
    Email: "ptatem56@about.com",
  },
  {
    color: "#7dc4e4",
    avatar:
      "https://robohash.org/corruptiomnisvoluptas.png?size=50x50&set=set1",
    name: "Jeanelle Corbishley",
    university: "Etisalat University College",
    sentences:
      "Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum.",
    Email: "jcorbishley57@umich.edu",
  },
  {
    color: "#ea4c66",
    avatar: "https://robohash.org/quosutut.png?size=50x50&set=set1",
    name: "Alys Yexley",
    university: "Toyohashi University of Technology",
    sentences:
      "Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.",
    Email: "ayexley58@ucoz.com",
  },
  {
    color: "#2e3203",
    avatar: "https://robohash.org/quibusdamfugiatet.png?size=50x50&set=set1",
    name: "Ferne Barczewski",
    university: "Johns Hopkins University, SAIS Bologna Center",
    sentences:
      "Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.",
    Email: "fbarczewski59@icio.us",
  },
  {
    color: "#ee1a39",
    avatar: "https://robohash.org/accusamusdoloreest.png?size=50x50&set=set1",
    name: "Cassandry Baudino",
    university: "Texas A&M University - Commerce",
    sentences:
      "Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
    Email: "cbaudino5a@technorati.com",
  },
  {
    color: "#c565aa",
    avatar:
      "https://robohash.org/nequeoccaecatitempora.png?size=50x50&set=set1",
    name: "Megan Assinder",
    university: "Universidad de Celaya",
    sentences:
      "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
    Email: "massinder5b@cisco.com",
  },
  {
    color: "#4d742c",
    avatar: "https://robohash.org/adoloremsequi.png?size=50x50&set=set1",
    name: "Carson Masding",
    university: "King Saud bin Abdulaziz University for Health Sciences ",
    sentences:
      "Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
    Email: "cmasding5c@scribd.com",
  },
  {
    color: "#35c7d3",
    avatar: "https://robohash.org/natusaliasassumenda.png?size=50x50&set=set1",
    name: "Ignacius Edgeworth",
    university: "King Saud bin Abdulaziz University for Health Sciences ",
    sentences: "Vivamus vel nulla eget eros elementum pellentesque.",
    Email: "iedgeworth5d@examiner.com",
  },
  {
    color: "#c6bd62",
    avatar: "https://robohash.org/utnonet.png?size=50x50&set=set1",
    name: "Ringo Hathwood",
    university: "Daniel Webster College",
    sentences:
      "Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum.",
    Email: "rhathwood5e@squarespace.com",
  },
  {
    color: "#0e90fa",
    avatar: "https://robohash.org/seditaqueautem.png?size=50x50&set=set1",
    name: "Seumas Moreton",
    university: "Tsinghua University",
    sentences:
      "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum.",
    Email: "smoreton5f@state.gov",
  },
  {
    color: "#469785",
    avatar: "https://robohash.org/repudiandaesuntmodi.png?size=50x50&set=set1",
    name: "Jedediah Newland",
    university: "University of Sulaimania (Kurdistan Region)",
    sentences: "Aenean lectus.",
    Email: "jnewland5g@flavors.me",
  },
  {
    color: "#43cc1a",
    avatar:
      "https://robohash.org/cumiustonecessitatibus.png?size=50x50&set=set1",
    name: "Frederique Brozek",
    university: "Medizinische Universität Lübeck",
    sentences:
      "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.",
    Email: "fbrozek5h@sphinn.com",
  },
  {
    color: "#4e8405",
    avatar: "https://robohash.org/enimesseest.png?size=50x50&set=set1",
    name: "Wren Charge",
    university: "Lynchburg College",
    sentences:
      "Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo.",
    Email: "wcharge5i@symantec.com",
  },
  {
    color: "#6926e3",
    avatar: "https://robohash.org/sequipraesentiumiure.png?size=50x50&set=set1",
    name: "Doralyn De Zamudio",
    university: "West Texas A&M University",
    sentences: "Suspendisse potenti. In eleifend quam a odio.",
    Email: "dde5j@harvard.edu",
  },
  {
    color: "#5544a3",
    avatar: "https://robohash.org/omnisvoluptatemharum.png?size=50x50&set=set1",
    name: "Katuscha Drance",
    university: "Victoria University Toronto, University of Toronto",
    sentences:
      "In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla.",
    Email: "kdrance5k@xrea.com",
  },
  {
    color: "#41be64",
    avatar: "https://robohash.org/ducimusmagniculpa.png?size=50x50&set=set1",
    name: "Reynold Weildish",
    university: "Banat's University of Agricultural Sciences",
    sentences:
      "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit.",
    Email: "rweildish5l@berkeley.edu",
  },
  {
    color: "#09014b",
    avatar: "https://robohash.org/quiaquamperspiciatis.png?size=50x50&set=set1",
    name: "Tarrah Flowerdew",
    university: "Houdegbe North American University Benin",
    sentences:
      "Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
    Email: "tflowerdew5m@accuweather.com",
  },
  {
    color: "#714679",
    avatar: "https://robohash.org/culpahicvoluptate.png?size=50x50&set=set1",
    name: "Marie Ortiger",
    university: "Westhill University",
    sentences:
      "Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
    Email: "mortiger5n@state.gov",
  },
  {
    color: "#e5f0ef",
    avatar: "https://robohash.org/similiqueautnulla.png?size=50x50&set=set1",
    name: "Ogdon Tockell",
    university: "Fachhochschule Aachen",
    sentences: "Sed vel enim sit amet nunc viverra dapibus.",
    Email: "otockell5o@goodreads.com",
  },
  {
    color: "#8f04d0",
    avatar: "https://robohash.org/nobisomnisquia.png?size=50x50&set=set1",
    name: "Marleen Magnay",
    university: "Isabela State University",
    sentences:
      "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.",
    Email: "mmagnay5p@miibeian.gov.cn",
  },
  {
    color: "#7b0138",
    avatar: "https://robohash.org/inadtemporibus.png?size=50x50&set=set1",
    name: "Gertrude Proom",
    university:
      "Deutsch-Ordens Fachhochschule Riedlingen, Hochschule für Wirtschaft",
    sentences:
      "Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
    Email: "gproom5q@hc360.com",
  },
  {
    color: "#6b71e5",
    avatar: "https://robohash.org/istebeataeet.png?size=50x50&set=set1",
    name: "Joete Tole",
    university: "Tezukayama University",
    sentences:
      "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.",
    Email: "jtole5r@mapquest.com",
  },
  {
    color: "#55058f",
    avatar: "https://robohash.org/estutomnis.png?size=50x50&set=set1",
    name: "Shaylynn Oliveto",
    university: "New York Institute of Technology",
    sentences:
      "Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
    Email: "soliveto5s@naver.com",
  },
  {
    color: "#16cae6",
    avatar: "https://robohash.org/velitoditeius.png?size=50x50&set=set1",
    name: "Bale Bossingham",
    university: "Institute of Teachers Education, Kent",
    sentences:
      "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
    Email: "bbossingham5t@weibo.com",
  },
  {
    color: "#78b72e",
    avatar: "https://robohash.org/providentiustoautem.png?size=50x50&set=set1",
    name: "Deni Fawssett",
    university: "Ecole Nationale Vétérinaire de Lyon",
    sentences:
      "Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.",
    Email: "dfawssett5u@tamu.edu",
  },
  {
    color: "#a5d2be",
    avatar: "https://robohash.org/sedquamexpedita.png?size=50x50&set=set1",
    name: "Lionel Voase",
    university: "Universidad del Aconcagua",
    sentences:
      "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh.",
    Email: "lvoase5v@ted.com",
  },
  {
    color: "#10f836",
    avatar:
      "https://robohash.org/dignissimosreprehenderitsunt.png?size=50x50&set=set1",
    name: "Read Bake",
    university: "Troy University, Montgomery",
    sentences:
      "Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.",
    Email: "rbake5w@hugedomains.com",
  },
  {
    color: "#cd6de4",
    avatar: "https://robohash.org/hicetvoluptas.png?size=50x50&set=set1",
    name: "Valene Hallet",
    university: "University of Dhaka",
    sentences:
      "Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
    Email: "vhallet5x@people.com.cn",
  },
  {
    color: "#ff5a92",
    avatar:
      "https://robohash.org/doloribussapientequibusdam.png?size=50x50&set=set1",
    name: "Caroline McMurraya",
    university: "Massachusetts College of Pharmacy and Allied Health Sciences",
    sentences:
      "Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.",
    Email: "cmcmurraya5y@ed.gov",
  },
  {
    color: "#725844",
    avatar: "https://robohash.org/voluptatemvelculpa.png?size=50x50&set=set1",
    name: "Carma Ever",
    university: "Gomel State Medical University",
    sentences: "Phasellus sit amet erat.",
    Email: "cever5z@wix.com",
  },
  {
    color: "#0a4235",
    avatar:
      "https://robohash.org/magnamaspernaturexplicabo.png?size=50x50&set=set1",
    name: "Laryssa Rosensaft",
    university: "Pan Africa Christian University",
    sentences:
      "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
    Email: "lrosensaft60@vistaprint.com",
  },
  {
    color: "#746170",
    avatar: "https://robohash.org/repudiandaeremoptio.png?size=50x50&set=set1",
    name: "Chrystel Senchenko",
    university: "Universidad de Oviedo",
    sentences:
      "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.",
    Email: "csenchenko61@berkeley.edu",
  },
  {
    color: "#d643ab",
    avatar:
      "https://robohash.org/perspiciatissolutaest.png?size=50x50&set=set1",
    name: "Sandro Parades",
    university: "McPherson College",
    sentences:
      "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum.",
    Email: "sparades62@businessweek.com",
  },
  {
    color: "#670de6",
    avatar: "https://robohash.org/asperioresetvelit.png?size=50x50&set=set1",
    name: "Irvine McAusland",
    university: "Tunku Syed Sirajuddin Polytechnic",
    sentences:
      "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.",
    Email: "imcausland63@seesaa.net",
  },
  {
    color: "#c9927c",
    avatar:
      "https://robohash.org/voluptasexcepturipariatur.png?size=50x50&set=set1",
    name: "Red Alfwy",
    university:
      "Evangelische Fachhochschule Ludwigshafen Hochschule für Sozial- und Gesundheitswesen",
    sentences:
      "Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.",
    Email: "ralfwy64@arizona.edu",
  },
  {
    color: "#b8ce59",
    avatar: "https://robohash.org/ipsaetillum.png?size=50x50&set=set1",
    name: "Bobbie Lovewell",
    university: "Tokyo University of Pharmacy and Life Science",
    sentences:
      "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo.",
    Email: "blovewell65@apache.org",
  },
  {
    color: "#ff5c57",
    avatar:
      "https://robohash.org/voluptatibuscumquibusdam.png?size=50x50&set=set1",
    name: "Ariadne Arrol",
    university: "Universitas Brawijaya",
    sentences: "Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.",
    Email: "aarrol66@addtoany.com",
  },
  {
    color: "#55db0e",
    avatar:
      "https://robohash.org/porrorepudiandaearchitecto.png?size=50x50&set=set1",
    name: "Lambert Winsbury",
    university: "Graduate University for Advanced Studies",
    sentences:
      "Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet.",
    Email: "lwinsbury67@biblegateway.com",
  },
  {
    color: "#d021b1",
    avatar: "https://robohash.org/fugiatidsaepe.png?size=50x50&set=set1",
    name: "Hector Raffan",
    university: "National University of Modern Languages",
    sentences:
      "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.",
    Email: "hraffan68@t.co",
  },
  {
    color: "#0026ed",
    avatar: "https://robohash.org/aliquamquiqui.png?size=50x50&set=set1",
    name: "Skelly Hacaud",
    university: "Fachhochschule Gießen-Friedberg",
    sentences:
      "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
    Email: "shacaud69@msu.edu",
  },
  {
    color: "#66523c",
    avatar:
      "https://robohash.org/recusandaeabexercitationem.png?size=50x50&set=set1",
    name: "Leif Hayne",
    university: "University of St. Francis",
    sentences: "Etiam justo. Etiam pretium iaculis justo.",
    Email: "lhayne6a@fda.gov",
  },
  {
    color: "#865a12",
    avatar: "https://robohash.org/etipsamut.png?size=50x50&set=set1",
    name: "Tyrus Rylstone",
    university: "St. Mary-of-the-Woods College",
    sentences:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio.",
    Email: "trylstone6b@hugedomains.com",
  },
  {
    color: "#a53160",
    avatar: "https://robohash.org/nonsolutased.png?size=50x50&set=set1",
    name: "Kalila Hruska",
    university: "Fachhochschule Frankfurt am Main",
    sentences:
      "Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.",
    Email: "khruska6c@youku.com",
  },
  {
    color: "#8a5128",
    avatar: "https://robohash.org/sitcorporisipsa.png?size=50x50&set=set1",
    name: "Elden Greensides",
    university: "Schiller International University, London",
    sentences: "Nullam sit amet turpis elementum ligula vehicula consequat.",
    Email: "egreensides6d@google.com.hk",
  },
  {
    color: "#155a5e",
    avatar:
      "https://robohash.org/quaeratfugitblanditiis.png?size=50x50&set=set1",
    name: "Monro Veazey",
    university: "Centro Universitário Newton Paiva",
    sentences:
      "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.",
    Email: "mveazey6e@amazonaws.com",
  },
  {
    color: "#ebc9da",
    avatar: "https://robohash.org/velitcommodilibero.png?size=50x50&set=set1",
    name: "Ellene Oleszcuk",
    university: "Universidad Don Bosco",
    sentences: "Quisque ut erat. Curabitur gravida nisi at nibh.",
    Email: "eoleszcuk6f@cyberchimps.com",
  },
  {
    color: "#51cf79",
    avatar: "https://robohash.org/easaepequis.png?size=50x50&set=set1",
    name: "Hermie Cranefield",
    university: "Komazawa University",
    sentences:
      "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue.",
    Email: "hcranefield6g@tiny.cc",
  },
  {
    color: "#591ec2",
    avatar: "https://robohash.org/nesciuntnamdebitis.png?size=50x50&set=set1",
    name: "Tamera Bielfelt",
    university: "Mercer University, Cecil B. Day Campus",
    sentences:
      "Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam. Nam tristique tortor eu pede.",
    Email: "tbielfelt6h@usa.gov",
  },
  {
    color: "#164b6a",
    avatar: "https://robohash.org/quisenimeos.png?size=50x50&set=set1",
    name: "Hamnet Flynn",
    university: "Chunchon National University of Education",
    sentences:
      "Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
    Email: "hflynn6i@prnewswire.com",
  },
  {
    color: "#dff53e",
    avatar: "https://robohash.org/minimaadrepellat.png?size=50x50&set=set1",
    name: "Mathilde Clayal",
    university: "Free University Amsterdam",
    sentences: "Curabitur at ipsum ac tellus semper interdum.",
    Email: "mclayal6j@squarespace.com",
  },
  {
    color: "#5813a5",
    avatar: "https://robohash.org/quiaquisnihil.png?size=50x50&set=set1",
    name: "Ferdinand Wyne",
    university: "Universidade Gregorio Semedo",
    sentences:
      "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
    Email: "fwyne6k@tripod.com",
  },
  {
    color: "#5475f9",
    avatar: "https://robohash.org/ametnondoloribus.png?size=50x50&set=set1",
    name: "Gregor Gear",
    university: "Bluefield State College",
    sentences:
      "Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero.",
    Email: "ggear6l@wikispaces.com",
  },
  {
    color: "#8a613d",
    avatar: "https://robohash.org/autullamquibusdam.png?size=50x50&set=set1",
    name: "Joane Stutt",
    university: "Medaille College",
    sentences:
      "Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum.",
    Email: "jstutt6m@deviantart.com",
  },
  {
    color: "#7e8cd1",
    avatar: "https://robohash.org/etquamvoluptatum.png?size=50x50&set=set1",
    name: "Myrtice Ibarra",
    university: "Thomas More College",
    sentences: "Quisque ut erat. Curabitur gravida nisi at nibh.",
    Email: "mibarra6n@msn.com",
  },
  {
    color: "#7b8776",
    avatar: "https://robohash.org/utverosimilique.png?size=50x50&set=set1",
    name: "Artemus Nyssen",
    university: "University of Southern Maine",
    sentences:
      "Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
    Email: "anyssen6o@nydailynews.com",
  },
  {
    color: "#2db6e9",
    avatar:
      "https://robohash.org/nesciuntreiciendisfugit.png?size=50x50&set=set1",
    name: "Jessamine Busk",
    university: "NED University of Engineering and Technology Karachi",
    sentences:
      "Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero.",
    Email: "jbusk6p@i2i.jp",
  },
  {
    color: "#59d1a2",
    avatar: "https://robohash.org/harumnisiquod.png?size=50x50&set=set1",
    name: "Maggy Trustram",
    university: "Universitas Tanjungpura",
    sentences:
      "Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst.",
    Email: "mtrustram6q@utexas.edu",
  },
  {
    color: "#f19eb2",
    avatar:
      "https://robohash.org/voluptasarchitectomaiores.png?size=50x50&set=set1",
    name: "Tasia Janjusevic",
    university: "Athenaeum of Ohio",
    sentences:
      "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
    Email: "tjanjusevic6r@tinypic.com",
  },
  {
    color: "#7ebf65",
    avatar:
      "https://robohash.org/evenietvoluptatibusodio.png?size=50x50&set=set1",
    name: "Miguelita Hollow",
    university: "Buddhist and Pali University of Sri Lanka",
    sentences:
      "Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.",
    Email: "mhollow6s@nifty.com",
  },
  {
    color: "#0e2a32",
    avatar: "https://robohash.org/quiasedsunt.png?size=50x50&set=set1",
    name: "Kennett Bickley",
    university: "Universidad Tecnológica de México",
    sentences:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh.",
    Email: "kbickley6t@meetup.com",
  },
  {
    color: "#966091",
    avatar: "https://robohash.org/voluptateeaut.png?size=50x50&set=set1",
    name: "Solomon Wonfor",
    university: "Sadjad Institute of Technology",
    sentences:
      "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl.",
    Email: "swonfor6u@alibaba.com",
  },
  {
    color: "#7e4c7e",
    avatar: "https://robohash.org/reiciendisomnisquos.png?size=50x50&set=set1",
    name: "Norine Cahalan",
    university: "Institute of Teachers Education, Raja Melewar",
    sentences:
      "Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
    Email: "ncahalan6v@4shared.com",
  },
  {
    color: "#677539",
    avatar: "https://robohash.org/doloreetvoluptatem.png?size=50x50&set=set1",
    name: "Ame Floyde",
    university: "Universidad Santo Tomás",
    sentences:
      "Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
    Email: "afloyde6w@geocities.jp",
  },
  {
    color: "#7f4ad0",
    avatar: "https://robohash.org/esseperferendisnihil.png?size=50x50&set=set1",
    name: "Giulio Pinnegar",
    university: "Claremont Graduate University",
    sentences:
      "Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    Email: "gpinnegar6x@scientificamerican.com",
  },
  {
    color: "#20644d",
    avatar: "https://robohash.org/molestiaererumquos.png?size=50x50&set=set1",
    name: "Rubin Beveridge",
    university: "Universidad de Matanzas Camilo Cienfuegos",
    sentences:
      "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
    Email: "rbeveridge6y@howstuffworks.com",
  },
  {
    color: "#89c96c",
    avatar: "https://robohash.org/etutodio.png?size=50x50&set=set1",
    name: "Lonnie Bereford",
    university: "Coastal Carolina University",
    sentences:
      "Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum.",
    Email: "lbereford6z@cnn.com",
  },
  {
    color: "#ca1339",
    avatar: "https://robohash.org/expeditaeteum.png?size=50x50&set=set1",
    name: "Jeffrey Mogra",
    university: "Soran University",
    sentences:
      "In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.",
    Email: "jmogra70@dailymail.co.uk",
  },
  {
    color: "#bfde35",
    avatar: "https://robohash.org/rerummaximequi.png?size=50x50&set=set1",
    name: "Harriette Skipping",
    university: "Tashkent State Technical University",
    sentences:
      "Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.",
    Email: "hskipping71@discuz.net",
  },
  {
    color: "#78f034",
    avatar: "https://robohash.org/ullamodionam.png?size=50x50&set=set1",
    name: "Giustino Winspur",
    university: "Petro Mohyla Black Sea State University",
    sentences:
      "Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
    Email: "gwinspur72@comsenz.com",
  },
  {
    color: "#d30094",
    avatar: "https://robohash.org/iureeumadipisci.png?size=50x50&set=set1",
    name: "Maighdiln Lardier",
    university: "Charter Oak State College",
    sentences:
      "Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.",
    Email: "mlardier73@storify.com",
  },
  {
    color: "#bd0419",
    avatar: "https://robohash.org/autinmagnam.png?size=50x50&set=set1",
    name: "Travis Lowdiane",
    university: "St. Martin's College",
    sentences:
      "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
    Email: "tlowdiane74@si.edu",
  },
  {
    color: "#f8768c",
    avatar: "https://robohash.org/sintutreprehenderit.png?size=50x50&set=set1",
    name: "Amandy Piotrkowski",
    university: "Jai Narayan Vyas University",
    sentences: "Proin risus.",
    Email: "apiotrkowski75@ebay.com",
  },
  {
    color: "#29c1ce",
    avatar:
      "https://robohash.org/veritatisdolorumrepellat.png?size=50x50&set=set1",
    name: "Harry Couser",
    university: "Chatham College",
    sentences:
      "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum.",
    Email: "hcouser76@deviantart.com",
  },
  {
    color: "#03b63c",
    avatar: "https://robohash.org/idconsequuntursit.png?size=50x50&set=set1",
    name: "Albrecht Ruddick",
    university: 'Universidad Centroamericana "José Simeón Canas"',
    sentences:
      "Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla.",
    Email: "aruddick77@pen.io",
  },
  {
    color: "#d5e074",
    avatar:
      "https://robohash.org/doloresrepellendusquia.png?size=50x50&set=set1",
    name: "Krisha Beaty",
    university: "Shonan Institute of Technology",
    sentences:
      "Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.",
    Email: "kbeaty78@simplemachines.org",
  },
  {
    color: "#4db257",
    avatar: "https://robohash.org/voluptatibusetin.png?size=50x50&set=set1",
    name: "Budd Cheetam",
    university:
      "State University of New York College of Agriculture and Technology at Cobleskill",
    sentences:
      "Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet.",
    Email: "bcheetam79@aol.com",
  },
  {
    color: "#9effac",
    avatar: "https://robohash.org/eaautalias.png?size=50x50&set=set1",
    name: "Frasier Coo",
    university: "Université Catholique de Lille",
    sentences:
      "Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.",
    Email: "fcoo7a@issuu.com",
  },
  {
    color: "#889f16",
    avatar:
      "https://robohash.org/necessitatibusdoloremquemaiores.png?size=50x50&set=set1",
    name: "Curt McNeice",
    university: "Shandong Economic University",
    sentences:
      "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    Email: "cmcneice7b@wix.com",
  },
  {
    color: "#9a754d",
    avatar:
      "https://robohash.org/rerumcupiditatereprehenderit.png?size=50x50&set=set1",
    name: "Jo-anne Wealleans",
    university: "Philippine Women's University",
    sentences:
      "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.",
    Email: "jwealleans7c@acquirethisname.com",
  },
  {
    color: "#ea46d3",
    avatar: "https://robohash.org/officiisnamdolor.png?size=50x50&set=set1",
    name: "Vaclav Corbie",
    university: "Joetsu University of Education",
    sentences: "Proin eu mi.",
    Email: "vcorbie7d@dedecms.com",
  },
  {
    color: "#db827d",
    avatar: "https://robohash.org/inventoremagnierror.png?size=50x50&set=set1",
    name: "Sybila Stolberger",
    university: "Universidade Federal da Bahia",
    sentences:
      "Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.",
    Email: "sstolberger7e@ox.ac.uk",
  },
  {
    color: "#8a8dba",
    avatar: "https://robohash.org/quasiutassumenda.png?size=50x50&set=set1",
    name: "Pepita Blofield",
    university: "Latvian Maritime Academy",
    sentences:
      "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum.",
    Email: "pblofield7f@rakuten.co.jp",
  },
  {
    color: "#93d82d",
    avatar:
      "https://robohash.org/repellendusdoloresnon.png?size=50x50&set=set1",
    name: "Malchy Sharple",
    university: "Universidad Austral Buenos Aires",
    sentences:
      "In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
    Email: "msharple7g@ihg.com",
  },
  {
    color: "#8af4f8",
    avatar:
      "https://robohash.org/corruptiremvoluptatem.png?size=50x50&set=set1",
    name: "Lotte Lack",
    university: "Al Nahrain University",
    sentences:
      "Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla.",
    Email: "llack7h@flickr.com",
  },
  {
    color: "#bf010f",
    avatar: "https://robohash.org/rerumetet.png?size=50x50&set=set1",
    name: "Cherry Pucknell",
    university: "KDI School of Public Policy and Management",
    sentences: "Mauris ullamcorper purus sit amet nulla.",
    Email: "cpucknell7i@cmu.edu",
  },
  {
    color: "#dd2782",
    avatar:
      "https://robohash.org/illumnecessitatibusdolor.png?size=50x50&set=set1",
    name: "Anette Braxay",
    university: "University for Humanistics (UH)",
    sentences:
      "Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
    Email: "abraxay7j@edublogs.org",
  },
  {
    color: "#2fcde6",
    avatar: "https://robohash.org/facilispossimusin.png?size=50x50&set=set1",
    name: "Maryanna Grogono",
    university: "Immaculata University",
    sentences:
      "Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo.",
    Email: "mgrogono7k@mediafire.com",
  },
  {
    color: "#ac8f84",
    avatar: "https://robohash.org/etporroid.png?size=50x50&set=set1",
    name: "Mufinella Lippett",
    university: "Bundelkhand University",
    sentences:
      "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit.",
    Email: "mlippett7l@intel.com",
  },
  {
    color: "#54f4d3",
    avatar: "https://robohash.org/harumaliasarchitecto.png?size=50x50&set=set1",
    name: "Pauline Pryke",
    university: "Universidad Metropolitana de Honduras",
    sentences:
      "Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.",
    Email: "ppryke7m@google.com",
  },
  {
    color: "#384be1",
    avatar: "https://robohash.org/temporibuseiusnihil.png?size=50x50&set=set1",
    name: "Janelle MacNab",
    university: "University of Insurance and Banking in Warsaw",
    sentences:
      "Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
    Email: "jmacnab7n@amazonaws.com",
  },
  {
    color: "#e2fbf2",
    avatar: "https://robohash.org/quiaestdolores.png?size=50x50&set=set1",
    name: "Jilli Gannon",
    university: "Al-Islah University",
    sentences: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    Email: "jgannon7o@php.net",
  },
  {
    color: "#109aa4",
    avatar: "https://robohash.org/laborumlaboriosamsed.png?size=50x50&set=set1",
    name: "North Ruddiforth",
    university: "Brussels School of International Studies",
    sentences: "Nulla ac enim.",
    Email: "nruddiforth7p@si.edu",
  },
  {
    color: "#6a7666",
    avatar:
      "https://robohash.org/praesentiumetvoluptates.png?size=50x50&set=set1",
    name: "Felicia McAnulty",
    university: "Moshi University College of Cooperative and Business Studies",
    sentences: "Nulla tempus.",
    Email: "fmcanulty7q@diigo.com",
  },
  {
    color: "#edad3a",
    avatar: "https://robohash.org/vitaeinventorenam.png?size=50x50&set=set1",
    name: "Blane Lockton",
    university: "Aria Institute of Higher Education",
    sentences:
      "Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum.",
    Email: "blockton7r@wired.com",
  },
  {
    color: "#75e6c6",
    avatar: "https://robohash.org/eiuseosmaiores.png?size=50x50&set=set1",
    name: "Modesta Windle",
    university: "Sumy State University",
    sentences:
      "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
    Email: "mwindle7s@netscape.com",
  },
  {
    color: "#dafacb",
    avatar: "https://robohash.org/expeditavelsunt.png?size=50x50&set=set1",
    name: "Aretha Linley",
    university: "Shizuoka Prefectural University",
    sentences:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl.",
    Email: "alinley7t@examiner.com",
  },
  {
    color: "#ce1714",
    avatar:
      "https://robohash.org/repudiandaeducimusarchitecto.png?size=50x50&set=set1",
    name: "Forrest Balthasar",
    university: "Crawford University ",
    sentences: "Aliquam non mauris. Morbi non lectus.",
    Email: "fbalthasar7u@creativecommons.org",
  },
  {
    color: "#2148fc",
    avatar:
      "https://robohash.org/dignissimosdictaconsequatur.png?size=50x50&set=set1",
    name: "Harlie Weller",
    university: "Universidade de Lisboa",
    sentences:
      "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.",
    Email: "hweller7v@miibeian.gov.cn",
  },
  {
    color: "#d311c9",
    avatar: "https://robohash.org/sunteumculpa.png?size=50x50&set=set1",
    name: "Harriett Van der Son",
    university: "Hanoi Medical University",
    sentences:
      "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.",
    Email: "hvan7w@vinaora.com",
  },
  {
    color: "#3ba781",
    avatar:
      "https://robohash.org/doloremqueveritatislaboriosam.png?size=50x50&set=set1",
    name: "Tabb Simonard",
    university: "Shanghai Ouhua Vocational Technical College",
    sentences:
      "Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.",
    Email: "tsimonard7x@mysql.com",
  },
  {
    color: "#5f0a7d",
    avatar: "https://robohash.org/quissintdeleniti.png?size=50x50&set=set1",
    name: "Kati Hosburn",
    university: "Slovak Medical University",
    sentences:
      "Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    Email: "khosburn7y@feedburner.com",
  },
  {
    color: "#4e5d96",
    avatar: "https://robohash.org/earumeumautem.png?size=50x50&set=set1",
    name: "Rosmunda Sheriff",
    university: "Norway's Information Technology University College",
    sentences:
      "Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
    Email: "rsheriff7z@tripadvisor.com",
  },
  {
    color: "#01e8b2",
    avatar:
      "https://robohash.org/doloremquevitaefacilis.png?size=50x50&set=set1",
    name: "Nial Dimitriades",
    university: "Karwan Institute of Higher Education",
    sentences:
      "Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
    Email: "ndimitriades80@sitemeter.com",
  },
  {
    color: "#53e44d",
    avatar: "https://robohash.org/esttemporibusut.png?size=50x50&set=set1",
    name: "Cherry Collister",
    university: "Kingston College",
    sentences: "Fusce posuere felis sed lacus.",
    Email: "ccollister81@ezinearticles.com",
  },
  {
    color: "#4e2c98",
    avatar: "https://robohash.org/atlaboriosamaut.png?size=50x50&set=set1",
    name: "Cacilia Lagen",
    university: "Pyramid Education Center",
    sentences:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo.",
    Email: "clagen82@hatena.ne.jp",
  },
  {
    color: "#5f73cc",
    avatar: "https://robohash.org/eligendidoloremnon.png?size=50x50&set=set1",
    name: "Arabelle Brundale",
    university: "New York Medical College",
    sentences:
      "In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum.",
    Email: "abrundale83@wisc.edu",
  },
  {
    color: "#e66743",
    avatar: "https://robohash.org/doloresarchitectout.png?size=50x50&set=set1",
    name: "Tessie Schumacher",
    university: "Kabardino-Balkarian State University",
    sentences:
      "Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum.",
    Email: "tschumacher84@yolasite.com",
  },
  {
    color: "#03cc7e",
    avatar: "https://robohash.org/vitaedebitisfacere.png?size=50x50&set=set1",
    name: "Franni Willoughey",
    university: "University College of Skövde",
    sentences:
      "Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo.",
    Email: "fwilloughey85@php.net",
  },
  {
    color: "#3c542d",
    avatar: "https://robohash.org/eiussintquas.png?size=50x50&set=set1",
    name: "Othilia Hansie",
    university: "Central Mindanao University",
    sentences:
      "Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.",
    Email: "ohansie86@phpbb.com",
  },
  {
    color: "#89b5e0",
    avatar: "https://robohash.org/rerumcorruptieveniet.png?size=50x50&set=set1",
    name: "Boot Turfs",
    university: "Universidad del País Vasco",
    sentences:
      "Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.",
    Email: "bturfs87@samsung.com",
  },
  {
    color: "#355803",
    avatar: "https://robohash.org/etvoluptasnostrum.png?size=50x50&set=set1",
    name: "Yasmin Baurerich",
    university: "Universitas Cenderawasih",
    sentences:
      "Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor.",
    Email: "ybaurerich88@smugmug.com",
  },
  {
    color: "#2c8b2f",
    avatar: "https://robohash.org/velminimapraesentium.png?size=50x50&set=set1",
    name: "Lorelle Lothlorien",
    university: "Universidad de Matanzas Camilo Cienfuegos",
    sentences:
      "Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.",
    Email: "llothlorien89@washingtonpost.com",
  },
  {
    color: "#e5a0e8",
    avatar:
      "https://robohash.org/numquamconsequunturveniam.png?size=50x50&set=set1",
    name: "Carce Espin",
    university: "Escuela Militar de Ingeniería",
    sentences:
      "In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
    Email: "cespin8a@eventbrite.com",
  },
  {
    color: "#247625",
    avatar: "https://robohash.org/earumquistempore.png?size=50x50&set=set1",
    name: "Laurent Holyard",
    university: "Lutheran School Of Theology In Aarhus",
    sentences:
      "Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.",
    Email: "lholyard8b@census.gov",
  },
  {
    color: "#a233c1",
    avatar:
      "https://robohash.org/architectoestperferendis.png?size=50x50&set=set1",
    name: "Mitchael Eakeley",
    university: "College of St. Elizabeth",
    sentences:
      "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus.",
    Email: "meakeley8c@plala.or.jp",
  },
  {
    color: "#5b843f",
    avatar: "https://robohash.org/voluptatemquoshic.png?size=50x50&set=set1",
    name: "Harcourt Bryceson",
    university: "The Johns Hopkins University",
    sentences:
      "Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    Email: "hbryceson8d@marketwatch.com",
  },
  {
    color: "#6dd78c",
    avatar:
      "https://robohash.org/voluptatesoditsuscipit.png?size=50x50&set=set1",
    name: "Gearard Kitley",
    university: "Universidad de Costa Rica",
    sentences:
      "Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla.",
    Email: "gkitley8e@ycombinator.com",
  },
  {
    color: "#5f96b4",
    avatar: "https://robohash.org/aliasadipisciofficia.png?size=50x50&set=set1",
    name: "Angelita Fairbanks",
    university: "Université de Savoie",
    sentences:
      "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
    Email: "afairbanks8f@lycos.com",
  },
  {
    color: "#f536ee",
    avatar: "https://robohash.org/uttemporibusid.png?size=50x50&set=set1",
    name: "Johanna Coultard",
    university: "Neelain University",
    sentences:
      "Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.",
    Email: "jcoultard8g@bravesites.com",
  },
  {
    color: "#d852d2",
    avatar: "https://robohash.org/quiexpeditaquia.png?size=50x50&set=set1",
    name: "Terence Greenacre",
    university: "College of Mount St. Vincent",
    sentences:
      "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque.",
    Email: "tgreenacre8h@cbslocal.com",
  },
  {
    color: "#f9c9e2",
    avatar: "https://robohash.org/ullamvoluptatumharum.png?size=50x50&set=set1",
    name: "Olin Plaid",
    university: "Universidade Católica de Moçambique",
    sentences:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum.",
    Email: "oplaid8i@tamu.edu",
  },
  {
    color: "#a2795a",
    avatar: "https://robohash.org/omnisillolabore.png?size=50x50&set=set1",
    name: "Bobinette Arkcoll",
    university: "Université Cadi Ayyad",
    sentences: "Phasellus sit amet erat.",
    Email: "barkcoll8j@pen.io",
  },
  {
    color: "#45cc2d",
    avatar: "https://robohash.org/ullamrepellatnam.png?size=50x50&set=set1",
    name: "Liana Speight",
    university: "University of Maine, Machias",
    sentences:
      "Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.",
    Email: "lspeight8k@ow.ly",
  },
  {
    color: "#e7f6e9",
    avatar:
      "https://robohash.org/dignissimosdoloresitaque.png?size=50x50&set=set1",
    name: "Rosalinde Orrin",
    university: "Universidade Salgado de Oliveira",
    sentences:
      "Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
    Email: "rorrin8l@gizmodo.com",
  },
  {
    color: "#bc8973",
    avatar:
      "https://robohash.org/possimusdoloremadipisci.png?size=50x50&set=set1",
    name: "Angy Dunston",
    university: "Perm State Medical Academy",
    sentences: "Donec ut dolor.",
    Email: "adunston8m@boston.com",
  },
  {
    color: "#92eab0",
    avatar:
      "https://robohash.org/vitaereprehenderitullam.png?size=50x50&set=set1",
    name: "Fifi Reeme",
    university: "University of Gujrat",
    sentences:
      "Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
    Email: "freeme8n@netscape.com",
  },
  {
    color: "#678483",
    avatar: "https://robohash.org/facilisdolorescum.png?size=50x50&set=set1",
    name: "Portia Walicki",
    university: "Harding University Graduate School of Religion",
    sentences:
      "Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.",
    Email: "pwalicki8o@omniture.com",
  },
  {
    color: "#19d3dc",
    avatar:
      "https://robohash.org/quoperferendisaccusamus.png?size=50x50&set=set1",
    name: "Allegra Fomichkin",
    university: "International School of Business Management",
    sentences:
      "Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.",
    Email: "afomichkin8p@jalbum.net",
  },
  {
    color: "#f20c42",
    avatar: "https://robohash.org/quisintaut.png?size=50x50&set=set1",
    name: "Julius Doncom",
    university: "High Point University",
    sentences:
      "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.",
    Email: "jdoncom8q@paginegialle.it",
  },
  {
    color: "#f20a5f",
    avatar: "https://robohash.org/eoscumsunt.png?size=50x50&set=set1",
    name: "Maighdiln Stranaghan",
    university: "American University in Cairo",
    sentences:
      "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
    Email: "mstranaghan8r@shutterfly.com",
  },
  {
    color: "#69bf40",
    avatar: "https://robohash.org/cupiditatenatuseos.png?size=50x50&set=set1",
    name: "Retha Giroldo",
    university: "Tunku Abdul Rahman University (Chinese University)",
    sentences:
      "Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum.",
    Email: "rgiroldo8s@odnoklassniki.ru",
  },
  {
    color: "#564ea5",
    avatar: "https://robohash.org/consequaturquisqui.png?size=50x50&set=set1",
    name: "Josee Garron",
    university: "Novosibirsk State Music Academy M. Glinka",
    sentences:
      "Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
    Email: "jgarron8t@netvibes.com",
  },
  {
    color: "#a38c5e",
    avatar: "https://robohash.org/estaperiamomnis.png?size=50x50&set=set1",
    name: "Izak Jepson",
    university: "French Institute of Management",
    sentences:
      "Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
    Email: "ijepson8u@theguardian.com",
  },
  {
    color: "#165c11",
    avatar: "https://robohash.org/abiditaque.png?size=50x50&set=set1",
    name: "Jaimie Geraudy",
    university: "Bethel College McKenzie",
    sentences:
      "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
    Email: "jgeraudy8v@usatoday.com",
  },
  {
    color: "#769622",
    avatar: "https://robohash.org/nihilminusaut.png?size=50x50&set=set1",
    name: "Charlean Themann",
    university: "Saint Louis College",
    sentences:
      "Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl.",
    Email: "cthemann8w@google.pl",
  },
  {
    color: "#1d0ee0",
    avatar: "https://robohash.org/autquammolestiae.png?size=50x50&set=set1",
    name: "Lucilia Wegener",
    university:
      "St. Petersburg Repin State Academic Institute of Painting Sculpture and Achitecture",
    sentences: "Suspendisse accumsan tortor quis turpis. Sed ante.",
    Email: "lwegener8x@harvard.edu",
  },
  {
    color: "#607a87",
    avatar:
      "https://robohash.org/quosvoluptatumeveniet.png?size=50x50&set=set1",
    name: "Ansley Waters",
    university: "Freie Kunst-Studienstätte Ottersberg",
    sentences:
      "Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus.",
    Email: "awaters8y@smh.com.au",
  },
  {
    color: "#75c30c",
    avatar: "https://robohash.org/autaboccaecati.png?size=50x50&set=set1",
    name: "Gayla Yea",
    university: "Kumamoto Prefectural University",
    sentences: "Maecenas ut massa quis augue luctus tincidunt.",
    Email: "gyea8z@nbcnews.com",
  },
  {
    color: "#699f78",
    avatar: "https://robohash.org/ipsumculpaest.png?size=50x50&set=set1",
    name: "Dana Look",
    university: "Multimedia University",
    sentences:
      "Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
    Email: "dlook90@independent.co.uk",
  },
  {
    color: "#4aaa6b",
    avatar:
      "https://robohash.org/consequaturvoluptatumea.png?size=50x50&set=set1",
    name: "Delores Windle",
    university: "University of Information Technology & Sciences",
    sentences:
      "Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc.",
    Email: "dwindle91@vkontakte.ru",
  },
  {
    color: "#e6db13",
    avatar: "https://robohash.org/vitaeveroomnis.png?size=50x50&set=set1",
    name: "Shelden Brikner",
    university: "Toin University of Yokohama",
    sentences:
      "Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
    Email: "sbrikner92@scribd.com",
  },
  {
    color: "#7f12c4",
    avatar: "https://robohash.org/etrepellendusmagni.png?size=50x50&set=set1",
    name: "Elaina Ledbetter",
    university: "Kosin University",
    sentences:
      "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
    Email: "eledbetter93@state.tx.us",
  },
  {
    color: "#2145c9",
    avatar: "https://robohash.org/oditexquibusdam.png?size=50x50&set=set1",
    name: "Camel Gaize",
    university: "University of Verona",
    sentences:
      "In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh.",
    Email: "cgaize94@statcounter.com",
  },
  {
    color: "#5e7fd3",
    avatar: "https://robohash.org/porroplaceatsed.png?size=50x50&set=set1",
    name: "Linzy Clementson",
    university: "Thaksin University",
    sentences:
      "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.",
    Email: "lclementson95@illinois.edu",
  },
  {
    color: "#6c7e24",
    avatar:
      "https://robohash.org/autaccusamusconsequatur.png?size=50x50&set=set1",
    name: "Cleon Girhard",
    university: "Taj International College",
    sentences:
      "Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus.",
    Email: "cgirhard96@blogs.com",
  },
  {
    color: "#63b20d",
    avatar: "https://robohash.org/laudantiumipsaet.png?size=50x50&set=set1",
    name: "Englebert McClaurie",
    university: "Southern College of Optometry",
    sentences: "Ut at dolor quis odio consequat varius.",
    Email: "emcclaurie97@jalbum.net",
  },
  {
    color: "#332a59",
    avatar: "https://robohash.org/minimaeiusdistinctio.png?size=50x50&set=set1",
    name: "Cecily Dacey",
    university: "University of Dubuque",
    sentences:
      "Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.",
    Email: "cdacey98@xinhuanet.com",
  },
  {
    color: "#805d8b",
    avatar: "https://robohash.org/iurecorruptisoluta.png?size=50x50&set=set1",
    name: "Natala Usborn",
    university: "Lasell College",
    sentences:
      "Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam. Nam tristique tortor eu pede.",
    Email: "nusborn99@latimes.com",
  },
  {
    color: "#e79c21",
    avatar: "https://robohash.org/velexnemo.png?size=50x50&set=set1",
    name: "Zelig Champerlen",
    university: "Université de Nantes",
    sentences:
      "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    Email: "zchamperlen9a@bluehost.com",
  },
  {
    color: "#16533e",
    avatar: "https://robohash.org/undevoluptatemcum.png?size=50x50&set=set1",
    name: "Rabi Blowin",
    university: "Pädagogische Hochschule Schwäbisch Gmünd",
    sentences:
      "Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.",
    Email: "rblowin9b@reference.com",
  },
  {
    color: "#9e29fe",
    avatar:
      "https://robohash.org/culpanesciuntexercitationem.png?size=50x50&set=set1",
    name: "Nikolai Dorran",
    university: "Hainan University",
    sentences: "In quis justo.",
    Email: "ndorran9c@archive.org",
  },
  {
    color: "#ed6352",
    avatar: "https://robohash.org/iurenullaqui.png?size=50x50&set=set1",
    name: "Konstance Foss",
    university: "Université de Mostaganem",
    sentences:
      "Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus.",
    Email: "kfoss9d@nbcnews.com",
  },
  {
    color: "#677b6b",
    avatar: "https://robohash.org/aliquidfacilisut.png?size=50x50&set=set1",
    name: "Adara Southeran",
    university: "Ecole Nationale de l'Aviation Civile",
    sentences:
      "Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
    Email: "asoutheran9e@fema.gov",
  },
  {
    color: "#3f6d4e",
    avatar: "https://robohash.org/cumquenonvoluptatem.png?size=50x50&set=set1",
    name: "Ingar Marciskewski",
    university: "Namik Kemal University",
    sentences:
      "Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
    Email: "imarciskewski9f@shareasale.com",
  },
  {
    color: "#97c444",
    avatar:
      "https://robohash.org/laudantiumvoluptatibusreprehenderit.png?size=50x50&set=set1",
    name: "Eadith Frugier",
    university: "University of Maine, Fort Kent",
    sentences:
      "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum.",
    Email: "efrugier9g@blogtalkradio.com",
  },
  {
    color: "#13e926",
    avatar: "https://robohash.org/etoditnecessitatibus.png?size=50x50&set=set1",
    name: "Myrta Izen",
    university: "Universidad Americana",
    sentences:
      "Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.",
    Email: "mizen9h@who.int",
  },
  {
    color: "#12d937",
    avatar: "https://robohash.org/estatmaiores.png?size=50x50&set=set1",
    name: "Kata Clelland",
    university: "Brown University",
    sentences:
      "Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.",
    Email: "kclelland9i@fema.gov",
  },
  {
    color: "#23ee2f",
    avatar: "https://robohash.org/maioressitvoluptatem.png?size=50x50&set=set1",
    name: "Hilde Chaves",
    university: "Université d'Avignon",
    sentences:
      "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
    Email: "hchaves9j@amazon.com",
  },
  {
    color: "#324d6a",
    avatar:
      "https://robohash.org/possimuspariaturmolestias.png?size=50x50&set=set1",
    name: "Katharine Aleixo",
    university: "Ufuk University",
    sentences:
      "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis.",
    Email: "kaleixo9k@purevolume.com",
  },
  {
    color: "#25db80",
    avatar: "https://robohash.org/eteaomnis.png?size=50x50&set=set1",
    name: "Blayne Hirjak",
    university: "Aichi University",
    sentences:
      "Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh.",
    Email: "bhirjak9l@wix.com",
  },
  {
    color: "#815e74",
    avatar: "https://robohash.org/utomnisnulla.png?size=50x50&set=set1",
    name: "Gerardo Vicent",
    university: "Indian Board of Alternative Medicine",
    sentences:
      "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.",
    Email: "gvicent9m@merriam-webster.com",
  },
  {
    color: "#655e61",
    avatar:
      "https://robohash.org/molestiaenihilaccusamus.png?size=50x50&set=set1",
    name: "Annnora Samper",
    university: "Otaru University of Commerce",
    sentences:
      "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo.",
    Email: "asamper9n@tripadvisor.com",
  },
  {
    color: "#a42793",
    avatar:
      "https://robohash.org/possimusnamconsequatur.png?size=50x50&set=set1",
    name: "Cassandry Willes",
    university: "Universidad Tecnológica Nacional",
    sentences:
      "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
    Email: "cwilles9o@multiply.com",
  },
  {
    color: "#0ea62e",
    avatar: "https://robohash.org/quasquiipsa.png?size=50x50&set=set1",
    name: "Gilly Treby",
    university: "Baskent University",
    sentences: "Duis bibendum.",
    Email: "gtreby9p@nhs.uk",
  },
  {
    color: "#6cfe72",
    avatar: "https://robohash.org/teneturquisit.png?size=50x50&set=set1",
    name: "Ernesto Dunning",
    university: "Indiana University-Purdue University at Fort Wayne",
    sentences:
      "Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit.",
    Email: "edunning9q@answers.com",
  },
  {
    color: "#2a076a",
    avatar:
      "https://robohash.org/facilisiureconsequatur.png?size=50x50&set=set1",
    name: "Genevieve Curneen",
    university: "University College Dublin",
    sentences:
      "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum.",
    Email: "gcurneen9r@yale.edu",
  },
  {
    color: "#d31fcf",
    avatar:
      "https://robohash.org/asperioresvoluptatemcupiditate.png?size=50x50&set=set1",
    name: "Ami Giacobillo",
    university: "Donetsk National University",
    sentences:
      "Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.",
    Email: "agiacobillo9s@alexa.com",
  },
  {
    color: "#973aa6",
    avatar:
      "https://robohash.org/temporibusminusoccaecati.png?size=50x50&set=set1",
    name: "Stormi Godrich",
    university: "Elon College",
    sentences:
      "Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula.",
    Email: "sgodrich9t@drupal.org",
  },
  {
    color: "#f61e77",
    avatar:
      "https://robohash.org/perferendissapientevoluptatum.png?size=50x50&set=set1",
    name: "Garvin Andersch",
    university: "Masaryk University",
    sentences:
      "Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis.",
    Email: "gandersch9u@tripadvisor.com",
  },
  {
    color: "#ca9962",
    avatar: "https://robohash.org/nequeidcorporis.png?size=50x50&set=set1",
    name: "Ignacio Herreros",
    university: "Université Cheikh Anta Diop",
    sentences:
      "Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
    Email: "iherreros9v@disqus.com",
  },
  {
    color: "#905874",
    avatar: "https://robohash.org/sequisolutadebitis.png?size=50x50&set=set1",
    name: "Aaron Wardle",
    university: "Scott Christian University",
    sentences:
      "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
    Email: "awardle9w@independent.co.uk",
  },
  {
    color: "#87c6d2",
    avatar: "https://robohash.org/inciduntadolorum.png?size=50x50&set=set1",
    name: "Elayne Connick",
    university: "Universidad Privada del Valle",
    sentences:
      "In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius.",
    Email: "econnick9x@rediff.com",
  },
  {
    color: "#330c8c",
    avatar: "https://robohash.org/eumquisvero.png?size=50x50&set=set1",
    name: "Thalia Jessopp",
    university: "Claremont McKenna College",
    sentences:
      "Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue.",
    Email: "tjessopp9y@ucla.edu",
  },
  {
    color: "#1d3b52",
    avatar:
      "https://robohash.org/explicabodictaducimus.png?size=50x50&set=set1",
    name: "Winfield Rainville",
    university: "College of Nursing and Allied Health Scinces",
    sentences:
      "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
    Email: "wrainville9z@bbb.org",
  },
  {
    color: "#fac0af",
    avatar: "https://robohash.org/praesentiumetut.png?size=50x50&set=set1",
    name: "Sherye Bowdler",
    university: "Fukushima University",
    sentences:
      "Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.",
    Email: "sbowdlera0@netvibes.com",
  },
  {
    color: "#2ad7b9",
    avatar: "https://robohash.org/doloraccusamusenim.png?size=50x50&set=set1",
    name: "Roze Jindra",
    university: "British Royal University",
    sentences:
      "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.",
    Email: "rjindraa1@oaic.gov.au",
  },
  {
    color: "#817cce",
    avatar: "https://robohash.org/quisetvoluptatem.png?size=50x50&set=set1",
    name: "Blythe Delleschi",
    university: "Walla Walla College",
    sentences:
      "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
    Email: "bdelleschia2@shutterfly.com",
  },
  {
    color: "#9527bc",
    avatar: "https://robohash.org/autfugitimpedit.png?size=50x50&set=set1",
    name: "Erma Braidman",
    university: "University of Cagayan Valley",
    sentences:
      "Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo.",
    Email: "ebraidmana3@vinaora.com",
  },
  {
    color: "#c4fdd3",
    avatar:
      "https://robohash.org/nemoconsequunturdicta.png?size=50x50&set=set1",
    name: "Carmine Bellchamber",
    university: "St. John's College New Mexico",
    sentences:
      "Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo.",
    Email: "cbellchambera4@yellowbook.com",
  },
  {
    color: "#b43e97",
    avatar:
      "https://robohash.org/architectocupiditateea.png?size=50x50&set=set1",
    name: "Ardys Backler",
    university: "Mohammad Ali Jinnah University",
    sentences:
      "Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.",
    Email: "abacklera5@hud.gov",
  },
  {
    color: "#b5d619",
    avatar: "https://robohash.org/etametab.png?size=50x50&set=set1",
    name: "Cherilynn Coghlin",
    university: "Shanghai International Studies University",
    sentences:
      "Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
    Email: "ccoghlina6@un.org",
  },
  {
    color: "#844280",
    avatar: "https://robohash.org/corporiseosvoluptas.png?size=50x50&set=set1",
    name: "Boris O' Donohoe",
    university: "Yorker International University, Athens",
    sentences:
      "Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum.",
    Email: "boa7@epa.gov",
  },
  {
    color: "#f3c39a",
    avatar: "https://robohash.org/mollitiafugaenim.png?size=50x50&set=set1",
    name: "Inness Kempshall",
    university: "University of Bolton",
    sentences: "Duis at velit eu est congue elementum.",
    Email: "ikempshalla8@nasa.gov",
  },
  {
    color: "#d8ea52",
    avatar: "https://robohash.org/fugaestaut.png?size=50x50&set=set1",
    name: "Nikolos Pandya",
    university: "Mazandaran University of Iran",
    sentences:
      "Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
    Email: "npandyaa9@fda.gov",
  },
  {
    color: "#69461d",
    avatar:
      "https://robohash.org/aspernaturliberoeveniet.png?size=50x50&set=set1",
    name: "Marena Fackrell",
    university: "Universidade Federal de São Paulo",
    sentences:
      "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.",
    Email: "mfackrellaa@cnet.com",
  },
  {
    color: "#34b86b",
    avatar: "https://robohash.org/namdoloresporro.png?size=50x50&set=set1",
    name: "Edythe Balassi",
    university: "Kent State University - Salem",
    sentences:
      "Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.",
    Email: "ebalassiab@yale.edu",
  },
  {
    color: "#ca6ce6",
    avatar: "https://robohash.org/omnisutsit.png?size=50x50&set=set1",
    name: "L;urette Jewel",
    university: "Samara State Medical University",
    sentences:
      "In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue.",
    Email: "ljewelac@mapquest.com",
  },
  {
    color: "#801bde",
    avatar: "https://robohash.org/accusamussitet.png?size=50x50&set=set1",
    name: "Richard McCusker",
    university: "University of Horticulture and Food Industry",
    sentences:
      "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.",
    Email: "rmccuskerad@netvibes.com",
  },
  {
    color: "#a25ddc",
    avatar: "https://robohash.org/magniliberoqui.png?size=50x50&set=set1",
    name: "Stephani Bissett",
    university: "Swinburne University of Technology, Sarawak Campus",
    sentences:
      "Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    Email: "sbissettae@instagram.com",
  },
  {
    color: "#e6583e",
    avatar:
      "https://robohash.org/eumdignissimosreprehenderit.png?size=50x50&set=set1",
    name: "Konrad O' Molan",
    university: "Universidad ORT Uruguay",
    sentences:
      "Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.",
    Email: "koaf@wunderground.com",
  },
  {
    color: "#50f466",
    avatar: "https://robohash.org/delenitidoloremanimi.png?size=50x50&set=set1",
    name: "Erinn Ambrogio",
    university: "Kuvempu University",
    sentences:
      "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
    Email: "eambrogioag@irs.gov",
  },
  {
    color: "#1a17b6",
    avatar:
      "https://robohash.org/autemquisquamrepudiandae.png?size=50x50&set=set1",
    name: "Che Hebden",
    university: "Universidad Politécnica de Cartagena",
    sentences:
      "In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt.",
    Email: "chebdenah@chicagotribune.com",
  },
  {
    color: "#39230c",
    avatar: "https://robohash.org/isteestomnis.png?size=50x50&set=set1",
    name: "Jewel Anger",
    university: "Universidade do Estado da Bahia",
    sentences:
      "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit.",
    Email: "jangerai@blogspot.com",
  },
  {
    color: "#6eb836",
    avatar: "https://robohash.org/corruptiquicorporis.png?size=50x50&set=set1",
    name: "Charlean Crow",
    university: "Yildiz Technical University",
    sentences:
      "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit.",
    Email: "ccrowaj@bbc.co.uk",
  },
  {
    color: "#0bff87",
    avatar: "https://robohash.org/omnissitvoluptates.png?size=50x50&set=set1",
    name: "Morris Truman",
    university: "Universitas Katolik Widya Manadala",
    sentences:
      "In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
    Email: "mtrumanak@toplist.cz",
  },
  {
    color: "#f2e170",
    avatar: "https://robohash.org/dolorconsequaturvel.png?size=50x50&set=set1",
    name: "Dalton Habershaw",
    university: "International College of Tourism and Hotel Management",
    sentences:
      "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.",
    Email: "dhabershawal@noaa.gov",
  },
  {
    color: "#a95020",
    avatar:
      "https://robohash.org/rationeillumpraesentium.png?size=50x50&set=set1",
    name: "Elizabeth Pitway",
    university: "Université de Bouaké",
    sentences:
      "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum.",
    Email: "epitwayam@histats.com",
  },
  {
    color: "#14bdfd",
    avatar: "https://robohash.org/quimagnivel.png?size=50x50&set=set1",
    name: "Keen Lummis",
    university: "Fachhochschule Ludwigshafen, Hochschule für Wirtschaft",
    sentences: "Aenean fermentum.",
    Email: "klummisan@nydailynews.com",
  },
  {
    color: "#790005",
    avatar:
      "https://robohash.org/quieligendiexercitationem.png?size=50x50&set=set1",
    name: "Allys Ilyinykh",
    university:
      "Universiti Kuala Lumpur Malaysian Institute of Information Technology (MIIT)",
    sentences:
      "In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue.",
    Email: "ailyinykhao@themeforest.net",
  },
  {
    color: "#16c34e",
    avatar: "https://robohash.org/aliashicqui.png?size=50x50&set=set1",
    name: "Blanche Burberye",
    university: "Universidad de Santiago de Chile",
    sentences:
      "Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna.",
    Email: "bburberyeap@printfriendly.com",
  },
  {
    color: "#181bd5",
    avatar: "https://robohash.org/harumblanditiisautem.png?size=50x50&set=set1",
    name: "Ashely Paddock",
    university: "Florida Community College at Jacksonville",
    sentences:
      "Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl.",
    Email: "apaddockaq@amazon.co.jp",
  },
  {
    color: "#9a6f60",
    avatar: "https://robohash.org/velitveldolorem.png?size=50x50&set=set1",
    name: "Lia Fussie",
    university: "University of Houston",
    sentences:
      "Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum.",
    Email: "lfussiear@jalbum.net",
  },
  {
    color: "#179a39",
    avatar: "https://robohash.org/commodisedmolestiae.png?size=50x50&set=set1",
    name: "Waylen Ledger",
    university: "College of Aeronautics",
    sentences:
      "Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
    Email: "wledgeras@sciencedirect.com",
  },
  {
    color: "#7da8ab",
    avatar: "https://robohash.org/earumautlabore.png?size=50x50&set=set1",
    name: "Jessamyn d' Elboux",
    university: "Universidad la Concordia",
    sentences:
      "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
    Email: "jdat@aol.com",
  },
  {
    color: "#57cf1d",
    avatar: "https://robohash.org/evenieteosid.png?size=50x50&set=set1",
    name: "Randolf McElwee",
    university: "Université de Versailles Saint-Quentin-en-Yvelines",
    sentences:
      "Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
    Email: "rmcelweeau@cnet.com",
  },
  {
    color: "#9a2ce1",
    avatar: "https://robohash.org/autbeataein.png?size=50x50&set=set1",
    name: "Maris Fligg",
    university: "Patuakhali Science and Technology University",
    sentences:
      "Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.",
    Email: "mfliggav@marriott.com",
  },
  {
    color: "#44f61b",
    avatar: "https://robohash.org/possimusoptioplaceat.png?size=50x50&set=set1",
    name: "Gilles Nellies",
    university: "Alahgaff University",
    sentences:
      "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.",
    Email: "gnelliesaw@angelfire.com",
  },
  {
    color: "#dce1ff",
    avatar: "https://robohash.org/sedquaequi.png?size=50x50&set=set1",
    name: "Cassi Kinny",
    university: "Knox College",
    sentences:
      "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.",
    Email: "ckinnyax@prweb.com",
  },
  {
    color: "#da47e5",
    avatar: "https://robohash.org/corruptiautea.png?size=50x50&set=set1",
    name: "Aubine Harrowell",
    university: "Pädagogische Hochschule Zürich (Zurich School of Education)",
    sentences:
      "Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
    Email: "aharrowellay@google.com.hk",
  },
  {
    color: "#2ed85e",
    avatar: "https://robohash.org/commodinatuset.png?size=50x50&set=set1",
    name: "Karole Dickson",
    university: "Kabul University",
    sentences:
      "Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim.",
    Email: "kdicksonaz@drupal.org",
  },
  {
    color: "#d44b45",
    avatar: "https://robohash.org/eiusetmodi.png?size=50x50&set=set1",
    name: "Ettie Burnhard",
    university: "Universidad Americana",
    sentences:
      "Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
    Email: "eburnhardb0@apple.com",
  },
  {
    color: "#dd0f89",
    avatar: "https://robohash.org/quiquisoptio.png?size=50x50&set=set1",
    name: "Gussy Sandyfirth",
    university: "Dar Al-Uloom Colleges",
    sentences:
      "Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.",
    Email: "gsandyfirthb1@hostgator.com",
  },
  {
    color: "#5032a2",
    avatar: "https://robohash.org/eaqueestaccusantium.png?size=50x50&set=set1",
    name: "Rodrique Spours",
    university: "Sonoda Women's University",
    sentences:
      "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.",
    Email: "rspoursb2@dailymail.co.uk",
  },
  {
    color: "#8c3fda",
    avatar: "https://robohash.org/explicabononratione.png?size=50x50&set=set1",
    name: "Maximilien Borwick",
    university: "Randolph-Macon College",
    sentences:
      "Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
    Email: "mborwickb3@ftc.gov",
  },
  {
    color: "#b48ec0",
    avatar:
      "https://robohash.org/optiocorruptisimilique.png?size=50x50&set=set1",
    name: "Scotty Bartels",
    university: "Arid Agriculture University",
    sentences: "Integer tincidunt ante vel ipsum.",
    Email: "sbartelsb4@multiply.com",
  },
  {
    color: "#050cd9",
    avatar: "https://robohash.org/aspernaturexdolore.png?size=50x50&set=set1",
    name: "Lucky Lackmann",
    university: "Quincy University",
    sentences:
      "Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus.",
    Email: "llackmannb5@spiegel.de",
  },
  {
    color: "#c626c2",
    avatar: "https://robohash.org/etquiest.png?size=50x50&set=set1",
    name: "Brianne Betun",
    university: "Fontys University of Applied Sciences",
    sentences:
      "Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla.",
    Email: "bbetunb6@google.fr",
  },
  {
    color: "#c53485",
    avatar: "https://robohash.org/nemoearumblanditiis.png?size=50x50&set=set1",
    name: "Schuyler Killiner",
    university: "Instituto Universitario Nacional del Arte",
    sentences:
      "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
    Email: "skillinerb7@slate.com",
  },
  {
    color: "#49638b",
    avatar: "https://robohash.org/placeatiurequi.png?size=50x50&set=set1",
    name: "Jere Dawks",
    university: "American University of Armenia",
    sentences:
      "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.",
    Email: "jdawksb8@sciencedaily.com",
  },
  {
    color: "#98e4a8",
    avatar: "https://robohash.org/atquasiconsequatur.png?size=50x50&set=set1",
    name: "Cary Murfill",
    university: "Hakodate University",
    sentences:
      "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius.",
    Email: "cmurfillb9@shinystat.com",
  },
  {
    color: "#244b53",
    avatar:
      "https://robohash.org/doloribusrecusandaedolor.png?size=50x50&set=set1",
    name: "Joellen Donkersley",
    university: "Universitas Pekalongan",
    sentences:
      "In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl.",
    Email: "jdonkersleyba@nasa.gov",
  },
  {
    color: "#e1eeb4",
    avatar: "https://robohash.org/oditremenim.png?size=50x50&set=set1",
    name: "Bartram Bartoszewski",
    university:
      "Universidad Católica Argentina Santa Maria de los Buenos Aires",
    sentences:
      "Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
    Email: "bbartoszewskibb@amazon.de",
  },
  {
    color: "#256072",
    avatar: "https://robohash.org/isteenimnon.png?size=50x50&set=set1",
    name: "Stepha Ullock",
    university: "University of Oklahoma Health Sciences Center",
    sentences:
      "Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim.",
    Email: "sullockbc@buzzfeed.com",
  },
  {
    color: "#88d138",
    avatar:
      "https://robohash.org/pariaturnemodignissimos.png?size=50x50&set=set1",
    name: "Alika MacFarlane",
    university: "Hokkaigakuen University",
    sentences:
      "Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
    Email: "amacfarlanebd@domainmarket.com",
  },
  {
    color: "#617282",
    avatar:
      "https://robohash.org/dignissimosaspernatureveniet.png?size=50x50&set=set1",
    name: "Gian Weild",
    university: "Chongju University",
    sentences:
      "In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.",
    Email: "gweildbe@163.com",
  },
  {
    color: "#b390fe",
    avatar:
      "https://robohash.org/quisquamaccusamusminima.png?size=50x50&set=set1",
    name: "Emilia Webber",
    university: "Moscow State University of Commerce",
    sentences:
      "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.",
    Email: "ewebberbf@amazon.co.uk",
  },
  {
    color: "#11dc8e",
    avatar: "https://robohash.org/inetet.png?size=50x50&set=set1",
    name: "Scotti Vany",
    university: "Seneca College",
    sentences:
      "Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
    Email: "svanybg@booking.com",
  },
  {
    color: "#706f80",
    avatar:
      "https://robohash.org/quibusdamdoloreserror.png?size=50x50&set=set1",
    name: "Inesita Ruff",
    university: "Loyola University New Orleans",
    sentences:
      "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis.",
    Email: "iruffbh@whitehouse.gov",
  },
  {
    color: "#a80488",
    avatar: "https://robohash.org/doloresincupiditate.png?size=50x50&set=set1",
    name: "Jodie Prandy",
    university: "Berne University",
    sentences:
      "Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.",
    Email: "jprandybi@china.com.cn",
  },
  {
    color: "#cbb70f",
    avatar:
      "https://robohash.org/omnisoccaecatialiquam.png?size=50x50&set=set1",
    name: "Allister Stilliard",
    university: "Universidade Portucalense Infante D. Henrique",
    sentences:
      "Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.",
    Email: "astilliardbj@narod.ru",
  },
  {
    color: "#415408",
    avatar: "https://robohash.org/estteneturquidem.png?size=50x50&set=set1",
    name: "Waylan Haslehurst",
    university: "Chinese Culture University",
    sentences:
      "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.",
    Email: "whaslehurstbk@cafepress.com",
  },
  {
    color: "#1d6d1e",
    avatar: "https://robohash.org/suntconsecteturqui.png?size=50x50&set=set1",
    name: "Raf Jellyman",
    university: "Higher Institute of Agriculture and Animal Husbandry",
    sentences:
      "Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst.",
    Email: "rjellymanbl@hp.com",
  },
  {
    color: "#93de6a",
    avatar: "https://robohash.org/pariaturutaliquam.png?size=50x50&set=set1",
    name: "Raleigh Dochon",
    university: "University of Wah",
    sentences: "Morbi a ipsum. Integer a nibh.",
    Email: "rdochonbm@nbcnews.com",
  },
  {
    color: "#e0f616",
    avatar: "https://robohash.org/minimautexplicabo.png?size=50x50&set=set1",
    name: "Aharon Betterton",
    university: "Averett College",
    sentences:
      "Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
    Email: "abettertonbn@ucsd.edu",
  },
  {
    color: "#0cb753",
    avatar: "https://robohash.org/quiavitaequi.png?size=50x50&set=set1",
    name: "Barbe Oates",
    university: "Shaheed Chamran University",
    sentences:
      "Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
    Email: "boatesbo@harvard.edu",
  },
  {
    color: "#278190",
    avatar: "https://robohash.org/porroautaccusantium.png?size=50x50&set=set1",
    name: "Gertruda Franzotto",
    university: "Cardinal Stritch University",
    sentences:
      "Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.",
    Email: "gfranzottobp@t.co",
  },
  {
    color: "#c96c14",
    avatar:
      "https://robohash.org/culpavoluptatibusodio.png?size=50x50&set=set1",
    name: "Helaina Ryson",
    university: "National College of Physical Education and Sports",
    sentences:
      "Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue.",
    Email: "hrysonbq@reddit.com",
  },
  {
    color: "#4f2e63",
    avatar:
      "https://robohash.org/doloremqueofficiiseos.png?size=50x50&set=set1",
    name: "Marie-ann Spottiswoode",
    university: "Vikrama Simhapuri University",
    sentences:
      "Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.",
    Email: "mspottiswoodebr@ftc.gov",
  },
  {
    color: "#831294",
    avatar:
      "https://robohash.org/assumendaautsimilique.png?size=50x50&set=set1",
    name: "Conney O'Flaverty",
    university: "Centro Universitario Ixtlahuaca",
    sentences:
      "Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor.",
    Email: "coflavertybs@pcworld.com",
  },
  {
    color: "#524d16",
    avatar: "https://robohash.org/idaspernaturporro.png?size=50x50&set=set1",
    name: "Gallagher Cullinan",
    university: "Grace College",
    sentences:
      "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.",
    Email: "gcullinanbt@wired.com",
  },
  {
    color: "#f5ed18",
    avatar: "https://robohash.org/eumetut.png?size=50x50&set=set1",
    name: "Rogerio Rikel",
    university: "Universidad de Los Andes",
    sentences:
      "Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
    Email: "rrikelbu@mtv.com",
  },
  {
    color: "#c7b17c",
    avatar: "https://robohash.org/perspiciatisautemsed.png?size=50x50&set=set1",
    name: "Clem Stribling",
    university: "Louisiana State University in Shreveport",
    sentences: "Integer tincidunt ante vel ipsum.",
    Email: "cstriblingbv@trellian.com",
  },
  {
    color: "#edf063",
    avatar: "https://robohash.org/remquiaipsam.png?size=50x50&set=set1",
    name: "Reider Clitheroe",
    university: "Universitas Sebelas Maret",
    sentences:
      "Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
    Email: "rclitheroebw@businessinsider.com",
  },
  {
    color: "#955838",
    avatar: "https://robohash.org/nemorationeamet.png?size=50x50&set=set1",
    name: "Early Rustadge",
    university: "University of NorthWest",
    sentences:
      "Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.",
    Email: "erustadgebx@addtoany.com",
  },
  {
    color: "#aa543b",
    avatar:
      "https://robohash.org/deseruntvoluptasmaiores.png?size=50x50&set=set1",
    name: "Ivie Tezure",
    university: "American Conservatory Theater",
    sentences:
      "Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst.",
    Email: "itezureby@yahoo.co.jp",
  },
  {
    color: "#6e4078",
    avatar: "https://robohash.org/accusantiumcumquevel.png?size=50x50&set=set1",
    name: "Marnia Revelle",
    university: "Black Hills State University",
    sentences:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    Email: "mrevellebz@baidu.com",
  },
  {
    color: "#1b975a",
    avatar:
      "https://robohash.org/consequaturnoneveniet.png?size=50x50&set=set1",
    name: "Scotty Hazard",
    university: "Millikin University",
    sentences:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.",
    Email: "shazardc0@google.it",
  },
  {
    color: "#35be12",
    avatar: "https://robohash.org/etiustodolor.png?size=50x50&set=set1",
    name: "Delinda Niblock",
    university: "University of Teramo",
    sentences:
      "Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis.",
    Email: "dniblockc1@multiply.com",
  },
  {
    color: "#debf24",
    avatar:
      "https://robohash.org/laborevoluptatummaxime.png?size=50x50&set=set1",
    name: "Codee Novill",
    university: "Prague Institute of Chemical Technology",
    sentences:
      "Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.",
    Email: "cnovillc2@godaddy.com",
  },
  {
    color: "#c3e4ad",
    avatar: "https://robohash.org/perspiciatisdoloret.png?size=50x50&set=set1",
    name: "Alina Horribine",
    university: "Institue of Technology, Tralee",
    sentences: "Cras non velit nec nisi vulputate nonummy.",
    Email: "ahorribinec3@digg.com",
  },
  {
    color: "#b7ecb0",
    avatar:
      "https://robohash.org/explicabocumcupiditate.png?size=50x50&set=set1",
    name: "Kriste Westcot",
    university: "St. Joseph College",
    sentences:
      "Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum.",
    Email: "kwestcotc4@dyndns.org",
  },
  {
    color: "#1e3171",
    avatar: "https://robohash.org/modivelitest.png?size=50x50&set=set1",
    name: "Kendrick Laise",
    university: "Wartburg College",
    sentences:
      "Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.",
    Email: "klaisec5@rambler.ru",
  },
  {
    color: "#79e79e",
    avatar: "https://robohash.org/autemvoluptatemtotam.png?size=50x50&set=set1",
    name: "Darbie Tupling",
    university: "Majan University College",
    sentences:
      "Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum.",
    Email: "dtuplingc6@sbwire.com",
  },
  {
    color: "#d15f09",
    avatar: "https://robohash.org/commodiautemmagni.png?size=50x50&set=set1",
    name: "Emelen Keyser",
    university:
      "Volgograd State University of Architecture and Civil Engineering (VolgGASU)",
    sentences:
      "Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam. Nam tristique tortor eu pede.",
    Email: "ekeyserc7@twitter.com",
  },
  {
    color: "#ac307c",
    avatar:
      "https://robohash.org/faceredoloribusquidem.png?size=50x50&set=set1",
    name: "Westleigh Corsor",
    university: "Sapporo Gakuin University",
    sentences:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.",
    Email: "wcorsorc8@php.net",
  },
  {
    color: "#ca1164",
    avatar: "https://robohash.org/situtquae.png?size=50x50&set=set1",
    name: "Breena Piet",
    university: "University of Maryland at Baltimore",
    sentences:
      "Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
    Email: "bpietc9@ebay.com",
  },
  {
    color: "#77f5b8",
    avatar:
      "https://robohash.org/solutadoloremperspiciatis.png?size=50x50&set=set1",
    name: "Chiquia Hargerie",
    university: "Pennsylvania State University - Lehigh Valley",
    sentences:
      "Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.",
    Email: "chargerieca@t-online.de",
  },
  {
    color: "#b3304c",
    avatar: "https://robohash.org/repellatdelectusquo.png?size=50x50&set=set1",
    name: "Kyrstin Harry",
    university: "Universidad Nacional Jorge Basadre Grohmann",
    sentences:
      "In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
    Email: "kharrycb@imdb.com",
  },
  {
    color: "#ecc8f0",
    avatar:
      "https://robohash.org/nobisconsequaturmolestias.png?size=50x50&set=set1",
    name: "Agathe Flucker",
    university: "Hellenic Army Academy",
    sentences:
      "Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy.",
    Email: "afluckercc@squidoo.com",
  },
  {
    color: "#731996",
    avatar: "https://robohash.org/mollitiainneque.png?size=50x50&set=set1",
    name: "Linc Speere",
    university: "Cankaya University",
    sentences: "Vivamus tortor.",
    Email: "lspeerecd@hugedomains.com",
  },
  {
    color: "#6c1e07",
    avatar:
      "https://robohash.org/ipsumpraesentiumconsectetur.png?size=50x50&set=set1",
    name: "Slade Matuszak",
    university: "Nepal Sanskrit University",
    sentences:
      "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.",
    Email: "smatuszakce@exblog.jp",
  },
  {
    color: "#4916d9",
    avatar: "https://robohash.org/impeditcumquein.png?size=50x50&set=set1",
    name: "Sim Blance",
    university: "Huazhong University of Science and Technology",
    sentences:
      "In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.",
    Email: "sblancecf@taobao.com",
  },
  {
    color: "#ef945a",
    avatar:
      "https://robohash.org/ipsamconsequunturtemporibus.png?size=50x50&set=set1",
    name: "Olenolin Canavan",
    university: "Seneca College",
    sentences:
      "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
    Email: "ocanavancg@about.com",
  },
  {
    color: "#7abf56",
    avatar:
      "https://robohash.org/laborumquaeconsequatur.png?size=50x50&set=set1",
    name: "Zola Jackways",
    university: "Neijiang Teacher University",
    sentences:
      "Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
    Email: "zjackwaysch@noaa.gov",
  },
  {
    color: "#c7aaaf",
    avatar: "https://robohash.org/fugamodimolestias.png?size=50x50&set=set1",
    name: "Lucita Dominico",
    university: "Southern University - Baton Rouge",
    sentences:
      "Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis.",
    Email: "ldominicoci@fastcompany.com",
  },
  {
    color: "#5077c0",
    avatar: "https://robohash.org/debitisaliquidnulla.png?size=50x50&set=set1",
    name: "Gorden Timmes",
    university: "Schiller International University, London",
    sentences:
      "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo.",
    Email: "gtimmescj@privacy.gov.au",
  },
  {
    color: "#2b3466",
    avatar: "https://robohash.org/estconsequaturlibero.png?size=50x50&set=set1",
    name: "Aundrea Gyrgorwicx",
    university: "Dhurakijpundit University",
    sentences:
      "Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus.",
    Email: "agyrgorwicxck@theatlantic.com",
  },
  {
    color: "#cdae69",
    avatar:
      "https://robohash.org/istedolorestemporibus.png?size=50x50&set=set1",
    name: "Lilian Lamplough",
    university: "University of Electro-Communications",
    sentences:
      "Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim.",
    Email: "llamploughcl@fda.gov",
  },
  {
    color: "#97e68a",
    avatar:
      "https://robohash.org/distinctiobeataesoluta.png?size=50x50&set=set1",
    name: "Bartel Perch",
    university: "Moscow State University of Forestry Engineering",
    sentences:
      "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus.",
    Email: "bperchcm@smh.com.au",
  },
  {
    color: "#d7a3d3",
    avatar: "https://robohash.org/consequaturvelitvel.png?size=50x50&set=set1",
    name: "Javier Eliet",
    university: "Vrije Universiteit Brussel",
    sentences:
      "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.",
    Email: "jelietcn@cpanel.net",
  },
  {
    color: "#fc5c60",
    avatar: "https://robohash.org/laborumaliquamet.png?size=50x50&set=set1",
    name: "Shawn Goatman",
    university: "Universidad Santo Tomás",
    sentences:
      "Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    Email: "sgoatmanco@usa.gov",
  },
  {
    color: "#ce10ee",
    avatar: "https://robohash.org/nihildolorenatus.png?size=50x50&set=set1",
    name: "Drusi Lingard",
    university: "Universitas Ibn Chaldun Jakarta",
    sentences:
      "In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
    Email: "dlingardcp@intel.com",
  },
  {
    color: "#3b2f01",
    avatar: "https://robohash.org/adipisciutdicta.png?size=50x50&set=set1",
    name: "Lorilee Swain",
    university: "Trinity Theological Seminary",
    sentences:
      "Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
    Email: "lswaincq@smh.com.au",
  },
  {
    color: "#14200f",
    avatar: "https://robohash.org/quietnostrum.png?size=50x50&set=set1",
    name: "Axel Martell",
    university: "Huachiew Chalermprakiet University",
    sentences:
      "Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
    Email: "amartellcr@youtube.com",
  },
  {
    color: "#8f7df5",
    avatar: "https://robohash.org/quiinsuscipit.png?size=50x50&set=set1",
    name: "Shaughn Fassam",
    university: "Fukuoka Prefectural University",
    sentences:
      "In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem.",
    Email: "sfassamcs@nytimes.com",
  },
  {
    color: "#4ce212",
    avatar: "https://robohash.org/etlaborumet.png?size=50x50&set=set1",
    name: "Gradeigh Farnan",
    university: "Universidad Catolica de Valparaiso",
    sentences:
      "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor.",
    Email: "gfarnanct@jugem.jp",
  },
  {
    color: "#7e8945",
    avatar:
      "https://robohash.org/natussuscipitmolestiae.png?size=50x50&set=set1",
    name: "Anthony Troucher",
    university: "Westminster College of Salt Lake City",
    sentences: "Duis consequat dui nec nisi volutpat eleifend.",
    Email: "atrouchercu@deviantart.com",
  },
  {
    color: "#71adab",
    avatar:
      "https://robohash.org/molestiaeiurerecusandae.png?size=50x50&set=set1",
    name: "Earvin O' Hern",
    university: "Koya University (Kurdistan Region)",
    sentences:
      "Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.",
    Email: "eocv@cbsnews.com",
  },
  {
    color: "#1a9ef7",
    avatar: "https://robohash.org/quiaquimodi.png?size=50x50&set=set1",
    name: "Edgardo Stell",
    university: "Tomsk State University",
    sentences:
      "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna.",
    Email: "estellcw@google.co.uk",
  },
  {
    color: "#a398b9",
    avatar: "https://robohash.org/velcupiditateatque.png?size=50x50&set=set1",
    name: "Phedra Smullin",
    university: "Masaryk University",
    sentences:
      "Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
    Email: "psmullincx@nasa.gov",
  },
  {
    color: "#d93f69",
    avatar: "https://robohash.org/eligendirecusandaeet.png?size=50x50&set=set1",
    name: "Tillie Gimber",
    university: "Sri Ramachardra Medical College and Research Institute",
    sentences:
      "Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
    Email: "tgimbercy@flickr.com",
  },
  {
    color: "#cfae50",
    avatar:
      "https://robohash.org/nesciuntautvoluptates.png?size=50x50&set=set1",
    name: "Stan Boskell",
    university: "Qom University of Technology",
    sentences: "Aliquam erat volutpat. In congue.",
    Email: "sboskellcz@webnode.com",
  },
  {
    color: "#8fd74c",
    avatar: "https://robohash.org/nobisinvoluptatem.png?size=50x50&set=set1",
    name: "Othella Whitten",
    university: "Universidade Federal da Grande Dourados",
    sentences:
      "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum.",
    Email: "owhittend0@tiny.cc",
  },
  {
    color: "#9a8954",
    avatar: "https://robohash.org/velitetipsum.png?size=50x50&set=set1",
    name: "Pepe Blackaller",
    university: "Ross University Caribbean School of Veterinary Medicine",
    sentences:
      "Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus.",
    Email: "pblackallerd1@vistaprint.com",
  },
  {
    color: "#8d9e17",
    avatar: "https://robohash.org/illonumquamnostrum.png?size=50x50&set=set1",
    name: "Biddy Wrenn",
    university: "Universidade do Porto",
    sentences:
      "Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem.",
    Email: "bwrennd2@comsenz.com",
  },
  {
    color: "#dd9eb5",
    avatar: "https://robohash.org/providentvelitet.png?size=50x50&set=set1",
    name: "Lillis Raiker",
    university: "Mashhad University of Medical Sciences",
    sentences:
      "Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
    Email: "lraikerd3@qq.com",
  },
  {
    color: "#28d7a2",
    avatar:
      "https://robohash.org/minusautemconsequatur.png?size=50x50&set=set1",
    name: "Conchita Statham",
    university: "Technological Education Institute of Thessaloniki",
    sentences:
      "Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
    Email: "cstathamd4@youku.com",
  },
  {
    color: "#86c91f",
    avatar: "https://robohash.org/delectusautin.png?size=50x50&set=set1",
    name: "Kristi Jarry",
    university: "Siberian State Transport University",
    sentences:
      "Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus.",
    Email: "kjarryd5@marketwatch.com",
  },
  {
    color: "#891279",
    avatar:
      "https://robohash.org/expeditavoluptatibusut.png?size=50x50&set=set1",
    name: "Fowler Gosz",
    university: "Chongju University",
    sentences:
      "Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus.",
    Email: "fgoszd6@posterous.com",
  },
  {
    color: "#b50b6a",
    avatar: "https://robohash.org/laudantiumetquam.png?size=50x50&set=set1",
    name: "Francesca Goby",
    university: "Université d'Alger 3",
    sentences:
      "Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.",
    Email: "fgobyd7@goo.ne.jp",
  },
  {
    color: "#28013b",
    avatar:
      "https://robohash.org/molestiaeillumcorporis.png?size=50x50&set=set1",
    name: "Barton Filtness",
    university: "Shaanxi Normal University",
    sentences:
      "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus.",
    Email: "bfiltnessd8@bbb.org",
  },
  {
    color: "#b7bc7d",
    avatar: "https://robohash.org/quiaautcorporis.png?size=50x50&set=set1",
    name: "Toni Patesel",
    university: "University of Nebraska Medical Center",
    sentences:
      "Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
    Email: "tpateseld9@wikispaces.com",
  },
  {
    color: "#ac502a",
    avatar: "https://robohash.org/etvelitrepellendus.png?size=50x50&set=set1",
    name: "Carena Elsmere",
    university: "Temple University Japan",
    sentences:
      "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.",
    Email: "celsmereda@reverbnation.com",
  },
  {
    color: "#539b61",
    avatar:
      "https://robohash.org/accusamuscommodibeatae.png?size=50x50&set=set1",
    name: "Hewe Antcliffe",
    university: "Universitas Padjadjaran",
    sentences:
      "Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus.",
    Email: "hantcliffedb@upenn.edu",
  },
  {
    color: "#e8e1dd",
    avatar:
      "https://robohash.org/optiomolestiaeeveniet.png?size=50x50&set=set1",
    name: "Grayce Town",
    university: "Universidad del Pacifico",
    sentences:
      "Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
    Email: "gtowndc@cornell.edu",
  },
  {
    color: "#4ee3c0",
    avatar: "https://robohash.org/vitaeutiure.png?size=50x50&set=set1",
    name: "Celina Stoak",
    university: "Nicholls State University",
    sentences:
      "Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit.",
    Email: "cstoakdd@ycombinator.com",
  },
  {
    color: "#3de843",
    avatar:
      "https://robohash.org/molestiasdolorexplicabo.png?size=50x50&set=set1",
    name: "Leilah Monteaux",
    university: "Universidad Motolinía del Pedregal",
    sentences:
      "Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo.",
    Email: "lmonteauxde@hexun.com",
  },
  {
    color: "#4c2884",
    avatar:
      "https://robohash.org/autrepellendusaliquid.png?size=50x50&set=set1",
    name: "Lion Klamman",
    university: "Flagler College",
    sentences:
      "Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis.",
    Email: "lklammandf@mozilla.org",
  },
  {
    color: "#1887bf",
    avatar: "https://robohash.org/quidoloreea.png?size=50x50&set=set1",
    name: "Shane Alchin",
    university: "Coe College",
    sentences: "Aliquam erat volutpat. In congue. Etiam justo.",
    Email: "salchindg@rakuten.co.jp",
  },
  {
    color: "#f52690",
    avatar: "https://robohash.org/dignissimosquisoluta.png?size=50x50&set=set1",
    name: "Dora Konig",
    university: "Academy of Public Administration of Belarus",
    sentences:
      "Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
    Email: "dkonigdh@github.com",
  },
  {
    color: "#bf4a13",
    avatar: "https://robohash.org/laboriosamnontenetur.png?size=50x50&set=set1",
    name: "Wren Whytock",
    university: "Medical University Pleven",
    sentences:
      "Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.",
    Email: "wwhytockdi@globo.com",
  },
  {
    color: "#1bf80a",
    avatar:
      "https://robohash.org/porroperspiciatisratione.png?size=50x50&set=set1",
    name: "Rosa Charer",
    university: "Akhbar El Yom Academy",
    sentences: "Nulla mollis molestie lorem.",
    Email: "rcharerdj@seesaa.net",
  },
  {
    color: "#ed32a2",
    avatar: "https://robohash.org/eligendivelitunde.png?size=50x50&set=set1",
    name: "Jolee Ricson",
    university: "Tokyo Woman's Christian University",
    sentences:
      "Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti.",
    Email: "jricsondk@vinaora.com",
  },
  {
    color: "#d3c827",
    avatar: "https://robohash.org/quoreprehenderitsunt.png?size=50x50&set=set1",
    name: "Clim Ledekker",
    university: "Universidad Popular Autonóma del Estado de Puebla",
    sentences: "Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.",
    Email: "cledekkerdl@msu.edu",
  },
  {
    color: "#005c93",
    avatar: "https://robohash.org/adipisciidomnis.png?size=50x50&set=set1",
    name: "Gwenette Landon",
    university: "University of the Philippines Mindanao",
    sentences:
      "Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo.",
    Email: "glandondm@eventbrite.com",
  },
  {
    color: "#178808",
    avatar: "https://robohash.org/quinullanihil.png?size=50x50&set=set1",
    name: "Salaidh Lodwig",
    university: "University of Camerino",
    sentences:
      "Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.",
    Email: "slodwigdn@vistaprint.com",
  },
  {
    color: "#9309c9",
    avatar:
      "https://robohash.org/omnisdoloribusaperiam.png?size=50x50&set=set1",
    name: "Jaynell Killbey",
    university: "Global University",
    sentences:
      "Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio.",
    Email: "jkillbeydo@google.com.br",
  },
  {
    color: "#a06556",
    avatar: "https://robohash.org/aatquequos.png?size=50x50&set=set1",
    name: "Kori Quibell",
    university: 'Fine Arts Academy "Jan Matejko" in Cracow',
    sentences:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis.",
    Email: "kquibelldp@howstuffworks.com",
  },
  {
    color: "#82e5c9",
    avatar: "https://robohash.org/velitiustorem.png?size=50x50&set=set1",
    name: "Clifford Michelin",
    university: "University of Baghdad",
    sentences:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum.",
    Email: "cmichelindq@berkeley.edu",
  },
  {
    color: "#3ae224",
    avatar: "https://robohash.org/rationeconsequaturid.png?size=50x50&set=set1",
    name: "Ollie Poston",
    university: "Sokoto State University ",
    sentences:
      "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
    Email: "opostondr@icq.com",
  },
  {
    color: "#a56494",
    avatar:
      "https://robohash.org/repudiandaeinciduntillo.png?size=50x50&set=set1",
    name: "Alisander Rowbottom",
    university: "University Of Dubai",
    sentences:
      "Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.",
    Email: "arowbottomds@multiply.com",
  },
  {
    color: "#ebdbcf",
    avatar:
      "https://robohash.org/praesentiumconsequaturaccusamus.png?size=50x50&set=set1",
    name: "Milo Bolsover",
    university: "Shahrood University of Technology",
    sentences:
      "Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
    Email: "mbolsoverdt@youtube.com",
  },
  {
    color: "#65fd15",
    avatar: "https://robohash.org/veldelenitinihil.png?size=50x50&set=set1",
    name: "Nikolos Di Biasio",
    university: "Universidad Nacional Experimental de Guayana",
    sentences:
      "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis.",
    Email: "ndidu@last.fm",
  },
  {
    color: "#530209",
    avatar: "https://robohash.org/quiaametaut.png?size=50x50&set=set1",
    name: "Georgia Ech",
    university: "University of Asia and the Pacific",
    sentences:
      "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue.",
    Email: "gechdv@google.pl",
  },
  {
    color: "#d053f2",
    avatar:
      "https://robohash.org/exercitationemquocommodi.png?size=50x50&set=set1",
    name: "Gaven Seth",
    university: "Pontifica Università Gregoriana",
    sentences:
      "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui.",
    Email: "gsethdw@wisc.edu",
  },
  {
    color: "#946d9b",
    avatar:
      "https://robohash.org/iustoconsequaturblanditiis.png?size=50x50&set=set1",
    name: "Gawain Shortin",
    university: "Kyushu Institute of Design",
    sentences:
      "Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis.",
    Email: "gshortindx@mashable.com",
  },
  {
    color: "#99ea34",
    avatar: "https://robohash.org/laboreoptiovoluptas.png?size=50x50&set=set1",
    name: "Porty Gotfrey",
    university: "South Dakota State University",
    sentences:
      "Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
    Email: "pgotfreydy@pinterest.com",
  },
  {
    color: "#31a1d6",
    avatar: "https://robohash.org/vitaesolutaaccusamus.png?size=50x50&set=set1",
    name: "Tabina Andersson",
    university: "Mohan Lal Sukhadia University",
    sentences:
      "Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
    Email: "tanderssondz@vkontakte.ru",
  },
  {
    color: "#219257",
    avatar: "https://robohash.org/nequenihilest.png?size=50x50&set=set1",
    name: "Natala Gratland",
    university: "Shoreline Community College",
    sentences:
      "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.",
    Email: "ngratlande0@twitpic.com",
  },
  {
    color: "#c284b5",
    avatar: "https://robohash.org/atconsequunturporro.png?size=50x50&set=set1",
    name: "Brady Port",
    university: "Catholic University in Zimbabwe",
    sentences:
      "Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
    Email: "bporte1@canalblog.com",
  },
  {
    color: "#719564",
    avatar: "https://robohash.org/temporibusquoautem.png?size=50x50&set=set1",
    name: "Son Westney",
    university: "Alderson Broaddus College",
    sentences:
      "Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo.",
    Email: "swestneye2@alibaba.com",
  },
  {
    color: "#a06669",
    avatar: "https://robohash.org/dictaiurelaudantium.png?size=50x50&set=set1",
    name: "Inesita Jarvie",
    university: "Yamagata University",
    sentences:
      "Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
    Email: "ijarviee3@unc.edu",
  },
  {
    color: "#1e5ecc",
    avatar: "https://robohash.org/iurequisest.png?size=50x50&set=set1",
    name: "Shari Oxton",
    university: "South Texas College of Law",
    sentences:
      "Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis.",
    Email: "soxtone4@weebly.com",
  },
  {
    color: "#82db61",
    avatar: "https://robohash.org/similiquesitautem.png?size=50x50&set=set1",
    name: "Erin Lissett",
    university: "Royal Danish Academy of Fine Arts, School of Architecture",
    sentences: "Etiam faucibus cursus urna.",
    Email: "elissette5@ted.com",
  },
  {
    color: "#506b21",
    avatar: "https://robohash.org/voluptatumnisisunt.png?size=50x50&set=set1",
    name: "Kit Crutchfield",
    university: "University of Maryland Baltimore County",
    sentences:
      "Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl.",
    Email: "kcrutchfielde6@ted.com",
  },
  {
    color: "#c7c266",
    avatar: "https://robohash.org/debitisipsamnulla.png?size=50x50&set=set1",
    name: "Eveline Tenpenny",
    university: "East China Normal University",
    sentences:
      "Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim.",
    Email: "etenpennye7@csmonitor.com",
  },
  {
    color: "#21fd40",
    avatar: "https://robohash.org/ametquidolorem.png?size=50x50&set=set1",
    name: "Yancey Domange",
    university: "Academy of Fine Arts and Design in Bratislava",
    sentences:
      "Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
    Email: "ydomangee8@hc360.com",
  },
  {
    color: "#8a0ada",
    avatar:
      "https://robohash.org/porrovoluptasquisquam.png?size=50x50&set=set1",
    name: "Edwin Scotti",
    university: "Universidad Tecnológica San Antonio de Machala",
    sentences:
      "Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna.",
    Email: "escottie9@privacy.gov.au",
  },
  {
    color: "#358b24",
    avatar:
      "https://robohash.org/inciduntsequiquisquam.png?size=50x50&set=set1",
    name: "Zelda Yea",
    university: "Universidade Estadual de Feira de Santana",
    sentences:
      "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
    Email: "zyeaea@uiuc.edu",
  },
  {
    color: "#78ae87",
    avatar: "https://robohash.org/enimquaeratfugiat.png?size=50x50&set=set1",
    name: "Felicio Barth",
    university: "Brest State Technical University",
    sentences:
      "Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.",
    Email: "fbartheb@acquirethisname.com",
  },
  {
    color: "#99707a",
    avatar: "https://robohash.org/laborequomaxime.png?size=50x50&set=set1",
    name: "Carmela Fabbro",
    university: "National College of Arts",
    sentences: "Fusce posuere felis sed lacus.",
    Email: "cfabbroec@shop-pro.jp",
  },
  {
    color: "#c3ef13",
    avatar: "https://robohash.org/estabsequi.png?size=50x50&set=set1",
    name: "Alphonse Fitter",
    university: "Grodno State Medical University",
    sentences:
      "Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo.",
    Email: "afittered@seattletimes.com",
  },
  {
    color: "#3febc0",
    avatar: "https://robohash.org/nihilautquidem.png?size=50x50&set=set1",
    name: "Corny Yokelman",
    university: "Institut Teknologi Adhi Tama Surabaya",
    sentences:
      "Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum.",
    Email: "cyokelmanee@uol.com.br",
  },
  {
    color: "#1576c7",
    avatar:
      "https://robohash.org/suntvoluptatibusmolestiae.png?size=50x50&set=set1",
    name: "Fairfax Kenewel",
    university: "International Bible College",
    sentences: "Nulla tellus. In sagittis dui vel nisl.",
    Email: "fkenewelef@globo.com",
  },
  {
    color: "#d04f76",
    avatar: "https://robohash.org/fugiatporrovelit.png?size=50x50&set=set1",
    name: "Rivkah Samson",
    university: "Guangxi Medical University",
    sentences:
      "In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.",
    Email: "rsamsoneg@engadget.com",
  },
  {
    color: "#b99952",
    avatar:
      "https://robohash.org/voluptatemnesciuntofficia.png?size=50x50&set=set1",
    name: "Ulysses Saward",
    university: "Universidade do Rio Grande",
    sentences:
      "Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit.",
    Email: "usawardeh@apple.com",
  },
  {
    color: "#a49850",
    avatar:
      "https://robohash.org/quaeratdignissimosaut.png?size=50x50&set=set1",
    name: "Enos Faircliffe",
    university: "Universidade Castelo Branco",
    sentences:
      "Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
    Email: "efaircliffeei@psu.edu",
  },
  {
    color: "#45bbfa",
    avatar:
      "https://robohash.org/necessitatibuserrornesciunt.png?size=50x50&set=set1",
    name: "Marty Fradgley",
    university: "Martin University",
    sentences:
      "In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
    Email: "mfradgleyej@over-blog.com",
  },
  {
    color: "#a65e4e",
    avatar:
      "https://robohash.org/hicoccaecatimolestiae.png?size=50x50&set=set1",
    name: "Carolan Shovell",
    university: "Kampala University",
    sentences:
      "Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo.",
    Email: "cshovellek@samsung.com",
  },
  {
    color: "#c546f7",
    avatar:
      "https://robohash.org/etrecusandaeprovident.png?size=50x50&set=set1",
    name: "Norman Measen",
    university: "American World University",
    sentences:
      "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.",
    Email: "nmeasenel@statcounter.com",
  },
  {
    color: "#aa0d09",
    avatar:
      "https://robohash.org/repellendusdoloresnatus.png?size=50x50&set=set1",
    name: "Sheila-kathryn MacCaffery",
    university: "Rasmussen College, Wisconsin Campuses",
    sentences:
      "Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
    Email: "smaccafferyem@fc2.com",
  },
  {
    color: "#ffb0b4",
    avatar:
      "https://robohash.org/consequaturlaborumvoluptas.png?size=50x50&set=set1",
    name: "Briana Blackburn",
    university: "Maryville College",
    sentences:
      "Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
    Email: "bblackburnen@geocities.com",
  },
  {
    color: "#c93f2b",
    avatar: "https://robohash.org/veroetnihil.png?size=50x50&set=set1",
    name: "Dulciana Kitlee",
    university: "International University of Kyrgyzstan",
    sentences:
      "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim.",
    Email: "dkitleeeo@bluehost.com",
  },
  {
    color: "#9fabec",
    avatar:
      "https://robohash.org/delectusmolestiaenatus.png?size=50x50&set=set1",
    name: "Georgi Dumbelton",
    university: "Hendrix College",
    sentences:
      "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
    Email: "gdumbeltonep@foxnews.com",
  },
  {
    color: "#9f162c",
    avatar:
      "https://robohash.org/nihilnecessitatibusillum.png?size=50x50&set=set1",
    name: "Laurie Aleavy",
    university: "Russian State Geological Prospecting University ",
    sentences:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
    Email: "laleavyeq@eepurl.com",
  },
  {
    color: "#5bb7cd",
    avatar: "https://robohash.org/quamsitin.png?size=50x50&set=set1",
    name: "Hewie O'Scollee",
    university: "Southern Alberta Institute of Technology",
    sentences:
      "Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
    Email: "hoscolleeer@yellowpages.com",
  },
  {
    color: "#125f0f",
    avatar: "https://robohash.org/illumnequerem.png?size=50x50&set=set1",
    name: "Brenda Rubenfeld",
    university: "Lillehammer University College",
    sentences:
      "Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus.",
    Email: "brubenfeldes@rambler.ru",
  },
  {
    color: "#aed431",
    avatar: "https://robohash.org/adipiscinondolores.png?size=50x50&set=set1",
    name: "Jenine Abell",
    university: "University Politehnica of Bucharest",
    sentences:
      "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.",
    Email: "jabellet@lulu.com",
  },
  {
    color: "#8ec675",
    avatar: "https://robohash.org/autminimaaut.png?size=50x50&set=set1",
    name: "Jeannie Pashler",
    university: "Altai State University",
    sentences:
      "Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
    Email: "jpashlereu@blinklist.com",
  },
  {
    color: "#df6d00",
    avatar: "https://robohash.org/porroautemcumque.png?size=50x50&set=set1",
    name: "Kira Revett",
    university: "Fachhochschule für Bank- und Finanzwirtschaft",
    sentences:
      "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl.",
    Email: "krevettev@360.cn",
  },
  {
    color: "#02ad1d",
    avatar: "https://robohash.org/dolorsuscipittempora.png?size=50x50&set=set1",
    name: "Emile Empringham",
    university: "Kyoto Tachibana Women's University",
    sentences: "Pellentesque viverra pede ac diam.",
    Email: "eempringhamew@hhs.gov",
  },
  {
    color: "#596d68",
    avatar: "https://robohash.org/istefacilisdeleniti.png?size=50x50&set=set1",
    name: "Wilhelmina Bimrose",
    university: "Al Rasheed University College",
    sentences:
      "Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
    Email: "wbimroseex@shutterfly.com",
  },
  {
    color: "#6eb015",
    avatar: "https://robohash.org/idvoluptatemin.png?size=50x50&set=set1",
    name: "Charity Menault",
    university: "Universidad Autónoma de Guerrero",
    sentences:
      "In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum.",
    Email: "cmenaultey@constantcontact.com",
  },
  {
    color: "#09f5c1",
    avatar: "https://robohash.org/rationedeseruntut.png?size=50x50&set=set1",
    name: "Bette Hackworthy",
    university: "Academy of Fine Arts",
    sentences:
      "Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.",
    Email: "bhackworthyez@wordpress.com",
  },
  {
    color: "#a02e8d",
    avatar:
      "https://robohash.org/magnamdignissimospariatur.png?size=50x50&set=set1",
    name: "Travis Ugolini",
    university: "Dokkyo University School of Medicine",
    sentences:
      "Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    Email: "tugolinif0@blogtalkradio.com",
  },
  {
    color: "#113c46",
    avatar:
      "https://robohash.org/sapienteomnisvoluptate.png?size=50x50&set=set1",
    name: "Jocelin Lomond",
    university: "Rocky Mountain College",
    sentences: "Ut tellus. Nulla ut erat id mauris vulputate elementum.",
    Email: "jlomondf1@t-online.de",
  },
  {
    color: "#f3fc62",
    avatar: "https://robohash.org/aetconsequatur.png?size=50x50&set=set1",
    name: "Reagen Beebee",
    university: "Universidad de Los Andes",
    sentences:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.",
    Email: "rbeebeef2@tripadvisor.com",
  },
  {
    color: "#e3b420",
    avatar: "https://robohash.org/eoseaincidunt.png?size=50x50&set=set1",
    name: "Mord Veighey",
    university: "Belarussian State Medical University",
    sentences:
      "Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.",
    Email: "mveigheyf3@squarespace.com",
  },
  {
    color: "#286a05",
    avatar: "https://robohash.org/sedrerumaliquid.png?size=50x50&set=set1",
    name: "Alis Tommen",
    university: "University of Benin",
    sentences:
      "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.",
    Email: "atommenf4@google.ru",
  },
  {
    color: "#9f7933",
    avatar: "https://robohash.org/quietet.png?size=50x50&set=set1",
    name: "Sharleen Ruckert",
    university: "Asa University Bangladesh",
    sentences:
      "Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
    Email: "sruckertf5@answers.com",
  },
  {
    color: "#533b5e",
    avatar: "https://robohash.org/siteaquesoluta.png?size=50x50&set=set1",
    name: "Leonidas Cumpsty",
    university: "Petrozavodsk State University",
    sentences:
      "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis.",
    Email: "lcumpstyf6@creativecommons.org",
  },
  {
    color: "#e3bed2",
    avatar:
      "https://robohash.org/optioconsequunturquaerat.png?size=50x50&set=set1",
    name: "Raimondo Caff",
    university: "San Jose State University",
    sentences:
      "Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    Email: "rcafff7@lycos.com",
  },
  {
    color: "#d0c99a",
    avatar: "https://robohash.org/magnamquiaut.png?size=50x50&set=set1",
    name: "Sonia Cawcutt",
    university: "Universidad Pedagógica Nacional, Unidad León",
    sentences: "Donec dapibus.",
    Email: "scawcuttf8@github.io",
  },
  {
    color: "#3b8752",
    avatar: "https://robohash.org/namaliasnatus.png?size=50x50&set=set1",
    name: "Murvyn Goodsir",
    university: "Kyoto Sangyo University",
    sentences:
      "Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit.",
    Email: "mgoodsirf9@trellian.com",
  },
  {
    color: "#59d62c",
    avatar: "https://robohash.org/fugaquoculpa.png?size=50x50&set=set1",
    name: "Hurlee Luis",
    university: "Wittenberg University",
    sentences:
      "Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.",
    Email: "hluisfa@reuters.com",
  },
  {
    color: "#133c6c",
    avatar: "https://robohash.org/doloremametquam.png?size=50x50&set=set1",
    name: "Kiersten Josskovitz",
    university: "North Central College",
    sentences:
      "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus.",
    Email: "kjosskovitzfb@canalblog.com",
  },
  {
    color: "#1068a7",
    avatar: "https://robohash.org/eaqueporroqui.png?size=50x50&set=set1",
    name: "Myrtice Kayne",
    university: "National College of Naturopathic Medicine",
    sentences:
      "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus.",
    Email: "mkaynefc@aol.com",
  },
  {
    color: "#5552fa",
    avatar: "https://robohash.org/saepenemolaborum.png?size=50x50&set=set1",
    name: "Colver Swyer",
    university: "Narsee Monjee Institute of Management Studies",
    sentences: "Duis aliquam convallis nunc.",
    Email: "cswyerfd@youtube.com",
  },
  {
    color: "#3da1cc",
    avatar: "https://robohash.org/porrovoluptatemeos.png?size=50x50&set=set1",
    name: "Hi Piddington",
    university: "Obirin University",
    sentences:
      "Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
    Email: "hpiddingtonfe@1und1.de",
  },
  {
    color: "#f44202",
    avatar:
      "https://robohash.org/inventorebeataelabore.png?size=50x50&set=set1",
    name: "Gaile O'Carran",
    university: "Universität Bielefeld",
    sentences:
      "Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula.",
    Email: "gocarranff@bloglovin.com",
  },
  {
    color: "#4664d4",
    avatar:
      "https://robohash.org/voluptatemaccusamusvoluptatum.png?size=50x50&set=set1",
    name: "Janela Bergstram",
    university: "University of Minnesota - Duluth",
    sentences:
      "Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.",
    Email: "jbergstramfg@forbes.com",
  },
  {
    color: "#b0fe9f",
    avatar:
      "https://robohash.org/laboriosamanimivoluptatibus.png?size=50x50&set=set1",
    name: "Ulrika Mitrovic",
    university: "Iniciativa Universidad del Atlantico",
    sentences:
      "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.",
    Email: "umitrovicfh@bravesites.com",
  },
  {
    color: "#c13498",
    avatar: "https://robohash.org/etveritatisillo.png?size=50x50&set=set1",
    name: "Anatollo Burnsyde",
    university: "Crown College",
    sentences:
      "Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.",
    Email: "aburnsydefi@etsy.com",
  },
  {
    color: "#e10fb5",
    avatar: "https://robohash.org/beataemaioreslabore.png?size=50x50&set=set1",
    name: "Kellsie Gatus",
    university: "Baylor College of Medicine",
    sentences:
      "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem.",
    Email: "kgatusfj@gmpg.org",
  },
  {
    color: "#e16565",
    avatar: "https://robohash.org/quireprehenderitqui.png?size=50x50&set=set1",
    name: "Rhianon Feasey",
    university: "Universidade Federal de Uberlândia",
    sentences:
      "Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla.",
    Email: "rfeaseyfk@nba.com",
  },
  {
    color: "#affb75",
    avatar: "https://robohash.org/cumeosvel.png?size=50x50&set=set1",
    name: "Reggie Volet",
    university: "Iasar University",
    sentences:
      "Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
    Email: "rvoletfl@booking.com",
  },
  {
    color: "#d46692",
    avatar:
      "https://robohash.org/aspernaturitaqueassumenda.png?size=50x50&set=set1",
    name: "Kare Tuffin",
    university: "Westhill University",
    sentences:
      "Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam. Nam tristique tortor eu pede.",
    Email: "ktuffinfm@friendfeed.com",
  },
  {
    color: "#c42ce1",
    avatar: "https://robohash.org/consecteturipsasit.png?size=50x50&set=set1",
    name: "Abbye Padfield",
    university: "Zetech College",
    sentences:
      "Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
    Email: "apadfieldfn@tuttocitta.it",
  },
  {
    color: "#19704f",
    avatar: "https://robohash.org/estvitaedolorem.png?size=50x50&set=set1",
    name: "Giorgio Beharrell",
    university: "Marylhurst University",
    sentences:
      "Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
    Email: "gbeharrellfo@vkontakte.ru",
  },
  {
    color: "#bd2b39",
    avatar:
      "https://robohash.org/laboriosamassumendadolorum.png?size=50x50&set=set1",
    name: "Roseann Fatkin",
    university: "Sunmoon University",
    sentences:
      "Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt.",
    Email: "rfatkinfp@ftc.gov",
  },
  {
    color: "#49fb3c",
    avatar: "https://robohash.org/quaeratveromagni.png?size=50x50&set=set1",
    name: "Ursala Seeley",
    university: "Uludag University",
    sentences:
      "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
    Email: "useeleyfq@china.com.cn",
  },
  {
    color: "#9f7430",
    avatar: "https://robohash.org/deseruntestplaceat.png?size=50x50&set=set1",
    name: "Halley Thornton",
    university: "Universidad Obrera de Mexico",
    sentences:
      "Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor.",
    Email: "hthorntonfr@salon.com",
  },
  {
    color: "#5e0ddc",
    avatar: "https://robohash.org/perspiciatisquiiusto.png?size=50x50&set=set1",
    name: "Denis Skitteral",
    university: "East Kazakhstan State University",
    sentences:
      "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
    Email: "dskitteralfs@forbes.com",
  },
  {
    color: "#d5b488",
    avatar:
      "https://robohash.org/quidemdoloresrepellat.png?size=50x50&set=set1",
    name: "Durante Laurentino",
    university: "Jerash Private University",
    sentences:
      "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.",
    Email: "dlaurentinoft@desdev.cn",
  },
  {
    color: "#2af225",
    avatar: "https://robohash.org/suscipitestqui.png?size=50x50&set=set1",
    name: "Elvin Thornewell",
    university: "Universidad Autónoma de la Ciudad de México",
    sentences:
      "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti.",
    Email: "ethornewellfu@engadget.com",
  },
  {
    color: "#0c2c1f",
    avatar: "https://robohash.org/evenieteiusea.png?size=50x50&set=set1",
    name: "Lemmy Kitteridge",
    university: "University of the Humanities",
    sentences:
      "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.",
    Email: "lkitteridgefv@qq.com",
  },
  {
    color: "#d0aad4",
    avatar: "https://robohash.org/remquisoluta.png?size=50x50&set=set1",
    name: "Jacynth Goodbur",
    university: "Sri Lanka Institute of Information Technology (SLIT)",
    sentences:
      "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.",
    Email: "jgoodburfw@walmart.com",
  },
  {
    color: "#9a7722",
    avatar: "https://robohash.org/quissintmagni.png?size=50x50&set=set1",
    name: "Jessalin Iwaszkiewicz",
    university: "St. Petersburg Institute of Sales Management and Economics",
    sentences: "Sed ante.",
    Email: "jiwaszkiewiczfx@hao123.com",
  },
  {
    color: "#367baf",
    avatar: "https://robohash.org/ducimusinvel.png?size=50x50&set=set1",
    name: "Leontyne Wintle",
    university: "University of Medicine and Pharmacology of Oradea",
    sentences:
      "Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo.",
    Email: "lwintlefy@rediff.com",
  },
  {
    color: "#5c4500",
    avatar: "https://robohash.org/molestiasetmagni.png?size=50x50&set=set1",
    name: "Sharity Marzello",
    university: "Kettering University (GMI)",
    sentences: "Maecenas ut massa quis augue luctus tincidunt.",
    Email: "smarzellofz@tripod.com",
  },
  {
    color: "#9e813a",
    avatar:
      "https://robohash.org/etarchitectoexplicabo.png?size=50x50&set=set1",
    name: "Bonnee Kendred",
    university: "International University in Germany",
    sentences:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl.",
    Email: "bkendredg0@yellowpages.com",
  },
  {
    color: "#8691bb",
    avatar: "https://robohash.org/aliquamsapientea.png?size=50x50&set=set1",
    name: "Cornela Higounet",
    university: "University of Idaho",
    sentences:
      "Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
    Email: "chigounetg1@phpbb.com",
  },
  {
    color: "#d88d78",
    avatar: "https://robohash.org/etdoloribusoccaecati.png?size=50x50&set=set1",
    name: "Guglielmo Rowly",
    university: "Barclay College",
    sentences: "Cras in purus eu magna vulputate luctus.",
    Email: "growlyg2@bravesites.com",
  },
  {
    color: "#3745a7",
    avatar: "https://robohash.org/estitaqueminima.png?size=50x50&set=set1",
    name: "Flo Eitter",
    university: "South Eastern University of Sri Lanka",
    sentences: "Integer a nibh. In quis justo.",
    Email: "feitterg3@delicious.com",
  },
  {
    color: "#d957cf",
    avatar: "https://robohash.org/aliquidenimet.png?size=50x50&set=set1",
    name: "Cindie Ceely",
    university: "Illinois State University",
    sentences:
      "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum.",
    Email: "cceelyg4@xinhuanet.com",
  },
  {
    color: "#b5d3cc",
    avatar: "https://robohash.org/corruptiquiavitae.png?size=50x50&set=set1",
    name: "Selia Allworthy",
    university: "Notre Dame University",
    sentences:
      "Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
    Email: "sallworthyg5@biglobe.ne.jp",
  },
  {
    color: "#9b5606",
    avatar: "https://robohash.org/architectoquirerum.png?size=50x50&set=set1",
    name: "Barrie Worland",
    university: "Universidad de San Buenaventura",
    sentences:
      "Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.",
    Email: "bworlandg6@mozilla.com",
  },
  {
    color: "#445ab9",
    avatar: "https://robohash.org/etestin.png?size=50x50&set=set1",
    name: "Clementina Tadd",
    university: "St. Francis College, Brooklyn Heights",
    sentences:
      "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.",
    Email: "ctaddg7@fotki.com",
  },
  {
    color: "#228fdf",
    avatar: "https://robohash.org/etrepellatquidem.png?size=50x50&set=set1",
    name: "Marjy Stubbe",
    university: "Delta University",
    sentences:
      "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
    Email: "mstubbeg8@ning.com",
  },
  {
    color: "#7b043e",
    avatar: "https://robohash.org/corruptiquisin.png?size=50x50&set=set1",
    name: "Anett Northrop",
    university: "Universidad Santa Paula",
    sentences:
      "Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis.",
    Email: "anorthropg9@archive.org",
  },
  {
    color: "#e2fc32",
    avatar:
      "https://robohash.org/officiacorporisexpedita.png?size=50x50&set=set1",
    name: "Blanca Mycock",
    university: "Jomo Kenyatta University of Agriculture and Technology",
    sentences:
      "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    Email: "bmycockga@livejournal.com",
  },
  {
    color: "#f6036e",
    avatar: "https://robohash.org/faceremaximedolores.png?size=50x50&set=set1",
    name: "Zsa zsa McTeer",
    university: "Baptist Bible College of Missouri",
    sentences:
      "Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.",
    Email: "zzsagb@bigcartel.com",
  },
  {
    color: "#c27186",
    avatar: "https://robohash.org/estautexcepturi.png?size=50x50&set=set1",
    name: "Brooke Palethorpe",
    university: "University of Tehran",
    sentences:
      "Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
    Email: "bpalethorpegc@hugedomains.com",
  },
  {
    color: "#561945",
    avatar: "https://robohash.org/invelpraesentium.png?size=50x50&set=set1",
    name: "Faber Ramey",
    university: "Kampala University",
    sentences:
      "Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis.",
    Email: "frameygd@t.co",
  },
  {
    color: "#be9d36",
    avatar: "https://robohash.org/vitaeatexpedita.png?size=50x50&set=set1",
    name: "Leonora Rheaume",
    university: "Breyer State University (Virtual University)",
    sentences:
      "Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque.",
    Email: "lrheaumege@usatoday.com",
  },
  {
    color: "#526f72",
    avatar:
      "https://robohash.org/quisperferendismagnam.png?size=50x50&set=set1",
    name: "Cyndy Bromhead",
    university: "Universidad Autónoma Juan Misael Saracho",
    sentences:
      "Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui.",
    Email: "cbromheadgf@weather.com",
  },
  {
    color: "#de0685",
    avatar: "https://robohash.org/voluptatesquasex.png?size=50x50&set=set1",
    name: "Winonah Haquard",
    university: "University of Vermont",
    sentences:
      "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
    Email: "whaquardgg@samsung.com",
  },
  {
    color: "#56c7e3",
    avatar: "https://robohash.org/illumteneturminus.png?size=50x50&set=set1",
    name: "Rayner Buglar",
    university: "Kansai Medical University",
    sentences:
      "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
    Email: "rbuglargh@google.ru",
  },
  {
    color: "#d778a8",
    avatar: "https://robohash.org/aliasquaeratsed.png?size=50x50&set=set1",
    name: "Quent Bugdell",
    university: "Oulu Polytechnic",
    sentences:
      "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla.",
    Email: "qbugdellgi@tamu.edu",
  },
  {
    color: "#158186",
    avatar:
      "https://robohash.org/consequunturreiciendisalias.png?size=50x50&set=set1",
    name: "Dana Van den Broek",
    university: "Virgen Milagrosa University Foundation",
    sentences:
      "Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.",
    Email: "dvangj@tripadvisor.com",
  },
  {
    color: "#2a7aef",
    avatar: "https://robohash.org/veleiusquod.png?size=50x50&set=set1",
    name: "Alwyn Comer",
    university: "Henan Agriculture University",
    sentences:
      "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum.",
    Email: "acomergk@tamu.edu",
  },
  {
    color: "#9f3704",
    avatar: "https://robohash.org/quieapossimus.png?size=50x50&set=set1",
    name: "Montague Veld",
    university: "Weber State University",
    sentences:
      "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
    Email: "mveldgl@hatena.ne.jp",
  },
  {
    color: "#09b5b4",
    avatar: "https://robohash.org/oditnonut.png?size=50x50&set=set1",
    name: "Hamlen Donkersley",
    university: "Massachusetts College of Art",
    sentences:
      "Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla.",
    Email: "hdonkersleygm@gizmodo.com",
  },
  {
    color: "#2c3f5f",
    avatar: "https://robohash.org/undevoluptastenetur.png?size=50x50&set=set1",
    name: "Berny Keirle",
    university: "Universidad Pontificia Comillas",
    sentences:
      "Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh.",
    Email: "bkeirlegn@newsvine.com",
  },
  {
    color: "#f2aee1",
    avatar:
      "https://robohash.org/vitaecommodimolestiae.png?size=50x50&set=set1",
    name: "Lula MacAne",
    university: "University of Pisa",
    sentences:
      "Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
    Email: "lmacanego@zimbio.com",
  },
  {
    color: "#7c973e",
    avatar:
      "https://robohash.org/voluptatemblanditiisnihil.png?size=50x50&set=set1",
    name: "Delainey Gobolos",
    university: "Sugiyama Jogakuen University",
    sentences:
      "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus.",
    Email: "dgobolosgp@ow.ly",
  },
  {
    color: "#d2f537",
    avatar: "https://robohash.org/eaeiuseos.png?size=50x50&set=set1",
    name: "Kikelia Quipp",
    university: "Taurida National V.I.Vernadsky University",
    sentences: "Suspendisse potenti.",
    Email: "kquippgq@youtube.com",
  },
  {
    color: "#828be5",
    avatar: "https://robohash.org/porroatquequae.png?size=50x50&set=set1",
    name: "Alfi Edgcumbe",
    university: "East Somalia University",
    sentences:
      "Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
    Email: "aedgcumbegr@51.la",
  },
  {
    color: "#d19a0e",
    avatar:
      "https://robohash.org/delectusnihilconsequatur.png?size=50x50&set=set1",
    name: "Araldo Brodhead",
    university:
      "National Technical University (Kharkiv Polytechnical Institute)",
    sentences:
      "Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.",
    Email: "abrodheadgs@forbes.com",
  },
  {
    color: "#c8890f",
    avatar:
      "https://robohash.org/omnisnecessitatibusnam.png?size=50x50&set=set1",
    name: "Alethea Dilnot",
    university: "Al Mamon University College",
    sentences: "Phasellus sit amet erat.",
    Email: "adilnotgt@epa.gov",
  },
  {
    color: "#34d696",
    avatar:
      "https://robohash.org/repellendusvoluptatesperspiciatis.png?size=50x50&set=set1",
    name: "Brynna Konrad",
    university: "Sweet Briar College",
    sentences:
      "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
    Email: "bkonradgu@miibeian.gov.cn",
  },
  {
    color: "#bb7e2a",
    avatar: "https://robohash.org/sapienteestincidunt.png?size=50x50&set=set1",
    name: "Carlos Allridge",
    university: "DeVry Institute of Technology, DuPage",
    sentences:
      "Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla.",
    Email: "callridgegv@bloglines.com",
  },
  {
    color: "#293642",
    avatar: "https://robohash.org/etsitvoluptate.png?size=50x50&set=set1",
    name: "Pembroke Rochelle",
    university: "Karlshochschule International University",
    sentences:
      "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.",
    Email: "prochellegw@hp.com",
  },
  {
    color: "#93ff4e",
    avatar: "https://robohash.org/ullamatlaboriosam.png?size=50x50&set=set1",
    name: "Bartholomew Pinke",
    university: "College of Education Ikere",
    sentences:
      "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.",
    Email: "bpinkegx@g.co",
  },
  {
    color: "#b1cda5",
    avatar:
      "https://robohash.org/voluptasveniameligendi.png?size=50x50&set=set1",
    name: "Delora Vevers",
    university: "Brexgata University Academy",
    sentences:
      "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
    Email: "dveversgy@apple.com",
  },
  {
    color: "#ea563d",
    avatar: "https://robohash.org/sequinostrumquos.png?size=50x50&set=set1",
    name: "Quent Hirjak",
    university: "Southern Utah University",
    sentences:
      "Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.",
    Email: "qhirjakgz@kickstarter.com",
  },
  {
    color: "#e2533d",
    avatar: "https://robohash.org/inautemeveniet.png?size=50x50&set=set1",
    name: "Johnna Zelley",
    university: "Harris-Stowe State University",
    sentences:
      "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.",
    Email: "jzelleyh0@samsung.com",
  },
  {
    color: "#3f5e70",
    avatar: "https://robohash.org/utquivoluptatibus.png?size=50x50&set=set1",
    name: "Issi Worton",
    university: "Thiagarajar College of Engineering",
    sentences:
      "Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    Email: "iwortonh1@dailymotion.com",
  },
  {
    color: "#4dc360",
    avatar: "https://robohash.org/idetaut.png?size=50x50&set=set1",
    name: "Bern Lamminam",
    university: "Kumasi Polytechnic ",
    sentences:
      "Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo.",
    Email: "blamminamh2@un.org",
  },
  {
    color: "#950053",
    avatar:
      "https://robohash.org/evenietquisquamnecessitatibus.png?size=50x50&set=set1",
    name: "Barbette McFayden",
    university: "University of Northern British Columbia",
    sentences:
      "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.",
    Email: "bmcfaydenh3@icio.us",
  },
  {
    color: "#5c5a45",
    avatar: "https://robohash.org/utadautem.png?size=50x50&set=set1",
    name: "Allan Bakes",
    university: "Kunsan National University",
    sentences:
      "Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat.",
    Email: "abakesh4@ezinearticles.com",
  },
  {
    color: "#2ab855",
    avatar: "https://robohash.org/pariaturoptioet.png?size=50x50&set=set1",
    name: "Phineas Petranek",
    university: "Gediz University",
    sentences:
      "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.",
    Email: "ppetranekh5@plala.or.jp",
  },
  {
    color: "#05472e",
    avatar:
      "https://robohash.org/nemoblanditiisvoluptatem.png?size=50x50&set=set1",
    name: "Rosalinda Meiner",
    university: "Marathwada Agricultural University",
    sentences:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.",
    Email: "rmeinerh6@noaa.gov",
  },
  {
    color: "#afdd06",
    avatar:
      "https://robohash.org/porromolestiaemolestias.png?size=50x50&set=set1",
    name: "Zorina Jeyness",
    university: "North Kazakhstan State University",
    sentences:
      "Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.",
    Email: "zjeynessh7@trellian.com",
  },
  {
    color: "#f11840",
    avatar:
      "https://robohash.org/ipsamoptioperferendis.png?size=50x50&set=set1",
    name: "Blinni Milvarnie",
    university: "Université de Sétif",
    sentences:
      "Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui.",
    Email: "bmilvarnieh8@thetimes.co.uk",
  },
  {
    color: "#6596ef",
    avatar: "https://robohash.org/sitquammodi.png?size=50x50&set=set1",
    name: "Debee McAllester",
    university: "Regent International University",
    sentences:
      "Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam. Nam tristique tortor eu pede.",
    Email: "dmcallesterh9@mozilla.org",
  },
  {
    color: "#5c3e3b",
    avatar: "https://robohash.org/namilloofficia.png?size=50x50&set=set1",
    name: "Jeramey O'Hallihane",
    university: "Iwate University",
    sentences:
      "Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
    Email: "johallihaneha@mozilla.org",
  },
  {
    color: "#159609",
    avatar:
      "https://robohash.org/reprehenderitreiciendisofficia.png?size=50x50&set=set1",
    name: "Marcellina Raddish",
    university: "Hobart and William Smith Colleges",
    sentences:
      "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
    Email: "mraddishhb@cpanel.net",
  },
  {
    color: "#94036e",
    avatar: "https://robohash.org/veroquisquamiure.png?size=50x50&set=set1",
    name: "Kylynn Lewens",
    university: "Latvian Maritime Academy",
    sentences:
      "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
    Email: "klewenshc@columbia.edu",
  },
  {
    color: "#f2b0a5",
    avatar: "https://robohash.org/laborumsitblanditiis.png?size=50x50&set=set1",
    name: "Mariel Birch",
    university: "Université de la Méditerranée (Aix Marseille II)",
    sentences: "In congue.",
    Email: "mbirchhd@ameblo.jp",
  },
  {
    color: "#f3ce00",
    avatar:
      "https://robohash.org/voluptaslaboriosamcumque.png?size=50x50&set=set1",
    name: "Kippie Chafney",
    university: "Institut Teknologi Sepuluh Nopember",
    sentences:
      "Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.",
    Email: "kchafneyhe@nsw.gov.au",
  },
  {
    color: "#1396b8",
    avatar:
      "https://robohash.org/sapientelaborummolestias.png?size=50x50&set=set1",
    name: "Nevin Gaddie",
    university: "Free University Stockholm",
    sentences:
      "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
    Email: "ngaddiehf@discovery.com",
  },
  {
    color: "#3ac1f0",
    avatar: "https://robohash.org/ututincidunt.png?size=50x50&set=set1",
    name: "Cirillo Bonifant",
    university:
      "Fachhochschule Pforzheim, Hochschule für Gestaltung, Technik und Wirtschaft",
    sentences:
      "Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
    Email: "cbonifanthg@freewebs.com",
  },
  {
    color: "#34532d",
    avatar: "https://robohash.org/autemetut.png?size=50x50&set=set1",
    name: "Abeu Drissell",
    university:
      "Ecole Nationale Supérieure d'Electronique et de Radioelectricite de Bordeaux",
    sentences:
      "Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
    Email: "adrissellhh@gnu.org",
  },
  {
    color: "#fb7088",
    avatar:
      "https://robohash.org/repellendusconsecteturea.png?size=50x50&set=set1",
    name: "Marji Di Nisco",
    university: "Tohoku College of Pharmacy",
    sentences:
      "Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
    Email: "mdihi@freewebs.com",
  },
  {
    color: "#27ea6b",
    avatar: "https://robohash.org/commodiutet.png?size=50x50&set=set1",
    name: "Pollyanna Crottagh",
    university: "Crimea State Medical University",
    sentences:
      "Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
    Email: "pcrottaghhj@dyndns.org",
  },
  {
    color: "#67cf97",
    avatar: "https://robohash.org/quiamaximesed.png?size=50x50&set=set1",
    name: "Tybie Carrett",
    university: "National Taipei University",
    sentences:
      "Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum.",
    Email: "tcarretthk@homestead.com",
  },
  {
    color: "#e026a8",
    avatar: "https://robohash.org/doloribusillumnatus.png?size=50x50&set=set1",
    name: "Ronnie Greenier",
    university: "Universidad Iberoamericana de Ciencias y Tecnologia",
    sentences:
      "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
    Email: "rgreenierhl@tripod.com",
  },
  {
    color: "#fac7eb",
    avatar: "https://robohash.org/voluptasmolestiaeut.png?size=50x50&set=set1",
    name: "Tab Bateup",
    university: "Universitas Pasundan",
    sentences: "Nulla mollis molestie lorem.",
    Email: "tbateuphm@google.com",
  },
  {
    color: "#096ffe",
    avatar: "https://robohash.org/inciduntdebitisnatus.png?size=50x50&set=set1",
    name: "Tatiana Thaine",
    university: "Simpson College Iowa",
    sentences:
      "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.",
    Email: "tthainehn@chicagotribune.com",
  },
  {
    color: "#cf9606",
    avatar: "https://robohash.org/voluptatemdoloret.png?size=50x50&set=set1",
    name: "Clayson Schoolcroft",
    university: "Illinois Valley Community College",
    sentences:
      "Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.",
    Email: "cschoolcroftho@yandex.ru",
  },
  {
    color: "#11f389",
    avatar:
      "https://robohash.org/quaeratvoluptatumomnis.png?size=50x50&set=set1",
    name: "Yelena Bensley",
    university: "Xavier University of Louisiana",
    sentences: "Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.",
    Email: "ybensleyhp@google.pl",
  },
  {
    color: "#bcb350",
    avatar: "https://robohash.org/adnamhic.png?size=50x50&set=set1",
    name: "Tessy Daenen",
    university: "University of Technology",
    sentences:
      "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum.",
    Email: "tdaenenhq@1und1.de",
  },
  {
    color: "#e63782",
    avatar: "https://robohash.org/namaliquamerror.png?size=50x50&set=set1",
    name: "Reyna Thamelt",
    university: "Ho Chi Minh City University of Transport",
    sentences:
      "Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.",
    Email: "rthamelthr@yellowpages.com",
  },
  {
    color: "#beb46c",
    avatar:
      "https://robohash.org/dignissimosarchitectomagni.png?size=50x50&set=set1",
    name: "Caryn Lacelett",
    university: "Kent State University - Stark",
    sentences:
      "In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.",
    Email: "claceletths@pagesperso-orange.fr",
  },
  {
    color: "#fffe07",
    avatar: "https://robohash.org/avoluptatumquia.png?size=50x50&set=set1",
    name: "Dyan Roobottom",
    university: "Chongqing Technology and Business University",
    sentences:
      "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum.",
    Email: "droobottomht@phoca.cz",
  },
  {
    color: "#b958e8",
    avatar: "https://robohash.org/nonvelitid.png?size=50x50&set=set1",
    name: "Cory Bexley",
    university: "Silesian School of Economics and Languages",
    sentences:
      "Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy.",
    Email: "cbexleyhu@forbes.com",
  },
  {
    color: "#a02945",
    avatar: "https://robohash.org/consequaturaet.png?size=50x50&set=set1",
    name: "Tedra Quinney",
    university: "Universitas Komputer Indonesia",
    sentences:
      "Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.",
    Email: "tquinneyhv@intel.com",
  },
  {
    color: "#e9866d",
    avatar: "https://robohash.org/doloresetodit.png?size=50x50&set=set1",
    name: "Ketti Dovinson",
    university: "Catholic University in Ruzomberok",
    sentences:
      "Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
    Email: "kdovinsonhw@abc.net.au",
  },
  {
    color: "#988d4e",
    avatar: "https://robohash.org/ipsumporrosapiente.png?size=50x50&set=set1",
    name: "Elladine Irnis",
    university: "Sharif University of Technology",
    sentences:
      "Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
    Email: "eirnishx@last.fm",
  },
  {
    color: "#0a6e0a",
    avatar:
      "https://robohash.org/etoccaecatirepellendus.png?size=50x50&set=set1",
    name: "Rafaelia Straw",
    university: "Oklahoma City University",
    sentences: "Etiam justo.",
    Email: "rstrawhy@wunderground.com",
  },
  {
    color: "#93c5ce",
    avatar: "https://robohash.org/cumrerumaut.png?size=50x50&set=set1",
    name: "Alasdair Erasmus",
    university: "Yonsei University",
    sentences:
      "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam. Nam tristique tortor eu pede.",
    Email: "aerasmushz@illinois.edu",
  },
  {
    color: "#786a1e",
    avatar: "https://robohash.org/enimvoluptasvel.png?size=50x50&set=set1",
    name: "Demeter Lepard",
    university: "Gyeongsang National University",
    sentences:
      "Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.",
    Email: "dlepardi0@lycos.com",
  },
  {
    color: "#710f12",
    avatar:
      "https://robohash.org/exercitationemrepellatofficia.png?size=50x50&set=set1",
    name: "Marlon Dumphries",
    university: "Noakhali University of Science and Technology",
    sentences:
      "Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
    Email: "mdumphriesi1@japanpost.jp",
  },
  {
    color: "#fa304f",
    avatar:
      "https://robohash.org/doloremqueetcupiditate.png?size=50x50&set=set1",
    name: "Iggy Lawleff",
    university: "Ecole Centrale de Lyon",
    sentences:
      "Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.",
    Email: "ilawleffi2@wp.com",
  },
  {
    color: "#c8ebe7",
    avatar: "https://robohash.org/hiccumqueex.png?size=50x50&set=set1",
    name: "Kessia Loxton",
    university: "Nanjing University of Posts and Telecommunications",
    sentences:
      "Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst.",
    Email: "kloxtoni3@fc2.com",
  },
  {
    color: "#5c35ba",
    avatar:
      "https://robohash.org/veritatisrepellendusdolores.png?size=50x50&set=set1",
    name: "Osbert Damsell",
    university: "Kanda University of International Studies",
    sentences:
      "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
    Email: "odamselli4@jiathis.com",
  },
  {
    color: "#731886",
    avatar: "https://robohash.org/providentaliquidqui.png?size=50x50&set=set1",
    name: "Claiborn Geroldo",
    university: "Circleville Bible College",
    sentences: "Nullam sit amet turpis elementum ligula vehicula consequat.",
    Email: "cgeroldoi5@indiegogo.com",
  },
  {
    color: "#44a30b",
    avatar: "https://robohash.org/velitautaut.png?size=50x50&set=set1",
    name: "Leonore Cock",
    university: "Hanoi University of Science & Technology",
    sentences:
      "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.",
    Email: "lcocki6@creativecommons.org",
  },
  {
    color: "#5f0bd9",
    avatar: "https://robohash.org/autminimaharum.png?size=50x50&set=set1",
    name: "Joletta McKissack",
    university: "Northeastern University",
    sentences:
      "Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
    Email: "jmckissacki7@go.com",
  },
  {
    color: "#edada1",
    avatar: "https://robohash.org/estquodistinctio.png?size=50x50&set=set1",
    name: "Kerstin Nott",
    university: "Bangladesh Agricultural University",
    sentences:
      "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
    Email: "knotti8@alibaba.com",
  },
  {
    color: "#0163be",
    avatar: "https://robohash.org/iureharumdignissimos.png?size=50x50&set=set1",
    name: "Martina Silwood",
    university: "Fontbonne College",
    sentences:
      "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.",
    Email: "msilwoodi9@constantcontact.com",
  },
  {
    color: "#915aae",
    avatar: "https://robohash.org/repellatnonsit.png?size=50x50&set=set1",
    name: "Gabbey Restieaux",
    university: "Centenary College of Louisiana",
    sentences: "Curabitur in libero ut massa volutpat convallis.",
    Email: "grestieauxia@stumbleupon.com",
  },
  {
    color: "#f7b1c5",
    avatar: "https://robohash.org/consectetureumculpa.png?size=50x50&set=set1",
    name: "Kristos Rein",
    university: "Academy of Economics in Poznan",
    sentences:
      "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.",
    Email: "kreinib@fotki.com",
  },
  {
    color: "#3a1337",
    avatar: "https://robohash.org/quiuteum.png?size=50x50&set=set1",
    name: "Mahala Mainston",
    university: "Carlow Institute of Technology",
    sentences:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc.",
    Email: "mmainstonic@pcworld.com",
  },
  {
    color: "#366581",
    avatar: "https://robohash.org/namminusarchitecto.png?size=50x50&set=set1",
    name: "Electra Wilby",
    university: "City University of New York, York College",
    sentences:
      "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum.",
    Email: "ewilbyid@xing.com",
  },
  {
    color: "#3bbb06",
    avatar: "https://robohash.org/veldolorquisquam.png?size=50x50&set=set1",
    name: "Hattie Launchbury",
    university: "Business School Lausanne (BSL)",
    sentences:
      "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
    Email: "hlaunchburyie@joomla.org",
  },
  {
    color: "#6afeee",
    avatar: "https://robohash.org/temporautipsam.png?size=50x50&set=set1",
    name: "Spenser Scantlebury",
    university: "Hashemite University",
    sentences:
      "Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.",
    Email: "sscantleburyif@state.gov",
  },
  {
    color: "#61445d",
    avatar: "https://robohash.org/suntquidolores.png?size=50x50&set=set1",
    name: "Doy Alp",
    university: "Ryazan State Pedagogical University",
    sentences:
      "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
    Email: "dalpig@networkadvertising.org",
  },
  {
    color: "#8fd8e7",
    avatar:
      "https://robohash.org/rerumautemnecessitatibus.png?size=50x50&set=set1",
    name: "Jilli Hixley",
    university: "Instituto de Estudios Superiores de la Sierra",
    sentences:
      "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.",
    Email: "jhixleyih@bandcamp.com",
  },
  {
    color: "#c2b633",
    avatar: "https://robohash.org/nesciuntessesint.png?size=50x50&set=set1",
    name: "Paulita Muslim",
    university: "Universität Augsburg",
    sentences:
      "Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.",
    Email: "pmuslimii@google.cn",
  },
  {
    color: "#ea761b",
    avatar: "https://robohash.org/etautcum.png?size=50x50&set=set1",
    name: "Juliana Fewless",
    university: "University of Mysore",
    sentences:
      "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo.",
    Email: "jfewlessij@sina.com.cn",
  },
  {
    color: "#ddd23b",
    avatar: "https://robohash.org/undequismolestiae.png?size=50x50&set=set1",
    name: "Brit Ulyatt",
    university: "Universidad Autónoma del Caribe",
    sentences:
      "Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.",
    Email: "bulyattik@storify.com",
  },
  {
    color: "#376353",
    avatar: "https://robohash.org/etexrepellendus.png?size=50x50&set=set1",
    name: "Francesca Bonin",
    university: "University of Palestine",
    sentences:
      "Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.",
    Email: "fboninil@ucoz.com",
  },
  {
    color: "#6870df",
    avatar: "https://robohash.org/sitmolestiasanimi.png?size=50x50&set=set1",
    name: "Ezekiel McCosh",
    university: "Universidad Nacional San Luis Gonzaga",
    sentences:
      "Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
    Email: "emccoshim@booking.com",
  },
  {
    color: "#c467b8",
    avatar: "https://robohash.org/possimussuntrepellat.png?size=50x50&set=set1",
    name: "Nicky Whitwell",
    university: "College of Dunaujvaros",
    sentences:
      "Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.",
    Email: "nwhitwellin@nbcnews.com",
  },
  {
    color: "#1687af",
    avatar: "https://robohash.org/expeditasuscipitea.png?size=50x50&set=set1",
    name: "Celeste Hagley",
    university: "State University of Aerospace Technologies",
    sentences:
      "Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus.",
    Email: "chagleyio@ameblo.jp",
  },
  {
    color: "#f8297b",
    avatar: "https://robohash.org/quaeratquivoluptatem.png?size=50x50&set=set1",
    name: "Gisela Blaxill",
    university: "Cyprus International Institute of Management (CIIM)",
    sentences:
      "Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus.",
    Email: "gblaxillip@ycombinator.com",
  },
  {
    color: "#a30055",
    avatar:
      "https://robohash.org/sapientefaceretempore.png?size=50x50&set=set1",
    name: "Norry Papaccio",
    university: "Yalova University",
    sentences:
      "Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
    Email: "npapaccioiq@ftc.gov",
  },
  {
    color: "#d778ca",
    avatar: "https://robohash.org/eiusundererum.png?size=50x50&set=set1",
    name: "Abbe Dower",
    university: "University of Saint La Salle",
    sentences: "Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.",
    Email: "adowerir@dailymotion.com",
  },
  {
    color: "#fa3c0c",
    avatar: "https://robohash.org/etexcepturialias.png?size=50x50&set=set1",
    name: "Zora Chessill",
    university: "Georgetown University",
    sentences:
      "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.",
    Email: "zchessillis@about.com",
  },
  {
    color: "#d672a4",
    avatar:
      "https://robohash.org/perspiciatisconsecteturqui.png?size=50x50&set=set1",
    name: "Biddie Melsom",
    university: "Soonchunhyang University",
    sentences:
      "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus.",
    Email: "bmelsomit@comsenz.com",
  },
  {
    color: "#1a5c81",
    avatar: "https://robohash.org/ducimusquiaet.png?size=50x50&set=set1",
    name: "Germana Roche",
    university: "Turkish Military Academy",
    sentences:
      "Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
    Email: "grocheiu@examiner.com",
  },
  {
    color: "#c4751f",
    avatar: "https://robohash.org/rerumdoloresquia.png?size=50x50&set=set1",
    name: "Maia Beebee",
    university: "Universidad Piloto de Colombia",
    sentences:
      "Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.",
    Email: "mbeebeeiv@telegraph.co.uk",
  },
  {
    color: "#19a2c0",
    avatar: "https://robohash.org/pariaturquodsuscipit.png?size=50x50&set=set1",
    name: "Addy Leupold",
    university:
      "Institut Supérieur de Commerce et d'Administration des Entreprises",
    sentences: "Nulla tellus. In sagittis dui vel nisl. Duis ac nibh.",
    Email: "aleupoldiw@drupal.org",
  },
  {
    color: "#bc5822",
    avatar: "https://robohash.org/aliquamexpeditaaut.png?size=50x50&set=set1",
    name: "Flori Barajaz",
    university: "Clearwater Christian College",
    sentences:
      "Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum.",
    Email: "fbarajazix@edublogs.org",
  },
  {
    color: "#9748bb",
    avatar:
      "https://robohash.org/illoexercitationemreiciendis.png?size=50x50&set=set1",
    name: "Nicolea McLoughlin",
    university: "Adeleke University",
    sentences:
      "Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.",
    Email: "nmcloughliniy@yale.edu",
  },
  {
    color: "#faab10",
    avatar:
      "https://robohash.org/providenttemporeperspiciatis.png?size=50x50&set=set1",
    name: "Joela Petel",
    university: "Universidad Dominicana O&M",
    sentences:
      "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
    Email: "jpeteliz@state.tx.us",
  },
  {
    color: "#b1a8e1",
    avatar:
      "https://robohash.org/quisconsequaturpossimus.png?size=50x50&set=set1",
    name: "Ilyse Swiers",
    university: "University of Lucknow",
    sentences:
      "Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui.",
    Email: "iswiersj0@pinterest.com",
  },
  {
    color: "#5d58f2",
    avatar: "https://robohash.org/nameumcum.png?size=50x50&set=set1",
    name: "Umeko Easterfield",
    university: "Universidad Católica Nordestana",
    sentences:
      "Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante.",
    Email: "ueasterfieldj1@scientificamerican.com",
  },
  {
    color: "#5db668",
    avatar:
      "https://robohash.org/doloremimpeditdolorum.png?size=50x50&set=set1",
    name: "Hart Rebillard",
    university: "Université de la Méditerranée (Aix Marseille II)",
    sentences:
      "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus.",
    Email: "hrebillardj2@apple.com",
  },
  {
    color: "#486450",
    avatar: "https://robohash.org/sinteumquia.png?size=50x50&set=set1",
    name: "Hailee Hassell",
    university: "University of Kurdistan",
    sentences:
      "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio.",
    Email: "hhassellj3@networkadvertising.org",
  },
  {
    color: "#4ae3dd",
    avatar: "https://robohash.org/enimeuma.png?size=50x50&set=set1",
    name: "Chev Fowkes",
    university: "Scripps College",
    sentences:
      "Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit.",
    Email: "cfowkesj4@scribd.com",
  },
  {
    color: "#e0759b",
    avatar: "https://robohash.org/voluptasdoloresqui.png?size=50x50&set=set1",
    name: "Benji Cadreman",
    university: "Universidade Estadual de Santa Cruz",
    sentences:
      "Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst.",
    Email: "bcadremanj5@noaa.gov",
  },
  {
    color: "#0c88a0",
    avatar: "https://robohash.org/velitarchitectoet.png?size=50x50&set=set1",
    name: "Virginia Blaydon",
    university: "Gdynia Maritime Academy",
    sentences: "Phasellus in felis. Donec semper sapien a libero. Nam dui.",
    Email: "vblaydonj6@hao123.com",
  },
  {
    color: "#bf2c3e",
    avatar:
      "https://robohash.org/magnamevenietdoloremque.png?size=50x50&set=set1",
    name: "Deena Abramof",
    university: "Nyack College",
    sentences:
      "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
    Email: "dabramofj7@zdnet.com",
  },
  {
    color: "#30b36d",
    avatar:
      "https://robohash.org/praesentiumdoloremplaceat.png?size=50x50&set=set1",
    name: "Babita Sheldon",
    university: "Hebei University of Economics and Trade",
    sentences:
      "Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl.",
    Email: "bsheldonj8@lycos.com",
  },
  {
    color: "#b123e4",
    avatar: "https://robohash.org/quosnesciuntfugit.png?size=50x50&set=set1",
    name: "Rubina Padell",
    university: "Miami Dade College",
    sentences:
      "In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.",
    Email: "rpadellj9@youku.com",
  },
  {
    color: "#20c442",
    avatar:
      "https://robohash.org/eaaspernaturprovident.png?size=50x50&set=set1",
    name: "Aundrea Isakovitch",
    university: "Tajik National University",
    sentences:
      "Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula.",
    Email: "aisakovitchja@businessweek.com",
  },
  {
    color: "#b3311b",
    avatar: "https://robohash.org/adipisciutut.png?size=50x50&set=set1",
    name: "Lorianne Tift",
    university: "Kafr El-Sheikh University",
    sentences:
      "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.",
    Email: "ltiftjb@boston.com",
  },
  {
    color: "#99cecb",
    avatar: "https://robohash.org/saepeipsumest.png?size=50x50&set=set1",
    name: "Eveleen Trunks",
    university: "Universidad de Matanzas Camilo Cienfuegos",
    sentences:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.",
    Email: "etrunksjc@bravesites.com",
  },
  {
    color: "#f8de92",
    avatar: "https://robohash.org/voluptatesiureeum.png?size=50x50&set=set1",
    name: "Tucker Kemston",
    university: "University of Belgrade",
    sentences:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
    Email: "tkemstonjd@icio.us",
  },
  {
    color: "#eef539",
    avatar: "https://robohash.org/ipsumavero.png?size=50x50&set=set1",
    name: "Shirline Panyer",
    university: "University of Petrosani",
    sentences:
      "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.",
    Email: "spanyerje@oakley.com",
  },
  {
    color: "#04e3be",
    avatar:
      "https://robohash.org/ipsamadipiscipraesentium.png?size=50x50&set=set1",
    name: "Rahal Rockwell",
    university: "The Queen's University Belfast",
    sentences:
      "Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
    Email: "rrockwelljf@addtoany.com",
  },
  {
    color: "#e0a355",
    avatar: "https://robohash.org/repellatundenatus.png?size=50x50&set=set1",
    name: "Siouxie Brendeke",
    university: "Cambodia University of Specialties",
    sentences:
      "Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem.",
    Email: "sbrendekejg@taobao.com",
  },
  {
    color: "#b2cd47",
    avatar: "https://robohash.org/quosquaenihil.png?size=50x50&set=set1",
    name: "Eugine Trillo",
    university: "Universidad Modular Abierta",
    sentences:
      "Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
    Email: "etrillojh@newsvine.com",
  },
  {
    color: "#d94190",
    avatar: "https://robohash.org/consequaturetlibero.png?size=50x50&set=set1",
    name: "Dahlia Clougher",
    university: "British Columbia Open University",
    sentences:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.",
    Email: "dclougherji@cisco.com",
  },
  {
    color: "#983310",
    avatar:
      "https://robohash.org/praesentiumquibusdamexcepturi.png?size=50x50&set=set1",
    name: "Nowell Alleway",
    university: "California Institute of the Arts",
    sentences:
      "Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl.",
    Email: "nallewayjj@fda.gov",
  },
  {
    color: "#fdbe35",
    avatar:
      "https://robohash.org/excepturilaboriosamsed.png?size=50x50&set=set1",
    name: "Flor McKeeman",
    university: "Universidad Olmeca",
    sentences:
      "Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    Email: "fmckeemanjk@accuweather.com",
  },
  {
    color: "#bb31bd",
    avatar:
      "https://robohash.org/solutamagnamconsequatur.png?size=50x50&set=set1",
    name: "Zita Ussher",
    university: "Universidade Luterana do Brasil",
    sentences:
      "Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus.",
    Email: "zussherjl@mtv.com",
  },
  {
    color: "#9f7153",
    avatar: "https://robohash.org/consecteturhicad.png?size=50x50&set=set1",
    name: "Jodee Otto",
    university: "Hanoi National Economics University",
    sentences:
      "Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum.",
    Email: "jottojm@odnoklassniki.ru",
  },
  {
    color: "#73e48a",
    avatar:
      "https://robohash.org/possimusaccusantiumaperiam.png?size=50x50&set=set1",
    name: "Garik Cush",
    university: "University of Minnesota - Twin Cities Campus",
    sentences: "Cras pellentesque volutpat dui.",
    Email: "gcushjn@howstuffworks.com",
  },
  {
    color: "#f85158",
    avatar: "https://robohash.org/temporaquisquidem.png?size=50x50&set=set1",
    name: "Marla Daftor",
    university: "Pontificia Universidad Catolica de Puerto Rico",
    sentences:
      "Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla.",
    Email: "mdaftorjo@umn.edu",
  },
  {
    color: "#4a56b8",
    avatar: "https://robohash.org/fugamaximevoluptate.png?size=50x50&set=set1",
    name: "Minna Blaase",
    university: "Necmettin Erbakan University",
    sentences:
      "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst.",
    Email: "mblaasejp@businesswire.com",
  },
  {
    color: "#ddcbee",
    avatar: "https://robohash.org/quianobisdeserunt.png?size=50x50&set=set1",
    name: "Alfons Cockshot",
    university: "Vitebsk State University",
    sentences:
      "Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
    Email: "acockshotjq@nytimes.com",
  },
  {
    color: "#d509dd",
    avatar: "https://robohash.org/quiamolestiaeplaceat.png?size=50x50&set=set1",
    name: "Vaughan Hawkes",
    university: "Universidad Alas Peruanas",
    sentences:
      "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
    Email: "vhawkesjr@wikia.com",
  },
  {
    color: "#559e5d",
    avatar: "https://robohash.org/illumeaquis.png?size=50x50&set=set1",
    name: "Ermentrude Tonepohl",
    university: "International Hellenic University",
    sentences:
      "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti.",
    Email: "etonepohljs@sfgate.com",
  },
  {
    color: "#060c19",
    avatar: "https://robohash.org/quodquoaut.png?size=50x50&set=set1",
    name: "Merl Charlick",
    university: "Tamil Nadu Agricultural University",
    sentences: "Aliquam erat volutpat. In congue.",
    Email: "mcharlickjt@mysql.com",
  },
  {
    color: "#994142",
    avatar: "https://robohash.org/euminciduntquas.png?size=50x50&set=set1",
    name: "Clive Mumberson",
    university: "Cyberjaya University College of Medical Science",
    sentences:
      "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    Email: "cmumbersonju@jiathis.com",
  },
  {
    color: "#1c607a",
    avatar: "https://robohash.org/quiarerumdolor.png?size=50x50&set=set1",
    name: "Lexis Harlow",
    university: "Russian Customs Academy, Vladivostok Branch",
    sentences:
      "Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat.",
    Email: "lharlowjv@chicagotribune.com",
  },
  {
    color: "#a91bb4",
    avatar: "https://robohash.org/sitlaborumipsum.png?size=50x50&set=set1",
    name: "Vinnie Crate",
    university: "University of Central Greece",
    sentences:
      "Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
    Email: "vcratejw@cocolog-nifty.com",
  },
  {
    color: "#fb29c1",
    avatar: "https://robohash.org/veniamquisquamet.png?size=50x50&set=set1",
    name: "Melissa Cosstick",
    university: "Brookdale Community College",
    sentences:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor.",
    Email: "mcosstickjx@storify.com",
  },
  {
    color: "#1f12c6",
    avatar: "https://robohash.org/beataevoluptatemquo.png?size=50x50&set=set1",
    name: "Sonya Crisford",
    university: "Pyramid Education Center",
    sentences:
      "Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.",
    Email: "scrisfordjy@php.net",
  },
  {
    color: "#b139ca",
    avatar: "https://robohash.org/eumetofficiis.png?size=50x50&set=set1",
    name: "Laurel Copper",
    university: "Wellspring University",
    sentences:
      "Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
    Email: "lcopperjz@bloomberg.com",
  },
  {
    color: "#61effa",
    avatar: "https://robohash.org/voluptatestemporaet.png?size=50x50&set=set1",
    name: "Griffy Dupey",
    university: "Medical College of Georgia",
    sentences: "Fusce consequat.",
    Email: "gdupeyk0@linkedin.com",
  },
  {
    color: "#3a2a7e",
    avatar:
      "https://robohash.org/doloremquevoluptatemdebitis.png?size=50x50&set=set1",
    name: "Teresa Billingsley",
    university: "San Beda College",
    sentences:
      "Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
    Email: "tbillingsleyk1@jalbum.net",
  },
  {
    color: "#67f58b",
    avatar: "https://robohash.org/perspiciatisoditquis.png?size=50x50&set=set1",
    name: "Laird Di Frisco",
    university: "London School of Jewish Studies",
    sentences:
      "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.",
    Email: "ldik2@wp.com",
  },
  {
    color: "#bffbff",
    avatar: "https://robohash.org/sintquidemmolestiae.png?size=50x50&set=set1",
    name: "Karyn Constantine",
    university: "Pennsylvania State University - Abington",
    sentences:
      "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.",
    Email: "kconstantinek3@alexa.com",
  },
  {
    color: "#a895bc",
    avatar: "https://robohash.org/fugaearumadipisci.png?size=50x50&set=set1",
    name: "Matthus Vaulkhard",
    university: "Universitat Rámon Llull",
    sentences:
      "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.",
    Email: "mvaulkhardk4@bbc.co.uk",
  },
  {
    color: "#c57adc",
    avatar: "https://robohash.org/eosexpeditaaccusamus.png?size=50x50&set=set1",
    name: "Ashely Billam",
    university: "Miyagi Gakuin Women's College",
    sentences:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum.",
    Email: "abillamk5@t.co",
  },
  {
    color: "#772717",
    avatar: "https://robohash.org/adculpaet.png?size=50x50&set=set1",
    name: "Sherwynd Kalkhoven",
    university: "Polytechnic Institute of Turin",
    sentences:
      "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem.",
    Email: "skalkhovenk6@com.com",
  },
  {
    color: "#098c8a",
    avatar: "https://robohash.org/etvoluptatemmodi.png?size=50x50&set=set1",
    name: "Genvieve Kirkbright",
    university: "Universidad Privada Abierta Latinoamericana",
    sentences:
      "Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo.",
    Email: "gkirkbrightk7@huffingtonpost.com",
  },
  {
    color: "#d1d171",
    avatar: "https://robohash.org/autquiaut.png?size=50x50&set=set1",
    name: "Bentlee Bettington",
    university: "University of Georgia",
    sentences:
      "Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
    Email: "bbettingtonk8@lulu.com",
  },
  {
    color: "#d4aa43",
    avatar: "https://robohash.org/iderrorquos.png?size=50x50&set=set1",
    name: "Dan Corradi",
    university: "Aichi Prefectural University",
    sentences:
      "Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui.",
    Email: "dcorradik9@instagram.com",
  },
  {
    color: "#38d0d7",
    avatar: "https://robohash.org/veldolorespossimus.png?size=50x50&set=set1",
    name: "Rudie Easterfield",
    university:
      "Finch University of Health Sciences - The Chicago Medical School",
    sentences:
      "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
    Email: "reasterfieldka@weibo.com",
  },
  {
    color: "#1db3fa",
    avatar:
      "https://robohash.org/consequunturtotamnatus.png?size=50x50&set=set1",
    name: "Loreen Sighart",
    university: "Kunstakademie Düsseldorf.",
    sentences:
      "Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
    Email: "lsighartkb@hostgator.com",
  },
  {
    color: "#505b7e",
    avatar:
      "https://robohash.org/laudantiumnecessitatibusquos.png?size=50x50&set=set1",
    name: "Liuka Duckerin",
    university: "Al Azhar University",
    sentences:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum.",
    Email: "lduckerinkc@exblog.jp",
  },
  {
    color: "#8c68f1",
    avatar: "https://robohash.org/suntmolestiaequidem.png?size=50x50&set=set1",
    name: "Berrie Cantu",
    university: "National Institute of Technology, Calicut",
    sentences:
      "Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
    Email: "bcantukd@dailymotion.com",
  },
  {
    color: "#1ea22b",
    avatar: "https://robohash.org/quodipsumut.png?size=50x50&set=set1",
    name: "Louise Keilloh",
    university:
      "Ecole Nationale Supérieure d'Electrochimie et d'Electrométallurgie de Gernoble",
    sentences:
      "Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus.",
    Email: "lkeillohke@home.pl",
  },
  {
    color: "#32df9d",
    avatar: "https://robohash.org/molestiaeautnulla.png?size=50x50&set=set1",
    name: "Kordula Withnall",
    university: "James Cook University of North Queensland",
    sentences: "Sed ante. Vivamus tortor.",
    Email: "kwithnallkf@columbia.edu",
  },
  {
    color: "#63a9c3",
    avatar:
      "https://robohash.org/inveritatisvoluptates.png?size=50x50&set=set1",
    name: "Elyse Eglin",
    university: "Universidade Estadual da Paraíba",
    sentences:
      "Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
    Email: "eeglinkg@feedburner.com",
  },
  {
    color: "#568d70",
    avatar:
      "https://robohash.org/aliquamquiapraesentium.png?size=50x50&set=set1",
    name: "Earlie Robbert",
    university: "Universidad Interamericana de Educacion a Distancia de Panama",
    sentences:
      "Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante.",
    Email: "erobbertkh@chronoengine.com",
  },
  {
    color: "#f09ff2",
    avatar:
      "https://robohash.org/necessitatibusipsamquidem.png?size=50x50&set=set1",
    name: "Petronella Urlin",
    university: "Centro de Estudios Investigación y Tecnología (CEIT)",
    sentences:
      "In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius.",
    Email: "purlinki@wufoo.com",
  },
  {
    color: "#7724c3",
    avatar: "https://robohash.org/aperspiciatissunt.png?size=50x50&set=set1",
    name: "Erin Grafhom",
    university: "Kettering University (GMI)",
    sentences:
      "Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.",
    Email: "egrafhomkj@taobao.com",
  },
  {
    color: "#50c827",
    avatar: "https://robohash.org/harumdignissimosut.png?size=50x50&set=set1",
    name: "Domenic Graveston",
    university: "FPT University",
    sentences:
      "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum.",
    Email: "dgravestonkk@bbb.org",
  },
  {
    color: "#d3cd8d",
    avatar: "https://robohash.org/amollitiaenim.png?size=50x50&set=set1",
    name: "Shanna Shipcott",
    university: "European College of Liberal Arts",
    sentences:
      "Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.",
    Email: "sshipcottkl@usa.gov",
  },
  {
    color: "#1d319c",
    avatar: "https://robohash.org/autemetlabore.png?size=50x50&set=set1",
    name: "Ola Towne",
    university: "Université de Buéa",
    sentences:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.",
    Email: "otownekm@unblog.fr",
  },
  {
    color: "#b40bc5",
    avatar: "https://robohash.org/maximetemporibusquas.png?size=50x50&set=set1",
    name: "Leisha Valero",
    university: "Universidad Columbia del Paraguay",
    sentences:
      "Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.",
    Email: "lvalerokn@bluehost.com",
  },
  {
    color: "#5e9760",
    avatar: "https://robohash.org/etconsequaturautem.png?size=50x50&set=set1",
    name: "Hammad Mangham",
    university: "Université Notre Dame d'Haïti",
    sentences:
      "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.",
    Email: "hmanghamko@t.co",
  },
  {
    color: "#669f17",
    avatar: "https://robohash.org/quoiustoet.png?size=50x50&set=set1",
    name: "Danita Townsend",
    university: "International Tourism Institute",
    sentences:
      "Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.",
    Email: "dtownsendkp@tuttocitta.it",
  },
  {
    color: "#15fafd",
    avatar: "https://robohash.org/sedcommodiea.png?size=50x50&set=set1",
    name: "Boothe Josephov",
    university: "International Culture University ",
    sentences: "Maecenas pulvinar lobortis est.",
    Email: "bjosephovkq@census.gov",
  },
  {
    color: "#ed0084",
    avatar: "https://robohash.org/utdignissimossint.png?size=50x50&set=set1",
    name: "Josey Hunnam",
    university: "Universidad de Córdoba",
    sentences:
      "Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio.",
    Email: "jhunnamkr@washington.edu",
  },
  {
    color: "#dec19a",
    avatar: "https://robohash.org/iureerrorlabore.png?size=50x50&set=set1",
    name: "Raynor Kynston",
    university: "Yildirim Beyazit University",
    sentences:
      "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis.",
    Email: "rkynstonks@icio.us",
  },
  {
    color: "#5a179d",
    avatar: "https://robohash.org/remcorruptianimi.png?size=50x50&set=set1",
    name: "Jeanelle Gogerty",
    university: "Hanoi Medical University",
    sentences:
      "In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula.",
    Email: "jgogertykt@nbcnews.com",
  },
  {
    color: "#e4b386",
    avatar: "https://robohash.org/odiocorporisin.png?size=50x50&set=set1",
    name: "Germayne Pigden",
    university: "Universidad de Managua (U de M)",
    sentences:
      "Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    Email: "gpigdenku@digg.com",
  },
  {
    color: "#778ce7",
    avatar: "https://robohash.org/facerequiaaliquid.png?size=50x50&set=set1",
    name: "Wit Stilling",
    university: "China USA Business University",
    sentences:
      "Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt.",
    Email: "wstillingkv@w3.org",
  },
  {
    color: "#d340de",
    avatar: "https://robohash.org/cupiditateillumquam.png?size=50x50&set=set1",
    name: "Tymon Runciman",
    university: "Institut Teknologi Sepuluh Nopember",
    sentences:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.",
    Email: "truncimankw@elegantthemes.com",
  },
  {
    color: "#07785c",
    avatar: "https://robohash.org/veritatisetrerum.png?size=50x50&set=set1",
    name: "Pincus Slemmonds",
    university: "Vikrama Simhapuri University",
    sentences:
      "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
    Email: "pslemmondskx@de.vu",
  },
  {
    color: "#878183",
    avatar:
      "https://robohash.org/ametdoloremqueplaceat.png?size=50x50&set=set1",
    name: "Hall Koubek",
    university: "Radford University",
    sentences:
      "Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
    Email: "hkoubekky@hud.gov",
  },
  {
    color: "#cce51b",
    avatar: "https://robohash.org/molestiaeeaet.png?size=50x50&set=set1",
    name: "Jaymie Richemond",
    university: "St. John's & St. Mary's Institute of Technology",
    sentences:
      "Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.",
    Email: "jrichemondkz@dropbox.com",
  },
  {
    color: "#34b1c0",
    avatar:
      "https://robohash.org/corporisdoloremadipisci.png?size=50x50&set=set1",
    name: "Chancey Allflatt",
    university: "Graduate University for Advanced Studies",
    sentences:
      "Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula.",
    Email: "callflattl0@dion.ne.jp",
  },
  {
    color: "#54d5b3",
    avatar: "https://robohash.org/quietvitae.png?size=50x50&set=set1",
    name: "Vince Castellet",
    university: "Mindanao State University",
    sentences:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum.",
    Email: "vcastelletl1@topsy.com",
  },
  {
    color: "#089421",
    avatar:
      "https://robohash.org/consecteturvoluptatessed.png?size=50x50&set=set1",
    name: "Sianna Pirson",
    university: "Universidad San Pablo",
    sentences:
      "Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo.",
    Email: "spirsonl2@timesonline.co.uk",
  },
  {
    color: "#226b4a",
    avatar:
      "https://robohash.org/nemomolestiaeaccusantium.png?size=50x50&set=set1",
    name: "Erl Wixon",
    university:
      "Ecole Nationale Supérieur d'Ingénieurs de Constructions Aéronautique",
    sentences:
      "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis.",
    Email: "ewixonl3@blogspot.com",
  },
  {
    color: "#45879e",
    avatar:
      "https://robohash.org/repellenduseuminventore.png?size=50x50&set=set1",
    name: "Elnar Wherry",
    university: "Lebanese American University",
    sentences:
      "Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
    Email: "ewherryl4@hexun.com",
  },
  {
    color: "#f26cfd",
    avatar:
      "https://robohash.org/voluptatenisiconsectetur.png?size=50x50&set=set1",
    name: "Jocelin Beswell",
    university: "Tafila Technical University ",
    sentences:
      "Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
    Email: "jbeswelll5@goo.gl",
  },
  {
    color: "#6af32d",
    avatar: "https://robohash.org/quiaccusamusest.png?size=50x50&set=set1",
    name: "Berta Barbie",
    university: "Gaziantep University",
    sentences:
      "Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.",
    Email: "bbarbiel6@fema.gov",
  },
  {
    color: "#4ea64b",
    avatar: "https://robohash.org/ullaminnon.png?size=50x50&set=set1",
    name: "Nigel Aggett",
    university: "Universidad Abierta Interactiva",
    sentences: "Nunc nisl.",
    Email: "naggettl7@aboutads.info",
  },
  {
    color: "#e7307b",
    avatar:
      "https://robohash.org/reprehenderitadrecusandae.png?size=50x50&set=set1",
    name: "Irina Athelstan",
    university: "Anderson University",
    sentences:
      "In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl.",
    Email: "iathelstanl8@yahoo.com",
  },
  {
    color: "#b774db",
    avatar:
      "https://robohash.org/asperioresullamdolorem.png?size=50x50&set=set1",
    name: "Hedwiga Weins",
    university: "Universidad de Navarra",
    sentences:
      "Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor.",
    Email: "hweinsl9@wix.com",
  },
  {
    color: "#386c12",
    avatar: "https://robohash.org/temporafacilisfacere.png?size=50x50&set=set1",
    name: "Odella Hanstock",
    university: "Northeast Agricultural University",
    sentences:
      "Duis at velit eu est congue elementum. In hac habitasse platea dictumst.",
    Email: "ohanstockla@fema.gov",
  },
  {
    color: "#e20e9c",
    avatar: "https://robohash.org/quiaodioaccusamus.png?size=50x50&set=set1",
    name: "Lindsy Sidebotton",
    university: "Kuching Polytechnic",
    sentences:
      "Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.",
    Email: "lsidebottonlb@tumblr.com",
  },
  {
    color: "#edbe73",
    avatar:
      "https://robohash.org/autatqueexercitationem.png?size=50x50&set=set1",
    name: "Robina Petrushkevich",
    university: "Divine Word College",
    sentences:
      "Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla.",
    Email: "rpetrushkevichlc@studiopress.com",
  },
  {
    color: "#547de3",
    avatar: "https://robohash.org/quaeratquisautem.png?size=50x50&set=set1",
    name: "Crosby Fanstone",
    university: "University of Advancing Technology (UAT)",
    sentences: "Praesent blandit lacinia erat.",
    Email: "cfanstoneld@addtoany.com",
  },
  {
    color: "#e23d3f",
    avatar: "https://robohash.org/atestlibero.png?size=50x50&set=set1",
    name: "Waring Mattioli",
    university: "Tohwa University",
    sentences: "Fusce consequat. Nulla nisl.",
    Email: "wmattiolile@cdbaby.com",
  },
  {
    color: "#44f300",
    avatar: "https://robohash.org/rerumquaevoluptatem.png?size=50x50&set=set1",
    name: "Lind Gersam",
    university: "European University Portugal",
    sentences:
      "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
    Email: "lgersamlf@ifeng.com",
  },
  {
    color: "#1719b9",
    avatar:
      "https://robohash.org/consequaturnequecumque.png?size=50x50&set=set1",
    name: "Andris Bakes",
    university: "Instituto Universitario Nacional del Arte",
    sentences: "Donec dapibus. Duis at velit eu est congue elementum.",
    Email: "abakeslg@google.pl",
  },
  {
    color: "#37ac1a",
    avatar:
      "https://robohash.org/quoreprehenderitveritatis.png?size=50x50&set=set1",
    name: "Maximilien Stodit",
    university: "Universitas Persada Indonesia Y.A.I",
    sentences: "Maecenas pulvinar lobortis est. Phasellus sit amet erat.",
    Email: "mstoditlh@blogger.com",
  },
  {
    color: "#317c41",
    avatar: "https://robohash.org/facerecommodiearum.png?size=50x50&set=set1",
    name: "Kipper Tarbert",
    university: "Universidad Tecnológica de México",
    sentences:
      "Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.",
    Email: "ktarbertli@usatoday.com",
  },
  {
    color: "#021380",
    avatar:
      "https://robohash.org/perferendisquidistinctio.png?size=50x50&set=set1",
    name: "Brodie Bootell",
    university: "Kenyatta University",
    sentences:
      "Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus.",
    Email: "bbootelllj@deviantart.com",
  },
  {
    color: "#0fed9d",
    avatar:
      "https://robohash.org/quasnecessitatibusaspernatur.png?size=50x50&set=set1",
    name: "Godwin Davy",
    university: "McGill University",
    sentences:
      "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.",
    Email: "gdavylk@nationalgeographic.com",
  },
  {
    color: "#9370dd",
    avatar:
      "https://robohash.org/reprehenderitcorruptibeatae.png?size=50x50&set=set1",
    name: "Hedda Gowdie",
    university: "Texas A&M International University",
    sentences:
      "Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus.",
    Email: "hgowdiell@ihg.com",
  },
  {
    color: "#1302e0",
    avatar: "https://robohash.org/recusandaesolutaeius.png?size=50x50&set=set1",
    name: "Kala Waple",
    university: "All Nations University College",
    sentences:
      "Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
    Email: "kwaplelm@reference.com",
  },
  {
    color: "#4839dc",
    avatar:
      "https://robohash.org/voluptatemminimamolestiae.png?size=50x50&set=set1",
    name: "Stefa Picknett",
    university: "Wolkite University",
    sentences:
      "Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum.",
    Email: "spicknettln@a8.net",
  },
  {
    color: "#7d6d07",
    avatar: "https://robohash.org/suntsaepequia.png?size=50x50&set=set1",
    name: "Orland Pretswell",
    university: "Universidad de La Salle, Bajío",
    sentences:
      "Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.",
    Email: "opretswelllo@goodreads.com",
  },
  {
    color: "#2ef678",
    avatar: "https://robohash.org/numquamabin.png?size=50x50&set=set1",
    name: "Barty Smoth",
    university: "University of Nebraska (System)",
    sentences:
      "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.",
    Email: "bsmothlp@un.org",
  },
  {
    color: "#0ef36c",
    avatar: "https://robohash.org/omnisnondicta.png?size=50x50&set=set1",
    name: "Farley Handover",
    university: "Notre Dame College",
    sentences:
      "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero.",
    Email: "fhandoverlq@bigcartel.com",
  },
  {
    color: "#021547",
    avatar: "https://robohash.org/quitemporibusqui.png?size=50x50&set=set1",
    name: "Gerek MacGall",
    university: "Vlerick Leuven Gent Management School",
    sentences:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo.",
    Email: "gmacgalllr@eepurl.com",
  },
  {
    color: "#d55557",
    avatar: "https://robohash.org/teneturnonvoluptatem.png?size=50x50&set=set1",
    name: "Leodora Lindenbaum",
    university: "Mid-American Bible College",
    sentences:
      "Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula.",
    Email: "llindenbaumls@ifeng.com",
  },
  {
    color: "#2f94e4",
    avatar: "https://robohash.org/perspiciatismagnamet.png?size=50x50&set=set1",
    name: "Edee Peete",
    university: "College of Technology at Abha",
    sentences:
      "Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
    Email: "epeetelt@economist.com",
  },
  {
    color: "#7af427",
    avatar: "https://robohash.org/estminusvoluptas.png?size=50x50&set=set1",
    name: "Wynn Cocksedge",
    university: "Southern California College of Optometry",
    sentences:
      "Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis.",
    Email: "wcocksedgelu@nytimes.com",
  },
  {
    color: "#5d52b3",
    avatar:
      "https://robohash.org/nonlaudantiumcupiditate.png?size=50x50&set=set1",
    name: "Berne Francklin",
    university: 'Universidad Pedagógica "José Martí", Camagüey',
    sentences:
      "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam. Nam tristique tortor eu pede.",
    Email: "bfrancklinlv@i2i.jp",
  },
  {
    color: "#8ef0a1",
    avatar: "https://robohash.org/essesedqui.png?size=50x50&set=set1",
    name: "Cello Tie",
    university: "Agricultural University of Cracow",
    sentences: "Nunc nisl.",
    Email: "ctielw@umn.edu",
  },
  {
    color: "#470d4d",
    avatar:
      "https://robohash.org/ipsametexercitationem.png?size=50x50&set=set1",
    name: "Peder Juanico",
    university: "Rockford College",
    sentences:
      "Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.",
    Email: "pjuanicolx@state.gov",
  },
  {
    color: "#2c8e42",
    avatar: "https://robohash.org/velquaeaspernatur.png?size=50x50&set=set1",
    name: "Blanche Mathiassen",
    university: "Canisius College",
    sentences: "Donec semper sapien a libero.",
    Email: "bmathiassenly@ehow.com",
  },
  {
    color: "#04cf76",
    avatar:
      "https://robohash.org/molestiaesitdignissimos.png?size=50x50&set=set1",
    name: "Fax Gumbrell",
    university: "University of Kent at Canterbury",
    sentences:
      "Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
    Email: "fgumbrelllz@spiegel.de",
  },
  {
    color: "#3ccd18",
    avatar:
      "https://robohash.org/corruptisequideserunt.png?size=50x50&set=set1",
    name: "Harp Kenan",
    university: "Al Fashir University",
    sentences:
      "Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus.",
    Email: "hkenanm0@macromedia.com",
  },
  {
    color: "#22507d",
    avatar: "https://robohash.org/nonutvel.png?size=50x50&set=set1",
    name: "Inigo Sutworth",
    university: "Keiai University",
    sentences:
      "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
    Email: "isutworthm1@omniture.com",
  },
  {
    color: "#f61ede",
    avatar: "https://robohash.org/quireprehenderitet.png?size=50x50&set=set1",
    name: "Nancee Feechum",
    university: "University of the Philippines Visayas - Cebu High School",
    sentences: "Duis bibendum. Morbi non quam nec dui luctus rutrum.",
    Email: "nfeechumm2@shinystat.com",
  },
  {
    color: "#a0c7f1",
    avatar: "https://robohash.org/autinipsam.png?size=50x50&set=set1",
    name: "Jeniece Sweedy",
    university: "Universidade Federal de Campina Grande",
    sentences:
      "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque.",
    Email: "jsweedym3@wiley.com",
  },
  {
    color: "#434116",
    avatar: "https://robohash.org/eaatarchitecto.png?size=50x50&set=set1",
    name: "Marcelline MacCrachen",
    university: "Universidad Católica de Valencia",
    sentences:
      "Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.",
    Email: "mmaccrachenm4@a8.net",
  },
  {
    color: "#c39670",
    avatar:
      "https://robohash.org/oditdebitislaudantium.png?size=50x50&set=set1",
    name: "Maribelle Hews",
    university: "Universitas Tarumanagara",
    sentences:
      "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.",
    Email: "mhewsm5@nationalgeographic.com",
  },
  {
    color: "#06738e",
    avatar: "https://robohash.org/quietut.png?size=50x50&set=set1",
    name: "Chucho Smedley",
    university: "Cankaya University",
    sentences:
      "Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.",
    Email: "csmedleym6@amazon.co.jp",
  },
  {
    color: "#ecbeaa",
    avatar:
      "https://robohash.org/aliasdistinctiorepudiandae.png?size=50x50&set=set1",
    name: "Hildegaard Paffett",
    university: "Salem College",
    sentences:
      "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum.",
    Email: "hpaffettm7@nps.gov",
  },
  {
    color: "#c5ba0b",
    avatar: "https://robohash.org/eligendisinttempore.png?size=50x50&set=set1",
    name: "Ophelia Birds",
    university: "Universität Salzburg",
    sentences:
      "Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio.",
    Email: "obirdsm8@networksolutions.com",
  },
  {
    color: "#aa087b",
    avatar: "https://robohash.org/illumvoluptaset.png?size=50x50&set=set1",
    name: "Annmarie Stiegars",
    university: "Ecole Supérieure de Commerce de Clermont-Ferrand",
    sentences:
      "Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla.",
    Email: "astiegarsm9@bloglines.com",
  },
  {
    color: "#0e820a",
    avatar: "https://robohash.org/utexcepturivoluptas.png?size=50x50&set=set1",
    name: "Annora Chilvers",
    university: "Universitas Sebelas Maret",
    sentences:
      "In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy.",
    Email: "achilversma@virginia.edu",
  },
  {
    color: "#e07e73",
    avatar: "https://robohash.org/eligendierrorsoluta.png?size=50x50&set=set1",
    name: "Hermina Oxlade",
    university: "Université Shalom de Bunia",
    sentences:
      "Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.",
    Email: "hoxlademb@usatoday.com",
  },
  {
    color: "#4eb038",
    avatar:
      "https://robohash.org/omnisconsequunturnatus.png?size=50x50&set=set1",
    name: "Eugenia Walster",
    university: "Kuban State University",
    sentences:
      "Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus.",
    Email: "ewalstermc@weather.com",
  },
  {
    color: "#14f832",
    avatar: "https://robohash.org/dolorodioaccusamus.png?size=50x50&set=set1",
    name: "Valentine Domerc",
    university: "Blue Nile University",
    sentences: "Pellentesque ultrices mattis odio.",
    Email: "vdomercmd@webeden.co.uk",
  },
  {
    color: "#ba2368",
    avatar: "https://robohash.org/laborumadrepudiandae.png?size=50x50&set=set1",
    name: "Leicester Segeswoeth",
    university: "University of Szeged",
    sentences:
      "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
    Email: "lsegeswoethme@istockphoto.com",
  },
  {
    color: "#cd1bc1",
    avatar: "https://robohash.org/nemoestaut.png?size=50x50&set=set1",
    name: "Federica Bracegirdle",
    university: "Colby-Sawyer College",
    sentences:
      "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.",
    Email: "fbracegirdlemf@artisteer.com",
  },
  {
    color: "#a4723f",
    avatar: "https://robohash.org/quialaborumsed.png?size=50x50&set=set1",
    name: "Raina Paxforde",
    university: "Universidad Católica Anselmo Llorente",
    sentences:
      "Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus.",
    Email: "rpaxfordemg@wiley.com",
  },
  {
    color: "#a770e2",
    avatar: "https://robohash.org/animiprovidentculpa.png?size=50x50&set=set1",
    name: "Agnola Hamshere",
    university: "Universidad Católica de Honduras",
    sentences:
      "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    Email: "ahamsheremh@abc.net.au",
  },
  {
    color: "#22fe1d",
    avatar: "https://robohash.org/ipsamsapientequia.png?size=50x50&set=set1",
    name: "Donni Arpin",
    university: "University of East Srarajevo",
    sentences:
      "Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.",
    Email: "darpinmi@berkeley.edu",
  },
  {
    color: "#e52bdd",
    avatar:
      "https://robohash.org/eligendiestvoluptatibus.png?size=50x50&set=set1",
    name: "Aprilette Teers",
    university: "Sabzevar Teacher Training University",
    sentences: "Nunc rhoncus dui vel sem.",
    Email: "ateersmj@devhub.com",
  },
  {
    color: "#eda3ce",
    avatar: "https://robohash.org/cumquearchitectosit.png?size=50x50&set=set1",
    name: "Binni Bingall",
    university: "Université de Lubumbashi",
    sentences:
      "In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc.",
    Email: "bbingallmk@boston.com",
  },
  {
    color: "#1a0c45",
    avatar:
      "https://robohash.org/facereperferendisneque.png?size=50x50&set=set1",
    name: "Ara Phinnis",
    university: "University of Cebu",
    sentences:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc.",
    Email: "aphinnisml@cpanel.net",
  },
  {
    color: "#08eb1d",
    avatar: "https://robohash.org/etestnihil.png?size=50x50&set=set1",
    name: "Sherline Lucy",
    university: "University of San Marino",
    sentences:
      "Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.",
    Email: "slucymm@nydailynews.com",
  },
  {
    color: "#dfcf6b",
    avatar:
      "https://robohash.org/voluptasreprehenderiteveniet.png?size=50x50&set=set1",
    name: "Morton Deniskevich",
    university:
      "Evangelische Fachhochschule für Religionspädagogik, und Gemeindediakonie Moritzburg",
    sentences:
      "Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
    Email: "mdeniskevichmn@vk.com",
  },
  {
    color: "#bbe590",
    avatar: "https://robohash.org/aliassunteos.png?size=50x50&set=set1",
    name: "Wallie Tamsett",
    university: "Jerusalem University College",
    sentences:
      "Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy.",
    Email: "wtamsettmo@tinypic.com",
  },
  {
    color: "#0855db",
    avatar: "https://robohash.org/fugitdebitisut.png?size=50x50&set=set1",
    name: "Douglass Karchowski",
    university: "Amherst College",
    sentences:
      "Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.",
    Email: "dkarchowskimp@hugedomains.com",
  },
  {
    color: "#9ff5f0",
    avatar:
      "https://robohash.org/etreprehenderitfugiat.png?size=50x50&set=set1",
    name: "Kelsy McGinly",
    university: "Arab Open University",
    sentences:
      "In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt.",
    Email: "kmcginlymq@biblegateway.com",
  },
  {
    color: "#331073",
    avatar: "https://robohash.org/idofficiaquos.png?size=50x50&set=set1",
    name: "Shell Keeler",
    university: "New York University, Abu Dhabi",
    sentences:
      "Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
    Email: "skeelermr@china.com.cn",
  },
  {
    color: "#96f587",
    avatar: "https://robohash.org/pariaturinciduntesse.png?size=50x50&set=set1",
    name: "Blake Siney",
    university: "Atilim University",
    sentences:
      "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum.",
    Email: "bsineyms@tumblr.com",
  },
  {
    color: "#25b3ed",
    avatar: "https://robohash.org/etnobiscumque.png?size=50x50&set=set1",
    name: "Annissa Sandbatch",
    university: "Université de Limoges",
    sentences:
      "Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.",
    Email: "asandbatchmt@kickstarter.com",
  },
  {
    color: "#e5cadb",
    avatar:
      "https://robohash.org/molestiaeducimustempore.png?size=50x50&set=set1",
    name: "Karlik MacDougall",
    university: "Osaka University of Health and Sport Sciences",
    sentences:
      "Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
    Email: "kmacdougallmu@cisco.com",
  },
  {
    color: "#854cb4",
    avatar:
      "https://robohash.org/blanditiisautemcupiditate.png?size=50x50&set=set1",
    name: "Dorice Hellens",
    university: "College of New Rochelle",
    sentences: "Etiam justo. Etiam pretium iaculis justo.",
    Email: "dhellensmv@cdc.gov",
  },
  {
    color: "#a5bdc0",
    avatar: "https://robohash.org/harumeossoluta.png?size=50x50&set=set1",
    name: "Marcel Rickson",
    university: "Universidad del Valle del Bravo",
    sentences:
      "Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
    Email: "mricksonmw@skyrock.com",
  },
  {
    color: "#dc72f7",
    avatar:
      "https://robohash.org/consecteturquibusdamvoluptas.png?size=50x50&set=set1",
    name: "Abe Penney",
    university: "Meru University of Science and Technology",
    sentences:
      "Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum.",
    Email: "apenneymx@mtv.com",
  },
  {
    color: "#d2d4e5",
    avatar:
      "https://robohash.org/consequaturveniambeatae.png?size=50x50&set=set1",
    name: "Kaylil Bromont",
    university: "Fachhochschulstudiengänge Krems IMC",
    sentences:
      "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.",
    Email: "kbromontmy@sciencedaily.com",
  },
  {
    color: "#9bdfdc",
    avatar: "https://robohash.org/estnihilet.png?size=50x50&set=set1",
    name: "Seward Groneway",
    university: "Union College Nebraska",
    sentences:
      "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus.",
    Email: "sgronewaymz@cbc.ca",
  },
  {
    color: "#811182",
    avatar: "https://robohash.org/atquenisiiste.png?size=50x50&set=set1",
    name: "Larissa Pick",
    university: "Tongmyung University of Information Technology",
    sentences:
      "Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum.",
    Email: "lpickn0@imgur.com",
  },
  {
    color: "#884cd1",
    avatar: "https://robohash.org/odiodebitisdeleniti.png?size=50x50&set=set1",
    name: "Wendie Chaudret",
    university: "Saxion Universities ",
    sentences:
      "Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus.",
    Email: "wchaudretn1@a8.net",
  },
  {
    color: "#3943bf",
    avatar:
      "https://robohash.org/molestiaenammolestiae.png?size=50x50&set=set1",
    name: "Rea Buckam",
    university: "Medical Academy Karol Marcinkowski in Poznan",
    sentences:
      "In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
    Email: "rbuckamn2@histats.com",
  },
  {
    color: "#bd871f",
    avatar: "https://robohash.org/utlaboriosamquos.png?size=50x50&set=set1",
    name: "Meggy Duprey",
    university: "Agricultural University of Szczecin",
    sentences:
      "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
    Email: "mdupreyn3@unc.edu",
  },
  {
    color: "#911c32",
    avatar: "https://robohash.org/illodolorrecusandae.png?size=50x50&set=set1",
    name: "Rudie Bahlmann",
    university: "Wagner College",
    sentences:
      "Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
    Email: "rbahlmannn4@youku.com",
  },
  {
    color: "#0ff6d9",
    avatar: "https://robohash.org/omnisnequehic.png?size=50x50&set=set1",
    name: "Rosalie Aslie",
    university: "Hochschule Bremerhaven",
    sentences:
      "Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
    Email: "raslien5@businessweek.com",
  },
  {
    color: "#a7f79c",
    avatar:
      "https://robohash.org/expeditarerumdignissimos.png?size=50x50&set=set1",
    name: "Nancee Constant",
    university: "Pennsylvania State University - Abington",
    sentences:
      "Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.",
    Email: "nconstantn6@biblegateway.com",
  },
  {
    color: "#42720c",
    avatar:
      "https://robohash.org/voluptatemsunttempora.png?size=50x50&set=set1",
    name: "Cati Bateup",
    university: "Clarion University",
    sentences:
      "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
    Email: "cbateupn7@geocities.com",
  },
  {
    color: "#a4ba7d",
    avatar:
      "https://robohash.org/aperiamnumquamdoloribus.png?size=50x50&set=set1",
    name: "Sauncho Kleint",
    university: "Bluffton College",
    sentences:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
    Email: "skleintn8@mapy.cz",
  },
  {
    color: "#5f6262",
    avatar: "https://robohash.org/doloresautdoloribus.png?size=50x50&set=set1",
    name: "Kelly Eilhermann",
    university: "Estonian Academy of Security Sciences",
    sentences:
      "Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem.",
    Email: "keilhermannn9@artisteer.com",
  },
  {
    color: "#26bf93",
    avatar: "https://robohash.org/oditvoluptatesvelit.png?size=50x50&set=set1",
    name: "Dukey Aberdein",
    university: "Centro Universitário Barao de Maua",
    sentences:
      "Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
    Email: "daberdeinna@sfgate.com",
  },
  {
    color: "#7f6e38",
    avatar:
      "https://robohash.org/providentoccaecatinisi.png?size=50x50&set=set1",
    name: "Pietro Calender",
    university: "Southwest University of Political Science and Law",
    sentences:
      "In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
    Email: "pcalendernb@usatoday.com",
  },
  {
    color: "#d96b45",
    avatar: "https://robohash.org/verosaepedelectus.png?size=50x50&set=set1",
    name: "Stevie Plain",
    university: "Harbin Normal University",
    sentences:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.",
    Email: "splainnc@engadget.com",
  },
  {
    color: "#811ef6",
    avatar: "https://robohash.org/earumquaeratsit.png?size=50x50&set=set1",
    name: "Nap Piegrome",
    university: "University of Moncton, Edmundston",
    sentences:
      "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
    Email: "npiegromend@va.gov",
  },
  {
    color: "#895b29",
    avatar: "https://robohash.org/corporiseossaepe.png?size=50x50&set=set1",
    name: "Consalve Ambrogiotti",
    university: "Hochschule Coburg",
    sentences:
      "Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
    Email: "cambrogiottine@businesswire.com",
  },
  {
    color: "#380e1e",
    avatar: "https://robohash.org/undeabdolores.png?size=50x50&set=set1",
    name: "Melody Mossop",
    university: "St. John's University",
    sentences:
      "In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue.",
    Email: "mmossopnf@com.com",
  },
  {
    color: "#ce02b6",
    avatar: "https://robohash.org/rerumetaut.png?size=50x50&set=set1",
    name: "Jay Jimes",
    university: "Kwantleen University College",
    sentences:
      "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo.",
    Email: "jjimesng@yolasite.com",
  },
  {
    color: "#be500d",
    avatar:
      "https://robohash.org/voluptatemsapientedoloribus.png?size=50x50&set=set1",
    name: "Karlotte Dorsey",
    university: "Sadra University",
    sentences:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.",
    Email: "kdorseynh@pcworld.com",
  },
  {
    color: "#0e590a",
    avatar: "https://robohash.org/beataealiquidquod.png?size=50x50&set=set1",
    name: "Zsazsa Hayden",
    university: "Hellenic Open University",
    sentences:
      "Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.",
    Email: "zhaydenni@blogspot.com",
  },
  {
    color: "#c25a48",
    avatar:
      "https://robohash.org/fugiatvoluptasvoluptatem.png?size=50x50&set=set1",
    name: "Murry Zanetti",
    university: "Konan University",
    sentences:
      "Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum.",
    Email: "mzanettinj@imdb.com",
  },
  {
    color: "#2a626b",
    avatar:
      "https://robohash.org/autrecusandaeconsequatur.png?size=50x50&set=set1",
    name: "Florance Giraudot",
    university: "Asahi University",
    sentences:
      "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.",
    Email: "fgiraudotnk@bluehost.com",
  },
  {
    color: "#7a5294",
    avatar:
      "https://robohash.org/voluptatemdolorumrerum.png?size=50x50&set=set1",
    name: "Kathlin Spatig",
    university: "The Achievers University",
    sentences:
      "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.",
    Email: "kspatignl@dagondesign.com",
  },
  {
    color: "#cfae8e",
    avatar: "https://robohash.org/suntautmolestiae.png?size=50x50&set=set1",
    name: "Lexie MacTrusty",
    university: "Washington University in St. Louis",
    sentences:
      "Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
    Email: "lmactrustynm@va.gov",
  },
  {
    color: "#7c60b3",
    avatar: "https://robohash.org/itaquequibusdamsequi.png?size=50x50&set=set1",
    name: "Ryan Hurch",
    university: "Baghdad College of Economic Sciences University",
    sentences:
      "Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum.",
    Email: "rhurchnn@rakuten.co.jp",
  },
  {
    color: "#d8ffc2",
    avatar: "https://robohash.org/autemlaudantiumqui.png?size=50x50&set=set1",
    name: "Read Hysom",
    university: "Universitas Mulawarman",
    sentences: "In quis justo. Maecenas rhoncus aliquam lacus.",
    Email: "rhysomno@homestead.com",
  },
  {
    color: "#ebd1e4",
    avatar: "https://robohash.org/namaliasquam.png?size=50x50&set=set1",
    name: "Doll Radbourne",
    university: "Institute of Commerce and Business",
    sentences:
      "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.",
    Email: "dradbournenp@ox.ac.uk",
  },
  {
    color: "#67e063",
    avatar:
      "https://robohash.org/maioresnecessitatibusdolorem.png?size=50x50&set=set1",
    name: "Merilyn Boycott",
    university: "Université d'Angers",
    sentences:
      "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl.",
    Email: "mboycottnq@bloomberg.com",
  },
  {
    color: "#9a2b3d",
    avatar: "https://robohash.org/estquibusdamducimus.png?size=50x50&set=set1",
    name: "Dotty Rainforth",
    university: "Yerevan State Medical University",
    sentences:
      "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
    Email: "drainforthnr@marketwatch.com",
  },
  {
    color: "#9b7cf4",
    avatar:
      "https://robohash.org/cupiditatemolestiaetenetur.png?size=50x50&set=set1",
    name: "Nevile Stockow",
    university: "Institut d'Etudes Politiques de Paris (Sciences Po)",
    sentences:
      "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim.",
    Email: "nstockowns@desdev.cn",
  },
  {
    color: "#cea5f2",
    avatar: "https://robohash.org/fugitquodomnis.png?size=50x50&set=set1",
    name: "Fidelia Topper",
    university: "Carroll College Waukesha",
    sentences:
      "Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus.",
    Email: "ftoppernt@qq.com",
  },
  {
    color: "#af20ea",
    avatar: "https://robohash.org/etharumsit.png?size=50x50&set=set1",
    name: "Alexi Corse",
    university: "Medical University Pleven",
    sentences: "Duis mattis egestas metus. Aenean fermentum.",
    Email: "acorsenu@omniture.com",
  },
  {
    color: "#37bf7c",
    avatar: "https://robohash.org/quisidin.png?size=50x50&set=set1",
    name: "Gerrilee Vinton",
    university: "Central University of Technology, Free State",
    sentences:
      "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.",
    Email: "gvintonnv@disqus.com",
  },
  {
    color: "#9e3794",
    avatar:
      "https://robohash.org/molestiaeautemaccusamus.png?size=50x50&set=set1",
    name: "Helaine Cordaroy",
    university: "Université de Bamenda",
    sentences:
      "Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit.",
    Email: "hcordaroynw@ustream.tv",
  },
  {
    color: "#1cd797",
    avatar: "https://robohash.org/quidemautemut.png?size=50x50&set=set1",
    name: "Sheilah Hume",
    university: "Prairie View Agricultural and Mechanical University",
    sentences: "Nunc nisl.",
    Email: "shumenx@google.pl",
  },
  {
    color: "#01c3f3",
    avatar: "https://robohash.org/ducimusomnisvoluptas.png?size=50x50&set=set1",
    name: "Merrie Fernao",
    university: "Taylor's University College",
    sentences:
      "Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.",
    Email: "mfernaony@nasa.gov",
  },
  {
    color: "#a14ac7",
    avatar: "https://robohash.org/veliteosea.png?size=50x50&set=set1",
    name: "Broderic Sherel",
    university: "Moulana Azad national Urdu University",
    sentences:
      "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
    Email: "bsherelnz@about.me",
  },
  {
    color: "#43e7a6",
    avatar: "https://robohash.org/corporisidvel.png?size=50x50&set=set1",
    name: "Erica Rideout",
    university: "Technical University of Civil Engineering Bucharest",
    sentences:
      "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
    Email: "erideouto0@addtoany.com",
  },
  {
    color: "#4d6a6b",
    avatar: "https://robohash.org/quiarepudiandaea.png?size=50x50&set=set1",
    name: "Estrella Wescott",
    university: "Carl von Ossietzky Universität Oldenburg",
    sentences:
      "In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
    Email: "ewescotto1@ft.com",
  },
  {
    color: "#6f9b7b",
    avatar:
      "https://robohash.org/accusantiumsuscipitlaboriosam.png?size=50x50&set=set1",
    name: "Rafe Kidstoun",
    university: "Albany College of Pharmacy",
    sentences:
      "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
    Email: "rkidstouno2@nature.com",
  },
  {
    color: "#c9c7a3",
    avatar:
      "https://robohash.org/quitemporibusquibusdam.png?size=50x50&set=set1",
    name: "Elroy Nunns",
    university: "Elon College",
    sentences:
      "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
    Email: "enunnso3@behance.net",
  },
  {
    color: "#1195cb",
    avatar: "https://robohash.org/consecteturaliasqui.png?size=50x50&set=set1",
    name: "Gayler Meert",
    university: "Southwest University of Science and Technology",
    sentences:
      "In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.",
    Email: "gmeerto4@prlog.org",
  },
  {
    color: "#e96c33",
    avatar: "https://robohash.org/ducimussedeos.png?size=50x50&set=set1",
    name: "Ashton Gladyer",
    university: "Imperial College London",
    sentences:
      "Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.",
    Email: "agladyero5@ocn.ne.jp",
  },
  {
    color: "#c02c2e",
    avatar: "https://robohash.org/quaetemporeomnis.png?size=50x50&set=set1",
    name: "Terrence Dealy",
    university: "Information and Communications Technology Academy",
    sentences:
      "Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.",
    Email: "tdealyo6@ebay.com",
  },
  {
    color: "#983684",
    avatar: "https://robohash.org/iureetquibusdam.png?size=50x50&set=set1",
    name: "Maximilian Domnick",
    university: "Universidad Andina Simón Bolívar",
    sentences:
      "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum.",
    Email: "mdomnicko7@mashable.com",
  },
  {
    color: "#805549",
    avatar: "https://robohash.org/laboriosamnatusest.png?size=50x50&set=set1",
    name: "Court Prior",
    university: "Martin Luther College",
    sentences: "Mauris ullamcorper purus sit amet nulla.",
    Email: "cprioro8@yellowbook.com",
  },
  {
    color: "#feaa40",
    avatar: "https://robohash.org/teneturfugiatdolorum.png?size=50x50&set=set1",
    name: "Walker Hardistry",
    university: "Uzhgorod National University",
    sentences:
      "Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
    Email: "whardistryo9@i2i.jp",
  },
  {
    color: "#ed39c3",
    avatar: "https://robohash.org/corporistotamquis.png?size=50x50&set=set1",
    name: "Kai Coatham",
    university: "Netaji Subhas Inst of Technology",
    sentences: "Etiam vel augue.",
    Email: "kcoathamoa@bigcartel.com",
  },
  {
    color: "#5c95d6",
    avatar: "https://robohash.org/sedquiaeum.png?size=50x50&set=set1",
    name: "Emanuele Choffin",
    university: "Mankato State University",
    sentences:
      "Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem.",
    Email: "echoffinob@bloglovin.com",
  },
  {
    color: "#6fc5b9",
    avatar: "https://robohash.org/sapientenequesit.png?size=50x50&set=set1",
    name: "Nicky Juschka",
    university: "Webb Institute",
    sentences:
      "Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis.",
    Email: "njuschkaoc@webmd.com",
  },
  {
    color: "#6f0eea",
    avatar: "https://robohash.org/istemolestiaevelit.png?size=50x50&set=set1",
    name: "Katharyn Surgenor",
    university: "Hawaii Pacific University",
    sentences: "Donec posuere metus vitae ipsum. Aliquam non mauris.",
    Email: "ksurgenorod@webmd.com",
  },
  {
    color: "#c81f26",
    avatar: "https://robohash.org/autemfugiataliquam.png?size=50x50&set=set1",
    name: "Graehme Amiable",
    university: "Cheyney University of Pennsylvania",
    sentences:
      "Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.",
    Email: "gamiableoe@bbb.org",
  },
  {
    color: "#06bd22",
    avatar: "https://robohash.org/omnisoditad.png?size=50x50&set=set1",
    name: "Norma Crunkhorn",
    university: "Ho Chi Minh City University of Law",
    sentences:
      "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
    Email: "ncrunkhornof@goo.gl",
  },
  {
    color: "#8702d1",
    avatar: "https://robohash.org/consequaturquosquasi.png?size=50x50&set=set1",
    name: "Kalvin Millington",
    university: "Vladivostock State University of Economics",
    sentences:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.",
    Email: "kmillingtonog@privacy.gov.au",
  },
  {
    color: "#187c84",
    avatar: "https://robohash.org/autdeseruntqui.png?size=50x50&set=set1",
    name: "Hyatt Lindsey",
    university: 'National Academy for Theatre and Film Arts "Krustju Sarafov"',
    sentences:
      "Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    Email: "hlindseyoh@businesswire.com",
  },
  {
    color: "#eae470",
    avatar: "https://robohash.org/quiareiciendislabore.png?size=50x50&set=set1",
    name: "Aida Aldrich",
    university: "Universidad Nueva San Salvador",
    sentences:
      "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.",
    Email: "aaldrichoi@ibm.com",
  },
  {
    color: "#672a6d",
    avatar: "https://robohash.org/utipsumveniam.png?size=50x50&set=set1",
    name: "Heidi Roder",
    university: "United Nations University",
    sentences:
      "Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
    Email: "hroderoj@nature.com",
  },
  {
    color: "#4d4ff6",
    avatar: "https://robohash.org/eaveroquae.png?size=50x50&set=set1",
    name: "Agustin Gildersleeve",
    university: "Maseno University",
    sentences:
      "Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.",
    Email: "agildersleeveok@un.org",
  },
  {
    color: "#3088e3",
    avatar: "https://robohash.org/oditcorporisipsum.png?size=50x50&set=set1",
    name: "Scarface Dummett",
    university: "Iasar University",
    sentences:
      "In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl.",
    Email: "sdummettol@technorati.com",
  },
  {
    color: "#aacdd7",
    avatar: "https://robohash.org/estipsumvoluptatem.png?size=50x50&set=set1",
    name: "Pammie Haspineall",
    university: "Zanjan Institute for Advanced Studies in Basic Sciences",
    sentences: "Pellentesque at nulla. Suspendisse potenti.",
    Email: "phaspineallom@goo.gl",
  },
  {
    color: "#59ec23",
    avatar: "https://robohash.org/inofficiisnostrum.png?size=50x50&set=set1",
    name: "Dana Hucknall",
    university: "Université d'Avignon",
    sentences: "Pellentesque at nulla. Suspendisse potenti.",
    Email: "dhucknallon@i2i.jp",
  },
  {
    color: "#315239",
    avatar: "https://robohash.org/enimetvoluptas.png?size=50x50&set=set1",
    name: "Spence Pipping",
    university: "Technological University (Pathein)",
    sentences:
      "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
    Email: "spippingoo@1und1.de",
  },
  {
    color: "#293a56",
    avatar:
      "https://robohash.org/culpanostrumdoloremque.png?size=50x50&set=set1",
    name: "Kaleena Linnett",
    university: "Southwest Missouri State University",
    sentences:
      "Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
    Email: "klinnettop@ameblo.jp",
  },
  {
    color: "#82a890",
    avatar: "https://robohash.org/perferendiseosrerum.png?size=50x50&set=set1",
    name: "Ysabel Lampert",
    university: "University of Osijek",
    sentences:
      "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
    Email: "ylampertoq@pagesperso-orange.fr",
  },
  {
    color: "#390ee6",
    avatar: "https://robohash.org/undeminimadicta.png?size=50x50&set=set1",
    name: "Emilee Bartozzi",
    university: "Martin Luther College",
    sentences:
      "Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet.",
    Email: "ebartozzior@reverbnation.com",
  },
  {
    color: "#259f30",
    avatar: "https://robohash.org/eteaqueomnis.png?size=50x50&set=set1",
    name: "Kleon Chatainier",
    university: "Shanghai Medical University",
    sentences:
      "Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius.",
    Email: "kchatainieros@admin.ch",
  },
  {
    color: "#fdb6bb",
    avatar: "https://robohash.org/veroetvoluptas.png?size=50x50&set=set1",
    name: "Tobin Gauchier",
    university: "Institute of Technology and Management",
    sentences:
      "Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum.",
    Email: "tgauchierot@about.com",
  },
  {
    color: "#5a1dff",
    avatar: "https://robohash.org/eaquedoloremautem.png?size=50x50&set=set1",
    name: "Cristina Eadmead",
    university: "Portland State University",
    sentences:
      "Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum.",
    Email: "ceadmeadou@hatena.ne.jp",
  },
  {
    color: "#79cc7f",
    avatar:
      "https://robohash.org/autemrepudiandaeprovident.png?size=50x50&set=set1",
    name: "Fraser D'Enrico",
    university: "Yonok University",
    sentences:
      "Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet.",
    Email: "fdenricoov@cmu.edu",
  },
  {
    color: "#5c2080",
    avatar: "https://robohash.org/suntconsequaturet.png?size=50x50&set=set1",
    name: "Clare Rentz",
    university: "Universidad Finis Terrae",
    sentences:
      "Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
    Email: "crentzow@trellian.com",
  },
  {
    color: "#ef56e3",
    avatar: "https://robohash.org/assumendasuntdolores.png?size=50x50&set=set1",
    name: "Herve Stedall",
    university: "Universidad Nacional Daniel Alcides Carrion",
    sentences:
      "Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
    Email: "hstedallox@geocities.com",
  },
  {
    color: "#965cc6",
    avatar:
      "https://robohash.org/voluptatesfacereculpa.png?size=50x50&set=set1",
    name: "Stephie Schooling",
    university: "Sadra University",
    sentences:
      "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
    Email: "sschoolingoy@unicef.org",
  },
  {
    color: "#d6583e",
    avatar: "https://robohash.org/quodvoluptatemveniam.png?size=50x50&set=set1",
    name: "Ezechiel Nell",
    university: "Birkbeck College, University of London",
    sentences:
      "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.",
    Email: "enelloz@ox.ac.uk",
  },
  {
    color: "#72e984",
    avatar: "https://robohash.org/consecteturethic.png?size=50x50&set=set1",
    name: "Lock Seater",
    university: "Universidad Nacional de Colombia",
    sentences:
      "In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.",
    Email: "lseaterp0@independent.co.uk",
  },
  {
    color: "#47c199",
    avatar: "https://robohash.org/minusesteos.png?size=50x50&set=set1",
    name: "Gypsy Poynzer",
    university: "University of Nizwa",
    sentences:
      "Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
    Email: "gpoynzerp1@storify.com",
  },
  {
    color: "#5ba73f",
    avatar: "https://robohash.org/eumvoluptatemsit.png?size=50x50&set=set1",
    name: "Dan Beekmann",
    university: "Hunan Normal University",
    sentences:
      "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.",
    Email: "dbeekmannp2@whitehouse.gov",
  },
  {
    color: "#5c073e",
    avatar: "https://robohash.org/utaliasexpedita.png?size=50x50&set=set1",
    name: "Bambi Bullock",
    university:
      "Institut National de la Recherche Scientifique, Université du Québec",
    sentences:
      "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
    Email: "bbullockp3@shareasale.com",
  },
  {
    color: "#691e54",
    avatar: "https://robohash.org/utperspiciatissit.png?size=50x50&set=set1",
    name: "Conchita Hugnot",
    university: "Bharath Institue Of Higher Education & Research",
    sentences:
      "Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.",
    Email: "chugnotp4@cnn.com",
  },
  {
    color: "#fbc4df",
    avatar: "https://robohash.org/quasialiquamnihil.png?size=50x50&set=set1",
    name: "Pippa Haughey",
    university: "Jiangsu University of Science and Technology",
    sentences: "In sagittis dui vel nisl. Duis ac nibh.",
    Email: "phaugheyp5@paypal.com",
  },
  {
    color: "#4e500e",
    avatar: "https://robohash.org/suscipiteteum.png?size=50x50&set=set1",
    name: "Gustav Claire",
    university: "Mount Holyoke College",
    sentences:
      "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.",
    Email: "gclairep6@fc2.com",
  },
  {
    color: "#3b3646",
    avatar: "https://robohash.org/doloresitmolestias.png?size=50x50&set=set1",
    name: "Mureil Lelievre",
    university: "Chang Jung University",
    sentences:
      "Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam. Nam tristique tortor eu pede.",
    Email: "mlelievrep7@plala.or.jp",
  },
  {
    color: "#58de15",
    avatar: "https://robohash.org/etevenietea.png?size=50x50&set=set1",
    name: "Washington Temperley",
    university: "Universität für angewandte Kunst Wien",
    sentences:
      "Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
    Email: "wtemperleyp8@tiny.cc",
  },
  {
    color: "#74c2e3",
    avatar: "https://robohash.org/utconsequaturerror.png?size=50x50&set=set1",
    name: "Cindee Archibold",
    university: "Nebraska Methodist College of Nursing and Allied Health",
    sentences:
      "Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
    Email: "carchiboldp9@timesonline.co.uk",
  },
  {
    color: "#a819e0",
    avatar:
      "https://robohash.org/corporisperferendisest.png?size=50x50&set=set1",
    name: "Saunders Malletratt",
    university: "University of Notre Dame",
    sentences:
      "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
    Email: "smalletrattpa@ning.com",
  },
  {
    color: "#0ed4e0",
    avatar: "https://robohash.org/estmollitiacommodi.png?size=50x50&set=set1",
    name: "Arabella Kasper",
    university: "Université Épiscopale d'Haiti",
    sentences: "Pellentesque ultrices mattis odio.",
    Email: "akasperpb@jalbum.net",
  },
  {
    color: "#e252b3",
    avatar:
      "https://robohash.org/rerumquisquamsimilique.png?size=50x50&set=set1",
    name: "Tobin Hartridge",
    university: "Universidad Nacional de la Patagonia Austral",
    sentences:
      "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem.",
    Email: "thartridgepc@shop-pro.jp",
  },
  {
    color: "#907716",
    avatar: "https://robohash.org/consequunturidet.png?size=50x50&set=set1",
    name: "Clyde Grastye",
    university: "Mohammad Ali Jinnah University",
    sentences:
      "Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.",
    Email: "cgrastyepd@psu.edu",
  },
  {
    color: "#2a4dda",
    avatar: "https://robohash.org/etconsequatursequi.png?size=50x50&set=set1",
    name: "Gualterio Rraundl",
    university: "Universidade Tecnica de Angola",
    sentences: "Ut at dolor quis odio consequat varius. Integer ac leo.",
    Email: "grraundlpe@howstuffworks.com",
  },
  {
    color: "#5e88d9",
    avatar: "https://robohash.org/utcommodiconsequatur.png?size=50x50&set=set1",
    name: "Iormina Ferrarese",
    university: "University of Insurance and Banking in Warsaw",
    sentences: "In quis justo. Maecenas rhoncus aliquam lacus.",
    Email: "iferraresepf@huffingtonpost.com",
  },
  {
    color: "#a5de92",
    avatar: "https://robohash.org/quasidolorecum.png?size=50x50&set=set1",
    name: "Jana Benbough",
    university: "Columbia College of Missouri",
    sentences:
      "Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.",
    Email: "jbenboughpg@fda.gov",
  },
  {
    color: "#24e3a3",
    avatar: "https://robohash.org/itaqueetblanditiis.png?size=50x50&set=set1",
    name: "Franni Kemmis",
    university: "Hebei Agricultural University",
    sentences:
      "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius.",
    Email: "fkemmisph@com.com",
  },
  {
    color: "#f7c92d",
    avatar: "https://robohash.org/nihilaperiampariatur.png?size=50x50&set=set1",
    name: "Margie Cruddace",
    university: "Radboud University of Nijmegen",
    sentences:
      "Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum.",
    Email: "mcruddacepi@cargocollective.com",
  },
  {
    color: "#164c42",
    avatar: "https://robohash.org/numquamaliquidet.png?size=50x50&set=set1",
    name: "Janot Ditty",
    university: "Universidade Salgado de Oliveira",
    sentences:
      "Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.",
    Email: "jdittypj@istockphoto.com",
  },
  {
    color: "#5ddd2f",
    avatar: "https://robohash.org/oditeummagnam.png?size=50x50&set=set1",
    name: "Archer Nolder",
    university: "Université de Technologie de Belfort Montbéliard",
    sentences:
      "Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
    Email: "anolderpk@ibm.com",
  },
  {
    color: "#eb4145",
    avatar:
      "https://robohash.org/dolorprovidentaccusantium.png?size=50x50&set=set1",
    name: "Wilma Neames",
    university: "Guangdong Peizheng College ",
    sentences:
      "Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.",
    Email: "wneamespl@theatlantic.com",
  },
  {
    color: "#d491b2",
    avatar: "https://robohash.org/voluptascumlibero.png?size=50x50&set=set1",
    name: "Karlen Plesing",
    university: "Cambodia University of Specialties",
    sentences:
      "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    Email: "kplesingpm@netscape.com",
  },
  {
    color: "#6f9e6c",
    avatar: "https://robohash.org/consequaturestut.png?size=50x50&set=set1",
    name: "Carlie Blackway",
    university: "Hochschule Bremen",
    sentences:
      "Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo.",
    Email: "cblackwaypn@youtu.be",
  },
  {
    color: "#298f9a",
    avatar: "https://robohash.org/quiaquodvoluptatem.png?size=50x50&set=set1",
    name: "Alida Greeves",
    university: "Jai Prakash University",
    sentences:
      "Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
    Email: "agreevespo@oracle.com",
  },
  {
    color: "#d2b872",
    avatar: "https://robohash.org/atquesolutadolorem.png?size=50x50&set=set1",
    name: "Ruthann Rosgen",
    university: "Universidad de Bologna - Representación en Buenos Aires",
    sentences: "Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
    Email: "rrosgenpp@upenn.edu",
  },
  {
    color: "#c8746e",
    avatar: "https://robohash.org/cumvoluptatenam.png?size=50x50&set=set1",
    name: "Shanan McAuley",
    university: "Sri Ramachardra Medical College and Research Institute",
    sentences:
      "Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.",
    Email: "smcauleypq@etsy.com",
  },
  {
    color: "#a2a428",
    avatar: "https://robohash.org/etpariaturet.png?size=50x50&set=set1",
    name: "Izak Pedder",
    university: "Semera University",
    sentences:
      "Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh.",
    Email: "ipedderpr@example.com",
  },
  {
    color: "#b86432",
    avatar: "https://robohash.org/nullalaborumut.png?size=50x50&set=set1",
    name: "Ambrosio Bailes",
    university: "Mahanakorn University of Technology",
    sentences:
      "In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.",
    Email: "abailesps@freewebs.com",
  },
  {
    color: "#448fd0",
    avatar:
      "https://robohash.org/molestiaeeavoluptates.png?size=50x50&set=set1",
    name: "Annora Konmann",
    university: "Tennessee State University",
    sentences:
      "Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.",
    Email: "akonmannpt@yelp.com",
  },
  {
    color: "#233dc6",
    avatar: "https://robohash.org/minimarerumvoluptas.png?size=50x50&set=set1",
    name: "Koo De Angelo",
    university: "Ohio State University",
    sentences:
      "In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.",
    Email: "kdepu@stumbleupon.com",
  },
  {
    color: "#11a5b4",
    avatar: "https://robohash.org/idnumquamoccaecati.png?size=50x50&set=set1",
    name: "Beverie Moynihan",
    university: "Moscow State Technical University of Civil Aviation",
    sentences:
      "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.",
    Email: "bmoynihanpv@alexa.com",
  },
  {
    color: "#7a17af",
    avatar: "https://robohash.org/utnobiseius.png?size=50x50&set=set1",
    name: "Lyn Oblein",
    university: "Universidad Nacional",
    sentences:
      "Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.",
    Email: "lobleinpw@kickstarter.com",
  },
  {
    color: "#1e91b9",
    avatar: "https://robohash.org/sitenimalias.png?size=50x50&set=set1",
    name: "Mikel Belasco",
    university: "Cyryx College",
    sentences:
      "Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
    Email: "mbelascopx@nifty.com",
  },
  {
    color: "#9c97a4",
    avatar: "https://robohash.org/rerumquirerum.png?size=50x50&set=set1",
    name: "Stephenie Checcuzzi",
    university: "Vanguard University of Southern California",
    sentences:
      "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet.",
    Email: "scheccuzzipy@omniture.com",
  },
  {
    color: "#7f44e5",
    avatar: "https://robohash.org/ipsanihilrecusandae.png?size=50x50&set=set1",
    name: "Mahalia Scollard",
    university: "Bundelkhand University",
    sentences: "Duis ac nibh.",
    Email: "mscollardpz@livejournal.com",
  },
  {
    color: "#c9efc5",
    avatar:
      "https://robohash.org/doloremquasiprovident.png?size=50x50&set=set1",
    name: "Reagan Daunay",
    university: "Universidad Nacional",
    sentences:
      "Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue.",
    Email: "rdaunayq0@blinklist.com",
  },
  {
    color: "#e3e612",
    avatar: "https://robohash.org/totamrecusandaenon.png?size=50x50&set=set1",
    name: "Huntington Jeannenet",
    university: "Sakushin Gakuin University",
    sentences:
      "Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.",
    Email: "hjeannenetq1@hao123.com",
  },
  {
    color: "#c3bdd7",
    avatar: "https://robohash.org/ametnisiest.png?size=50x50&set=set1",
    name: "Dorree Zammett",
    university: "Université de Corse Pascal Paoli",
    sentences:
      "Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
    Email: "dzammettq2@a8.net",
  },
  {
    color: "#c690c3",
    avatar:
      "https://robohash.org/velitdoloremvoluptatibus.png?size=50x50&set=set1",
    name: "Brand Kingsmill",
    university: "Meru University of Science and Technology",
    sentences:
      "In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum.",
    Email: "bkingsmillq3@examiner.com",
  },
  {
    color: "#9d2e36",
    avatar: "https://robohash.org/solutaatquefacilis.png?size=50x50&set=set1",
    name: "Bird Searchwell",
    university: "Massachusetts Maritime Academy",
    sentences:
      "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus.",
    Email: "bsearchwellq4@desdev.cn",
  },
  {
    color: "#994614",
    avatar: "https://robohash.org/eaqueaccusantiumquos.png?size=50x50&set=set1",
    name: "Alta Bedbrough",
    university: "Schreiner College",
    sentences:
      "Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.",
    Email: "abedbroughq5@newsvine.com",
  },
  {
    color: "#d6692f",
    avatar:
      "https://robohash.org/quaeratducimusdolores.png?size=50x50&set=set1",
    name: "Dyanna Conville",
    university: "Kochi Medical School",
    sentences:
      "Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum.",
    Email: "dconvilleq6@hexun.com",
  },
  {
    color: "#66fdb9",
    avatar:
      "https://robohash.org/perspiciatisdoloremnecessitatibus.png?size=50x50&set=set1",
    name: "Percy Burd",
    university: "University of Illinois at Chicago",
    sentences:
      "Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    Email: "pburdq7@squarespace.com",
  },
  {
    color: "#c47593",
    avatar: "https://robohash.org/quosimpeditquam.png?size=50x50&set=set1",
    name: "Jobina Patershall",
    university: "Politeknik Negeri Padang",
    sentences:
      "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.",
    Email: "jpatershallq8@cornell.edu",
  },
  {
    color: "#d310f1",
    avatar: "https://robohash.org/quiaeosomnis.png?size=50x50&set=set1",
    name: "Anna-diane Tinman",
    university: "Anambra State University of Science and Technology",
    sentences:
      "Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    Email: "atinmanq9@guardian.co.uk",
  },
  {
    color: "#768cfa",
    avatar: "https://robohash.org/etfugiatsimilique.png?size=50x50&set=set1",
    name: "Myrwyn Kennea",
    university: "Katholisch-Theologische Privatuniversität Linz",
    sentences:
      "Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
    Email: "mkenneaqa@jalbum.net",
  },
  {
    color: "#f1fed8",
    avatar: "https://robohash.org/fugitoptiocupiditate.png?size=50x50&set=set1",
    name: "Gilburt Trask",
    university: "North Carolina Wesleyan College",
    sentences:
      "Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
    Email: "gtraskqb@squarespace.com",
  },
  {
    color: "#1d6a23",
    avatar: "https://robohash.org/utetincidunt.png?size=50x50&set=set1",
    name: "Nara Vesque",
    university: "Yelets State University",
    sentences:
      "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
    Email: "nvesqueqc@cargocollective.com",
  },
  {
    color: "#160711",
    avatar: "https://robohash.org/illumcumvoluptas.png?size=50x50&set=set1",
    name: "Shawna Rapport",
    university: "Baiko Women's College",
    sentences: "Nulla suscipit ligula in lacus.",
    Email: "srapportqd@cbslocal.com",
  },
  {
    color: "#0bf3af",
    avatar:
      "https://robohash.org/sapientequaeratassumenda.png?size=50x50&set=set1",
    name: "Remus Varns",
    university: "Central South Forestry University",
    sentences:
      "Proin leo odio, porttitor id, consequat in, consequat ut, nulla.",
    Email: "rvarnsqe@de.vu",
  },
  {
    color: "#3874c4",
    avatar: "https://robohash.org/nonexplicaboquia.png?size=50x50&set=set1",
    name: "Edd Leeuwerink",
    university: "University of Sindh",
    sentences: "Integer a nibh. In quis justo.",
    Email: "eleeuwerinkqf@discovery.com",
  },
  {
    color: "#2e42e7",
    avatar: "https://robohash.org/omnisdoloritaque.png?size=50x50&set=set1",
    name: "Goldi Pellant",
    university: "Ajman University of Science & Technology",
    sentences:
      "Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
    Email: "gpellantqg@japanpost.jp",
  },
  {
    color: "#65e69b",
    avatar: "https://robohash.org/isteplaceateligendi.png?size=50x50&set=set1",
    name: "Alfie Buckthorpe",
    university: "Webber College",
    sentences: "Donec ut dolor.",
    Email: "abuckthorpeqh@ebay.com",
  },
  {
    color: "#5ac28a",
    avatar: "https://robohash.org/blanditiisofficiaet.png?size=50x50&set=set1",
    name: "Norry Bosher",
    university: "National Institute of Technology, Durgapur",
    sentences:
      "Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
    Email: "nbosherqi@hud.gov",
  },
  {
    color: "#cfb48a",
    avatar: "https://robohash.org/optioconsecteturvel.png?size=50x50&set=set1",
    name: "Norene Walbrook",
    university: "Université d'Oran Es-Senia",
    sentences:
      "Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
    Email: "nwalbrookqj@paginegialle.it",
  },
  {
    color: "#5e84f0",
    avatar: "https://robohash.org/consequaturtotamillo.png?size=50x50&set=set1",
    name: "Dexter Verecker",
    university: "University of Divinity",
    sentences:
      "Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.",
    Email: "dvereckerqk@devhub.com",
  },
  {
    color: "#d8f0aa",
    avatar: "https://robohash.org/laboriosamhicet.png?size=50x50&set=set1",
    name: "Richardo Hogsden",
    university: 'Univerzitet u Mostaru "Dzemal Bijedic"',
    sentences:
      "Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante.",
    Email: "rhogsdenql@exblog.jp",
  },
  {
    color: "#5656c5",
    avatar: "https://robohash.org/quisimiliquenisi.png?size=50x50&set=set1",
    name: "Rebe Corbyn",
    university: "University of South Africa",
    sentences: "Mauris sit amet eros.",
    Email: "rcorbynqm@disqus.com",
  },
  {
    color: "#8ab38f",
    avatar:
      "https://robohash.org/repudiandaemolestiaeomnis.png?size=50x50&set=set1",
    name: "Rosco MacGillicuddy",
    university: "Ahmedabad University",
    sentences: "Integer ac neque. Duis bibendum.",
    Email: "rmacgillicuddyqn@europa.eu",
  },
  {
    color: "#4f4ffc",
    avatar:
      "https://robohash.org/voluptasconsequaturdignissimos.png?size=50x50&set=set1",
    name: "Marwin Delacote",
    university: "University of Aden",
    sentences:
      "Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.",
    Email: "mdelacoteqo@usatoday.com",
  },
  {
    color: "#3e19cf",
    avatar: "https://robohash.org/voluptasfugaautem.png?size=50x50&set=set1",
    name: "Lorelei Caspell",
    university: "Samar State University",
    sentences:
      "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
    Email: "lcaspellqp@reverbnation.com",
  },
  {
    color: "#ba7ee0",
    avatar: "https://robohash.org/adsedab.png?size=50x50&set=set1",
    name: "Jackelyn Belvard",
    university: "Warner Pacific College",
    sentences:
      "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.",
    Email: "jbelvardqq@bbc.co.uk",
  },
  {
    color: "#557618",
    avatar: "https://robohash.org/saepesolutaquia.png?size=50x50&set=set1",
    name: "Jed Synke",
    university: "Drew University",
    sentences:
      "Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
    Email: "jsynkeqr@marriott.com",
  },
  {
    color: "#de5d0a",
    avatar:
      "https://robohash.org/reprehenderitcorruptiipsum.png?size=50x50&set=set1",
    name: "Susana Gorse",
    university: "Wilbur Wright College",
    sentences: "Nunc rhoncus dui vel sem.",
    Email: "sgorseqs@feedburner.com",
  },
  {
    color: "#cfa879",
    avatar: "https://robohash.org/quivitaeblanditiis.png?size=50x50&set=set1",
    name: "Fidela Ropkes",
    university: "Universidad de San Buenaventura",
    sentences:
      "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim.",
    Email: "fropkesqt@adobe.com",
  },
  {
    color: "#2b945e",
    avatar: "https://robohash.org/quisearumquam.png?size=50x50&set=set1",
    name: "Faustina Mangin",
    university: "Norfolk State University",
    sentences: "Quisque ut erat. Curabitur gravida nisi at nibh.",
    Email: "fmanginqu@macromedia.com",
  },
  {
    color: "#55d319",
    avatar: "https://robohash.org/ipsalaboreesse.png?size=50x50&set=set1",
    name: "Blondie Jayume",
    university: "Nanjing Forestry University",
    sentences:
      "Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum.",
    Email: "bjayumeqv@multiply.com",
  },
  {
    color: "#3a80df",
    avatar: "https://robohash.org/sequiiureconsequatur.png?size=50x50&set=set1",
    name: "Berty Rolley",
    university: "Dhaka University of Engineering and Technology",
    sentences:
      "In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum.",
    Email: "brolleyqw@cnbc.com",
  },
  {
    color: "#ff342c",
    avatar: "https://robohash.org/autnonmaiores.png?size=50x50&set=set1",
    name: "Shurlocke Pfaff",
    university: "St. Petersburg State Polytechnical University",
    sentences:
      "In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.",
    Email: "spfaffqx@fotki.com",
  },
  {
    color: "#4110a2",
    avatar:
      "https://robohash.org/architectosuscipitenim.png?size=50x50&set=set1",
    name: "Lynnett Goodrum",
    university: "Fondazione Sacro Cuore",
    sentences:
      "Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.",
    Email: "lgoodrumqy@tiny.cc",
  },
  {
    color: "#b9fd8e",
    avatar:
      "https://robohash.org/aspernaturcorruptiminus.png?size=50x50&set=set1",
    name: "Peyton Renish",
    university: "Tehran University of Medical Sciences",
    sentences: "Vivamus vel nulla eget eros elementum pellentesque.",
    Email: "prenishqz@wufoo.com",
  },
  {
    color: "#b39c45",
    avatar:
      "https://robohash.org/eligendiesselaboriosam.png?size=50x50&set=set1",
    name: "Akim McCahill",
    university: "Universitas Palangka Raya",
    sentences:
      "Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh.",
    Email: "amccahillr0@slideshare.net",
  },
  {
    color: "#869892",
    avatar: "https://robohash.org/isteetsequi.png?size=50x50&set=set1",
    name: "Harmony Gatman",
    university: "Universidad de La Laguna",
    sentences:
      "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.",
    Email: "hgatmanr1@aboutads.info",
  },
  {
    color: "#20eff8",
    avatar: "https://robohash.org/officiisetquia.png?size=50x50&set=set1",
    name: "Dita Featherstonhaugh",
    university: "Universidad Tecnológica del Peru",
    sentences:
      "Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
    Email: "dfeatherstonhaughr2@goo.gl",
  },
  {
    color: "#142b67",
    avatar: "https://robohash.org/beataeestdolore.png?size=50x50&set=set1",
    name: "Ad Lett",
    university: 'Universidad Nacional Experimental "Simón Rodriguez"',
    sentences:
      "Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.",
    Email: "alettr3@columbia.edu",
  },
  {
    color: "#35e289",
    avatar:
      "https://robohash.org/consequatureumdeserunt.png?size=50x50&set=set1",
    name: "Oralia Riach",
    university: "Leon Kozminski Academy of Entrepreneurship and Mangement",
    sentences:
      "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
    Email: "oriachr4@odnoklassniki.ru",
  },
  {
    color: "#45d0e0",
    avatar: "https://robohash.org/doloremquidemmagnam.png?size=50x50&set=set1",
    name: "Christophe Fitzroy",
    university: "Ecole Supérieure de Commerce de Paris",
    sentences:
      "Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.",
    Email: "cfitzroyr5@sina.com.cn",
  },
  {
    color: "#d01c04",
    avatar:
      "https://robohash.org/experferendisoccaecati.png?size=50x50&set=set1",
    name: "Hester Chinnock",
    university: "Hongik University",
    sentences:
      "Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.",
    Email: "hchinnockr6@ask.com",
  },
  {
    color: "#75b2d8",
    avatar: "https://robohash.org/doloreadeum.png?size=50x50&set=set1",
    name: "Matt Glasscoe",
    university: "Tibet University of Nationalities",
    sentences:
      "Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
    Email: "mglasscoer7@google.nl",
  },
  {
    color: "#7945e3",
    avatar: "https://robohash.org/laboriosametea.png?size=50x50&set=set1",
    name: "Alfons Delos",
    university: "Mongolian State University of Agriculture",
    sentences:
      "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.",
    Email: "adelosr8@drupal.org",
  },
  {
    color: "#1d3c20",
    avatar: "https://robohash.org/officiisnesciuntnam.png?size=50x50&set=set1",
    name: "Luelle Druce",
    university: "Qufu Normal University",
    sentences:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.",
    Email: "ldrucer9@gnu.org",
  },
  {
    color: "#cc40bf",
    avatar: "https://robohash.org/inlaboredelectus.png?size=50x50&set=set1",
    name: "Sharlene Clulow",
    university: "Liaquat University of Medical & Health Sciences Jamshoro",
    sentences:
      "Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
    Email: "sclulowra@indiegogo.com",
  },
  {
    color: "#1a29ae",
    avatar: "https://robohash.org/ipsumquiodit.png?size=50x50&set=set1",
    name: "Merrielle Sweeten",
    university: "Islamic Azad University, Shirvan",
    sentences:
      "Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
    Email: "msweetenrb@php.net",
  },
  {
    color: "#6d91c9",
    avatar: "https://robohash.org/numquamvoluptatumeos.png?size=50x50&set=set1",
    name: "Esma Pendlebury",
    university: "Universidade Estadual do Vale do Acaraú",
    sentences:
      "Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.",
    Email: "ependleburyrc@ibm.com",
  },
  {
    color: "#7074b7",
    avatar: "https://robohash.org/ametautiusto.png?size=50x50&set=set1",
    name: "L;urette Badder",
    university: "Western States Chiropractic College",
    sentences:
      "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
    Email: "lbadderrd@ustream.tv",
  },
  {
    color: "#5db295",
    avatar:
      "https://robohash.org/consequaturiuredolorem.png?size=50x50&set=set1",
    name: "Maury Dalman",
    university: "Varna Free University",
    sentences:
      "Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti.",
    Email: "mdalmanre@360.cn",
  },
  {
    color: "#596e73",
    avatar: "https://robohash.org/undetemporedolore.png?size=50x50&set=set1",
    name: "Lexie Jakoub",
    university: "Bushehr University of Medical Sciences",
    sentences:
      "Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.",
    Email: "ljakoubrf@ebay.co.uk",
  },
  {
    color: "#a8ed38",
    avatar: "https://robohash.org/doloresnamassumenda.png?size=50x50&set=set1",
    name: "Blancha Crowcum",
    university: "Paul University",
    sentences:
      "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
    Email: "bcrowcumrg@weebly.com",
  },
  {
    color: "#a05d4b",
    avatar: "https://robohash.org/sitsaepesit.png?size=50x50&set=set1",
    name: "Rani Jewis",
    university: "Kigali Institute of Science & Technology",
    sentences:
      "Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo.",
    Email: "rjewisrh@dedecms.com",
  },
  {
    color: "#d39bd5",
    avatar: "https://robohash.org/consequunturutquis.png?size=50x50&set=set1",
    name: "Blake Ind",
    university: "Western States Chiropractic College",
    sentences: "Nullam varius. Nulla facilisi.",
    Email: "bindri@bizjournals.com",
  },
  {
    color: "#360ec1",
    avatar:
      "https://robohash.org/reiciendisdelenitimollitia.png?size=50x50&set=set1",
    name: "Tam Ruprecht",
    university: "Limestone College",
    sentences:
      "Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio.",
    Email: "truprechtrj@quantcast.com",
  },
  {
    color: "#207946",
    avatar: "https://robohash.org/ametofficiiseligendi.png?size=50x50&set=set1",
    name: "Evey Diche",
    university: "International School of Business Management",
    sentences:
      "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum.",
    Email: "edicherk@newsvine.com",
  },
  {
    color: "#bb5956",
    avatar: "https://robohash.org/nullanonqui.png?size=50x50&set=set1",
    name: "Aviva Iggalden",
    university: "Hosei University",
    sentences: "Donec ut mauris eget massa tempor convallis.",
    Email: "aiggaldenrl@theguardian.com",
  },
  {
    color: "#09462d",
    avatar: "https://robohash.org/oditnonsequi.png?size=50x50&set=set1",
    name: "Orazio Mapplebeck",
    university: "Islamic University in Uganda",
    sentences:
      "Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
    Email: "omapplebeckrm@webs.com",
  },
  {
    color: "#d7d002",
    avatar: "https://robohash.org/rerumeumet.png?size=50x50&set=set1",
    name: "Stephana Godsil",
    university: "Pontifícia Universidade Católica do Rio de Janeiro",
    sentences:
      "Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
    Email: "sgodsilrn@cbsnews.com",
  },
  {
    color: "#456a15",
    avatar:
      "https://robohash.org/corruptinecessitatibusautem.png?size=50x50&set=set1",
    name: "Dasi Roselli",
    university: "Göteborg University",
    sentences:
      "Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
    Email: "droselliro@bbb.org",
  },
  {
    color: "#34dd10",
    avatar:
      "https://robohash.org/voluptatesdelectuscum.png?size=50x50&set=set1",
    name: "Mara Gildea",
    university: "Thomas College Maine",
    sentences:
      "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.",
    Email: "mgildearp@webs.com",
  },
  {
    color: "#0f9d28",
    avatar: "https://robohash.org/voluptaslaboriosamab.png?size=50x50&set=set1",
    name: "Tailor Dafydd",
    university: "Franklin Pierce College",
    sentences:
      "Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh.",
    Email: "tdafyddrq@xing.com",
  },
  {
    color: "#cbc27e",
    avatar:
      "https://robohash.org/nesciuntreprehenderitconsequatur.png?size=50x50&set=set1",
    name: "Luz Eslinger",
    university: "South Asian University",
    sentences:
      "Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo.",
    Email: "leslingerrr@shutterfly.com",
  },
];
const newSection = document.createElement("section");
newSection.style.width = "100%";
newSection.style.height = "100%";
newSection.style.display = "grid";
newSection.style.gridTemplateColumns = `repeat(4,1fr)`;
newSection.style.backgroundColor = "black";
document.body.appendChild(newSection);

data.forEach((v) => {
  const newArticle = document.createElement("article");
  newArticle.style.width = "400px";
  newArticle.style.height = "600px";
  //   newArticle.style.border = "1px solid red";
  newArticle.style.display = "flex";
  newArticle.style.flexDirection = "column";
  newArticle.style.gap = "20px";
  newArticle.style.justifyContent = "center";
  newArticle.style.alignItems = "center";
  newArticle.style.padding = "50px";
  newArticle.style.backgroundColor = "white";
  newArticle.style.borderRadius = "20px";
  newArticle.style.marginBottom = "50px";
  newSection.appendChild(newArticle);

  const newImg = document.createElement("img");
  newImg.style.border = "1px solid black";
  newImg.style.borderRadius = "100px";
  newImg.style.width = "200px";
  newImg.style.height = "200px";
  newImg.src = v.avatar;
  newArticle.appendChild(newImg);

  const newH1 = document.createElement("h1");
  //   newDiv.style.border = "1px solid red";
  newH1.innerText = v.name;
  newArticle.appendChild(newH1);

  const newSpan = document.createElement("span");
  //   newSpan.style.border = "1px solid red";
  newSpan.innerText = v.sentences;
  newArticle.appendChild(newSpan);

  const newBtn = document.createElement("button");
  newBtn.innerText = v.Email;
  newBtn.style.fontSize = "20px";
  newBtn.style.width = "300px";
  newBtn.style.height = "50px";
  newBtn.style.borderRadius = "10px";
  newBtn.style.backgroundColor = v.color;
  newArticle.appendChild(newBtn);
});
