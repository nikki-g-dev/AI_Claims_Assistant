export type ClaimStatus = "New" | "In Review" | "Needs Documents" | "Approved" | "Escalated";

export type ClaimType =
  | "Medical"
  | "Auto"
  | "Travel"
  | "Property"
  | "Prescription"
  | "Dental";

export interface ClaimInput {
  claimantName: string;
  policyNumber: string;
  claimType: ClaimType;
  amount: number;
  incidentDate: string;
  submittedDate: string;
  description: string;
  documents: string[];
  priorClaims: number;
  urgent: boolean;
}

export interface ClaimRecord extends ClaimInput {
  id: string;
  status: ClaimStatus;
}

export interface AnalysisResult {
  score: number;
  recommendation: "Approve Fast-Track" | "Manual Review" | "Escalate";
  summary: string;
  riskFlags: string[];
  missingDocuments: string[];
  nextActions: string[];
  estimatedResolution: string;
}
