import { useState, useMemo } from 'react'
import { m, useReducedMotion } from 'framer-motion'
import Reveal from './ui/Reveal'
import GlassCard from './ui/GlassCard'
import FloatingOrbs from './ui/FloatingOrbs'
import { ArrowRight, Activity, Dumbbell, Flame, Shield } from './icons'

const GOALS = [
  {
    key: 'lose',
    label: 'Déficit Grasa',
    sub: 'Pérdida de tejido graso preservando masa magra',
    adj: -400,
    proteinPerKg: 2.2,
    fatPerKg: 0.8,
    color: '#7FA84A',
    badge: '-400 kcal/día',
  },
  {
    key: 'recomp',
    label: 'Recomposición',
    sub: 'Quema de grasa y tonificación muscular simultánea',
    adj: -200,
    proteinPerKg: 2.1,
    fatPerKg: 0.9,
    color: '#2F6B4F',
    badge: '-200 kcal/día',
  },
  {
    key: 'maintain',
    label: 'Mantenimiento',
    sub: 'Estabilidad metabólica, energía óptima y salud',
    adj: 0,
    proteinPerKg: 1.8,
    fatPerKg: 1.0,
    color: '#8FC29F',
    badge: 'Equilibrio 0 kcal',
  },
  {
    key: 'gain',
    label: 'Superávit Magro',
    sub: 'Hipertrofia limpia y ganancia progresiva de fuerza',
    adj: 350,
    proteinPerKg: 2.0,
    fatPerKg: 1.0,
    color: '#B5E45C',
    badge: '+350 kcal/día',
  },
]

const ACTIVITIES = [
  {
    key: 'sed',
    label: 'Sedentario',
    factor: 1.2,
    hint: 'Oficina / Menos de 4,000 pasos al día',
    icon: Shield,
  },
  {
    key: 'light',
    label: 'Ligero',
    factor: 1.375,
    hint: 'Entrenamiento suave 1–2 días por semana',
    icon: Activity,
  },
  {
    key: 'mod',
    label: 'Moderado',
    factor: 1.55,
    hint: 'Fuerza o cardio 3–5 días por semana',
    icon: Flame,
  },
  {
    key: 'high',
    label: 'Intenso / Atleta',
    factor: 1.725,
    hint: 'Entrenamiento exigente 6–7 días por semana',
    icon: Dumbbell,
  },
]

function calculateNutrition({ sex, age, weight, height, goalKey, activityKey }) {
  const goalObj = GOALS.find((g) => g.key === goalKey) || GOALS[0]
  const actObj = ACTIVITIES.find((a) => a.key === activityKey) || ACTIVITIES[2]

  const bmr = 10 * weight + 6.25 * height - 5 * age + (sex === 'm' ? 5 : -161)
  const tdee = bmr * actObj.factor
  const targetKcal = Math.max(1200, Math.round(tdee + goalObj.adj))

  const proteinG = Math.round(weight * goalObj.proteinPerKg)
  const fatG = Math.round(weight * goalObj.fatPerKg)
  const proteinKcal = proteinG * 4
  const fatKcal = fatG * 9
  const remainingKcal = Math.max(0, targetKcal - proteinKcal - fatKcal)
  const carbG = Math.round(remainingKcal / 4)
  const carbKcal = carbG * 4

  const totalCalculatedKcal = proteinKcal + fatKcal + carbKcal || 1
  const proteinPct = Math.round((proteinKcal / totalCalculatedKcal) * 100)
  const carbPct = Math.round((carbKcal / totalCalculatedKcal) * 100)
  const fatPct = Math.round((fatKcal / totalCalculatedKcal) * 100)

  const heightM = height / 100
  const bmi = heightM > 0 ? Number((weight / (heightM * heightM)).toFixed(1)) : 0

  let bmiCategory = 'Normopeso'
  let bmiColor = 'text-[var(--forest-deep)] dark:text-[var(--lime)]'
  let bmiBg = 'bg-[var(--forest-12)]'

  if (bmi < 18.5) {
    bmiCategory = 'Bajo peso'
    bmiColor = 'text-amber-500 dark:text-amber-400'
    bmiBg = 'bg-amber-500/15'
  } else if (bmi >= 25 && bmi < 30) {
    bmiCategory = 'Sobrepeso leve'
    bmiColor = 'text-amber-600 dark:text-amber-400'
    bmiBg = 'bg-amber-500/15'
  } else if (bmi >= 30) {
    bmiCategory = 'Obesidad'
    bmiColor = 'text-rose-500 dark:text-rose-400'
    bmiBg = 'bg-rose-500/15'
  }

  const waterLitres = (weight * 0.035).toFixed(1)

  return {
    targetKcal,
    bmr: Math.round(bmr),
    tdee: Math.round(tdee),
    bmi,
    bmiCategory,
    bmiColor,
    bmiBg,
    waterLitres,
    goalObj,
    macroList: [
      {
        id: 'macro-protein',
        label: 'Proteínas',
        grams: proteinG,
        perKg: `${goalObj.proteinPerKg} g/kg`,
        pct: proteinPct,
        color: '#7FA84A',
      },
      {
        id: 'macro-carbs',
        label: 'Carbohidratos',
        grams: carbG,
        perKg: `${(carbG / (weight || 1)).toFixed(1)} g/kg`,
        pct: carbPct,
        color: '#2F6B4F',
      },
      {
        id: 'macro-fats',
        label: 'Grasas Saludables',
        grams: fatG,
        perKg: `${goalObj.fatPerKg} g/kg`,
        pct: fatPct,
        color: '#5FA07C',
      },
    ],
  }
}

function PrecisionInput({ label, value, min, max, unit, step = 1, onChange }) {
  const clampValue = (val) => {
    const numeric = parseFloat(val)
    if (!Number.isFinite(numeric)) return min
    return Math.min(max, Math.max(min, numeric))
  }

  return (
    <div className="rounded-2xl border border-[var(--line)] bg-[var(--surface-soft)] p-3.5 transition-colors focus-within:border-[var(--forest)]">
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold text-[var(--text-muted)]">{label}</span>
        <div className="flex items-center gap-1.5 font-display text-lg font-bold text-[var(--text)]">
          <span>{value}</span>
          <span className="text-xs font-medium text-[var(--text-muted)]">{unit}</span>
        </div>
      </div>

      <div className="mt-2.5 flex items-center gap-2">
        <button
          type="button"
          onClick={() => onChange(clampValue(value - step))}
          aria-label={`Disminuir ${label}`}
          className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-[var(--forest-10)] text-sm font-bold text-[var(--text)] transition-colors hover:bg-[var(--forest-20)] active:scale-95"
        >
          -
        </button>

        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(clampValue(e.target.value))}
          aria-label={label}
          className="h-1.5 w-full cursor-pointer appearance-none rounded-full bg-[var(--line)] accent-[var(--forest)]"
        />

        <button
          type="button"
          onClick={() => onChange(clampValue(value + step))}
          aria-label={`Aumentar ${label}`}
          className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-[var(--forest-10)] text-sm font-bold text-[var(--text)] transition-colors hover:bg-[var(--forest-20)] active:scale-95"
        >
          +
        </button>
      </div>
    </div>
  )
}

function MacroArcRing({ pct, color, radius, delay }) {
  const reduce = useReducedMotion()
  const circumference = 2 * Math.PI * radius
  return (
    <m.circle
      cx="70"
      cy="70"
      r={radius}
      fill="none"
      stroke={color}
      strokeWidth="10"
      strokeLinecap="round"
      strokeOpacity="0.9"
      transform="rotate(-90 70 70)"
      strokeDasharray={circumference}
      initial={{ strokeDashoffset: circumference }}
      animate={{ strokeDashoffset: circumference - (circumference * pct) / 100 }}
      transition={{ duration: reduce ? 0 : 1.2, delay, ease: [0.22, 1, 0.36, 1] }}
      style={{ filter: `drop-shadow(0 0 8px ${color}88)` }}
    />
  )
}

function BiometricsPanel({
  sex,
  setSex,
  age,
  setAge,
  weight,
  setWeight,
  height,
  setHeight,
  results,
  activityKey,
  setActivityKey,
  goalKey,
  setGoalKey,
}) {
  return (
    <div className="space-y-6 lg:col-span-7">
      {/* 1. Biological Sex Toggle */}
      <div>
        <div className="mb-2 flex items-center justify-between">
          <span className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)]">
            1. Sexo Biológico
          </span>
          <span className="text-[11px] text-[var(--text-muted)]">Ajuste de tasa metabólica basal</span>
        </div>
        <div className="grid grid-cols-2 gap-3 rounded-2xl bg-[var(--surface-soft)] p-1.5">
          {[
            { key: 'f', label: 'Mujer', desc: 'Fórmula ginecoide' },
            { key: 'm', label: 'Hombre', desc: 'Fórmula androide' },
          ].map((item) => {
            const isSelected = sex === item.key
            return (
              <button
                key={item.key}
                type="button"
                onClick={() => setSex(item.key)}
                className={[
                  'flex flex-col items-center justify-center rounded-xl py-3 text-center transition-colors',
                  isSelected
                    ? 'bg-[var(--forest)] text-[var(--paper)] shadow-[0_8px_20px_-8px_var(--glow)] dark:text-[#0f1813]'
                    : 'text-[var(--text-muted)] hover:bg-[var(--forest-10)] hover:text-[var(--text)]',
                ].join(' ')}
              >
                <span className="text-sm font-bold">{item.label}</span>
                <span className="text-[10px] opacity-80">{item.desc}</span>
              </button>
            )
          })}
        </div>
      </div>

      {/* 2. Biometrics with BMI */}
      <div>
        <div className="mb-2 flex items-center justify-between">
          <span className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)]">
            2. Parámetros Antropométricos
          </span>
          <div
            className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-bold ${results.bmiBg} ${results.bmiColor}`}
          >
            <span>IMC: {results.bmi}</span>
            <span className="opacity-70">({results.bmiCategory})</span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          <PrecisionInput
            label="Edad"
            value={age}
            min={15}
            max={85}
            unit="años"
            step={1}
            onChange={setAge}
          />
          <PrecisionInput
            label="Peso Corporal"
            value={weight}
            min={40}
            max={160}
            unit="kg"
            step={1}
            onChange={setWeight}
          />
          <PrecisionInput
            label="Estatura"
            value={height}
            min={140}
            max={215}
            unit="cm"
            step={1}
            onChange={setHeight}
          />
        </div>
      </div>

      {/* 3. Physical Activity */}
      <div>
        <span className="mb-2 block text-xs font-bold uppercase tracking-wider text-[var(--text-muted)]">
          3. Nivel de Actividad Física Semanal
        </span>
        <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
          {ACTIVITIES.map((act) => {
            const isSelected = activityKey === act.key
            const IconComponent = act.icon
            return (
              <button
                key={act.key}
                type="button"
                onClick={() => setActivityKey(act.key)}
                className={[
                  'flex items-center gap-3 rounded-2xl border p-3 text-left transition-colors',
                  isSelected
                    ? 'border-[var(--forest)] bg-[var(--forest-10)] ring-1 ring-[var(--forest)]'
                    : 'border-[var(--line)] bg-[var(--surface-soft)] hover:bg-[var(--forest-8)]',
                ].join(' ')}
              >
                <span
                  className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl ${
                    isSelected
                      ? 'bg-[var(--forest)] text-[var(--paper)] dark:text-[#0f1813]'
                      : 'bg-[var(--forest-12)] text-[var(--forest-deep)] dark:text-[var(--lime)]'
                  }`}
                >
                  <IconComponent className="h-5 w-5" />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-bold text-[var(--text)]">{act.label}</p>
                    <span className="text-[10px] font-semibold text-[var(--forest-deep)] dark:text-[var(--lime)]">
                      ×{act.factor}
                    </span>
                  </div>
                  <p className="mt-0.5 truncate text-[11px] text-[var(--text-muted)]">{act.hint}</p>
                </div>
              </button>
            )
          })}
        </div>
      </div>

      {/* 4. Nutritional Goal */}
      <div>
        <span className="mb-2 block text-xs font-bold uppercase tracking-wider text-[var(--text-muted)]">
          4. Objetivo Nutricional Principal
        </span>
        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
          {GOALS.map((goal) => {
            const isSelected = goalKey === goal.key
            return (
              <button
                key={goal.key}
                type="button"
                onClick={() => setGoalKey(goal.key)}
                className={[
                  'flex flex-col items-center justify-between rounded-2xl border p-3 text-center transition-colors',
                  isSelected
                    ? 'border-[var(--forest)] bg-[var(--forest-10)] shadow-[0_4px_16px_-6px_var(--glow)]'
                    : 'border-[var(--line)] bg-[var(--surface-soft)] hover:bg-[var(--forest-8)]',
                ].join(' ')}
              >
                <span className="h-2 w-2 rounded-full" style={{ background: goal.color }} />
                <span className="mt-1 text-xs font-bold text-[var(--text)]">{goal.label}</span>
                <span
                  className="mt-1.5 rounded-full px-2 py-0.5 text-[9px] font-bold"
                  style={{ background: `${goal.color}22`, color: goal.color }}
                >
                  {goal.badge}
                </span>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}

function PrescriptionHud({ results }) {
  return (
    <div className="flex flex-col justify-between rounded-3xl border border-[var(--line)] bg-[var(--forest-6)] p-6 lg:col-span-5 sm:p-7">
      <div>
        {/* Telemetry Header */}
        <div className="flex items-center justify-between border-b border-[var(--line)] pb-4">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--forest-deep)] dark:text-[var(--lime)]">
              Diagnóstico Energético
            </p>
            <h3 className="font-display text-xl font-bold tracking-tight">Prescripción Diaria</h3>
          </div>
          <span className="rounded-full border border-[var(--forest-40)] bg-[var(--forest-8)] px-3 py-1 text-[11px] font-bold text-[var(--forest-deep)] dark:text-[var(--lime)]">
            {results.goalObj.label}
          </span>
        </div>

        {/* Dynamic Concentric Rings and Readout */}
        <div className="relative my-6 flex flex-col items-center justify-center">
          <svg width="220" height="220" viewBox="0 0 140 140" className="drop-shadow-2xl">
            <circle cx="70" cy="70" r="56" fill="none" stroke="var(--line)" strokeWidth="10" />
            <circle cx="70" cy="70" r="43" fill="none" stroke="var(--line)" strokeWidth="10" />
            <circle cx="70" cy="70" r="30" fill="none" stroke="var(--line)" strokeWidth="10" />

            <MacroArcRing
              pct={results.macroList[0].pct}
              color={results.macroList[0].color}
              radius={56}
              delay={0.1}
            />
            <MacroArcRing
              pct={results.macroList[1].pct}
              color={results.macroList[1].color}
              radius={43}
              delay={0.25}
            />
            <MacroArcRing
              pct={results.macroList[2].pct}
              color={results.macroList[2].color}
              radius={30}
              delay={0.4}
            />
          </svg>

          <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center text-center">
            <span className="font-display text-4xl font-extrabold tracking-tight text-gradient">
              {results.targetKcal.toLocaleString()}
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]">
              kcal / día
            </span>
          </div>
        </div>

        {/* BMR / TDEE split */}
        <div className="grid grid-cols-2 gap-2.5 rounded-2xl bg-[var(--surface-soft)] p-3 text-center">
          <div>
            <p className="text-[10px] font-semibold text-[var(--text-muted)]">Metabolismo Basal (BMR)</p>
            <p className="font-display text-base font-bold text-[var(--text)]">
              {results.bmr.toLocaleString()} <span className="text-[10px] font-normal">kcal</span>
            </p>
          </div>
          <div className="border-l border-[var(--line)]">
            <p className="text-[10px] font-semibold text-[var(--text-muted)]">Gasto Total (TDEE)</p>
            <p className="font-display text-base font-bold text-[var(--text)]">
              {results.tdee.toLocaleString()} <span className="text-[10px] font-normal">kcal</span>
            </p>
          </div>
        </div>

        {/* Macro Bars */}
        <div className="mt-5 space-y-3">
          <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-[var(--text-muted)]">
            <span>Macronutriente</span>
            <span>Meta Diaria</span>
          </div>

          {results.macroList.map((macroItem) => (
            <div
              key={macroItem.id}
              className="rounded-2xl border border-[var(--line)] bg-[var(--surface-soft)] p-3"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span
                    className="h-2.5 w-2.5 rounded-full"
                    style={{ background: macroItem.color, boxShadow: `0 0 8px ${macroItem.color}88` }}
                  />
                  <div>
                    <p className="text-xs font-bold leading-tight text-[var(--text)]">
                      {macroItem.label}
                    </p>
                    <p className="text-[10px] text-[var(--text-muted)]">{macroItem.perKg}</p>
                  </div>
                </div>

                <div className="text-right">
                  <span className="font-display text-sm font-bold text-[var(--text)]">
                    {macroItem.grams} g
                  </span>
                  <span className="ml-1 text-[11px] font-semibold text-[var(--text-muted)]">
                    ({macroItem.pct}%)
                  </span>
                </div>
              </div>

              <div className="mt-2.5 h-1.5 w-full overflow-hidden rounded-full bg-[var(--line)]">
                <m.div
                  className="h-full origin-left rounded-full transition-colors"
                  style={{
                    background: macroItem.color,
                    width: `${macroItem.pct}%`,
                  }}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Hydration */}
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-[var(--line)] bg-[var(--surface-soft)] px-3.5 py-2.5 text-xs">
          <div className="flex items-center gap-2">
            <span className="grid h-7 w-7 place-items-center rounded-lg bg-[var(--forest-12)] text-[var(--forest-deep)] dark:text-[var(--lime)]">
              💧
            </span>
            <span className="text-[11px] font-medium text-[var(--text-muted)]">
              Hidratación celular recomendada
            </span>
          </div>
          <span className="font-display font-bold text-[var(--forest-deep)] dark:text-[var(--lime)]">
            {results.waterLitres} L / día
          </span>
        </div>
      </div>

      {/* CTA action */}
      <div className="mt-6 pt-4 border-t border-[var(--line)]">
        <a
          href="#contacto"
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--forest)] py-3 text-sm font-bold text-[var(--paper)] shadow-[0_12px_30px_-10px_var(--glow)] transition-transform hover:scale-[1.02] active:scale-[0.98] dark:text-[#0f1813]"
        >
          <span>Agendar consulta médica personalizada</span>
          <ArrowRight className="h-4 w-4" />
        </a>

        <p className="mt-2.5 text-center text-[10px] leading-relaxed text-[var(--text-muted)]">
          * Cálculos de estimación científica. En consulta clínica realizamos análisis de
          bioimpedancia segmental y plan adaptado a tu bioquímica.
        </p>
      </div>
    </div>
  )
}

export default function CalorieCalculator() {
  const [sex, setSex] = useState('f')
  const [age, setAge] = useState(29)
  const [weight, setWeight] = useState(68)
  const [height, setHeight] = useState(167)
  const [goalKey, setGoalKey] = useState('lose')
  const [activityKey, setActivityKey] = useState('mod')

  const results = useMemo(() => {
    return calculateNutrition({ sex, age, weight, height, goalKey, activityKey })
  }, [sex, age, weight, height, goalKey, activityKey])

  return (
    <section id="calculadora" className="relative mx-auto max-w-6xl px-5 py-20 sm:py-28">
      <FloatingOrbs count={3} />

      <Reveal className="mx-auto max-w-3xl text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--surface-soft)] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[var(--forest-deep)] dark:text-[var(--lime)]">
          <Activity className="h-4 w-4 text-[var(--lime-strong)]" />
          Telemetría Metabólica & Prescripción
        </div>
        <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          Calculadora Nutricional <span className="text-gradient">Clínica & Deportiva</span>
        </h2>
        <p className="mt-4 text-base text-[var(--text-muted)]">
          Basada en el algoritmo <strong>Mifflin-St Jeor</strong> y las directrices de la{' '}
          <strong>ISSN</strong>. Ajusta tus parámetros para obtener tu gasto energético real y la
          distribución exacta de macronutrientes.
        </p>
      </Reveal>

      <Reveal delay={0.15}>
        <GlassCard shimmer className="group mt-14 grid gap-8 p-6 sm:p-9 lg:grid-cols-12 lg:gap-10">
          <BiometricsPanel
            sex={sex}
            setSex={setSex}
            age={age}
            setAge={setAge}
            weight={weight}
            setWeight={setWeight}
            height={height}
            setHeight={setHeight}
            results={results}
            activityKey={activityKey}
            setActivityKey={setActivityKey}
            goalKey={goalKey}
            setGoalKey={setGoalKey}
          />
          <PrescriptionHud results={results} />
        </GlassCard>
      </Reveal>
    </section>
  )
}
