import { permanentRedirect } from 'next/navigation';

// Page permanently moved to /legal/privacy
export default function PrivacyRedirect() {
    permanentRedirect('/legal/privacy');
}