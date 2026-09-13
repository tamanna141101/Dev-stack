import type { Technology } from '../types/technology'

interface TechnologyCardProps {
    technology: Technology
    isSelected: boolean
    onAdd: (technology: Technology) => void
}

const badgeColor: Record<string, string> = {
    Popular: 'bg-pink-50 text-pink-500',
    Versatile: 'bg-emerald-50 text-emerald-500',
    Fast: 'bg-orange-50 text-orange-500',
    Standard: 'bg-emerald-50 text-emerald-500',
    'Top SQL': 'bg-pink-50 text-pink-500',
    Cache: 'bg-red-50 text-red-500',
    Ubiquitous: 'bg-amber-50 text-amber-500',
    Essential: 'bg-sky-50 text-sky-500',
    Robust: 'bg-cyan-50 text-cyan-500',
    Modern: 'bg-cyan-50 text-cyan-500',
    Containers: 'bg-sky-50 text-sky-500',
}

const TechnologyCard = ({
    technology,
    isSelected,
    onAdd,
}: TechnologyCardProps) => {
    return (
        <article
            className={`rounded-xl border bg-white p-4 shadow-sm transition-all duration-200 ${isSelected
                    ? 'border-pink-400 shadow-[0_0_0_1px_rgba(236,72,153,0.15)]'
                    : 'border-slate-100 hover:-translate-y-1 hover:shadow-md'
                }`}
        >
            {/* Icon + Badge */}
            <div className="flex items-start justify-between">
                <div className="flex h-10 w-10 items-center justify-center">
                    <img
                        src={technology.icon}
                        alt={technology.name}
                        className="h-9 w-9 object-contain"
                    />
                </div>

                <span
                    className={`rounded-full px-2.5 py-1 text-[10px] font-semibold ${badgeColor[technology.badge] ?? 'bg-pink-50 text-pink-500'
                        }`}
                >
                    {technology.badge}
                </span>
            </div>

            {/* Name */}
            <h3 className="mt-3 text-base font-bold text-slate-800">
                {technology.name}
            </h3>

            {/* Description */}
            <p className="mt-2 min-h-[58px] text-xs leading-5 text-slate-400">
                {technology.description}
            </p>

            {/* Details */}
            <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3">
                <span className="rounded bg-slate-50 px-2 py-1 text-[10px] font-medium text-slate-500">
                    {technology.category}
                </span>

                <span className="text-[10px] text-slate-400">
                    {technology.difficulty}
                </span>

                <span className="text-[11px] font-semibold text-slate-600">
                    <span className="text-yellow-400">★</span>{' '}
                    {technology.rating}
                </span>
            </div>

            {/* Add Button */}
            <button
                type="button"
                disabled={isSelected}
                onClick={() => onAdd(technology)}
                className={`mt-3 w-full rounded-lg py-2.5 text-xs font-semibold transition ${isSelected
                        ? 'cursor-not-allowed bg-slate-200 text-slate-500'
                        : 'bg-slate-900 text-white hover:bg-slate-800'
                    }`}
            >
                {isSelected ? '✓ Added to Stack' : 'Add to Stack'}
            </button>
        </article>
    )
}

export default TechnologyCard