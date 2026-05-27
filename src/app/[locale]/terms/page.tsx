import { permanentRedirect } from 'next/navigation';

// Page permanently moved to /legal/terms
export default function TermsRedirect() {
    permanentRedirect('/legal/terms');
}