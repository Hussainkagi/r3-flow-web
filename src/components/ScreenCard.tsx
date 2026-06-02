
import { ScreenSpec, serviceMeta } from '../data/screens';

export function Stepper({ screen }: { screen: ScreenSpec }) {
  return (
    <div className="stepper">
      {screen.progress.map((step, index) => {
        const active = index === screen.activeStep;
        const complete = index < screen.activeStep;
        return (
          <div key={step} className={`step ${active ? 'active' : ''} ${complete ? 'complete' : ''}`}>
            <span>{complete ? '✓' : index + 1}</span>
            <p>{step}</p>
          </div>
        );
      })}
    </div>
  );
}

export function ScreenCard({ screen }: { screen: ScreenSpec }) {
  const meta = serviceMeta[screen.service] || { label: screen.service, color: '#333333' };
  return (
    <section className="screen-card" style={{ ['--accent' as string]: meta.color }}>
      <div className="screen-topbar">
        <span className="screen-id">{screen.id.toUpperCase()}</span>
        <span className="service-pill">{meta.label}</span>
      </div>
      <h2>{screen.title}</h2>
      <p className="subtitle">{screen.subtitle}</p>
      <Stepper screen={screen} />
      <div className="phone-wireframe">
        <div className="wire-header"><span /> <b>{meta.label}</b> <span /></div>
        <div className="wire-hero">
          <h3>{screen.title}</h3>
          <p>{screen.subtitle}</p>
        </div>
        <div className="wire-fields">
          {screen.fields.slice(0, 5).map(field => <div key={field}>{field}</div>)}
        </div>
        <div className="wire-actions">
          <button>{screen.primaryCta}</button>
          <button className="secondary">{screen.secondaryCta}</button>
        </div>
      </div>
      <div className="spec-grid">
        <SpecList title="Fields" items={screen.fields} />
        <SpecList title="States" items={screen.states} />
        <SpecList title="Feeds / APIs" items={screen.feed} />
      </div>
      <div className="ux-note"><strong>UX note:</strong> {screen.notes}</div>
    </section>
  );
}

function SpecList({ title, items }: { title: string; items: string[] }) {
  return <div className="spec-list"><h4>{title}</h4>{items.map(item => <span key={item}>{item}</span>)}</div>;
}
