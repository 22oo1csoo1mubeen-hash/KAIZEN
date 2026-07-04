import { motion } from 'framer-motion';
import { Badge, PrimaryButton, fadeIn, fadeInUp } from '../ui';
import runnerImage from '../../../assets/LandingPage/Hero/Object.jpg';

/* =========================================================
   Hero Section
   ========================================================= */

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden bg-black">
      {/* ── Background Gradients ── */}
      <div className="pointer-events-none absolute inset-0">
        {/* Very subtle top ambient light */}
        <div
          className="absolute rounded-full"
          style={{
            top: 0,
            left: '50%',
            transform: 'translateX(-50%) translateY(-33%)',
            width: 700,
            height: 500,
            background: 'rgba(255,255,255,0.012)',
            filter: 'blur(150px)',
          }}
        />
        {/* Subtle light behind runner area */}
        <div
          className="absolute rounded-full"
          style={{
            right: '12%',
            bottom: '12%',
            width: 500,
            height: 500,
            background: 'rgba(255,255,255,0.018)',
            filter: 'blur(200px)',
          }}
        />
        {/* Floor lighting glow */}
        <div
          className="absolute rounded-full"
          style={{
            bottom: 0,
            left: '40%',
            width: 900,
            height: 140,
            background: 'rgba(255,255,255,0.035)',
            filter: 'blur(80px)',
          }}
        />
        {/* Soft vignette */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.4) 100%)',
          }}
        />
      </div>

      {/* ── Main Content ── */}
      <div className="relative z-10 flex flex-1 items-center">
        <div
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: 1440,
            margin: '0 auto',
            paddingLeft: '5%',
            paddingRight: '3%',
            paddingTop: 130,
            paddingBottom: 40,
          }}
        >
          {/* ── Left Column: Text Content ── */}
          <div
            style={{
              position: 'relative',
              zIndex: 20,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              width: '45%',
              flexShrink: 0,
            }}
          >
            {/* Badge */}
            <Badge delay={0.3} style={{ marginBottom: 12 }}>
              DISCIPLINE. FOCUS. GROWTH.
            </Badge>

            {/* Main Title */}
            <motion.h1
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              custom={0.5}
              className="font-display font-normal"
              style={{
                fontSize: 'clamp(170px, 10vw, 150px)',
                lineHeight: 0.9,
                letterSpacing: '-0.02em',
                marginBottom: 16,
                marginLeft: -10,
                background: 'linear-gradient(180deg, #ffffff 20%, #999999 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              KAIZEN
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              custom={0.7}
              style={{
                fontSize: 'clamp(26px, 2.8vw, 36px)',
                fontWeight: 400,
                letterSpacing: '-0.01em',
                color: 'rgba(255,255,255,0.75)',
                marginBottom: 22,
              }}
            >
              Built For Disciplined Minds.
            </motion.p>

            {/* Description */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              custom={0.9}
              style={{ marginBottom: 30 }}
            >
              <p style={{ fontSize: 16, lineHeight: 2.0, fontWeight: 300, color: 'rgba(255,255,255,0.65)' }}>
                Track habits. Achieve goals. Manage expenses.
              </p>
              <p style={{ fontSize: 16, lineHeight: 2.0, fontWeight: 300, color: 'rgba(255,255,255,0.65)' }}>
                Small improvements today, Extraordinary results tomorrow.
              </p>
            </motion.div>

            {/* CTA Button */}
            <PrimaryButton delay={1.1}>
              Start Your Journey
            </PrimaryButton>
          </div>

          {/* ── Right Column: Runner Illustration ── */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            custom={0.6}
            className="pointer-events-none"
            style={{
              position: 'absolute',
              right: 0,
              top: 0,
              bottom: 0,
              width: '78%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {/* Glow behind runner */}
            <div
              className="absolute rounded-full"
              style={{
                bottom: '20%',
                left: '50%',
                transform: 'translateX(-50%)',
                width: 400,
                height: 300,
                background: 'rgba(255,255,255,0.02)',
                filter: 'blur(100px)',
              }}
            />
            {/* Runner Image */}
            <img
              src={runnerImage}
              alt="Kaizen Runner"
              className="relative z-10"
              style={{
                width: '100%',
                maxWidth: 1200,
                objectFit: 'contain',
                mixBlendMode: 'lighten',
                marginTop: '3%', // margin on top to push down
                marginRight: '2%', // margin on right to push left
              }}
              draggable={false}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
