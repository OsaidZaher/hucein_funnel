import { useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import {
  trackPageView,
  trackEvent,
  trackCustomEvent,
  trackLead,
  trackCompleteRegistration,
  trackViewContent,
  trackSchedule,
  trackContact,
} from '@/lib/metaPixel';

/**
 * React hook for Meta Pixel tracking
 * Automatically tracks page views on route changes and provides
 * convenient methods for tracking events
 */
export const useMetaPixel = (options?: { trackPageViewOnMount?: boolean }) => {
  const location = useLocation();
  const { trackPageViewOnMount = true } = options || {};

  // Track page view on route change
  useEffect(() => {
    if (trackPageViewOnMount) {
      trackPageView();
    }
  }, [location.pathname, trackPageViewOnMount]);

  return {
    trackPageView: useCallback(trackPageView, []),
    trackEvent: useCallback(trackEvent, []),
    trackCustomEvent: useCallback(trackCustomEvent, []),
    trackLead: useCallback(trackLead, []),
    trackCompleteRegistration: useCallback(trackCompleteRegistration, []),
    trackViewContent: useCallback(trackViewContent, []),
    trackSchedule: useCallback(trackSchedule, []),
    trackContact: useCallback(trackContact, []),
  };
};

export default useMetaPixel;
