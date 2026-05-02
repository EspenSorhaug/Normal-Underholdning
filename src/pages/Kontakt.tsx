import { useState, type FormEvent } from 'react'

export default function Kontakt() {
  const [sendt, setSendt] = useState(false)
  const [sender, setSender] = useState(false)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSender(true)
    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const res = await fetch('https://formspree.io/f/REPLACE_ME', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setSendt(true)
        form.reset()
      }
    } finally {
      setSender(false)
    }
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-[#F5F5F5] mb-2">Kontakt</h1>
      <p className="text-[#A89A90] text-lg mb-10">Send oss en melding — vi svarer så fort vi kan.</p>

      {sendt ? (
        <div className="bg-[#2D1509] border border-[#F0A500]/40 rounded-lg p-8 text-center">
          <p className="text-[#F0A500] text-xl font-semibold">Meldingen er sendt!</p>
          <p className="text-[#A89A90] mt-2">Vi tar kontakt snart.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="navn" className="block text-sm font-medium text-[#F5F5F5] mb-2">
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
            <label htmlFor="epost" className="block text-sm font-medium text-[#F5F5F5] mb-2">
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
            <label htmlFor="melding" className="block text-sm font-medium text-[#F5F5F5] mb-2">
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
            disabled={sender}
            className="w-full bg-[#C8102E] hover:bg-[#9B0C23] disabled:opacity-60 text-white font-semibold py-3 rounded-lg transition-colors"
          >
            {sender ? 'Sender...' : 'Send melding'}
          </button>
          <p className="text-[#A89A90] text-xs text-center">
            ⚠️ Husk å bytte ut <code className="text-[#F0A500]">REPLACE_ME</code> med din Formspree-ID i koden.
          </p>
        </form>
      )}
    </div>
  )
}
