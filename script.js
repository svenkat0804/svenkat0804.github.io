(() => {
  const menuButton = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (menuButton && navLinks) {
    menuButton.addEventListener('click', () => {
      const open = navLinks.classList.toggle('is-open');
      menuButton.setAttribute('aria-expanded', String(open));
      menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    });
    navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      navLinks.classList.remove('is-open');
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Open navigation');
    }));
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape') {
        navLinks.classList.remove('is-open');
        menuButton.setAttribute('aria-expanded', 'false');
        menuButton.setAttribute('aria-label', 'Open navigation');
      }
    });
  }

  const projectData = {
    haoda: { title: 'Haoda Payment', category: 'Banking & payments', summary: 'A secure enterprise iOS payment application integrated with Axis Bank APIs through a backend service.', role: 'Developed banking features and supported end-to-end delivery, maintenance, API integration, performance improvements, and production support.', challenge: 'Deliver clear and dependable banking workflows for account and payment operations.', implementation: 'Implemented account balance, transaction history, beneficiary management, single and bulk payments, and Excel file upload workflows using Swift, UIKit, MVVM, and REST APIs.', technologies: ['Swift','UIKit','MVVM','REST APIs','Excel upload'], outcome: 'Delivered the described feature set as part of an enterprise banking application. No unverified performance or business metrics are claimed.' },
    american: { title: 'American Dream11', category: 'Fantasy sports', summary: 'A fantasy sports iOS application for cricket and football contests, including live match data and wallet functionality.', role: 'Led end-to-end iOS development alongside a junior developer, from requirements and feature delivery through production support.', challenge: 'Bring match information, team creation, contest participation, and wallet flows into one mobile experience.', implementation: 'Built authentication, live scores, team creation, contests, wallet management, CCAvenue payment integration, and push notification features.', technologies: ['Swift','UIKit','MVVM','REST APIs','CCAvenue','Push notifications'], outcome: 'Delivered the documented fantasy sports features and supported production releases and maintenance.' },
    fantasy: { title: 'Fantasy Sports Pro', category: 'Fantasy sports', summary: 'A fantasy sports app covering cricket, football, and basketball with virtual-coin contests.', role: 'Developed and maintained core iOS modules and collaborated with backend, QA, and product teams.', challenge: 'Support multiple sports, virtual coin balances, contest entry, and leaderboard workflows.', implementation: 'Implemented match schedules, scorecards, fantasy team creation, contests, coin wallet, daily bonus rewards, leaderboards, and user profile features through REST APIs.', technologies: ['Swift','UIKit','MVVM','REST APIs','Auto Layout'], outcome: 'Contributed to a responsive fantasy sports experience through feature development, testing, deployment, and post-release support.' },
    boomer: { title: 'Boomer11 Sports', category: 'Sports & commerce', summary: 'A fantasy sports application for a UAE client combining virtual-coin contests with shopping and rewards.', role: 'Developed and maintained core application modules and integrated commerce, API, and payment services.', challenge: 'Connect sports contests and reward coins with an e-commerce purchase journey.', implementation: 'Worked on authentication, team creation, contests, virtual coin wallet, scorecards, leaderboards, Shopify integration, GraphQL and REST APIs, and CCAvenue payment workflows.', technologies: ['Swift','UIKit','MVVM','GraphQL','Shopify','CCAvenue'], outcome: 'Supported a combined sports and commerce experience, including maintenance and production releases.' },
    methanol: { title: 'Methanol Fuel Cell', category: 'Bluetooth & hardware', summary: 'A private enterprise iOS app for monitoring and configuring methanol fuel cell devices over Bluetooth Low Energy.', role: 'Designed and developed the application, coordinating with the embedded systems team on device communication.', challenge: 'Provide a reliable mobile interface for connecting to hardware and exchanging device data.', implementation: 'Implemented BLE scanning, connection lifecycle, service and characteristic discovery, data read/write, packet parsing, live parameter display, configuration commands, and automatic reconnection.', technologies: ['Swift','UIKit','CoreBluetooth','MVVM','REST APIs'], outcome: 'Delivered a client-specific device application. It was not publicly available on the App Store.' },
    logistics: { title: 'Logistics Driver', category: 'Logistics & operations', summary: 'A driver application supporting delivery requests and synchronized order status.', role: 'Developed and maintained driver workflows and integrated Firebase Realtime Database.', challenge: 'Keep driver actions and delivery status synchronized with backend operations.', implementation: 'Implemented order acceptance and cancellation, pickup confirmation, delivery completion, real-time status updates, and related support workflows.', technologies: ['Swift','UIKit','Firebase Realtime Database','REST APIs'], outcome: 'Supported driver workflow improvements, bug fixes, and production stability.' },
    gifex: { title: 'Gifex – Gif Maker', category: 'Media & creative tools', summary: 'An existing GIF and video creation app refreshed with updated UI, branding, and in-app purchases.', role: 'Redesigned app interfaces, refreshed the app icon and branding, and integrated purchase workflows.', challenge: 'Improve the existing product presentation and support premium feature access.', implementation: 'Updated screens and user flows, integrated Apple In-App Purchases with StoreKit, and supported purchase and restore workflows.', technologies: ['Swift','UIKit','StoreKit','REST APIs','Auto Layout'], outcome: 'Delivered a refreshed app version with improved presentation and premium purchase functionality.' },
    nagercoil: { title: 'Nagercoil.com', category: 'Commerce & on-demand services', summary: 'A multi-service application covering grocery, food, medicines, transport, travel, and other on-demand services.', role: 'Independently developed the iOS application from requirements through deployment.', challenge: 'Bring several local services, ordering workflows, location, and payment into one app.', implementation: 'Built authentication, service listings, cart, order management, map-based location tracking, booking workflows, Google Maps integration, and Stripe payments.', technologies: ['Swift','UIKit','MVC','REST APIs','Google Maps','Stripe'], outcome: 'Managed the development lifecycle including integration, testing, deployment, and post-production support.' },
    vanakkam: { title: 'Vanakkam Malaysia News', category: 'News & streaming', summary: 'A Malaysia-focused news and media application with articles, video, live streaming, and authenticated engagement.', role: 'Independently developed core iOS features and integrated media and sign-in SDKs.', challenge: 'Deliver news content and streaming alongside authenticated user interactions.', implementation: 'Implemented news feeds, article details, video playback, live TV, user authentication, Google Sign-In, likes, comments, and restricted-content access.', technologies: ['Swift','UIKit','MVC','REST APIs','YouTube SDK','Google Sign-In'], outcome: 'Supported the application lifecycle from UI and API integration to testing, release, and maintenance.' },
    farmfresh: { title: 'FarmFreshHandPicked', category: 'E-commerce', summary: 'A grocery shopping app refreshed to improve shopping, checkout, and delivery workflows.', role: 'Redesigned the application UI, adapted existing features, and integrated payment functionality.', challenge: 'Make product discovery, checkout, and delivery details clear and reliable.', implementation: 'Updated browsing and cart flows, order placement, delivery address and contact details, online payment via Razorpay, and Cash on Delivery.', technologies: ['Swift','UIKit','REST APIs','Razorpay','Auto Layout'], outcome: 'Delivered UI enhancements and ongoing maintenance, testing, and production support.' },
    staybula: { title: 'Staybula', category: 'Travel & tourism', summary: 'A travel and tourism application for discovering destinations, packages, local guides, and bookings.', role: 'Independently developed the application from requirements through deployment.', challenge: 'Connect travel discovery and booking workflows with secure payment.', implementation: 'Built destination listings, package details, guide profiles, booking flows, user management, REST API integration, and PayPal payment support.', technologies: ['Swift','UIKit','MVC','REST APIs','PayPal'], outcome: 'Managed UI development, integration, testing, deployment, and post-release support.' },
    sathiyam: { title: 'Sathiyam TV Tamil News', category: 'News & live TV', summary: 'Maintenance and feature improvements for a Tamil news application offering news, videos, and live TV.', role: 'Maintained the app, delivered UI changes, fixed bugs, and maintained API integrations.', challenge: 'Keep news content and media access stable while addressing evolving requirements.', implementation: 'Implemented UI enhancements, feature improvements, API maintenance, production issue resolution, and performance tuning.', technologies: ['Swift','UIKit','REST APIs','Auto Layout','Git'], outcome: 'Supported application stability, releases, testing, and post-production maintenance.' },
    independentsg: { title: 'IndependentSG', category: 'News & content', summary: 'A news application for daily articles across categories, with feed and article-detail experiences.', role: 'Maintained and enhanced the application UI, API-driven content, and performance.', challenge: 'Provide a smooth reading experience with reliable content updates.', implementation: 'Improved news feeds, article detail pages, UI consistency, REST API integration, debugging, and stability.', technologies: ['Swift','UIKit','REST APIs','Auto Layout','Git'], outcome: 'Contributed to ongoing content delivery, bug fixing, testing, and release support.' }
  };

  const filterButtons = [...document.querySelectorAll('.filter-button')];
  const projectCards = [...document.querySelectorAll('.project-card')];
  const projectCount = document.getElementById('project-count');
  filterButtons.forEach(button => button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    filterButtons.forEach(item => {
      const active = item === button;
      item.classList.toggle('is-active', active);
      item.setAttribute('aria-pressed', String(active));
    });
    let visible = 0;
    projectCards.forEach(card => {
      const show = filter === 'all' || card.dataset.category === filter;
      card.hidden = !show;
      if (show) visible += 1;
    });
    projectCount.textContent = `${visible} project${visible === 1 ? '' : 's'}`;
  }));

  const dialog = document.getElementById('case-dialog');
  const caseContent = document.getElementById('case-content');
  const closeDialog = dialog?.querySelector('.dialog-close');
  function openCaseStudy(key) {
    const project = projectData[key];
    if (!project || !dialog || !caseContent) return;
    const tags = project.technologies.map(tech => `<span>${escapeHTML(tech)}</span>`).join('');
    caseContent.innerHTML = `
      <div class="dialog-content">
        <p class="case-category">${escapeHTML(project.category)}</p>
        <h2 id="case-title">${escapeHTML(project.title)}</h2>
        <p>${escapeHTML(project.summary)}</p>
        <div class="case-detail-grid">
          <section class="case-detail"><h3>Challenge</h3><p>${escapeHTML(project.challenge)}</p></section>
          <section class="case-detail"><h3>My contribution</h3><p>${escapeHTML(project.role)}</p></section>
          <section class="case-detail"><h3>Implementation</h3><p>${escapeHTML(project.implementation)}</p></section>
          <section class="case-detail"><h3>Outcome</h3><p>${escapeHTML(project.outcome)}</p></section>
        </div>
        <h3>Technology</h3><div class="tag-list">${tags}</div>
        <p class="case-disclaimer">This case study is based on résumé details and is intentionally high-level. Project visuals elsewhere on this page are conceptual; no private screenshots or source code are shared.</p>
      </div>`;
    dialog.showModal();
    if (closeDialog) closeDialog.focus();
  }
  function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  }
  document.querySelectorAll('.case-study-button').forEach(button => button.addEventListener('click', () => openCaseStudy(button.dataset.project)));
  projectCards.forEach(card => card.addEventListener('click', event => {
    if (event.target.closest('button, a')) return;
    openCaseStudy(card.dataset.project);
  }));
  closeDialog?.addEventListener('click', () => dialog.close());
  dialog?.addEventListener('click', event => {
    if (event.target === dialog) dialog.close();
  });

  const contactForm = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  contactForm?.addEventListener('submit', event => {
    event.preventDefault();
    if (!contactForm.reportValidity()) return;
    const form = new FormData(contactForm);
    const name = String(form.get('name') || '').trim();
    const email = String(form.get('email') || '').trim();
    const subject = String(form.get('subject') || 'Portfolio enquiry').trim();
    const message = String(form.get('message') || '').trim();
    const body = `Hi Venkatesh,\n\n${message}\n\n---\nFrom: ${name}\nReply email: ${email}`;
    const mailto = `mailto:svenkatesh0804@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    if (status) status.textContent = 'Your email app should open with the message prepared. Review it and press Send to deliver.';
    window.location.href = mailto;
  });

  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  const revealItems = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -35px 0px' });
    revealItems.forEach(item => observer.observe(item));
  } else {
    revealItems.forEach(item => item.classList.add('is-visible'));
  }
})();