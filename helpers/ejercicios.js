const ejercicios = [
  // Pecho
  { id: 1, categoria: "pecho", nombre: "Press de banca plano (barra)" },
  { id: 2, categoria: "pecho", nombre: "Press de banca plano (mancuernas)" },
  { id: 3, categoria: "pecho", nombre: "Press inclinado (barra)" },
  { id: 4, categoria: "pecho", nombre: "Press inclinado (mancuernas)" },
  { id: 5, categoria: "pecho", nombre: "Press declinado (barra)" },
  { id: 6, categoria: "pecho", nombre: "Press declinado (mancuernas)" },
  { id: 7, categoria: "pecho", nombre: "Aperturas con mancuernas (plano)" },
  { id: 8, categoria: "pecho", nombre: "Aperturas con mancuernas (inclinado)" },
  { id: 9, categoria: "pecho", nombre: "Pec Deck (contractor)" },
  { id: 10, categoria: "pecho", nombre: "Fondos en paralelas (para pecho)" },
  { id: 11, categoria: "pecho", nombre: "Push-ups (flexiones de pecho)" },
  { id: 12, categoria: "pecho", nombre: "Press en máquina Hammer" },
  { id: 13, categoria: "pecho", nombre: "Press en máquina convergente" },
  { id: 14, categoria: "pecho", nombre: "Crossover en poleas (alto)" },
  { id: 15, categoria: "pecho", nombre: "Crossover en poleas (medio)" },
  { id: 16, categoria: "pecho", nombre: "Crossover en poleas (bajo)" },

  // Espalda
  { id: 17, categoria: "espalda", nombre: "Jalón al pecho (agarre ancho)" },
  { id: 18, categoria: "espalda", nombre: "Jalón al pecho (agarre estrecho)" },
  { id: 19, categoria: "espalda", nombre: "Jalón al pecho (supino)" },
  { id: 20, categoria: "espalda", nombre: "Jalón tras nuca" },
  { id: 21, categoria: "espalda", nombre: "Remo con barra (Yates)" },
  { id: 22, categoria: "espalda", nombre: "Remo con barra (Pendlay)" },
  { id: 23, categoria: "espalda", nombre: "Remo con mancuerna a una mano" },
  { id: 24, categoria: "espalda", nombre: "Remo en máquina Hammer" },
  { id: 25, categoria: "espalda", nombre: "Remo en polea baja" },
  { id: 26, categoria: "espalda", nombre: "Remo con T-bar" },
  { id: 27, categoria: "espalda", nombre: "Peso muerto convencional" },
  { id: 28, categoria: "espalda", nombre: "Pull-over con mancuerna" },
  { id: 29, categoria: "espalda", nombre: "Pull-over en máquina" },
  { id: 30, categoria: "espalda", nombre: "Dominadas (supinas)" },
  { id: 31, categoria: "espalda", nombre: "Dominadas (pronas)" },
  { id: 32, categoria: "espalda", nombre: "Dominadas (neutras)" },

  // Hombros
  { id: 33, categoria: "hombros", nombre: "Press militar (barra)" },
  { id: 34, categoria: "hombros", nombre: "Press militar (mancuernas)" },
  { id: 35, categoria: "hombros", nombre: "Press Arnold" },
  { id: 36, categoria: "hombros", nombre: "Elevaciones laterales con mancuernas" },
  { id: 37, categoria: "hombros", nombre: "Elevaciones frontales con mancuernas" },
  { id: 38, categoria: "hombros", nombre: "Elevaciones frontales con disco" },
  { id: 39, categoria: "hombros", nombre: "Pájaros en banco inclinado" },
  { id: 40, categoria: "hombros", nombre: "Face pulls en polea" },
  { id: 41, categoria: "hombros", nombre: "Remo al mentón con barra" },
  { id: 42, categoria: "hombros", nombre: "Press en máquina (Smith o convergente)" },

  // Bíceps
  { id: 43, categoria: "biceps", nombre: "Curl con barra recta" },
  { id: 44, categoria: "biceps", nombre: "Curl con barra Z" },
  { id: 45, categoria: "biceps", nombre: "Curl con mancuernas alternado" },
  { id: 46, categoria: "biceps", nombre: "Curl con mancuernas simultáneo" },
  { id: 47, categoria: "biceps", nombre: "Curl martillo" },
  { id: 48, categoria: "biceps", nombre: "Curl predicador con barra" },
  { id: 49, categoria: "biceps", nombre: "Curl predicador con mancuernas" },
  { id: 50, categoria: "biceps", nombre: "Curl bayesiano en polea baja" },
  { id: 51, categoria: "biceps", nombre: "Curl doble en polea alta" },
  { id: 52, categoria: "biceps", nombre: "Curl concentrado (Scott)" },
  { id: 53, categoria: "biceps", nombre: "Curl en máquina" },

  // Tríceps
  { id: 54, categoria: "triceps", nombre: "Extensión en polea alta con cuerda" },
  { id: 55, categoria: "triceps", nombre: "Extensión en polea alta con barra recta" },
  { id: 56, categoria: "triceps", nombre: "Extensión en polea alta unilatera" },
  { id: 57, categoria: "triceps", nombre: "Extensión sobre la cabeza con mancuerna" },
  { id: 58, categoria: "triceps", nombre: "Extensión sobre la cabeza con cuerda" },
  { id: 59, categoria: "triceps", nombre: "Press francés con barra Z" },
  { id: 60, categoria: "triceps", nombre: "Fondos en banco" },
  { id: 61, categoria: "triceps", nombre: "Fondos en paralelas" },
  { id: 62, categoria: "triceps", nombre: "Patada de tríceps con mancuerna" },
  { id: 63, categoria: "triceps", nombre: "Extensión en máquina" },

  // Antebrazos
  { id: 64, categoria: "antebrazos", nombre: "Curl de muñeca supino" },
  { id: 65, categoria: "antebrazos", nombre: "Curl de muñeca prono" },
  { id: 66, categoria: "antebrazos", nombre: "Curl invertido con barra" },
  { id: 67, categoria: "antebrazos", nombre: "Curl invertido con mancuernas" },
  { id: 68, categoria: "antebrazos", nombre: "Hand gripper" },
  { id: 69, categoria: "antebrazos", nombre: "Wrist roller (con cuerda y peso)" },

  // Cuádriceps
  { id: 70, categoria: "cuadriceps", nombre: "Sentadilla tradicional" },
  { id: 71, categoria: "cuadriceps", nombre: "Sentadilla frontal" },
  { id: 72, categoria: "cuadriceps", nombre: "Sentadilla hack" },
  { id: 73, categoria: "cuadriceps", nombre: "Prensa de piernas" },
  { id: 74, categoria: "cuadriceps", nombre: "Zancadas con barra" },
  { id: 75, categoria: "cuadriceps", nombre: "Zancadas con mancuernas" },
  { id: 76, categoria: "cuadriceps", nombre: "Step-ups con banco" },
  { id: 77, categoria: "cuadriceps", nombre: "Extensiones de piernas en máquina" },
  { id: 78, categoria: "cuadriceps", nombre: "Sentadilla búlgara" },

  // Isquiotibiales
  { id: 79, categoria: "isquiotibiales", nombre: "Peso muerto rumano" },
  { id: 80, categoria: "isquiotibiales", nombre: "Peso muerto con piernas rígidas" },
  { id: 81, categoria: "isquiotibiales", nombre: "Curl femoral tumbado" },
  { id: 82, categoria: "isquiotibiales", nombre: "Curl femoral sentado" },
  { id: 83, categoria: "isquiotibiales", nombre: "Curl femoral de pie" },
  { id: 84, categoria: "isquiotibiales", nombre: "Sentadilla sissy" },
  { id: 85, categoria: "isquiotibiales", nombre: "Glute ham raise" },
  { id: 86, categoria: "isquiotibiales", nombre: "Good mornings" },

  // Glúteos
  { id: 87, categoria: "gluteos", nombre: "Hip thrust con barra" },
  { id: 88, categoria: "gluteos", nombre: "Hip thrust en máquina" },
  { id: 89, categoria: "gluteos", nombre: "Patada de glúteo en polea" },
  { id: 90, categoria: "gluteos", nombre: "Abducción en máquina" },
  { id: 91, categoria: "gluteos", nombre: "Zancadas profundas" },

  // Aductores
  { id: 92, categoria: "aductores", nombre: "Aductores en máquina" },
  { id: 93, categoria: "aductores", nombre: "Peso muerto sumo" },
  { id: 94, categoria: "aductores", nombre: "Sentadilla sumo" },

  // Gemelos
  { id: 95, categoria: "gemelos", nombre: "Elevaciones de talones de pie" },
  { id: 96, categoria: "gemelos", nombre: "Elevaciones de talones sentado" },
  { id: 97, categoria: "gemelos", nombre: "Elevaciones unilaterales en escalón" },

  // Abdominales
  { id: 98, categoria: "core", nombre: "Crunch abdominal" },
  { id: 99, categoria: "core", nombre: "Crunch en máquina" },
  { id: 100, categoria: "core", nombre: "Crunch en polea alta" },
  { id: 101, categoria: "core", nombre: "Elevaciones de piernas colgado" },
  { id: 102, categoria: "core", nombre: "Elevaciones de piernas en banco" },
  { id: 103, categoria: "core", nombre: "Plancha" },
  { id: 104, categoria: "core", nombre: "Plancha lateral" },
  { id: 105, categoria: "core", nombre: "Rueda abdominal (ab wheel)" },
  { id: 106, categoria: "core", nombre: "V-ups" },

  // Lumbares
  { id: 107, categoria: "lumbares", nombre: "Extensiones lumbares en banco romano" },
  { id: 108, categoria: "lumbares", nombre: "Supermans" },
  { id: 109, categoria: "lumbares", nombre: "Buenos días (Good mornings)" },

  // Funcionales / Fullbody
  { id: 110, categoria: "funcional", nombre: "Clean & press" },
  { id: 111, categoria: "funcional", nombre: "Snatch" },
  { id: 112, categoria: "funcional", nombre: "Thrusters" },
  { id: 113, categoria: "funcional", nombre: "Kettlebell swings" },
  { id: 114, categoria: "funcional", nombre: "Burpees" },
  { id: 115, categoria: "funcional", nombre: "Battle ropes" },
  { id: 116, categoria: "funcional", nombre: "Farmer’s walk" },
  { id: 117, categoria: "funcional", nombre: "Wall balls" }
];



export default ejercicios;

