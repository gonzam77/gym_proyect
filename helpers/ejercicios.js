const ejercicios = [
  // Pecho
  { idEjercicio: 1, categoria: "pecho", nombre: "Press de banca plano (barra)", tiempoEjecucion: 120 },
  { idEjercicio: 2, categoria: "pecho", nombre: "Press de banca plano (mancuernas)", tiempoEjecucion: 120 },
  { idEjercicio: 3, categoria: "pecho", nombre: "Press inclinado (barra)", tiempoEjecucion: 120 },
  { idEjercicio: 4, categoria: "pecho", nombre: "Press inclinado (mancuernas)", tiempoEjecucion: 120 },
  { idEjercicio: 5, categoria: "pecho", nombre: "Press declinado (barra)", tiempoEjecucion: 120 },
  { idEjercicio: 6, categoria: "pecho", nombre: "Press declinado (mancuernas)", tiempoEjecucion: 120 },
  { idEjercicio: 7, categoria: "pecho", nombre: "Aperturas con mancuernas (plano)", tiempoEjecucion: 90 },
  { idEjercicio: 8, categoria: "pecho", nombre: "Aperturas con mancuernas (inclinado)", tiempoEjecucion: 90 },
  { idEjercicio: 9, categoria: "pecho", nombre: "Pec Deck (contractor)", tiempoEjecucion: 75 },
  { idEjercicio: 10, categoria: "pecho", nombre: "Fondos en paralelas (para pecho)", tiempoEjecucion: 60 },
  { idEjercicio: 11, categoria: "pecho", nombre: "Push-ups (flexiones de pecho)", tiempoEjecucion: 60 },
  { idEjercicio: 12, categoria: "pecho", nombre: "Press en máquina Hammer", tiempoEjecucion: 75 },
  { idEjercicio: 13, categoria: "pecho", nombre: "Press en máquina convergente", tiempoEjecucion: 75 },
  { idEjercicio: 14, categoria: "pecho", nombre: "Crossover en poleas (alto)", tiempoEjecucion: 75 },
  { idEjercicio: 15, categoria: "pecho", nombre: "Crossover en poleas (medio)", tiempoEjecucion: 75 },
  { idEjercicio: 16, categoria: "pecho", nombre: "Crossover en poleas (bajo)", tiempoEjecucion: 75 },

  // Espalda
  { idEjercicio: 17, categoria: "espalda", nombre: "Jalón al pecho (agarre ancho)", tiempoEjecucion: 75 },
  { idEjercicio: 18, categoria: "espalda", nombre: "Jalón al pecho (agarre estrecho)", tiempoEjecucion: 75 },
  { idEjercicio: 19, categoria: "espalda", nombre: "Jalón al pecho (supino)", tiempoEjecucion: 75 },
  { idEjercicio: 20, categoria: "espalda", nombre: "Jalón tras nuca", tiempoEjecucion: 75 },
  { idEjercicio: 21, categoria: "espalda", nombre: "Remo con barra (Yates)", tiempoEjecucion: 120 },
  { idEjercicio: 22, categoria: "espalda", nombre: "Remo con barra (Pendlay)", tiempoEjecucion: 120 },
  { idEjercicio: 23, categoria: "espalda", nombre: "Remo con mancuerna a una mano", tiempoEjecucion: 120 },
  { idEjercicio: 24, categoria: "espalda", nombre: "Remo en máquina Hammer", tiempoEjecucion: 75 },
  { idEjercicio: 25, categoria: "espalda", nombre: "Remo en polea baja", tiempoEjecucion: 75 },
  { idEjercicio: 26, categoria: "espalda", nombre: "Remo con T-bar", tiempoEjecucion: 120 },
  { idEjercicio: 27, categoria: "espalda", nombre: "Peso muerto convencional", tiempoEjecucion: 120 },
  { idEjercicio: 28, categoria: "espalda", nombre: "Pull-over con mancuerna", tiempoEjecucion: 90 },
  { idEjercicio: 29, categoria: "espalda", nombre: "Pull-over en máquina", tiempoEjecucion: 75 },
  { idEjercicio: 30, categoria: "espalda", nombre: "Dominadas (supinas)", tiempoEjecucion: 60 },
  { idEjercicio: 31, categoria: "espalda", nombre: "Dominadas (pronas)", tiempoEjecucion: 60 },
  { idEjercicio: 32, categoria: "espalda", nombre: "Dominadas (neutras)", tiempoEjecucion: 60 },

  // Hombros
  { idEjercicio: 33, categoria: "hombros", nombre: "Press militar (barra)", tiempoEjecucion: 120 },
  { idEjercicio: 34, categoria: "hombros", nombre: "Press militar (mancuernas)", tiempoEjecucion: 120 },
  { idEjercicio: 35, categoria: "hombros", nombre: "Press Arnold", tiempoEjecucion: 120 },
  { idEjercicio: 36, categoria: "hombros", nombre: "Elevaciones laterales con mancuernas", tiempoEjecucion: 90 },
  { idEjercicio: 118, categoria: "hombros", nombre: "Elevaciones laterales con polea", tiempoEjecucion: 75 },
  { idEjercicio: 37, categoria: "hombros", nombre: "Elevaciones frontales con mancuernas", tiempoEjecucion: 90 },
  { idEjercicio: 38, categoria: "hombros", nombre: "Elevaciones frontales con disco", tiempoEjecucion: 90 },
  { idEjercicio: 39, categoria: "hombros", nombre: "Pájaros con mancuerna", tiempoEjecucion: 90 },
  { idEjercicio: 40, categoria: "hombros", nombre: "Face pulls en polea", tiempoEjecucion: 75 },
  { idEjercicio: 41, categoria: "hombros", nombre: "Remo al mentón con barra", tiempoEjecucion: 120 },
  { idEjercicio: 42, categoria: "hombros", nombre: "Press militar en Smith", tiempoEjecucion: 120 },

    // Bíceps
  { idEjercicio: 43, categoria: "biceps", nombre: "Curl con barra recta", tiempoEjecucion: 120 },
  { idEjercicio: 44, categoria: "biceps", nombre: "Curl con barra Z", tiempoEjecucion: 120 },
  { idEjercicio: 45, categoria: "biceps", nombre: "Curl con mancuernas alternado", tiempoEjecucion: 90 },
  { idEjercicio: 46, categoria: "biceps", nombre: "Curl con mancuernas simultáneo", tiempoEjecucion: 90 },
  { idEjercicio: 47, categoria: "biceps", nombre: "Curl martillo", tiempoEjecucion: 90 },
  { idEjercicio: 119, categoria: "biceps", nombre: "Curl martillo cruzado", tiempoEjecucion: 90 },
  { idEjercicio: 48, categoria: "biceps", nombre: "Curl predicador con barra", tiempoEjecucion: 90 },
  { idEjercicio: 49, categoria: "biceps", nombre: "Curl predicador con mancuernas", tiempoEjecucion: 90 },
  { idEjercicio: 120, categoria: "biceps", nombre: "Curl predicador con polea", tiempoEjecucion: 75 },
  { idEjercicio: 50, categoria: "biceps", nombre: "Curl bayesiano en polea baja", tiempoEjecucion: 75 },
  { idEjercicio: 51, categoria: "biceps", nombre: "Curl doble en polea alta", tiempoEjecucion: 75 },
  { idEjercicio: 52, categoria: "biceps", nombre: "Curl concentrado (Scott)", tiempoEjecucion: 90 },
  { idEjercicio: 53, categoria: "biceps", nombre: "Curl en máquina", tiempoEjecucion: 75 },

  // Tríceps
  { idEjercicio: 54, categoria: "triceps", nombre: "Extensión en polea alta con cuerda", tiempoEjecucion: 75 },
  { idEjercicio: 55, categoria: "triceps", nombre: "Extensión en polea alta con barra recta", tiempoEjecucion: 75 },
  { idEjercicio: 56, categoria: "triceps", nombre: "Extensión en polea alta unilatera", tiempoEjecucion: 75 },
  { idEjercicio: 57, categoria: "triceps", nombre: "Extensión sobre la cabeza con mancuerna", tiempoEjecucion: 90 },
  { idEjercicio: 58, categoria: "triceps", nombre: "Extensión sobre la cabeza con cuerda", tiempoEjecucion: 90 },
  { idEjercicio: 59, categoria: "triceps", nombre: "Press francés", tiempoEjecucion: 120 },
  { idEjercicio: 60, categoria: "triceps", nombre: "Fondos en banco", tiempoEjecucion: 60 },
  { idEjercicio: 61, categoria: "triceps", nombre: "Fondos en paralelas", tiempoEjecucion: 60 },
  { idEjercicio: 62, categoria: "triceps", nombre: "Patada de tríceps con mancuerna", tiempoEjecucion: 90 },
  { idEjercicio: 63, categoria: "triceps", nombre: "Extensión en máquina", tiempoEjecucion: 75 },

  // Antebrazos
  { idEjercicio: 64, categoria: "antebrazos", nombre: "Curl de muñeca supino", tiempoEjecucion: 75 },
  { idEjercicio: 65, categoria: "antebrazos", nombre: "Curl de muñeca prono", tiempoEjecucion: 75 },
  { idEjercicio: 66, categoria: "antebrazos", nombre: "Curl invertido con barra", tiempoEjecucion: 90 },
  { idEjercicio: 67, categoria: "antebrazos", nombre: "Curl invertido con mancuernas", tiempoEjecucion: 90 },
  { idEjercicio: 68, categoria: "antebrazos", nombre: "Hand gripper", tiempoEjecucion: 60 },
  { idEjercicio: 69, categoria: "antebrazos", nombre: "Wrist roller (con cuerda y peso)", tiempoEjecucion: 90 },

  // Cuádriceps
  { idEjercicio: 70, categoria: "cuadriceps", nombre: "Sentadilla tradicional", tiempoEjecucion: 120 },
  { idEjercicio: 71, categoria: "cuadriceps", nombre: "Sentadilla frontal", tiempoEjecucion: 120 },
  { idEjercicio: 72, categoria: "cuadriceps", nombre: "Sentadilla hack", tiempoEjecucion: 120 },
  { idEjercicio: 73, categoria: "cuadriceps", nombre: "Prensa de piernas", tiempoEjecucion: 120 },
  { idEjercicio: 74, categoria: "cuadriceps", nombre: "Zancadas con barra", tiempoEjecucion: 120 },
  { idEjercicio: 75, categoria: "cuadriceps", nombre: "Zancadas con mancuernas", tiempoEjecucion: 120 },
  { idEjercicio: 76, categoria: "cuadriceps", nombre: "Step-ups con banco", tiempoEjecucion: 90 },
  { idEjercicio: 77, categoria: "cuadriceps", nombre: "Extensiones de piernas en máquina", tiempoEjecucion: 75 },
  { idEjercicio: 78, categoria: "cuadriceps", nombre: "Sentadilla búlgara", tiempoEjecucion: 120 },

  // Isquiotibiales
  { idEjercicio: 79, categoria: "isquiotibiales", nombre: "Peso muerto rumano", tiempoEjecucion: 120 },
  { idEjercicio: 121, categoria: "isquiotibiales", nombre: "Peso muerto convencional", tiempoEjecucion: 120 },
  { idEjercicio: 80, categoria: "isquiotibiales", nombre: "Peso muerto con piernas rígidas", tiempoEjecucion: 120 },
  { idEjercicio: 81, categoria: "isquiotibiales", nombre: "Curl femoral tumbado", tiempoEjecucion: 75 },
  { idEjercicio: 82, categoria: "isquiotibiales", nombre: "Curl femoral sentado", tiempoEjecucion: 75 },
  { idEjercicio: 83, categoria: "isquiotibiales", nombre: "Curl femoral de pie", tiempoEjecucion: 75 },
  { idEjercicio: 84, categoria: "isquiotibiales", nombre: "Sentadilla sissy", tiempoEjecucion: 90 },
  { idEjercicio: 85, categoria: "isquiotibiales", nombre: "Glute ham raise", tiempoEjecucion: 90 },
  { idEjercicio: 86, categoria: "isquiotibiales", nombre: "Good mornings", tiempoEjecucion: 120 },

  // Glúteos
  { idEjercicio: 87, categoria: "gluteos", nombre: "Hip thrust con barra", tiempoEjecucion: 120 },
  { idEjercicio: 88, categoria: "gluteos", nombre: "Hip thrust en máquina", tiempoEjecucion: 90 },
  { idEjercicio: 89, categoria: "gluteos", nombre: "Patada de glúteo en polea", tiempoEjecucion: 75 },
  { idEjercicio: 90, categoria: "gluteos", nombre: "Abducción en máquina", tiempoEjecucion: 75 },
  { idEjercicio: 91, categoria: "gluteos", nombre: "Zancadas profundas", tiempoEjecucion: 120 },

  // Aductores
  { idEjercicio: 92, categoria: "aductores", nombre: "Aductores en máquina", tiempoEjecucion: 75 },
  { idEjercicio: 93, categoria: "aductores", nombre: "Peso muerto sumo", tiempoEjecucion: 120 },
  { idEjercicio: 94, categoria: "aductores", nombre: "Sentadilla sumo", tiempoEjecucion: 120 },

  // Gemelos
  { idEjercicio: 95, categoria: "gemelos", nombre: "Elevaciones de talones de pie", tiempoEjecucion: 60 },
  { idEjercicio: 96, categoria: "gemelos", nombre: "Elevaciones de talones sentado", tiempoEjecucion: 60 },
  { idEjercicio: 97, categoria: "gemelos", nombre: "Elevaciones unilaterales en escalón", tiempoEjecucion: 60 },

  // Abdominales
  { idEjercicio: 98, categoria: "abdominales", nombre: "Crunch abdominal", tiempoEjecucion: 45 },
  { idEjercicio: 99, categoria: "abdominales", nombre: "Crunch en máquina", tiempoEjecucion: 60 },
  { idEjercicio: 100, categoria: "abdominales", nombre: "Crunch en polea alta", tiempoEjecucion: 60 },
  { idEjercicio: 101, categoria: "abdominales", nombre: "Elevaciones de piernas colgado", tiempoEjecucion: 60 },
  { idEjercicio: 102, categoria: "abdominales", nombre: "Elevaciones de piernas en banco", tiempoEjecucion: 60 },
  { idEjercicio: 103, categoria: "abdominales", nombre: "Plancha", tiempoEjecucion: 90 },
  { idEjercicio: 104, categoria: "abdominales", nombre: "Plancha lateral", tiempoEjecucion: 90 },
  { idEjercicio: 105, categoria: "abdominales", nombre: "Rueda abdominal (ab wheel)", tiempoEjecucion: 60 },
  { idEjercicio: 106, categoria: "abdominales", nombre: "V-ups", tiempoEjecucion: 60 },

  // Lumbares
  { idEjercicio: 107, categoria: "lumbares", nombre: "Extensiones lumbares en banco romano", tiempoEjecucion: 75 },
  { idEjercicio: 108, categoria: "lumbares", nombre: "Supermans", tiempoEjecucion: 60 },
  { idEjercicio: 109, categoria: "lumbares", nombre: "Buenos días (Good mornings)", tiempoEjecucion: 120 },

  // Funcionales / Fullbody
  { idEjercicio: 110, categoria: "funcionales", nombre: "Clean & press", tiempoEjecucion: 120 },
  { idEjercicio: 111, categoria: "funcionales", nombre: "Snatch", tiempoEjecucion: 120 },
  { idEjercicio: 112, categoria: "funcionales", nombre: "Thrusters", tiempoEjecucion: 120 },
  { idEjercicio: 113, categoria: "funcionales", nombre: "Kettlebell swings", tiempoEjecucion: 75 },
  { idEjercicio: 114, categoria: "funcionales", nombre: "Burpees", tiempoEjecucion: 60 },
  { idEjercicio: 115, categoria: "funcionales", nombre: "Battle ropes", tiempoEjecucion: 60 },
  { idEjercicio: 116, categoria: "funcionales", nombre: "Farmer’s walk", tiempoEjecucion: 90 },
  { idEjercicio: 117, categoria: "funcionales", nombre: "Wall balls", tiempoEjecucion: 75 }
];

export default ejercicios;
