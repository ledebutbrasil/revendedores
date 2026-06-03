const GTM_ID = 'GTM-N7QQ3QMT';

export const WHATSAPP_EVENT_NAME = 'whatsapp_click';

type TrackingValue = string | number | boolean | undefined | (() => void);
type TrackingPayload = Record<string, TrackingValue>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const getAttributionParams = (): TrackingPayload => {
  const params = new URLSearchParams(window.location.search);
  const keys = [
    'gclid',
    'gbraid',
    'wbraid',
    'utm_source',
    'utm_medium',
    'utm_campaign',
    'utm_content',
    'utm_term',
  ];

  return keys.reduce<TrackingPayload>((acc, key) => {
    const value = params.get(key);
    if (value) acc[key] = value;
    return acc;
  }, {});
};

export const trackLandingView = () => {
  const payload: TrackingPayload = {
    event: 'landing_view',
    lead_type: 'revendedor',
    business_unit: 'ledebut',
    page_location: window.location.href,
    page_path: window.location.pathname,
    gtm_container_id: GTM_ID,
    ...getAttributionParams(),
  };

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(payload);

  window.gtag?.('event', 'landing_view', {
    lead_type: 'revendedor',
    business_unit: 'ledebut',
    page_location: window.location.href,
    page_path: window.location.pathname,
    ...getAttributionParams(),
  });
};

export const trackWhatsappClick = (
  whatsappUrl: string,
  whatsappNumber: string,
  buttonLocation: string,
  callback?: () => void,
) => {
  let callbackCalled = false;
  const safeCallback = () => {
    if (callbackCalled) return;
    callbackCalled = true;
    callback?.();
  };

  const payload: TrackingPayload = {
    event: WHATSAPP_EVENT_NAME,
    lead_type: 'revendedor',
    business_unit: 'ledebut',
    whatsapp_number: whatsappNumber,
    button_location: buttonLocation,
    destination_url: whatsappUrl,
    page_location: window.location.href,
    page_path: window.location.pathname,
    gtm_container_id: GTM_ID,
    ...getAttributionParams(),
    event_callback: safeCallback,
    event_timeout: 700,
  };

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(payload);

  window.gtag?.('event', WHATSAPP_EVENT_NAME, {
    event_category: 'lead',
    event_label: buttonLocation,
    lead_type: 'revendedor',
    business_unit: 'ledebut',
    whatsapp_number: whatsappNumber,
    destination_url: whatsappUrl,
    page_location: window.location.href,
    page_path: window.location.pathname,
    ...getAttributionParams(),
    event_callback: safeCallback,
    event_timeout: 700,
  });

  window.setTimeout(safeCallback, 700);
};
