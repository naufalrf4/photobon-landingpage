export interface Lead {
  name: string;
  phone: string;
  context: string;
  useCase: string;
  source: string;
  page: string;
  timestamp: string;
}

export function buildLeadObject(data: Partial<Lead>): Lead {
  return {
    name: data.name?.trim() || "Unknown",
    phone: data.phone?.trim() || "Unknown",
    context: data.context?.trim() || "Unknown",
    useCase: data.useCase || detectUseCase(data.context || ""),
    source: getSource(),
    page: window.location.pathname,
    timestamp: new Date().toISOString(),
  };
}

export function detectUseCase(context: string): string {
  const lower = context.toLowerCase();
  if (lower.includes("event") || lower.includes("acara") || lower.includes("wedding") || lower.includes("festival")) return "Event";
  if (lower.includes("cafe") || lower.includes("f&b") || lower.includes("resto") || lower.includes("tenant")) return "Cafe / F&B";
  if (lower.includes("brand") || lower.includes("aktivasi") || lower.includes("promosi")) return "Brand Activation";
  return "General Inquiry";
}

export function getSource(): string {
  if (typeof window === "undefined") return "unknown";
  
  const params = new URLSearchParams(window.location.search);
  const utmSource = params.get("utm_source");
  if (utmSource) {
    const utmMedium = params.get("utm_medium");
    const utmCampaign = params.get("utm_campaign");
    let src = utmSource;
    if (utmMedium) src += ` / ${utmMedium}`;
    if (utmCampaign) src += ` / ${utmCampaign}`;
    return src;
  }

  // Fallback to page-based origin if set
  if (typeof sessionStorage !== "undefined") {
    const sessionSource = sessionStorage.getItem("photobon_source");
    if (sessionSource) return sessionSource;
  }

  return "unknown";
}

export function trackSource() {
  if (typeof window === "undefined") return;
  const params = new URLSearchParams(window.location.search);
  if (params.has("utm_source")) return; // Prioritize UTM params on submit
  
  if (!sessionStorage.getItem("photobon_source")) {
    const path = window.location.pathname;
    let fallback = "unknown";
    if (path === "/") fallback = "homepage";
    else if (path.includes("/cara-kerja")) fallback = "cara-kerja";
    else if (path.includes("/penempatan")) fallback = "penempatan";
    else if (path.includes("/kontak")) fallback = "kontak";
    
    sessionStorage.setItem("photobon_source", fallback);
  }
}

export function saveLeadToLocal(lead: Lead) {
  if (typeof window === "undefined") return;
  try {
    const existing = localStorage.getItem("photobon_leads");
    const leads: Lead[] = existing ? JSON.parse(existing) : [];
    leads.unshift(lead);
    if (leads.length > 20) {
      leads.length = 20;
    }
    localStorage.setItem("photobon_leads", JSON.stringify(leads));
  } catch (e) {
    console.error("Failed to save lead to local storage", e);
  }
}
