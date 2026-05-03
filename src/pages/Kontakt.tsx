import { useState, type FormEvent } from 'react'

const FORMSPREE_ID = 'REPLACE_ME'

export default function Kontakt() {
  const [status, setStatus] = useState<'idle' | 'sender' | 'sendt' | 'feil'>(
    'idle',
  )

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sender')
    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setStatus('sendt')
        form.reset()
      } else {
        setStatus('feil')
      }
    } catch {
      setStatus('feil')
    }
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-[#F5F5F5] mb-3">Kontakt</h1>
      <p className="text-[#A89A90] text-lg mb-10">
        Send oss en melding — vi svarer så fort vi kan.
      </p>

      {status === 'sendt' ? (
        <div className="bg-[#2D1509] border border-[#F0A500]/40 rounded-lg p-8 text-center">
          <p className="text-[#F0A500] text-xl font-semibold">
            Meldingen er sendt!
          </p>
          <p className="text-[#A89A90] mt-2">Vi tar kontakt så snart vi kan.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="navn"
              className="block text-sm font-medium text-[#F5F5F5] mb-2"
            >
              Navn
            </label>
            <input
              id="navn"
              name="navn"
              type="text"
              required
              className="w-full bg-[#2D1509] border border-[#C8102E]/30 focus:border-[#F0A500] rounded-lg px-4 py-3 text-[#F5F5F5] outline-none transition-colors"
            />
          </div>

          <div>
            <label
              htmlFor="epost"
              className="block text-sm font-medium text-[#F5F5F5] mb-2"
            >
              E-post
            </label>
            <input
              id="epost"
              name="epost"
              type="email"
              required
              className="w-full bg-[#2D1509] border border-[#C8102E]/30 focus:border-[#F0A500] rounded-lg px-4 py-3 text-[#F5F5F5] outline-none transition-colors"
            />
          </div>

          <div>
            <label
              htmlFor="melding"
              className="block text-sm font-medium text-[#F5F5F5] mb-2"
            >
              Melding
            </label>
            <textarea
              id="melding"
              name="melding"
              rows={5}
              required
              className="w-full bg-[#2D1509] border border-[#C8102E]/30 focus:border-[#F0A500] rounded-lg px-4 py-3 text-[#F5F5F5] outline-none transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={status === 'sender'}
            className="w-full bg-[#C8102E] hover:bg-[#9B0C23] disabled:opacity-60 text-white font-semibold py-3 rounded-lg transition-colors"
          >
            {status === 'sender' ? 'Sender...' : 'Send melding'}
          </button>

          {status === 'feil' && (
            <p className="text-[#C8102E] text-sm text-center">
              Noe gikk galt. Prøv igjen, eller send en e-post direkte.
            </p>
          )}

          {FORMSPREE_ID === 'REPLACE_ME' && (
            <p className="text-[#A89A90] text-xs text-center">
              ⚠️ Bytt ut <code className="text-[#F0A500]">FORMSPREE_ID</code> i{' '}
              <code className="text-[#F0A500]">src/pages/Kontakt.tsx</code> med
              din Formspree-ID for å aktivere skjemaet.
            </p>
          )}
        </form>
      )}
    </div>
  )
}
