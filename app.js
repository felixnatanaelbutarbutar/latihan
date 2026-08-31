/**
 * =========================================================================
 * 🚀 Logic & Interactivity for Hall of Fame Kontributor (app.js)
 * =========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  // DOM Elements
  const container = document.getElementById('contributorsContainer');
  const countEl = document.getElementById('contributorCount');
  const searchInput = document.getElementById('searchInput');
  const searchResultCount = document.getElementById('searchResultCount');
  
  // Modals & Buttons
  const guideModal = document.getElementById('guideModal');
  const templateModal = document.getElementById('templateModal');
  const btnOpenGuide = document.getElementById('btnOpenGuide');
  const btnHeroGuide = document.getElementById('btnHeroGuide');
  const btnCloseGuide = document.getElementById('btnCloseGuide');
  const btnOpenTemplate = document.getElementById('btnOpenTemplate');
  const btnCloseTemplate = document.getElementById('btnCloseTemplate');
  const btnCopySnippet = document.getElementById('btnCopySnippet');
  const snippetCode = document.getElementById('snippetCode');
  const toast = document.getElementById('toastNotification');
  const toastMessage = document.getElementById('toastMessage');

  // Helper: Escape HTML to avoid injection
  function escapeHTML(str) {
    if (!str) return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // Helper: Get Initials from Name
  function getInitials(name) {
    if (!name) return '?';
    const parts = name.trim().split(' ');
    if (parts.length >= 2) {
      return (parts[0][0] + parts[1][0]).toUpperCase();
    }
    return name.slice(0, 2).toUpperCase();
  }

  // Render Contributors Cards
  function renderContributors(list) {
    if (!container) return;
    container.innerHTML = '';

    if (!list || list.length === 0) {
      container.innerHTML = `
        <div class="empty-state">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="8" y1="12" x2="16" y2="12"></line>
          </svg>
          <p>Tidak ada kontributor yang cocok dengan pencarian Anda.</p>
        </div>
      `;
      return;
    }

    list.forEach(person => {
      const card = document.createElement('article');
      card.className = 'contributor-card';

      // GitHub Avatar URL with fallback
      const cleanUsername = (person.username || '').replace('@', '').trim();
      const avatarUrl = cleanUsername 
        ? `https://github.com/${encodeURIComponent(cleanUsername)}.png?size=120` 
        : '';
      const initials = getInitials(person.name);

      // Skills HTML
      const skillsHTML = (person.skills || []).map(skill => 
        `<span class="skill-tag">${escapeHTML(skill)}</span>`
      ).join('');

      // Social Links HTML
      let socialHTML = '';
      if (cleanUsername) {
        socialHTML += `
          <a href="https://github.com/${encodeURIComponent(cleanUsername)}" target="_blank" rel="noopener noreferrer" class="social-btn" title="GitHub ${escapeHTML(person.name)}" aria-label="GitHub Profile">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
          </a>
        `;
      }
      if (person.social?.instagram) {
        socialHTML += `
          <a href="${escapeHTML(person.social.instagram)}" target="_blank" rel="noopener noreferrer" class="social-btn" title="Instagram" aria-label="Instagram Profile">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
          </a>
        `;
      }
      if (person.social?.linkedin) {
        socialHTML += `
          <a href="${escapeHTML(person.social.linkedin)}" target="_blank" rel="noopener noreferrer" class="social-btn" title="LinkedIn" aria-label="LinkedIn Profile">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          </a>
        `;
      }

      card.innerHTML = `
        <div>
          <div class="card-header">
            <div class="avatar-wrapper">
              <img src="${avatarUrl}" alt="${escapeHTML(person.name)}" class="avatar-img" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" loading="lazy">
              <div class="avatar-placeholder" style="display: none;">${initials}</div>
            </div>
            <div class="user-meta">
              <h3>${escapeHTML(person.name)}</h3>
              ${cleanUsername ? `<a href="https://github.com/${encodeURIComponent(cleanUsername)}" target="_blank" rel="noopener noreferrer" class="username">@${escapeHTML(cleanUsername)}</a>` : ''}
            </div>
          </div>
          ${person.role ? `<div class="user-role-badge">${escapeHTML(person.role)}</div>` : ''}
          ${person.bio ? `<p class="bio-text">"${escapeHTML(person.bio)}"</p>` : ''}
        </div>
        <div>
          ${skillsHTML ? `<div class="skills-wrap">${skillsHTML}</div>` : ''}
          <div class="card-footer">
            <span style="font-size: 0.75rem; color: var(--text-muted);">Kontributor</span>
            <div class="social-links">
              ${socialHTML}
            </div>
          </div>
        </div>
      `;

      container.appendChild(card);
    });
  }

  // Initialize Data
  const data = typeof contributors !== 'undefined' ? contributors : [];
  if (countEl) {
    countEl.textContent = data.length;
  }
  renderContributors(data);

  // Live Search Filter
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      const filtered = data.filter(item => {
        const matchName = (item.name || '').toLowerCase().includes(query);
        const matchUsername = (item.username || '').toLowerCase().includes(query);
        const matchRole = (item.role || '').toLowerCase().includes(query);
        const matchBio = (item.bio || '').toLowerCase().includes(query);
        const matchSkills = (item.skills || []).some(s => s.toLowerCase().includes(query));
        return matchName || matchUsername || matchRole || matchBio || matchSkills;
      });

      renderContributors(filtered);
      if (searchResultCount) {
        if (query) {
          searchResultCount.textContent = `Ditemukan ${filtered.length} dari ${data.length} kontributor`;
        } else {
          searchResultCount.textContent = `Menampilkan semua kontributor (${data.length})`;
        }
      }
    });
  }

  // Toast Function
  let toastTimer;
  function showToast(msg) {
    if (!toast) return;
    if (toastMessage) toastMessage.textContent = msg;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 3000);
  }

  // Modal Open/Close Controls
  function openModal(modal) {
    if (!modal) return;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal(modal) {
    if (!modal) return;
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  // Event Listeners for Modals
  btnOpenGuide?.addEventListener('click', () => openModal(guideModal));
  btnHeroGuide?.addEventListener('click', () => openModal(guideModal));
  btnCloseGuide?.addEventListener('click', () => closeModal(guideModal));

  btnOpenTemplate?.addEventListener('click', () => openModal(templateModal));
  btnCloseTemplate?.addEventListener('click', () => closeModal(templateModal));

  // Backdrop click closes modal
  [guideModal, templateModal].forEach(modal => {
    modal?.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal(modal);
      }
    });
  });

  // ESC key closes modals
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal(guideModal);
      closeModal(templateModal);
    }
  });

  // Copy Snippet Logic
  btnCopySnippet?.addEventListener('click', async () => {
    if (!snippetCode) return;
    const text = snippetCode.textContent;
    try {
      await navigator.clipboard.writeText(text);
      showToast('🎉 Template berhasil disalin! Tinggal paste ke contributors.js');
    } catch (err) {
      // Fallback for older browsers
      const textarea = document.createElement('textarea');
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      showToast('🎉 Template berhasil disalin!');
    }
  });
});
