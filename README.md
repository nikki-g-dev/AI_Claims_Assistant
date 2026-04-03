# GenAI Claims Assistant

A polished Next.js app for intake, triage, and decision support in an insurance-style claims workflow.

## What it does

- Captures core claim intake details
- Runs a local AI-style scoring engine for claim triage
- Flags missing documents and claim risk patterns
- Recommends fast-track, manual review, or escalation
- Shows a sample claim queue for dashboard context
- Exposes API routes for claims and analysis

## Stack

- Next.js 15
- React 19
- TypeScript
- CSS with a custom editorial dashboard theme

## Local setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

Create a `.env.local` file to enable OpenAI-powered claim summaries and document parsing:

```bash
OPENAI_API_KEY=your_api_key_here
# Optional override
OPENAI_MODEL=gpt-4o-mini
```

## API routes

- `GET /api/claims`
- `POST /api/analyze`
- `POST /api/claim-assistant`

Example payload for `/api/analyze`:

```json
{
  "claimantName": "Jordan Lee",
  "policyNumber": "POL-550217",
  "claimType": "Medical",
  "amount": 3200,
  "incidentDate": "2026-03-18",
  "submittedDate": "2026-03-20",
  "description": "Claimant visited urgent care after a workplace slip, including imaging, treatment, and prescribed medication for recovery over three days.",
  "documents": ["ID Proof", "Hospital Bill", "Physician Note"],
  "priorClaims": 1,
  "urgent": true
}
```

## Project structure

```text
app/
  api/analyze/route.ts
  api/claims/route.ts
  globals.css
  layout.tsx
  page.tsx
components/
  claim-form.tsx
lib/
  claim-analysis.ts
  sample-data.ts
  types.ts
```

## Notes

This project always includes a deterministic analysis engine, so the dashboard still works without external API keys. When `OPENAI_API_KEY` is configured, the app also sends claim details and uploaded documents to the OpenAI Responses API for richer summaries and document-level extraction. OpenAI’s file-input docs state that Responses API requests can send files as `input_file` items, including PDFs and Office documents, and that supported models can also accept image inputs for analysis. See [OpenAI file inputs](https://developers.openai.com/api/docs/guides/file-inputs).
