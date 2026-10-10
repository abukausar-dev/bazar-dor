export default function HeroIllustration({ className }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 315 263"
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
        >
            <ellipse cx="157.5" cy="233" rx="110" ry="16" fill="#e1e8e1" />

            <ellipse cx="118" cy="118" rx="31.5" ry="33" fill="#ef4444" />
            <ellipse cx="106" cy="108" rx="7" ry="10" fill="#fca5a5" opacity="0.7" />
            <path d="M128 86 Q128 76 139 71" stroke="#15803d" strokeWidth="3.5" strokeLinecap="round" fill="none" />

            <ellipse cx="186" cy="108.5" rx="34.5" ry="36" fill="#22c55e" />
            <ellipse cx="172" cy="96" rx="7" ry="10" fill="#86efac" opacity="0.7" />
            <path d="M186 73 Q184 58 172 52 M186 73 Q192 58 204 52" stroke="#15803d" strokeWidth="3.5" strokeLinecap="round" fill="none" />

            <ellipse cx="91.5" cy="138" rx="20.5" ry="16.5" fill="#a855f7" />
            <path d="M91 122 Q92 112 100 108" stroke="#15803d" strokeWidth="3" strokeLinecap="round" fill="none" />

            <ellipse cx="154.5" cy="131.5" rx="20.5" ry="16.5" fill="#f97316" />
            <path d="M154 115 Q156 107 164 103" stroke="#15803d" strokeWidth="3" strokeLinecap="round" fill="none" />

            <ellipse cx="223.5" cy="135" rx="22" ry="18" fill="#f59e0b" />
            <path d="M224 117 Q224 108 232 105" stroke="#15803d" strokeWidth="3" strokeLinecap="round" fill="none" />

            <path d="M78 177 H237 L229 238 Q228 244 222 244 H93 Q87 244 86 238 Z" fill="#b45309" />
            <rect x="70.5" y="156" width="174" height="21" rx="2" fill="#92400e" />
            <path d="M108 180 L110 240 M138 180 L139 241 M169 180 V241 M199 180 L198 241 M229 180 L226 238" stroke="#7c2d12" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        </svg>
    );
}