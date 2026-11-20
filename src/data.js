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
  { label: 'Transformaciones', href: '#transformaciones' },
  { label: 'Calculadora', href: '#calculadora' },
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
    name: 'María, 29',
    goal: 'Recomposición corporal',
    before: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=600&q=70',
    after: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=600&q=70',
    metrics: [
      { label: 'Grasa corporal', value: '-8 kg' },
      { label: 'Masa muscular', value: '+3 kg' },
      { label: 'Energía', value: 'x2' },
    ],
  },
  {
    name: 'Diego, 34',
    goal: 'Alto rendimiento',
    before: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=600&q=70',
    after: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=600&q=70',
    metrics: [
      { label: 'Peso levantado', value: '+22 kg' },
      { label: 'Resistencia', value: '+40%' },
      { label: 'Grasa', value: '-5 kg' },
    ],
  },
  {
    name: 'Lucía, 41',
    goal: 'Nutrición clínica',
    before: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=600&q=70',
    after: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=600&q=70',
    metrics: [
      { label: 'Glucosa', value: 'Normal' },
      { label: 'Peso', value: '-11 kg' },
      { label: 'Bienestar', value: 'Alto' },
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
