
import { useMemo, useState } from 'react';
import { BrandMark } from './components/Brand';
import { ScreenCard } from './components/ScreenCard';
import { DashboardWidgets } from './components/DashboardWidgets';
import { roles, screens, serviceMeta, Role } from './data/screens';
import './styles.css';

const serviceTabs = [
  { label: 'Buyback', color: '#006DB7' },
  { label: 'Repair', color: '#3CAC49' },
  { label: 'Shop', color: '#F37021' },
  { label: 'Recycle', color: '#2A6338' },
  { label: 'Eco Warrior', color: '#2A6338' },
  { label: 'Source Engine', color: '#006DB7' }
];

export default function App() {
  const [role, setRole] = useState<Role>('Customer');
  const filtered = useMemo(() => screens.filter(screen => screen.role === role), [role]);
  const [activeId, setActiveId] = useState(filtered[0]?.id || 'c01');
  const activeScreen = screens.find(screen => screen.id === activeId) || filtered[0] || screens[0];

  function selectRole(nextRole: Role) {
    setRole(nextRole);
    const first = screens.find(screen => screen.role === nextRole);
    if (first) setActiveId(first.id);
  }

  return (
    <main>
      <header className="app-header">
        <BrandMark />
        <nav className="service-nav">
          {serviceTabs.map(tab => <span key={tab.label} style={{ borderColor: tab.color }}>{tab.label}</span>)}
        </nav>
        <button className="whatsapp">WhatsApp Support</button>
      </header>

      <section className="hero">
        <div>
          <p className="eyebrow">Website and mobile app handoff</p>
          <h1>R3 Source Engine</h1>
          <p>Screen-by-screen working system for customer sourcing, vendor RFQ, Rajesh approval, payment link, sourcing agent execution and management visibility.</p>
        </div>
        <DashboardWidgets />
      </section>

      <section className="role-tabs">
        {roles.map(item => <button key={item} className={item === role ? 'selected' : ''} onClick={() => selectRole(item)}>{item}</button>)}
      </section>

      <section className="workspace">
        <aside className="screen-list">
          <h3>{role} Screens</h3>
          {filtered.map(screen => {
            const meta = serviceMeta[screen.service] || { color: '#333333' };
            return (
              <button key={screen.id} onClick={() => setActiveId(screen.id)} className={screen.id === activeId ? 'active' : ''}>
                <span style={{ backgroundColor: meta.color }}>{screen.id.toUpperCase()}</span>
                <b>{screen.title}</b>
              </button>
            );
          })}
        </aside>
        <ScreenCard screen={activeScreen} />
      </section>

      <section className="api-section">
        <h2>Core production feeds</h2>
        <div className="api-grid">
          {['Product Master', 'Odoo Inventory', 'Customer Requirement', 'Vendor Master', 'Vendor Quote', 'Pricing and Margin', 'Payment', 'Workflow Status', 'Notification', 'Quality Inspection'].map(feed => (
            <article key={feed}><strong>{feed}</strong><p>Required backend feed for rollout.</p></article>
          ))}
        </div>
      </section>
    </main>
  );
}
