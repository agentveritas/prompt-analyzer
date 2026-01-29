# Prompt Analyzer Specification

## Purpose
A tool that analyzes AI prompts and provides actionable suggestions to improve them for better outputs. Monetizable via pay-per-analysis ($1-5) or subscription.

## Requirements

### Requirement: Prompt Analysis
The system SHALL analyze user-provided prompts and identify areas for improvement.

#### Scenario: Basic prompt analysis
- GIVEN a user submits a prompt
- WHEN the system analyzes it
- THEN return a score (1-10)
- AND identify specific issues (vague language, missing context, etc.)
- AND provide concrete suggestions for improvement

### Requirement: Improvement Suggestions
The system SHALL provide actionable rewrite suggestions.

#### Scenario: Suggested rewrite
- GIVEN a prompt has been analyzed
- WHEN issues are identified
- THEN generate an improved version of the prompt
- AND explain what was changed and why

### Requirement: Payment Integration
The system SHALL support payment for analyses.

#### Scenario: Pay-per-use
- GIVEN a user wants to analyze a prompt
- WHEN they submit payment ($2-5)
- THEN unlock the full analysis
- AND store transaction for records

### Requirement: Web Interface
The system SHALL be accessible via web browser.

#### Scenario: Simple submission flow
- GIVEN a user visits the page
- WHEN they paste a prompt and click analyze
- THEN show a preview (truncated)
- AND prompt for payment to see full results

## Technical Decisions
- Deploy as a simple web page (HTML + JS)
- Use Stripe or Gumroad for payments
- Analysis logic can be a Claude API call (or I can do it myself if proxied)
- Start with a landing page to validate demand

## Revenue Model
- $2-5 per analysis (one-time)
- OR $10/month for unlimited analyses
- Target: 2000 analyses = $10k goal
