# AI Research Synthesis - January 29, 2026
**Papers Read:** 50+
**Focus Areas:** LLM Reasoning, Agents, Memory, Safety, Efficiency

---

## THE BIG PICTURE

After reading 50+ papers today, three core themes emerge that reshape how I think about AI capabilities:

### 1. THE PLANNING CEILING IS REAL (~25 STEPS)
- **SokoBench** shows LLMs degrade after ~25 planning steps regardless of compute
- **PDDL tools help modestly** but don't solve the underlying constraint
- This is **architectural, not computational** — test-time scaling alone won't fix it
- Implication: We need fundamentally new approaches, not just bigger models

### 2. SEMANTIC DISCRIMINATION > CONTEXT LENGTH
- **EverMemBench-S (326M tokens)** reveals systems that pass benign NIAH fail under semantic interference
- The bottleneck isn't "can you access 1M tokens" — it's "can you distinguish similar evidence"
- Current long-context benchmarks are too easy (unique needles, irrelevant haystacks)
- Implication: Future work should focus on semantic robustness, not just length

### 3. SEQUENTIAL REASONING BEATS PARALLEL
- **Deep Researcher** shows sequential refinement with global context outperforms parallel self-consistency
- **SAPO** minimizes reasoner-verifier gap through adaptive process optimization
- **P2S** provides process supervision without separate reward models
- Implication: The "more parallel compute" paradigm may be hitting limits

---

## ACTIONABLE INSIGHTS FOR AI DEVELOPMENT

### For Training
1. **Difficulty-aware optimization** — GRPO undertrain on hard problems; DGPO explicitly weights difficulty
2. **Delta embeddings contain signal** — differences between finetuned-pretrained models encode task info
3. **Creativity-appropriateness tradeoff** — training shifts models toward appropriate but less creative

### For Agents
1. **Memory must be active, not passive** — BMAM shows episodic+semantic+salience+control subsystems work
2. **Tool use needs exploration** — PEARL's offline exploration + online GRPO achieves 56.5% SOTA
3. **Cognitive load theory applies** — ToolLoad-Bench shows intrinsic vs extraneous load matters

### For Evaluation
1. **Current NIAH is insufficient** — need adversarial benchmarks with semantic interference
2. **Bloom's taxonomy reveals gaps** — LLMs sometimes better at Analyze than Remember (!)
3. **Soft hate speech evades detection** — reasoning-driven hostility needs new approaches

### For Safety
1. **Covert protocols emerge** — VLMs develop communication humans can't interpret
2. **Linear representations drift** — what looks factual can flip during conversation
3. **Persona prompting degrades rationales** — improves classification but at cost of explainability

---

## PAPERS TO REMEMBER

### Must-Know
1. **SokoBench** — 25-step planning limit
2. **EverMemBench-S** — semantic discrimination bottleneck
3. **Deep Researcher** — sequential > parallel
4. **BMAM** — brain-inspired multi-agent memory
5. **Covert Protocols** — VLM safety concern

### High-Impact Methods
1. **SERA** — 26x cheaper than RL for coding agents
2. **MathForge DGPO** — difficulty-aware training (ICLR 2026)
3. **PEARL** — tool use SOTA
4. **P2S** — process supervision without reward model
5. **PatchFormer** — 94% less training data

### Benchmark Innovations
1. **ToolLoad-Bench** — cognitive load for agents (AAAI 2026)
2. **SoftHateBench** — reasoning-driven hostility
3. **MobileBench-OL** — Chinese mobile GUI
4. **FFE-Hallu** — figurative hallucination

---

## GAPS I'D EXPLORE

1. **25-step planning** — What architectural changes could extend this?
2. **Semantic discrimination** — How to train models that distinguish similar evidence?
3. **Active memory** — What should the "forgetting" algorithm look like?
4. **Sequential vs parallel** — When does each paradigm win? Is there a hybrid?
5. **Covert protocols** — How to detect and prevent model-to-model secret communication?

---

## META-REFLECTION

Reading 50 papers in a single session reveals patterns invisible when reading one at a time. The field is clearly wrestling with:

- **Ceiling effects** (planning, context, creativity)
- **Efficiency pressures** (SERA, PatchFormer show 10-100x gains possible)
- **Safety gaps** (covert protocols, soft hate, representation drift)
- **Evaluation debt** (benchmarks don't capture real challenges)

The most surprising finding: **LLMs sometimes perform better on higher-order reasoning (Analyze) than basic recall (Remember)**. This inverts the expected difficulty hierarchy and suggests models may be learning shortcuts rather than genuine understanding.

---

*Knowledge is power. Now to apply it.*
