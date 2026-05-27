export default function Loading() {
    return (
        <div
            className="container-studio section-padding"
            style={{ animationName: 'none' }}
            aria-label="Loading…"
            role="status"
        >
            <div style={{ maxWidth: '680px', margin: '0 auto' }}>
                {/* Title skeleton */}
                <div
                    style={{
                        height: '2.5rem',
                        width: '60%',
                        background: 'rgba(255,255,255,0.06)',
                        borderRadius: 'var(--radius)',
                        marginBottom: '1rem',
                        animation: 'pulse 1.5s ease-in-out infinite',
                    }}
                />
                {/* Subtitle skeleton */}
                <div
                    style={{
                        height: '1rem',
                        width: '85%',
                        background: 'rgba(255,255,255,0.06)',
                        borderRadius: 'var(--radius)',
                        marginBottom: '0.5rem',
                        animation: 'pulse 1.5s ease-in-out infinite',
                    }}
                />
                <div
                    style={{
                        height: '1rem',
                        width: '70%',
                        background: 'rgba(255,255,255,0.06)',
                        borderRadius: 'var(--radius)',
                        marginBottom: '2rem',
                        animation: 'pulse 1.5s ease-in-out infinite',
                    }}
                />
                {/* Card skeletons */}
                {[1, 2, 3].map((i) => (
                    <div
                        key={i}
                        style={{
                            background: 'rgba(255,255,255,0.04)',
                            border: '1px solid rgba(255,255,255,0.07)',
                            borderRadius: 'var(--radius)',
                            padding: '1.5rem',
                            marginBottom: '1rem',
                            animation: 'pulse 1.5s ease-in-out infinite',
                            animationDelay: `${i * 150}ms`,
                        }}
                    >
                        <div style={{ height: '0.875rem', width: '40%', background: 'rgba(255,255,255,0.08)', borderRadius: '4px', marginBottom: '0.75rem' }} />
                        <div style={{ height: '0.75rem', width: '100%', background: 'rgba(255,255,255,0.06)', borderRadius: '4px', marginBottom: '0.4rem' }} />
                        <div style={{ height: '0.75rem', width: '90%', background: 'rgba(255,255,255,0.06)', borderRadius: '4px' }} />
                    </div>
                ))}
            </div>
        </div>
    );
}
