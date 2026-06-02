
import { screens, ScreenSpec } from '../data/screens';

export type CustomerRequirement = {
  id: string;
  customerName: string;
  mobile: string;
  category: string;
  brand: string;
  model: string;
  grade: string;
  targetPrice: number;
  status: string;
};

export type VendorQuote = {
  id: string;
  rfqId: string;
  vendor: string;
  salesperson: string;
  price: number;
  grade: string;
  availability: string;
  score: number;
};

export const sampleRequirements: CustomerRequirement[] = [
  { id: 'REQ-1001', customerName: 'Pankaj', mobile: '+971500000001', category: 'Mobile', brand: 'Apple', model: 'iPhone 15 Pro 256GB', grade: 'A', targetPrice: 2650, status: 'RFQ sent' },
  { id: 'REQ-1002', customerName: 'Fedor', mobile: '+971500000002', category: 'Laptop', brand: 'ASUS', model: 'ROG Zephyrus G16', grade: 'Open Box', targetPrice: 19000, status: 'Admin review' },
  { id: 'REQ-1003', customerName: 'Sarah', mobile: '+971500000003', category: 'Gaming', brand: 'Sony', model: 'PS5 Slim', grade: 'A+', targetPrice: 1350, status: 'Offer sent' }
];

export const sampleQuotes: VendorQuote[] = [
  { id: 'Q-501', rfqId: 'REQ-1001', vendor: 'Khurfakan Electronics', salesperson: 'Ahmed', price: 2380, grade: 'A', availability: 'Today', score: 92 },
  { id: 'Q-502', rfqId: 'REQ-1001', vendor: 'Gulf Crescent', salesperson: 'Bilal', price: 2420, grade: 'A+', availability: 'Tomorrow', score: 88 },
  { id: 'Q-503', rfqId: 'REQ-1001', vendor: 'Market Vendor 03', salesperson: 'Imran', price: 2320, grade: 'B', availability: 'Today', score: 67 }
];

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const api = {
  async getScreens(): Promise<ScreenSpec[]> {
    await delay(120);
    return screens;
  },
  async getCustomerRequirements(): Promise<CustomerRequirement[]> {
    await delay(120);
    return sampleRequirements;
  },
  async getVendorQuotes(rfqId: string): Promise<VendorQuote[]> {
    await delay(120);
    return sampleQuotes.filter(q => q.rfqId === rfqId);
  },
  async createPaymentLink(orderId: string, amount: number): Promise<{ url: string; expiresInMinutes: number }> {
    await delay(120);
    return { url: `https://pay.r3factory.com/${orderId}?amount=${amount}`, expiresInMinutes: 120 };
  }
};

// Production integration points:
// 1. Replace mock arrays with backend API calls.
// 2. Connect Odoo inventory and cost feed.
// 3. Connect WhatsApp Business API for RFQ and customer notifications.
// 4. Connect payment gateway for payment link generation.
// 5. Persist audit logs for admin overrides and vendor quotes.
