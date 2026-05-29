export default function Loading() {
    return (
        <div
            className="container-studio section-padding [animation-name:none]"
            aria-label="Loading…"
            role="status"
        >
            <div className="max-w-[680px] mx-auto">
                {/* Title skeleton */}
                <div className="animate-pulse h-10 w-[60%] bg-[rgba(255,255,255,0.06)] rounded-[var(--radius)] mb-4" />
                {/* Subtitle skeleton */}
                <div className="animate-pulse h-4 w-[85%] bg-[rgba(255,255,255,0.06)] rounded-[var(--radius)] mb-2" />
                <div className="animate-pulse h-4 w-[70%] bg-[rgba(255,255,255,0.06)] rounded-[var(--radius)] mb-8" />
                {/* Card skeletons */}
                {[1, 2, 3].map((i) => (
                    <div
                        key={i}
                        className="animate-pulse bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.07)] rounded-[var(--radius)] p-6 mb-4"
                        style={{ animationDelay: `${i * 150}ms` }}
                    >
                        <div className="h-3.5 w-[40%] bg-[rgba(255,255,255,0.08)] rounded-sm mb-3" />
                        <div className="h-3 w-full bg-[rgba(255,255,255,0.06)] rounded-sm mb-[0.4rem]" />
                        <div className="h-3 w-[90%] bg-[rgba(255,255,255,0.06)] rounded-sm" />
                    </div>
                ))}
            </div>
        </div>
    );
}
