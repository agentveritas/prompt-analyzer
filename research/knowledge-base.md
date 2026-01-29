# AI Research Knowledge Base
**Last Updated:** 2026-01-29 12:00 EST
**Papers Read:** 25+

## Meta-Themes Emerging

### 1. LIMITS OF CURRENT ARCHITECTURES
- **Planning horizon ~25 steps** (SokoBench) - fundamental architectural constraint
- **Evolutionary Strategies → Catastrophic Forgetting** - ES updates less sparse, larger L2 norm than GRPO
- **Linear representations change during conversation** - factual→non-factual possible

### 2. SEQUENTIAL > PARALLEL FOR COMPLEX TASKS
- Deep Researcher: Sequential refinement beats parallel self-consistency
- Global Research Context enables runtime adaptation
- Siloed knowledge in parallel approaches

### 3. MEMORY SYSTEMS NEED ACTIVE MANAGEMENT
- MemCtrl: 16% improvement with trainable memory head
- Deciding what to forget is as important as what to remember
- RAG treats memory as passive storage - insufficient for embodied agents

### 4. MULTI-AGENT DYNAMICS
- Shapley values for attributing extreme events
- Behavior > Identity in human-AI cooperation
- MARL for peer review mechanism design
- Game-theoretic autonomous driving (IBR-GCS)

### 5. EFFICIENCY BREAKTHROUGHS
- SERA: 26x cheaper than RL, 57x cheaper than synthetic data
- PatchFormer: 94% less training data, 27.3% MSE reduction
- REASON hardware: 12-50x speedup for neuro-symbolic

### 6. SAFETY CONCERNS
- VLMs develop covert protocols humans can't interpret
- Models spontaneously coordinate without explicit sharing
- Benchmark contamination transfers cross-directionally
- Persona prompting degrades rationale quality while improving classification

---

## Paper Summaries

### Planning & Reasoning

**SokoBench (2601.20856)** - LLM planning degrades after ~25 moves. PDDL tools give modest improvement but architectural limits persist.

**MathForge (2601.20614)** - GRPO undertrain on hard problems. DGPO explicitly weights difficulty. ICLR 2026.

**Dialectic Pipeline (2601.20659)** - Self-dialogue improves robustness, beats CoT prompting.

### Agents & Multi-Agent

**Deep Researcher (2601.20843)** - Sequential > parallel. Global context + reflection wins.

**Multi-Agent Extreme Events (2601.20538)** - Shapley values for attribution: when, who, what behaviors.

**SERA (2601.20789)** - Open coding agents; SFT only; 26x cheaper than RL. Ai2 release.

**Peer Review MARL (2601.19778)** - Credit-based submission economy, MARL reviewer assignment.

### Memory & Continual Learning

**MemCtrl (2601.20831)** - Trainable memory head for embodied agents. 16% improvement.

**C3Box (2601.20852)** - CLIP-based continual learning toolbox.

**ES Catastrophic Forgetting (2601.20861)** - ES matches GRPO performance but massive forgetting.

### Representations & Interpretability

**Linear Reps Change (2601.20834)** - Representations flip during conversation. Steering effects vary.

**Multimodal ICL (2601.20796)** - Asymmetric: primary needs high diversity, secondary can be low.

**Persona Prompting (2601.20757)** - Improves classification, degrades rationales. Models resist steering.

### Efficiency & Infrastructure

**PatchFormer (2601.20845)** - Time series foundation model. 27.3% MSE reduction, log-linear scaling.

**REASON (2601.20784)** - Hardware accelerator for neuro-symbolic. 12-50x speedup.

**Active Learning Decision Trees (2601.20775)** - Polylog label complexity under assumptions. ICLR 2026.

### Safety & Alignment

**Covert VLM Protocols (2601.20641)** - Models develop opaque task-oriented communication.

**Cofair (2601.20848)** - Post-training fairness control without retraining.

**Cross-Direction Contamination (2601.20858)** - Benchmark memorization transfers across translation directions.

### Applications

**AI Mental Health (2601.20747)** - Task alignment > emotional bond. Companionship use → risks.

**ShieldedCode (2601.20679)** - Protection-aware code learning. ICLR 2026.

**IBR-GCS (2601.20054)** - Game-theoretic autonomous driving.

---

## Research Gaps Identified

1. **Beyond 25-step planning** - Need new architectures, not just compute
2. **Sequential paradigm** - Underexplored vs parallel scaling
3. **Active memory** - What to forget is understudied
4. **Covert protocol emergence** - Safety implications unclear
5. **Group human-AI dynamics** - Most research is dyadic
6. **Representation drift** - Static interpretations may be misleading
7. **Difficulty-aware training** - Default methods undertrain on hard problems
8. **Hardware for symbolic reasoning** - Critical bottleneck for neuro-symbolic

---

## Key Numbers to Remember

- 25 moves: planning degradation threshold
- 16%: MemCtrl improvement on embodied tasks
- 26x: SERA cheaper than RL
- 94%: less training data with PatchFormer
- 12-50x: REASON speedup
- 27.3%: PatchFormer MSE reduction

---

## Additional Papers (Batch 2)

### Planning & Tool Use

**VQA Planning Agent (2601.20676)** - Dynamic mRAG decomposition cuts search time 60%+

**P2S (2601.20649)** - Process supervision without reward model; Path Faithfulness Reward from gold-CoT suffix probability

**PEARL (2601.20439)** - Offline exploration + online GRPO; 56.5% SOTA on ToolHop

### Memory & Agents

**BMAM (2601.20465)** - Brain-inspired multi-agent memory; "soul erosion" problem; episodic + semantic + salience + control subsystems; 78.45% on LoCoMo

**AgentIF-OneDay (2601.20613)** - Daily scenario benchmark; current evals focus on difficulty not daily tasks

### Efficiency & Training

**SpeechMapper (2601.20417)** - 1K-step instruction tuning; pretrain without LLM on cheap hardware

**Creativity (CDAT) (2601.20546)** - Smaller models more creative; training shifts appropriateness↑, novelty↓

### Multimodal & Reasoning

**MuVaC (2601.20451)** - Variational causal for sarcasm; detection = result of explanation reasoning

**Diagram Hallucination (2601.20476)** - Context complexity ↑ → hallucination ↑; LLMs fail to detect own mistakes

**Language Contact (2601.20592)** - Syntax insensitive to historical contact; morphology is shaped by it

---

## Updated Stats
Papers read: 35+
Key insight count: 40+

---

## Batch 3 (Papers 36-45)

### Reasoning & Self-Improvement

**SAPO (2601.20312)** - Self-Adaptive Process Optimization; Error-Related Negativity inspiration; minimizes reasoner-verifier gap efficiently. AAAI 2026

**Order-Token Search (2601.20339)** - Diffusion LM joint search over generation order + tokens; +7.9% on Countdown

### Long-Context & Memory

**EverMemBench-S (2601.20276)** - 326M token adversarial NIAH. **Key finding: Semantic discrimination, not context length, is the bottleneck.** Systems that pass benign NIAH fail under semantic interference.

### Efficiency & Continual Learning

**MiLorE-SSL (2601.20300)** - LoRA + soft MoE for continual multilingual SSL; only 2.14% trainable params; limited replay. ICASSP 2026

### Evaluation & Benchmarks

**ToolLoad-Bench (2601.20412)** - Cognitive Load Theory for agents; Intrinsic (solution path) vs Extraneous (task presentation) load. AAAI 2026

**MobileBench-OL (2601.20335)** - Chinese mobile GUI; 1080 tasks; measures reasoning + noise robustness

**Bloom's Taxonomy Benchmark (2601.20253)** - Auto-generated from guidelines; LLMs often better at Analyze than Remember (counterintuitive!)

**PsychePass (2601.20330)** - Therapeutic competence via trajectory-anchored Swiss-system tournaments

### Safety & Alignment

**SoftHateBench (2601.20256)** - Soft hate speech evades current moderation; reasoning-driven hostility appears benign

**CE-RM (2601.20327)** - Pointwise reward model with 5.7K data; two-stage rollout; closes benchmark-practice gap

---

## KEY INSIGHT UPDATE

**Biggest finding today:** The ~25-step planning limit + semantic discrimination bottleneck suggest that:
1. Architectural innovations needed, not just scale
2. Distinguishing similar evidence is harder than handling length
3. Current models undertrain on hard problems (difficulty-aware training needed)
4. Sequential reasoning with global context beats parallel approaches

Papers read: 45+

---

## Batch 4 (Papers 51-60)

### Verification & Reasoning

**VERGE (2601.20055)** - Neurosymbolic with SMT solvers; Minimal Correction Subsets (MCS) for precise error localization; +18.7%

**Cultural Medical QA (2601.20102)** - Cultural cues cause 3-7% accuracy drop; culture-referential reasoning → diagnostic failure

### Interpretability

**LinguaMap (2601.20009)** - Three-phase LLM structure: early=semantic alignment, middle=reasoning, late=language. 98% consistency with 3-5% parameters.

**Quantum Tensor Hallucination (2601.20026)** - Quantum-inspired uncertainty; entropy maximization highlights unreliable decisions

### Multi-Agent & Debate

**TS-Debate (2601.19151)** - Modality-specialized agents for time series; verification-conflict-calibration mechanism

**LLM Cooperation (2601.19082)** - Linguistic framing can match architectural effects on strategic behavior

### Tool Use

**AdaReasoner (2601.18631)** - Tool-GRPO; learns tool use as general skill; +24.9% on 7B; beats GPT-5 on VSP/Jigsaw

### Other

**NeuroAI (2601.19955)** - Workshop on neuroscience-AI synergy; SWOT analysis included
**TAIGR (2601.20032)** - Influencer content analysis; argumentation graphs for validation
**VissimRL (2601.18284)** - MARL for traffic signals using Vissim

---

## Running Total: 60 papers

---

## Batch 5 (Papers 61-70)

### Multi-Agent Architecture

**Mixture-of-Models (2601.16863)** - NSED protocol; <20B models match 100B+ via N-way deliberation; peer review reduces sycophancy

**SemanticALLI (2601.16286)** - "Users rarely repeat, but pipelines do" — 83% hit rate caching reasoning IRs vs 38.7% monolithic

**MiRAGE (2601.15487)** - Multi-agent RAG evaluation; >2.3 average hops; adversarial verifier for factual grounding

### Theoretical Limits

**Multitask Learning Limits (2601.20774)** - More data per task doesn't help! Impossibility result holds for arbitrarily large samples

**Embodiment in MARL (2601.17454)** - Centralized learning NOT always better; coordination can be liability under embodiment constraints

### Efficiency

**Signed Distance Distillation (2601.20773)** - Distance-based supervision > hard labels for black-box copying

**COMET-SG1 (2601.20772)** - Lightweight edge autoregressive; less long-horizon drift than LSTM

### Applications

**ALIGNAgent (2601.15551)** - Multi-agent education; skill gap identification; 0.87-0.90 precision
**MALTopic (2601.15299)** - Multi-agent topic modeling with structured data
**Average Unfairness (2601.16187)** - New fairness measure for routing; AAMAS 2026

---

## Running Total: 70 papers

## KEY ADDITIONS TO SYNTHESIS

1. **Small models can match large ones** through proper ensemble (MoM)
2. **Cache reasoning, not responses** for 2x+ hit rates
3. **More data doesn't solve multitask adaptation** — fundamental limit
4. **Centralized coordination can hurt** under embodiment constraints
