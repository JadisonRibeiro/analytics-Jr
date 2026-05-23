import { motion, type Variants } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import type { ComponentType, SVGProps } from 'react';
import { fadeUp, stagger, viewportOnce } from '@/utils/animations';

function DashboardArt(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 180 130" {...props}>
      <defs>
        <radialGradient id="dash-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.45" />
          <stop offset="60%" stopColor="#A78BFA" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#A78BFA" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="dash-card" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#EEF2FF" />
        </linearGradient>
        <linearGradient id="dash-b1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#93C5FD" />
          <stop offset="100%" stopColor="#1D4ED8" />
        </linearGradient>
        <linearGradient id="dash-b2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#C4B5FD" />
          <stop offset="100%" stopColor="#6D28D9" />
        </linearGradient>
        <linearGradient id="dash-b3" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#67E8F9" />
          <stop offset="100%" stopColor="#0E7490" />
        </linearGradient>
        <linearGradient id="dash-b4" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F9A8D4" />
          <stop offset="100%" stopColor="#BE185D" />
        </linearGradient>
        <linearGradient id="dash-b5" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FCD34D" />
          <stop offset="100%" stopColor="#B45309" />
        </linearGradient>
        <linearGradient id="dash-line" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#34D399" />
          <stop offset="100%" stopColor="#059669" />
        </linearGradient>
        <linearGradient id="dash-kpi" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#EEF2FF" />
          <stop offset="100%" stopColor="#C7D2FE" />
        </linearGradient>
      </defs>

      <ellipse cx="90" cy="68" rx="86" ry="56" fill="url(#dash-glow)" />
      <ellipse cx="90" cy="120" rx="60" ry="4" fill="#0F172A" opacity="0.18" />

      <g transform="rotate(-5 90 68)">
        <rect x="26" y="24" width="128" height="84" rx="12" fill="#0F172A" opacity="0.18" transform="translate(3 5)" />
        <rect x="26" y="24" width="128" height="84" rx="12" fill="url(#dash-card)" stroke="#E0E7FF" strokeWidth="1" />
        <path d="M26 24h128a0 0 0 0 1 0 0v12H26z" fill="#F8FAFC" />
        <path d="M26 36 L154 36" stroke="#E2E8F0" strokeWidth="1" />
        <circle cx="34" cy="30" r="1.8" fill="#EF4444" />
        <circle cx="40" cy="30" r="1.8" fill="#F59E0B" />
        <circle cx="46" cy="30" r="1.8" fill="#10B981" />

        <rect x="34" y="46" width="50" height="26" rx="6" fill="url(#dash-kpi)" />
        <path d="M40 60 L46 54 L52 58 L60 50 L70 56 L78 48" stroke="#3730A3" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="78" cy="48" r="2.2" fill="#3730A3" />
        <rect x="40" y="64" width="22" height="3" rx="1.5" fill="#A5B4FC" />

        <rect x="92" y="58" width="8" height="14" rx="2" fill="url(#dash-b1)" />
        <rect x="104" y="50" width="8" height="22" rx="2" fill="url(#dash-b2)" />
        <rect x="116" y="44" width="8" height="28" rx="2" fill="url(#dash-b3)" />
        <rect x="128" y="54" width="8" height="18" rx="2" fill="url(#dash-b4)" />
        <rect x="140" y="40" width="8" height="32" rx="2" fill="url(#dash-b5)" />

        <path d="M34 96 L54 88 L74 92 L94 82 L114 86 L134 76 L148 80" stroke="url(#dash-line)" strokeWidth="2.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="134" cy="76" r="3" fill="#10B981" />
        <circle cx="134" cy="76" r="6" fill="#10B981" opacity="0.25" />
      </g>

      <circle cx="12" cy="28" r="3" fill="#A78BFA" />
      <circle cx="170" cy="104" r="2.5" fill="#F472B6" />
      <circle cx="6" cy="90" r="2" fill="#22D3EE" />
      <circle cx="172" cy="40" r="2" fill="#FBBF24" />
    </svg>
  );
}

function ModelingArt(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 180 130" {...props}>
      <defs>
        <radialGradient id="model-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.32" />
          <stop offset="60%" stopColor="#8B5CF6" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="model-fact-top" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FCD34D" />
          <stop offset="100%" stopColor="#F59E0B" />
        </linearGradient>
        <linearGradient id="model-fact-side" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#D97706" />
          <stop offset="100%" stopColor="#B45309" />
        </linearGradient>
        <linearGradient id="model-blue" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#60A5FA" />
          <stop offset="100%" stopColor="#1E40AF" />
        </linearGradient>
        <linearGradient id="model-violet" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#C4B5FD" />
          <stop offset="100%" stopColor="#5B21B6" />
        </linearGradient>
        <linearGradient id="model-green" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#6EE7B7" />
          <stop offset="100%" stopColor="#047857" />
        </linearGradient>
        <linearGradient id="model-pink" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F9A8D4" />
          <stop offset="100%" stopColor="#BE185D" />
        </linearGradient>
      </defs>

      <ellipse cx="90" cy="68" rx="82" ry="54" fill="url(#model-glow)" />
      <ellipse cx="90" cy="120" rx="58" ry="4" fill="#0F172A" opacity="0.18" />

      <path d="M90 68 L34 26" stroke="#A78BFA" strokeWidth="1.8" strokeDasharray="3 4" opacity="0.75" />
      <path d="M90 68 L146 26" stroke="#A78BFA" strokeWidth="1.8" strokeDasharray="3 4" opacity="0.75" />
      <path d="M90 68 L34 110" stroke="#A78BFA" strokeWidth="1.8" strokeDasharray="3 4" opacity="0.75" />
      <path d="M90 68 L146 110" stroke="#A78BFA" strokeWidth="1.8" strokeDasharray="3 4" opacity="0.75" />

      <g transform="translate(14 12)">
        <rect x="0" y="0" width="40" height="24" rx="4" fill="url(#model-blue)" stroke="#1E3A8A" strokeWidth="1.2" />
        <rect x="0" y="0" width="40" height="6" rx="4" fill="#fff" opacity="0.22" />
        <line x1="0" y1="8" x2="40" y2="8" stroke="#1E3A8A" strokeWidth="1" opacity="0.6" />
        <line x1="5" y1="14" x2="34" y2="14" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" opacity="0.85" />
        <line x1="5" y1="18" x2="26" y2="18" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" opacity="0.65" />
      </g>
      <g transform="translate(126 12)">
        <rect x="0" y="0" width="40" height="24" rx="4" fill="url(#model-violet)" stroke="#4C1D95" strokeWidth="1.2" />
        <rect x="0" y="0" width="40" height="6" rx="4" fill="#fff" opacity="0.22" />
        <line x1="0" y1="8" x2="40" y2="8" stroke="#4C1D95" strokeWidth="1" opacity="0.6" />
        <line x1="5" y1="14" x2="34" y2="14" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" opacity="0.85" />
        <line x1="5" y1="18" x2="26" y2="18" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" opacity="0.65" />
      </g>
      <g transform="translate(14 96)">
        <rect x="0" y="0" width="40" height="24" rx="4" fill="url(#model-green)" stroke="#065F46" strokeWidth="1.2" />
        <rect x="0" y="0" width="40" height="6" rx="4" fill="#fff" opacity="0.22" />
        <line x1="0" y1="8" x2="40" y2="8" stroke="#065F46" strokeWidth="1" opacity="0.6" />
        <line x1="5" y1="14" x2="34" y2="14" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" opacity="0.85" />
        <line x1="5" y1="18" x2="26" y2="18" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" opacity="0.65" />
      </g>
      <g transform="translate(126 96)">
        <rect x="0" y="0" width="40" height="24" rx="4" fill="url(#model-pink)" stroke="#831843" strokeWidth="1.2" />
        <rect x="0" y="0" width="40" height="6" rx="4" fill="#fff" opacity="0.22" />
        <line x1="0" y1="8" x2="40" y2="8" stroke="#831843" strokeWidth="1" opacity="0.6" />
        <line x1="5" y1="14" x2="34" y2="14" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" opacity="0.85" />
        <line x1="5" y1="18" x2="26" y2="18" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" opacity="0.65" />
      </g>

      <g transform="translate(64 50)">
        <ellipse cx="26" cy="32" rx="22" ry="5" fill="#0F172A" opacity="0.22" />
        <rect x="0" y="0" width="52" height="32" rx="6" fill="url(#model-fact-top)" stroke="#92400E" strokeWidth="1.6" />
        <rect x="0" y="0" width="52" height="9" rx="6" fill="#fff" opacity="0.32" />
        <line x1="0" y1="11" x2="52" y2="11" stroke="#92400E" strokeWidth="1.2" opacity="0.65" />
        <line x1="6" y1="18" x2="40" y2="18" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" />
        <line x1="6" y1="24" x2="46" y2="24" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" opacity="0.85" />
      </g>

      <circle cx="8" cy="60" r="2" fill="#F472B6" />
      <circle cx="172" cy="68" r="2" fill="#22D3EE" />
    </svg>
  );
}

function EtlArt(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 180 130" {...props}>
      <defs>
        <radialGradient id="etl-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.35" />
          <stop offset="60%" stopColor="#10B981" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="etl-orb1" cx="35%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#93C5FD" />
          <stop offset="100%" stopColor="#1E40AF" />
        </radialGradient>
        <radialGradient id="etl-orb2" cx="35%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#C4B5FD" />
          <stop offset="100%" stopColor="#5B21B6" />
        </radialGradient>
        <radialGradient id="etl-orb3" cx="35%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#F9A8D4" />
          <stop offset="100%" stopColor="#BE185D" />
        </radialGradient>
        <radialGradient id="etl-out" cx="35%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#6EE7B7" />
          <stop offset="100%" stopColor="#047857" />
        </radialGradient>
        <linearGradient id="etl-pipe" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FCD34D" />
          <stop offset="100%" stopColor="#D97706" />
        </linearGradient>
        <linearGradient id="etl-flow" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#22D3EE" stopOpacity="0" />
          <stop offset="50%" stopColor="#22D3EE" />
          <stop offset="100%" stopColor="#10B981" />
        </linearGradient>
      </defs>

      <ellipse cx="90" cy="68" rx="86" ry="56" fill="url(#etl-glow)" />
      <ellipse cx="90" cy="120" rx="62" ry="4" fill="#0F172A" opacity="0.18" />

      <g transform="translate(20 28)">
        <circle cx="14" cy="14" r="14" fill="url(#etl-orb1)" />
        <circle cx="14" cy="14" r="14" fill="none" stroke="#1E3A8A" strokeWidth="0.8" opacity="0.4" />
        <ellipse cx="10" cy="9" rx="6" ry="3" fill="#fff" opacity="0.35" />
      </g>
      <g transform="translate(20 60)">
        <circle cx="14" cy="14" r="14" fill="url(#etl-orb2)" />
        <circle cx="14" cy="14" r="14" fill="none" stroke="#4C1D95" strokeWidth="0.8" opacity="0.4" />
        <ellipse cx="10" cy="9" rx="6" ry="3" fill="#fff" opacity="0.35" />
      </g>
      <g transform="translate(20 92)">
        <circle cx="14" cy="14" r="14" fill="url(#etl-orb3)" />
        <circle cx="14" cy="14" r="14" fill="none" stroke="#831843" strokeWidth="0.8" opacity="0.4" />
        <ellipse cx="10" cy="9" rx="6" ry="3" fill="#fff" opacity="0.35" />
      </g>

      <path d="M48 42 Q66 42 74 60" stroke="#94A3B8" strokeWidth="1.8" fill="none" strokeDasharray="3 4" />
      <path d="M48 74 L74 68" stroke="#94A3B8" strokeWidth="1.8" fill="none" strokeDasharray="3 4" />
      <path d="M48 106 Q66 106 74 80" stroke="#94A3B8" strokeWidth="1.8" fill="none" strokeDasharray="3 4" />

      <g transform="translate(74 48)">
        <rect x="0" y="0" width="44" height="36" rx="8" fill="#0F172A" opacity="0.2" transform="translate(2 4)" />
        <rect x="0" y="0" width="44" height="36" rx="8" fill="url(#etl-pipe)" stroke="#92400E" strokeWidth="1.5" />
        <rect x="0" y="0" width="44" height="10" rx="8" fill="#fff" opacity="0.32" />
        <path d="M10 14 L18 10 L18 26 L10 22 Z" fill="#fff" />
        <rect x="22" y="12" width="14" height="2.4" rx="1.2" fill="#fff" />
        <rect x="22" y="18" width="10" height="2.4" rx="1.2" fill="#fff" />
        <rect x="22" y="24" width="12" height="2.4" rx="1.2" fill="#fff" />
        <circle cx="34" cy="32" r="1.5" fill="#fff" opacity="0.6" />
      </g>

      <path d="M122 66 L150 66" stroke="url(#etl-flow)" strokeWidth="3" strokeLinecap="round" />
      <path d="M144 60 L150 66 L144 72" stroke="#10B981" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />

      <g transform="translate(146 52)">
        <circle cx="14" cy="14" r="14" fill="url(#etl-out)" />
        <circle cx="14" cy="14" r="14" fill="none" stroke="#065F46" strokeWidth="0.8" opacity="0.5" />
        <ellipse cx="10" cy="9" rx="6" ry="3" fill="#fff" opacity="0.35" />
        <path d="M9 14 L13 18 L20 11" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      <circle cx="64" cy="30" r="1.8" fill="#FBBF24" />
      <circle cx="62" cy="100" r="1.8" fill="#F472B6" />
      <circle cx="108" cy="32" r="2" fill="#22D3EE" opacity="0.8" />
    </svg>
  );
}

function AutomationArt(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 180 130" {...props}>
      <defs>
        <radialGradient id="auto-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.35" />
          <stop offset="60%" stopColor="#3B82F6" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="auto-doc" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#60A5FA" />
          <stop offset="100%" stopColor="#1D4ED8" />
        </linearGradient>
        <linearGradient id="auto-gear" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FCD34D" />
          <stop offset="100%" stopColor="#B45309" />
        </linearGradient>
        <radialGradient id="auto-clock" cx="35%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#FCD34D" />
          <stop offset="100%" stopColor="#D97706" />
        </radialGradient>
      </defs>

      <ellipse cx="90" cy="68" rx="86" ry="56" fill="url(#auto-glow)" />
      <ellipse cx="90" cy="120" rx="56" ry="4" fill="#0F172A" opacity="0.18" />

      <g transform="rotate(-6 70 65)">
        <rect x="30" y="22" width="72" height="92" rx="8" fill="#0F172A" opacity="0.2" transform="translate(3 5)" />
        <rect x="30" y="22" width="72" height="92" rx="8" fill="url(#auto-doc)" stroke="#1E3A8A" strokeWidth="1.4" />
        <path d="M84 22 L102 40 L84 40 Z" fill="#1E3A8A" />
        <path d="M84 22 L102 40 L84 40 Z" fill="#fff" opacity="0.15" />
        <rect x="40" y="46" width="36" height="3" rx="1.5" fill="#fff" opacity="0.95" />
        <rect x="40" y="54" width="50" height="3" rx="1.5" fill="#fff" opacity="0.7" />
        <rect x="40" y="62" width="44" height="3" rx="1.5" fill="#fff" opacity="0.7" />
        <rect x="40" y="84" width="7" height="16" rx="1.5" fill="#34D399" />
        <rect x="50" y="78" width="7" height="22" rx="1.5" fill="#FBBF24" />
        <rect x="60" y="72" width="7" height="28" rx="1.5" fill="#F472B6" />
        <rect x="70" y="80" width="7" height="20" rx="1.5" fill="#A78BFA" />
        <rect x="80" y="86" width="7" height="14" rx="1.5" fill="#22D3EE" />
      </g>

      <g transform="translate(122 30)">
        <circle cx="20" cy="20" r="22" fill="#0F172A" opacity="0.22" transform="translate(2 3)" />
        <g transform="rotate(15 20 20)">
          <rect x="17" y="-4" width="6" height="10" rx="1.5" fill="url(#auto-gear)" />
          <rect x="17" y="34" width="6" height="10" rx="1.5" fill="url(#auto-gear)" />
          <rect x="-4" y="17" width="10" height="6" rx="1.5" fill="url(#auto-gear)" />
          <rect x="34" y="17" width="10" height="6" rx="1.5" fill="url(#auto-gear)" />
          <rect x="17" y="-4" width="6" height="10" rx="1.5" fill="url(#auto-gear)" transform="rotate(45 20 20)" />
          <rect x="17" y="34" width="6" height="10" rx="1.5" fill="url(#auto-gear)" transform="rotate(45 20 20)" />
          <rect x="-4" y="17" width="10" height="6" rx="1.5" fill="url(#auto-gear)" transform="rotate(45 20 20)" />
          <rect x="34" y="17" width="10" height="6" rx="1.5" fill="url(#auto-gear)" transform="rotate(45 20 20)" />
        </g>
        <circle cx="20" cy="20" r="18" fill="url(#auto-gear)" stroke="#92400E" strokeWidth="1.4" />
        <ellipse cx="15" cy="14" rx="9" ry="4" fill="#fff" opacity="0.32" />
        <circle cx="20" cy="20" r="8" fill="#fff" />
        <circle cx="20" cy="20" r="8" stroke="#B45309" strokeWidth="1.5" fill="none" />
        <circle cx="20" cy="20" r="3" fill="#B45309" />
      </g>

      <g transform="translate(110 78)">
        <circle cx="14" cy="14" r="15" fill="#0F172A" opacity="0.2" transform="translate(1 2)" />
        <circle cx="14" cy="14" r="14" fill="url(#auto-clock)" stroke="#92400E" strokeWidth="1.4" />
        <ellipse cx="11" cy="10" rx="6" ry="3" fill="#fff" opacity="0.4" />
        <path d="M14 6 L14 14 L20 17" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" fill="none" />
      </g>

      <path d="M22 56 Q26 60 22 64 Q18 60 22 56 Z" fill="#FBBF24" />
      <path d="M22 84 Q25 87 22 90 Q19 87 22 84 Z" fill="#FBBF24" opacity="0.75" />
      <circle cx="160" cy="90" r="2" fill="#A78BFA" />
      <circle cx="166" cy="22" r="2" fill="#F472B6" />
    </svg>
  );
}

function SecurityArt(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 180 130" {...props}>
      <defs>
        <radialGradient id="sec-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#10B981" stopOpacity="0.4" />
          <stop offset="60%" stopColor="#06B6D4" stopOpacity="0.16" />
          <stop offset="100%" stopColor="#06B6D4" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="sec-shield" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#34D399" />
          <stop offset="55%" stopColor="#059669" />
          <stop offset="100%" stopColor="#065F46" />
        </linearGradient>
        <linearGradient id="sec-shine" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.55" />
          <stop offset="60%" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="sec-orb" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#A7F3D0" />
          <stop offset="100%" stopColor="#10B981" />
        </radialGradient>
      </defs>

      <ellipse cx="90" cy="68" rx="80" ry="54" fill="url(#sec-glow)" />
      <ellipse cx="90" cy="120" rx="46" ry="4" fill="#0F172A" opacity="0.2" />

      <g>
        <path
          d="M90 14 L46 28 V60 C46 84 66 102 90 110 C114 102 134 84 134 60 V28 Z"
          fill="#0F172A" opacity="0.22" transform="translate(2 4)"
        />
        <path
          d="M90 14 L46 28 V60 C46 84 66 102 90 110 C114 102 134 84 134 60 V28 Z"
          fill="url(#sec-shield)" stroke="#064E3B" strokeWidth="1.6"
        />
        <path
          d="M90 14 L46 28 V60 C46 84 66 102 90 110 Z"
          fill="url(#sec-shine)"
        />
        <ellipse cx="74" cy="34" rx="18" ry="6" fill="#fff" opacity="0.22" />

        <circle cx="90" cy="58" r="20" fill="url(#sec-orb)" stroke="#065F46" strokeWidth="1.4" />
        <ellipse cx="86" cy="51" rx="9" ry="4" fill="#fff" opacity="0.45" />
        <path d="M80 60 L88 70 L102 50" stroke="#fff" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      <circle cx="18" cy="40" r="2.4" fill="#34D399" opacity="0.75" />
      <circle cx="162" cy="58" r="2.4" fill="#34D399" opacity="0.75" />
      <circle cx="24" cy="80" r="1.6" fill="#06B6D4" />
      <circle cx="158" cy="92" r="1.6" fill="#06B6D4" />
      <path d="M10 64 Q14 68 10 72 Q6 68 10 64 Z" fill="#FBBF24" opacity="0.85" />
      <path d="M170 30 Q174 34 170 38 Q166 34 170 30 Z" fill="#FBBF24" opacity="0.85" />
    </svg>
  );
}

function TrainingArt(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 180 130" {...props}>
      <defs>
        <radialGradient id="train-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.4" />
          <stop offset="60%" stopColor="#EC4899" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#EC4899" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="train-monitor" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#334155" />
          <stop offset="100%" stopColor="#0F172A" />
        </linearGradient>
        <linearGradient id="train-screen" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F8FAFC" />
          <stop offset="100%" stopColor="#E0E7FF" />
        </linearGradient>
        <linearGradient id="train-cap-top" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#A78BFA" />
          <stop offset="100%" stopColor="#5B21B6" />
        </linearGradient>
        <linearGradient id="train-cap-bot" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#4C1D95" />
        </linearGradient>
        <linearGradient id="train-chart" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#60A5FA" />
          <stop offset="50%" stopColor="#A78BFA" />
          <stop offset="100%" stopColor="#F472B6" />
        </linearGradient>
        <linearGradient id="train-area" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#A78BFA" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#A78BFA" stopOpacity="0" />
        </linearGradient>
      </defs>

      <ellipse cx="90" cy="72" rx="84" ry="54" fill="url(#train-glow)" />
      <ellipse cx="90" cy="122" rx="56" ry="4" fill="#0F172A" opacity="0.2" />

      <g>
        <rect x="26" y="50" width="128" height="68" rx="6" fill="#0F172A" opacity="0.22" transform="translate(2 4)" />
        <rect x="26" y="50" width="128" height="68" rx="6" fill="url(#train-monitor)" stroke="#020617" strokeWidth="1.2" />
        <rect x="32" y="56" width="116" height="50" rx="3" fill="url(#train-screen)" />
        <rect x="74" y="118" width="32" height="6" rx="2" fill="#0F172A" />

        <path d="M40 92 L60 80 L78 84 L96 70 L114 74 L140 60 L140 100 L40 100 Z" fill="url(#train-area)" />
        <path d="M40 92 L60 80 L78 84 L96 70 L114 74 L140 60" stroke="url(#train-chart)" strokeWidth="2.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="40" cy="92" r="2.8" fill="#60A5FA" />
        <circle cx="60" cy="80" r="2.8" fill="#7C8AF6" />
        <circle cx="78" cy="84" r="2.8" fill="#9676F2" />
        <circle cx="96" cy="70" r="2.8" fill="#B065EE" />
        <circle cx="114" cy="74" r="2.8" fill="#CC54EA" />
        <circle cx="140" cy="60" r="3.2" fill="#F472B6" />
        <circle cx="140" cy="60" r="6" fill="#F472B6" opacity="0.3" />
      </g>

      <g transform="translate(36 0)">
        <path d="M54 8 L100 24 L54 40 L8 24 Z" fill="#0F172A" opacity="0.22" transform="translate(2 4)" />
        <path d="M54 8 L100 24 L54 40 L8 24 Z" fill="url(#train-cap-top)" stroke="#3B0764" strokeWidth="1.4" strokeLinejoin="round" />
        <path d="M54 8 L100 24 L54 40 Z" fill="#fff" opacity="0.14" />
        <path d="M24 30 V44 C24 49 36 53 54 53 S84 49 84 44 V30" fill="url(#train-cap-bot)" stroke="#3B0764" strokeWidth="1.4" strokeLinejoin="round" />
        <path d="M24 30 V44 C24 47 32 50 44 51 V32 Z" fill="#fff" opacity="0.16" />
        <circle cx="54" cy="24" r="2.6" fill="#3B0764" />
        <path d="M98 24 L98 38" stroke="#F59E0B" strokeWidth="2.2" strokeLinecap="round" />
        <circle cx="98" cy="42" r="4" fill="#F59E0B" />
        <ellipse cx="96" cy="40" rx="2" ry="1.2" fill="#fff" opacity="0.5" />
      </g>

      <path d="M14 64 Q18 68 14 72 Q10 68 14 64 Z" fill="#FBBF24" />
      <circle cx="172" cy="46" r="2.4" fill="#F472B6" />
      <circle cx="166" cy="100" r="2" fill="#A78BFA" />
      <circle cx="10" cy="100" r="2" fill="#22D3EE" />
    </svg>
  );
}

type Service = {
  art: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  desc: string;
  tag: string;
};

const services: Service[] = [
  {
    art: DashboardArt,
    title: 'Dashboards interativos',
    desc: 'Painéis visuais e acionáveis que respondem às perguntas certas em tempo real.',
    tag: 'Visualização',
  },
  {
    art: ModelingArt,
    title: 'Modelagem de dados',
    desc: 'Estruturas otimizadas em estrela, com relacionamentos robustos e performance alta.',
    tag: 'Arquitetura',
  },
  {
    art: EtlArt,
    title: 'ETL & integrações',
    desc: 'Pipelines que unificam ERP, CRM, planilhas e APIs em uma fonte única da verdade.',
    tag: 'Integração',
  },
  {
    art: AutomationArt,
    title: 'Automação de relatórios',
    desc: 'Entregas automáticas para stakeholders no formato e horário certos, sem esforço manual.',
    tag: 'Operação',
  },
  {
    art: SecurityArt,
    title: 'Governança & segurança',
    desc: 'RLS, versionamento e controle granular para proteger o ativo mais estratégico: seus dados.',
    tag: 'Segurança',
  },
  {
    art: TrainingArt,
    title: 'Treinamento & consultoria',
    desc: 'Capacitamos seu time para operar, evoluir e extrair o máximo da sua stack de BI.',
    tag: 'Capacitação',
  },
];

const SMOOTH = [0.22, 1, 0.36, 1] as const;

const cardReveal: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: SMOOTH },
  },
};

const cardStagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.04 } },
};

export function ServicesSection() {
  const cardVariants = cardReveal;
  const containerVariants = cardStagger;
  return (
    <section id="servicos" className="relative overflow-hidden bg-brand-black py-28">
      <div className="perspective-grid opacity-30" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center_top,rgba(192,192,192,0.08),transparent_55%)]" />

      <div className="relative mx-auto max-w-[1200px] px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={stagger}
          className="relative z-10 mb-16 text-center"
        >
          <motion.span variants={fadeUp} className="eyebrow text-gray-5">Serviços</motion.span>
          <motion.h2
            variants={fadeUp}
            className="mt-4 font-heading text-[clamp(2rem,4.5vw,3.5rem)] font-bold uppercase leading-[1.2] tracking-normal sm:leading-[1.05] sm:tracking-tight text-gradient-wg"
          >
            Análise completa,
            <br className="hidden sm:block" />
            do dado bruto à decisão.
          </motion.h2>
          <motion.p variants={fadeUp} className="mx-auto mt-6 max-w-[640px] text-lg text-gray-5">
            Seis frentes especializadas — combinadas sob medida para o momento da sua operação.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={containerVariants}
          className="relative z-10 mx-auto grid max-w-[1140px] grid-cols-1 gap-7 sm:gap-8 md:grid-cols-2 md:gap-6 lg:grid-cols-3"
        >
          {services.map((s) => (
            <motion.article
              key={s.title}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.35, ease: SMOOTH } }}
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-black/5 bg-white p-7 shadow-[0_24px_48px_-24px_rgba(0,0,0,0.55)] transition-all duration-500 hover:border-black/15 hover:shadow-[0_36px_72px_-24px_rgba(0,0,0,0.7)] sm:p-8"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 bg-gradient-to-r from-black via-black/70 to-transparent transition-transform duration-700 group-hover:scale-x-100"
              />

              <span
                aria-hidden
                className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{ background: 'radial-gradient(600px circle at 50% 0%, rgba(0,0,0,0.06), transparent 40%)' }}
              />

              <div className="relative flex h-36 w-full items-center justify-center sm:h-40">
                <s.art
                  aria-hidden
                  className="h-full w-auto max-w-[220px] transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="relative mt-6 flex justify-center">
                <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/80 px-3 py-1 font-heading text-[10px] font-semibold uppercase tracking-[0.18em] text-black/60 backdrop-blur-sm">
                  <span aria-hidden className="h-2 w-[2px] rounded-full bg-gradient-to-b from-black to-black/40" />
                  {s.tag}
                </span>
              </div>

              <h3 className="relative mt-4 text-center font-heading text-xl font-semibold text-black sm:text-[1.35rem]">
                {s.title}
              </h3>
              <p className="relative mt-3 text-center leading-relaxed text-black/60">{s.desc}</p>

              <div className="relative mt-auto flex items-center justify-between pt-7">
                <div className="relative h-[2px] w-full overflow-hidden rounded-full bg-black/5">
                  <span
                    aria-hidden
                    className="absolute inset-y-0 left-0 w-1/3 origin-left scale-x-0 bg-gradient-to-r from-black via-black/70 to-transparent transition-transform duration-[900ms] ease-out group-hover:scale-x-[3]"
                  />
                </div>
                <ArrowUpRight
                  size={18}
                  className="ml-4 shrink-0 -translate-x-1 text-black/40 transition-all duration-500 group-hover:translate-x-0 group-hover:text-black"
                />
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
