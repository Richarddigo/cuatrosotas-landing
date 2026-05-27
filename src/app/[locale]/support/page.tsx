import { permanentRedirect } from 'next/navigation';

// Page permanently moved to /legal/support
export default function SupportRedirect() {
    permanentRedirect('/legal/support');
}