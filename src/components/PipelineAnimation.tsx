import { useEffect, useRef } from 'react';
import './pipeline.css';

const KPI_TARGETS = ['R$ 2.4M', '34.7%', '2.1%'];

export function PipelineAnimation() {
  const canvasRef = useRef<HTMLDivElement>(null);
  const replayBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const zones = Array.from(canvas.querySelectorAll<HTMLElement>('.trigger-zone'));
    const kpis = Array.from(canvas.querySelectorAll<HTMLElement>('.do-kpi-val'));
    const isMobile = () => window.innerWidth <= 768;

    function animateKPIs(baseDelay: number) {
      kpis.forEach((kpi, i) => {
        if (kpi.dataset.animated) return;
        kpi.textContent = '—';
        window.setTimeout(() => {
          kpi.style.transition = 'opacity 0.3s';
          kpi.style.opacity = '0';
          window.setTimeout(() => {
            kpi.textContent = KPI_TARGETS[i];
            kpi.style.opacity = '1';
            kpi.dataset.animated = 'true';
          }, 150);
        }, baseDelay + i * 200);
      });
    }

    const dashZone = canvas.querySelector<HTMLElement>('#zone-dashboard');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-active');
          canvas.classList.add('run-anim');
          if (entry.target === dashZone && !dashZone.dataset.kpiRan) {
            animateKPIs(isMobile() ? 800 : 3800);
            dashZone.dataset.kpiRan = 'true';
          }
        });
      },
      { threshold: isMobile() ? 0.25 : 0.1 }
    );

    zones.forEach((z) => observer.observe(z));

    const replay = replayBtnRef.current;
    const handleReplay = () => {
      zones.forEach((z) => z.classList.remove('is-active'));
      canvas.classList.remove('run-anim');
      kpis.forEach((kpi) => {
        delete kpi.dataset.animated;
        kpi.textContent = '—';
        kpi.style.opacity = '1';
      });
      if (dashZone) delete dashZone.dataset.kpiRan;
      // force reflow
      void canvas.offsetHeight;
      window.setTimeout(() => {
        canvas.classList.add('run-anim');
        zones.forEach((z) => z.classList.add('is-active'));
        animateKPIs(isMobile() ? 800 : 3800);
        if (dashZone) dashZone.dataset.kpiRan = 'true';
      }, 50);
    };
    replay?.addEventListener('click', handleReplay);

    return () => {
      observer.disconnect();
      replay?.removeEventListener('click', handleReplay);
    };
  }, []);

  return (
    <div className="pipeline-canvas" ref={canvasRef}>
      <span className="phase-label phase-label-left">Fontes de dados</span>
      <span className="phase-label phase-label-center">Processamento Eden</span>
      <span className="phase-label phase-label-right">Dashboard pronto</span>

      <button
        ref={replayBtnRef}
        type="button"
        className="replay-btn"
        aria-label="Repetir animação"
        title="Repetir animação"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          width={14}
          height={14}
        >
          <polyline points="1 4 1 10 7 10" />
          <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
        </svg>
      </button>

      <div className="pipeline-flow">
        {/* Zone 1 — chaotic sources */}
        <div className="chaos-zone trigger-zone" id="zone-sources">
          <div className="chaos-items">
            <svg
              className="chaos-wires-svg"
              viewBox="0 0 140 100"
              preserveAspectRatio="none"
              aria-hidden
            >
              <defs>
                <linearGradient id="wireFadeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="white" />
                  <stop offset="85%" stopColor="white" />
                  <stop offset="95%" stopColor="black" />
                </linearGradient>
                <mask id="wireMask">
                  <rect x="0" y="0" width="100%" height="100%" fill="url(#wireFadeGrad)" />
                </mask>
              </defs>
              <g className="chaos-tracks" fill="none" mask="url(#wireMask)">
                <path d="M 24,19 C 50,19 80,50 140,50" />
                <path d="M 20,51 C 50,51 80,50 140,50" />
                <path d="M 28,83 C 50,83 80,50 140,50" />
                <path d="M 72,25 C 95,25 105,50 140,50" />
                <path d="M 65,57 C 95,57 105,50 140,50" />
                <path d="M 75,89 C 95,89 105,50 140,50" />
              </g>
              <g className="chaos-pulses" fill="none" mask="url(#wireMask)">
                <path className="cp-1" d="M 24,19 C 50,19 80,50 140,50" />
                <path className="cp-2" d="M 20,51 C 50,51 80,50 140,50" />
                <path className="cp-3" d="M 28,83 C 50,83 80,50 140,50" />
                <path className="cp-4" d="M 72,25 C 95,25 105,50 140,50" />
                <path className="cp-5" d="M 65,57 C 95,57 105,50 140,50" />
                <path className="cp-6" d="M 75,89 C 95,89 105,50 140,50" />
              </g>
            </svg>

            <div className="chaos-item">
              <div className="ci-icon" style={{ background: 'rgba(33,115,70,.18)' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#217346" strokeWidth={2}>
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="8" y1="13" x2="16" y2="13" />
                  <line x1="8" y1="17" x2="16" y2="17" />
                </svg>
              </div>
              <div className="ci-text">
                <span className="ci-name">Excel</span>
                <span className="ci-detail">21 arquivos</span>
              </div>
            </div>

            <div className="chaos-item">
              <div className="ci-icon" style={{ background: 'rgba(59,130,246,.18)' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth={2}>
                  <ellipse cx="12" cy="5" rx="9" ry="3" />
                  <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
                  <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
                </svg>
              </div>
              <div className="ci-text">
                <span className="ci-name">SQL Database</span>
                <span className="ci-detail">Queries</span>
              </div>
            </div>

            <div className="chaos-item">
              <div className="ci-icon" style={{ background: 'rgba(168,85,247,.18)' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#A855F7" strokeWidth={2}>
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
              </div>
              <div className="ci-text">
                <span className="ci-name">ERP / SAP</span>
                <span className="ci-detail">Financeiro</span>
              </div>
            </div>

            <div className="chaos-item">
              <div className="ci-icon" style={{ background: 'rgba(234,179,8,.18)' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#EAB308" strokeWidth={2}>
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <div className="ci-text">
                <span className="ci-name">CRM</span>
                <span className="ci-detail">Salesforce</span>
              </div>
            </div>

            <div className="chaos-item">
              <div className="ci-icon" style={{ background: 'rgba(239,68,68,.18)' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth={2}>
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                </svg>
              </div>
              <div className="ci-text">
                <span className="ci-name">APIs REST</span>
                <span className="ci-detail">Endpoints</span>
              </div>
            </div>

            <div className="chaos-item">
              <div className="ci-icon" style={{ background: 'rgba(16,185,129,.18)' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth={2}>
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <line x1="3" y1="9" x2="21" y2="9" />
                  <line x1="3" y1="15" x2="21" y2="15" />
                  <line x1="9" y1="3" x2="9" y2="21" />
                </svg>
              </div>
              <div className="ci-text">
                <span className="ci-name">Google Sheets</span>
                <span className="ci-detail">Manuais</span>
              </div>
            </div>
          </div>
        </div>

        {/* Zone 2 — Eden core */}
        <div className="eden-core trigger-zone" id="zone-core">
          <div className="clean-data-stream" aria-hidden>
            <div className="clean-line" />
            <div className="clean-line" />
            <div className="clean-line" />
          </div>
          <div className="eden-orb">
            <div className="orb-ring" />
            <div className="orb-ring-2" />
            <div className="orb-core">
              <svg
                className="eden-logo-svg"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 200 200"
                aria-hidden
              >
                <path
                  d="M77.83,186.09c-17.17-9.9-34.02-19.8-51.03-29.42-8.47-4.79-12.56-11.62-12.48-21.41.18-23.42.17-46.83,0-70.25-.07-9.84,3.76-16.85,12.48-21.76,20.79-11.7,41.36-23.79,62.01-35.73,7.48-4.33,14.99-4.32,22.43-.04,21.11,12.16,42.17,24.41,63.29,36.56,7.53,4.33,11.16,10.73,11.14,19.4-.06,24.31-.09,48.62.02,72.92.04,8.88-3.74,15.29-11.36,19.67-21.13,12.14-42.24,24.31-63.33,36.51-7.25,4.19-14.46,4.2-21.7.13-3.76-2.11-7.48-4.32-11.47-6.6M93.2,159.78c0-16.55-.07-33.11.05-49.66.03-4.28-1.55-7.18-5.28-9.3-18.97-10.82-37.87-21.76-56.81-32.65-.82-.47-1.71-.81-2.9-1.36v3.42c0,21.65.07,43.3-.05,64.94-.02,4.49,1.8,7.34,5.62,9.52,18.87,10.74,37.67,21.59,56.5,32.4.82.47,1.69.86,2.88,1.46v-18.76M117.58,72.64c-18.76-10.82-37.53-21.65-56.99-32.87,0,9.73-.09,18.74.11,27.75.03,1.11,1.38,2.57,2.49,3.23,10.83,6.38,21.75,12.6,32.61,18.92,7.29,4.24,11.12,10.44,11.05,19.07-.1,12.48.13,24.95.02,37.43-.02,2.4.82,3.63,2.8,4.72,5.66,3.14,11.22,6.46,16.84,9.68,1.79,1.03,3.63,1.97,5.9,3.19,0-26.66.1-52.61-.18-78.56-.02-2.14-2.15-4.78-4.04-6.25-3.07-2.4-6.74-4.03-10.62-6.3M146.16,91.78c0,10.69-.03,21.38.04,32.07,0,1.16.21,2.93.94,3.37,8.01,4.78,16.14,9.35,24.62,14.19,0-1.74,0-2.87,0-3.99,0-24.18-.08-48.35.07-72.53.03-4.48-1.57-7.27-5.47-9.49-20.62-11.74-41.13-23.68-61.68-35.53-1.47-.85-2.99-1.61-4.74-2.54,0,9.25.1,18.03-.07,26.8-.04,2.18.89,3.09,2.57,4.04,10.7,6.08,21.36,12.23,32.01,18.4,6.92,4,11.32,9.7,11.69,17.97.1,2.16.02,4.33.02,7.25Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>
          <div className="eden-phase-text">
            <div className="ept-title">ETL & Modelagem</div>
            <div className="ept-sub">Dados organizados em tempo real</div>
          </div>
        </div>

        {/* Zone 3 — output dashboard */}
        <div className="output-zone trigger-zone" id="zone-dashboard">
          <div className="dash-output">
            <svg className="dash-glow-svg dgs-1" aria-hidden>
              <rect className="track" />
              <rect className="pulse p-1" />
            </svg>
            <svg className="dash-glow-svg dgs-2" aria-hidden>
              <rect className="track" />
              <rect className="pulse p-2" />
            </svg>
            <svg className="dash-glow-svg dgs-3" aria-hidden>
              <rect className="track" />
              <rect className="pulse p-3" />
            </svg>
            <div className="dash-content">
              <div className="do-topbar">
                <div className="do-dots">
                  <span />
                  <span />
                  <span />
                </div>
                <span className="do-title">Painel Analytics JR</span>
                <div className="do-live">
                  <span className="do-live-dot" />
                  LIVE
                </div>
              </div>
              <div className="do-kpis">
                <div className="do-kpi">
                  <div className="do-kpi-label">Receita</div>
                  <div className="do-kpi-val">R$ 2.4M</div>
                  <div className="do-kpi-change do-kpi-up">▲ 12.3%</div>
                </div>
                <div className="do-kpi">
                  <div className="do-kpi-label">Conversão</div>
                  <div className="do-kpi-val">34.7%</div>
                  <div className="do-kpi-change do-kpi-up">▲ 5.1%</div>
                </div>
                <div className="do-kpi">
                  <div className="do-kpi-label">Churn</div>
                  <div className="do-kpi-val">2.1%</div>
                  <div className="do-kpi-change do-kpi-down">▼ 0.8%</div>
                </div>
              </div>
              <div className="do-chart">
                <div className="do-chart-label">Performance mensal</div>
                <div className="do-bars" style={{ position: 'relative' }}>
                  <div className="do-bar" />
                  <div className="do-bar" />
                  <div className="do-bar" />
                  <div className="do-bar" />
                  <div className="do-bar" />
                  <div className="do-bar" />
                  <div className="do-bar" />
                  <div className="do-bar" />
                  <div className="do-bar" />
                  <div className="do-bar" />
                  <div className="do-bar" />
                  <div className="do-bar" />
                  <svg
                    className="do-line-svg"
                    preserveAspectRatio="none"
                    viewBox="0 0 100 60"
                  >
                    <path
                      className="do-line-path"
                      d="M 5,50 Q 15,20 25,40 T 50,15 T 75,30 T 95,10"
                    />
                  </svg>
                </div>
              </div>
              <div className="do-bottom">
                <div className="do-mini">
                  <div className="do-mini-label">Top Canais</div>
                  <div className="do-mini-bar">
                    <span className="do-mini-bar-name">Org.</span>
                    <div className="do-mini-bar-track">
                      <div className="do-mini-bar-fill" style={{ width: '78%' }} />
                    </div>
                  </div>
                  <div className="do-mini-bar">
                    <span className="do-mini-bar-name">Dir.</span>
                    <div className="do-mini-bar-track">
                      <div
                        className="do-mini-bar-fill"
                        style={{ width: '52%', background: 'rgba(255,255,255,.3)' }}
                      />
                    </div>
                  </div>
                  <div className="do-mini-bar">
                    <span className="do-mini-bar-name">Social</span>
                    <div className="do-mini-bar-track">
                      <div
                        className="do-mini-bar-fill"
                        style={{ width: '35%', background: 'rgba(20,184,166,.5)' }}
                      />
                    </div>
                  </div>
                </div>
                <div className="do-mini">
                  <div className="do-mini-label">Segmentação</div>
                  <div className="do-donut-wrap">
                    <svg width="36" height="36" viewBox="0 0 36 36">
                      <circle
                        cx="18"
                        cy="18"
                        r="14"
                        fill="none"
                        stroke="rgba(255,255,255,.05)"
                        strokeWidth="3"
                      />
                      <circle
                        className="donut-segment ds-1"
                        cx="18"
                        cy="18"
                        r="14"
                        fill="none"
                        stroke="#14B8A6"
                        strokeWidth="3"
                        strokeLinecap="round"
                        transform="rotate(-90 18 18)"
                      />
                      <circle
                        className="donut-segment ds-2"
                        cx="18"
                        cy="18"
                        r="14"
                        fill="none"
                        stroke="rgba(255,255,255,.3)"
                        strokeWidth="3"
                        strokeLinecap="round"
                        transform="rotate(79 18 18)"
                      />
                      <circle
                        className="donut-segment ds-3"
                        cx="18"
                        cy="18"
                        r="14"
                        fill="none"
                        stroke="rgba(255,255,255,.1)"
                        strokeWidth="3"
                        strokeLinecap="round"
                        transform="rotate(175 18 18)"
                      />
                    </svg>
                    <div className="do-donut-labels">
                      <span className="do-donut-label">
                        <span className="do-donut-dot" style={{ background: '#14B8A6' }} />
                        B2B 50%
                      </span>
                      <span className="do-donut-label">
                        <span
                          className="do-donut-dot"
                          style={{ background: 'rgba(255,255,255,.3)' }}
                        />
                        B2C 25%
                      </span>
                      <span className="do-donut-label">
                        <span
                          className="do-donut-dot"
                          style={{ background: 'rgba(255,255,255,.1)' }}
                        />
                        Gov 25%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
