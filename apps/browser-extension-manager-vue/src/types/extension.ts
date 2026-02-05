// Extension Item Type
export type Extension = {
  logoPath: string;
  name: string;
  description: string;
  isActive: boolean;
};

// Extension Tab ID type
export type ExtensionTabId = "all" | "active" | "inactive";
