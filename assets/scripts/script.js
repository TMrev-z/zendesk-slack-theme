document.addEventListener('DOMContentLoaded', function() {
  try {
    // 1) おすすめ記事: ラベル "featured" を最大6件取得して描画
    var featuredEl = document.getElementById('js-featured-list');
    if (featuredEl) {
      // Get current locale from meta tag or URL
      var locale = document.documentElement.lang || 'ja';
      
      // Search for featured articles
      var url = "/api/v2/help_center/" + locale + "/articles/search.json?label_names=featured&per_page=6&sort_by=popularity";
      
      fetch(url)
        .then(function(response) { 
          return response.json(); 
        })
        .then(function(data) {
          if (!data || !data.results || data.results.length === 0) {
            // Show message if no featured articles found
            featuredEl.innerHTML = '<li style="text-align: center; color: #5e6a75; padding: 20px; grid-column: 1 / -1;">featuredラベルが付いた記事がありません</li>';
            return;
          }
          
          // Clear loading message and add articles
          featuredEl.innerHTML = '';
          
          data.results.forEach(function(article) {
            var li = document.createElement('li');
            var link = document.createElement('a');
            link.href = article.html_url;
            link.textContent = article.title;
            link.title = article.title; // Add title attribute for accessibility
            li.appendChild(link);
            featuredEl.appendChild(li);
          });
        })
        .catch(function(error) {
          console.warn('Failed to load featured articles:', error);
          featuredEl.innerHTML = '<li style="text-align: center; color: #5e6a75; padding: 20px; grid-column: 1 / -1;">おすすめ記事の読み込みに失敗しました</li>';
        });
    }

    // 2) カテゴリアイコンの差し替え（カテゴリID -> アイコンファイルの対応）
    var iconMap = {
      // Actual category IDs from your Zendesk
      "4897783095966": "icons/getting-started.svg", // 一般情報カテゴリ
      
      // Future category mapping examples (replace with actual IDs when created):
      // Admin/設定系のカテゴリ
      // "ADMIN_CATEGORY_ID": "icons/admin.svg",
      
      // トラブルシューティング系のカテゴリ  
      // "TROUBLESHOOT_CATEGORY_ID": "icons/troubleshooting.svg",
      
      // その他のカテゴリは全てdefault.svgを使用
    };
    
    // Function to update category icons
    function updateCategoryIcons() {
      document.querySelectorAll('.hc-card[data-category-id]').forEach(function(card) {
        var categoryId = card.getAttribute('data-category-id');
        var img = card.querySelector('.hc-card__icon img');
        
        if (img && categoryId) {
          // Use custom icon if mapped, otherwise use default
          var iconPath = iconMap[categoryId] || 'icons/default.svg';
          
          // Update image source - construct full asset path
          // Note: In Zendesk themes, assets are served from /theme_assets/
          var basePath = window.location.origin + '/theme_assets/';
          img.src = basePath + iconPath;
          
          // Add error handling for missing icons
          img.onerror = function() {
            this.src = basePath + 'icons/default.svg';
          };
        }
      });
    }
    
    // Update icons on page load
    updateCategoryIcons();
    
    // 3) Search enhancements (optional)
    var searchInput = document.querySelector('.hc-hero__search input[type="search"]');
    if (searchInput) {
      // Add search suggestions or instant search functionality here if needed
      searchInput.addEventListener('focus', function() {
        this.parentElement.classList.add('search-focused');
      });
      
      searchInput.addEventListener('blur', function() {
        this.parentElement.classList.remove('search-focused');
      });
    }
    
    // 4) Smooth scrolling for quick links (optional enhancement)
    document.querySelectorAll('.hc-quicklinks a[href^="#"]').forEach(function(link) {
      link.addEventListener('click', function(e) {
        var target = document.querySelector(this.getAttribute('href'));
        if (target) {
          e.preventDefault();
          target.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
    
  } catch (error) {
    console.error('Theme script error:', error);
  }
});

// Additional utility functions
window.SlackTheme = {
  // Function to add new category icon mapping
  addCategoryIcon: function(categoryId, iconPath) {
    if (typeof categoryId === 'string' && typeof iconPath === 'string') {
      // This would be called from theme settings or admin panel
      console.log('Adding category icon mapping:', categoryId, '->', iconPath);
    }
  },
  
  // Function to refresh featured articles
  refreshFeaturedArticles: function() {
    var event = new CustomEvent('DOMContentLoaded');
    document.dispatchEvent(event);
  }
};