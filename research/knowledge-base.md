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
