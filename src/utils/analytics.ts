declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: any) => void;
  }
}

export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters);
  }
};

// Track when users navigate to different sections
export const trackSectionView = (sectionName: string) => {
  trackEvent('page_view', {
    page_title: `Manager's Pizza - ${sectionName}`,
    page_location: window.location.href,
    custom_section: sectionName
  });
};

// Track when users click to external ordering system
export const trackOrderRedirect = (source: string) => {
  trackEvent('order_redirect', {
    redirect_source: source,
    external_url: 'https://managerspizza.hungerrush.com/Order/OrderType'
  });
};

// Track coupon interactions
export const trackCouponView = (couponCode: string) => {
  trackEvent('coupon_view', {
    coupon_code: couponCode
  });
};

// Track menu interactions
export const trackMenuInteraction = (action: string, category?: string, itemName?: string) => {
  trackEvent('menu_interaction', {
    interaction_type: action,
    menu_category: category,
    item_name: itemName
  });
};

// Track phone/contact interactions
export const trackContactInteraction = (method: string) => {
  trackEvent('contact_interaction', {
    contact_method: method
  });
};