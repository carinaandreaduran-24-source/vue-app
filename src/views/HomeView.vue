<template>
  <div>
    <!-- EXISTING HERO SECTION -->
    <section class="hero-section">
      <div class="hero-left">
        <span class="established">— ESTABLISHED 1905</span>
        <h1 class="headline">Exemplary <span class="highlight-gold">Christian</span><br />Education for Life.</h1>
        <p class="sub-text">A leading Christian institution in the Philippines, Central Philippine University nurtures intellectual growth and spiritual development through a commitment to <strong>Scientia et Fides</strong> (Science and Faith).</p>
        <div class="button-group">
          <button class="btn-primary">Explore Academics</button>
          <button class="btn-secondary">Request Information</button>
        </div>
        <div class="stats-row">
          <div class="stat"><h2>118+</h2><p>Years of Excellence</p></div>
          <div class="stat"><h2>20+</h2><p>Academic Programs</p></div>
          <div class="stat"><h2>5,000+</h2><p>Active Students</p></div>
          <div class="stat"><h2>20+</h2><p>Partner Institutions</p></div>
        </div>
      </div>
      <div class="hero-right">
        <div class="gradient-card">
          <img src="@/assets/cpu_logo.png" alt="CPU Seal" class="card-seal" />
          <h2 class="card-title">Central Philippine<br/>University</h2>
          <p class="card-motto">SCIENTIA ET FIDES</p>
          <hr class="card-line" />
          <p class="card-quote">"A Heritage of Excellence,<br/>A Future of Faith"</p>
        </div>
      </div>
    </section>

    <!-- NEW ADMISSIONS PREVIEW SECTION -->
    <section class="admissions-preview">
      <div class="section-header">
        <span class="eyebrow">JOIN OUR COMMUNITY</span>
        <h2 class="section-title">Admissions</h2>
        <hr class="section-line" />
      </div>

      <div class="cards-grid">
        <!-- Card 1 -->
        <div class="preview-card">
          <div class="icon-placeholder">📄</div>
          <h3>Admission Process</h3>
          <ol class="process-list">
            <li>Submit online application form via the student portal.</li>
            <li>Take the CPU Placement Examination.</li>
            <li>Undergo interview with department heads (if applicable).</li>
            <li>Pay enrollment fees and register for classes.</li>
          </ol>
          <router-link to="/admissions" class="text-link">Learn more &rarr;</router-link>
        </div>

        <!-- Card 2 -->
        <div class="preview-card">
          <div class="icon-placeholder">📋</div>
          <h3>Requirements</h3>
          <ul class="req-list">
            <li>&check; Original Form 138 (Report Card)</li>
            <li>&check; Certificate of Good Moral Character</li>
            <li>&check; PSA Birth Certificate (Photocopy)</li>
            <li>&check; 2x2 ID Pictures with white background</li>
            <li>&check; Transfer Credentials (for Transferees)</li>
          </ul>
          <router-link to="/admissions" class="text-link">View full checklist &rarr;</router-link>
        </div>

        <!-- Card 3 -->
        <div class="preview-card">
          <div class="icon-placeholder">🎓</div>
          <h3>Programs Offered</h3>
          <p class="prog-desc">We offer a wide range of programs catering to different educational stages:</p>
          <div class="prog-tags">
            <span class="tag">Kindergarten & Elementary</span>
            <span class="tag">Junior & Senior High School</span>
            <span class="tag">Undergraduate Programs</span>
            <span class="tag">School of Graduate Studies</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* EXISTING HERO CSS (Keep your current CSS here) */
.hero-section { height: 50vh; display: flex; justify-content: space-between; align-items: center; padding: 0 5%; margin-top: 2rem; }
.hero-left { flex: 1; max-width: 55%; }
.established { color: #7A5A00; font-size: 0.85rem; font-weight: bold; letter-spacing: 1px; }
.headline { color: #2B1B5E; font-size: 3.5rem; line-height: 1.1; margin: 1rem 0; font-family: 'Times New Roman', serif; }
.highlight-gold { color: #CBA100; font-style: italic; }
.sub-text { color: #333333; line-height: 1.6; margin-bottom: 2rem; max-width: 90%; }
.button-group { display: flex; gap: 1rem; margin-bottom: 3rem; }
.btn-primary { background-color: #2B1B5E; color: #FFFFFF; border: none; padding: 0.8rem 1.5rem; border-radius: 6px; font-weight: bold; cursor: pointer; }
.btn-secondary { background-color: transparent; color: #2B1B5E; border: 1px solid #2B1B5E; padding: 0.8rem 1.5rem; border-radius: 6px; font-weight: bold; cursor: pointer; }
.stats-row { display: flex; gap: 2rem; border-top: 1px solid #E6E6EC; padding-top: 1.5rem; }
.stat h2 { color: #2B1B5E; font-size: 1.5rem; margin: 0 0 0.2rem 0; }
.stat p { color: #333333; font-size: 0.75rem; margin: 0; }
.hero-right { flex: 1; display: flex; justify-content: flex-end; }
.gradient-card { background: linear-gradient(135deg, #CBA100, #FFFFFF); border-radius: 20px; padding: 3rem 2rem; width: 400px; text-align: center; box-shadow: 0 10px 20px rgba(0,0,0,0.1); }
.card-seal { width: 120px; margin-bottom: 1rem; }
.card-title { color: #2B1B5E; font-family: 'Times New Roman', serif; margin-bottom: 0.5rem; font-size: 1.8rem; }
.card-motto { color: #7A5A00; font-size: 0.8rem; letter-spacing: 2px; }
.card-line { width: 40px; border: none; border-top: 2px solid #7A5A00; margin: 15px auto; }
.card-quote { font-style: italic; color: #333333; font-size: 0.95rem; }

/* NEW ADMISSIONS PREVIEW CSS */
.admissions-preview { padding: 5rem 5%; background-color: #FFFFFF; text-align: center; margin-top: 5rem; }
.section-header { margin-bottom: 3rem; }
.eyebrow { color: #7A5A00; font-weight: bold; font-size: 0.85rem; letter-spacing: 2px; }
.section-title { color: #2B1B5E; font-size: 2.5rem; font-family: 'Times New Roman', serif; margin: 0.5rem 0; }
.section-line { width: 50px; border: none; border-top: 3px solid #CBA100; margin: 1rem auto; }
.cards-grid { display: flex; gap: 2rem; justify-content: center; text-align: left; }
.preview-card { background: #FFFFFF; border: 1px solid #E6E6EC; border-radius: 12px; padding: 2.5rem; flex: 1; box-shadow: 0 4px 15px rgba(0,0,0,0.03); }
.icon-placeholder { background: #F5F6FA; width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; border-radius: 50%; margin-bottom: 1.5rem; font-size: 1.2rem; }
.preview-card h3 { color: #2B1B5E; margin-bottom: 1.5rem; font-size: 1.2rem; }
.process-list { padding-left: 1.2rem; margin-bottom: 1.5rem; color: #555; font-size: 0.9rem; line-height: 1.6; }
.process-list li::marker { color: #CBA100; font-weight: bold; }
.req-list { list-style: none; padding: 0; margin-bottom: 1.5rem; color: #555; font-size: 0.9rem; line-height: 1.8; }
.req-list li { color: #555; }
.prog-desc { font-size: 0.9rem; color: #555; margin-bottom: 1rem; }
.prog-tags { display: flex; flex-direction: column; gap: 0.5rem; }
.tag { border: 1px solid #E6E6EC; padding: 0.8rem; border-radius: 6px; font-size: 0.85rem; color: #2B1B5E; font-weight: bold; }
.text-link { color: #2B1B5E; font-weight: bold; text-decoration: none; font-size: 0.9rem; }
.text-link:hover { text-decoration: underline; }
</style>