/**
 * Meta (Facebook) Pixel utility for tracking marketing events
 * Pixel ID: 4129358167328398
 */

// Extend window interface for fbq
declare global {
  interface Window {
    fbq: (...args: unknown[]) => void;
  }
}

export const META_PIXEL_ID = '4129358167328398';

/**
 * Track a standard Meta Pixel event
 * @see https://developers.facebook.com/docs/meta-pixel/reference#standard-events
 */
export const trackEvent = (
  eventName: string,
  parameters?: Record<string, unknown>
): void => {
  if (typeof window !== 'undefined' && window.fbq) {
    if (parameters) {
      window.fbq('track', eventName, parameters);
    } else {
      window.fbq('track', eventName);
    }
  }
};

/**
 * Track a custom Meta Pixel event
 */
export const trackCustomEvent = (
  eventName: string,
  parameters?: Record<string, unknown>
): void => {
  if (typeof window !== 'undefined' && window.fbq) {
    if (parameters) {
      window.fbq('trackCustom', eventName, parameters);
    } else {
      window.fbq('trackCustom', eventName);
    }
  }
};

/**
 * Track PageView - useful for SPA navigation
 */
export const trackPageView = (): void => {
  trackEvent('PageView');
};

/**
 * Track Lead event - when a user submits a form/becomes a lead
 */
export const trackLead = (parameters?: {
  content_name?: string;
  content_category?: string;
  value?: number;
  currency?: string;
}): void => {
  trackEvent('Lead', parameters);
};

/**
 * Track CompleteRegistration event
 */
export const trackCompleteRegistration = (parameters?: {
  content_name?: string;
  status?: string;
  value?: number;
  currency?: string;
}): void => {
  trackEvent('CompleteRegistration', parameters);
};

/**
 * Track ViewContent event - when someone views a key page/content
 */
export const trackViewContent = (parameters?: {
  content_name?: string;
  content_category?: string;
  content_ids?: string[];
  content_type?: string;
  value?: number;
  currency?: string;
}): void => {
  trackEvent('ViewContent', parameters);
};

/**
 * Track Schedule event - when someone books a call/appointment
 */
export const trackSchedule = (parameters?: {
  content_name?: string;
}): void => {
  trackEvent('Schedule', parameters);
};

/**
 * Track Contact event
 */
export const trackContact = (): void => {
  trackEvent('Contact');
};

export default {
  trackEvent,
  trackCustomEvent,
  trackPageView,
  trackLead,
  trackCompleteRegistration,
  trackViewContent,
  trackSchedule,
  trackContact,
};
