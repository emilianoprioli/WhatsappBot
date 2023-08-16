const {
  createBot,
  createProvider,
  createFlow,
  addKeyword,
} = require("@bot-whatsapp/bot");

const QRPortalWeb = require("@bot-whatsapp/portal");
const BaileysProvider = require("@bot-whatsapp/provider/baileys");
const MockAdapter = require("@bot-whatsapp/database/mock");

const secundario = addKeyword([]).addAnswer(
  [
    "Por favor ingrese una respuesta válida.",
    "*Muchas gracias, ImágenesMedicina&Salud.*",
  ],
  null,
  (ctx, { flowDynamic, endFlow }) => endFlow()
);

const abdominal = addKeyword(["1", "abdominal", "Abdominal"]).addAnswer(
  [
    "Para una ecografía abdominal se necesitan 8 horas de ayuno.",
    "*Muchas gracias, ImágenesMedicina&Salud.*",
  ],
  null,
  (ctx, { flowDynamic, endFlow }) => endFlow()
);

const ginecológicaTransabdominal = addKeyword([
  "2",
  "ginecológica transabdominal",
  "Ginecológica transabdominal",
]).addAnswer(
  [
    "Para una ecografía ginecológica transabdominal se necesita ingerir medio litro de agua media hora antes del estudio.",
    "*Muchas gracias, ImágenesMedicina&Salud.*",
  ],
  null,
  (ctx, { flowDynamic, endFlow }) => endFlow()
);

const obstetrica = addKeyword(["3", "obstetrica", "Obstetrica"]).addAnswer(
  [
    "Para una ecografía obstétrica de hasta 3 meses de embarazo, se necesita ingerir medio litro de agua media hora antes del estudio. Más de 3 meses de embarazo sin preparación.",
    "*Muchas gracias, ImágenesMedicina&Salud.*",
  ],
  null,
  (ctx, { flowDynamic, endFlow }) => endFlow()
);

const Hepatobiliopancreatica = addKeyword([
  "4",
  "hepatobiliopancreatica",
  "Hepatobiliopancreatica",
]).addAnswer(
  [
    "Para una ecografía hepatobiliopancreatica se necesitan 12 horas de ayuno.",
    "*Muchas gracias, ImágenesMedicina&Salud.*",
  ],
  null,
  (ctx, { flowDynamic, endFlow }) => endFlow()
);

const renal = addKeyword(["5", "renal", "Renal"]).addAnswer(
  [
    "Para una ecografía renal se necesitan 8 horas de ayuno.",
    "*Muchas gracias, ImágenesMedicina&Salud.*",
  ],
  null,
  (ctx, { flowDynamic, endFlow }) => endFlow()
);

const dopplerRenal = addKeyword([, "7", "doppler", "Doppler"]).addAnswer(
  [
    "Para un doppler renal se necesitan 8 horas de ayuno.",
    "*Muchas gracias, ImágenesMedicina&Salud.*",
  ],
  null,
  (ctx, { flowDynamic, endFlow }) => endFlow()
);

const vesicoprostatica = addKeyword([
  "6",
  "Vesicoprostatica",
  "vesicoprostatica",
]).addAnswer(
  [
    "Para una ecografía vesicoprostatica se necesita ingerir medio litro de agua media hora antes del estudio.",
    "*Muchas gracias, ImágenesMedicina&Salud.*",
  ],
  null,
  (ctx, { flowDynamic, endFlow }) => endFlow()
);

const preparaciones = addKeyword(["2"]).addAnswer(
  [
    "Para conocer las preparaciones previas de un estudio escriba el *número del estudio* o su *nombre*. LOS ESTUDIOS NO LISTADOS NO TIENEN PREPARACIÓN PREVIA.",
    "*Muchas gracias, ImágenesMedicina&Salud.*",
    "*1* *Ecografía abdominal*",
    "*2* *Ecografía Ginecológica transabdominal*",
    "*3* *Ecografía Obstétrica*",
    "*4* *Ecografía Hepatobiliopancreatica*",
    "*5* *Renal*",
    "*6* *Ecografía Vesicoprostática*",
    "*7* *Doppler renal*",
  ],
  null,
  null,
  [
    abdominal,
    ginecológicaTransabdominal,
    obstetrica,
    Hepatobiliopancreatica,
    renal,
    vesicoprostatica,
    dopplerRenal,
    secundario,
  ]
);

const turnos = addKeyword(["1"]).addAnswer(
  ["https://msberazateguicomar.site.agendapro.com/ar/sucursal/22354"],
  null,
  (ctx, { flowDynamic, endFlow }) => endFlow()
);

const eco = addKeyword(["1"]).addAnswer(
  [
    "*1* Solicitar turno.",
    "*2* Indicaciones previas.",
    "*Muchas gracias, ImágenesMedicina&Salud.*",
  ],
  null,
  null,
  [turnos, preparaciones, secundario]
);

const turnosRayos = addKeyword(["1"]).addAnswer(
  [
    "Los estudios se realizan sin turno, por orden de llegada los días *Lunes, Miércoles y Viernes de 14hs a 18hs*. Tenga en cuenta que algunos estudios requieren preparación previa.",
    "*Muchas gracias, ImágenesMedicina&Salud.*",
  ],
  null,
  (ctx, { flowDynamic, endFlow }) => endFlow()
);

const preparacionesRayos = addKeyword(["2"]).addAnswer(
  [
    "Los siguientes estudios requieren lo siguiente:",
    "*AYUNO 12HS*",
    "*NO INGERIR LÁCTEOS, VERDURAS DE HOJAS, BEBIDAS GASEOSAS, HARINAS Y NO FUMAR 24HS PREVIAS AL ESTUDIO*",
    "*Muchas gracias, ImágenesMedicina&Salud.*",
  ],
  null,
  (ctx, { flowDynamic, endFlow }) => endFlow()
);

const rayos = addKeyword(["2"]).addAnswer(
  [
    "*1* Solicitar turno.",
    "*2* Indicaciones previas.",
    "*Muchas gracias, ImágenesMedicina&Salud.*",
  ],
  null,
  null,
  [turnosRayos, preparacionesRayos, secundario]
);

const mamo = addKeyword(["3"]).addAnswer(
  [
    "*1* Solicitar turno.",
    "*Recuerde concurrir al turno con estudios mamarios previos. No debe colocarse talco ni desodorante en axilas*.",
    "*Muchas gracias, ImágenesMedicina&Salud.*",
  ],
  null,
  null,
  [turnos, secundario]
);

const consultas = addKeyword(["4"]).addAnswer(
  [
    "Si quiere realizar una consulta no olvidé de hacerla de 10 a 17 hs y le responderemos a la brevedad.",
    "*Se admiten imágenes*",
    "*Muchas gracias, ImágenesMedicina&Salud.*",
  ],
  null,
  (ctx, { flowDynamic, endFlow }) => endFlow()
);

const volver = addKeyword(["0"]).addAnswer(
  [
    "*Bienvenido a ImágenesMedicina&Salud*, por favor, escriba un número indicado.",
    "*1* Ecografía.",
    "*2* Radiología.",
    "*3* Mamografía.",
    "*4* Consultas.",
    "*Muchas gracias, ImágenesMedicina&Salud.*",
  ],
  null,
  null,
  [eco, rayos, mamo, consultas, secundario]
);

const flowPrincipal = addKeyword([]).addAnswer(
  [
    "*Bienvenido a ImágenesMedicina&Salud*, por favor, escriba un número indicado.",
    "*1* Ecografía.",
    "*2* Radiología.",
    "*3* Mamografía.",
    "*4* Consultas.",
    "*0* Inicio.",
    "*Muchas gracias, ImágenesMedicina&Salud.*",
  ],
  null,
  null,
  [eco, rayos, mamo, consultas, volver, secundario]
);

const main = async () => {
  const adapterDB = new MockAdapter();
  const adapterFlow = createFlow([flowPrincipal]);
  const adapterProvider = createProvider(BaileysProvider);

  createBot({
    flow: adapterFlow,
    provider: adapterProvider,
    database: adapterDB,
  });

  QRPortalWeb();
};

main();
