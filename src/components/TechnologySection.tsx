import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import TechnologyCard from './TechnologyCard'
import type { Technology } from '../types/technology'

const TechnologySection = () => {
  const [technologies, setTechnologies] = useState<Technology[]>([])
  const [selectedTechnologies, setSelectedTechnologies] = useState<Technology[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/src/data/technologies.json')
      .then((response) => response.json())
      .then((data: Technology[]) => {
        setTechnologies(data)
        setLoading(false)
      })
      .catch((error) => {
        console.error('Failed to load technologies:', error)
        setLoading(false)
      })
  }, [])

  const handleAdd = (technology: Technology) => {
    const alreadySelected = selectedTechnologies.some(
      (item) => item.id === technology.id,
    )

    if (alreadySelected) {
      toast.warning(`${technology.name} is already in your stack!`)
      return
    }

    const newStack = [...selectedTechnologies, technology]

    setSelectedTechnologies(newStack)

    toast.success(
      `${technology.name} added! ${newStack.length} technology selected.`,
    )
  }

  const handleRemove = (id: string) => {
    const technology = selectedTechnologies.find((item) => item.id === id)

    setSelectedTechnologies((current) =>
      current.filter((item) => item.id !== id),
    )

    if (technology) {
      toast.info(`${technology.name} removed from your stack.`)
    }
  }

  const handleRemoveAll = () => {
    setSelectedTechnologies([])

    toast.info('All technologies removed from your stack.')
  }

  if (loading) {
    return (
      <section
        id="technologies"
        className="mx-auto max-w-7xl px-6 py-20"
      >
        <div className="flex min-h-[200px] items-center justify-center">
          <p className="text-sm font-medium text-slate-500">
            Loading technologies...
          </p>
        </div>
      </section>
    )
  }

  return (
    <section
      id="technologies"
      className="mx-auto max-w-7xl px-6 py-20"
    >
      <div className="mb-8">
        <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
          Explore the{' '}
          <span className="gradient-text">Technologies</span>
        </h2>

        <p className="mt-2 text-sm text-slate-400">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      {/* Technologies + Your Stack */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_300px]">

        {/* Technology Cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {technologies.map((technology) => {
            const isSelected = selectedTechnologies.some(
              (item) => item.id === technology.id,
            )

            return (
              <TechnologyCard
                key={technology.id}
                technology={technology}
                isSelected={isSelected}
                onAdd={handleAdd}
              />
            )
          })}
        </div>

        {/* Your Stack */}
        <aside className="h-fit rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
          <h3 className="text-lg font-bold text-slate-900">
            Your Stack
          </h3>

          <p className="mt-1 text-xs text-slate-400">
            {selectedTechnologies.length === 0
              ? 'No technologies selected yet.'
              : `${selectedTechnologies.length} Technologies Selected`}
          </p>

          {/* Empty Stack */}
          {selectedTechnologies.length === 0 ? (
            <div className="mt-4 flex h-[100px] items-center justify-center rounded-xl border border-dashed border-slate-200">
              <p className="text-xs text-slate-400">
                Your stack is empty.
              </p>
            </div>
          ) : (
            <>
              {/* Selected Technologies */}
              <div className="mt-4 space-y-2">
                {selectedTechnologies.map((technology) => (
                  <div
                    key={technology.id}
                    className="flex items-center justify-between rounded-lg border border-slate-200 px-3 py-2.5"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={technology.icon}
                        alt={technology.name}
                        className="h-8 w-8 object-contain"
                      />

                      <div>
                        <p className="text-xs font-semibold text-slate-800">
                          {technology.name}
                        </p>

                        <p className="text-[9px] text-slate-400">
                          {technology.category}
                        </p>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleRemove(technology.id)}
                      className="text-xl font-light text-slate-400 transition hover:text-pink-500"
                      aria-label={`Remove ${technology.name}`}
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>

              {/* Remove All */}
              <button
                type="button"
                onClick={handleRemoveAll}
                className="mt-6 w-full rounded-lg border border-red-300 py-2.5 text-sm font-semibold text-red-500 transition hover:bg-red-50"
              >
                Remove All
              </button>
            </>
          )}
        </aside>
      </div>
    </section>
  )
}

export default TechnologySection