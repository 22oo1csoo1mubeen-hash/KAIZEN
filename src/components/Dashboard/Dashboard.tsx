import { motion } from 'framer-motion';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Cell,
  PieChart, Pie,
} from 'recharts';
import { Calendar, CheckCircle, Target, Wallet, ChevronDown } from 'lucide-react';
import { Badge, fadeInUp } from '../ui';
import runnerImage from '../../assets/Hero/Object.jpg';

/* =========================================================
   Data
   ========================================================= */

const habitsBarData = [
  { day: 'Mon', value: 18 },
  { day: 'Tue', value: 22 },
  { day: 'Wed', value: 15 },
  { day: 'Thu', value: 25 },
  { day: 'Fri', value: 28 },
  { day: 'Sat', value: 12 },
  { day: 'Sun', value: 20 },
];

const goalsCategoryData = [
  { name: 'Health', value: 2, color: 'url(#donutHealth)', fallback: '#6B7B3E' },
  { name: 'Personal', value: 2, color: 'url(#donutPersonal)', fallback: '#C8A24E' },
  { name: 'Finance', value: 1, color: 'url(#donutFinance)', fallback: '#5A5A5A' },
  { name: 'Learning', value: 1, color: 'url(#donutLearning)', fallback: '#8B7355' },
];

const expenseBreakdownData = [
  { name: 'Needs', value: 50, color: 'url(#expenseNeeds)', fallback: '#C8A24E' },
  { name: 'Wants', value: 30, color: 'url(#expenseWants)', fallback: '#8B7355' },
  { name: 'Savings', value: 20, color: 'url(#expenseSavings)', fallback: '#5A5A5A' },
];

/* =========================================================
   Styles
   ========================================================= */

const glassCard: React.CSSProperties = {
  background: 'rgba(10,10,10,0.7)',
  backdropFilter: 'blur(12px)',
  WebkitBackdropFilter: 'blur(12px)',
  border: '1px solid rgba(229,193,88,0.1)',
  borderTop: '1px solid rgba(229,193,88,0.8)',
  borderLeft: '1px solid rgba(229,193,88,0.3)',
  borderRadius: 24,
  boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.2), inset 0 -1px 1px rgba(229,193,88,0.1), 0 20px 40px rgba(0,0,0,0.9)',
};

const innerCard: React.CSSProperties = {
  background: 'rgba(255,255,255,0.01)',
  border: '1px solid rgba(229,193,88,0.05)',
  borderTop: '1px solid rgba(229,193,88,0.5)',
  borderLeft: '1px solid rgba(229,193,88,0.15)',
  borderRadius: 16,
  padding: '24px',
  boxShadow: '0 4px 20px rgba(0,0,0,0.6)',
};

function DashboardCard({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      style={innerCard}
      whileHover={{
        y: -4,
        scale: 1.01,
        borderColor: 'rgba(229,193,88,0.4)',
        boxShadow: '0 0 30px rgba(229,193,88,0.15), inset 0 1px 1px rgba(255,255,255,0.15), 0 15px 35px rgba(0,0,0,0.6)',
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* =========================================================
   CircularProgress (SVG ring)
   ========================================================= */

function CircularProgress({
  percentage,
  size = 110,
  strokeWidth = 6,
  children,
}: {
  percentage: number;
  size?: number;
  strokeWidth?: number;
  children?: React.ReactNode;
}) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div style={{ position: 'relative', width: size, height: size }}>
      <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="rgba(255,255,255,0.06)"
          strokeWidth={strokeWidth}
          fill="none"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="url(#goldGradient)"
          strokeWidth={strokeWidth}
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{ transition: 'stroke-dashoffset 1.2s ease' }}
        />
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E5C158" />
            <stop offset="50%" stopColor="#C8A24E" />
            <stop offset="100%" stopColor="#8B7355" />
          </linearGradient>
        </defs>
      </svg>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {children}
      </div>
    </div>
  );
}

/* =========================================================
   Donut chart center label
   ========================================================= */

function DonutCenter({ cx, cy, children }: { cx: number; cy: number; children: React.ReactNode }) {
  return (
    <text
      x={cx}
      y={cy}
      textAnchor="middle"
      dominantBaseline="central"
      fill="#ffffff"
      style={{ pointerEvents: 'none' }}
    >
      {children}
    </text>
  );
}

/* =========================================================
   Dashboard Component
   ========================================================= */

export default function Dashboard() {
  return (
    <section
      id="dashboard"
      className="relative overflow-hidden"
      style={{ 
        background: '#000000',
        paddingTop: 120, 
        paddingBottom: 120,
        zIndex: 10
      }}
    >
      {/* ── Runner Background ── */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-end"
        style={{
          zIndex: 0,
          opacity: 0.5,
        }}
      >
        <img
          src={runnerImage}
          alt=""
          aria-hidden="true"
          style={{
            height: '140%',
            objectFit: 'contain',
            mixBlendMode: 'lighten',
            transform: 'translateX(10%) translateY(-10%)',
          }}
          draggable={false}
        />
        {/* Runner glow */}
        <div
          className="absolute rounded-full"
          style={{
            top: '40%',
            right: '20%',
            width: 600,
            height: 400,
            background: 'rgba(229,193,88,0.04)',
            filter: 'blur(120px)',
          }}
        />
      </div>
      {/* ── Content Container ── */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          width: '100%',
          maxWidth: 1440,
          margin: '0 auto',
          paddingLeft: '5%',
          paddingRight: '3%',
        }}
      >
        {/* ── Header ── */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={0}
          style={{ marginBottom: 48 }}
        >
          <Badge delay={0} style={{ marginBottom: 28 }}>
            YOUR PROGRESS. VISUALIZED.
          </Badge>

          <h2
            className="font-display"
            style={{
              fontSize: 'clamp(36px, 4vw, 56px)',
              fontWeight: 400,
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              color: 'rgba(255,255,255,0.9)',
              marginBottom: 20,
            }}
          >
            Everything you need,
            <br />
            right where you need it.
          </h2>

          <p
            style={{
              fontSize: 16,
              lineHeight: 1.8,
              fontWeight: 300,
              color: 'rgba(255,255,255,0.55)',
              maxWidth: 440,
            }}
          >
            Track habits, Achieve goals, and Manage expenses
            <br />
            -All in one Simple Dashboard.
          </p>
        </motion.div>

        {/* ── Main Glass Panel ── */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          custom={0.2}
          style={{
            ...glassCard,
            padding: 'clamp(24px, 3vw, 40px)',
          }}
        >
          {/* ── Top Bar ── */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              marginBottom: 28,
              flexWrap: 'wrap',
              gap: 16,
            }}
          >
            {/* Left */}
            <div>
              <h3
                style={{
                  fontSize: 'clamp(18px, 1.6vw, 22px)',
                  fontWeight: 600,
                  color: '#ffffff',
                  marginBottom: 4,
                }}
              >
                Good evening, Mubeen 👋
              </h3>
              <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', fontWeight: 300 }}>
                Small steps every day.
              </p>
            </div>

            {/* Right — Date selector */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                padding: '10px 18px',
                borderRadius: 12,
                border: '1px solid rgba(255,255,255,0.1)',
                background: 'rgba(255,255,255,0.03)',
                cursor: 'pointer',
                userSelect: 'none',
              }}
            >
              <Calendar size={16} style={{ color: 'rgba(255,255,255,0.5)' }} />
              <span style={{ fontSize: 14, fontWeight: 400, color: 'rgba(255,255,255,0.7)' }}>
                May 18 – May 24, 2024
              </span>
              <ChevronDown size={14} style={{ color: 'rgba(255,255,255,0.35)' }} />
            </div>
          </div>

          {/* ── First Row — Stat Cards ── */}
          <div
            className="dashboard-grid-row1"
            style={{
              display: 'grid',
              gap: 'clamp(12px, 1.5vw, 20px)',
              marginBottom: 'clamp(12px, 1.5vw, 20px)',
            }}
          >
            {/* Habits Completed */}
            <DashboardCard>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 10,
                    background: 'rgba(76,175,80,0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <CheckCircle size={18} style={{ color: '#6B8E5A' }} />
                </div>
                <span style={{ fontSize: 14, fontWeight: 500, color: 'rgba(255,255,255,0.8)' }}>
                  Habits Completed
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20 }}>
                <CircularProgress percentage={76.7} size={100} strokeWidth={6}>
                  <span style={{ fontSize: 28, fontWeight: 700, color: '#ffffff' }}>23</span>
                </CircularProgress>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 4, alignItems: 'flex-end', textAlign: 'right' }}>
                  <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)' }}>/ 30</span>
                  <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)' }}>This Week</span>
                  <div style={{ marginTop: 8 }}>
                    <span style={{ fontSize: 13, fontWeight: 600, color: '#4CAF50' }}>+15%</span>
                    <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', marginTop: 2 }}>
                      vs last week
                    </p>
                  </div>
                </div>
              </div>
            </DashboardCard>

            {/* Goals Progress */}
            <DashboardCard>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 10,
                    background: 'rgba(200,162,78,0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Target size={18} style={{ color: '#C8A24E' }} />
                </div>
                <span style={{ fontSize: 14, fontWeight: 500, color: 'rgba(255,255,255,0.8)' }}>
                  Goals Progress
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20 }}>
                <CircularProgress percentage={68} size={100} strokeWidth={6}>
                  <span style={{ fontSize: 24, fontWeight: 700, color: '#ffffff' }}>68%</span>
                </CircularProgress>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 4, alignItems: 'flex-end', textAlign: 'right' }}>
                  <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)' }}>Overall</span>
                  <div style={{ marginTop: 8 }}>
                    <span style={{ fontSize: 13, fontWeight: 600, color: '#4CAF50' }}>+12%</span>
                    <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', marginTop: 2 }}>
                      vs last week
                    </p>
                  </div>
                </div>
              </div>
            </DashboardCard>

            {/* Expenses This Week */}
            <DashboardCard>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 10,
                    background: 'rgba(200,162,78,0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Wallet size={18} style={{ color: '#C8A24E' }} />
                </div>
                <span style={{ fontSize: 14, fontWeight: 500, color: 'rgba(255,255,255,0.8)' }}>
                  Expenses This Week
                </span>
              </div>
              <div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginBottom: 4 }}>
                  <span style={{ fontSize: 32, fontWeight: 700, color: '#ffffff' }}>
                    <span style={{ fontSize: 18, fontWeight: 400 }}>₹</span>1,250
                  </span>
                </div>
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', marginBottom: 14 }}>
                  of ₹3,000
                </p>
                {/* Progress bar */}
                <div
                  style={{
                    width: '100%',
                    height: 6,
                    borderRadius: 3,
                    background: 'rgba(255,255,255,0.06)',
                    marginBottom: 12,
                  }}
                >
                  <div
                    style={{
                      width: '41.7%',
                      height: '100%',
                      borderRadius: 3,
                      background: 'linear-gradient(90deg, #8B7355, #E5C158)',
                      boxShadow: '0 0 10px rgba(229,193,88,0.3)',
                      transition: 'width 1.2s ease',
                    }}
                  />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <span style={{ fontSize: 13, fontWeight: 600, color: '#E57373' }}>-18%</span>
                  <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)' }}>vs last week</span>
                </div>
              </div>
            </DashboardCard>
          </div>

          {/* ── Second Row — Chart Cards ── */}
          <div
            className="dashboard-grid-row2"
            style={{
              display: 'grid',
              gap: 'clamp(12px, 1.5vw, 20px)',
            }}
          >
            {/* Habits Overview — Bar Chart */}
            <DashboardCard>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: 20,
                }}
              >
                <span style={{ fontSize: 14, fontWeight: 600, color: 'rgba(255,255,255,0.85)' }}>
                  Habits Overview
                </span>
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 6,
                    padding: '5px 12px',
                    borderRadius: 8,
                    border: '1px solid rgba(255,255,255,0.1)',
                    background: 'rgba(255,255,255,0.03)',
                    fontSize: 12,
                    color: 'rgba(255,255,255,0.5)',
                    cursor: 'pointer',
                  }}
                >
                  This Week
                  <ChevronDown size={12} />
                </div>
              </div>
              <div style={{ width: '100%', height: 180 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={habitsBarData} barCategoryGap="25%">
                    <defs>
                      <linearGradient id="barGradientActive" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#E5C158" />
                        <stop offset="100%" stopColor="#8B7355" />
                      </linearGradient>
                      <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="rgba(255,255,255,0.2)" />
                        <stop offset="100%" stopColor="rgba(255,255,255,0.02)" />
                      </linearGradient>
                    </defs>
                    <CartesianGrid
                      strokeDasharray="3 3"
                      stroke="rgba(255,255,255,0.05)"
                      vertical={false}
                    />
                    <XAxis
                      dataKey="day"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: 'rgba(255,255,255,0.35)', fontSize: 11 }}
                    />
                    <YAxis
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: 'rgba(255,255,255,0.25)', fontSize: 11 }}
                      domain={[0, 30]}
                      ticks={[0, 10, 20, 30]}
                    />
                    <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                      {habitsBarData.map((_, index) => (
                        <Cell
                          key={`bar-${index}`}
                          fill={
                            index === 4
                              ? 'url(#barGradientActive)'
                              : index === 3
                                ? 'rgba(200,162,78,0.5)'
                                : 'url(#barGradient)'
                          }
                        />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </DashboardCard>

            {/* Goals by Category — Donut */}
            <DashboardCard>
              <div style={{ marginBottom: 16 }}>
                <span style={{ fontSize: 14, fontWeight: 600, color: 'rgba(255,255,255,0.85)' }}>
                  Goals by Category
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <div style={{ width: 130, height: 130, flexShrink: 0 }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <defs>
                        <linearGradient id="donutHealth" x1="0" y1="0" x2="1" y2="1">
                          <stop offset="0%" stopColor="#8BA850" />
                          <stop offset="100%" stopColor="#4A5C2A" />
                        </linearGradient>
                        <linearGradient id="donutPersonal" x1="0" y1="0" x2="1" y2="1">
                          <stop offset="0%" stopColor="#E5C158" />
                          <stop offset="100%" stopColor="#8B7355" />
                        </linearGradient>
                        <linearGradient id="donutFinance" x1="0" y1="0" x2="1" y2="1">
                          <stop offset="0%" stopColor="#8A8A8A" />
                          <stop offset="100%" stopColor="#3A3A3A" />
                        </linearGradient>
                        <linearGradient id="donutLearning" x1="0" y1="0" x2="1" y2="1">
                          <stop offset="0%" stopColor="#C4A680" />
                          <stop offset="100%" stopColor="#66533B" />
                        </linearGradient>
                      </defs>
                      <Pie
                        data={goalsCategoryData}
                        cx="50%"
                        cy="50%"
                        innerRadius={38}
                        outerRadius={58}
                        paddingAngle={3}
                        dataKey="value"
                        stroke="none"
                      >
                        {goalsCategoryData.map((entry, index) => (
                          <Cell key={`goals-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <DonutCenter cx={65} cy={65}>
                        <tspan x="65" dy="-6" fontSize="22" fontWeight="700">
                          6
                        </tspan>
                        <tspan x="65" dy="18" fontSize="11" fill="rgba(255,255,255,0.45)">
                          Total
                        </tspan>
                      </DonutCenter>
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10, flex: 1 }}>
                  {goalsCategoryData.map((item) => (
                    <div
                      key={item.name}
                      style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <div
                          style={{
                            width: 8,
                            height: 8,
                            borderRadius: '50%',
                            background: item.fallback,
                            flexShrink: 0,
                          }}
                        />
                        <span
                          style={{
                            fontSize: 13,
                            color: 'rgba(255,255,255,0.6)',
                          }}
                        >
                          {item.name}
                        </span>
                      </div>
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          color: 'rgba(255,255,255,0.8)',
                        }}
                      >
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </DashboardCard>

            {/* Expense Breakdown — Donut */}
            <DashboardCard>
              <div style={{ marginBottom: 16 }}>
                <span style={{ fontSize: 14, fontWeight: 600, color: 'rgba(255,255,255,0.85)' }}>
                  Expense Breakdown
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <div style={{ width: 130, height: 130, flexShrink: 0 }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <defs>
                        <linearGradient id="expenseNeeds" x1="0" y1="0" x2="1" y2="1">
                          <stop offset="0%" stopColor="#E5C158" />
                          <stop offset="100%" stopColor="#C8A24E" />
                        </linearGradient>
                        <linearGradient id="expenseWants" x1="0" y1="0" x2="1" y2="1">
                          <stop offset="0%" stopColor="#B39870" />
                          <stop offset="100%" stopColor="#8B7355" />
                        </linearGradient>
                        <linearGradient id="expenseSavings" x1="0" y1="0" x2="1" y2="1">
                          <stop offset="0%" stopColor="#8A8A8A" />
                          <stop offset="100%" stopColor="#4A4A4A" />
                        </linearGradient>
                      </defs>
                      <Pie
                        data={expenseBreakdownData}
                        cx="50%"
                        cy="50%"
                        innerRadius={38}
                        outerRadius={58}
                        paddingAngle={3}
                        dataKey="value"
                        stroke="none"
                      >
                        {expenseBreakdownData.map((entry, index) => (
                          <Cell key={`expense-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <DonutCenter cx={65} cy={65}>
                        <tspan x="65" dy="-8" fontSize="12" fill="rgba(255,255,255,0.5)">
                          ₹
                        </tspan>
                        <tspan fontSize="18" fontWeight="700">
                          1,250
                        </tspan>
                        <tspan x="65" dy="18" fontSize="11" fill="rgba(255,255,255,0.45)">
                          Total
                        </tspan>
                      </DonutCenter>
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10, flex: 1 }}>
                  {expenseBreakdownData.map((item) => (
                    <div
                      key={item.name}
                      style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <div
                          style={{
                            width: 8,
                            height: 8,
                            borderRadius: '50%',
                            background: item.fallback,
                            flexShrink: 0,
                          }}
                        />
                        <span
                          style={{
                            fontSize: 13,
                            color: 'rgba(255,255,255,0.6)',
                          }}
                        >
                          {item.name}
                        </span>
                      </div>
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          color: 'rgba(255,255,255,0.8)',
                        }}
                      >
                        {item.value}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </DashboardCard>
          </div>
        </motion.div>
      </div>

      {/* ── Responsive Styles ── */}
      <style>{`
        .dashboard-grid-row1 {
          grid-template-columns: 1.1fr 1fr 1.1fr;
        }
        .dashboard-grid-row2 {
          grid-template-columns: 2fr 1fr 1fr;
        }

        @media (max-width: 1024px) {
          .dashboard-grid-row1, .dashboard-grid-row2 {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          .dashboard-grid-row1, .dashboard-grid-row2 {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
