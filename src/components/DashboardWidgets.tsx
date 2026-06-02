
import { sampleQuotes, sampleRequirements } from '../services/mockApi';

export function DashboardWidgets() {
  const paid = 7;
  const quoteRate = 68;
  const margin = 14.2;
  return (
    <div className="widget-grid">
      <Widget label="Open Requests" value={sampleRequirements.length.toString()} hint="Customer requirements" />
      <Widget label="Vendor Quotes" value={sampleQuotes.length.toString()} hint="Received today" />
      <Widget label="Paid Orders" value={paid.toString()} hint="Ready for sourcing" />
      <Widget label="Quote Conversion" value={`${quoteRate}%`} hint="Offer to payment" />
      <Widget label="Avg Margin" value={`${margin}%`} hint="After admin override" />
      <Widget label="SLA Alerts" value="4" hint="Needs Rajesh review" />
    </div>
  );
}

function Widget({ label, value, hint }: { label: string; value: string; hint: string }) {
  return <article className="widget"><span>{label}</span><strong>{value}</strong><p>{hint}</p></article>;
}
