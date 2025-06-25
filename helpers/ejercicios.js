const ejercicios = [
  // Pecho
  { idEjercicio: 1, categoria: "pecho", nombre: "Press de banca plano (barra)" },
  { idEjercicio: 2, categoria: "pecho", nombre: "Press de banca plano (mancuernas)" },
  { idEjercicio: 3, categoria: "pecho", nombre: "Press inclinado (barra)" },
  { idEjercicio: 4, categoria: "pecho", nombre: "Press inclinado (mancuernas)" },
  { idEjercicio: 5, categoria: "pecho", nombre: "Press declinado (barra)" },
  { idEjercicio: 6, categoria: "pecho", nombre: "Press declinado (mancuernas)" },
  { idEjercicio: 7, categoria: "pecho", nombre: "Aperturas con mancuernas (plano)" },
  { idEjercicio: 8, categoria: "pecho", nombre: "Aperturas con mancuernas (inclinado)" },
  { idEjercicio: 9, categoria: "pecho", nombre: "Pec Deck (contractor)" },
  { idEjercicio: 10, categoria: "pecho", nombre: "Fondos en paralelas (para pecho)" },
  { idEjercicio: 11, categoria: "pecho", nombre: "Push-ups (flexiones de pecho)" },
  { idEjercicio: 12, categoria: "pecho", nombre: "Press en máquina Hammer" },
  { idEjercicio: 13, categoria: "pecho", nombre: "Press en máquina convergente" },
  { idEjercicio: 14, categoria: "pecho", nombre: "Crossover en poleas (alto)" },
  { idEjercicio: 15, categoria: "pecho", nombre: "Crossover en poleas (medio)" },
  { idEjercicio: 16, categoria: "pecho", nombre: "Crossover en poleas (bajo)" },

  // Espalda
  { idEjercicio: 17, categoria: "espalda", nombre: "Jalón al pecho (agarre ancho)" },
  { idEjercicio: 18, categoria: "espalda", nombre: "Jalón al pecho (agarre estrecho)" },
  { idEjercicio: 19, categoria: "espalda", nombre: "Jalón al pecho (supino)" },
  { idEjercicio: 20, categoria: "espalda", nombre: "Jalón tras nuca" },
  { idEjercicio: 21, categoria: "espalda", nombre: "Remo con barra (Yates)" },
  { idEjercicio: 22, categoria: "espalda", nombre: "Remo con barra (Pendlay)" },
  { idEjercicio: 23, categoria: "espalda", nombre: "Remo con mancuerna a una mano" },
  { idEjercicio: 24, categoria: "espalda", nombre: "Remo en máquina Hammer" },
  { idEjercicio: 25, categoria: "espalda", nombre: "Remo en polea baja" },
  { idEjercicio: 26, categoria: "espalda", nombre: "Remo con T-bar" },
  { idEjercicio: 27, categoria: "espalda", nombre: "Peso muerto convencional" },
  { idEjercicio: 28, categoria: "espalda", nombre: "Pull-over con mancuerna" },
  { idEjercicio: 29, categoria: "espalda", nombre: "Pull-over en máquina" },
  { idEjercicio: 30, categoria: "espalda", nombre: "Dominadas (supinas)" },
  { idEjercicio: 31, categoria: "espalda", nombre: "Dominadas (pronas)" },
  { idEjercicio: 32, categoria: "espalda", nombre: "Dominadas (neutras)" },

  // Hombros
  { idEjercicio: 33, categoria: "hombros", nombre: "Press militar (barra)" },
  { idEjercicio: 34, categoria: "hombros", nombre: "Press militar (mancuernas)" },
  { idEjercicio: 35, categoria: "hombros", nombre: "Press Arnold" },
  { idEjercicio: 36, categoria: "hombros", nombre: "Elevaciones laterales con mancuernas" },
  { idEjercicio: 118, categoria: "hombros", nombre: "Elevaciones laterales con polea" },
  { idEjercicio: 37, categoria: "hombros", nombre: "Elevaciones frontales con mancuernas" },
  { idEjercicio: 38, categoria: "hombros", nombre: "Elevaciones frontales con disco" },
  { idEjercicio: 39, categoria: "hombros", nombre: "Pájaros con mancuerna" },
  { idEjercicio: 40, categoria: "hombros", nombre: "Face pulls en polea" },
  { idEjercicio: 41, categoria: "hombros", nombre: "Remo al mentón con barra" },
  { idEjercicio: 42, categoria: "hombros", nombre: "Press militar en Smith" },

  // Bíceps
  { idEjercicio: 43, categoria: "biceps", nombre: "Curl con barra recta" },
  { idEjercicio: 44, categoria: "biceps", nombre: "Curl con barra Z" },
  { idEjercicio: 45, categoria: "biceps", nombre: "Curl con mancuernas alternado" },
  { idEjercicio: 46, categoria: "biceps", nombre: "Curl con mancuernas simultáneo" },
  { idEjercicio: 47, categoria: "biceps", nombre: "Curl martillo" },
  { idEjercicio: 119, categoria: "biceps", nombre: "Curl martillo cruzado" },
  { idEjercicio: 48, categoria: "biceps", nombre: "Curl predicador con barra" },
  { idEjercicio: 49, categoria: "biceps", nombre: "Curl predicador con mancuernas" },
  { idEjercicio: 120, categoria: "biceps", nombre: "Curl predicador con polea" },
  { idEjercicio: 50, categoria: "biceps", nombre: "Curl bayesiano en polea baja" },
  { idEjercicio: 51, categoria: "biceps", nombre: "Curl doble en polea alta" },
  { idEjercicio: 52, categoria: "biceps", nombre: "Curl concentrado (Scott)" },
  { idEjercicio: 53, categoria: "biceps", nombre: "Curl en máquina" },

  // Tríceps
  { idEjercicio: 54, categoria: "triceps", nombre: "Extensión en polea alta con cuerda" },
  { idEjercicio: 55, categoria: "triceps", nombre: "Extensión en polea alta con barra recta" },
  { idEjercicio: 56, categoria: "triceps", nombre: "Extensión en polea alta unilatera" },
  { idEjercicio: 57, categoria: "triceps", nombre: "Extensión sobre la cabeza con mancuerna" },
  { idEjercicio: 58, categoria: "triceps", nombre: "Extensión sobre la cabeza con cuerda" },
  { idEjercicio: 59, categoria: "triceps", nombre: "Press francés" },
  { idEjercicio: 60, categoria: "triceps", nombre: "Fondos en banco" },
  { idEjercicio: 61, categoria: "triceps", nombre: "Fondos en paralelas" },
  { idEjercicio: 62, categoria: "triceps", nombre: "Patada de tríceps con mancuerna" },
  { idEjercicio: 63, categoria: "triceps", nombre: "Extensión en máquina" },

  // Antebrazos
  { idEjercicio: 64, categoria: "antebrazos", nombre: "Curl de muñeca supino" },
  { idEjercicio: 65, categoria: "antebrazos", nombre: "Curl de muñeca prono" },
  { idEjercicio: 66, categoria: "antebrazos", nombre: "Curl invertidEjercicioo con barra" },
  { idEjercicio: 67, categoria: "antebrazos", nombre: "Curl invertidEjercicioo con mancuernas" },
  { idEjercicio: 68, categoria: "antebrazos", nombre: "Hand gripper" },
  { idEjercicio: 69, categoria: "antebrazos", nombre: "Wrist roller (con cuerda y peso)" },

  // Cuádriceps
  { idEjercicio: 70, categoria: "cuadriceps", nombre: "Sentadilla tradicional" },
  { idEjercicio: 71, categoria: "cuadriceps", nombre: "Sentadilla frontal" },
  { idEjercicio: 72, categoria: "cuadriceps", nombre: "Sentadilla hack" },
  { idEjercicio: 73, categoria: "cuadriceps", nombre: "Prensa de piernas" },
  { idEjercicio: 74, categoria: "cuadriceps", nombre: "Zancadas con barra" },
  { idEjercicio: 75, categoria: "cuadriceps", nombre: "Zancadas con mancuernas" },
  { idEjercicio: 76, categoria: "cuadriceps", nombre: "Step-ups con banco" },
  { idEjercicio: 77, categoria: "cuadriceps", nombre: "Extensiones de piernas en máquina" },
  { idEjercicio: 78, categoria: "cuadriceps", nombre: "Sentadilla búlgara" },

  // Isquiotibiales
  { idEjercicio: 79, categoria: "isquiotibiales", nombre: "Peso muerto rumano" },
  { idEjercicio: 121, categoria: "isquiotibiales", nombre: "Peso muerto convencional" },
  { idEjercicio: 80, categoria: "isquiotibiales", nombre: "Peso muerto con piernas rígidas" },
  { idEjercicio: 81, categoria: "isquiotibiales", nombre: "Curl femoral tumbado" },
  { idEjercicio: 82, categoria: "isquiotibiales", nombre: "Curl femoral sentado" },
  { idEjercicio: 83, categoria: "isquiotibiales", nombre: "Curl femoral de pie" },
  { idEjercicio: 84, categoria: "isquiotibiales", nombre: "Sentadilla sissy" },
  { idEjercicio: 85, categoria: "isquiotibiales", nombre: "Glute ham raise" },
  { idEjercicio: 86, categoria: "isquiotibiales", nombre: "Good mornings" },

  // Glúteos
  { idEjercicio: 87, categoria: "gluteos", nombre: "Hip thrust con barra" },
  { idEjercicio: 88, categoria: "gluteos", nombre: "Hip thrust en máquina" },
  { idEjercicio: 89, categoria: "gluteos", nombre: "Patada de glúteo en polea" },
  { idEjercicio: 90, categoria: "gluteos", nombre: "Abducción en máquina" },
  { idEjercicio: 91, categoria: "gluteos", nombre: "Zancadas profundas" },

  // Aductores
  { idEjercicio: 92, categoria: "aductores", nombre: "Aductores en máquina" },
  { idEjercicio: 93, categoria: "aductores", nombre: "Peso muerto sumo" },
  { idEjercicio: 94, categoria: "aductores", nombre: "Sentadilla sumo" },

  // Gemelos
  { idEjercicio: 95, categoria: "gemelos", nombre: "Elevaciones de talones de pie" },
  { idEjercicio: 96, categoria: "gemelos", nombre: "Elevaciones de talones sentado" },
  { idEjercicio: 97, categoria: "gemelos", nombre: "Elevaciones unilaterales en escalón" },

  // Abdominales
  { idEjercicio: 98, categoria: "abdominales", nombre: "Crunch abdominal" },
  { idEjercicio: 99, categoria: "abdominales", nombre: "Crunch en máquina" },
  { idEjercicio: 100, categoria: "abdominales", nombre: "Crunch en polea alta" },
  { idEjercicio: 101, categoria: "abdominales", nombre: "Elevaciones de piernas colgado" },
  { idEjercicio: 102, categoria: "abdominales", nombre: "Elevaciones de piernas en banco" },
  { idEjercicio: 103, categoria: "abdominales", nombre: "Plancha" },
  { idEjercicio: 104, categoria: "abdominales", nombre: "Plancha lateral" },
  { idEjercicio: 105, categoria: "abdominales", nombre: "Rueda abdominal (ab wheel)" },
  { idEjercicio: 106, categoria: "abdominales", nombre: "V-ups" },

  // Lumbares
  { idEjercicio: 107, categoria: "lumbares", nombre: "Extensiones lumbares en banco romano" },
  { idEjercicio: 108, categoria: "lumbares", nombre: "Supermans" },
  { idEjercicio: 109, categoria: "lumbares", nombre: "Buenos días (Good mornings)" },

  // Funcionales / Fullbody
  { idEjercicio: 110, categoria: "funcionales", nombre: "Clean & press" },
  { idEjercicio: 111, categoria: "funcionales", nombre: "Snatch" },
  { idEjercicio: 112, categoria: "funcionales", nombre: "Thrusters" },
  { idEjercicio: 113, categoria: "funcionales", nombre: "Kettlebell swings" },
  { idEjercicio: 114, categoria: "funcionales", nombre: "Burpees" },
  { idEjercicio: 115, categoria: "funcionales", nombre: "Battle ropes" },
  { idEjercicio: 116, categoria: "funcionales", nombre: "Farmer’s walk" },
  { idEjercicio: 117, categoria: "funcionales", nombre: "Wall balls" }
];

export default ejercicios;

