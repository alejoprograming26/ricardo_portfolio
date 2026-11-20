import {
  Dumbbell,
  Activity,
  Heart,
  Chat,
  Flame,
  Shield,
  Target,
  User,
  Instagram,
  LinkedIn,
  XSocial,
} from './components/icons.jsx'

export const NAV_LINKS = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Sobre Mí', href: '#sobre-mi' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Resultados', href: '#resultados' },
  { label: 'Preguntas', href: '#faq' },
  { label: 'Contacto', href: '#contacto' },
]

export const HERO_STATS = [
  { value: 500, suffix: '+', label: 'Pacientes transformados' },
  { value: 100, suffix: '%', label: 'Plan personalizado' },
  { value: 8, suffix: ' años', label: 'Experiencia clínica' },
]

export const ABOUT_CREDENTIALS = [
  'Lic. en Nutrición · Universidad Nacional',
  'Especialista en Nutrición Deportiva (ISSN)',
  'Certificación en Composición Corporal (DEXA)',
  'Coach en Hábitos Sostenibles',
]

export const SERVICES = [
  {
    icon: Dumbbell,
    title: 'Nutrición Deportiva',
    desc: 'Planes de periodización nutricional para rendimiento, fuerza y recuperación óptima.',
    points: ['Cálculo de macros', 'Estrategia pre/post entreno', 'Hidratación y suplementación'],
  },
  {
    icon: Activity,
    title: 'Recomposición Corporal',
    desc: 'Perder grasa y ganar masa muscular sin dietas extremas ni efecto rebote.',
    points: ['Deficit inteligente', 'Seguimiento DEXA', 'Hábitos para el mantenimiento'],
  },
  {
    icon: Heart,
    title: 'Nutrición Clínica',
    desc: 'Manejo nutricional de patologías: diabetes, hipertensión, TCA y más.',
    points: ['Plan medicalizado', 'Coordinación con tu médico', 'Educación alimentaria'],
  },
  {
    icon: Chat,
    title: 'Asesoría Online',
    desc: 'Acompañamiento 100% remoto con videoconsultas y app de seguimiento.',
    points: ['Desde cualquier país', 'Soporte por chat', 'Recetas y listas de compra'],
  },
]

export const TRANSFORMATIONS = [
  {
    title: 'Recomposición Corporal',
    badge: 'Grasa vs Masa Magra',
    tagline: 'Perder tejido adiposo preservando masa muscular con déficit calculado.',
    before: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=75',
    after: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=800&q=75',
    beforeLabel: 'Enfoque restrictivo',
    afterLabel: 'Con plan estructurado',
    metrics: [
      { label: 'Grasa corporal', value: 'Déficit óptimo' },
      { label: 'Masa magra', value: 'Preservada' },
      { label: 'Energía', value: 'Sostenida' },
    ],
  },
  {
    title: 'Rendimiento y Masa Muscular',
    badge: 'Atletas y Fuerza',
    tagline: 'Superávit inteligente, cargas de glucógeno y recuperación muscular.',
    before: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=75',
    after: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=800&q=75',
    beforeLabel: 'Entreno sin planning',
    afterLabel: 'Periodización nutricional',
    metrics: [
      { label: 'Fuerza / RPE', value: 'Progresiva' },
      { label: 'Recuperación', value: 'Acelerada' },
      { label: 'Rendimiento', value: '+ Potencia' },
    ],
  },
  {
    title: 'Salud Digestiva y Hábitos',
    badge: 'Bienestar Integral',
    tagline: 'Flexibilidad metabólica, reducción de inflamación y adherencia total.',
    before: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=75',
    after: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=75',
    beforeLabel: 'Digestión lenta e hinchazón',
    afterLabel: 'Microbiota y vitalidad',
    metrics: [
      { label: 'Inflamación', value: 'Reducida' },
      { label: 'Adherencia', value: 'Sin ansiedad' },
      { label: 'Bienestar', value: 'Total' },
    ],
  },
]

export const TESTIMONIALS = [
  {
    name: 'María G.',
    role: 'Recomposición corporal',
    stars: 5,
    text: 'Nunca imaginé que comer bien pudiera ser tan flexible. En 4 meses cambié mi cuerpo sin renunciar a salir con amigos. Ricardo es ciencia pura y mucho corazón.',
  },
  {
    name: 'Diego R.',
    role: 'Atleta amateur',
    stars: 5,
    text: 'Mi rendimiento en el gimnasio subió un montón. Los números no mienten: más fuerza, menos grasa y cero hambre constante. 100% recomendado.',
  },
  {
    name: 'Lucía M.',
    role: 'Nutrición clínica',
    stars: 5,
    text: 'Como diabética, tenía miedo. El Dr. Ricardo me acompañó con un plan medicalizado y mi glucosa por fin está estable. Profesionalidad que se nota.',
  },
  {
    name: 'Tomás V.',
    role: 'Asesoría online',
    stars: 5,
    text: 'Vivo en el exterior y la atención online fue impecable. Siempre responsive, con recetas deliciosas y un seguimiento que se siente cercano.',
  },
  {
    name: 'Carla S.',
    role: 'Recomposición corporal',
    stars: 5,
    text: 'Lo mejor: no es una dieta, es un estilo de vida. Aprendí a comer para siempre. El efecto rebote se acabó en mi vida.',
  },
  {
    name: 'Javier P.',
    role: 'Alto rendimiento',
    stars: 5,
    text: 'Profesional serio, basado en evidencia y muy humano. Mis marcas personales mejoraron en meses. Gracias Dr. Ricardo.',
  },
]

export const PROCESS_STEPS = [
  { icon: User, title: 'Evaluación', desc: 'Historial, objetivos y composición corporal real.' },
  { icon: Target, title: 'Plan a medida', desc: 'Estrategia nutricional diseñada para ti.' },
  { icon: Flame, title: 'Ejecución', desc: 'Seguimiento semanal y ajustes continuos.' },
  { icon: Shield, title: 'Mantenimiento', desc: 'Hábitos sostenibles para resultados duraderos.' },
]

export const SOCIALS = [
  { label: 'Instagram', href: '#', Icon: Instagram },
  { label: 'LinkedIn', href: '#', Icon: LinkedIn },
  { label: 'X', href: '#', Icon: XSocial },
]

export const FAQ_ITEMS = [
  {
    category: 'metodo',
    q: '¿Tendré que pasar hambre o eliminar por completo los carbohidratos?',
    a: 'En lo absoluto. Mi método se basa en saciedad nutricional, cálculo preciso de macronutrientes y flexibilidad. No prohibimos grupos de alimentos ni pasamos hambre; aprendes a estructurar tus porciones y disfrutar de tu comida sin culpa mientras progresas.',
  },
  {
    category: 'metodo',
    q: '¿Qué pasa si tengo eventos sociales, salidas o me voy de viaje?',
    a: 'Parte fundamental del aprendizaje es desarrollar adaptabilidad. En cada plan te enseño estrategias prácticas de compensación, elecciones inteligentes en restaurantes y protocolos flexibles para que disfrutes de tu vida social sin sabotear tus avances.',
  },
  {
    category: 'modalidad',
    q: '¿Cómo funciona la modalidad 100% online?',
    a: 'Tendrás tu primera consulta por videollamada para analizar tu historial, objetivos, analíticas y estilo de vida. Recibes tu plan estructurado con recetas e instrucciones, y llevamos un control semanal mediante seguimiento continuo y comunicación directa por chat para ajustes en tiempo real.',
  },
  {
    category: 'modalidad',
    q: '¿Puedo solicitar asesoría si tengo una condición médica (ej. diabetes o tiroides)?',
    a: 'Sí. Cuento con formación en nutrición clínica y medicalizada. Diseñamos planes adaptados estrictamente a tus analíticas sanguíneas y patologías, trabajando en sintonía con las recomendaciones de tus médicos tratantes.',
  },
  {
    category: 'tiempos',
    q: '¿En cuánto tiempo comenzaré a ver cambios físicos y en rendimiento?',
    a: 'En las primeras 2 a 3 semanas notarás mejoras notables en niveles de energía, digestión y bienestar general. Entre la 4ta y 8va semana se aprecian cambios visibles en composición corporal (reducción de medidas y definición) de forma progresiva y sostenible.',
  },
  {
    category: 'tiempos',
    q: '¿Cada cuánto tiempo se actualiza mi plan nutricional?',
    a: 'Realizamos revisiones y ajustes cada 2 a 4 semanas según tu evolución fisiológica, adherencia y el reporte de tus métricas. El cuerpo se adapta constantemente, por lo que el plan evoluciona contigo.',
  },
]
