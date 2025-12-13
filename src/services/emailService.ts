// Email service configuration
export const EMAIL_CONFIG = {
  // Primary email address to receive inquiries
  RECIPIENT_EMAIL: 'infrastkarnali@gmail.com',
  
  // Formspree endpoint (you'll need to create a free account at formspree.io)
  FORMSPREE_ENDPOINT: 'https://formspree.io/f/xpwnqkjy',
  
  // Email template
  EMAIL_TEMPLATE: {
    subject: (name: string) => `New Inquiry from ${name} - Karnali Construction`,
    body: (data: any) => `
New inquiry received from Karnali Construction website:

Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Service Interested In: ${data.service || 'Not specified'}
Message: ${data.message}

---
This inquiry was sent from the contact form on your website.
Date: ${new Date().toLocaleString()}
    `.trim()
  }
};

// Email service functions
export const sendEmail = async (formData: any) => {
  const emailSubject = EMAIL_CONFIG.EMAIL_TEMPLATE.subject(formData.name);
  const emailBody = EMAIL_CONFIG.EMAIL_TEMPLATE.body(formData);
  
  // Method 1: Open email client with pre-filled content
  const mailtoLink = `mailto:${EMAIL_CONFIG.RECIPIENT_EMAIL}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
  window.open(mailtoLink, '_blank');
  
  // Method 2: Try to send via Formspree (backup method)
  try {
    const response = await fetch(EMAIL_CONFIG.FORMSPREE_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        service: formData.service,
        message: formData.message,
        _replyto: formData.email,
        _subject: emailSubject,
        _next: window.location.href, // Redirect back to contact page
      }),
    });
    
    return response.ok;
  } catch (error) {
    console.error('Email sending failed:', error);
    return false;
  }
};




