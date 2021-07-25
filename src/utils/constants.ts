export const PRODUCTION_BACKEND_HOST = 'backend.dogtor.xyz';
export const STAGING_BACKEND_HOST = 'staging.backend.dogtor.xyz';
export const LOCAL_BACKEND_HOST = 'localhost:8000';

export const PRODUCTION_BACKEND_SSL = true;
export const STAGING_BACKEND_SSL = true;
export const LOCAL_BACKEND_SSL = false;

export const BACKEND_CONFIGS = <const> ['Production', 'Staging', 'Local'];

export const GOOGLE_MAPS_API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

export const IS_PRODUCTION_BUILD = process.env.NODE_ENV === 'production';
