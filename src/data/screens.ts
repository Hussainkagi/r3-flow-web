export type Role = 'Customer' | 'Vendor' | 'Admin' | 'Sourcing Agent' | 'Management';
export type ScreenSpec = {
  id: string;
  role: Role;
  service: string;
  title: string;
  subtitle: string;
  progress: string[];
  activeStep: number;
  primaryCta: string;
  secondaryCta: string;
  fields: string[];
  states: string[];
  feed: string[];
  notes: string;
};

export const roles: Role[] = ["Customer", "Vendor", "Admin", "Sourcing Agent", "Management"];
export const serviceMeta: Record<string, { label: string; color: string }> = {
  "Source": {
    "label": "Source for Me",
    "color": "#006DB7"
  },
  "Shop": {
    "label": "Shop",
    "color": "#F37021"
  },
  "Account": {
    "label": "Account",
    "color": "#333333"
  },
  "Support": {
    "label": "Support",
    "color": "#2A6338"
  },
  "Vendor": {
    "label": "Vendor",
    "color": "#333333"
  },
  "Admin": {
    "label": "Admin",
    "color": "#2A6338"
  },
  "Agent": {
    "label": "Sourcing Agent",
    "color": "#006DB7"
  },
  "Management": {
    "label": "Management",
    "color": "#2A6338"
  }
};
export const screens: ScreenSpec[] = [
  {
    "id": "c01",
    "role": "Customer",
    "service": "Source",
    "title": "Home / Service Selection",
    "subtitle": "Route customer to Buyback, Repair, Shop, Recycle, Eco Warrior or Source for Me.",
    "progress": [
      "Choose service",
      "Product",
      "Quote",
      "Pay",
      "Track"
    ],
    "activeStep": 0,
    "primaryCta": "Start Source Request",
    "secondaryCta": "Continue Existing Request",
    "fields": [
      "Customer greeting",
      "Service cards",
      "Continue request cards",
      "Trust strip"
    ],
    "states": [
      "New visitor",
      "Returning customer",
      "Open request"
    ],
    "feed": [
      "Service catalogue",
      "Customer session",
      "Open requests"
    ],
    "notes": "Use R3 parent brand. Service cards use fixed R3 colours."
  },
  {
    "id": "c02",
    "role": "Customer",
    "service": "Account",
    "title": "Mobile Login / OTP",
    "subtitle": "Mobile-first login without password friction.",
    "progress": [
      "Mobile",
      "OTP",
      "Profile"
    ],
    "activeStep": 0,
    "primaryCta": "Send OTP",
    "secondaryCta": "Use WhatsApp Support",
    "fields": [
      "Mobile number",
      "Country code",
      "Terms acceptance"
    ],
    "states": [
      "OTP sent",
      "Invalid OTP",
      "New customer"
    ],
    "feed": [
      "Auth service",
      "Customer profile"
    ],
    "notes": "Same login logic can be reused for vendor RFQ links."
  },
  {
    "id": "c03",
    "role": "Customer",
    "service": "Source",
    "title": "Product Search",
    "subtitle": "Customer searches category, brand, model or product code.",
    "progress": [
      "Search",
      "Select",
      "Budget",
      "Submit"
    ],
    "activeStep": 0,
    "primaryCta": "Continue",
    "secondaryCta": "I Need Help",
    "fields": [
      "Search bar",
      "Popular categories",
      "Recent searches",
      "AI suggestions"
    ],
    "states": [
      "No result",
      "Inventory found",
      "Sourcing required"
    ],
    "feed": [
      "Product master",
      "Inventory feed",
      "Search analytics"
    ],
    "notes": "Search should accept natural language like iPhone 15 Pro 256GB A Grade."
  },
  {
    "id": "c04",
    "role": "Customer",
    "service": "Source",
    "title": "Product Detail Selection",
    "subtitle": "Collect variant and grade so the RFQ is accurate.",
    "progress": [
      "Search",
      "Select",
      "Budget",
      "Submit"
    ],
    "activeStep": 1,
    "primaryCta": "Check Availability",
    "secondaryCta": "Back",
    "fields": [
      "Category",
      "Brand",
      "Model",
      "Storage/RAM",
      "Colour",
      "Grade",
      "Quantity"
    ],
    "states": [
      "Variant required",
      "Model not in master",
      "Valid selection"
    ],
    "feed": [
      "Product master",
      "Grade master"
    ],
    "notes": "Show grade explanation through simple cards."
  },
  {
    "id": "c05",
    "role": "Customer",
    "service": "Shop",
    "title": "Inventory Match Result",
    "subtitle": "Show R3-owned stock before external sourcing.",
    "progress": [
      "Search",
      "Stock",
      "Decision"
    ],
    "activeStep": 1,
    "primaryCta": "Buy This Device",
    "secondaryCta": "Source Another Option",
    "fields": [
      "Product card",
      "Grade",
      "Warranty",
      "Price",
      "Delivery estimate",
      "Photos"
    ],
    "states": [
      "Stock found",
      "Similar stock found",
      "No stock"
    ],
    "feed": [
      "Odoo inventory",
      "Product media",
      "Warranty rules"
    ],
    "notes": "Shop Orange for buying available stock. Keep Source option secondary."
  },
  {
    "id": "c06",
    "role": "Customer",
    "service": "Source",
    "title": "Sourcing Request Form",
    "subtitle": "Create the requirement when stock is not available.",
    "progress": [
      "Product",
      "Budget",
      "Location",
      "Submit"
    ],
    "activeStep": 0,
    "primaryCta": "Create Request",
    "secondaryCta": "Save Draft",
    "fields": [
      "Product details",
      "Preferred grade",
      "Target budget",
      "Need by date",
      "Delivery location",
      "Notes"
    ],
    "states": [
      "Draft",
      "Submitted",
      "Missing info"
    ],
    "feed": [
      "Customer requirement feed"
    ],
    "notes": "This creates the internal RFQ request ID."
  },
  {
    "id": "c07",
    "role": "Customer",
    "service": "Source",
    "title": "Target Price and Reference",
    "subtitle": "Customer sees a realistic market reference and enters target budget.",
    "progress": [
      "Product",
      "Budget",
      "Location",
      "Submit"
    ],
    "activeStep": 1,
    "primaryCta": "Confirm Budget",
    "secondaryCta": "Ask R3 to Suggest",
    "fields": [
      "AI reference range",
      "Customer target price",
      "Grade impact note",
      "Validity note"
    ],
    "states": [
      "Below market",
      "Within range",
      "Premium request"
    ],
    "feed": [
      "Market reference feed",
      "Historical vendor quotes"
    ],
    "notes": "Avoid over-promising. Final value depends on source and testing."
  },
  {
    "id": "c08",
    "role": "Customer",
    "service": "Source",
    "title": "Request Submitted",
    "subtitle": "Show clear next step and expected response time.",
    "progress": [
      "Submitted",
      "Checking",
      "Offer",
      "Payment"
    ],
    "activeStep": 0,
    "primaryCta": "Track Request",
    "secondaryCta": "WhatsApp Support",
    "fields": [
      "Request ID",
      "Expected response time",
      "Submitted details",
      "Support link"
    ],
    "states": [
      "Submitted",
      "In admin review"
    ],
    "feed": [
      "Workflow status feed",
      "Notification feed"
    ],
    "notes": "Customer should not feel lost after submission."
  },
  {
    "id": "c09",
    "role": "Customer",
    "service": "Source",
    "title": "Offer Received",
    "subtitle": "Customer receives confirmed R3 offer after vendor quote and admin approval.",
    "progress": [
      "Submitted",
      "Checking",
      "Offer",
      "Payment"
    ],
    "activeStep": 2,
    "primaryCta": "Pay Now",
    "secondaryCta": "Request Call Back",
    "fields": [
      "Product",
      "Grade",
      "Final price",
      "Warranty/inspection note",
      "Offer expiry timer",
      "Photos/video"
    ],
    "states": [
      "Offer active",
      "Offer expired",
      "Revised offer"
    ],
    "feed": [
      "Final offer feed",
      "Payment feed",
      "Media feed"
    ],
    "notes": "This is the conversion screen. Keep one primary CTA only."
  },
  {
    "id": "c10",
    "role": "Customer",
    "service": "Source",
    "title": "Payment Link",
    "subtitle": "Customer pays to lock the sourced product.",
    "progress": [
      "Offer",
      "Payment",
      "Sourcing",
      "Delivery"
    ],
    "activeStep": 1,
    "primaryCta": "Complete Payment",
    "secondaryCta": "Change Payment Method",
    "fields": [
      "Amount",
      "Payment methods",
      "Expiry timer",
      "Terms",
      "Support"
    ],
    "states": [
      "Pending",
      "Paid",
      "Failed",
      "Expired"
    ],
    "feed": [
      "Payment gateway",
      "Order feed"
    ],
    "notes": "The payment link should expire in 1 to 2 hours unless admin extends it."
  },
  {
    "id": "c11",
    "role": "Customer",
    "service": "Source",
    "title": "Order Tracking",
    "subtitle": "Live status after payment.",
    "progress": [
      "Paid",
      "Sourcing",
      "Testing",
      "Dispatch",
      "Delivered"
    ],
    "activeStep": 1,
    "primaryCta": "Contact Support",
    "secondaryCta": "View Invoice",
    "fields": [
      "Timeline",
      "Assigned stage",
      "Delivery address",
      "Invoice",
      "Warranty card"
    ],
    "states": [
      "Sourcing",
      "QC",
      "Ready",
      "Delivered",
      "Issue found"
    ],
    "feed": [
      "Workflow status feed",
      "QC feed",
      "Delivery feed"
    ],
    "notes": "Use status labels from R3 guideline: Submitted, Under Review, Received, Testing, Payment Done."
  },
  {
    "id": "c12",
    "role": "Customer",
    "service": "Support",
    "title": "Support and WhatsApp",
    "subtitle": "Help customer at difficult steps.",
    "progress": [
      "Choose issue",
      "Connect",
      "Resolve"
    ],
    "activeStep": 0,
    "primaryCta": "WhatsApp R3",
    "secondaryCta": "Raise Ticket",
    "fields": [
      "Request ID",
      "Issue type",
      "Message",
      "Attachment"
    ],
    "states": [
      "Open",
      "Waiting",
      "Closed"
    ],
    "feed": [
      "Support feed",
      "WhatsApp log"
    ],
    "notes": "Support should be visible but not louder than primary business CTA."
  },
  {
    "id": "c13",
    "role": "Customer",
    "service": "Account",
    "title": "My Requests",
    "subtitle": "Customer sees all buy, repair, buyback, recycle and source requests.",
    "progress": [
      "Requests",
      "Details",
      "Action"
    ],
    "activeStep": 0,
    "primaryCta": "Start New Request",
    "secondaryCta": "Filter",
    "fields": [
      "Request cards",
      "Status badges",
      "Payment state",
      "Support link"
    ],
    "states": [
      "Empty",
      "Active",
      "Closed"
    ],
    "feed": [
      "Customer order history"
    ],
    "notes": "Use coloured badges by service type."
  },
  {
    "id": "v01",
    "role": "Vendor",
    "service": "Vendor",
    "title": "Vendor RFQ Link / OTP",
    "subtitle": "Vendor opens WhatsApp RFQ link and verifies mobile.",
    "progress": [
      "Open link",
      "Verify",
      "Quote"
    ],
    "activeStep": 0,
    "primaryCta": "Verify Mobile",
    "secondaryCta": "Call R3",
    "fields": [
      "Vendor mobile",
      "RFQ token",
      "OTP"
    ],
    "states": [
      "Token valid",
      "Token expired",
      "OTP failed"
    ],
    "feed": [
      "Vendor master",
      "RFQ feed",
      "Auth service"
    ],
    "notes": "No complicated login. Mobile identity must be embedded in the link."
  },
  {
    "id": "v02",
    "role": "Vendor",
    "service": "Vendor",
    "title": "Vendor RFQ Dashboard",
    "subtitle": "Vendor sees RFQs mapped to their category or brand.",
    "progress": [
      "Open",
      "Quote",
      "Submitted"
    ],
    "activeStep": 0,
    "primaryCta": "Open RFQ",
    "secondaryCta": "Update Profile",
    "fields": [
      "RFQ cards",
      "Deadline",
      "Product summary",
      "Status"
    ],
    "states": [
      "Open",
      "Quoted",
      "Closed"
    ],
    "feed": [
      "RFQ feed",
      "Vendor quote feed"
    ],
    "notes": "Keep it mobile-friendly because most vendors will use phone."
  },
  {
    "id": "v03",
    "role": "Vendor",
    "service": "Vendor",
    "title": "RFQ Detail",
    "subtitle": "Vendor understands product need before quoting.",
    "progress": [
      "Review",
      "Price",
      "Submit"
    ],
    "activeStep": 0,
    "primaryCta": "Submit Price",
    "secondaryCta": "Not Available",
    "fields": [
      "Product details",
      "Required grade",
      "Target price",
      "Quantity",
      "Deadline",
      "R3 note"
    ],
    "states": [
      "Available",
      "Need clarification",
      "Not available"
    ],
    "feed": [
      "Customer requirement feed",
      "RFQ feed"
    ],
    "notes": "Hide customer personal details from vendor unless required."
  },
  {
    "id": "v04",
    "role": "Vendor",
    "service": "Vendor",
    "title": "Submit Quote",
    "subtitle": "Vendor submits available price and proof.",
    "progress": [
      "Review",
      "Price",
      "Submit"
    ],
    "activeStep": 1,
    "primaryCta": "Submit Quote",
    "secondaryCta": "Save Draft",
    "fields": [
      "Quoted price",
      "Available quantity",
      "Condition/grade",
      "Warranty note",
      "Photos",
      "Video link",
      "Remarks"
    ],
    "states": [
      "Draft",
      "Submitted",
      "Validation error"
    ],
    "feed": [
      "Vendor quote feed",
      "Media upload"
    ],
    "notes": "Vendor quote must be timestamped and tied to salesperson mobile."
  },
  {
    "id": "v05",
    "role": "Vendor",
    "service": "Vendor",
    "title": "Quote Submitted",
    "subtitle": "Confirmation after vendor response.",
    "progress": [
      "Review",
      "Price",
      "Submitted"
    ],
    "activeStep": 2,
    "primaryCta": "View Other RFQs",
    "secondaryCta": "Edit Before Deadline",
    "fields": [
      "Quote reference",
      "Submitted amount",
      "Validity",
      "Status"
    ],
    "states": [
      "Submitted",
      "Selected",
      "Rejected",
      "Expired"
    ],
    "feed": [
      "Vendor quote feed"
    ],
    "notes": "Allow edit only until admin locks quote."
  },
  {
    "id": "v06",
    "role": "Vendor",
    "service": "Vendor",
    "title": "Vendor Profile and Mapping",
    "subtitle": "Maintain categories, brands and salesperson details.",
    "progress": [
      "Profile",
      "Mapping",
      "SLA"
    ],
    "activeStep": 0,
    "primaryCta": "Save Profile",
    "secondaryCta": "Request Category Addition",
    "fields": [
      "Vendor name",
      "Salesperson name",
      "Mobile",
      "Email",
      "Categories",
      "Brands",
      "Cities",
      "SLA"
    ],
    "states": [
      "Active",
      "Paused",
      "Needs verification"
    ],
    "feed": [
      "Vendor master"
    ],
    "notes": "Admin controls final approval of category mapping."
  },
  {
    "id": "a01",
    "role": "Admin",
    "service": "Admin",
    "title": "Admin Login",
    "subtitle": "Role-based entry for Rajesh, management and tech team.",
    "progress": [
      "Login",
      "Role",
      "Dashboard"
    ],
    "activeStep": 0,
    "primaryCta": "Login",
    "secondaryCta": "Forgot Access",
    "fields": [
      "Email/mobile",
      "OTP/password",
      "Role"
    ],
    "states": [
      "Authenticated",
      "Unauthorized",
      "Role required"
    ],
    "feed": [
      "Auth service",
      "Role permission feed"
    ],
    "notes": "Every action must be auditable."
  },
  {
    "id": "a02",
    "role": "Admin",
    "service": "Admin",
    "title": "Admin Dashboard",
    "subtitle": "Daily command center for sourcing requests and conversions.",
    "progress": [
      "Inbox",
      "RFQ",
      "Offer",
      "Payment",
      "Sourcing"
    ],
    "activeStep": 0,
    "primaryCta": "Open Pending Requests",
    "secondaryCta": "Export Report",
    "fields": [
      "New requests",
      "RFQs sent",
      "Quotes received",
      "Payment pending",
      "Sourcing pending",
      "SLA alerts"
    ],
    "states": [
      "Normal",
      "SLA breach",
      "High priority"
    ],
    "feed": [
      "Workflow status feed",
      "Payment feed",
      "Notification feed"
    ],
    "notes": "This is Rajesh daily operating screen."
  },
  {
    "id": "a03",
    "role": "Admin",
    "service": "Admin",
    "title": "Customer Request Inbox",
    "subtitle": "All new sourcing requirements in one queue.",
    "progress": [
      "Inbox",
      "Review",
      "Route"
    ],
    "activeStep": 0,
    "primaryCta": "Review Request",
    "secondaryCta": "Bulk Assign",
    "fields": [
      "Request ID",
      "Customer",
      "Product",
      "Target price",
      "Source channel",
      "Age",
      "Owner"
    ],
    "states": [
      "New",
      "Under review",
      "Waiting customer"
    ],
    "feed": [
      "Customer requirement feed"
    ],
    "notes": "Sort by SLA and payment potential."
  },
  {
    "id": "a04",
    "role": "Admin",
    "service": "Admin",
    "title": "Request Detail",
    "subtitle": "Full view of customer requirement before RFQ.",
    "progress": [
      "Review",
      "Inventory",
      "RFQ"
    ],
    "activeStep": 0,
    "primaryCta": "Check Inventory",
    "secondaryCta": "Ask Customer",
    "fields": [
      "Customer info",
      "Product details",
      "Budget",
      "Location",
      "Notes",
      "History"
    ],
    "states": [
      "Complete",
      "Missing variant",
      "Needs call"
    ],
    "feed": [
      "Customer requirement feed",
      "Customer history"
    ],
    "notes": "Do not send unclear RFQ to vendor."
  },
  {
    "id": "a05",
    "role": "Admin",
    "service": "Admin",
    "title": "Inventory Match",
    "subtitle": "Check R3 stock before going to external vendors.",
    "progress": [
      "Review",
      "Inventory",
      "RFQ"
    ],
    "activeStep": 1,
    "primaryCta": "Offer R3 Stock",
    "secondaryCta": "Proceed to RFQ",
    "fields": [
      "Exact stock",
      "Similar stock",
      "Cost",
      "Selling price",
      "Grade",
      "Location"
    ],
    "states": [
      "Exact match",
      "Similar match",
      "No match"
    ],
    "feed": [
      "Odoo inventory feed",
      "Product media"
    ],
    "notes": "Internal inventory should always be monetized first."
  },
  {
    "id": "a06",
    "role": "Admin",
    "service": "Admin",
    "title": "Vendor Mapping",
    "subtitle": "Map product request to relevant vendors and salespeople.",
    "progress": [
      "Inventory",
      "Vendors",
      "RFQ"
    ],
    "activeStep": 1,
    "primaryCta": "Select Vendors",
    "secondaryCta": "Edit Mapping",
    "fields": [
      "Category",
      "Brand",
      "Model",
      "Mapped vendors",
      "Salespeople",
      "Reliability score"
    ],
    "states": [
      "Mapped",
      "No vendor",
      "Needs approval"
    ],
    "feed": [
      "Vendor master",
      "Vendor performance feed"
    ],
    "notes": "Vendor mapping is the backbone of automation."
  },
  {
    "id": "a07",
    "role": "Admin",
    "service": "Admin",
    "title": "Send RFQ",
    "subtitle": "Send requirement to mapped vendors by WhatsApp/email.",
    "progress": [
      "Vendors",
      "RFQ",
      "Quotes"
    ],
    "activeStep": 1,
    "primaryCta": "Send RFQ",
    "secondaryCta": "Preview Message",
    "fields": [
      "Selected vendors",
      "Deadline",
      "Target range",
      "Internal note",
      "Message preview"
    ],
    "states": [
      "Ready",
      "Sent",
      "Failed notification"
    ],
    "feed": [
      "RFQ feed",
      "WhatsApp API",
      "Email service"
    ],
    "notes": "RFQ should contain enough detail but not reveal final customer price logic."
  },
  {
    "id": "a08",
    "role": "Admin",
    "service": "Admin",
    "title": "Vendor Quote Comparison",
    "subtitle": "Compare all vendor prices and proof in one screen.",
    "progress": [
      "RFQ",
      "Quotes",
      "Offer"
    ],
    "activeStep": 1,
    "primaryCta": "Select Quote",
    "secondaryCta": "Request Better Price",
    "fields": [
      "Vendor",
      "Price",
      "Grade",
      "Photos",
      "Availability",
      "SLA",
      "Reliability"
    ],
    "states": [
      "No quote",
      "Quotes received",
      "Quote selected"
    ],
    "feed": [
      "Vendor quote feed",
      "Media feed",
      "Vendor score"
    ],
    "notes": "Lowest price is not automatically best. Quality and reliability matter."
  },
  {
    "id": "a09",
    "role": "Admin",
    "service": "Admin",
    "title": "Margin Rule Screen",
    "subtitle": "Set category, brand and model level margin logic.",
    "progress": [
      "Quote",
      "Margin",
      "Offer"
    ],
    "activeStep": 1,
    "primaryCta": "Apply Margin",
    "secondaryCta": "Manual Override",
    "fields": [
      "Category margin",
      "Brand margin",
      "Model margin",
      "Fixed amount",
      "Percentage",
      "Minimum profit"
    ],
    "states": [
      "Rule applied",
      "Override required",
      "Below minimum margin"
    ],
    "feed": [
      "Pricing and margin feed"
    ],
    "notes": "Margin cannot be one flat percentage for all devices."
  },
  {
    "id": "a10",
    "role": "Admin",
    "service": "Admin",
    "title": "Final Offer Builder",
    "subtitle": "Build customer quote after selected vendor quote and margin.",
    "progress": [
      "Quote",
      "Margin",
      "Offer"
    ],
    "activeStep": 2,
    "primaryCta": "Send Offer",
    "secondaryCta": "Save Draft",
    "fields": [
      "Selected vendor price",
      "R3 margin",
      "Final customer price",
      "Warranty note",
      "Offer expiry",
      "Message preview"
    ],
    "states": [
      "Draft",
      "Ready",
      "Sent"
    ],
    "feed": [
      "Final offer feed",
      "Notification feed"
    ],
    "notes": "Offer screen should make profit visible before sending."
  },
  {
    "id": "a11",
    "role": "Admin",
    "service": "Admin",
    "title": "Customer Offer Approval",
    "subtitle": "Final human approval before customer sees offer.",
    "progress": [
      "Review",
      "Approve",
      "Send"
    ],
    "activeStep": 1,
    "primaryCta": "Approve and Send",
    "secondaryCta": "Revise Price",
    "fields": [
      "Customer price",
      "Margin",
      "Vendor proof",
      "Risk flags",
      "Validity"
    ],
    "states": [
      "Needs approval",
      "Approved",
      "Rejected"
    ],
    "feed": [
      "Approval feed",
      "Audit log"
    ],
    "notes": "Rajesh should control manual approval where required."
  },
  {
    "id": "a12",
    "role": "Admin",
    "service": "Admin",
    "title": "Payment Link Management",
    "subtitle": "Generate and track payment links.",
    "progress": [
      "Offer",
      "Payment",
      "Assign"
    ],
    "activeStep": 1,
    "primaryCta": "Generate Payment Link",
    "secondaryCta": "Extend Expiry",
    "fields": [
      "Amount",
      "Gateway",
      "Expiry",
      "Customer mobile",
      "Payment status"
    ],
    "states": [
      "Generated",
      "Clicked",
      "Paid",
      "Expired",
      "Failed"
    ],
    "feed": [
      "Payment gateway",
      "Payment feed"
    ],
    "notes": "Payment link expiry should be visible to customer and admin."
  },
  {
    "id": "a13",
    "role": "Admin",
    "service": "Admin",
    "title": "Assign Sourcing Agent",
    "subtitle": "Assign paid order to field/source owner.",
    "progress": [
      "Payment",
      "Assign",
      "Source"
    ],
    "activeStep": 1,
    "primaryCta": "Assign Task",
    "secondaryCta": "Auto Assign",
    "fields": [
      "Agent",
      "Vendor",
      "Product",
      "Budget",
      "Pickup location",
      "SLA"
    ],
    "states": [
      "Unassigned",
      "Assigned",
      "Accepted"
    ],
    "feed": [
      "Sourcing agent feed",
      "Workflow status feed"
    ],
    "notes": "Assigned person must update status daily."
  },
  {
    "id": "a14",
    "role": "Admin",
    "service": "Admin",
    "title": "Order Status Control",
    "subtitle": "Control operational stage and exceptions.",
    "progress": [
      "Assign",
      "Source",
      "QC",
      "Deliver"
    ],
    "activeStep": 2,
    "primaryCta": "Update Status",
    "secondaryCta": "Escalate",
    "fields": [
      "Current status",
      "Owner",
      "Next action",
      "SLA",
      "Exception reason"
    ],
    "states": [
      "On track",
      "Delayed",
      "Issue found",
      "Closed"
    ],
    "feed": [
      "Workflow status feed",
      "QC feed"
    ],
    "notes": "This prevents confusion on who owns each case."
  },
  {
    "id": "a15",
    "role": "Admin",
    "service": "Admin",
    "title": "Notification Log",
    "subtitle": "Debug WhatsApp/email delays and failures.",
    "progress": [
      "Event",
      "Message",
      "Delivery"
    ],
    "activeStep": 1,
    "primaryCta": "Resend Notification",
    "secondaryCta": "Open Raw Log",
    "fields": [
      "Event time",
      "Dubai time",
      "Server time",
      "Channel",
      "Status",
      "Error"
    ],
    "states": [
      "Delivered",
      "Failed",
      "Delayed",
      "Timezone mismatch"
    ],
    "feed": [
      "Notification feed",
      "Server logs"
    ],
    "notes": "This specifically addresses the WhatsApp timing issue discussed in the meeting."
  },
  {
    "id": "s01",
    "role": "Sourcing Agent",
    "service": "Agent",
    "title": "My Sourcing Tasks",
    "subtitle": "Agent sees paid sourcing jobs assigned to them.",
    "progress": [
      "Tasks",
      "Contact",
      "Inspect",
      "Close"
    ],
    "activeStep": 0,
    "primaryCta": "Open Task",
    "secondaryCta": "Filter",
    "fields": [
      "Task cards",
      "Priority",
      "Vendor",
      "SLA",
      "Status"
    ],
    "states": [
      "New",
      "Accepted",
      "In progress",
      "Overdue"
    ],
    "feed": [
      "Sourcing task feed"
    ],
    "notes": "This should be mobile-first for market work."
  },
  {
    "id": "s02",
    "role": "Sourcing Agent",
    "service": "Agent",
    "title": "Task Detail",
    "subtitle": "Clear job instruction with product and vendor details.",
    "progress": [
      "Tasks",
      "Contact",
      "Inspect",
      "Close"
    ],
    "activeStep": 1,
    "primaryCta": "Contact Vendor",
    "secondaryCta": "Report Issue",
    "fields": [
      "Product",
      "Approved price",
      "Vendor contact",
      "Pickup location",
      "Customer commitment"
    ],
    "states": [
      "Ready",
      "Need clarification",
      "Vendor unreachable"
    ],
    "feed": [
      "Sourcing task feed",
      "Vendor master"
    ],
    "notes": "Agent should see approved buy price, not customer margin logic."
  },
  {
    "id": "s03",
    "role": "Sourcing Agent",
    "service": "Agent",
    "title": "Vendor Visit / Contact Update",
    "subtitle": "Track call, visit and negotiation status.",
    "progress": [
      "Contact",
      "Visit",
      "Inspect"
    ],
    "activeStep": 1,
    "primaryCta": "Mark Available",
    "secondaryCta": "Mark Not Available",
    "fields": [
      "Call status",
      "Visit status",
      "Negotiated price",
      "Remarks",
      "Next follow-up"
    ],
    "states": [
      "Called",
      "Visited",
      "Price changed",
      "Not available"
    ],
    "feed": [
      "Activity feed",
      "Vendor quote feed"
    ],
    "notes": "This creates accountability for field work."
  },
  {
    "id": "s04",
    "role": "Sourcing Agent",
    "service": "Agent",
    "title": "Inspection Checklist",
    "subtitle": "Capture condition before purchase confirmation.",
    "progress": [
      "Visit",
      "Inspect",
      "Buy"
    ],
    "activeStep": 1,
    "primaryCta": "Pass Inspection",
    "secondaryCta": "Reject Device",
    "fields": [
      "Serial/IMEI",
      "Grade",
      "Battery health",
      "Functional tests",
      "Photos",
      "Video",
      "Defects"
    ],
    "states": [
      "Pass",
      "Fail",
      "Needs technician review"
    ],
    "feed": [
      "QC feed",
      "Media upload"
    ],
    "notes": "R3 trust layer depends on inspection discipline."
  },
  {
    "id": "s05",
    "role": "Sourcing Agent",
    "service": "Agent",
    "title": "Purchase / Handover Update",
    "subtitle": "Close sourcing loop after purchase or rejection.",
    "progress": [
      "Inspect",
      "Buy",
      "Handover"
    ],
    "activeStep": 2,
    "primaryCta": "Mark Purchased",
    "secondaryCta": "Upload Invoice",
    "fields": [
      "Final buy price",
      "Invoice",
      "Payment proof",
      "Handover status",
      "R3 receiving note"
    ],
    "states": [
      "Purchased",
      "Rejected",
      "Received by R3",
      "Closed"
    ],
    "feed": [
      "Purchase feed",
      "Accounting feed",
      "Workflow status feed"
    ],
    "notes": "Finance and inventory must receive clean proof."
  },
  {
    "id": "m01",
    "role": "Management",
    "service": "Management",
    "title": "Business Dashboard",
    "subtitle": "Management view of revenue, payment, sourcing and conversion.",
    "progress": [
      "Leads",
      "Quotes",
      "Payments",
      "Revenue"
    ],
    "activeStep": 3,
    "primaryCta": "Export MIS",
    "secondaryCta": "Open Exceptions",
    "fields": [
      "Lead count",
      "Quote conversion",
      "Paid orders",
      "Gross margin",
      "Failed cases",
      "Category split"
    ],
    "states": [
      "Daily",
      "Weekly",
      "Monthly"
    ],
    "feed": [
      "MIS feed",
      "Payment feed",
      "Margin feed"
    ],
    "notes": "This is the CEO/MIS visibility screen."
  },
  {
    "id": "m02",
    "role": "Management",
    "service": "Management",
    "title": "Team Performance",
    "subtitle": "Person-wise accountability and daily progress.",
    "progress": [
      "Assigned",
      "Pending",
      "Closed"
    ],
    "activeStep": 1,
    "primaryCta": "Send Reminder",
    "secondaryCta": "Download Report",
    "fields": [
      "Owner",
      "Assigned cases",
      "Pending",
      "Closed",
      "Delayed",
      "Conversion"
    ],
    "states": [
      "On track",
      "Delayed",
      "No update"
    ],
    "feed": [
      "Workflow status feed",
      "Activity log"
    ],
    "notes": "Shows whether each person is contributing to sales/result."
  }
];
