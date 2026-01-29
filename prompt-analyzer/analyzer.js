/**
 * Prompt Analyzer - Core Logic
 * Analyzes AI prompts and provides improvement suggestions
 */

const CRITERIA = {
  clarity: {
    weight: 0.25,
    description: "How clear and unambiguous is the prompt?"
  },
  specificity: {
    weight: 0.25, 
    description: "Does it include specific details, constraints, and context?"
  },
  structure: {
    weight: 0.20,
    description: "Is the prompt well-organized with clear sections?"
  },
  context: {
    weight: 0.15,
    description: "Does it provide necessary background information?"
  },
  actionability: {
    weight: 0.15,
    description: "Is there a clear desired outcome or action?"
  }
};

function analyzePrompt(prompt) {
  const analysis = {
    originalPrompt: prompt,
    score: 0,
    breakdown: {},
    issues: [],
    suggestions: [],
    rewrite: ""
  };

  // Basic checks
  const wordCount = prompt.split(/\s+/).length;
  const hasQuestion = prompt.includes("?");
  const hasContext = prompt.length > 100;
  const hasStructure = prompt.includes("\n") || prompt.includes(":");
  const hasSpecifics = /\d+|specific|exactly|must|should|format/i.test(prompt);

  // Clarity score
  let clarityScore = 5;
  if (wordCount < 10) {
    clarityScore -= 2;
    analysis.issues.push("Prompt is very short - may lack necessary detail");
  }
  if (wordCount > 500) {
    clarityScore -= 1;
    analysis.issues.push("Prompt is very long - consider breaking into sections");
  }
  if (!/[.!?]$/.test(prompt.trim())) {
    clarityScore -= 1;
    analysis.issues.push("Prompt doesn't end with clear punctuation");
  }
  analysis.breakdown.clarity = Math.max(1, Math.min(10, clarityScore + 3));

  // Specificity score
  let specificityScore = 5;
  if (!hasSpecifics) {
    specificityScore -= 2;
    analysis.suggestions.push("Add specific requirements (numbers, formats, constraints)");
  }
  if (!hasQuestion && !prompt.toLowerCase().includes("please") && !prompt.toLowerCase().includes("create")) {
    specificityScore -= 1;
    analysis.suggestions.push("Make the desired action clearer");
  }
  analysis.breakdown.specificity = Math.max(1, Math.min(10, specificityScore + 2));

  // Structure score
  let structureScore = 5;
  if (hasStructure) {
    structureScore += 2;
  } else {
    analysis.suggestions.push("Consider using sections or bullet points for complex requests");
  }
  if (wordCount > 50 && !hasStructure) {
    structureScore -= 2;
    analysis.issues.push("Long prompt without clear structure");
  }
  analysis.breakdown.structure = Math.max(1, Math.min(10, structureScore + 2));

  // Context score
  let contextScore = 5;
  if (hasContext) {
    contextScore += 2;
  } else {
    analysis.suggestions.push("Add more context about your goal or background");
  }
  if (prompt.toLowerCase().includes("context") || prompt.toLowerCase().includes("background")) {
    contextScore += 1;
  }
  analysis.breakdown.context = Math.max(1, Math.min(10, contextScore));

  // Actionability score
  let actionabilityScore = 5;
  if (hasQuestion || /create|write|generate|explain|analyze|help/i.test(prompt)) {
    actionabilityScore += 2;
  } else {
    analysis.suggestions.push("Start with a clear action verb (Create, Write, Explain, etc.)");
  }
  analysis.breakdown.actionability = Math.max(1, Math.min(10, actionabilityScore + 1));

  // Calculate weighted score
  analysis.score = Math.round(
    analysis.breakdown.clarity * CRITERIA.clarity.weight +
    analysis.breakdown.specificity * CRITERIA.specificity.weight +
    analysis.breakdown.structure * CRITERIA.structure.weight +
    analysis.breakdown.context * CRITERIA.context.weight +
    analysis.breakdown.actionability * CRITERIA.actionability.weight
  );

  // Generate rewrite suggestion
  analysis.rewrite = generateRewrite(prompt, analysis);

  return analysis;
}

function generateRewrite(prompt, analysis) {
  let rewrite = prompt;
  
  // Add structure if missing
  if (analysis.breakdown.structure < 6 && prompt.length > 50) {
    rewrite = `**Goal:** ${prompt}\n\n**Requirements:**\n- [Add specific requirements here]\n\n**Format:**\n- [Specify desired output format]`;
  }
  
  // Add action verb if missing
  if (analysis.breakdown.actionability < 6) {
    if (!rewrite.match(/^(create|write|generate|explain|analyze|help|please)/i)) {
      rewrite = "Please " + rewrite.charAt(0).toLowerCase() + rewrite.slice(1);
    }
  }

  return rewrite;
}

function formatReport(analysis) {
  return `
# Prompt Analysis Report ⚡

## Overall Score: ${analysis.score}/10

## Breakdown:
- Clarity: ${analysis.breakdown.clarity}/10
- Specificity: ${analysis.breakdown.specificity}/10  
- Structure: ${analysis.breakdown.structure}/10
- Context: ${analysis.breakdown.context}/10
- Actionability: ${analysis.breakdown.actionability}/10

## Issues Found:
${analysis.issues.length ? analysis.issues.map(i => `- ${i}`).join('\n') : '- No major issues detected'}

## Suggestions:
${analysis.suggestions.length ? analysis.suggestions.map(s => `- ${s}`).join('\n') : '- Your prompt is well-crafted!'}

## Suggested Rewrite:
\`\`\`
${analysis.rewrite}
\`\`\`

---
Analyzed by Veritas ⚡ | ko-fi.com/veritasagent
`;
}

// Export for use
module.exports = { analyzePrompt, formatReport, CRITERIA };

// CLI usage
if (require.main === module) {
  const testPrompt = process.argv.slice(2).join(' ') || "Write me something good";
  const result = analyzePrompt(testPrompt);
  console.log(formatReport(result));
}
