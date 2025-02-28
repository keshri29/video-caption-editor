import React from 'react';
import { useNavigate } from 'react-router-dom';


const VideoEditorLanding = () => {
  const navigate = useNavigate();
  return (
    <div class="page-container">
    <nav class="navbar">
      <div class="navbar-container">
        <div class="navbar-content">
          <div class="navbar-brand">
            <span class="brand-text">CaptionPro</span>
          </div>
          
          <div class="desktop-nav">
            <a href="#features" class="nav-link">Features</a>
            <a href="#pricing" class="nav-link">Pricing</a>
            <a href="#testimonials" class="nav-link">Testimonials</a>
            <button class="primary-button" onClick={() => navigate('/editor')}>Try for Free</button>
          </div>
          
          <div class="mobile-menu-button">
            <button class="menu-toggle" onclick="toggleMenu()">
              <span class="menu-icon">☰</span>
            </button>
          </div>
        </div>
      </div>
      
      <div class="mobile-menu" id="mobileMenu">
        <div class="mobile-menu-content">
          <a href="#features" class="mobile-nav-link">Features</a>
          <a href="#pricing" class="mobile-nav-link">Pricing</a>
          <a href="#testimonials" class="mobile-nav-link">Testimonials</a>
          <button class="primary-button mobile-button" onClick={() => navigate('/editor')}>Try for Free</button>
        </div>
      </div>
    </nav>
  
    <div class="hero-section">
      <div class="hero-container">
        <div class="hero-content">
          <div class="hero-text">
            <h1 class="hero-title">
              Edit Video Captions with 
              <span class="highlight">AI Precision</span>
            </h1>
            <p class="hero-description">
              Create, edit, and perfect your video captions in minutes, not hours. Boost engagement with professionally captioned content.
            </p>
            <div class="hero-buttons">
              <button class="primary-button hero-button">
                <span onClick={() => navigate('/editor')}>Start Captioning</span>
                <span class="icon">→</span>
              </button>
              <button class="secondary-button hero-button">
                <span class="icon">▶</span>
                <span onClick={() => navigate('/editor')}>Watch Demo</span>
              </button>
            </div>
          </div>
          <div class="hero-section">
  <div class="media-container">
    <img src="https://images.pexels.com/photos/4458554/pexels-photo-4458554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="logo" />
  </div>
  <div class="text-content">
    <h2>Empower Your Journey</h2>
    <p>Discover new possibilities with our transformative solutions. Elevate your experience today!</p>
    <button class="cta-button">Get Started</button>
  </div>
</div>

        </div>
      </div>
    </div>
  
    <div id="features" class="features-section">
      <div class="features-container">
        <div class="features-header">
          <h2 class="features-title">Powerful Caption Editing Features</h2>
          <p class="features-description">
            Everything you need to create professional video captions in one intuitive platform.
          </p>
        </div>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">✏️</div>
            <h3 class="feature-title">AI-Powered Transcription</h3>
            <p class="feature-description">
              Automatically generate accurate captions using our advanced AI technology.
            </p>
          </div>
        </div>
      </div>
    </div>
  
    <div class="social-proof-section">
      <div class="social-proof-container">
        <p class="social-proof-text">Trusted by content creators everywhere</p>
        <div class="social-proof-logos">
          <span class="logo">YouTube</span>
          <span class="logo">TikTok</span>
          <span class="logo">Instagram</span>
          <span class="logo">Vimeo</span>
        </div>
      </div>
    </div>
  
    <div class="cta-section">
      <div class="cta-container">
        <h2 class="cta-title">Ready to Transform Your Video Content?</h2>
        <p class="cta-description">
          Join thousands of content creators who have improved their engagement with professional captions.
        </p>
        <div class="cta-buttons">
          <button class="freeTrail-button" onClick={() => navigate('/editor')}>Start Your Free Trial</button>
          <button class="freeTrail-button" onClick={() => navigate('/editor')}>Schedule a Demo</button>
        </div>
      </div>
    </div>
  </div>
  );
};

export default VideoEditorLanding;